/*
 * SitewideBanner — Figma: Design System > Sitewide Banner
 *
 * Full-width promotional banner at the top of the page.
 * Height: 40px
 * Text: body/5 regular (12px), centered, underlined
 *
 * Single state: primary/400 bg, neutral/100 text.
 */

import { typography } from "../../tokens";

export type SitewideBannerState = "banner";

type SitewideBannerProps = {
  state?: SitewideBannerState;
  message?: string;
  className?: string;
};

export function SitewideBanner({
  state: _state = "banner",
  message = "Exclusive Welcome Offer: 60% off + free gift",
  className = "",
}: SitewideBannerProps) {
  return (
    <div
      className={`flex items-center justify-center w-full h-[40px] bg-(--color-primary-400) ${className}`}
    >
      <p
        className="text-center underline whitespace-nowrap text-(--color-neutral-100)"
        style={{
          fontFamily: typography.styles.body5Regular.fontFamily,
          fontSize: typography.styles.body5Regular.fontSize,
          fontWeight: typography.styles.body5Regular.fontWeight,
          lineHeight: typography.styles.body5Regular.lineHeight,
          letterSpacing: typography.styles.body5Regular.letterSpacing,
        }}
      >
        {message}
      </p>
    </div>
  );
}
