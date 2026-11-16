import { Landing } from "@/components/landing";
import { t } from "@/lib/translations";
import { CookieConsent } from "@/components/cookie-consent";

export default function EnPage() {
  return (
    <>
      <Landing lang="en" T={t.en} />
      <CookieConsent lang="en" T={t.en} />
    </>
  );
}
