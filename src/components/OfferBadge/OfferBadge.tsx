/*
 * OfferBadge — Figma: Design System > Offer Badge / Post Purchase Module
 *
 * Circular promotional badges for offer callouts.
 * Three offer types: 50% OFF, FREE $65 VALUE (SSS), GET $20 (RAF)
 * Two colors: yellow (highlight/200 bg, neutral/900 text), green (primary/400 bg, highlight/200 text)
 * Two sizes: desktop (136px), mobile (88px)
 * Font: Simplon Mono — Medium for primary text, Light for secondary text
 */

import { typography } from "../../tokens";

export type OfferBadgeColor = "yellow" | "green";
export type OfferBadgeSize = "desktop" | "mobile";
export type OfferBadgeOffer = "50-off" | "sss" | "raf";

type OfferBadgeProps = {
  offer: OfferBadgeOffer;
  color?: OfferBadgeColor;
  size?: OfferBadgeSize;
  className?: string;
};

export function OfferBadge({
  offer,
  color = "yellow",
  size = "desktop",
  className = "",
}: OfferBadgeProps) {
  const isDesktop = size === "desktop";
  const dimension = isDesktop ? 136 : 88;

  const bg =
    color === "yellow"
      ? "var(--color-highlight-200)"
      : "var(--color-primary-400)";
  const fg =
    color === "yellow"
      ? "var(--color-neutral-900)"
      : "var(--color-highlight-200)";

  const primaryFontSize = isDesktop ? "32px" : "20px";
  const secondaryFontSize = isDesktop ? "16px" : "10px";

  return (
    <div
      className={className}
      style={{
        width: dimension,
        height: dimension,
        borderRadius: "50%",
        backgroundColor: bg,
        color: fg,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        textTransform: "uppercase",
        letterSpacing: "1px",
        fontFamily: typography.families.label,
      }}
    >
      {offer === "50-off" && (
        <div
          style={{
            fontWeight: typography.weights.medium,
            fontSize: primaryFontSize,
            lineHeight: 1,
          }}
        >
          <div>50%</div>
          <div>OFF</div>
        </div>
      )}

      {offer === "sss" && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: isDesktop ? "8px" : "4px",
          }}
        >
          <div
            style={{
              fontWeight: typography.weights.medium,
              fontSize: primaryFontSize,
              lineHeight: 1,
            }}
          >
            FREE
          </div>
          <div
            style={{
              fontWeight: typography.weights.light,
              fontSize: secondaryFontSize,
              lineHeight: 1,
            }}
          >
            $65 VALUE
          </div>
        </div>
      )}

      {offer === "raf" && (
        <div
          style={{
            fontWeight: typography.weights.medium,
            fontSize: primaryFontSize,
            lineHeight: 1,
          }}
        >
          <div>GET</div>
          <div>$20</div>
        </div>
      )}
    </div>
  );
}
