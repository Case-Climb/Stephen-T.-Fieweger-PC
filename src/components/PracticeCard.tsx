import Image from "next/image";
import Link from "next/link";
import type { PracticeArea } from "@/lib/practice-areas";
import { practiceHref } from "@/lib/practice-areas";
import Icon from "./Icon";

export default function PracticeCard({ p, variant = "compact" }: { p: PracticeArea; variant?: "compact" | "large" }) {
  if (variant === "large") {
    return (
      <Link href={practiceHref(p.slug)} className="card card-hover group flex h-full flex-col overflow-hidden p-0">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={`/images/${p.image}-card.webp`}
            alt={p.imageAlt}
            fill
            sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-surface via-navy/30 to-transparent" />
          <Icon name={p.icon} className="absolute bottom-4 left-5 h-8 w-8 text-gold" />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-xl text-light group-hover:text-gold">{p.title}</h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-light/75">{p.summary}</p>
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold">
            Learn more <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    );
  }
  return (
    <Link href={practiceHref(p.slug)} className="card card-hover group flex h-full flex-col">
      <Icon name={p.icon} className="h-8 w-8 text-gold" />
      <h3 className="mt-4 text-xl text-light group-hover:text-gold">{p.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-light/75">{p.short}</p>
      <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold">
        Learn more <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
