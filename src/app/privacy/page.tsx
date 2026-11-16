import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy — Marinelys Marte",
  description: "Informativa sulla privacy di Marinelys Marte, agente immobiliare a Bologna.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0F172A]">
      <main className="flex-grow px-4 py-20 lg:py-28 mx-auto max-w-2xl">
        <h1 className="text-[36px] font-serif font-bold text-[#1B2A4A] mb-6">Privacy</h1>
        <p className="text-[#475569] leading-relaxed">
          Informativa privacy in corso di redazione. Per qualsiasi richiesta scrivere a
          info@marinelysmarte.it.
        </p>
      </main>
      <footer className="border-t border-[#E2E8F0] py-8 px-4 text-xs text-[#64748B]">
        Marinelys Marte — Agente immobiliare • Bologna
      </footer>
    </div>
  );
}
