import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { posts } from "@/lib/blog";
import { counties, countyHref } from "@/lib/counties";
import { practiceAreas, practiceHref } from "@/lib/practice-areas";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Sitemap | Stephen T. Fieweger, P.C.",
  description:
    "A complete list of pages on the Stephen T. Fieweger, P.C. website: attorney profile, practice areas, service areas, blog, contact and legal information.",
  path: "/sitemap/",
});

const groups: { title: string; links: { href: string; label: string }[] }[] = [
  {
    title: "Firm",
    links: [
      { href: "/", label: "Home" },
      { href: "/attorney-profile/", label: "Attorney Profile" },
      { href: "/attorney-profile/#awards", label: "Awards & Recognition" },
      { href: "/firm-profile/testimonials/", label: "Testimonials" },
      { href: "/davenport/", label: "Davenport Office" },
      { href: "/contact/", label: "Contact" },
    ],
  },
  {
    title: "Practice Areas",
    links: [{ href: "/practice-areas/", label: "All Practice Areas" }, ...practiceAreas.map((p) => ({ href: practiceHref(p.slug), label: p.title }))],
  },
  {
    title: "Service Areas",
    links: [{ href: "/service-areas/", label: "All Service Areas" }, ...counties.map((c) => ({ href: countyHref(c.id), label: `${c.name}, ${c.stateAbbr}` }))],
  },
  {
    title: "Blog",
    links: [{ href: "/blog/", label: "Legal Insights" }, ...posts.map((p) => ({ href: `/blog/${p.slug}/`, label: p.title }))],
  },
  {
    title: "Legal",
    links: [
      { href: "/contact/disclaimer/", label: "Disclaimer" },
      { href: "/privacy-policy/", label: "Privacy Policy" },
      { href: "/sitemap.xml", label: "XML Sitemap" },
    ],
  },
];

export default function HtmlSitemap() {
  return (
    <LegalPage title="Sitemap" image="service-areas-hero" imageAlt="Mississippi River valley at dawn" crumbs={[{ name: "Sitemap", path: "/sitemap/" }]}>
      <div className="grid gap-10 sm:grid-cols-2">
        {groups.map((g) => (
          <section key={g.title} aria-labelledby={`sm-${g.title}`}>
            <h2 id={`sm-${g.title}`} className="!mt-0">{g.title}</h2>
            <ul>
              {g.links.map((l) => (
                <li key={l.href}>
                  {l.href.endsWith(".xml") ? <a href={l.href}>{l.label}</a> : <Link href={l.href}>{l.label}</Link>}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </LegalPage>
  );
}
