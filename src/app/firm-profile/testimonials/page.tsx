import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import Flagged from "@/components/Flagged";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Testimonial from "@/components/Testimonial";
import { pageMeta } from "@/lib/seo";
import { firm } from "@/lib/site";

export const metadata = pageMeta({
  title: "Client Reviews | Stephen T. Fieweger, P.C.",
  description:
    "Read what clients say about Davenport attorney Stephen T. Fieweger, and share your own experience. Serving the Quad Cities in Iowa and Illinois since 1987.",
  path: "/firm-profile/testimonials/",
});

export default function Testimonials() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="Client Testimonials"
        intro={<p>In our clients&rsquo; own words.</p>}
        image="testimonials-hero"
        imageAlt="Leather armchair beside a window in a quiet law office library"
        crumbs={[
          { name: "Attorney Profile", path: "/attorney-profile/" },
          { name: "Testimonials", path: "/firm-profile/testimonials/" },
        ]}
        actions={false}
      />

      <section className="section-dark py-16 sm:py-24">
        <Reveal className="container-site max-w-4xl">
          <div className="card p-8 sm:p-12">
            <Testimonial large />
          </div>
        </Reveal>
      </section>

      <section className="section-light py-16 sm:py-24">
        <div className="container-site grid gap-10 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl">Reviews</h2>
            <span className="gold-rule" aria-hidden />
            <div className="mt-8 rounded-lg border-2 border-dashed border-navy/20 bg-white p-8 text-center text-ink/70">
              <Flagged text="[PLACEHOLDER: embed Google reviews widget when review profile link is confirmed]" />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-3xl sm:text-4xl">Share your experience</h2>
            <span className="gold-rule" aria-hidden />
            <p className="mt-6 text-lg leading-relaxed text-ink/80">
              If we have represented you, we would value your honest feedback. Reviews help others in the Quad Cities
              find the right attorney for their situation.
            </p>
            <a href={firm.reviewUrl} target="_blank" rel="noopener noreferrer" className="btn-gold mt-8">Leave a Review</a>
            <p className="mt-10 text-sm text-ink/70">
              Testimonials reflect individual experiences and do not guarantee a similar outcome.
            </p>
            <p className="mt-6 text-sm text-ink/80">
              Learn more <Link href="/attorney-profile/" className="font-semibold text-gold-dark underline">about Stephen T. Fieweger</Link>, explore our{" "}
              <Link href="/practice-areas/" className="font-semibold text-gold-dark underline">practice areas</Link> or{" "}
              <Link href="/contact/" className="font-semibold text-gold-dark underline">contact us</Link>.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
