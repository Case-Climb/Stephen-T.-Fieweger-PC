import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import PracticeCard from "@/components/PracticeCard";
import Reveal from "@/components/Reveal";
import { practiceAreas } from "@/lib/practice-areas";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Davenport Law Firm | Stephen T. Fieweger, P.C.",
  description:
    "Personal injury, medical malpractice, employment, federal sector, FMLA, wage and hour, commercial litigation and family law for Davenport and the Quad Cities.",
  path: "/practice-areas/",
});

const who = [
  { title: "Individuals", text: "People who were injured, mistreated at work, or facing a legal problem that affects their family or finances." },
  { title: "Businesses", text: "Small and mid-sized companies with contract disputes, partner conflicts, tenant claims and employment questions." },
  { title: "Non-profits", text: "Organizations that need careful counsel on disputes, employment practices and risk." },
  { title: "Public & private employees", text: "Workers in private industry and in federal, state and local government, including federal-sector EEO matters." },
];

const steps = [
  { title: "Listen", text: "We hear your full story before forming an opinion." },
  { title: "Learn & research", text: "We gather the facts and study the law in Iowa and Illinois." },
  { title: "Strategize", text: "We build a plan around a realistic, clearly defined goal." },
  { title: "Go to work", text: "We negotiate, litigate and try cases, keeping you informed throughout." },
];

export default function PracticeAreasHub() {
  return (
    <>
      <PageHero
        eyebrow="Practice Areas"
        title="Practice Areas in Davenport & the Quad Cities"
        intro={<p>Trial-tested representation in injury, employment, business and family matters across Iowa and Illinois.</p>}
        image="practice-hub"
        imageAlt="Courthouse columns and stone steps in morning light, representing a Davenport law firm's practice areas"
        crumbs={[{ name: "Practice Areas", path: "/practice-areas/" }]}
      />

      <section className="section-light py-16 sm:py-24">
        <Reveal className="container-site max-w-3xl space-y-5 text-lg leading-relaxed text-ink/80">
          <p className="text-xl text-ink">
            Stephen T. Fieweger, P.C. is a Davenport law firm that concentrates its practice in civil trials and
            appeals. Since 1987, Stephen Fieweger has represented clients in Iowa and Illinois courts, from county
            courthouses in the Quad Cities to the Iowa Supreme Court, the Illinois Supreme Court and the Seventh and
            Eighth Circuit Courts of Appeals.
          </p>
          <p>
            Our work falls into eight areas. Some involve people who have been hurt, by a careless driver, an unsafe
            property or a medical mistake. Others involve the workplace, where we represent both employees and
            employers in discrimination, retaliation, leave and pay disputes, including the separate rules that
            govern federal workers. We also handle business disputes for small companies and non-profits, and
            family law matters for individuals.
          </p>
          <p>
            Whatever the matter, the approach is the same. We give you an honest assessment early, explain how a
            court is likely to view your situation, and then do the work needed to reach the strongest realistic result.
            Choose a practice area below to learn more, or call us for a free consultation.
          </p>
        </Reveal>
      </section>

      <section className="section-dark py-16 sm:py-24">
        <div className="container-site">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl">Our practice areas</h2>
            <span className="gold-rule" aria-hidden />
          </Reveal>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.map((p, i) => (
              <Reveal as="li" key={p.slug} delay={(i % 3) * 0.06}>
                <PracticeCard p={p} variant="large" />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-light py-16 sm:py-24">
        <div className="container-site">
          <Reveal className="max-w-2xl">
            <p className="eyebrow !text-gold-dark">Who We Represent</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Individuals, businesses and non-profits</h2>
            <span className="gold-rule" aria-hidden />
          </Reveal>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {who.map((w, i) => (
              <Reveal as="li" key={w.title} delay={i * 0.06} className="card-light h-full">
                <h3 className="text-xl">{w.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/80">{w.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-deep py-16 sm:py-24">
        <div className="container-site">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">How We Work</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Four steps, every case</h2>
            <span className="gold-rule" aria-hidden />
          </Reveal>
          <ol className="mt-12 grid gap-px overflow-hidden rounded-lg border border-gold/25 bg-gold/25 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 0.06} className="bg-navy-surface p-7">
                <span className="text-4xl font-semibold text-gold" aria-hidden>{i + 1}</span>
                <h3 className="mt-3 text-xl">{s.title}</h3>
                <p className="mt-2 text-sm text-light/75">{s.text}</p>
              </Reveal>
            ))}
          </ol>
          <Reveal className="mt-10 flex flex-wrap gap-3">
            <Link href="/attorney-profile/" className="btn-outline">About the attorney</Link>
            <Link href="/service-areas/" className="btn-outline">Counties we serve</Link>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
