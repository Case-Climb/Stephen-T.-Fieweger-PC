import { testimonial } from "@/lib/site";

export default function Testimonial({ large = false }: { large?: boolean }) {
  return (
    <figure className="relative">
      <span aria-hidden className={`block font-serif leading-none text-gold ${large ? "h-12 text-8xl" : "h-10 text-7xl"}`}>&ldquo;</span>
      <blockquote className={`mt-4 font-serif ${large ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl"} leading-snug`}>
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-gold">
        {testimonial.author}, {testimonial.location}
      </figcaption>
    </figure>
  );
}
