"use strict";

import Link from "next/link";
import { t } from "@/lib/translations";
import type { Lang, Translations } from "@/lib/translations";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SectionHeader } from "@/components/section-header";
import { ContactForm } from "@/components/contact-form";

const subjectBase = "https://marinelysmarte.it";

export function Landing({ lang, T }: { lang: Lang; T: Translations }) {
  const subject = `${subjectBase}/${lang === "it" ? "" : lang + "/"}`;

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0F172A]">
      <a href="#contact" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#1B2A4A] focus:text-white focus:rounded">
        Vai ai contatti
      </a>
      <Navigation lang={lang} T={T} />

      <main className="flex-grow">
        {/* HERO */}
        <section
          id="hero"
          className="relative px-4 pt-20 pb-12 lg:pt-32 lg:pb-20 overflow-hidden"
        >
          <div className="mx-auto max-w-5xl text-center">
            <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-brand-gold uppercase bg-[#1B2A4A]/10 rounded-full border border-brand-gold/20">
              {T.hero.badge}
            </span>
            <h1 className="text-[48px] lg:text-[64px] font-serif font-bold text-[#0F172A] mb-6 leading-[1.15] tracking-tight">
              {T.hero.title}
            </h1>
            <p className="text-lg lg:text-xl text-[#475569] mb-10 max-w-2xl mx-auto leading-relaxed">
              {T.hero.sub}
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1B2A4A] text-white font-semibold rounded-full ring-1 ring-brand-gold/40 hover:bg-[#14203a] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2"
            >
              {T.hero.cta} →
            </Link>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="px-4 py-20 lg:py-28 bg-[#F7F3EE]">
          <div className="mx-auto max-w-5xl">
            <SectionHeader title={T.about.title} sub={T.about.sub} />
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-64 lg:h-80 rounded-2xl overflow-hidden border border-white ring-1 ring-brand-gold/30">
                <img
                  src="/images/profile.jpg"
                  alt="Marinelys Marte"
                  className="w-full h-full object-cover"
                  loading="eager"
                  width="800"
                  height="800"
                  decoding="async"
                />
              </div>
              <div className="space-y-6">
                <p className="text-lg text-[#475569] leading-relaxed">
                  {T.about.bio}
                </p>
                <div className="flex items-center gap-3 pt-4">
                  <span className="w-10 h-10 rounded-full bg-[#1B2A4A] flex items-center justify-center text-white font-bold text-xs uppercase tracking-wider">
                    AM
                  </span>
                  <p className="text-sm font-semibold text-[#0F172A]">
                    Marinelys Marte — Agente immobiliare
                  </p>
                </div>
                <p className="text-sm text-[#475569] bg-white p-4 rounded-lg border border-[#C9A96A]/30">
                  <strong>{T.about.badge}</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="px-4 py-20 lg:py-28">
          <div className="mx-auto max-w-5xl">
            <SectionHeader title={T.services.title} sub={T.services.sub} />
            <div className="grid md:grid-cols-3 gap-8">
              {T.services.items.map((s, i) => (
                <article
                  key={i}
                  className="p-8 rounded-2xl border border-[#E2E8F0] bg-white hover:border-brand-gold/50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#1B2A4A]/10 flex items-center justify-center mb-6 group-hover:bg-brand-gold group-hover:text-white transition-colors">
                    <span className="text-lg">{String.fromCharCode(65 + i)}</span>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-[#0F172A] mb-3">
                    {s.title}
                  </h3>
                  <p className="text-[#475569] leading-relaxed">{s.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="px-4 py-20 lg:py-28 bg-[#F7F3EE]">
          <div className="mx-auto max-w-5xl">
            <SectionHeader title={T.process.title} sub={T.process.sub} />
            <div className="grid md:grid-cols-2 gap-12">
              {T.process.steps.map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1B2A4A] flex items-center justify-center text-white font-serif font-bold text-lg">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-bold text-[#0F172A] mb-1">
                      {step.title}
                    </h3>
                    <p className="text-[#475569] text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="px-4 py-20 lg:py-28">
          <div className="mx-auto max-w-3xl">
            <SectionHeader title={T.faq.title} />
            <div className="space-y-4">
              {T.faq.items.map((item, i) => (
                <div key={i} className="border border-[#E2E8F0] rounded-xl bg-white p-6">
                  <h3 className="font-serif font-bold text-[#0F172A] mb-2">
                    {item.q}
                  </h3>
                  <p className="text-[#475569] text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="px-4 py-20 lg:py-28 bg-[#1B2A4A]">
          <div className="mx-auto max-w-3xl">
            <SectionHeader title={T.contact.title} sub={T.contact.sub} />
            <ContactForm lang={lang} T={T} />
          </div>
        </section>
      </main>

      <Footer lang={lang} T={T} />

      {/* JSON-LD: RealEstateAgent + LocalBusiness + Person */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Person",
                "@id": `${subject}#person`,
                "name": "Marinelys Marte",
                "jobTitle": "Agente immobiliare",
                "worksFor": {
                  "@type": "RealEstateAgent",
                  "@id": `${subject}#agency`,
                },
                "memberOf": [
                  {
                    "@type": "Organization",
                    "name": "Albo e ruolo degli agenti di affari in mediazione",
                    "legalName": "Camera di Commercio di Bologna",
                  },
                ],
                "image": `${subject}images/profile-placeholder.svg`,
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Bologna",
                  "addressCountry": "IT",
                },
                "telephone": "+393330000000",
                "email": "info@marinelysmarte.it",
                "url": subject,
                "sameAs": [],
                "knowsAbout": [
                  "compravendita immobiliare",
                  "stima immobile",
                  "trattativa immobiliare",
                  "gestioni condominiali",
                  "diagnosi energetica",
                  "comunità energetiche",
                  "riqualificazione immobiliare",
                ],
              },
              {
                "@type": "RealEstateAgent",
                "@id": `${subject}#agency`,
                "name": "Marinelys Marte — Consulenza Immobiliare 360°",
                "legalName": "Marinelys Marte",
                "description": "Consulenza immobiliare 360° per proprietari venditori a Bologna: vendita, trattativa, gestioni condominiali, riqualificazioni, diagnosi energetica e comunità energetiche.",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Bologna",
                  "addressCountry": "IT",
                },
                "telephone": "+393330000000",
                "email": "info@marinelysmarte.it",
                "url": subject,
                "priceRange": "€€",
                "hasCredential": {
                  "@type": "OccupationalCredential",
                  "name": "Iscrizione all'albo e al ruolo degli agenti di affari in mediazione",
                  "issuedBy": {
                    "@type": "Organization",
                    "name": "Camera di Commercio di Bologna",
                  },
                },
                "areaServed": [
                  {
                    "@type": "City",
                    "name": "Bologna",
                    "country": "IT",
                  },
                ],
              },
              {
                "@type": "LocalBusiness",
                "@id": `${subject}#localbusiness`,
                "name": "Marinelys Marte",
                "image": `${subject}images/profile-placeholder.svg`,
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Bologna",
                  "addressCountry": "IT",
                },
                "telephone": "+393330000000",
                "email": "info@marinelysmarte.it",
                "url": subject,
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 44.4949,
                  "longitude": 11.3426,
                },
                "openingHours": "Mo-Fr 09:00-18:00",
                "sameAs": [],
                "knowsAbout": ["real estate", "property sale", "energy efficiency"],
              },
            ],
          }),
        }}
      />
    </div>
  );
}
