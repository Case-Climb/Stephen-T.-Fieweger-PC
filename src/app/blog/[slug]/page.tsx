import Link from "next/link";
import { notFound } from "next/navigation";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { posts } from "@/lib/blog";
import { getPractice, practiceHref } from "@/lib/practice-areas";
import { pageMeta } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

const find = (slug: string) => posts.find((p) => p.slug === slug);

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const post = find((await params).slug);
  if (!post) return {};
  // Phase-two article: summary page only, kept out of the index until the full post is published.
  return pageMeta({
    title: `${post.title} | Stephen T. Fieweger, P.C.`,
    description: post.excerpt,
    path: `/blog/${post.slug}/`,
    noindex: true,
  });
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const post = find((await params).slug);
  if (!post) notFound();
  const practice = getPractice(post.practice)!;
  return (
    <>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        intro={<p>{post.excerpt}</p>}
        image={practice.image}
        imageAlt={practice.imageAlt}
        crumbs={[
          { name: "Blog", path: "/blog/" },
          { name: post.title, path: `/blog/${post.slug}/` },
        ]}
        actions={false}
      />
      <section className="section-light py-16 sm:py-24">
        <Reveal className="container-site prose-site max-w-3xl text-lg text-ink/85">
          <p className="rounded-lg border border-gold/40 bg-white p-5 text-base">
            The full article is being prepared. In the meantime, here is what it will cover. If you have a question
            now, <Link href="/contact/">contact us</Link> for a free consultation.
          </p>
          <h2 className="text-ink">What this article covers</h2>
          <ul>
            {post.outline.map((o) => <li key={o}>{o}</li>)}
          </ul>
          <h2 className="text-ink">Learn more</h2>
          <p>
            Read about our <Link href={practiceHref(practice.slug)}>{practice.title.toLowerCase().replace("fmla", "FMLA")}</Link> practice,
            browse other <Link href="/blog/">legal insights</Link>, or{" "}
            <Link href="/attorney-profile/">meet Stephen T. Fieweger</Link>.
          </p>
        </Reveal>
      </section>
      <CtaBand />
    </>
  );
}
