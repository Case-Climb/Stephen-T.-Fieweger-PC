import Link from "next/link";
import Icon from "./Icon";

export type RelatedLink = { href: string; label: string; desc?: string };

export default function RelatedLinks({ links, title = "Related pages" }: { links: RelatedLink[]; title?: string }) {
  return (
    <nav aria-label={title}>
      <h2 className="text-2xl sm:text-3xl">{title}</h2>
      <span className="gold-rule" aria-hidden />
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="card card-hover group flex h-full items-start justify-between gap-4">
              <span>
                <span className="block font-serif text-lg text-light group-hover:text-gold">{l.label}</span>
                {l.desc && <span className="mt-1 block text-sm text-light/70">{l.desc}</span>}
              </span>
              <Icon name="arrow" className="mt-1 h-5 w-5 shrink-0 text-gold" />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
