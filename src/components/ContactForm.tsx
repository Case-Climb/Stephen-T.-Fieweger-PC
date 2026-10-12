"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { firm } from "@/lib/site";

const TURNSTILE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, opts: Record<string, unknown>) => string;
      reset: (id?: string) => void;
    };
    onTurnstileLoad?: () => void;
  }
}

/** Loads Cloudflare Turnstile (invisible mode) once, if a site key is configured. */
function useTurnstile(container: React.RefObject<HTMLDivElement | null>) {
  const [token, setToken] = useState("");
  const widget = useRef<string | undefined>(undefined);

  useEffect(() => {
    if (!TURNSTILE_KEY || !container.current) return;
    const render = () => {
      if (!window.turnstile || !container.current || widget.current) return;
      widget.current = window.turnstile.render(container.current, {
        sitekey: TURNSTILE_KEY,
        size: "invisible",
        callback: (t: string) => setToken(t),
        "expired-callback": () => setToken(""),
      });
    };
    if (window.turnstile) {
      render();
      return;
    }
    const prev = window.onTurnstileLoad;
    window.onTurnstileLoad = () => {
      prev?.();
      render();
    };
    if (!document.getElementById("cf-turnstile-script")) {
      const s = document.createElement("script");
      s.id = "cf-turnstile-script";
      s.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit&onload=onTurnstileLoad";
      s.async = true;
      s.defer = true;
      document.head.appendChild(s);
    }
  }, [container]);

  const reset = () => {
    if (widget.current && window.turnstile) window.turnstile.reset(widget.current);
    setToken("");
  };
  return { token, reset };
}

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm({
  tone = "dark",
  source,
  heading,
  compact = false,
}: {
  tone?: "dark" | "light";
  source: string;
  heading?: string;
  compact?: boolean;
}) {
  const id = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const started = useRef<number>(0);
  const tsRef = useRef<HTMLDivElement>(null);
  const { token, reset } = useTurnstile(tsRef);

  useEffect(() => {
    started.current = Date.now();
  }, []);

  const field = tone === "dark" ? "field" : "field-light";
  const label = `mb-1.5 block text-sm font-medium ${tone === "dark" ? "text-light/90" : "text-ink/85"}`;
  const muted = tone === "dark" ? "text-light/65" : "text-ink/70";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          formType: "contact",
          source,
          elapsed: Date.now() - started.current,
          turnstileToken: token,
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.ok) throw new Error(json.error || "Something went wrong.");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
      reset();
    }
  }

  if (status === "success") {
    return (
      <div role="status" className={`rounded-lg border border-gold/40 p-8 text-center ${tone === "dark" ? "bg-navy-surface" : "bg-white"}`}>
        <p className="text-2xl font-semibold">Thank you. We&rsquo;ll respond promptly.</p>
        <p className={`mt-3 text-sm ${muted}`}>
          If your matter is urgent, call <a href={firm.phoneHref} className="font-semibold underline">{firm.phone}</a>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} aria-describedby={`${id}-note`} className="relative space-y-4">
      {heading && <h3 className="mb-2 text-2xl">{heading}</h3>}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-first`} className={label}>First Name</label>
          <input id={`${id}-first`} name="firstName" required autoComplete="given-name" className={field} />
        </div>
        <div>
          <label htmlFor={`${id}-last`} className={label}>Last Name</label>
          <input id={`${id}-last`} name="lastName" required autoComplete="family-name" className={field} />
        </div>
        <div>
          <label htmlFor={`${id}-email`} className={label}>Email</label>
          <input id={`${id}-email`} name="email" type="email" required autoComplete="email" className={field} />
        </div>
        <div>
          <label htmlFor={`${id}-phone`} className={label}>Phone</label>
          <input id={`${id}-phone`} name="phone" type="tel" required autoComplete="tel" className={field} />
        </div>
      </div>
      <div>
        <label htmlFor={`${id}-msg`} className={label}>How can we help?</label>
        <textarea
          id={`${id}-msg`}
          name="message"
          required
          rows={compact ? 3 : 5}
          maxLength={3000}
          className={field}
          placeholder="Briefly describe your situation. Please don't include confidential details."
        />
      </div>
      {/* Honeypot: hidden from people, tempting to bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={`${id}-website`}>Website</label>
        <input id={`${id}-website`} name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="flex gap-3">
        <input id={`${id}-consent`} name="consent" type="checkbox" required value="yes" className="mt-1 h-5 w-5 shrink-0 accent-[#C9A84C]" />
        <label htmlFor={`${id}-consent`} className={`text-sm ${tone === "dark" ? "text-light/85" : "text-ink/85"}`}>
          I have read the{" "}
          <Link href="/contact/disclaimer/" className="underline decoration-gold underline-offset-2">Disclaimer</Link> and
          agree to be contacted about my inquiry by phone, email or text.
        </label>
      </div>
      <div ref={tsRef} />
      <div className="flex flex-wrap items-center gap-4 pt-1">
        <button type="submit" className="btn-gold min-w-[200px]" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Request Free Consultation"}
        </button>
        <a href={firm.phoneHref} className={`text-sm font-semibold ${tone === "dark" ? "text-gold" : "text-gold-dark"} hover:underline`}>
          or call {firm.phone}
        </a>
      </div>
      {status === "error" && (
        <p role="alert" className="rounded-md border border-red-400/50 bg-red-500/10 p-3 text-sm">
          {error} Please try again or call {firm.phone}.
        </p>
      )}
      <p id={`${id}-note`} className={`text-xs leading-relaxed ${muted}`}>
        Submitting this form does not create an attorney-client relationship. Do not send confidential information.
      </p>
    </form>
  );
}
