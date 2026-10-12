import { firm } from "@/lib/site";
import Icon from "./Icon";

export default function FloatingCall() {
  return (
    <a
      href={firm.phoneHref}
      className="btn-gold fixed bottom-4 right-4 z-40 rounded-full px-5 shadow-[0_10px_30px_-8px_rgba(0,0,0,0.7)] ring-2 ring-navy/40 lg:hidden"
      aria-label={`Call now: ${firm.phone}`}
    >
      <Icon name="phone" className="h-5 w-5" /> Call Now
    </a>
  );
}
