import Link from "next/link";
import { CookieSettingsButton } from "@/components/Consent";
import LegalPage from "@/components/LegalPage";
import { pageMeta } from "@/lib/seo";
import { firm, fullAddress } from "@/lib/site";

export const metadata = pageMeta({
  title: "Privacy Policy | Stephen T. Fieweger, P.C.",
  description:
    "How Stephen T. Fieweger, P.C. collects, uses and protects information submitted through fiewegerlaw.com, including contact forms, cookies and analytics.",
  path: "/privacy-policy/",
});

export default function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      image="blog-hero"
      imageAlt="Notebook and pen on a desk"
      crumbs={[{ name: "Privacy Policy", path: "/privacy-policy/" }]}
      updated="October 2026"
    >
      <p>
        This policy explains how {firm.legalName} (&ldquo;we,&rdquo; &ldquo;us&rdquo;) handles information collected through
        www.fiewegerlaw.com. By using this site you agree to this policy.
      </p>
      <h2>Information you give us</h2>
      <p>
        When you submit a contact or newsletter form, we collect what you enter: your name, email address, phone
        number and message. We use it to respond to your inquiry, check for conflicts of interest and, if you ask,
        send occasional legal updates. Form submissions are delivered by email to our office.
      </p>
      <p>
        Please do not submit confidential information through this website. Submitting a form does not create an
        attorney-client relationship. See our <Link href="/contact/disclaimer/">Disclaimer</Link>.
      </p>
      <h2>Information collected automatically</h2>
      <p>
        Like most websites, our hosting provider records basic technical information such as IP address, browser
        type and pages visited, for security and to keep the site running. We use a spam-protection service on our
        forms that may process technical information about your browser to tell people from bots.
      </p>
      <h2>Cookies and analytics</h2>
      <p>
        We use only essential cookies and storage by default, for example to remember your cookie choice.
        Non-essential analytics cookies (Google Analytics 4) are off unless you choose &ldquo;Accept analytics&rdquo; in the
        cookie banner. If you accept, Google Analytics collects information about how you use the site in aggregate.
        You can change your choice at any time: <CookieSettingsButton />.
      </p>
      <p>
        Embedded content from other sites, such as Google Maps and YouTube, may set their own cookies when it loads
        or when you interact with it. Our YouTube video does not load until you press play.
      </p>
      <h2>How we share information</h2>
      <p>
        We do not sell your personal information. We share it only with service providers that help us operate the
        site and deliver email, when required by law, or to protect our rights.
      </p>
      <h2>Retention and security</h2>
      <p>
        We keep inquiries as long as needed to respond and to meet our professional obligations, then delete or
        archive them. We use reasonable safeguards, but no method of transmission over the internet is completely
        secure.
      </p>
      <h2>Children</h2>
      <p>This site is not directed to children under 13, and we do not knowingly collect their information.</p>
      <h2>Your choices</h2>
      <p>
        You may ask us to access, correct or delete information you submitted, or unsubscribe from emails at any time,
        by contacting us at <a href={`mailto:${firm.email}`}>{firm.email}</a> or {firm.phone}.
      </p>
      <h2>Changes</h2>
      <p>We may update this policy. The date above shows the latest version.</p>
      <h2>Contact</h2>
      <p>{firm.legalName}, {fullAddress}.</p>
    </LegalPage>
  );
}
