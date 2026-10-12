import { notFound } from "next/navigation";
import PracticePage from "@/components/PracticePage";
import { getPractice, practiceAreas, practiceHref } from "@/lib/practice-areas";
import { pageMeta } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return practiceAreas.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const p = getPractice((await params).slug);
  if (!p) return {};
  return pageMeta({ title: p.metaTitle, description: p.metaDescription, path: practiceHref(p.slug) });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const p = getPractice((await params).slug);
  if (!p) notFound();
  return <PracticePage p={p} />;
}
