/*
 * SitewideBanner — Figma: Design System > Sitewide Banner
 *
 * Full-width promotional banner at the top of the page.
 * Height: 40px
 * Text: body/5 regular (12px), centered, underlined
 *
 * States:
 *   "no-promo"   — primary/400 bg, neutral/100 text (default reviews message)
 *   "subscribe"  — highlight/200 bg, primary/400 text (subscription offer)
 *   "promo"      — tertiary/200 bg, primary/400 text (promotional offer)
 */

import { typography } from "../../tokens";

export type SitewideBannerState = "no-promo" | "subscribe" | "promo";

type SitewideBannerProps = {
  state?: SitewideBannerState;
  message?: string;
  className?: string;
};

const defaultMessages: Record<SitewideBannerState, string> = {
  "no-promo": "500k+ 5-star Prose haircare reviews on Review & Refine\u00AE",
  subscribe: "15% off your custom haircare orders when you subscribe",
  promo: "50% off your first custom haircare order when you subscribe",
};

const bgClasses: Record<SitewideBannerState, string> = {
  "no-promo": "bg-(--color-primary-400)",
  subscribe: "bg-(--color-highlight-200)",
  promo: "bg-(--color-tertiary-200)",
};

const textClasses: Record<SitewideBannerState, string> = {
  "no-promo": "text-(--color-neutral-100)",
  subscribe: "text-(--color-primary-400)",
  promo: "text-(--color-primary-400)",
};

export function SitewideBanner({
  state = "no-promo",
  message,
  className = "",
}: SitewideBannerProps) {
  return (
    <div
      className={`flex items-center justify-center w-full h-[40px] ${bgClasses[state]} ${className}`}
    >
      <p
        className={`text-center underline whitespace-nowrap ${textClasses[state]}`}
        style={{
          fontFamily: typography.styles.body5Regular.fontFamily,
          fontSize: typography.styles.body5Regular.fontSize,
          fontWeight: typography.styles.body5Regular.fontWeight,
          lineHeight: typography.styles.body5Regular.lineHeight,
          letterSpacing: typography.styles.body5Regular.letterSpacing,
        }}
      >
        {message ?? defaultMessages[state]}
      </p>
    </div>
  );
}
