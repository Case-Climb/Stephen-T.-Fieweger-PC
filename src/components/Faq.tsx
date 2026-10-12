import type { Faq as FaqItem } from "@/lib/practice-areas";
import { faqSchema } from "@/lib/seo";
import Flagged from "./Flagged";
import Icon from "./Icon";
import JsonLd from "./JsonLd";

export default function Faq({ faqs, title = "Frequently Asked Questions", tone = "light" }: { faqs: FaqItem[]; title?: string; tone?: "light" | "dark" }) {
  const light = tone === "light";
  return (
    <div>
      <JsonLd data={faqSchema(faqs)} />
      <h2 className="text-3xl sm:text-4xl">{title}</h2>
      <span className="gold-rule" aria-hidden />
      <div className={`mt-8 divide-y rounded-lg border ${light ? "divide-navy/10 border-navy/10 bg-white" : "divide-white/10 border-gold/25 bg-navy-surface"}`}>
        {faqs.map((f) => (
          <details key={f.q} className="group">
            <summary className={`flex cursor-pointer list-none items-start justify-between gap-4 p-5 text-left font-semibold sm:p-6 [&::-webkit-details-marker]:hidden ${light ? "hover:text-gold-dark" : "hover:text-gold"}`}>
              <span className="text-lg font-semibold"><Flagged text={f.q} /></span>
              <Icon name="chevron" className="mt-1 h-5 w-5 shrink-0 text-gold transition-transform duration-300 group-open:rotate-180" />
            </summary>
            <div className={`px-5 pb-6 leading-relaxed sm:px-6 ${light ? "text-ink/80" : "text-light/80"}`}>
              <Flagged text={f.a} />
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
