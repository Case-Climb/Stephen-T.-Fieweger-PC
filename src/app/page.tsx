import Image from "next/image";
import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import ContactForm from "@/components/ContactForm";
import Flagged from "@/components/Flagged";
import Icon from "@/components/Icon";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import PracticeCard from "@/components/PracticeCard";
import Reveal from "@/components/Reveal";
import Testimonial from "@/components/Testimonial";
import { posts } from "@/lib/blog";
import { counties } from "@/lib/counties";
import { practiceAreas, practiceHref } from "@/lib/practice-areas";
import { legalServiceSchema, organizationSchema, pageMeta, websiteSchema } from "@/lib/seo";
import { firm, fullAddress } from "@/lib/site";

export const metadata = pageMeta({
  title: "Davenport Attorney | Stephen T. Fieweger, P.C.",
  description:
    "Davenport, Iowa trial and employment attorney serving the Quad Cities since 1987. Personal injury, employment, FMLA and business litigation. Free consultation.",
  path: "/",
});

const trust = [
  { k: "Since 1987", v: "Practicing since 1987" },
  { k: "IA & IL", v: "Licensed in Iowa & Illinois" },
  { k: "7th & 8th Cir.", v: "Won cases before the 7th & 8th Circuit Courts of Appeals" },
  { k: "Ill. Sup. Ct.", v: "Argued before the Illinois Supreme Court" },
];

const approach = [
  { title: "Listen & Learn", text: "Every case starts with your story. We take the time to understand what happened, what you need and what is at stake for you, your family or your business." },
  { title: "Research & Strategize", text: "We study the facts and the law in both Iowa and Illinois, look at how courts are likely to see your situation, and build a plan around a realistic goal." },
  { title: "Go to Work", text: "Then we act: negotiating from strength, filing when it is time, and trying the case when that is what it takes. You will know where things stand at every step." },
];

export default function Home() {
  return (
    <>
      <JsonLd data={[legalServiceSchema(), websiteSchema(), organizationSchema()]} />

      <PageHero
        size="home"
        eyebrow="Stephen T. Fieweger, P.C. · Davenport, Iowa"
        title="Davenport, Iowa Trial & Employment Attorney"
        intro={
          <p>
            Experienced, results-focused representation for individuals, businesses and non-profits across the Quad
            Cities. Practicing since 1987.
          </p>
        }
        image="hero-home"
        imageAlt="Mississippi River and bridge at blue hour near Davenport, Iowa, in the Quad Cities"
      />

      {/* Trust bar */}
      <section aria-label="Experience at a glance" className="border-y border-gold/25 bg-navy-surface">
        <ul className="container-site grid grid-cols-2 divide-gold/15 lg:grid-cols-4 lg:divide-x">
          {trust.map((t, i) => (
            <Reveal as="li" key={t.v} delay={i * 0.06} className="px-2 py-8 text-center sm:px-6">
              <span className="block font-serif text-2xl text-gold sm:text-3xl" aria-hidden>{t.k}</span>
              <span className="mt-2 block text-sm leading-snug text-light/85">{t.v}</span>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* Welcome */}
      <section className="section-light py-20 sm:py-28">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="eyebrow !text-gold-dark">Welcome</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Serious representation for the Quad Cities</h2>
            <span className="gold-rule" aria-hidden />
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink/80">
              <p>
                Legal problems rarely arrive at a convenient time. When one lands on your desk or your kitchen table,
                you need an attorney who gives you an accurate picture of where you stand and then works hard to
                improve it.
              </p>
              <p>
                That is how Stephen T. Fieweger has practiced in Davenport and across the Quad Cities since 1987. He
                uses the law to find workable solutions, whether that means a fair settlement, a business decision
                made with eyes open, or a case taken all the way through trial and appeal.
              </p>
              <p>
                We represent individuals, businesses and non-profit organizations in Iowa and Illinois, and we
                represent both employees and employers.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="relative">
            <div className="relative aspect-[6/7] overflow-hidden rounded-lg">
              <Image
                src="/images/home-welcome.webp"
                alt="Law books and a brass desk lamp on a walnut desk in a Davenport law office"
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="card relative -mt-24 ml-auto mr-4 max-w-sm bg-navy text-light shadow-2xl sm:mr-8">
              <div className="flex items-center gap-4">
                <div className="flex h-20 w-16 shrink-0 items-center justify-center rounded border border-dashed border-gold/60 bg-navy-deep text-center text-[0.6rem] leading-tight text-light/60">
                  Portrait<br />coming soon
                </div>
                <div>
                  <p className="font-serif text-xl">{firm.attorney}</p>
                  <p className="text-sm text-light/70">Attorney · Iowa & Illinois</p>
                </div>
              </div>
              <p className="mt-3 text-xs"><Flagged text="[PLACEHOLDER: attorney portrait, client upload]" /></p>
              <Link href="/attorney-profile/" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:underline">
                Meet Stephen <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Practice areas */}
      <section className="section-dark py-20 sm:py-28">
        <div className="container-site">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Practice Areas</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Where we concentrate our practice</h2>
            <span className="gold-rule" aria-hidden />
          </Reveal>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {practiceAreas.map((p, i) => (
              <Reveal as="li" key={p.slug} delay={(i % 4) * 0.06}>
                <PracticeCard p={p} />
              </Reveal>
            ))}
          </ul>
          <Reveal className="mt-10">
            <Link href="/practice-areas/" className="btn-outline">View all practice areas</Link>
          </Reveal>
        </div>
      </section>

      {/* Experience */}
      <section className="section-light py-20 sm:py-28">
        <div className="container-site">
          <Reveal className="max-w-2xl">
            <p className="eyebrow !text-gold-dark">Our Approach</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Experience Gives You Confidence</h2>
            <span className="gold-rule" aria-hidden />
            <p className="mt-6 text-lg text-ink/80">
              &ldquo;We listen, we learn, we research, we strategize and then we go to work.&rdquo;
            </p>
          </Reveal>
          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {approach.map((a, i) => (
              <Reveal as="li" key={a.title} delay={i * 0.08} className="card-light h-full">
                <span className="font-serif text-5xl text-gold" aria-hidden>{i + 1}</span>
                <h3 className="mt-3 text-2xl">{a.title}</h3>
                <p className="mt-3 leading-relaxed text-ink/80">{a.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Employees & employers */}
      <section className="section-deep py-20 sm:py-28">
        <div className="container-site">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Employment Law</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">We represent both sides of the workplace</h2>
            <span className="gold-rule" aria-hidden />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Reveal className="card h-full p-8">
              <h3 className="text-2xl">If you&rsquo;re an employee</h3>
              <p className="mt-4 leading-relaxed text-light/80">
                Discrimination, retaliation, wrongful termination, unpaid wages and denied leave. We review the
                evidence with you and tell you honestly whether you have a viable claim.
              </p>
              <ul className="mt-6 space-y-2 text-sm">
                {["general-employment-law", "federal-sector-employment-law", "family-leave-medical-act", "wage-and-hour-disputes"].map((s) => (
                  <li key={s}>
                    <Link href={practiceHref(s)} className="inline-flex items-center gap-2 text-gold hover:underline">
                      <Icon name="arrow" className="h-4 w-4" /> {practiceAreas.find((p) => p.slug === s)!.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.08} className="card h-full p-8">
              <h3 className="text-2xl">If you&rsquo;re an employer</h3>
              <p className="mt-4 leading-relaxed text-light/80">
                Sound policies, consistent practices and lawful terminations prevent most claims. When a charge or
                lawsuit does arrive, we defend it with trial-ready preparation.
              </p>
              <ul className="mt-6 space-y-2 text-sm">
                {["general-employment-law", "wage-and-hour-disputes", "commercial-litigation"].map((s) => (
                  <li key={s}>
                    <Link href={practiceHref(s)} className="inline-flex items-center gap-2 text-gold hover:underline">
                      <Icon name="arrow" className="h-4 w-4" /> {practiceAreas.find((p) => p.slug === s)!.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-dark py-20 sm:py-28">
        <Reveal className="container-site max-w-4xl text-center">
          <p className="eyebrow">Client Testimonial</p>
          <div className="mx-auto mt-8 flex justify-center text-left sm:text-center [&_svg]:mx-auto">
            <Testimonial large />
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link href="/firm-profile/testimonials/" className="btn-outline">Read more reviews</Link>
            <a href={firm.reviewUrl} className="btn-gold" target="_blank" rel="noopener noreferrer">Leave a review</a>
          </div>
        </Reveal>
      </section>

      {/* Service areas */}
      <section className="section-light py-20 sm:py-24">
        <div className="container-site">
          <Reveal className="max-w-2xl">
            <p className="eyebrow !text-gold-dark">Service Areas</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Serving seven counties in Iowa & Illinois</h2>
            <span className="gold-rule" aria-hidden />
            <p className="mt-6 text-lg text-ink/80">
              From our office at {fullAddress}, we represent clients throughout the Quad Cities region on both sides
              of the Mississippi.
            </p>
          </Reveal>
          <Reveal as="div" className="mt-10">
            <ul className="flex flex-wrap gap-3">
              {counties.map((c) => (
                <li key={c.id}>
                  <Link
                    href={`/service-areas/#${c.id}`}
                    className="inline-flex min-h-[44px] items-center rounded-full border border-navy/20 bg-white px-5 py-2 text-sm font-medium text-ink transition hover:border-gold hover:bg-navy hover:text-light"
                  >
                    {c.name}, {c.stateAbbr}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/service-areas/" className="mt-8 inline-flex items-center gap-2 font-semibold text-gold-dark hover:underline">
              See all service areas <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Latest insights */}
      <section className="section-dark py-20 sm:py-28">
        <div className="container-site">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="eyebrow">Latest Insights</p>
              <h2 className="mt-3 text-3xl sm:text-4xl">Legal insights for Iowa & Illinois</h2>
              <span className="gold-rule" aria-hidden />
            </div>
            <Link href="/blog/" className="btn-outline">Visit the blog</Link>
          </Reveal>
          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {posts.slice(0, 3).map((post, i) => (
              <Reveal as="li" key={post.slug} delay={i * 0.08}>
                <BlogCard post={post} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Final CTA + form */}
      <section className="relative overflow-hidden border-t border-gold/25 bg-navy-surface py-20 sm:py-28" aria-labelledby="cta-heading">
        <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(201,168,76,0.16),transparent_55%)]" />
        <div className="container-site relative grid gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Free Consultation</p>
            <h2 id="cta-heading" className="mt-3 text-3xl sm:text-4xl">Let&rsquo;s talk about your case.</h2>
            <span className="gold-rule" aria-hidden />
            <p className="mt-6 text-lg leading-relaxed text-light/80">
              Tell us briefly what is going on. We will respond promptly, explain your options in plain English and
              let you know whether we can help.
            </p>
            <ul className="mt-8 space-y-4 text-light/90">
              <li className="flex gap-3"><Icon name="phone" className="h-5 w-5 text-gold" /> <a href={firm.phoneHref} className="hover:text-gold">{firm.phone}</a></li>
              <li className="flex gap-3"><Icon name="mail" className="h-5 w-5 text-gold" /> <a href={`mailto:${firm.email}`} className="break-all hover:text-gold">{firm.email}</a></li>
              <li className="flex gap-3"><Icon name="pin" className="h-5 w-5 text-gold" /> {fullAddress}</li>
            </ul>
          </Reveal>
          <Reveal delay={0.1} className="rounded-lg border border-gold/25 bg-navy p-6 sm:p-8">
            <ContactForm source="Homepage" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
