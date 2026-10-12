import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/lib/blog";
import Icon from "./Icon";

export default function BlogCard({ post, tone = "dark" }: { post: Post; tone?: "dark" | "light" }) {
  const dark = tone === "dark";
  return (
    <Link href={`/blog/${post.slug}/`} className={`${dark ? "card" : "card-light"} card-hover group flex h-full flex-col overflow-hidden p-0`}>
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image src={`/images/${post.image}.webp`} alt={post.imageAlt} fill sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className={`text-xs font-semibold uppercase tracking-[0.18em] ${dark ? "text-gold" : "text-gold-dark"}`}>{post.category}</span>
        <h3 className={`mt-2 text-xl ${dark ? "text-light group-hover:text-gold" : "text-ink group-hover:text-gold-dark"}`}>{post.title}</h3>
        <p className={`mt-3 flex-1 text-sm leading-relaxed ${dark ? "text-light/75" : "text-ink/75"}`}>{post.excerpt}</p>
        <span className={`mt-5 inline-flex items-center gap-2 text-sm font-semibold ${dark ? "text-gold" : "text-gold-dark"}`}>
          Read more <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
