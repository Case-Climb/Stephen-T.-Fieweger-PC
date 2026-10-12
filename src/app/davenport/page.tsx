import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import Flagged from "@/components/Flagged";
import Icon from "@/components/Icon";
import JsonLd from "@/components/JsonLd";
import MapEmbed from "@/components/MapEmbed";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { practiceAreas, practiceHref } from "@/lib/practice-areas";
import { legalServiceSchema, pageMeta } from "@/lib/seo";
import { firm, fullAddress } from "@/lib/site";

export const metadata = pageMeta({
  title: "Davenport Law Office | Stephen T. Fieweger, P.C.",
  description:
    "Visit our Davenport law office at 5157 Utica Ridge Road. Personal injury, employment, FMLA, wage, business and family law. Call (563) 424-1982 to schedule.",
  path: "/davenport/",
});

export default function Davenport() {
  return (
    <>
      <JsonLd data={legalServiceSchema({ hasMap: firm.mapsLink })} />
      <PageHero
        eyebrow="Davenport Office"
        title="Law Office in Davenport, Iowa"
        intro={<p>Our office on Utica Ridge Road serves clients across Davenport, Scott County and the Quad Cities.</p>}
        image="davenport-hero"
        imageAlt="Davenport riverfront promenade at evening with a bridge over the Mississippi River"
        crumbs={[{ name: "Davenport Office", path: "/davenport/" }]}
      />

      <section className="section-light py-16 sm:py-24">
        <div className="container-site grid gap-12 lg:grid-cols-[minmax(0,1fr)_380px]">
          <Reveal className="space-y-5 text-lg leading-relaxed text-ink/80">
            <p className="text-xl text-ink">
              Stephen T. Fieweger, P.C. is located at {fullAddress}, in north Davenport. From here, Stephen Fieweger
              represents individuals, businesses and non-profit organizations throughout Davenport and the
              surrounding Quad Cities communities in Iowa and Illinois.
            </p>
            <p>
              Davenport clients come to us for{" "}
              <Link href={practiceHref("personal-injury")} className="font-semibold text-gold-dark underline">personal injury</Link> and{" "}
              <Link href={practiceHref("medical-malpractice")} className="font-semibold text-gold-dark underline">medical malpractice</Link> claims,{" "}
              <Link href={practiceHref("general-employment-law")} className="font-semibold text-gold-dark underline">employment law</Link> matters for
              employees and employers,{" "}
              <Link href={practiceHref("federal-sector-employment-law")} className="font-semibold text-gold-dark underline">federal sector employment</Link>{" "}
              cases,{" "}
              <Link href={practiceHref("family-leave-medical-act")} className="font-semibold text-gold-dark underline">FMLA</Link> and{" "}
              <Link href={practiceHref("wage-and-hour-disputes")} className="font-semibold text-gold-dark underline">wage and hour</Link> disputes,{" "}
              <Link href={practiceHref("commercial-litigation")} className="font-semibold text-gold-dark underline">commercial litigation</Link> and{" "}
              <Link href={practiceHref("family-law")} className="font-semibold text-gold-dark underline">family law</Link>.
            </p>
            <p>
              Stephen Fieweger has practiced law in the Quad Cities since 1987 and is licensed in both Iowa and
              Illinois. Meetings are by appointment, so we can give your matter our full attention. Call ahead and
              we will set a time that works for you.
            </p>
            <h2 className="pt-6 text-3xl text-ink">Getting here</h2>
            <span className="gold-rule" aria-hidden />
            <p>
              The office is on Utica Ridge Road in north Davenport. <Flagged text="[PLACEHOLDER: parking and directions, e.g. nearest cross street, entrance and suite details]" />
            </p>
            <p>
              <a href={firm.mapsLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-gold-dark underline">
                Get directions in Google Maps <Icon name="arrow" className="h-4 w-4" />
              </a>
            </p>
            <h2 className="pt-6 text-3xl text-ink">Scott County courthouse</h2>
            <span className="gold-rule" aria-hidden />
            <p>
              Scott County state-court matters are heard at the Scott County Courthouse in downtown Davenport. Federal
              cases in this area are heard at the U.S. District Court for the Southern District of Iowa, which also
              sits in Davenport. <Flagged text="[ATTORNEY: verify courthouse names and addresses]" />
            </p>
          </Reveal>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <Reveal className="rounded-lg bg-navy p-6 text-light sm:p-7">
              <h2 className="font-serif text-2xl">Office details</h2>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex gap-3"><Icon name="pin" className="h-5 w-5 shrink-0 text-gold" /><span>{firm.legalName}<br />{firm.street}<br />{firm.city}, {firm.region} {firm.postalCode}</span></li>
                <li className="flex gap-3"><Icon name="phone" className="h-5 w-5 shrink-0 text-gold" /><a href={firm.phoneHref} className="hover:text-gold">{firm.phone}</a></li>
                <li className="flex gap-3"><Icon name="fax" className="h-5 w-5 shrink-0 text-gold" /><span>Fax {firm.fax}</span></li>
                <li className="flex gap-3"><Icon name="mail" className="h-5 w-5 shrink-0 text-gold" /><a href={`mailto:${firm.email}`} className="break-all hover:text-gold">{firm.email}</a></li>
                <li className="flex gap-3"><Icon name="clock2" className="h-5 w-5 shrink-0 text-gold" /><span>{firm.hours}<br /><Flagged text="[PLACEHOLDER: confirm hours]" /></span></li>
              </ul>
              <Link href="/contact/" className="btn-gold mt-6 w-full">Schedule a Free Consultation</Link>
            </Reveal>
            <Reveal delay={0.06} className="rounded-lg border border-navy/10 bg-white p-6">
              <p className="text-sm text-ink/80"><Flagged text="[PLACEHOLDER: replace hero with real office photos when the client uploads them]" /></p>
            </Reveal>
          </aside>
        </div>
      </section>

      <section className="section-dark py-16 sm:py-20">
        <div className="container-site">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl">Find our office</h2>
            <span className="gold-rule" aria-hidden />
          </Reveal>
          <Reveal className="mt-8">
            <MapEmbed className="h-[420px]" />
          </Reveal>
        </div>
      </section>

      <section className="section-light py-16 sm:py-20">
        <div className="container-site">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl">Practice areas offered in Davenport</h2>
            <span className="gold-rule" aria-hidden />
          </Reveal>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {practiceAreas.map((p) => (
              <li key={p.slug}>
                <Link href={practiceHref(p.slug)} className="card-light card-hover flex h-full items-center gap-3 p-4 font-semibold text-ink hover:text-gold-dark">
                  <Icon name={p.icon} className="h-6 w-6 shrink-0 text-gold-dark" /> {p.title}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-ink/80">
            Serving clients outside Davenport too. See all <Link href="/service-areas/" className="font-semibold text-gold-dark underline">service areas</Link>.
          </p>
        </div>
      </section>

      <CtaBand title="Meet with a Davenport attorney." />
    </>
  );
}
