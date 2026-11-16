import { Landing } from "@/components/landing";
import { t } from "@/lib/translations";
import { CookieConsent } from "@/components/cookie-consent";

export default function RootPage() {
  return (
    <>
      <CookieConsent lang="it" T={t.it} />
      <Landing lang="it" T={t.it} />
    </>
  );
}
