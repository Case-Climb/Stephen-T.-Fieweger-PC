import Image from "next/image";
import Link from "next/link";
import BlogGrid from "@/components/BlogGrid";
import CtaBand from "@/components/CtaBand";
import Flagged from "@/components/Flagged";
import Icon from "@/components/Icon";
import Newsletter from "@/components/Newsletter";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { categories, inTheNews, posts } from "@/lib/blog";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Iowa Employment Law Blog | Stephen T. Fieweger, P.C.",
  description:
    "Plain-English articles on Iowa and Illinois employment law, personal injury, medical malpractice and business disputes from Davenport attorney Steve Fieweger.",
  path: "/blog/",
});

export default function Blog() {
  const featured = posts.find((p) => p.featured) ?? posts[0];
  return (
    <>
      <PageHero
        eyebrow="News & Insights"
        title="Legal Insights for Iowa & Illinois"
        intro={<p>Practical, plain-English guidance on the legal issues that affect Quad Cities workers, families and businesses.</p>}
        image="blog-hero"
        imageAlt="Open notebook, pen and coffee on a desk, representing legal insights from a Davenport law firm"
        crumbs={[{ name: "Blog", path: "/blog/" }]}
        actions={false}
      />

      <section className="section-light py-16 sm:py-24">
        <div className="container-site">
          <Reveal>
            <p className="eyebrow !text-gold-dark">Featured</p>
            <Link href={`/blog/${featured.slug}/`} className="group mt-4 grid overflow-hidden rounded-lg border border-navy/10 bg-white transition hover:border-gold md:grid-cols-2">
              <div className="relative aspect-[16/10] md:aspect-auto">
                <Image src={`/images/${featured.image}.webp`} alt={featured.imageAlt} fill sizes="(min-width: 768px) 600px, 100vw" className="object-cover" />
              </div>
              <div className="p-8 sm:p-10">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">{featured.category}</span>
                <h2 className="mt-3 text-3xl text-ink group-hover:text-gold-dark">{featured.title}</h2>
                <p className="mt-4 leading-relaxed text-ink/80">{featured.excerpt}</p>
                <span className="mt-6 inline-flex items-center gap-2 font-semibold text-gold-dark">Read more <Icon name="arrow" className="h-4 w-4" /></span>
              </div>
            </Link>
          </Reveal>

          <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,1fr)_340px]">
            <Reveal>
              <h2 className="text-3xl">All articles</h2>
              <span className="gold-rule" aria-hidden />
              <div className="mt-8"><BlogGrid posts={posts} categories={categories} /></div>
            </Reveal>

            <aside className="space-y-8">
              <Reveal className="rounded-lg bg-navy p-6 text-light">
                <h2 className="text-2xl">Newsletter</h2>
                <p className="mt-2 text-sm text-light/80">Sign up for news about legal issues that affect you.</p>
                <div className="mt-5"><Newsletter /></div>
              </Reveal>
              <Reveal delay={0.06} className="rounded-lg border border-navy/10 bg-white p-6">
                <h2 className="text-2xl text-ink">In the News</h2>
                <ul className="mt-4 space-y-4">
                  {inTheNews.map((n) => (
                    <li key={n.href}>
                      <a href={n.href} target="_blank" rel="noopener noreferrer" className="group block">
                        <span className="block text-sm font-semibold text-ink group-hover:text-gold-dark">{n.title}</span>
                        <span className="block text-xs text-ink/65">{n.source} · {n.year}<span className="sr-only"> (opens in a new tab)</span></span>
                      </a>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs"><Flagged text="[ATTORNEY: approve news links and descriptions]" /></p>
              </Reveal>
              <Reveal delay={0.1} className="rounded-lg border border-navy/10 bg-white p-6 text-sm text-ink/80">
                Articles are general information, not legal advice. For advice about your situation,{" "}
                <Link href="/contact/" className="font-semibold text-gold-dark underline">contact us</Link> or see our{" "}
                <Link href="/practice-areas/" className="font-semibold text-gold-dark underline">practice areas</Link>.
              </Reveal>
            </aside>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
