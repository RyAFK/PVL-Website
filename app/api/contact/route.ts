import { NextResponse } from "next/server";

// PLACEHOLDER handler — validates the enquiry and returns success, but does
// not yet send an email or write to a CRM. Wire this up to an approved
// email/CRM provider before launch; do not add a new third-party provider
// without sign-off first.
interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  consent?: boolean;
  // honeypot field — real users never fill this in
  company?: string;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (payload.company) {
    // Honeypot triggered — respond as if successful without processing.
    return NextResponse.json({ ok: true });
  }

  const fieldErrors: Record<string, string> = {};

  if (!payload.name || payload.name.trim().length < 2) {
    fieldErrors.name = "Enter your full name.";
  }
  if (!payload.email || !isValidEmail(payload.email)) {
    fieldErrors.email = "Enter a valid email address.";
  }
  if (!payload.message || payload.message.trim().length < 10) {
    fieldErrors.message = "Add a short message so the team knows how to help.";
  }
  if (!payload.consent) {
    fieldErrors.consent = "Please confirm you agree to be contacted about your enquiry.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return NextResponse.json({ fieldErrors }, { status: 400 });
  }

  // In production this would notify the clinic (email/CRM) — intentionally
  // not implemented here, see route comment above.
  return NextResponse.json({ ok: true });
}
