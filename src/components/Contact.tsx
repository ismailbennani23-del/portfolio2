"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { profile } from "@/lib/data";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const update =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (FORMSPREE_ENDPOINT.includes("YOUR_FORM_ID")) {
      const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "a recruiter"}`);
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus("sent");
      return;
    }
    try {
      setStatus("sending");
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full rounded-lg border border-line bg-white px-4 py-3 text-[15px] text-navy outline-none transition-colors placeholder:text-muted-2 focus:border-accent focus:ring-2 focus:ring-accent/20";

  return (
    <section id="contact" className="section">
      <div className="shell">
        <div className="grid gap-12 md:grid-cols-[1fr_1fr] md:gap-16">
          <Reveal>
            <span className="eyebrow-line mb-[18px]">Contact</span>
            <h2 className="font-display text-[clamp(30px,4.4vw,46px)] font-medium leading-[1.06] tracking-[-0.015em] text-navy">
              Let&apos;s talk about <em className="italic text-accent-600">your team&apos;s</em> next analyst.
            </h2>
            <p className="mt-[18px] max-w-[440px] text-[17px] text-muted">
              I&apos;m actively seeking internships and entry-level roles in finance, analytics, and financial services. Send a note, or reach me directly below.
            </p>
            <div className="mt-8 space-y-3">
              <a href={`mailto:${profile.email}`} className="flex items-center justify-between rounded-xl border border-line p-4 transition-all hover:-translate-y-0.5 hover:border-accent">
                <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted-2">Email</span>
                <span className="text-[15px] font-semibold text-navy">{profile.email}</span>
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between rounded-xl border border-line p-4 transition-all hover:-translate-y-0.5 hover:border-accent">
                <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted-2">LinkedIn</span>
                <span className="text-[15px] font-semibold text-navy">{profile.linkedinLabel}</span>
              </a>
              <div className="flex items-center justify-between rounded-xl border border-line p-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted-2">Location</span>
                <span className="text-[15px] font-semibold text-navy">{profile.location}</span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="rounded-2xl border border-line bg-mist p-7">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.1em] text-muted-2">Name</label>
                  <input id="name" required value={form.name} onChange={update("name")} className={inputClass} placeholder="Jane Recruiter" />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.1em] text-muted-2">Email</label>
                  <input id="email" type="email" required value={form.email} onChange={update("email")} className={inputClass} placeholder="you@company.com" />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.1em] text-muted-2">Message</label>
                  <textarea id="message" required rows={4} value={form.message} onChange={update("message")} className={`${inputClass} resize-none`} placeholder="A few lines about the role or opportunity…" />
                </div>
                <button type="submit" disabled={status === "sending"} className="btn btn-primary w-full justify-center disabled:opacity-60">
                  {status === "sending" ? "Sending…" : "Send message"}
                </button>
                {status === "sent" && (
                  <p className="text-center text-[14px] font-medium text-accent-600">
                    Thanks — your message is on its way. I&apos;ll reply soon.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-center text-[14px] font-medium text-red-600">
                    Something went wrong. Please email me directly at {profile.email}.
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
