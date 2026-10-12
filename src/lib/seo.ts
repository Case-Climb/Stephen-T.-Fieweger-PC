import type { Metadata } from "next";
import { SITE_URL, firm } from "./site";
import { counties } from "./counties";
import type { Faq } from "./practice-areas";

export const OG_IMAGE = {
  url: `${SITE_URL}/images/og-default.jpg`,
  width: 1200,
  height: 630,
  alt: "Stephen T. Fieweger, P.C., Davenport, Iowa trial and employment attorney",
};

export function pageMeta({
  title,
  description,
  path,
  noindex = false,
}: {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    robots: noindex ? { index: false, follow: true } : undefined,
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: firm.legalName,
      locale: "en_US",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: firm.street,
  addressLocality: firm.city,
  addressRegion: firm.region,
  postalCode: firm.postalCode,
  addressCountry: firm.country,
};

export const areaServed = counties.map((c) => ({
  "@type": "AdministrativeArea",
  name: `${c.name}, ${c.state}`,
}));

export const ORG_ID = `${SITE_URL}/#organization`;
export const ATTORNEY_ID = `${SITE_URL}/attorney-profile/#attorney`;

export function legalServiceSchema(extra: Record<string, unknown> = {}) {
  return {
    "@context": "https://schema.org",
    "@type": ["LegalService", "LocalBusiness"],
    "@id": ORG_ID,
    name: firm.legalName,
    alternateName: firm.shortName,
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/brand/logo-512.png`,
    image: OG_IMAGE.url,
    telephone: firm.phoneE164,
    faxNumber: "+1-563-424-1983",
    email: firm.email,
    address: postalAddress,
    geo: { "@type": "GeoCoordinates", latitude: firm.geo.lat, longitude: firm.geo.lng },
    openingHours: firm.openingHours, // [PLACEHOLDER: confirm hours]
    areaServed,
    sameAs: firm.sameAs,
    founder: { "@id": ATTORNEY_ID },
    knowsAbout: [
      "Personal injury law", "Medical malpractice", "Employment law",
      "Federal sector employment law", "Family and Medical Leave Act",
      "Wage and hour law", "Commercial litigation", "Family law",
    ],
    ...extra,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: `${SITE_URL}/`,
    name: firm.legalName,
    publisher: { "@id": ORG_ID },
    inLanguage: "en-US",
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#org`,
    name: firm.legalName,
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/brand/logo-512.png`,
    telephone: firm.phoneE164,
    email: firm.email,
    address: postalAddress,
    sameAs: firm.sameAs,
  };
}

export function attorneySchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Person"],
    "@id": ATTORNEY_ID,
    name: firm.attorney,
    jobTitle: "Attorney",
    url: `${SITE_URL}/attorney-profile/`,
    telephone: firm.phoneE164,
    email: firm.email,
    address: postalAddress,
    worksFor: { "@id": ORG_ID, "@type": "LegalService", name: firm.legalName },
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "University of Notre Dame" },
      { "@type": "CollegeOrUniversity", name: "Northern Illinois University College of Law" },
    ],
    knowsAbout: [
      "Civil trials and appeals", "Personal injury", "Commercial and business litigation",
      "Employment law", "Federal employment law", "Medical malpractice",
      "Family and Medical Leave Act", "Wage and hour law",
    ],
    sameAs: [firm.youtubeUrl],
  };
}

export function attorneyServiceSchema() {
  // schema.org "Attorney" type for the practitioner's profile.
  return {
    "@context": "https://schema.org",
    "@type": "Attorney",
    name: `${firm.attorney}, Attorney at Law`,
    url: `${SITE_URL}/attorney-profile/`,
    telephone: firm.phoneE164,
    address: postalAddress,
    areaServed,
    employee: { "@id": ATTORNEY_ID },
    parentOrganization: { "@id": ORG_ID },
  };
}

export function faqSchema(faqs: Faq[]) {
  const clean = (s: string) => s.replace(/\s*\[(ATTORNEY|PLACEHOLDER)[^\]]*\]/g, "");
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: clean(f.q),
      acceptedAnswer: { "@type": "Answer", text: clean(f.a) },
    })),
  };
}

export type Crumb = { name: string; path: string };

export function breadcrumbSchema(crumbs: Crumb[]) {
  const all = [{ name: "Home", path: "/" }, ...crumbs];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.path}`,
    })),
  };
}
