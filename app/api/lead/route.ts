import { NextResponse } from "next/server";
import { Resend } from "resend";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Escape user text so it can't inject HTML into the email
function esc(v: unknown): string {
  return String(v ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(req: Request) {
  let data: Record<string, string>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Server-side validation (never trust the client)
  const businessName = (data.businessName ?? "").trim();
  const email = (data.email ?? "").trim();
  const phoneDigits = (data.phone ?? "").replace(/\D/g, "");

  if (!businessName) {
    return NextResponse.json(
      { error: "Business name is required." },
      { status: 400 }
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
  }
  if (phoneDigits.length < 6 || phoneDigits.length > 15) {
    return NextResponse.json(
      { error: "A valid phone number is required." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_TO_EMAIL;
  const from = process.env.LEAD_FROM_EMAIL ?? "Pixelsate Leads <onboarding@resend.dev>";

  if (!apiKey || !to) {
    console.error("Missing RESEND_API_KEY or LEAD_TO_EMAIL env vars.");
    return NextResponse.json(
      { error: "Email is not configured on the server yet." },
      { status: 500 }
    );
  }

  const rows: [string, string][] = [
    ["Business", data.businessName],
    ["Contact name", data.name],
    ["Email", data.email],
    ["Phone", `${data.countryCode ?? ""} ${data.phone ?? ""}`.trim()],
    ["City", data.city],
    ["Website", data.website || "—"],
    ["Social", data.social || "—"],
    ["Intent", data.intent === "serious" ? "Serious about this" : "Just exploring"],
    ["Biggest challenge", data.challenge],
  ];

  const html = `
    <div style="font-family:Inter,Arial,sans-serif;max-width:600px;margin:0 auto;color:#0b3d2e">
      <h2 style="color:#0b3d2e;margin:0 0 4px">New lead from the website</h2>
      <p style="color:#4d5f57;margin:0 0 20px">Someone just filled out the contact form.</p>
      <table style="width:100%;border-collapse:collapse">
        ${rows
          .map(
            ([label, value]) => `
          <tr>
            <td style="padding:10px 12px;background:#f3f7f4;font-weight:600;width:150px;vertical-align:top;border-bottom:1px solid #e5e5e5">${esc(
              label
            )}</td>
            <td style="padding:10px 12px;vertical-align:top;border-bottom:1px solid #e5e5e5">${esc(
              value
            )}</td>
          </tr>`
          )
          .join("")}
      </table>
    </div>`;

  const text = rows.map(([l, v]) => `${l}: ${String(v ?? "")}`).join("\n");

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: to.split(",").map((s) => s.trim()),
      replyTo: email,
      subject: `New lead: ${businessName}`,
      html,
      text,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Could not send email." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Lead send failed:", err);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
