import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { profile } from "@/lib/data";

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(200),
  service: z.string().trim().max(100).optional(),
  message: z.string().trim().min(1).max(5000),
  company: z.string().max(0).optional(), // honeypot
});

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid submission." }, { status: 400 });
  }

  if (parsed.data.company) {
    return NextResponse.json({ ok: true });
  }

  const { name, email, service, message } = parsed.data;

  const sheetsUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  const resendKey = process.env.RESEND_API_KEY;

  if (!sheetsUrl && !resendKey) {
    return NextResponse.json(
      { error: "Form delivery not configured yet. Please email directly for now." },
      { status: 503 }
    );
  }

  const results = await Promise.allSettled([
    sheetsUrl
      ? fetch(sheetsUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            email,
            service: service ?? "",
            message,
            submittedAt: new Date().toISOString(),
          }),
        }).then((res) => {
          if (!res.ok) throw new Error("Sheets webhook failed");
        })
      : Promise.reject(new Error("Sheets webhook not configured")),

    resendKey
      ? new Resend(resendKey).emails.send({
          from: `Portfolio Contact <noreply@${process.env.RESEND_SEND_DOMAIN ?? "resend.dev"}>`,
          to: profile.email,
          replyTo: email,
          subject: `New inquiry from ${name}${service ? ` — ${service}` : ""}`,
          text: `From: ${name} <${email}>\nService: ${service ?? "Not specified"}\n\n${message}`,
        })
      : Promise.reject(new Error("Resend not configured")),
  ]);

  const succeeded = results.some((r) => r.status === "fulfilled");

  if (!succeeded) {
    return NextResponse.json({ error: "Could not send message. Please try again." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
