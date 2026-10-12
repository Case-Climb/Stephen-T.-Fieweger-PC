export const SITE_URL = "https://www.fiewegerlaw.com";

export const firm = {
  legalName: "Stephen T. Fieweger, P.C.",
  shortName: "Stephen T. Fieweger Law",
  attorney: "Stephen T. Fieweger",
  phone: "(563) 424-1982",
  phoneHref: "tel:+15634241982",
  phoneE164: "+1-563-424-1982",
  fax: "(563) 424-1983",
  email: "sfieweger@fiewegerlaw.com",
  street: "5157 Utica Ridge Road",
  city: "Davenport",
  region: "IA",
  postalCode: "52807",
  country: "US",
  // [PLACEHOLDER: confirm hours] Third-party listing shows Mon–Fri 8:30 AM–5:00 PM.
  hours: "Mon–Fri 8:30 AM – 5:00 PM",
  hoursNote: "Hours to be confirmed",
  openingHours: "Mo-Fr 08:30-17:00",
  // From the U.S. Census geocoder for 5157 Utica Ridge Rd. [ATTORNEY: verify pin]
  geo: { lat: 41.573316, lng: -90.513907 },
  reviewUrl: "http://reviews.birdseye.com/a-17941968133",
  youtubeId: "U6Cce6r5tlI",
  youtubeUrl: "https://youtu.be/U6Cce6r5tlI",
  since: 1987,
  sameAs: [
    "https://youtu.be/U6Cce6r5tlI",
    // [PLACEHOLDER: add LinkedIn, Facebook and Google Business Profile URLs]
  ],
  mapsEmbed:
    "https://www.google.com/maps?q=5157+Utica+Ridge+Road,+Davenport,+IA+52807&output=embed",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=5157+Utica+Ridge+Road+Davenport+IA+52807",
} as const;

export const fullAddress = `${firm.street}, ${firm.city}, ${firm.region} ${firm.postalCode}`;

export const testimonial = {
  quote: "He's hard-nosed, very intelligent and he is not intimidated.",
  author: "Steve Sandholm",
  location: "Dixon, IL",
};
