"use client";

import { useState } from "react";
import { contact, emailHref, phoneHref } from "@/lib/contact";
import type { Lang, Translations } from "@/lib/translations";

type Status = "idle" | "sending" | "sent" | "fallback" | "error";

export function ContactForm({ lang, T }: { lang: Lang; T: Translations }) {
  const [status, setStatus] = useState<Status>("idle");
  const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    // Senza endpoint configurato il form ricade sul client email,
    // ma il messaggio di successo resta onesto ("client email aperto").
    if (!endpoint) {
      const name = (fd.get("name") ?? "").toString();
      const phone = (fd.get("phone") ?? "").toString();
      const emailVal = (fd.get("email") ?? "").toString();
      const message = (fd.get("message") ?? "").toString();
      const subject = `Richiesta chiamata da ${name || "un visitatore"}`;
      const body = `Nome: ${name}\nTelefono: ${phone}\nEmail: ${emailVal}\n\nMessaggio:\n${message}`;
      window.location.href = `${emailHref}?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(body)}`;
      setStatus("fallback");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        body: fd,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error("Invio non riuscito");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent" || status === "fallback") {
    return (
      <div className="space-y-5 text-center">
        <h3 className="text-xl font-serif font-bold text-white">
          {status === "sent"
            ? T.contact.form.success
            : T.contact.form.fallback}
        </h3>
        <p className="text-white/80">
          {T.contact.phone}:{" "}
          <a
            href={phoneHref}
            className="text-brand-gold underline underline-offset-4 hover:text-white"
          >
            {contact.phone}
          </a>{" "}
          · {T.contact.email}:{" "}
          <a
            href={emailHref}
            className="text-brand-gold underline underline-offset-4 hover:text-white"
          >
            {contact.email}
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" lang={lang}>
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label
            htmlFor="contact-name"
            className="mb-1 block text-sm font-medium text-white"
          >
            {T.contact.form.name}
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="w-full rounded-lg border border-white/25 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-brand-gold"
            placeholder="Mario Rossi"
          />
        </div>
        <div>
          <label
            htmlFor="contact-phone"
            className="mb-1 block text-sm font-medium text-white"
          >
            {T.contact.form.phone}
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className="w-full rounded-lg border border-white/25 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-brand-gold"
            placeholder="+39 333 000 0000"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="contact-email"
          className="mb-1 block text-sm font-medium text-white"
        >
          {T.contact.form.email}
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          className="w-full rounded-lg border border-white/25 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-brand-gold"
          placeholder="mario@email.it"
        />
      </div>
      <div>
        <label
          htmlFor="contact-message"
          className="mb-1 block text-sm font-medium text-white"
        >
          {T.contact.form.message}
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          className="w-full rounded-lg border border-white/25 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-brand-gold"
          placeholder="Descrivimi brevemente l'immobile che vuoi vendere"
        />
      </div>

      {status === "error" && (
        <p
          role="alert"
          className="rounded-lg bg-red-950/60 px-4 py-3 text-sm text-red-100"
        >
          {T.contact.form.error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-brand-gold py-4 font-bold text-brand-navy transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:opacity-60"
      >
        {status === "sending" ? T.contact.form.sending : T.contact.form.submit}
      </button>

      <p className="text-sm leading-relaxed text-white/70">
        {T.contact.form.privacy}
      </p>

      <p className="text-center text-sm text-white/70">
        {T.contact.phone}:{" "}
        <a
          href={phoneHref}
          className="text-white underline underline-offset-2 hover:text-brand-gold"
        >
          {contact.phone}
        </a>{" "}
        · {T.contact.email}:{" "}
        <a
          href={emailHref}
          className="text-white underline underline-offset-2 hover:text-brand-gold"
        >
          {contact.email}
        </a>
      </p>
    </form>
  );
}
