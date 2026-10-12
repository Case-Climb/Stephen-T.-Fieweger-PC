import Link from "next/link";
import { firm, fullAddress } from "@/lib/site";
import { practiceAreas, practiceHref } from "@/lib/practice-areas";
import { counties } from "@/lib/counties";
import { Wordmark } from "./Header";
import Icon from "./Icon";
import MapEmbed from "./MapEmbed";
import Flagged from "./Flagged";

const firmLinks = [
  { href: "/attorney-profile/", label: "Attorney Profile" },
  { href: "/firm-profile/testimonials/", label: "Testimonials" },
  { href: "/davenport/", label: "Davenport Office" },
  { href: "/blog/", label: "Blog" },
  { href: "/contact/", label: "Contact" },
  { href: "/contact/disclaimer/", label: "Disclaimer" },
  { href: "/privacy-policy/", label: "Privacy Policy" },
  { href: "/sitemap/", label: "Sitemap" },
];

export default function Footer() {
  const heading = "mb-4 text-lg font-semibold text-light";
  const link = "text-sm text-light/75 transition hover:text-gold";
  return (
    <footer className="border-t border-gold/20 bg-navy-deep text-light" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Site footer</h2>
      <div className="container-site grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Link href="/" aria-label={`${firm.legalName}, home`} className="inline-block text-light">
            <Wordmark />
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-light/75">
            A Davenport, Iowa trial and employment law firm representing individuals, businesses and
            non-profit organizations across the Quad Cities in Iowa and Illinois since 1987.
          </p>
          <address className="mt-6 space-y-3 text-sm not-italic text-light/85">
            <a href={firm.mapsLink} className="flex gap-3 hover:text-gold" target="_blank" rel="noopener noreferrer">
              <Icon name="pin" className="h-5 w-5 shrink-0 text-gold" /> {fullAddress}
            </a>
            <a href={firm.phoneHref} className="flex gap-3 hover:text-gold">
              <Icon name="phone" className="h-5 w-5 shrink-0 text-gold" /> {firm.phone}
            </a>
            <a href={`mailto:${firm.email}`} className="flex gap-3 break-all hover:text-gold">
              <Icon name="mail" className="h-5 w-5 shrink-0 text-gold" /> {firm.email}
            </a>
            <span className="flex gap-3">
              <Icon name="clock2" className="h-5 w-5 shrink-0 text-gold" />
              <span>{firm.hours} <Flagged text="[PLACEHOLDER: confirm hours]" /></span>
            </span>
          </address>
          <a href={firm.reviewUrl} className="btn-outline mt-6" target="_blank" rel="noopener noreferrer">
            Leave Us a Review
          </a>
        </div>

        <nav aria-label="Practice areas" className="lg:col-span-3">
          <h3 className={heading}>Practice Areas</h3>
          <ul className="space-y-2.5">
            {practiceAreas.map((p) => (
              <li key={p.slug}><Link href={practiceHref(p.slug)} className={link}>{p.title}</Link></li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Service areas" className="lg:col-span-2">
          <h3 className={heading}>Service Areas</h3>
          <ul className="space-y-2.5">
            {counties.map((c) => (
              <li key={c.id}>
                <Link href={`/service-areas/#${c.id}`} className={link}>{c.name}, {c.stateAbbr}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Firm" className="lg:col-span-3">
          <h3 className={heading}>Firm</h3>
          <ul className="space-y-2.5">
            {firmLinks.map((l) => (
              <li key={l.href}><Link href={l.href} className={link}>{l.label}</Link></li>
            ))}
          </ul>
          <MapEmbed className="mt-6 h-40" />
        </nav>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site space-y-3 py-8 text-xs leading-relaxed text-light/65">
          <p>
            <strong className="font-semibold text-light/85">Attorney Advertising.</strong> The information on this
            website is for general information only and is not legal advice. Contacting us does not create an
            attorney-client relationship. Prior results do not guarantee a similar outcome. See our{" "}
            <Link href="/contact/disclaimer/" className="underline hover:text-gold">Disclaimer</Link>.
          </p>
          <p>© 2026 {firm.legalName}. All rights reserved. Responsible attorney: {firm.attorney}, {fullAddress}.</p>
        </div>
      </div>
    </footer>
  );
}
