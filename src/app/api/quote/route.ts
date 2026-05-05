import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

export const runtime = "nodejs";

const Body = z.object({
  name: z.string().min(2),
  phone: z.string().min(8),
  email: z.string().email(),
  suburb: z.string().min(2),
  service: z.string().min(1),
  size: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().optional(),
  hp: z.string().optional(),
  turnstileToken: z.string().optional(),
});

async function verifyTurnstile(token?: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true; // skip in dev / unconfigured
  if (!token) return false;
  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token }),
    });
    const data = (await res.json()) as { success: boolean };
    return data.success;
  } catch {
    return false;
  }
}

export async function POST(req: Request) {
  let payload;
  try {
    payload = Body.parse(await req.json());
  } catch (e) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  if (payload.hp) return NextResponse.json({ ok: true }); // honeypot tripped, silent succeed

  const ok = await verifyTurnstile(payload.turnstileToken);
  if (!ok) return NextResponse.json({ error: "Spam check failed" }, { status: 400 });

  const to = process.env.QUOTE_TO_EMAIL || "service@cherryrefrigeration.com.au";
  const from = process.env.QUOTE_FROM_EMAIL || "quotes@cherryrefrigeration.com.au";
  const apiKey = process.env.RESEND_API_KEY;

  const text = `New quote request

Name: ${payload.name}
Phone: ${payload.phone}
Email: ${payload.email}
Suburb: ${payload.suburb}
Service: ${payload.service}
Size: ${payload.size || "—"}
Timeline: ${payload.timeline || "—"}

Message:
${payload.message || "(none)"}

Submitted: ${new Date().toISOString()}`;

  // Send transactional email if configured
  if (apiKey) {
    try {
      const resend = new Resend(apiKey);
      await resend.emails.send({
        from: `Cherry Refrigeration Website <${from}>`,
        to: [to],
        replyTo: payload.email,
        subject: `New quote: ${payload.service} — ${payload.suburb}`,
        text,
      });
    } catch (e) {
      // log but don't fail — also fire webhook below
      console.error("Resend send failed", e);
    }
  }

  // Webhook backup (Make/Zapier/etc)
  const webhook = process.env.QUOTE_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (e) {
      console.error("Webhook failed", e);
    }
  }

  return NextResponse.json({ ok: true });
}
