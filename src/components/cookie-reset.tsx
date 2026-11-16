"use client";

const COOKIE_KEY = "marte_cookie_consent";

export function CookieReset() {
  function reset() {
    localStorage.removeItem(COOKIE_KEY);
    window.location.reload();
  }

  return (
    <button
      type="button"
      onClick={reset}
      className="rounded-full bg-brand-navy px-5 py-3 text-sm font-semibold text-white hover:bg-[#14203a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
    >
      Rivedi le preferenze cookie
    </button>
  );
}
