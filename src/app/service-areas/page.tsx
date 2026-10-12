import Image from "next/image";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import Flagged from "@/components/Flagged";
import Icon from "@/components/Icon";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { counties } from "@/lib/counties";
import { getPractice, practiceHref } from "@/lib/practice-areas";
import { legalServiceSchema, pageMeta } from "@/lib/seo";
import { firm } from "@/lib/site";

export const metadata = pageMeta({
  title: "Quad Cities Law Firm | Stephen T. Fieweger, P.C.",
  description:
    "Serving Scott, Muscatine and Clinton counties in Iowa and Rock Island, Henry, Mercer and Whiteside counties in Illinois from our Davenport law office.",
  path: "/service-areas/",
});

export default function ServiceAreas() {
  return (
    <>
      <JsonLd data={legalServiceSchema()} />
      <PageHero
        eyebrow="Service Areas"
        title="Serving the Quad Cities & Surrounding Counties"
        intro={<p>Seven counties, two states, one attorney licensed in both.</p>}
        image="service-areas-hero"
        imageAlt="Aerial view of the Mississippi River valley with river towns and farmland in the Quad Cities region"
        crumbs={[{ name: "Service Areas", path: "/service-areas/" }]}
      />

      <section className="section-light py-16 sm:py-24">
        <div className="container-site grid gap-12 lg:grid-cols-[minmax(0,1fr)_340px]">
          <Reveal className="space-y-5 text-lg leading-relaxed text-ink/80">
            <p className="text-xl text-ink">
              The Mississippi River divides the Quad Cities between two states, but daily life does not stop at the
              bridges. People live in Iowa and work in Illinois, businesses serve customers on both sides, and a
              single car crash or contract dispute can involve parties from each state.
            </p>
            <p>
              That is why it matters that Stephen T. Fieweger is licensed in both Iowa and Illinois. From our office
              in Davenport, we represent clients in Scott, Muscatine and Clinton counties in Iowa, and in Rock
              Island, Henry, Mercer and Whiteside counties in Illinois. We understand how the two states&rsquo; rules
              differ on deadlines, fault, employment protections and family law, and we can tell you early which
              rules are likely to apply to you.
            </p>
            <p>
              Whether your matter belongs in a county courthouse, a state or federal administrative agency, or a
              federal court, you will work directly with an attorney who has practiced in this region since 1987.
              Find your county below to learn more.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <nav aria-label="Counties on this page" className="rounded-lg bg-navy p-6 text-light">
              <p className="text-xl font-semibold">Jump to a county</p>
              <ul className="mt-4 space-y-2">
                {counties.map((c) => (
                  <li key={c.id}>
                    <a href={`#${c.id}`} className="flex items-center justify-between rounded px-2 py-1.5 text-sm hover:bg-white/5 hover:text-gold">
                      {c.name}, {c.state} <Icon name="arrow" className="h-4 w-4 text-gold" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </Reveal>
        </div>
      </section>

      {counties.map((c, i) => {
        const dark = i % 2 === 0;
        return (
          <section key={c.id} id={c.id} aria-labelledby={`${c.id}-h`} className={`${dark ? "section-dark" : "section-light"} py-16 sm:py-20`}>
            <div className={`container-site grid items-start gap-10 lg:grid-cols-2 ${dark ? "" : "lg:[&>*:first-child]:order-2"}`}>
              <Reveal>
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image src={`/images/${c.image}.webp`} alt={c.imageAlt} fill sizes="(min-width: 1024px) 560px, 100vw" className="object-cover" />
                </div>
              </Reveal>
              <Reveal delay={0.06}>
                <p className={`eyebrow ${dark ? "" : "!text-gold-dark"}`}>{c.state}</p>
                <h2 id={`${c.id}-h`} className="mt-2 text-3xl sm:text-4xl">{c.name}, {c.stateAbbr}</h2>
                <span className="gold-rule" aria-hidden />
                <div className={`mt-6 space-y-4 leading-relaxed ${dark ? "text-light/80" : "text-ink/80"}`}>
                  {c.copy.map((t, j) => <p key={j}>{t}</p>)}
                </div>
                <dl className={`mt-6 grid gap-4 text-sm sm:grid-cols-2 ${dark ? "text-light/85" : "text-ink/85"}`}>
                  <div>
                    <dt className="font-semibold">Principal towns</dt>
                    <dd className="mt-1">{c.towns.join(", ")}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold">County seat &amp; courthouse</dt>
                    <dd className="mt-1">{c.courthouse} <Flagged text="[ATTORNEY: verify]" /></dd>
                  </div>
                </dl>
                <p className={`mt-6 text-sm font-semibold ${dark ? "" : "text-ink"}`}>Related practice areas</p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {c.related.map((slug) => (
                    <li key={slug}>
                      <Link
                        href={practiceHref(slug)}
                        className={`inline-flex min-h-[40px] items-center rounded-full border px-4 text-sm transition ${
                          dark ? "border-gold/40 text-light hover:bg-gold hover:text-navy" : "border-navy/20 bg-white text-ink hover:bg-navy hover:text-light"
                        }`}
                      >
                        {getPractice(slug)!.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/contact/" className="btn-gold">Free Consultation</Link>
                  <a href={firm.phoneHref} className={dark ? "btn-outline" : "btn-outline-dark"}>Call {firm.phone}</a>
                </div>
              </Reveal>
            </div>
          </section>
        );
      })}

      <section className="section-deep py-12">
        <Reveal className="container-site flex flex-wrap items-center justify-between gap-6">
          <p className="max-w-2xl text-light/85">
            <strong className="text-light">Licensed in Iowa and Illinois.</strong> Stephen T. Fieweger is admitted to
            practice in both states, so matters that cross the river can stay with one attorney.
          </p>
          <Link href="/davenport/" className="btn-outline">Visit our Davenport office</Link>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
