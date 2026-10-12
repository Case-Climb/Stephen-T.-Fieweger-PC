import Link from "next/link";

export const metadata = { title: { absolute: "Page Not Found | Stephen T. Fieweger, P.C." }, robots: { index: false } };

export default function NotFound() {
  return (
    <section className="section-dark flex min-h-[70vh] items-center pt-24">
      <div className="container-site py-20">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 text-4xl sm:text-5xl">We couldn&rsquo;t find that page.</h1>
        <span className="gold-rule" aria-hidden />
        <p className="mt-6 max-w-xl text-lg text-light/80">The page may have moved when our website was updated.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="btn-gold">Go to the homepage</Link>
          <Link href="/sitemap/" className="btn-outline">View the sitemap</Link>
        </div>
      </div>
    </section>
  );
}
