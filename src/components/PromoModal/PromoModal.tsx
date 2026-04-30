/*
 * OfferModal — Figma: Design System > Promo modules > OfferModal
 *
 * Promotional overlay modal with hero image, promo badge, and offer content.
 *
 * Sizes: "desktop" (556px) | "mobile" (375px)
 * Offers: "hc" (60% off haircare) | "sss" (Starter Set) | "sk50" (50% off skincare) | "hc-no-image"
 * Types: "standard" (CTA only) | "email" (input + CTA) | "no-cta" (info only)
 *
 * Image: product photo with PromoBadge (top-left) and close button (top-right)
 * Eyebrow: label-2 regular (12px Simplon Mono) with highlight-200 underline bar
 * Headline: H3 (32px Saol Text, weight 300)
 * Subhead: body-4 regular (14px) with bold segments
 * Disclaimer: body-6 regular (10px), neutral-800
 */

import { typography } from "../../tokens";
import { Button } from "../Button/Button";

export type OfferModalSize = "desktop" | "mobile";
export type OfferModalOffer = "hc" | "sss" | "sk50" | "hc-no-image";
export type OfferModalType = "standard" | "email" | "no-cta";

type OfferModalProps = {
  size?: OfferModalSize;
  offer?: OfferModalOffer;
  type?: OfferModalType;
  /** Override the default offer image. Each offer has a default image. */
  image?: string;
  onClose?: () => void;
  className?: string;
};

// Default images per offer (relative to vite base path)
const defaultImages: Record<string, string> = {
  hc: "/my-design-system/images/pop-up modal/Image.png",
  sss: "/my-design-system/images/pop-up modal/03_GWP_MINI_SKINCARE_SET_B_415 1.png",
  sk50: "/my-design-system/images/pop-up modal/SHOT-2-MAIN_3897PROSE_B_ADOBERGB.png",
};

// ─── Offer content ──────────────────────────────────────────────────────────

type OfferContent = {
  eyebrow: string;
  badge: string;
  headline: string;
  subhead: React.ReactNode;
  disclaimerStandard: string;
  disclaimerEmail: React.ReactNode;
};

const offerContent: Record<string, OfferContent> = {
  hc: {
    eyebrow: "FIRST ORDER EXCLUSIVE",
    badge: "60%\noff",
    headline: "Get 60% off + a free Midi Claw Clip",
    subhead: (
      <>
        Subscribe to any 3+ haircare products to unlock your{" "}
        <span className="font-medium">exclusive welcome offer</span>.* Limited time only!
      </>
    ),
    disclaimerStandard: "See the full promotion terms and conditions here.",
    disclaimerEmail: (
      <>
        By submitting your email address, you agree to receive marketing emails from Prose.
        You also acknowledge and agree to our <span className="underline">Terms</span> and
        confirm that you have read and understand our{" "}
        <span className="underline">Privacy Policy</span>. *Free gift when you subscribe to
        3+ haircare products. See the full promotion terms and conditions{" "}
        <span className="underline">here</span>.
      </>
    ),
  },
  sss: {
    eyebrow: "EXCLUSIVE TRIAL OFFER",
    badge: "$65\nvalue",
    headline: "Claim your Custom\nSkincare Starter Set",
    subhead: (
      <>
        Get a <span className="font-medium">DELUXE Starter Set ($65 value)</span> when you
        subscribe to skincare.
      </>
    ),
    disclaimerStandard: "See the full promotion terms and conditions here.",
    disclaimerEmail: (
      <>
        By submitting your email address, you agree to receive marketing emails from Prose.
        You also acknowledge and agree to our <span className="underline">Terms</span> and
        confirm that you have read and understand our{" "}
        <span className="underline">Privacy Policy</span>. See the full promotion terms and
        conditions <span className="underline">here</span>.
      </>
    ),
  },
  sk50: {
    eyebrow: "FIRST ORDER EXCLUSIVE",
    badge: "50%\noff",
    headline: "Get 50% off\ncustom skincare",
    subhead: "Subscribe to unlock your exclusive welcome offer.",
    disclaimerStandard: "See the full promotion terms and conditions here.",
    disclaimerEmail: null as unknown as React.ReactNode,
  },
  "hc-no-image": {
    eyebrow: "FIRST ORDER EXCLUSIVE",
    badge: "",
    headline: "Get 50% off\ncustom skincare",
    subhead: "Subscribe to unlock your exclusive welcome offer.",
    disclaimerStandard: "See the full promotion terms and conditions here.",
    disclaimerEmail: null as unknown as React.ReactNode,
  },
};

// ─── Sub-components ─────────────────────────────────────────────────────────

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

function PromoBadge({
  text,
  size,
}: {
  text: string;
  size: "desktop" | "mobile";
}) {
  const badgeSize = size === "desktop" ? "size-[128px]" : "size-[86px]";
  const fontSize = size === "desktop" ? "text-[32px]" : "text-[20px]";

  return (
    <div
      className={`flex flex-col items-center justify-center ${badgeSize} rounded-full bg-(--color-highlight-200)`}
    >
      <span
        className={`text-(--color-primary-400) ${fontSize} text-center uppercase leading-[1.2] whitespace-pre-line`}
        style={{
          fontFamily: "var(--font-label-2-family)",
          fontWeight: 500,
        }}
      >
        {text}
      </span>
    </div>
  );
}

function Eyebrow({ text }: { text: string }) {
  return (
    <div className="flex flex-col items-center relative">
      <span
        className="text-(--color-primary-400) uppercase text-center relative z-10"
        style={{
          fontFamily: typography.styles.label2Regular.fontFamily,
          fontSize: typography.styles.label2Regular.fontSize,
          fontWeight: typography.styles.label2Regular.fontWeight,
          lineHeight: typography.styles.label2Regular.lineHeight,
          letterSpacing: typography.styles.label2Regular.letterSpacing,
        }}
      >
        {text}
      </span>
      <div className="h-[10px] w-full bg-(--color-highlight-200) -mt-[10px]" />
    </div>
  );
}

// ─── Component ──────────────────────────────────────────────────────────────

export function PromoModal({
  size = "desktop",
  offer = "hc",
  type = "standard",
  image,
  onClose,
  className = "",
}: OfferModalProps) {
  const isDesktop = size === "desktop";
  const hasImage = offer !== "hc-no-image";
  const resolvedImage = image ?? defaultImages[offer] ?? "";
  const content = offerContent[offer] ?? offerContent.hc;
  const showCta = type !== "no-cta";
  const showEmail = type === "email";

  const containerWidth = isDesktop ? "w-[556px]" : "w-[375px]";
  const imageHeight = isDesktop ? "h-[350px]" : "h-[236px]";
  const badgeOffset = isDesktop ? "top-[20px] left-[20px]" : "top-[13px] left-[12px]";
  const closeOffset = isDesktop ? "top-[20px] right-[20px]" : "top-[12px] right-[12px]";
  const contentPadding = isDesktop
    ? "px-[48px] py-[48px]"
    : "px-(--spacing-spacing-24) py-(--spacing-spacing-48)";

  return (
    <div
      className={`flex flex-col items-center rounded-(--radius-radius-10) overflow-hidden ${containerWidth} ${className}`}
    >
      {/* ── Image + Badge + Close ─────────────────────────────── */}
      {hasImage && resolvedImage && (
        <div className={`relative w-full ${imageHeight}`}>
          <img
            src={resolvedImage}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Promo badge */}
          {content.badge && (
            <div className={`absolute ${badgeOffset}`}>
              <PromoBadge text={content.badge} size={size} />
            </div>
          )}
          {/* Close button */}
          <div className={`absolute ${closeOffset}`}>
            <CloseButton onClose={onClose} />
          </div>
        </div>
      )}

      {/* ── Content area ──────────────────────────────────────── */}
      <div
        className={`relative flex flex-col items-center gap-(--spacing-spacing-24) w-full bg-(--color-neutral-200) ${contentPadding} ${
          !hasImage ? "pt-[24px]" : ""
        }`}
      >
        {/* Close button (no-image variant) */}
        {!hasImage && (
          <div className="absolute top-[12px] right-[12px]">
            <CloseButton onClose={onClose} />
          </div>
        )}

        {/* Text content */}
        <div className="flex flex-col items-center gap-(--spacing-spacing-12) w-full">
          {/* Eyebrow */}
          <Eyebrow text={content.eyebrow} />

          {/* Headline */}
          <h3
            className="text-(--color-neutral-900) text-center w-full whitespace-pre-line"
            style={{
              fontFamily: "var(--font-heading-h3-family)",
              fontSize: "var(--font-heading-h3-size)",
              fontWeight: "var(--font-heading-h3-weight)",
              lineHeight: "var(--font-heading-h3-line-height)",
              letterSpacing: "var(--font-heading-h3-letter-spacing)",
            }}
          >
            {content.headline}
          </h3>

          {/* Subhead */}
          <p
            className="text-(--color-primary-400) text-center w-full"
            style={{
              fontFamily: typography.styles.body4Regular.fontFamily,
              fontSize: typography.styles.body4Regular.fontSize,
              fontWeight: typography.styles.body4Regular.fontWeight,
              lineHeight: typography.styles.body4Regular.lineHeight,
              letterSpacing: typography.styles.body4Regular.letterSpacing,
            }}
          >
            {content.subhead}
          </p>
        </div>

        {/* Email input */}
        {showEmail && (
          <div className={`flex flex-col items-start w-full ${isDesktop ? "max-w-[390px]" : ""} h-[56px] border border-(--color-neutral-600) shadow-[2px_2px_3px_0px_#eaeaea]`}>
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
                Enter email address
              </span>
            </div>
          </div>
        )}

        {/* CTA button */}
        {showCta && (
          <Button variant="primary-light" size={isDesktop ? "fixed" : "fixed"}>
            {showEmail ? "Unlock offer" : "Get your formula"}
          </Button>
        )}

        {/* Disclaimer */}
        <p
          className={`text-(--color-neutral-800) text-center ${isDesktop ? "w-[469px]" : "w-[300px]"}`}
          style={{
            fontFamily: typography.styles.body6Regular.fontFamily,
            fontSize: typography.styles.body6Regular.fontSize,
            fontWeight: typography.styles.body6Regular.fontWeight,
            lineHeight: typography.styles.body6Regular.lineHeight,
            letterSpacing: typography.styles.body6Regular.letterSpacing,
          }}
        >
          {showEmail ? content.disclaimerEmail : content.disclaimerStandard}
        </p>
      </div>
    </div>
  );
}
