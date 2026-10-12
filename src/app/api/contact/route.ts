import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Handles the blog newsletter signup. The contact form is the embedded CaseClimb form (LeadForm.tsx).

export const runtime = "nodejs";

const TO = process.env.CONTACT_TO || "sfieweger@fiewegerlaw.com";
const FROM = process.env.CONTACT_FROM || "Fieweger Law Website <no-reply@fiewegerlaw.com>";

// Best-effort, per-instance rate limit: 5 submissions per IP per 10 minutes.
const hits = new Map<string, number[]>();
function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60_000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

const str = (v: unknown, max = 200) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
const esc = (s: string) => s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Bots: honeypot filled or form submitted implausibly fast. Pretend success.
  if (str(data.website) || Number(data.elapsed) < 2500) {
    return NextResponse.json({ ok: true });
  }
  if (limited(ip)) {
    return NextResponse.json({ ok: false, error: "Too many submissions." }, { status: 429 });
  }

  const formType = data.formType === "newsletter" ? "newsletter" : "contact";
  const email = str(data.email);
  const consent = data.consent === "yes";
  if (!emailOk(email) || !consent) {
    return NextResponse.json({ ok: false, error: "Please complete the required fields." }, { status: 400 });
  }

  const fields: [string, string][] =
    formType === "newsletter"
      ? [["Email", email]]
      : [
          ["First name", str(data.firstName, 80)],
          ["Last name", str(data.lastName, 80)],
          ["Email", email],
          ["Phone", str(data.phone, 40)],
          ["How can we help?", str(data.message, 3000)],
        ];
  if (formType === "contact" && fields.some(([, v]) => !v)) {
    return NextResponse.json({ ok: false, error: "Please complete the required fields." }, { status: 400 });
  }
  fields.push(["Submitted from", str(data.source, 200)], ["Consent", "Yes"]);

  const subject =
    formType === "newsletter"
      ? "Website: newsletter signup"
      : `Website inquiry: ${str(data.firstName, 80)} ${str(data.lastName, 80)}`;
  const text = fields.map(([k, v]) => `${k}: ${v}`).join("\n");
  const html = `<table cellpadding="6">${fields
    .map(([k, v]) => `<tr><td valign="top"><strong>${esc(k)}</strong></td><td>${esc(v).replace(/\n/g, "<br>")}</td></tr>`)
    .join("")}</table>`;

  if (!process.env.SMTP_HOST) {
    if (process.env.NODE_ENV !== "production") {
      console.info(`[contact] SMTP not configured; would send to ${TO}:\n${subject}\n${text}`);
      return NextResponse.json({ ok: true });
    }
    console.error("[contact] SMTP_HOST is not set; cannot deliver form submission.");
    return NextResponse.json({ ok: false, error: "The form is temporarily unavailable." }, { status: 503 });
  }

  try {
    const transport = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: process.env.SMTP_USER ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS } : undefined,
    });
    await transport.sendMail({ from: FROM, to: TO, replyTo: email, subject, text, html });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] send failed", err);
    return NextResponse.json({ ok: false, error: "We couldn't send your message." }, { status: 502 });
  }
}
