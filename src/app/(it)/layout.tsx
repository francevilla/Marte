import type { Metadata } from "next";
import "../globals.css";
import { fontSans, fontSerif } from "@/lib/fonts";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata("it");

export default function ItRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="it"
      className={`${fontSerif.variable} ${fontSans.variable} scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/favicon.svg" />
        <noscript>
          <style>{`[data-reveal]{opacity:1;transform:none}`}</style>
        </noscript>
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
