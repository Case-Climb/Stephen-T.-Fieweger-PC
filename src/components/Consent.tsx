"use client";

import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";

const KEY = "stf-cookie-consent"; // "accepted" | "declined"
const GA_ID = process.env.NEXT_PUBLIC_GA4_ID || "G-XXXXXXXXXX";
const GA_READY = /^G-[A-Z0-9]+$/.test(GA_ID) && GA_ID !== "G-XXXXXXXXXX";

function read(): string | null {
  try {
    return window.localStorage.getItem(KEY);
  } catch {
    return null;
  }
}

/**
 * Cookie banner + consent-gated GA4. Non-essential cookies are off by default:
 * analytics only loads after the visitor clicks "Accept analytics".
 */
export default function Consent() {
  const [choice, setChoice] = useState<string | null>("pending");

  useEffect(() => {
    setChoice(read());
    const reopen = () => setChoice(null);
    window.addEventListener("open-cookie-settings", reopen);
    return () => window.removeEventListener("open-cookie-settings", reopen);
  }, []);

  const save = (value: "accepted" | "declined") => {
    try {
      window.localStorage.setItem(KEY, value);
    } catch {
      /* storage blocked: honor choice for this page view only */
    }
    setChoice(value);
  };

  return (
    <>
      {choice === "accepted" && GA_READY && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}',{anonymize_ip:true});`}
          </Script>
        </>
      )}
      {choice === null && (
        <div
          role="dialog"
          aria-live="polite"
          aria-label="Cookie preferences"
          className="fixed inset-x-0 bottom-0 z-[60] border-t border-gold/30 bg-navy p-4 shadow-2xl sm:inset-x-auto sm:bottom-4 sm:left-4 sm:max-w-md sm:rounded-lg sm:border"
        >
          <p className="text-sm leading-relaxed text-light/90">
            We use essential cookies to run this site. With your permission we also use analytics cookies to
            understand how the site is used. Non-essential cookies stay off unless you accept.{" "}
            <Link href="/privacy-policy/" className="text-gold underline">Privacy Policy</Link>
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <button type="button" className="btn-outline py-2" onClick={() => save("declined")}>
              Decline non-essential
            </button>
            <button type="button" className="btn-gold py-2" onClick={() => save("accepted")}>
              Accept analytics
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export function CookieSettingsButton() {
  return (
    <button
      type="button"
      className="font-semibold text-gold-dark underline"
      onClick={() => window.dispatchEvent(new Event("open-cookie-settings"))}
    >
      Change cookie preferences
    </button>
  );
}
