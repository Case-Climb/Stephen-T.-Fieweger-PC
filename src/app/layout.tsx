import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCall from "@/components/FloatingCall";
import Consent from "@/components/Consent";
import { SITE_URL, firm } from "@/lib/site";
import { OG_IMAGE } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: firm.legalName,
  authors: [{ name: firm.attorney }],
  formatDetection: { telephone: true, email: true, address: true },
  openGraph: { siteName: firm.legalName, images: [OG_IMAGE], locale: "en_US", type: "website" },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#0B1426",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* GA4 placeholder. Set NEXT_PUBLIC_GA4_ID; GA4 loads only after cookie consent (see Consent.tsx). */}
        <noscript dangerouslySetInnerHTML={{ __html: "<!-- GA4: G-XXXXXXXXXX -->" }} />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only z-[100] rounded-btn bg-gold px-4 py-3 font-semibold text-navy focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <Footer />
        <FloatingCall />
        <Consent />
      </body>
    </html>
  );
}
