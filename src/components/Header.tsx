"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { firm } from "@/lib/site";
import { practiceAreas, practiceHref } from "@/lib/practice-areas";
import Icon from "./Icon";

const about = [
  { href: "/attorney-profile/", label: "Attorney Profile", desc: "Stephen T. Fieweger's background and record" },
  { href: "/firm-profile/testimonials/", label: "Testimonials", desc: "What clients have said" },
];

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 sm:gap-3 ${className}`}>
      <Image src="/brand/logo-mark-gold.svg" alt="" width={44} height={44} className="h-8 w-8 shrink-0 max-[359px]:hidden sm:h-11 sm:w-11" priority />
      <span className="flex flex-col leading-none">
        <span className="whitespace-nowrap font-serif text-[0.78rem] font-semibold tracking-[0.08em] sm:text-lg sm:tracking-[0.14em] lg:text-base lg:tracking-[0.1em] 2xl:text-lg">STEPHEN T. FIEWEGER</span>
        <span className="mt-1 flex items-center gap-2 text-[0.6rem] font-semibold tracking-[0.5em] text-gold sm:text-[0.65rem]">
          <span className="h-px w-6 bg-gold/70" aria-hidden />LAW<span className="h-px w-6 bg-gold/70" aria-hidden />
        </span>
      </span>
    </span>
  );
}

type MenuId = "about" | "practice" | null;

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<MenuId>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on navigation.
  useEffect(() => {
    setOpen(null);
    setMobileOpen(false);
  }, [pathname]);

  // Escape / outside click closes dropdowns.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(null);
        setMobileOpen(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpen(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  const solid = scrolled || mobileOpen;
  const isActive = (prefix: string) => pathname?.startsWith(prefix);

  const topLink =
    "whitespace-nowrap rounded px-2 py-2 text-sm font-medium tracking-wide text-light/90 transition hover:text-gold xl:px-2.5";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "bg-navy/95 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)] backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="container-site flex h-20 items-center justify-between gap-3">
        <Link href="/" className="shrink-0 text-light" aria-label={`${firm.legalName}, home`}>
          <Wordmark />
        </Link>

        <nav ref={navRef} aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-0.5">
            <li className="relative flex h-20 items-center" onMouseEnter={() => setOpen("about")} onMouseLeave={() => setOpen(null)}>
              <button
                type="button"
                className={`${topLink} inline-flex items-center gap-1 ${isActive("/attorney-profile") || isActive("/firm-profile") ? "text-gold" : ""}`}
                aria-expanded={open === "about"}
                aria-controls="menu-about"
                onClick={() => setOpen(open === "about" ? null : "about")}
              >
                About <Icon name="chevron" className="h-4 w-4" />
              </button>
              <div
                id="menu-about"
                hidden={open !== "about"}
                className="absolute left-0 top-full w-72"
              >
                <ul className="card space-y-1 bg-navy p-3 shadow-2xl">
                  {about.map((a) => (
                    <li key={a.href}>
                      <Link href={a.href} className="block rounded-md px-3 py-2.5 hover:bg-white/5">
                        <span className="block text-sm font-semibold text-light">{a.label}</span>
                        <span className="block text-xs text-light/65">{a.desc}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li className="relative flex h-20 items-center" onMouseEnter={() => setOpen("practice")} onMouseLeave={() => setOpen(null)}>
              <button
                type="button"
                className={`${topLink} inline-flex items-center gap-1 ${isActive("/practice-areas") ? "text-gold" : ""}`}
                aria-expanded={open === "practice"}
                aria-controls="menu-practice"
                onClick={() => setOpen(open === "practice" ? null : "practice")}
              >
                Practice Areas <Icon name="chevron" className="h-4 w-4" />
              </button>
              <div
                id="menu-practice"
                hidden={open !== "practice"}
                className="fixed left-1/2 top-20 w-[min(960px,calc(100vw-2rem))] -translate-x-1/2"
              >
                <div className="card bg-navy p-6 shadow-2xl">
                  <ul className="grid grid-cols-2 gap-1 xl:grid-cols-4">
                    {practiceAreas.map((p) => (
                      <li key={p.slug}>
                        <Link href={practiceHref(p.slug)} className="group flex h-full gap-3 rounded-md p-3 hover:bg-white/5">
                          <Icon name={p.icon} className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                          <span>
                            <span className="block text-sm font-semibold text-light group-hover:text-gold">{p.title}</span>
                            <span className="mt-1 block text-xs leading-snug text-light/65">{p.short}</span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4 text-sm">
                    <Link href="/practice-areas/" className="font-semibold text-gold hover:underline">
                      View all practice areas →
                    </Link>
                    <span className="text-light/65">Free consultation: {firm.phone}</span>
                  </div>
                </div>
              </div>
            </li>
            <li><Link href="/service-areas/" className={`${topLink} ${isActive("/service-areas") ? "text-gold" : ""}`}>Service Areas</Link></li>
            <li><Link href="/blog/" className={`${topLink} ${isActive("/blog") ? "text-gold" : ""}`}>Blog</Link></li>
            <li><Link href="/contact/" className={`${topLink} ${pathname === "/contact/" ? "text-gold" : ""}`}>Contact</Link></li>
          </ul>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a href={firm.phoneHref} className="btn-outline hidden whitespace-nowrap px-4 xl:inline-flex">
            <Icon name="phone" className="h-4 w-4" /> Call {firm.phone}
          </a>
          <Link href="/contact/" className="btn-gold whitespace-nowrap px-4">Free Consultation</Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a href={firm.phoneHref} className="btn-gold px-2.5" aria-label={`Call ${firm.phone}`}>
            <Icon name="phone" className="h-5 w-5" />
          </a>
          <button
            type="button"
            className="btn border border-white/20 px-2.5 text-light"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <Icon name={mobileOpen ? "close" : "menu"} className="h-6 w-6" />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        hidden={!mobileOpen}
        className="h-[calc(100dvh-5rem)] overflow-y-auto border-t border-white/10 bg-navy lg:hidden"
      >
        <nav aria-label="Mobile" className="container-site py-6">
          <p className="eyebrow mb-2">About</p>
          <ul className="mb-6 space-y-1">
            {about.map((a) => (
              <li key={a.href}><Link href={a.href} className="block py-2 text-lg">{a.label}</Link></li>
            ))}
          </ul>
          <p className="eyebrow mb-2">Practice Areas</p>
          <ul className="mb-6 space-y-1">
            <li><Link href="/practice-areas/" className="block py-2 text-lg">All Practice Areas</Link></li>
            {practiceAreas.map((p) => (
              <li key={p.slug}><Link href={practiceHref(p.slug)} className="block py-2 text-lg">{p.title}</Link></li>
            ))}
          </ul>
          <ul className="mb-8 space-y-1 border-t border-white/10 pt-4">
            <li><Link href="/service-areas/" className="block py-2 text-lg">Service Areas</Link></li>
            <li><Link href="/davenport/" className="block py-2 text-lg">Davenport Office</Link></li>
            <li><Link href="/blog/" className="block py-2 text-lg">Blog</Link></li>
            <li><Link href="/contact/" className="block py-2 text-lg">Contact</Link></li>
          </ul>
          <div className="grid gap-3 sm:grid-cols-2">
            <a href={firm.phoneHref} className="btn-outline"><Icon name="phone" className="h-4 w-4" /> Call {firm.phone}</a>
            <Link href="/contact/" className="btn-gold">Free Consultation</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
