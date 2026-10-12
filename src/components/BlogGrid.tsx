"use client";

import { useState } from "react";
import type { BlogCategory, Post } from "@/lib/blog";
import BlogCard from "./BlogCard";

export default function BlogGrid({ posts, categories }: { posts: Post[]; categories: BlogCategory[] }) {
  const [active, setActive] = useState<BlogCategory | "All">("All");
  const shown = active === "All" ? posts : posts.filter((p) => p.category === active);
  const chip = (on: boolean) =>
    `min-h-[40px] rounded-full border px-4 text-sm font-medium transition ${
      on ? "border-navy bg-navy text-light" : "border-navy/20 bg-white text-ink hover:border-gold"
    }`;
  return (
    <div>
      <div role="group" aria-label="Filter articles by category" className="flex flex-wrap gap-2">
        {(["All", ...categories] as const).map((c) => (
          <button key={c} type="button" aria-pressed={active === c} className={chip(active === c)} onClick={() => setActive(c)}>
            {c}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">{shown.length} articles shown</p>
      {shown.length ? (
        <ul className="mt-8 grid gap-6 sm:grid-cols-2">
          {shown.map((p) => (
            <li key={p.slug}><BlogCard post={p} tone="light" /></li>
          ))}
        </ul>
      ) : (
        <p className="mt-8 rounded-lg border border-navy/10 bg-white p-8 text-ink/70">
          New articles in this category are on the way. Check back soon.
        </p>
      )}
    </div>
  );
}
