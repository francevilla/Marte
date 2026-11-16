import { Landing } from "@/components/landing";
import { t } from "@/lib/translations";
import { CookieConsent } from "@/components/cookie-consent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marinelys Marte — Consulenza immobiliare 360° a Bologna",
  description:
    "Agente immobiliare iscritta all'albo e al ruolo. Vendita, trattativa, gestioni condominiali, riqualificazioni, diagnosi energetica e comunità energetiche per proprietari a Bologna.",
  alternates: {
    canonical: "https://marte-bpdz0xpu5-francevilla.vercel.app/",
    languages: {
      it: "https://marte-bpdz0xpu5-francevilla.vercel.app/",
      en: "https://marte-bpdz0xpu5-francevilla.vercel.app/en/",
      es: "https://marte-bpdz0xpu5-francevilla.vercel.app/es/",
    },
  },
};

export default function RootPage() {
  return (
    <>
      <Landing lang="it" T={t.it} />
      <CookieConsent lang="it" T={t.it} />
    </>
  );
}
