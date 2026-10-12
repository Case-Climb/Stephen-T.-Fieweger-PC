# fiewegerlaw.com

Website for **Stephen T. Fieweger, P.C.**, a Davenport, Iowa trial and employment law firm.
Built with Next.js (App Router), Tailwind CSS and Framer Motion.

```bash
npm install
npm run dev          # http://localhost:3000
npm run build && npm start
npm run qa           # run against a started server: links, H1s, titles, schema, redirects, banned words
```

- Site content: `src/lib/` (`site.ts` firm details, `practice-areas.ts`, `counties.ts`, `blog.ts`)
- Pages: `src/app/`; shared components: `src/components/`
- Contact form endpoint: `src/app/api/contact/route.ts` (SMTP; configure with `.env.example`)
- Image pipeline: `node scripts/process-images.mjs <dir-of-raw-pngs>` writes WebP files to `public/images/`

**Before launch, work through [`PROJECT_NOTES.md`](PROJECT_NOTES.md):** placeholders, attorney-review items, assumptions and QA results.
