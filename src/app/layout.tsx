import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://marte-bpdz0xpu5-francevilla.vercel.app"),
  title: {
    template: "%s | Marinelys Marte",
    default: "Marinelys Marte — Consulenza immobiliare 360° a Bologna",
  },
  description:
    "Agente immobiliare iscritta all'albo e al ruolo. Vendita, trattativa, gestioni condominiali, riqualificazioni, diagnosi energetica e comunità energetiche per proprietari a Bologna.",
  openGraph: {
    locale: "it_IT",
    type: "website",
    siteName: "Marinelys Marte",
    title: "Marinelys Marte — Consulenza immobiliare 360° a Bologna",
    description:
      "Consulenza immobiliare 360° per proprietari venditori a Bologna: vendita, trattativa, gestioni condominiali, riqualificazioni, diagnosi energetica e comunità energetiche.",
    images: [{ url: "/images/og-image.jpg" }],
  },
  alternates: {
    canonical: "https://marinelysmarte.it/",
    languages: {
      it: "https://marinelysmarte.it/",
      en: "https://marinelysmarte.it/en/",
      es: "https://marinelysmarte.it/es/",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
