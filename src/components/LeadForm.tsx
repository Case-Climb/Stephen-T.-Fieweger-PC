import Script from "next/script";

// CaseClimb (LeadConnector) form. Submissions are handled and routed by CaseClimb.
const FORM_ID = "7XJiSoqhliANkGxiaMMc";
const FORM_NAME = "Website Form (Stephen T. Fieweger P C)";

export default function LeadForm({
  tone = "dark",
  lazy = true,
}: {
  tone?: "dark" | "light";
  /** Lazy-load when the form sits below the fold. */
  lazy?: boolean;
}) {
  return (
    <div>
      {/* The form has a transparent background and dark labels, so it always sits on a white panel. */}
      <div className="min-h-[540px] overflow-hidden rounded-[10px] bg-white">
        <iframe
          src={`https://services.caseclimb.com/widget/form/${FORM_ID}`}
          style={{ width: "100%", height: "540px", border: "none", borderRadius: "10px" }}
          id={`inline-${FORM_ID}`}
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name={FORM_NAME}
          data-height="540"
          data-layout-iframe-id={`inline-${FORM_ID}`}
          data-form-id={FORM_ID}
          data-cookie-consent="true"
          data-cookie-consent-provider="auto"
          title={FORM_NAME}
          loading={lazy ? "lazy" : undefined}
        />
      </div>
      {/* Resizes the iframe to fit the form. next/script loads it once even when several forms are on a page. */}
      <Script id="caseclimb-form-embed" src="https://services.caseclimb.com/js/form_embed.js" strategy="afterInteractive" />
      <p className={`mt-4 text-xs leading-relaxed ${tone === "dark" ? "text-light/65" : "text-ink/70"}`}>
        Submitting this form does not create an attorney-client relationship. Do not send confidential information.
      </p>
    </div>
  );
}
