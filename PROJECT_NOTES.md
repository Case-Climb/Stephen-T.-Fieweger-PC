# Project Notes: Stephen T. Fieweger, P.C. website

Rebuild of https://www.fiewegerlaw.com as a 19-page Next.js site. This file is the pre-launch checklist.
Every item below must be resolved, and every `[ATTORNEY: …]` / `[PLACEHOLDER: …]` marker removed from the
source, before launch. Markers render on the site as yellow highlighted tags so they cannot be missed.

To list every marker that is still in the code:

```bash
grep -rnoE "\[(ATTORNEY|PLACEHOLDER):[^]]*\]" src
```

---

## (a) Placeholders: missing details from the client

| # | Item | Where it appears |
|---|------|------------------|
| P1 | **Office hours.** Using Mon–Fri 8:30 AM–5:00 PM from a third-party listing. Confirm. | `src/lib/site.ts` (`hours`, `openingHours`), footer, Contact, Davenport Office, LegalService schema |
| P2 | **Attorney portrait.** Real photo from the client. Never use a generated portrait. The portrait slots are hidden until a photo is added: put the file in `public/images/` and set `attorneyPortrait` in `src/lib/site.ts`, and it appears on both pages automatically. | Homepage welcome card, Attorney Profile sidebar |
| P3 | **Bar numbers and court admissions** (federal district courts, 7th/8th Circuit, etc.). | Attorney Profile → Admissions; can also be added to the `Person` schema |
| P4 | **Parking and directions** (cross street, entrance, suite number). | Davenport Office → Getting here |
| P5 | **Real office photos** to replace the generated `davenport-hero` image. | Davenport Office hero (`public/images/davenport-hero.webp`) |
| P6 | **Google reviews widget.** Embed once the Google Business Profile link is confirmed. | Testimonials page |
| P7 | **Social and profile URLs** (LinkedIn, Facebook, Google Business Profile) for `sameAs`. The old site linked LinkedIn, YouTube and Facebook. | `src/lib/site.ts` → `sameAs` |
| P8 | **Logo approval.** The site uses Higgsfield-generated logo concept A (the "SF" monogram in a ring) next to the "STEPHEN T. FIEWEGER / LAW" text wordmark. Three other concepts are in `design/logo-concepts/`. The client must approve one, or supply their own logo, before launch. | `public/brand/`, `public/icon.svg`, `public/apple-touch-icon.png`, `Wordmark` in `src/components/Header.tsx` |
| P9 | **GA4 measurement ID.** Placeholder `G-XXXXXXXXXX`. Set `NEXT_PUBLIC_GA4_ID`. GA loads only after a visitor accepts analytics cookies. | `.env`, `src/components/Consent.tsx`, comment in `<head>` |
| P10 | **SMTP credentials** for form delivery to sfieweger@fiewegerlaw.com. Without them, the form returns "temporarily unavailable" in production. | `.env` (see `.env.example`) |
| P11 | **Cloudflare Turnstile keys** (invisible bot protection). Optional but recommended; the honeypot and timing check work without them. | `.env` |
| P12 | **Map pin.** Coordinates 41.573316, -90.513907 come from the U.S. Census geocoder for 5157 Utica Ridge Rd. Confirm against the Google Business Profile pin. | `src/lib/site.ts` → `geo` |
| P13 | **Blog articles (phase two).** The four starter articles currently show a summary and outline only. They are `noindex` and left out of `sitemap.xml` until the full posts are written. | `src/lib/blog.ts`, `src/app/blog/[slug]/page.tsx` |

## (b) `[ATTORNEY: verify]`: legal statements for attorney review

General legal statements were written conservatively, but each one needs Mr. Fieweger's sign-off.

### Personal Injury (`/practice-areas/personal-injury/`)
1. Iowa and Illinois both use **modified comparative fault**: recovery is reduced by the injured person's share and barred if that share is greater than the defendant's. (Body copy and FAQ "What if I was partly at fault?")
2. General **2-year statute of limitations** for personal injury in both Iowa and Illinois, with shorter notice rules for claims against government bodies. (FAQ "How long do I have to file?")

### Medical Malpractice (`/practice-areas/medical-malpractice/`)
3. Hospitals, clinics and facilities can be liable "in some circumstances." (`[ATTORNEY: confirm]`)
4. Deadlines are short and strict, differ between Iowa and Illinois, and include outer limits (statutes of repose). Specific numbers were not stated on purpose.
5. Wrongful death claims arising from medical negligence are possible in both states, with different rules on who may bring them.

### General Employment Law (`/practice-areas/general-employment-law/`)
6. General **300-day** deadline to file with the EEOC, Iowa Civil Rights Commission or Illinois Department of Human Rights. **Note:** Illinois amended the Human Rights Act to extend the IDHR filing period (believed to be 2 years for charges filed on or after Jan. 1, 2025). The copy says state deadlines "can differ and change." Confirm the wording.
7. Iowa and Illinois are generally at-will employment states (unflagged in copy; please confirm).

### Federal Sector Employment Law (`/practice-areas/federal-sector-employment-law/`)
8. Federal employees and applicants generally must contact an agency EEO counselor within **45 days**.
9. Statute descriptions (Title VII, Equal Pay Act, ADEA 40+, IRCA, ADA Titles I and V) and the Section 1983 summary (unflagged; taken from the old site, please confirm).

### FMLA (`/practice-areas/family-leave-medical-act/`)
10. Eligibility: 50+ employees (or public agency or school), 12 months of employment, 1,250 hours in the past 12 months, plus the worksite/75-mile rule (described as "enough employees nearby").
11. FMLA claim deadline: generally **2 years, 3 if willful**.
12. Military family leave: 26 weeks caregiver leave and 12 weeks qualifying exigency leave (from the old site).

### Wage and Hour (`/practice-areas/wage-and-hour-disputes/`)
13. Iowa and Illinois differ on final-pay timing and penalties.
14. FLSA recovery period: generally **2 years, 3 if willful**; state wage-payment laws may differ.
15. Illinois has specific statutory limits on non-compete agreements (Illinois Freedom to Work Act).

### Family Law (`/practice-areas/family-law/`)
16. **`[ATTORNEY: confirm family law is offered and wording]`**: the whole page. The client listed family law, but the old site had no family law page. The page makes no claims of past results or special experience.
17. Both states allow no-fault divorce.
18. Child support follows state guidelines based mainly on income and parenting time; orders can be modified after a substantial change in circumstances.
19. Spousal support is called alimony in Iowa and maintenance in Illinois, and is not automatic.

### Attorney Profile, Blog and Service Areas
20. **Notable news (University of Iowa political discrimination matter)**: neutral description plus three links (WQAD 2012, *Chronicle of Higher Education* 2012, Eighth Circuit opinion 2014). The case is not described as a win or a loss. Approve the wording and links, or remove the section. Appears on Attorney Profile and in the Blog's "In the News" sidebar.
21. **County seats and courthouse names** on each county page (sidebar and the "Where would a case be heard?" FAQ): Scott County Courthouse (Davenport), Muscatine County Courthouse (Muscatine), Clinton County Courthouse (Clinton), Rock Island County Justice Center (Rock Island), Henry County Courthouse (Cambridge), Mercer County Courthouse (Aledo), Whiteside County Courthouse (Morrison).
22. Davenport Office: Scott County Courthouse in downtown Davenport, and the U.S. District Court for the Southern District of Iowa sitting in Davenport.
23. Regional statements used in county and federal copy (unflagged; please confirm): many Quad Cities residents work at the Rock Island Arsenal; Muscatine County cases go to the Southern District of Iowa; Fulton, IL sits across the river from Clinton, IA.

## (c) Assumptions made

- **Clinton County = Iowa** (seat: Clinton). **Henry County = Illinois** (seat: Cambridge).
- **Family law page** added because the client lists family law as a service. The copy is informational and conservative (see item 16).
- **Hours** are Mon–Fri 8:30 AM–5:00 PM from a third-party listing (see P1).
- **"Firm Profile" content** was merged into the Attorney Profile, as specified. `/firm-profile/` redirects there with a 301. The Testimonials page stays at its legacy URL `/firm-profile/testimonials/`.
- **Floating "Call Now" button** shows on mobile and tablet (below 1024px). On desktop the header already has a visible "Call (563) 424-1982" button.
- **Blog article URLs** (`/blog/<slug>/`) exist so the cards on the homepage and blog never link to a 404. Until phase two they are summary pages marked `noindex`.
- **"Expert" usage.** The compliance rule bans describing the attorney as an "expert." The only uses of the word are the medical sense on the Medical Malpractice page ("medical expert's review") and "best interests of the child" (the legal custody standard) on Family Law. `npm run qa` enforces this.
- **Testimonials.** Only the one verified Sandholm quote is used. There are no invented reviews, ratings, counts or case results anywhere.
- **Hero images** load with priority because they are the main above-the-fold content (better for LCP). All other images, the map and the YouTube video load lazily. The video loads nothing from YouTube until a visitor clicks play.

---

## County pages (added after the original 19)

Each of the 7 counties has its own page at `/service-areas/<county-id>/` (for example `/service-areas/scott-county-ia/`). The navbar has a Service Areas dropdown listing them, grouped by Iowa and Illinois, and the mobile menu lists them too. `/service-areas/` is now an overview with a card for each county. Each card keeps the old `#county-id` anchor, so older links still land on the right county.

Each page includes the county's own copy, communities, county seat and courthouse (flagged for verification), the three most relevant practice areas plus links to the rest, four county-specific FAQs, links to the other counties in the same state, and a CTA. The hero banners are wide crops of the existing county images; no new images were generated.

## Typography

The whole site uses **Inter**, self-hosted through `next/font`. Headings are semibold with slightly tighter letter spacing. The original brief called for Playfair Display headings, but it was switched to Inter at the client's request.

## Imagery

All site imagery was generated with **Higgsfield** and converted to WebP by `scripts/process-images.mjs`. No portraits, faces, logos or readable text were generated, and no generated image is presented as a real client, case or the real office. The Davenport hero should be replaced with real office photos (P5).

- **Heroes and sections (22 images, GPT Image 2.5):** a page hero for every page, `home-welcome`, `county-1`…`county-4`, and `og-default` (also exported as JPG for social platforms).
- **Card images (15 images, GPT Image 2.5):** one per practice-area card (`<slug>-card.webp`, used on the homepage grid and the practice-areas hub), one per blog card (`blog-*.webp`), and `county-5`…`county-7`, so each of the 7 counties now has its own image.
- **Logo (Recraft V4.1, vector mode):** four concepts, delivered as true SVGs (`design/logo-concepts/logo-a.svg` … `logo-d.svg`). Concept A was cleaned up for the site: transparent background, the ring turned into a true cut-out, and the gold matched to #C9A84C. Files: `public/brand/logo-mark-gold.svg` (dark backgrounds), `public/brand/logo-mark-navy.svg` (light backgrounds), `public/brand/logo-512.png` (used as the schema logo), plus `public/icon.svg` and `public/apple-touch-icon.png` (letters only, since the thin ring disappears at favicon size). On screens narrower than 360 px the header shows the text wordmark only.

Higgsfield credits used: about 48.75 in total (23.75 for the first image set, 15 for the card images, 10 for the logo concepts).

## Redirects (301), in `next.config.mjs`

| Old URL | New URL |
|---|---|
| `/firm-profile/` | `/attorney-profile/` |
| `/firm-profile/awards-and-recognition/` | `/attorney-profile/#awards` |
| `/media-resources/` | `/blog/` |
| `/media-resources/news-and-events/` and `/media-resources/news-and-events/*` | `/blog/` |
| `/media-resources/video-gallery/` | `/attorney-profile/#video` |
| `/media-resources/client-resources/` | `/practice-areas/` |

All other legacy URLs (practice areas, `/attorney-profile/`, `/contact/`, `/contact/disclaimer/`, `/firm-profile/testimonials/`) are kept as they were.

## QA performed (2026-10-12)

`npm run build && npm start`, then `npm run qa`. Result: **all checks passed.**

- All 26 pages (the original 19 plus 7 county pages) return 200. Each has exactly one H1, a unique title under 60 characters ending in "| Stephen T. Fieweger, P.C.", a unique meta description of 150–160 characters, a canonical URL, and Open Graph and Twitter tags.
- JSON-LD parses on every page: BreadcrumbList on all inner pages; FAQPage on all 8 practice pages and all 7 county pages; a Service (linked to the firm) on each county page; LegalService/LocalBusiness on Home, Service Areas, Davenport and Contact; Person and Attorney on the Attorney Profile; ContactPage on Contact; WebSite and Organization on Home.
- Every internal link and in-page anchor (`#awards`, `#video`) resolves with no redirect hops. All 44 images load and have alt text.
- No banned advertising words (specialist, specializes, expert, best, top, guaranteed), apart from the medical and legal-standard uses noted above.
- All legacy redirects return 301 to the correct target. `robots.txt` and `sitemap.xml` are served, and the sitemap lists all 26 URLs.
- Playwright check at 375, 768 and 1280 px: no horizontal overflow on any page, no console errors. The header (logo, navigation and buttons) fits inside the page margins at every width from 320 to 1440 px. With reduced motion turned on, no content is left hidden.
- Contact API: honeypot and too-fast submissions are silently dropped, invalid input returns 400, and production without SMTP returns 503 (expected until P10 is configured).

## Deploying

1. Deploy to Vercel (or any Node host): `npm install && npm run build && npm start`.
2. Set the environment variables from `.env.example` (SMTP, Turnstile, GA4).
3. Point www.fiewegerlaw.com at the deployment, and redirect the apex domain to `www`.
4. Submit `https://www.fiewegerlaw.com/sitemap.xml` in Google Search Console and update the Google Business Profile website link.
