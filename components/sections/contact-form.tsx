"use client";

import { FormEvent, useRef, useState } from "react";
import { trackEvent } from "@/lib/analytics";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const startedRef = useRef(false);
  const errorSummaryRef = useRef<HTMLDivElement>(null);

  function handleFocusStart() {
    if (startedRef.current) return;
    startedRef.current = true;
    trackEvent("contact_form_start");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setFieldErrors({});

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      phone: String(data.get("phone") || ""),
      message: String(data.get("message") || ""),
      consent: data.get("consent") === "on",
      company: String(data.get("company") || ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus("success");
        trackEvent("contact_form_submit");
        form.reset();
        return;
      }

      const body = await response.json().catch(() => ({}));
      setFieldErrors(body.fieldErrors || {});
      setStatus("error");
      errorSummaryRef.current?.focus();
    } catch {
      setFieldErrors({});
      setStatus("error");
      errorSummaryRef.current?.focus();
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-success/30 bg-success/10 p-7 text-sm text-ink"
      >
        <p className="font-serif text-xl text-ink">Thank you — your enquiry has been sent</p>
        <p className="mt-2 text-slate">
          A member of the patient care team will be in touch shortly to arrange your consultation.
        </p>
      </div>
    );
  }

  const hasErrors = Object.keys(fieldErrors).length > 0;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5" onFocus={handleFocusStart}>
      {status === "error" ? (
        <div
          ref={errorSummaryRef}
          tabIndex={-1}
          role="alert"
          className="rounded-xl border border-red-300 bg-red-50 p-4 text-sm text-red-800"
        >
          <p className="font-semibold">
            {hasErrors ? "Please fix the following before continuing:" : "Something went wrong. Please try again."}
          </p>
          {hasErrors ? (
            <ul className="mt-2 list-inside list-disc">
              {Object.entries(fieldErrors).map(([field, message]) => (
                <li key={field}>
                  <a href={`#field-${field}`} className="underline">
                    {message}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      ) : null}

      {/* Honeypot field — hidden from real users, not announced to assistive tech */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="field-company">Company</label>
        <input id="field-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <Field
        id="field-name"
        name="name"
        label="Full name"
        autoComplete="name"
        error={fieldErrors.name}
        required
      />
      <Field
        id="field-email"
        name="email"
        label="Email address"
        type="email"
        autoComplete="email"
        error={fieldErrors.email}
        required
      />
      <Field
        id="field-phone"
        name="phone"
        label="Phone number (optional)"
        type="tel"
        autoComplete="tel"
        error={fieldErrors.phone}
      />

      <div>
        <label htmlFor="field-message" className="block text-sm font-medium text-ink">
          How can we help? <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="field-message"
          name="message"
          rows={4}
          required
          aria-required="true"
          aria-invalid={Boolean(fieldErrors.message)}
          aria-describedby={fieldErrors.message ? "field-message-error" : undefined}
          className="mt-1.5 w-full rounded-xl border border-line bg-cream px-4 py-3 text-sm text-ink focus-visible:border-gold"
        />
        {fieldErrors.message ? (
          <p id="field-message-error" className="mt-1.5 text-sm text-red-700">
            {fieldErrors.message}
          </p>
        ) : null}
      </div>

      <div className="flex items-start gap-3">
        <input
          id="field-consent"
          name="consent"
          type="checkbox"
          required
          aria-required="true"
          aria-invalid={Boolean(fieldErrors.consent)}
          aria-describedby={fieldErrors.consent ? "field-consent-error" : undefined}
          className="mt-1 h-5 w-5 flex-shrink-0 rounded border-line text-ink focus-visible:outline-offset-2"
        />
        <label htmlFor="field-consent" className="text-sm text-slate">
          I agree to be contacted about my enquiry and understand how my information is used, as
          set out in the{" "}
          <a href="/privacy-policy" className="underline">
            privacy policy
          </a>
          .
        </label>
      </div>
      {fieldErrors.consent ? (
        <p id="field-consent-error" className="text-sm text-red-700">
          {fieldErrors.consent}
        </p>
      ) : null}

      <p className="text-xs text-slate-light">
        Please don&apos;t include detailed medical history in this form — the clinical team will
        discuss this with you directly and securely.
      </p>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex min-h-11 items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-ink-2 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send enquiry"}
      </button>
    </form>
  );
}

function Field({
  id,
  name,
  label,
  type = "text",
  autoComplete,
  error,
  required,
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
  autoComplete?: string;
  error?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-ink">
        {label} {required ? <span aria-hidden="true">*</span> : null}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        aria-required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className="mt-1.5 w-full rounded-xl border border-line bg-cream px-4 py-3 text-sm text-ink focus-visible:border-gold"
      />
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-red-700">
          {error}
        </p>
      ) : null}
    </div>
  );
}
