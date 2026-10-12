import Link from "next/link";
import { firm } from "@/lib/site";
import Icon from "./Icon";
import Reveal from "./Reveal";

export default function CtaBand({
  title = "Talk to an experienced Quad Cities attorney.",
  text = "The first conversation is free. We'll listen, explain where you stand and tell you plainly whether we can help.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="relative overflow-hidden border-y border-gold/25 bg-navy-surface">
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,168,76,0.18),transparent_60%)]" />
      <Reveal className="container-site relative flex flex-col items-start justify-between gap-8 py-16 lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl">{title}</h2>
          <p className="mt-4 text-lg text-light/80">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/contact/" className="btn-gold">Free Consultation</Link>
          <a href={firm.phoneHref} className="btn-outline"><Icon name="phone" className="h-4 w-4" /> Call {firm.phone}</a>
        </div>
      </Reveal>
    </section>
  );
}
