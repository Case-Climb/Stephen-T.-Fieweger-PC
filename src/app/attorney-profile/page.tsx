import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import Flagged from "@/components/Flagged";
import Icon from "@/components/Icon";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Testimonial from "@/components/Testimonial";
import YouTube from "@/components/YouTube";
import { inTheNews } from "@/lib/blog";
import { practiceHref } from "@/lib/practice-areas";
import { attorneySchema, attorneyServiceSchema, pageMeta } from "@/lib/seo";
import { firm, fullAddress } from "@/lib/site";

export const metadata = pageMeta({
  title: "Davenport Lawyer Profile | Stephen T. Fieweger, P.C.",
  description:
    "Stephen T. Fieweger has practiced law in Iowa and Illinois since 1987, winning cases before the 7th and 8th Circuits and the Iowa Supreme Court. Learn more.",
  path: "/attorney-profile/",
});

const concentrations = [
  { label: "Civil trials and appeals", href: "/practice-areas/" },
  { label: "Personal injury", href: practiceHref("personal-injury") },
  { label: "Commercial and business litigation", href: practiceHref("commercial-litigation") },
  { label: "Employment law", href: practiceHref("general-employment-law") },
  { label: "Federal workers' employment law", href: practiceHref("federal-sector-employment-law") },
  { label: "Medical malpractice", href: practiceHref("medical-malpractice") },
  { label: "Family and Medical Leave Act (FMLA)", href: practiceHref("family-leave-medical-act") },
  { label: "Wage and hour", href: practiceHref("wage-and-hour-disputes") },
];

const record = [
  "Won cases before the United States Court of Appeals for the Seventh Circuit and the Eighth Circuit",
  "Successfully argued before the Illinois Supreme Court",
  "Won cases before the Iowa Supreme Court",
  "Won or successfully resolved cases involving employment discrimination, wrongful termination, and federal and state administrative agency employment issues",
  "Tried or resolved a number of Federal Section 1983 cases involving the deprivation of constitutional rights",
];

export default function AttorneyProfile() {
  return (
    <>
      <JsonLd data={[attorneySchema(), attorneyServiceSchema()]} />
      <PageHero
        eyebrow="Attorney Profile"
        title="Stephen T. Fieweger, Davenport Attorney"
        intro={<p>Trial and appellate attorney licensed in Iowa and Illinois. Practicing since 1987.</p>}
        image="attorney-hero"
        imageAlt="Wood-paneled law office overlooking the river, representing attorney Stephen T. Fieweger's Davenport practice"
        crumbs={[{ name: "Attorney Profile", path: "/attorney-profile/" }]}
      />

      <section className="section-light py-16 sm:py-24">
        <div className="container-site grid gap-12 lg:grid-cols-[340px_minmax(0,1fr)]">
          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              {/* Never generate a portrait: real photo supplied by the client. */}
              <div className="flex aspect-[4/5] flex-col items-center justify-center rounded-lg border-2 border-dashed border-gold/60 bg-white p-6 text-center">
                <Icon name="scale" className="h-12 w-12 text-gold-dark" />
                <p className="mt-4 font-serif text-xl text-ink">{firm.attorney}</p>
                <p className="mt-3 text-sm"><Flagged text="[PLACEHOLDER: attorney portrait, client upload]" /></p>
              </div>
            </Reveal>
            <Reveal delay={0.08} className="rounded-lg bg-navy p-6 text-light">
              <p className="font-serif text-xl">Contact Stephen</p>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex gap-3"><Icon name="phone" className="h-5 w-5 shrink-0 text-gold" /><a href={firm.phoneHref} className="hover:text-gold">{firm.phone}</a></li>
                <li className="flex gap-3"><Icon name="fax" className="h-5 w-5 shrink-0 text-gold" /><span>Fax {firm.fax}</span></li>
                <li className="flex gap-3"><Icon name="mail" className="h-5 w-5 shrink-0 text-gold" /><a href={`mailto:${firm.email}`} className="break-all hover:text-gold">{firm.email}</a></li>
                <li className="flex gap-3"><Icon name="pin" className="h-5 w-5 shrink-0 text-gold" /><span>{fullAddress}</span></li>
              </ul>
              <Link href="/contact/" className="btn-gold mt-6 w-full">Free Consultation</Link>
            </Reveal>
          </aside>

          <Reveal className="prose-site text-[1.05rem] text-ink/85">
            <h2 className="text-ink">About Stephen</h2>
            <p className="text-xl leading-relaxed text-ink">
              Stephen T. Fieweger has practiced law since 1987 and is licensed in both Iowa and Illinois. Clients
              come to him when the stakes are real: a career on the line, a serious injury, a business dispute that
              will not resolve itself. One client summed up his approach this way: &ldquo;He&rsquo;s hard-nosed, very
              intelligent and he is not intimidated.&rdquo;
            </p>
            <p>
              Steve represents individuals, businesses and non-profit organizations, and in employment matters he
              represents both employees and employers. That breadth gives him a practical understanding of how the
              other side thinks, which shapes how he prepares, negotiates and tries cases.
            </p>
            <p>
              His work has taken him well beyond the trial courts of the Quad Cities. He has won cases before the
              Seventh and Eighth Circuit Courts of Appeals, has successfully argued before the Illinois Supreme Court,
              and has won cases before the Iowa Supreme Court. He has won or successfully resolved cases involving
              employment discrimination, wrongful termination, and federal and state administrative agency
              employment issues, and has tried or resolved a number of Federal Section 1983 cases involving the
              deprivation of constitutional rights.
            </p>
            <p>
              The firm&rsquo;s approach is simple and consistent: we listen, we learn, we research, we strategize and
              then we go to work.
            </p>

            <h2 className="text-ink">Where he concentrates his practice</h2>
            <ul>
              {concentrations.map((c) => (
                <li key={c.label}><Link href={c.href}>{c.label}</Link></li>
              ))}
            </ul>

            <h2 className="text-ink">Education</h2>
            <ul>
              <li>Northern Illinois University College of Law</li>
              <li>University of Notre Dame, finance major</li>
            </ul>

            <h2 className="text-ink">Admissions</h2>
            <ul>
              <li>Iowa</li>
              <li>Illinois</li>
            </ul>
            <p><Flagged text="[PLACEHOLDER: bar numbers, court admissions]" /></p>

            <h2 id="awards" className="text-ink">Awards &amp; Recognition</h2>
            <p>Steve&rsquo;s record before trial and appellate courts includes the following:</p>
            <ul>
              {record.map((r) => <li key={r}>{r}</li>)}
            </ul>

            <h2 className="text-ink">A family of Quad Cities lawyers</h2>
            <p>
              Law runs in the Fieweger family. Steve&rsquo;s father, Peter, was a respected Quad Cities lawyer, and
              both of his brothers are also attorneys. Steve joined his father&rsquo;s firm and practiced there for more
              than 25 years, until shortly after his father&rsquo;s retirement in 2012. He carries forward the same
              commitment to preparation and plain dealing in his own practice today.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="video" className="section-dark py-16 sm:py-24">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Video</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Meet Stephen T. Fieweger</h2>
            <span className="gold-rule" aria-hidden />
            <p className="mt-6 text-lg leading-relaxed text-light/80">
              A short video introduction to Stephen T. Fieweger and his Davenport law practice.
            </p>
            <div className="mt-10"><Testimonial /></div>
          </Reveal>
          <Reveal delay={0.1}>
            <YouTube id={firm.youtubeId} title="Introduction to Stephen T. Fieweger, Davenport attorney" />
          </Reveal>
        </div>
      </section>

      <section className="section-light py-16 sm:py-24" aria-labelledby="news-heading">
        <Reveal className="container-site max-w-4xl">
          <p className="eyebrow !text-gold-dark">In the News</p>
          <h2 id="news-heading" className="mt-3 text-3xl sm:text-4xl">Notable news</h2>
          <span className="gold-rule" aria-hidden />
          <p className="mt-6 text-ink/80">
            Stephen Fieweger represented the plaintiff in a federal lawsuit alleging political discrimination in
            faculty hiring at the University of Iowa College of Law. The matter was covered by regional and national
            media and was the subject of a published Eighth Circuit opinion. The links below are provided for
            reference. <Flagged text="[ATTORNEY: approve wording and links]" />
          </p>
          <ul className="mt-8 divide-y divide-navy/10 rounded-lg border border-navy/10 bg-white">
            {inTheNews.map((n) => (
              <li key={n.href}>
                <a href={n.href} target="_blank" rel="noopener noreferrer" className="group flex items-start justify-between gap-4 p-5 hover:bg-cream">
                  <span>
                    <span className="block font-serif text-lg text-ink group-hover:text-gold-dark">{n.title}</span>
                    <span className="mt-1 block text-sm text-ink/65">{n.source} · {n.year}</span>
                  </span>
                  <Icon name="arrow" className="mt-1 h-5 w-5 shrink-0 -rotate-45 text-gold-dark" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <CtaBand title="Put an experienced trial attorney on your side." />
    </>
  );
}
