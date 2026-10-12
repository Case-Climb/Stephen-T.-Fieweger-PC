// Pre-launch QA against a running server: `npm run build && npm start`, then `npm run qa`.
// Checks every page for status, one H1, unique title/description (with length limits),
// canonical + OG tags, valid JSON-LD, alt text, banned advertising words, and that every
// internal link and image resolves. Also verifies the legacy 301 redirects.
const BASE = process.env.QA_BASE || "http://localhost:3000";
const SITE = "https://www.fiewegerlaw.com";

const pages = [
  "/", "/attorney-profile/", "/practice-areas/",
  "/practice-areas/personal-injury/", "/practice-areas/medical-malpractice/",
  "/practice-areas/general-employment-law/", "/practice-areas/federal-sector-employment-law/",
  "/practice-areas/family-leave-medical-act/", "/practice-areas/wage-and-hour-disputes/",
  "/practice-areas/commercial-litigation/", "/practice-areas/family-law/",
  "/service-areas/", "/davenport/", "/firm-profile/testimonials/", "/blog/", "/contact/",
  "/contact/disclaimer/", "/privacy-policy/", "/sitemap/",
];

const redirects = {
  "/firm-profile/": "/attorney-profile/",
  "/firm-profile/awards-and-recognition/": "/attorney-profile/#awards",
  "/media-resources/": "/blog/",
  "/media-resources/news-and-events/": "/blog/",
  "/media-resources/news-and-events/some-old-item/": "/blog/",
  "/media-resources/video-gallery/": "/attorney-profile/#video",
  "/media-resources/client-resources/": "/practice-areas/",
  "/firm-profile": "/firm-profile/",
};

// "expert" is allowed only in the medical sense (medical expert / expert review).
// "best interests of the child" is the legal custody standard and is allowed.
const BANNED = /\b(specialists?|speciali[sz]es|speciali[sz]ing|top|guaranteed)\b|\bbest\b(?! interests)|\bexperts?\b(?!'s review| s review| review)/gi;

const errors = [];
const warn = [];
const fail = (page, msg) => errors.push(`${page}: ${msg}`);

const strip = (html) =>
  html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z#0-9]+;/gi, " ")
    .replace(/\s+/g, " ");
const attr = (tag, name) => tag.match(new RegExp(`\\s${name}="([^"]*)"`))?.[1];

const seenTitles = new Map();
const seenDescs = new Map();
const links = new Set();
const assets = new Set();

async function get(path) {
  return fetch(BASE + path, { redirect: "manual" });
}

const blog = [];
for (const page of pages) {
  const res = await get(page);
  if (res.status !== 200) { fail(page, `status ${res.status}`); continue; }
  const html = await res.text();

  const h1s = html.match(/<h1[\s>]/g) ?? [];
  if (h1s.length !== 1) fail(page, `${h1s.length} <h1> elements`);

  const title = html.match(/<title>([^<]*)<\/title>/)?.[1]?.replace(/&amp;/g, "&") ?? "";
  if (!title) fail(page, "missing <title>");
  if (title.length >= 60) fail(page, `title ${title.length} chars: ${title}`);
  if (!title.endsWith("| Stephen T. Fieweger, P.C.")) warn.push(`${page}: title format: ${title}`);
  if (seenTitles.has(title)) fail(page, `duplicate title with ${seenTitles.get(title)}`);
  seenTitles.set(title, page);

  const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1]?.replace(/&amp;/g, "&") ?? "";
  if (desc.length < 150 || desc.length > 160) fail(page, `description ${desc.length} chars`);
  if (seenDescs.has(desc)) fail(page, `duplicate description with ${seenDescs.get(desc)}`);
  seenDescs.set(desc, page);

  const canonical = html.match(/<link rel="canonical" href="([^"]*)"/)?.[1];
  if (canonical !== SITE + page) fail(page, `canonical ${canonical}`);
  for (const p of ['property="og:title"', 'property="og:description"', 'property="og:image"', 'property="og:url"', 'name="twitter:card"']) {
    if (!html.includes(p)) fail(page, `missing ${p}`);
  }

  const ld = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => m[1]);
  const types = [];
  for (const j of ld) {
    try {
      const t = JSON.parse(j)["@type"];
      types.push(...[].concat(t));
    } catch (e) { fail(page, `invalid JSON-LD: ${e.message}`); }
  }
  if (page !== "/" && !types.includes("BreadcrumbList")) fail(page, "no BreadcrumbList schema");
  if (page.startsWith("/practice-areas/") && page !== "/practice-areas/" && !types.includes("FAQPage")) fail(page, "no FAQPage schema");

  for (const img of html.match(/<img\b[^>]*>/g) ?? []) {
    const alt = attr(img, "alt");
    if (alt === undefined) fail(page, `img without alt: ${img.slice(0, 80)}`);
    const src = attr(img, "src");
    if (src?.startsWith("/")) assets.add(src.replace(/&amp;/g, "&"));
  }

  const text = strip(html.replace(/<head>[\s\S]*?<\/head>/, ""));
  for (const m of text.matchAll(BANNED)) {
    const ctx = text.slice(Math.max(0, m.index - 50), m.index + 50);
    fail(page, `banned word "${m[0]}": …${ctx}…`);
  }
  // "Expert" in headings/titles is never allowed.
  if (/expert/i.test(title + desc)) fail(page, "'expert' in title/description");

  for (const m of html.matchAll(/<a\b[^>]*href="([^"]+)"/g)) {
    const href = m[1].replace(/&amp;/g, "&");
    if (href.startsWith("/")) links.add(href);
    if (href.startsWith("/blog/") && href !== "/blog/") blog.push(href);
  }
}

// Every internal link resolves (fragments must exist on the target page).
const htmlCache = new Map();
for (const href of links) {
  const [path, frag] = href.split("#");
  let res = await get(path || "/");
  if (res.status === 308 || res.status === 301) {
    fail("link", `${href} redirects (${res.status}) to ${res.headers.get("location")}`);
    continue;
  }
  if (res.status !== 200) { fail("link", `${href} -> ${res.status}`); continue; }
  if (frag) {
    if (!htmlCache.has(path)) htmlCache.set(path, await res.text());
    if (!htmlCache.get(path).includes(`id="${frag}"`)) fail("link", `${href}: missing #${frag}`);
  }
}
for (const src of assets) {
  const res = await get(src);
  if (res.status !== 200) fail("asset", `${src} -> ${res.status}`);
}

for (const [from, to] of Object.entries(redirects)) {
  const res = await get(from);
  const loc = res.headers.get("location")?.replace(BASE, "");
  if (![301, 308].includes(res.status) || loc !== to) fail("redirect", `${from} -> ${res.status} ${loc} (expected ${to})`);
  if (from !== "/firm-profile" && res.status !== 301) fail("redirect", `${from} is ${res.status}, expected 301`);
}

for (const p of ["/robots.txt", "/sitemap.xml"]) {
  const res = await get(p);
  if (res.status !== 200) fail(p, `status ${res.status}`);
  if (p === "/sitemap.xml") {
    const xml = await res.text();
    const n = (xml.match(/<loc>/g) ?? []).length;
    if (n < 19) fail(p, `only ${n} URLs`);
  }
}

console.log(`Checked ${pages.length} pages, ${links.size} internal links, ${assets.size} images, ${Object.keys(redirects).length} redirects.`);
if (warn.length) console.log("\nWarnings:\n" + warn.join("\n"));
if (errors.length) {
  console.log(`\n${errors.length} problem(s):\n` + errors.join("\n"));
  process.exit(1);
}
console.log("All checks passed.");
