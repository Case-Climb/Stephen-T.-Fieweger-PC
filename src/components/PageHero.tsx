import Link from "next/link";
import type { ReactNode } from "react";
import { firm } from "@/lib/site";
import { breadcrumbSchema, type Crumb } from "@/lib/seo";
import Breadcrumbs from "./Breadcrumbs";
import HeroImage from "./HeroImage";
import Icon from "./Icon";
import JsonLd from "./JsonLd";

export default function PageHero({
  title,
  eyebrow,
  intro,
  image,
  imageAlt,
  crumbs,
  size = "inner",
  actions = true,
  children,
}: {
  title: string;
  eyebrow?: string;
  intro?: ReactNode;
  image: string;
  imageAlt: string;
  crumbs?: Crumb[];
  size?: "home" | "inner";
  actions?: boolean;
  children?: ReactNode;
}) {
  return (
    <section
      className={`relative isolate flex items-end overflow-hidden bg-navy-deep text-light ${
        size === "home" ? "min-h-[92svh] pb-20 pt-32 sm:pb-28" : "min-h-[440px] pb-16 pt-32 sm:min-h-[520px] sm:pb-20"
      }`}
    >
      <HeroImage src={image} alt={imageAlt} />
      {crumbs && <JsonLd data={breadcrumbSchema(crumbs)} />}
      <div className="container-site relative">
        <div className="max-w-3xl">
          {crumbs && <Breadcrumbs items={crumbs} />}
          {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
          <h1 className={`${size === "home" ? "text-4xl sm:text-5xl lg:text-6xl" : "text-4xl sm:text-5xl"} leading-[1.1]`}>
            {title}
          </h1>
          <span className="gold-rule" aria-hidden />
          {intro && <div className="mt-6 max-w-2xl text-lg leading-relaxed text-light/85 sm:text-xl">{intro}</div>}
          {actions && (
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact/" className="btn-gold">Free Consultation</Link>
              <a href={firm.phoneHref} className="btn-outline">
                <Icon name="phone" className="h-4 w-4" /> Call {firm.phone}
              </a>
            </div>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
