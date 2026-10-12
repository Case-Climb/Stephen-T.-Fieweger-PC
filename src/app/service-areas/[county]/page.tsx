import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import Flagged from "@/components/Flagged";
import Icon from "@/components/Icon";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import PracticeCard from "@/components/PracticeCard";
import RelatedLinks, { type RelatedLink } from "@/components/RelatedLinks";
import Reveal from "@/components/Reveal";
import { counties, countyHref, getCounty, type County } from "@/lib/counties";
import { practiceAreas } from "@/lib/practice-areas";
import type { Faq as FaqItem } from "@/lib/practice-areas";
import { ORG_ID, pageMeta } from "@/lib/seo";
import { SITE_URL, firm, fullAddress } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return counties.map((c) => ({ county: c.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ county: string }> }) {
  const c = getCounty((await params).county);
  if (!c) return {};
  return pageMeta({
    title: `${c.name}, ${c.stateAbbr} Lawyer | Stephen T. Fieweger, P.C.`,
    description: c.metaDescription,
    path: countyHref(c.id),
  });
}

const list = (items: string[]) =>
  items.length < 2 ? items.join("") : `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;

function countyFaqs(c: County): FaqItem[] {
  const other = c.state === "Iowa" ? "Illinois" : "Iowa";
  return [
    {
      q: `Do you represent clients in ${c.name}, ${c.state}?`,
      a: `Yes. We represent individuals, businesses and non-profit organizations throughout ${c.name}, including ${list(c.towns)}. Stephen T. Fieweger is licensed in ${c.state} and has practiced in the Quad Cities region since 1987.`,
    },
    {
      q: `Where would a ${c.name} case be heard?`,
      a: `State-court matters from ${c.name} are generally heard at the ${c.courthouse}. [ATTORNEY: verify] Some claims, such as federal employment and civil rights cases, are filed in federal court or start with a government agency instead. We will tell you early where your case belongs.`,
    },
    {
      q: "Do I have to come to your Davenport office?",
      a: `Not for the first conversation. Many clients start with a phone call to ${firm.phone}. When it is time to review documents, we meet by appointment at our office at ${fullAddress}, and we can discuss other arrangements when travel is difficult.`,
    },
    {
      q: `What if my case involves ${other} too?`,
      a: `That is common in the Quad Cities. Which state's law applies depends on where the events happened, where the parties are and the type of claim. Because Stephen T. Fieweger is licensed in both Iowa and Illinois, your case can stay with one attorney either way.`,
    },
  ];
}

export default async function CountyPage({ params }: { params: Promise<{ county: string }> }) {
  const c = getCounty((await params).county);
  if (!c) notFound();

  const featured = c.related.map((slug) => practiceAreas.find((p) => p.slug === slug)!);
  const others = practiceAreas.filter((p) => !c.related.includes(p.slug));
  const sameState = counties.filter((o) => o.state === c.state && o.id !== c.id);
  const related: RelatedLink[] = [
    ...sameState.map((o) => ({ href: countyHref(o.id), label: `${o.name}, ${o.stateAbbr}`, desc: list(o.towns.slice(0, 3)) })),
    { href: "/service-areas/", label: "All Service Areas", desc: "Seven counties in Iowa and Illinois." },
    { href: "/davenport/", label: "Davenport Office", desc: fullAddress },
    { href: "/contact/", label: "Contact Us", desc: "Schedule a free consultation." },
  ];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": `${SITE_URL}${countyHref(c.id)}#service`,
          name: `Legal services in ${c.name}, ${c.state}`,
          serviceType: "Legal services",
          url: `${SITE_URL}${countyHref(c.id)}`,
          provider: { "@id": ORG_ID },
          areaServed: { "@type": "AdministrativeArea", name: `${c.name}, ${c.state}` },
        }}
      />
      <PageHero
        eyebrow={`Service Area · ${c.state}`}
        title={`${c.name}, ${c.state} Attorney`}
        intro={<p>{c.promise}</p>}
        image={`${c.image}-hero`}
        imageAlt={c.imageAlt}
        crumbs={[
          { name: "Service Areas", path: "/service-areas/" },
          { name: `${c.name}, ${c.stateAbbr}`, path: countyHref(c.id) },
        ]}
      />

      <section className="section-light py-16 sm:py-24">
        <div className="container-site grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px]">
          <Reveal className="space-y-5 text-lg leading-relaxed text-ink/80">
            <h2 className="text-3xl text-ink sm:text-4xl">Legal help in {c.name}</h2>
            <span className="gold-rule" aria-hidden />
            {c.copy.map((t, i) => (
              <p key={i} className={i === 0 ? "pt-2 text-xl text-ink" : undefined}>{t}</p>
            ))}
          </Reveal>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <Reveal className="overflow-hidden rounded-lg bg-navy text-light">
              <div className="relative aspect-[4/3]">
                <Image src={`/images/${c.image}.webp`} alt={c.imageAlt} fill sizes="360px" className="object-cover" />
              </div>
              <dl className="space-y-4 p-6 text-sm">
                <div>
                  <dt className="font-semibold text-gold">Communities</dt>
                  <dd className="mt-1 text-light/85">{c.towns.join(", ")}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gold">County seat &amp; courthouse</dt>
                  <dd className="mt-1 text-light/85">{c.courthouse} <Flagged text="[ATTORNEY: verify]" /></dd>
                </div>
                <div>
                  <dt className="font-semibold text-gold">Our office</dt>
                  <dd className="mt-1 text-light/85">{fullAddress}</dd>
                </div>
              </dl>
              <div className="grid gap-3 px-6 pb-6">
                <Link href="/contact/" className="btn-gold">Free Consultation</Link>
                <a href={firm.phoneHref} className="btn-outline"><Icon name="phone" className="h-4 w-4" /> Call {firm.phone}</a>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      <section className="section-dark py-16 sm:py-24">
        <div className="container-site">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Practice Areas</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">What we handle for {c.name} clients</h2>
            <span className="gold-rule" aria-hidden />
            <p className="mt-6 text-lg text-light/80">
              The issues that come up most often for {c.name} residents and businesses, followed by everything
              else we handle.
            </p>
          </Reveal>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p, i) => (
              <Reveal as="li" key={p.slug} delay={i * 0.06}>
                <PracticeCard p={p} />
              </Reveal>
            ))}
          </ul>
          <ul className="mt-8 flex flex-wrap gap-2">
            {others.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/practice-areas/${p.slug}/`}
                  className="inline-flex min-h-[40px] items-center rounded-full border border-gold/40 px-4 text-sm text-light transition hover:bg-gold hover:text-navy"
                >
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-light py-16 sm:py-24">
        <Reveal className="container-site max-w-4xl">
          <Faq faqs={countyFaqs(c)} title={`${c.name}: Frequently Asked Questions`} />
        </Reveal>
      </section>

      <section className="section-deep py-16 sm:py-24">
        <Reveal className="container-site">
          <RelatedLinks links={related} title={`More ${c.state} service areas`} />
        </Reveal>
      </section>

      <CtaBand title={`Talk to an attorney about your ${c.name} case.`} />
    </>
  );
}
