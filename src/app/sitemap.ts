import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { practiceAreas, practiceHref } from "@/lib/practice-areas";

// All 19 indexable pages. Blog article stubs are noindex until phase two and are
// added here when the full posts are published.
export const sitePaths: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/attorney-profile/", priority: 0.9 },
  { path: "/practice-areas/", priority: 0.9 },
  ...practiceAreas.map((p) => ({ path: practiceHref(p.slug), priority: 0.9 })),
  { path: "/service-areas/", priority: 0.8 },
  { path: "/davenport/", priority: 0.8 },
  { path: "/firm-profile/testimonials/", priority: 0.6 },
  { path: "/blog/", priority: 0.7 },
  { path: "/contact/", priority: 0.8 },
  { path: "/contact/disclaimer/", priority: 0.3 },
  { path: "/privacy-policy/", priority: 0.3 },
  { path: "/sitemap/", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-12");
  return sitePaths.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: path === "/blog/" ? "weekly" : "monthly",
    priority,
  }));
}
