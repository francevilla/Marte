"use client";

import { useState } from "react";
import { t } from "@/lib/translations";
import type { Lang, Translations } from "@/lib/translations";

const EMAIL = "info@marinelysmarte.it";
const PHONE = "+393330000000";

export function ContactForm({ lang, T }: { lang: Lang; T: Translations }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = (fd.get("name") ?? "").toString();
    const phone = (fd.get("phone") ?? "").toString();
    const emailVal = (fd.get("email") ?? "").toString();
    const message = (fd.get("message") ?? "").toString();
    const subject = `Richiesta chiamata da ${name || "un visitatore"} — ${T.contact.title}`;
    const body = `Nome: ${name}\nTelefono: ${phone}\nEmail: ${emailVal}\n\nMessaggio:\n${message}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="space-y-5 text-center">
        <div className="w-16 h-16 rounded-full bg-[#C9A96A]/10 flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl">✉</span>
        </div>
        <h3 className="text-lg font-serif font-bold text-[#0F172A]">
          {T.contact.form.success}
        </h3>
        <p className="text-[#64748B]">
          Ti ricontatterò entro 24 ore. In alternativa:{""}
          <a
            href={`tel:${PHONE.replace(/\s/g, "")}`}
            className="text-[#1B2A4A] underline underline-offset-4 hover:text-brand-gold"
          >
            {PHONE}
          </a>{" "}
          o{" "}
          <a
            href={`mailto:${EMAIL}`}
            className="text-[#1B2A4A] underline underline-offset-4 hover:text-brand-gold"
          >
            {EMAIL}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-white mb-1">
            {T.contact.form.name}
          </label>
          <input
            name="name"
            type="text"
            required
            className="w-full px-4 py-3 rounded-lg border border-[#C9A96A]/50 bg-[#1B2A4A]/30 text-white placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-brand-gold"
            placeholder="Mario Rossi"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white mb-1">
            {T.contact.form.phone}
          </label>
          <input
            name="phone"
            type="tel"
            required
            className="w-full px-4 py-3 rounded-lg border border-[#C9A96A]/50 bg-[#1B2A4A]/30 text-white placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-brand-gold"
            placeholder="+39 333 000 0000"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-white mb-1">
          {T.contact.form.email}
        </label>
        <input
          name="email"
          type="email"
          className="w-full px-4 py-3 rounded-lg border border-[#C9A96A]/50 bg-[#1B2A4A]/30 text-white placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-brand-gold"
          placeholder="mario@email.it"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-white mb-1">
          {T.contact.form.message}
        </label>
        <textarea
          name="message"
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-[#C9A96A]/50 bg-[#1B2A4A]/30 text-white placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-brand-gold"
          placeholder="Descrivimi brevemente l'immobile che vuoi vendere"
        />
      </div>
      <button
        type="submit"
        className="w-full py-4 bg-brand-gold text-[#1B2A4A] font-bold rounded-full hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
      >
        {T.contact.form.submit}
      </button>
      <p className="mt-8 text-center text-[#C9A96A]/70 text-sm">
        In alternativa:{""}
        <a
          href={`tel:${PHONE.replace(/\s/g, "")}`}
          className="text-white hover:text-brand-gold underline underline-offset-2"
        >
          {PHONE}
        </a>{" "}
        •{" "}
        <a
          href={`mailto:${EMAIL}`}
          className="text-white hover:text-brand-gold underline underline-offset-2"
        >
          {EMAIL}
        </a>
        .
      </p>
    </form>
  );
}
