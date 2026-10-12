import { firm } from "@/lib/site";

export default function MapEmbed({ className = "h-64", title }: { className?: string; title?: string }) {
  return (
    <div className={`overflow-hidden rounded-lg border border-gold/25 bg-navy-surface ${className}`}>
      <iframe
        src={firm.mapsEmbed}
        title={title ?? `Map to ${firm.legalName}, ${firm.street}, Davenport, Iowa`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-full w-full border-0 grayscale-[35%]"
        allowFullScreen
      />
    </div>
  );
}
