"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { services } from "@/lib/services";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z.string().min(8, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email"),
  suburb: z.string().min(2, "Please enter your suburb"),
  service: z.string().min(1, "Please choose a service"),
  size: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().optional(),
  hp: z.string().optional(), // honeypot
});

type FormValues = z.infer<typeof schema>;

const steps = [
  ["name", "phone", "email"],
  ["suburb", "service", "size", "timeline"],
  ["message"],
] as const;

export function QuoteForm({ multiStep = false }: { multiStep?: boolean }) {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema), mode: "onBlur" });

  const onSubmit = async (data: FormValues) => {
    if (data.hp) return; // honeypot tripped
    setSubmitting(true);
    setError(null);
    try {
      const turnstileToken = (document.querySelector('[name="cf-turnstile-response"]') as HTMLInputElement | null)?.value;
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, turnstileToken }),
      });
      if (!res.ok) throw new Error(await res.text());
      setSubmitted(true);
      (window as any).gtag?.("event", "quote_submitted", { service: data.service });
      window.history.replaceState({}, "", "/quote-received");
    } catch (e: any) {
      setError("Something went wrong. Please call Keith on 0432 115 513 or try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const nextStep = async () => {
    const valid = await trigger(steps[step] as any);
    if (valid) setStep((s) => Math.min(s + 1, steps.length - 1));
  };

  if (submitted) {
    return (
      <div className="card p-8 text-center">
        <CheckCircle2 className="h-12 w-12 text-cherry mx-auto mb-3" />
        <h3 className="h3 mb-2">Thanks — we've got it.</h3>
        <p className="text-steel">
          Keith will call you back within 60 minutes during business hours, or first thing next morning if it's after
          hours. For urgent breakdowns, call <a href="tel:+61432115513" className="text-cherry font-semibold">0432 115 513</a>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card p-6 sm:p-8 space-y-4" noValidate>
      <div className="flex items-center justify-between">
        <h3 className="h3">Get a free fixed-price quote</h3>
        {multiStep && <span className="text-xs text-steel">Step {step + 1} / {steps.length}</span>}
      </div>
      <p className="text-sm text-steel -mt-2">Free, no obligation. Reply within 24 business hours.</p>

      {/* honeypot */}
      <input type="text" tabIndex={-1} autoComplete="off" className="hidden" {...register("hp")} />

      {(!multiStep || step === 0) && (
        <div className="grid sm:grid-cols-2 gap-3">
          <Field label="Your name" error={errors.name?.message}>
            <input type="text" autoFocus className="input" {...register("name")} />
          </Field>
          <Field label="Phone" error={errors.phone?.message}>
            <input type="tel" className="input" {...register("phone")} />
          </Field>
          <Field label="Email" error={errors.email?.message} className="sm:col-span-2">
            <input type="email" className="input" {...register("email")} />
          </Field>
        </div>
      )}

      {(!multiStep || step === 1) && (
        <div className="grid sm:grid-cols-2 gap-3">
          <Field label="Suburb" error={errors.suburb?.message}>
            <input type="text" className="input" placeholder="e.g. Fortitude Valley" {...register("suburb")} />
          </Field>
          <Field label="Service needed" error={errors.service?.message}>
            <select className="input" {...register("service")} defaultValue="">
              <option value="" disabled>Choose a service</option>
              {services.map((s) => <option key={s.slug} value={s.title}>{s.shortTitle}</option>)}
              <option value="Other / not sure">Other / not sure</option>
            </select>
          </Field>
          <Field label="Cold room size (optional)">
            <select className="input" {...register("size")} defaultValue="">
              <option value="">Not sure / N/A</option>
              <option>Small (up to 3m × 3m)</option>
              <option>Medium (3m × 4m – 5m × 4m)</option>
              <option>Large (5m × 5m+)</option>
              <option>Industrial / multi-zone</option>
            </select>
          </Field>
          <Field label="Timeline">
            <select className="input" {...register("timeline")} defaultValue="">
              <option value="">Choose a timeline</option>
              <option>ASAP / emergency</option>
              <option>Within 2 weeks</option>
              <option>1–2 months</option>
              <option>3+ months / planning</option>
            </select>
          </Field>
        </div>
      )}

      {(!multiStep || step === 2) && (
        <Field label="Tell us a little more (optional)">
          <textarea rows={4} className="input" placeholder="Site details, layout, photos via email…" {...register("message")} />
        </Field>
      )}

      {turnstileSiteKey && step === steps.length - 1 && (
        <div>
          <div className="cf-turnstile" data-sitekey={turnstileSiteKey}></div>
          <script async src="https://challenges.cloudflare.com/turnstile/v0/api.js"></script>
        </div>
      )}

      {error && <p className="text-sm text-cherry">{error}</p>}

      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        {multiStep && step > 0 && (
          <button type="button" onClick={() => setStep((s) => s - 1)} className="btn-outline flex-1">
            Back
          </button>
        )}
        {multiStep && step < steps.length - 1 ? (
          <button type="button" onClick={nextStep} className="btn-primary flex-1">
            Continue
          </button>
        ) : (
          <button type="submit" disabled={submitting} className="btn-primary flex-1">
            {submitting ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</> : "Get My Free Quote"}
          </button>
        )}
      </div>
      <p className="text-xs text-steel">
        By submitting you agree to be contacted by Cherry Refrigeration. We do not share or sell your details. See our{" "}
        <a href="/privacy" className="underline">privacy policy</a>.
      </p>

      <style jsx>{`
        .input {
          width: 100%;
          border: 1.5px solid rgba(11, 31, 58, 0.15);
          border-radius: 8px;
          padding: 10px 12px;
          font-size: 15px;
          background: white;
          color: #0b1f3a;
          transition: border-color 0.15s, box-shadow 0.15s;
        }
        .input:focus {
          outline: none;
          border-color: #c8102e;
          box-shadow: 0 0 0 3px rgba(200, 16, 46, 0.15);
        }
      `}</style>
    </form>
  );
}

function Field({ label, error, className, children }: { label: string; error?: string; className?: string; children: React.ReactNode }) {
  return (
    <label className={`block text-sm font-medium text-navy ${className || ""}`}>
      <span className="block mb-1">{label}</span>
      {children}
      {error && <span className="text-xs text-cherry mt-1 block">{error}</span>}
    </label>
  );
}
