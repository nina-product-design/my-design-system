/*
 * PromoModal — Figma: Design System > Promo Modals
 *
 * Promotional overlay modal with optional hero image, headline, subhead,
 * form field, CTA button, text link, and disclaimer.
 *
 * Sizes:
 *   "desktop" — 555px wide, 20px radius, 40px content padding
 *   "mobile"  — 375px wide, 10px top radius (bottom-sheet style), 24px content padding
 *
 * Image: optional hero image (350px desktop, 236px mobile) with close button overlay
 * Eyebrow: plain uppercase label OR highlight tag (lime bg)
 * Headline: H3 (32px Saol Text, weight 300)
 * Subhead: body/4 regular (14px)
 * Form field: email input (56px, border neutral/600)
 * CTA: primary-light button (full width)
 * Text link: underlined body/4 link
 * Disclaimer: body/5 (12px), neutral/800, with Terms & Privacy links
 */

import { typography } from "../../tokens";
import { Button } from "../Button/Button";

export type PromoModalSize = "desktop" | "mobile";

type PromoModalProps = {
  size?: PromoModalSize;
  image?: string;
  eyebrow?: string;
  eyebrowHighlight?: boolean;
  headline?: string;
  subhead?: string;
  showFormField?: boolean;
  ctaLabel?: string;
  textLink?: string;
  showDisclaimer?: boolean;
  onClose?: () => void;
  className?: string;
};

// ─── Close button ───────────────────────────────────────────────────────────

function CloseButton({ onClose }: { onClose?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClose}
      className="flex items-center justify-center size-[32px] rounded-full cursor-pointer shrink-0 bg-white/50"
    >
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
        <path d="M1 1L11 11M11 1L1 11" stroke="var(--color-primary-400)" strokeWidth="1.2" />
      </svg>
    </button>
  );
}

// ─── Component ──────────────────────────────────────────────────────────────

export function PromoModal({
  size = "desktop",
  image,
  eyebrow,
  eyebrowHighlight = false,
  headline = "Headline goes here and can be up to 2 lines",
  subhead,
  showFormField = false,
  ctaLabel = "Get your formula",
  textLink,
  showDisclaimer = false,
  onClose,
  className = "",
}: PromoModalProps) {
  const isDesktop = size === "desktop";
  const hasImage = !!image;

  const containerWidth = isDesktop ? "w-[555px]" : "w-[375px]";
  const containerRadius = isDesktop
    ? hasImage
      ? "rounded-(--radius-radius-20)"
      : "rounded-(--radius-radius-20)"
    : "rounded-t-(--radius-radius-10)";

  const contentPadding = isDesktop
    ? "px-[40px] py-[40px]"
    : "px-(--spacing-spacing-24) py-(--spacing-spacing-48)";

  const textWidth = isDesktop ? "max-w-[460px]" : "max-w-[327px]";

  return (
    <div
      className={`relative flex flex-col items-center ${containerWidth} ${containerRadius} overflow-hidden ${className}`}
    >
      {/* ── Close button — always 24px from top-right of modal ── */}
      <div className="absolute top-[24px] right-[24px] z-10">
        <CloseButton onClose={onClose} />
      </div>

      {/* ── Image section ─────────────────────────────────────── */}
      {hasImage && (
        <div className={`relative w-full ${isDesktop ? "h-[350px]" : "h-[236px]"}`}>
          <img
            src={image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      )}

      {/* ── Content section ───────────────────────────────────── */}
      <div
        className={`flex flex-col items-center w-full bg-(--color-neutral-200) ${contentPadding} ${
          !hasImage && isDesktop ? "rounded-(--radius-radius-20)" : ""
        } ${!hasImage ? "pt-[72px]" : ""}`}
      >

        <div className={`flex flex-col items-center gap-(--spacing-spacing-32) w-full ${textWidth}`}>
          {/* ── Text block ─────────────────────────────────────── */}
          <div className="flex flex-col items-center gap-(--spacing-spacing-12) w-full text-center">
            {/* Eyebrow */}
            {eyebrow && !eyebrowHighlight && (
              <p
                className="text-(--color-primary-400) uppercase w-full"
                style={{
                  fontFamily: typography.styles.label1Regular.fontFamily,
                  fontSize: typography.styles.label1Regular.fontSize,
                  fontWeight: typography.styles.label1Regular.fontWeight,
                  lineHeight: typography.styles.label1Regular.lineHeight,
                  letterSpacing: typography.styles.label1Regular.letterSpacing,
                }}
              >
                {eyebrow}
              </p>
            )}

            {/* Eyebrow highlight (Tag-style) */}
            {eyebrow && eyebrowHighlight && (
              <div className="inline-flex items-center justify-center p-(--spacing-spacing-8) rounded-(--radius-radius-4) bg-(--color-highlight-200)">
                <span
                  className="text-(--color-primary-400) uppercase whitespace-nowrap"
                  style={{
                    fontFamily: typography.label2Medium.fontFamily,
                    fontSize: typography.label2Medium.fontSize,
                    fontWeight: typography.label2Medium.fontWeight,
                    lineHeight: typography.label2Medium.lineHeight,
                    letterSpacing: typography.label2Medium.letterSpacing,
                  }}
                >
                  {eyebrow}
                </span>
              </div>
            )}

            {/* Headline */}
            {headline && (
              <h3
                className="text-(--color-primary-400) w-full"
                style={{
                  fontFamily: "var(--font-heading-h3-family)",
                  fontSize: "var(--font-heading-h3-size)",
                  fontWeight: "var(--font-heading-h3-weight)",
                  lineHeight: "var(--font-heading-h3-line-height)",
                  letterSpacing: "var(--font-heading-h3-letter-spacing)",
                }}
              >
                {headline}
              </h3>
            )}

            {/* Subhead */}
            {subhead && (
              <p
                className="text-(--color-primary-400) w-full"
                style={{
                  fontFamily: typography.styles.body4Regular.fontFamily,
                  fontSize: typography.styles.body4Regular.fontSize,
                  fontWeight: typography.styles.body4Regular.fontWeight,
                  lineHeight: typography.styles.body4Regular.lineHeight,
                  letterSpacing: typography.styles.body4Regular.letterSpacing,
                }}
              >
                {subhead}
              </p>
            )}
          </div>

          {/* ── CTA block ──────────────────────────────────────── */}
          <div className="flex flex-col items-center gap-(--spacing-spacing-24) w-full">
            {/* Form field */}
            {showFormField && (
              <div className="flex flex-col items-start w-full max-w-[390px] h-[56px] border border-(--color-neutral-600) shadow-[2px_2px_3px_0px_#eaeaea]">
                <div className="flex items-center w-full h-[56px] px-(--spacing-spacing-16) py-(--spacing-spacing-8) bg-(--color-neutral-100)">
                  <span
                    className="text-(--color-neutral-800)"
                    style={{
                      fontFamily: typography.styles.body3Regular.fontFamily,
                      fontSize: typography.styles.body3Regular.fontSize,
                      fontWeight: typography.styles.body3Regular.fontWeight,
                      lineHeight: typography.styles.body3Regular.lineHeight,
                      letterSpacing: typography.styles.body3Regular.letterSpacing,
                    }}
                  >
                    Email address*
                  </span>
                </div>
              </div>
            )}

            {/* CTA button */}
            {ctaLabel && (
              <Button variant="primary-light" size="fixed">
                {ctaLabel}
              </Button>
            )}

            {/* Text link */}
            {textLink && (
              <p
                className="text-(--color-primary-400) text-center underline cursor-pointer w-full"
                style={{
                  fontFamily: typography.styles.body4Regular.fontFamily,
                  fontSize: typography.styles.body4Regular.fontSize,
                  fontWeight: typography.styles.body4Regular.fontWeight,
                  lineHeight: typography.styles.body4Regular.lineHeight,
                  letterSpacing: typography.styles.body4Regular.letterSpacing,
                }}
              >
                {textLink}
              </p>
            )}

            {/* Disclaimer */}
            {showDisclaimer && (
              <p
                className="text-(--color-neutral-800) text-center w-full"
                style={{
                  fontFamily: typography.styles.body5Regular.fontFamily,
                  fontSize: typography.styles.body5Regular.fontSize,
                  fontWeight: typography.styles.body5Regular.fontWeight,
                  lineHeight: typography.styles.body5Regular.lineHeight,
                  letterSpacing: typography.styles.body5Regular.letterSpacing,
                }}
              >
                By submitting your email address, you agree to receive marketing emails from
                Prose. You also acknowledge and agree to our{" "}
                <span className="underline cursor-pointer">Terms</span> and confirm that you
                have read and understand our{" "}
                <span className="underline cursor-pointer">Privacy Policy</span>.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
