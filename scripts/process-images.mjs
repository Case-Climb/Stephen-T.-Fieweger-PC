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
  "county-1": [800, 600],
  "county-2": [800, 600],
  "county-3": [800, 600],
  "county-4": [800, 600],
};
const HERO = [1920, 700];
// Inner-page heroes that also get an 800x500 card crop (practice cards, blog cards).
const withCard = [
  "practice-hub", "pi-hero", "medmal-hero", "employment-hero", "federal-hero",
  "fmla-hero", "wage-hero", "commercial-hero", "family-hero", "blog-hero",
  "service-areas-hero", "attorney-hero",
];

for (const file of fs.readdirSync(src).filter((f) => f.endsWith(".png"))) {
  const name = path.basename(file, ".png");
  const [w, h] = sizes[name] ?? HERO;
  const input = path.join(src, file);
  await sharp(input).resize(w, h, { fit: "cover", position: "attention" })
    .webp({ quality: 78 }).toFile(path.join(out, `${name}.webp`));
  if (name === "og-default") {
    await sharp(input).resize(w, h, { fit: "cover" }).jpeg({ quality: 82 })
      .toFile(path.join(out, `${name}.jpg`));
  }
  if (withCard.includes(name)) {
    await sharp(input).resize(800, 500, { fit: "cover", position: "attention" })
      .webp({ quality: 74 }).toFile(path.join(out, `${name}-card.webp`));
  }
  console.log("✓", name, `${w}x${h}`);
}
