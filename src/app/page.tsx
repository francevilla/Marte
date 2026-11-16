import { Landing } from "@/components/landing";
import { t } from "@/lib/translations";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marinelys Marte — Consulenza immobiliare 360° a Bologna",
  description:
    "Agente immobiliare iscritta all'albo e al ruolo. Vendita, trattativa, gestioni condominiali, riqualificazioni, diagnosi energetica e comunità energetiche per proprietari a Bologna.",
  alternates: {
    canonical: "https://marinelysmarte.it/",
    languages: {
      it: "https://marinelysmarte.it/",
      en: "https://marinelysmarte.it/en/",
      es: "https://marinelysmarte.it/es/",
    },
  },
};

export default function RootPage() {
  return <Landing lang="it" T={t.it} />;
}
