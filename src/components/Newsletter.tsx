"use client";

import { useEffect, useId, useRef, useState } from "react";

export default function Newsletter() {
  const id = useId();
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const started = useRef(0);
  useEffect(() => {
    started.current = Date.now();
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    setStatus("sending");
    const res = await fetch("/api/contact/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, formType: "newsletter", source: "Blog newsletter", elapsed: Date.now() - started.current }),
    }).catch(() => null);
    const json = res ? await res.json().catch(() => ({})) : {};
    setStatus(res?.ok && json.ok ? "done" : "error");
  }

  if (status === "done") {
    return <p role="status" className="text-xl font-semibold">Thank you. You&rsquo;re on the list.</p>;
  }

  return (
    <form onSubmit={onSubmit} className="relative space-y-3">
      <label htmlFor={`${id}-email`} className="block text-sm font-medium text-light/90">Email address</label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input id={`${id}-email`} name="email" type="email" required autoComplete="email" className="field" />
        <button type="submit" className="btn-gold shrink-0" disabled={status === "sending"}>
          {status === "sending" ? "Signing up…" : "Sign Up"}
        </button>
      </div>
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <input name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="flex gap-3">
        <input id={`${id}-consent`} name="consent" type="checkbox" value="yes" required className="mt-1 h-4 w-4 accent-[#C9A84C]" />
        <label htmlFor={`${id}-consent`} className="text-xs text-light/75">
          I agree to receive occasional emails about legal issues. Unsubscribe anytime.
        </label>
      </div>
      {status === "error" && <p role="alert" className="text-sm text-red-300">Sorry, that didn&rsquo;t go through. Please try again.</p>}
    </form>
  );
}
