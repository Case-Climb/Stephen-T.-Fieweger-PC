import Link from "next/link";
import type { Crumb } from "@/lib/seo";

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all = [{ name: "Home", path: "/" }, ...items];
  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-light/70">
        {all.map((c, i) => {
          const last = i === all.length - 1;
          return (
            <li key={c.path} className="flex items-center gap-2">
              {last ? (
                <span aria-current="page" className="text-light">{c.name}</span>
              ) : (
                <>
                  <Link href={c.path} className="hover:text-gold">{c.name}</Link>
                  <span aria-hidden className="text-gold">/</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
