import Image from "next/image";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import Icon from "@/components/Icon";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { counties, countyHref } from "@/lib/counties";
import { legalServiceSchema, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Quad Cities Law Firm | Stephen T. Fieweger, P.C.",
  description:
    "Serving Scott, Muscatine and Clinton counties in Iowa and Rock Island, Henry, Mercer and Whiteside counties in Illinois from our Davenport law office.",
  path: "/service-areas/",
});

const groups = (["Iowa", "Illinois"] as const).map((state) => ({
  state,
  counties: counties.filter((c) => c.state === state),
}));

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
        <Reveal className="container-site max-w-3xl space-y-5 text-lg leading-relaxed text-ink/80">
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
            Choose your county below.
          </p>
        </Reveal>
      </section>

      {groups.map((g, gi) => (
        <section
          key={g.state}
          aria-labelledby={`${g.state}-counties`}
          className={`${gi === 0 ? "section-dark" : "section-deep"} py-16 sm:py-24`}
        >
          <div className="container-site">
            <Reveal>
              <p className="eyebrow">{g.state}</p>
              <h2 id={`${g.state}-counties`} className="mt-3 text-3xl sm:text-4xl">
                {g.state} counties we serve
              </h2>
              <span className="gold-rule" aria-hidden />
            </Reveal>
            <ul className={`mt-12 grid gap-6 sm:grid-cols-2 ${g.counties.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
              {g.counties.map((c, i) => (
                // id keeps the old /service-areas/#county anchors landing on the right card.
                <Reveal as="li" key={c.id} delay={i * 0.06}>
                  <Link id={c.id} href={countyHref(c.id)} className="card card-hover group flex h-full flex-col overflow-hidden p-0">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={`/images/${c.image}.webp`}
                        alt={c.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="text-xl text-light group-hover:text-gold">{c.name}, {c.stateAbbr}</h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-light/75">{c.towns.join(" · ")}</p>
                      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold">
                        {c.name} attorney <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <section className="section-light py-12">
        <Reveal className="container-site flex flex-wrap items-center justify-between gap-6">
          <p className="max-w-2xl text-ink/85">
            <strong className="text-ink">Licensed in Iowa and Illinois.</strong> Stephen T. Fieweger is admitted to
            practice in both states, so matters that cross the river can stay with one attorney.
          </p>
          <Link href="/davenport/" className="btn-outline-dark">Visit our Davenport office</Link>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
