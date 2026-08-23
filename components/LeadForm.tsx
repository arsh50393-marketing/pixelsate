"use client";

import { useState, type FormEvent } from "react";

const countryCodes = [
  { code: "+91", label: "🇮🇳 +91" },
  { code: "+1", label: "🇺🇸 +1" },
  { code: "+44", label: "🇬🇧 +44" },
  { code: "+971", label: "🇦🇪 +971" },
  { code: "+61", label: "🇦🇺 +61" },
  { code: "+65", label: "🇸🇬 +65" },
  { code: "+49", label: "🇩🇪 +49" },
  { code: "+33", label: "🇫🇷 +33" },
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Errors = { businessName?: string; email?: string; phone?: string };

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState("");
  const [intent, setIntent] = useState<"serious" | "exploring" | "">("");
  const [errors, setErrors] = useState<Errors>({});

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSendError("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<
      string,
      string
    >;

    const next: Errors = {};
    if (!data.businessName?.trim()) {
      next.businessName = "Tell us what your business is called";
    }
    if (!EMAIL_RE.test(data.email?.trim() ?? "")) {
      next.email = "Enter a valid email — like name@company.com";
    }
    const digits = (data.phone ?? "").replace(/\D/g, "");
    if (digits.length < 10 || digits.length > 15) {
      next.phone = "Enter a valid phone number (at least 10 digits)";
    }

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setSending(true);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Could not send. Please try again.");
      }
      setSubmitted(true);
    } catch (err) {
      setSendError(
        err instanceof Error ? err.message : "Could not send. Please try again."
      );
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <section id="lead-form" className="border-y border-black/5 bg-ink text-paper">
        <div className="section flex flex-col items-center justify-center py-16 text-center">
          <div className="text-3xl text-mint">✓</div>
          <p className="mt-4 max-w-md text-xl font-medium">
            Got it. We read every one of these ourselves — we&apos;ll be in
            touch soon.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="lead-form" className="border-y border-black/5 bg-ink text-paper">
      <div className="section">
        <p className="eyebrow text-mint" data-aos="fade-up">Lead Form</p>
        <h2 className="h-display mt-3 text-paper" data-aos="fade-up">
          Before we pitch anything, we listen.
        </h2>
        <p className="sub text-white/60" data-aos="fade-up">
          A few honest answers. That&apos;s all we need to know how to help.
        </p>

        <form
          onSubmit={handleSubmit}
          noValidate
          data-aos="fade-up"
          data-aos-delay="100"
          className="mt-8 grid gap-5 md:grid-cols-2"
        >
          <Field
            label="What's your business called?"
            name="businessName"
            required
            error={errors.businessName}
          />
          <Field label="Where are you based?" name="city" required />
          <Field
            label="Got a website? Drop the link."
            name="website"
            type="url"
            optional
          />
          <Field
            label="Most active social — IG, FB or LinkedIn."
            name="social"
            optional
          />

          <Field label="Name" name="name" required />
          <Field
            label="Email"
            name="email"
            type="email"
            required
            error={errors.email}
          />

          {/* Phone with country code */}
          <div className="md:col-span-2">
            <label className="mb-1.5 block text-sm font-medium text-white/80">
              Phone number
            </label>
            <div className="flex gap-2">
              <select
                name="countryCode"
                defaultValue="+91"
                aria-label="Country code"
                className="rounded-xl border border-white/15 bg-white/5 px-3 py-3 text-paper focus:border-mint focus:outline-none focus:ring-1 focus:ring-mint [&>option]:text-ink"
              >
                {countryCodes.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.label}
                  </option>
                ))}
              </select>
              <input
                type="tel"
                name="phone"
                inputMode="numeric"
                required
                placeholder="98765 43210"
                aria-invalid={!!errors.phone}
                className={`w-full rounded-xl border bg-white/5 px-4 py-3 text-paper placeholder:text-white/30 focus:outline-none focus:ring-1 ${
                  errors.phone
                    ? "border-red-400 focus:border-red-400 focus:ring-red-400"
                    : "border-white/15 focus:border-mint focus:ring-mint"
                }`}
              />
            </div>
            {errors.phone && (
              <p className="mt-1.5 text-sm text-red-300">{errors.phone}</p>
            )}
          </div>

          <fieldset className="md:col-span-2">
            <legend className="mb-2 text-sm font-medium text-white/80">
              Are you ready to seriously invest in growth — beyond just
              &ldquo;let&apos;s see what happens&rdquo;?
            </legend>
            <div className="grid gap-3 sm:grid-cols-2">
              <Radio
                name="intent"
                value="serious"
                label="Yes, I'm serious about this"
                checked={intent === "serious"}
                onChange={() => setIntent("serious")}
              />
              <Radio
                name="intent"
                value="exploring"
                label="Just exploring for now"
                checked={intent === "exploring"}
                onChange={() => setIntent("exploring")}
              />
            </div>
          </fieldset>

          <div className="md:col-span-2">
            <label className="mb-1.5 block text-sm font-medium text-white/80">
              What&apos;s the biggest challenge holding your business back right
              now?
            </label>
            <textarea
              name="challenge"
              rows={3}
              required
              className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-paper placeholder:text-white/30 focus:border-mint focus:outline-none focus:ring-1 focus:ring-mint"
            />
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={sending}
              className="w-full rounded-full bg-white px-8 py-4 text-base font-semibold text-ink transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 md:w-auto md:px-12"
            >
              {sending ? "Sending…" : "Let's talk"}
            </button>
            {sendError && (
              <p className="mt-3 text-sm text-red-300">{sendError}</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  optional,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  optional?: boolean;
  error?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-white/80">
        {label}
        {optional && <span className="text-white/40"> (optional)</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        aria-invalid={!!error}
        className={`w-full rounded-xl border bg-white/5 px-4 py-3 text-paper placeholder:text-white/30 focus:outline-none focus:ring-1 ${
          error
            ? "border-red-400 focus:border-red-400 focus:ring-red-400"
            : "border-white/15 focus:border-mint focus:ring-mint"
        }`}
      />
      {error && <p className="mt-1.5 text-sm text-red-300">{error}</p>}
    </div>
  );
}

function Radio({
  name,
  value,
  label,
  checked,
  onChange,
}: {
  name: string;
  value: string;
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label
      className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 transition-colors ${
        checked
          ? "border-mint bg-mint/10"
          : "border-white/15 hover:border-white/30"
      }`}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        required
        className="accent-mint"
      />
      <span className="text-sm">{label}</span>
    </label>
  );
}
