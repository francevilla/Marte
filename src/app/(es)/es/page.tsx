import { Landing } from "@/components/landing";
import { t } from "@/lib/translations";
import { CookieConsent } from "@/components/cookie-consent";

export default function EsPage() {
  return (
    <>
      <CookieConsent lang="es" T={t.es} />
      <Landing lang="es" T={t.es} />
    </>
  );
}
