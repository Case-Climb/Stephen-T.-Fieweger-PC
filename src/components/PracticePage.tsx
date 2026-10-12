import Link from "next/link";
import type { PracticeArea } from "@/lib/practice-areas";
import { getPractice, practiceHref } from "@/lib/practice-areas";
import { firm } from "@/lib/site";
import ContactForm from "./ContactForm";
import CtaBand from "./CtaBand";
import Faq from "./Faq";
import Flagged from "./Flagged";
import PageHero from "./PageHero";
import RelatedLinks, { type RelatedLink } from "./RelatedLinks";
import Reveal from "./Reveal";

export default function PracticePage({ p }: { p: PracticeArea }) {
  const related: RelatedLink[] = [
    ...p.related.map((slug) => {
      const r = getPractice(slug)!;
      return { href: practiceHref(slug), label: r.title, desc: r.short };
    }),
    { href: "/practice-areas/", label: "All Practice Areas", desc: "See every area where we concentrate our practice." },
    { href: "/attorney-profile/", label: "About Stephen T. Fieweger", desc: "Practicing in Iowa and Illinois since 1987." },
    { href: "/contact/", label: "Contact Us", desc: "Schedule a free consultation in Davenport." },
  ];

  return (
    <>
      <PageHero
        eyebrow="Practice Area"
        title={p.h1}
        intro={<p>{p.promise}</p>}
        image={p.image}
        imageAlt={p.imageAlt}
        crumbs={[
          { name: "Practice Areas", path: "/practice-areas/" },
          { name: p.title, path: practiceHref(p.slug) },
        ]}
      />

      {p.notice && (
        <div className="bg-amber-100 text-black">
          <p className="container-site py-3 text-sm font-semibold"><Flagged text={p.notice} /></p>
        </div>
      )}

      <section className="section-light py-16 sm:py-24">
        <div className="container-site grid gap-12 lg:grid-cols-[minmax(0,1fr)_380px]">
          <Reveal className="prose-site text-[1.05rem] text-ink/85">
            {p.intro.map((t, i) => (
              <p key={i} className={i === 0 ? "text-xl leading-relaxed text-ink" : undefined}><Flagged text={t} /></p>
            ))}
            {p.blocks.map((b) => (
              <div key={b.heading}>
                <h2 className="text-ink">{b.heading}</h2>
                {b.paragraphs?.map((t, i) => <p key={i}><Flagged text={t} /></p>)}
                {b.bullets && (
                  <ul>
                    {b.bullets.map((t) => <li key={t}><Flagged text={t} /></li>)}
                  </ul>
                )}
              </div>
            ))}
          </Reveal>

          <aside aria-label="Request a consultation" className="lg:sticky lg:top-28 lg:self-start">
            <Reveal delay={0.1} className="rounded-lg border border-gold/30 bg-navy p-6 text-light shadow-xl sm:p-7">
              <p className="eyebrow">Free Consultation</p>
              <p className="mt-2 font-serif text-2xl">Tell us what happened.</p>
              <p className="mt-2 text-sm text-light/75">
                Or call <a href={firm.phoneHref} className="font-semibold text-gold hover:underline">{firm.phone}</a>
              </p>
              <div className="mt-6">
                <ContactForm source={`${p.title} page`} compact />
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      <section className="section-dark py-16 sm:py-24">
        <div className="container-site">
          <Reveal>
            <p className="eyebrow">Our Process</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">{p.processTitle}</h2>
            <span className="gold-rule" aria-hidden />
          </Reveal>
          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {p.process.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 0.08} className="card relative h-full">
                <span className="font-serif text-5xl text-gold/40" aria-hidden>{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-light/75">{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-light py-16 sm:py-24">
        <Reveal className="container-site max-w-4xl">
          <Faq faqs={p.faqs} title={`${p.title}: Frequently Asked Questions`} />
          <p className="mt-6 text-sm text-ink/70">
            Have a question that isn&rsquo;t answered here?{" "}
            <Link href="/contact/" className="font-semibold text-gold-dark underline">Contact us</Link> or call{" "}
            <a href={firm.phoneHref} className="font-semibold text-gold-dark underline">{firm.phone}</a>.
          </p>
        </Reveal>
      </section>

      <section className="section-deep py-16 sm:py-24">
        <Reveal className="container-site">
          <RelatedLinks links={related} title="Related practice areas & resources" />
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
