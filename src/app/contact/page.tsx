import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import Flagged from "@/components/Flagged";
import Icon from "@/components/Icon";
import JsonLd from "@/components/JsonLd";
import MapEmbed from "@/components/MapEmbed";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { legalServiceSchema, ORG_ID, pageMeta } from "@/lib/seo";
import { SITE_URL, firm } from "@/lib/site";

export const metadata = pageMeta({
  title: "Contact a Davenport Attorney | Stephen T. Fieweger, P.C.",
  description:
    "Schedule a free consultation with Davenport attorney Stephen T. Fieweger. Call (563) 424-1982 or send a message. 5157 Utica Ridge Road, Davenport, Iowa.",
  path: "/contact/",
});

const next = [
  { title: "We review your message", text: "Your inquiry goes directly to Stephen Fieweger, who reviews it personally." },
  { title: "We reach out promptly", text: "We contact you by phone or email to learn more and check for conflicts of interest." },
  { title: "Free consultation", text: "If your matter is a fit, we set a time to meet, review your documents and explain your options." },
];

export default function Contact() {
  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            url: `${SITE_URL}/contact/`,
            name: "Contact Stephen T. Fieweger, P.C.",
            about: { "@id": ORG_ID },
          },
          legalServiceSchema(),
        ]}
      />
      <PageHero
        eyebrow="Contact"
        title="Free Consultation, Davenport Attorney"
        intro={<p>Tell us what happened. We&rsquo;ll respond promptly and tell you plainly whether we can help.</p>}
        image="contact-hero"
        imageAlt="Warm-lit reception area of a Davenport law office"
        crumbs={[{ name: "Contact", path: "/contact/" }]}
        actions={false}
      />

      <section className="section-light py-16 sm:py-24">
        <div className="container-site grid gap-10 lg:grid-cols-[minmax(0,1fr)_380px]">
          <Reveal className="rounded-lg border border-gold/30 bg-navy p-6 text-light sm:p-10">
            <h2 className="text-3xl">Send us a message</h2>
            <p className="mt-3 text-sm text-light/75">
              Please review our <Link href="/contact/disclaimer/" className="font-semibold text-gold underline">Disclaimer</Link> before submitting.
            </p>
            <div className="mt-8"><LeadForm lazy={false} /></div>
          </Reveal>

          <Reveal delay={0.08} className="space-y-6">
            <div className="rounded-lg border border-navy/10 bg-white p-6 text-ink sm:p-7">
              <h2 className="text-2xl">Contact information</h2>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex gap-3"><Icon name="phone" className="h-5 w-5 shrink-0 text-gold-dark" /><span><span className="block font-semibold">Phone</span><a href={firm.phoneHref} className="hover:text-gold-dark">{firm.phone}</a></span></li>
                <li className="flex gap-3"><Icon name="fax" className="h-5 w-5 shrink-0 text-gold-dark" /><span><span className="block font-semibold">Fax</span>{firm.fax}</span></li>
                <li className="flex gap-3"><Icon name="mail" className="h-5 w-5 shrink-0 text-gold-dark" /><span><span className="block font-semibold">Email</span><a href={`mailto:${firm.email}`} className="break-all hover:text-gold-dark">{firm.email}</a></span></li>
                <li className="flex gap-3"><Icon name="pin" className="h-5 w-5 shrink-0 text-gold-dark" /><span><span className="block font-semibold">Office</span>{firm.street}<br />{firm.city}, {firm.region} {firm.postalCode}</span></li>
                <li className="flex gap-3"><Icon name="clock2" className="h-5 w-5 shrink-0 text-gold-dark" /><span><span className="block font-semibold">Hours</span>{firm.hours}<br /><Flagged text="[PLACEHOLDER: confirm hours]" /></span></li>
              </ul>
              <a href={firm.phoneHref} className="btn-gold mt-6 w-full"><Icon name="phone" className="h-4 w-4" /> Call {firm.phone}</a>
            </div>
            <div className="rounded-lg border border-navy/10 bg-white p-6 text-sm text-ink/80">
              Looking for directions? Visit our <Link href="/davenport/" className="font-semibold text-gold-dark underline">Davenport office page</Link>, or
              see the <Link href="/service-areas/" className="font-semibold text-gold-dark underline">counties we serve</Link>.
            </div>
          </Reveal>
        </div>
      </section>

      <section aria-label="Map" className="bg-navy-deep">
        <MapEmbed className="h-[420px] rounded-none border-x-0" />
      </section>

      <section className="section-dark py-16 sm:py-24">
        <div className="container-site">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl">What happens next</h2>
            <span className="gold-rule" aria-hidden />
          </Reveal>
          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {next.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 0.08} className="card h-full">
                <span className="text-5xl font-semibold text-gold/50" aria-hidden>{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-light/75">{s.text}</p>
              </Reveal>
            ))}
          </ol>
          <p className="mt-10 text-sm text-light/70">
            Submitting a form or sending an email does not create an attorney-client relationship. Please do not send
            confidential information until we have agreed to represent you. Read the full{" "}
            <Link href="/contact/disclaimer/" className="text-gold underline">Disclaimer</Link> and{" "}
            <Link href="/privacy-policy/" className="text-gold underline">Privacy Policy</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
