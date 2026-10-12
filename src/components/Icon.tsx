import type { IconName } from "@/lib/practice-areas";

type Extra = "phone" | "mail" | "pin" | "clock2" | "fax" | "arrow" | "check" | "quote" | "scale" | "chevron" | "menu" | "close" | "play";

const paths: Record<IconName | Extra, string> = {
  injury: "M3 13l2-5a2 2 0 0 1 2-1h10a2 2 0 0 1 2 1l2 5v5h-3v-2H6v2H3v-5Zm0 0h18M7 15.5h.01M17 15.5h.01",
  medical: "M9 3h6v6h6v6h-6v6H9v-6H3V9h6V3Z",
  briefcase: "M9 6V4h6v2m-12 2h18v11H3V8Zm0 5h18",
  flag: "M5 21V4m0 0h11l-2 4 2 4H5",
  "family-leave": "M7 3v3m10-3v3M4 7h16v13H4V7Zm0 4h16M9 15h2m3 0h2",
  clock: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-13v4l3 2",
  building: "M4 21V6l8-3 8 3v15M4 21h16M9 21v-5h6v5M8 9h1m3 0h1m3 0h1M8 12h1m3 0h1m3 0h1",
  home: "M3 11l9-7 9 7m-16-1v11h5v-6h4v6h5V10",
  phone: "M5 4h4l2 5-3 2a11 11 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A17 17 0 0 1 3 6a2 2 0 0 1 2-2Z",
  mail: "M3 6h18v12H3V6Zm0 0 9 7 9-7",
  pin: "M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12Zm0-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
  clock2: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-13v4l3 2",
  fax: "M7 9V3h10v6M5 9h14a2 2 0 0 1 2 2v6h-4v4H7v-4H3v-6a2 2 0 0 1 2-2Zm4 8h6",
  arrow: "M5 12h14m-6-6 6 6-6 6",
  check: "m5 12 5 5 9-10",
  quote: "M7 7h4v4c0 3-1 5-4 6m8-10h4v4c0 3-1 5-4 6",
  scale: "M12 3v18M7 21h10M5 7h14M5 7l-3 7a3 3 0 0 0 6 0L5 7Zm14 0-3 7a3 3 0 0 0 6 0l-3-7Z",
  chevron: "m6 9 6 6 6-6",
  menu: "M4 7h16M4 12h16M4 17h16",
  close: "M6 6l12 12M18 6 6 18",
  play: "M8 5v14l11-7L8 5Z",
};

export default function Icon({
  name,
  className = "h-6 w-6",
  title,
}: {
  name: IconName | Extra;
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
    >
      {title && <title>{title}</title>}
      <path d={paths[name]} />
    </svg>
  );
}
