"use client";

import { useState } from "react";
import { buildWhatsAppLink, buildMailtoLink } from "@/lib/site-config";

type FormState = {
  name: string;
  email: string;
  age: string;
  course: string;
  method: string;
  teacher: string;
  timing: string;
  message: string;
};

const INITIAL: FormState = {
  name: "",
  email: "",
  age: "",
  course: "",
  method: "",
  teacher: "",
  timing: "",
  message: "",
};

function buildEnquiryMessage(f: FormState) {
  const lines = [
    "Assalamu Alaikum,",
    "",
    "I would like to enquire about online Quran classes at Noor-ul-Quran Academy.",
    "",
    `Name: ${f.name}`,
  ];
  if (f.email) lines.push(`Email: ${f.email}`);
  if (f.age) lines.push(`Student's Age: ${f.age}`);
  if (f.course) lines.push(`Preferred Course: ${f.course}`);
  if (f.method) lines.push(`Preferred Teaching Method: ${f.method}`);
  if (f.teacher) lines.push(`Preferred Teacher: ${f.teacher}`);
  if (f.timing) lines.push(`Preferred Days/Timings: ${f.timing}`);
  if (f.message) lines.push(`Additional Message: ${f.message}`);
  lines.push("", "Jazak Allah.");
  return lines.join("\n");
}

export function ContactForm() {
  const [data, setData] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>(
    {}
  );
  const [notice, setNotice] = useState<string | null>(null);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setData((prev) => ({ ...prev, [key]: value }));
  }

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!data.name.trim()) next.name = "Please enter your name.";
    if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      next.email = "Please enter a valid email.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function submitViaWhatsApp(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validate()) return;
    const msg = buildEnquiryMessage(data);
    setNotice(
      "Opening WhatsApp with your enquiry. Please tap Send inside WhatsApp to complete your message."
    );
    window.open(buildWhatsAppLink(msg), "_blank", "noopener,noreferrer");
  }

  function submitViaEmail() {
    if (!validate()) return;
    const body = buildEnquiryMessage(data);
    setNotice(
      "Opening your email application with the enquiry prefilled. Please tap Send to complete your message."
    );
    window.location.href = buildMailtoLink(undefined, body);
  }

  return (
    <form
      onSubmit={submitViaWhatsApp}
      noValidate
      className="space-y-5 rounded-2xl border border-gold-elegant/25 bg-white p-6 sm:p-8 shadow-sm"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Parent or Student Name"
          required
          error={errors.name}
          id="name"
        >
          <input
            id="name"
            type="text"
            required
            autoComplete="name"
            value={data.name}
            onChange={(e) => update("name", e.target.value)}
            className={inputCls(errors.name)}
          />
        </Field>

        <Field label="Email Address (optional)" error={errors.email} id="email">
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={data.email}
            onChange={(e) => update("email", e.target.value)}
            className={inputCls(errors.email)}
          />
        </Field>

        <Field label="Student's Age (optional)" id="age">
          <input
            id="age"
            type="text"
            inputMode="numeric"
            value={data.age}
            onChange={(e) => update("age", e.target.value)}
            className={inputCls()}
          />
        </Field>

        <Field label="Course Preference" id="course">
          <select
            id="course"
            value={data.course}
            onChange={(e) => update("course", e.target.value)}
            className={inputCls()}
          >
            <option value="">Select a course</option>
            <option>Nazra Quran</option>
            <option>Hifz-ul-Quran</option>
            <option>Quran with Tajweed</option>
            <option>Quran for Beginners</option>
          </select>
        </Field>

        <Field label="Preferred Teaching Method" id="method">
          <select
            id="method"
            value={data.method}
            onChange={(e) => update("method", e.target.value)}
            className={inputCls()}
          >
            <option value="">Select a method</option>
            <option>Video Call</option>
            <option>Audio / Voice Call</option>
          </select>
        </Field>

        <Field label="Preferred Teacher" id="teacher">
          <select
            id="teacher"
            value={data.teacher}
            onChange={(e) => update("teacher", e.target.value)}
            className={inputCls()}
          >
            <option value="">Select a teacher</option>
            <option>Qari (Male Teacher)</option>
            <option>Female Quran Teacher (female students only)</option>
          </select>
        </Field>
      </div>

      <Field label="Preferred Days or Timings (optional)" id="timing">
        <input
          id="timing"
          type="text"
          value={data.timing}
          onChange={(e) => update("timing", e.target.value)}
          placeholder="e.g. Weekdays, after Maghrib"
          className={inputCls()}
        />
      </Field>

      <Field label="Additional Message (optional)" id="message">
        <textarea
          id="message"
          rows={4}
          value={data.message}
          onChange={(e) => update("message", e.target.value)}
          className={inputCls()}
        />
      </Field>

      <p className="text-xs text-forest-dark/60">
        Submitting this form will continue your enquiry in WhatsApp or your email
        application — nothing is stored on this website.
      </p>

      <div className="flex flex-col sm:flex-row gap-3">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-emerald-deep px-6 py-3 text-sm font-semibold text-cream-warm shadow-sm transition hover:bg-forest-dark"
        >
          Send via WhatsApp
        </button>
        <button
          type="button"
          onClick={submitViaEmail}
          className="inline-flex items-center justify-center rounded-full border border-emerald-deep/30 bg-cream-warm px-6 py-3 text-sm font-semibold text-emerald-deep transition hover:bg-sage-muted"
        >
          Send via Email
        </button>
      </div>

      {notice && (
        <p
          role="status"
          className="rounded-md bg-sage-muted/70 border border-gold-elegant/30 px-4 py-3 text-sm text-emerald-deep"
        >
          {notice}
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  required,
  error,
  id,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  id: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-sm font-medium text-emerald-deep"
      >
        {label}
        {required && <span className="ml-1 text-gold-elegant">*</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1 text-xs text-red-700" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function inputCls(error?: string) {
  return `w-full rounded-lg border bg-white px-3 py-2.5 text-sm text-forest-dark shadow-sm transition focus:outline-none focus:ring-2 focus:ring-gold-elegant/50 ${
    error ? "border-red-500" : "border-emerald-deep/15"
  }`;
}
