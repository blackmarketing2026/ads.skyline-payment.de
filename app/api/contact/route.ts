import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const industries = new Set(["Gastronomie", "Einzelhandel", "Sonstiges"]);

function text(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  const payload = {
    name: text(body.name),
    company: text(body.company),
    phone: text(body.phone),
    email: text(body.email),
    industry: text(body.industry),
    message: text(body.message),
    privacy: text(body.privacy),
  };

  if (!payload.name || !payload.phone || !payload.email) {
    return NextResponse.json({ error: "Bitte füllen Sie alle Pflichtfelder aus." }, { status: 400 });
  }

  if (!EMAIL_RE.test(payload.email)) {
    return NextResponse.json({ error: "Bitte geben Sie eine gültige E-Mail-Adresse ein." }, { status: 400 });
  }

  if (payload.industry && !industries.has(payload.industry)) {
    return NextResponse.json({ error: "Bitte wählen Sie eine gültige Branche." }, { status: 400 });
  }

  if (payload.privacy !== "accepted") {
    return NextResponse.json({ error: "Bitte stimmen Sie der Verarbeitung Ihrer Angaben zu." }, { status: 400 });
  }

  // Prepared for future mail delivery, for example via Resend.
  console.info("Contact request received", {
    ...payload,
    phone: payload.phone.replace(/\d(?=\d{3})/g, "*"),
    email: payload.email.replace(/(^.).*(@.*$)/, "$1***$2"),
  });

  return NextResponse.json({ ok: true });
}
