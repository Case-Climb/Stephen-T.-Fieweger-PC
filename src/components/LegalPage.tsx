import type { ReactNode } from "react";
import PageHero from "./PageHero";
import type { Crumb } from "@/lib/seo";

export default function LegalPage({ title, crumbs, image, imageAlt, updated, children }: { title: string; crumbs: Crumb[]; image: string; imageAlt: string; updated?: string; children: ReactNode }) {
  return (
    <>
      <PageHero title={title} image={image} imageAlt={imageAlt} crumbs={crumbs} actions={false} />
      <section className="section-light py-16 sm:py-24">
        <div className="container-site prose-site max-w-3xl text-[1.05rem] text-ink/85 [&_h2]:text-ink">
          {updated && <p className="text-sm text-ink/60">Last updated: {updated}</p>}
          {children}
        </div>
      </section>
    </>
  );
}
