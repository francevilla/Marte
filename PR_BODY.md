## Summary

This PR implements all high-priority (🔴) and medium-priority (🟡) fixes from the audit document `AUDIT-SITO.md`, plus design/taste corrections.

### 🔴 High-priority fixes (A1–A9)
- **A1** Centralized URL identity: single `siteUrl` from `NEXT_PUBLIC_SITE_URL` (falls back to Vercel preview URL) used everywhere — canonical, hreflang, sitemap, robots, JSON-LD
- **A2** Centralized contact/legal placeholders in `src/lib/contact.ts` with `isPlaceholderData` flag; all public references now pull from here
- **A3** Real form endpoint via `NEXT_PUBLIC_FORM_ENDPOINT` with honest fallback state (`fallback` = mailto opened, `sent` = 2xx response)
- **A4** Compliant cookie banner: non-modal, in-flow at top, Accept/Reject, localStorage choice, no covered headings
- **A5** Structured privacy/cookie policy drafts (still contain `[DA COMPLETARE: …]` placeholders for legal review)
- **A6** Brandbook page removed from nav, footer, sitemap, and route deleted
- **A7** OG image now points to `/images/profile.jpg` (dedicated 1200×630 still TODO)
- **A8** `vercel.json` catch-all removed; redirects for `/it` → `/` added
- **A9** Per-locale `<html lang>` and metadata via route groups `(it)`, `(en)`, `(es)`

### 🟡 Medium-priority fixes (B1–B8)
- **B1** Schema: `FAQPage`, `WebSite`, `RealEstateAgent`/`LocalBusiness`, `Person` with verified credential
- **B3** Fonts: Fraunces (serif) + Manrope (sans) via `next/font` — `--font-serif`/`--font-sans` CSS variables defined
- **B4** Body 16px/1.6 line-height; contrast fixes (footer text now white, gold buttons on navy)
- **B5** Removed eyebrow pills, letter badges, numbering, card grids — distinct section compositions
- **B7** Sitemap with `lastmod`; legal pages included with correct canonical
- **B8** Mobile CTA in nav + form privacy microcopy

### 🟢 Low-priority / cleanup (C1–C3)
- C1 Removed `"use strict"` from TSX
- C2 Replaced emoji with text/SVG
- C3 Removed hairlines, rest shadows, rings, backdrop-blur

### Visual / Taste
- 4 real Bologna photographs (Wikimedia, CC BY-SA / CC0) with footer credits
- Motion: `MotionBoot` + `[data-reveal]` CSS with IntersectionObserver, reduced-motion + `<noscript>` fallbacks
- Navigation changed from fixed to static (eliminates covered-content FAIL)

### Gates
- **Lint**: 0 FAIL, 1 WARN (15 em-dashes — deliberate in legal/brand copy)
- **Inspect**: 0 FAIL, 2 WARN (cream palette from brandbook, no footage — both defensible)
- **Build**: ✅ passes (11 static pages)

### Open items (not blocking)
- Real phone/email/VAT/REA/legal-controller data (user confirmed unavailable)
- Dedicated OG image 1200×630
- Complete legal page placeholders
- Honest video clip (optional)

---

**Ready for review and merge to `main`.**