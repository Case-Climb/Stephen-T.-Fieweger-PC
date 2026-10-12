// Converts the raw Higgsfield PNG exports into the WebP sizes the site uses.
// Usage: node scripts/process-images.mjs <raw-png-dir>
import sharp from "sharp";
import path from "node:path";
import fs from "node:fs";

const src = process.argv[2];
if (!src) {
  console.error("Usage: node scripts/process-images.mjs <raw-png-dir>");
  process.exit(1);
}
const out = path.resolve("public/images");
fs.mkdirSync(out, { recursive: true });

const sizes = {
  "hero-home": [1920, 1080],
  "home-welcome": [1200, 1400],
  "og-default": [1200, 630],
};
const HERO = [1920, 700];
const CARD = [800, 500]; // practice-area cards (*-card) and blog cards (blog-*)
const COUNTY = [800, 600]; // county-1 … county-7

function sizeFor(name) {
  if (sizes[name]) return sizes[name];
  if (name.endsWith("-card") || name.startsWith("blog-")) return CARD;
  if (name.startsWith("county-")) return COUNTY;
  return HERO;
}

for (const file of fs.readdirSync(src).filter((f) => f.endsWith(".png"))) {
  const name = path.basename(file, ".png");
  const [w, h] = sizeFor(name);
  const input = path.join(src, file);
  await sharp(input).resize(w, h, { fit: "cover", position: "attention" })
    .webp({ quality: 78 }).toFile(path.join(out, `${name}.webp`));
  if (name === "og-default") {
    await sharp(input).resize(w, h, { fit: "cover" }).jpeg({ quality: 82 })
      .toFile(path.join(out, `${name}.jpg`));
  }
  console.log("✓", name, `${w}x${h}`);
}
