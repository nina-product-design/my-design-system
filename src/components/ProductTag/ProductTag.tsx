/*
 * ProductTag — Figma: Design System > Product Tag
 *
 * Small overlay badge used on product images (e.g. RoutineCard).
 * Semi-transparent white background with body/5 regular text.
 *
 * Dimensions: auto-width, px-8 py-4px, radius-4.
 * Background: white/50%.
 * Text: body/5 regular (12px), primary/300.
 */

import { typography } from "../../tokens";

type ProductTagProps = {
  label?: string;
  className?: string;
};

export function ProductTag({
  label = "Recommended",
  className = "",
}: ProductTagProps) {
  return (
    <div className={`bg-(--color-neutral-100)/50 px-(--spacing-spacing-8) py-[4px] rounded-(--radius-radius-4) ${className}`}>
      <span
        className="text-(--color-primary-300) whitespace-nowrap"
        style={{
          fontFamily: typography.styles.body5Regular.fontFamily,
          fontSize: typography.styles.body5Regular.fontSize,
          fontWeight: typography.styles.body5Regular.fontWeight,
          lineHeight: typography.styles.body5Regular.lineHeight,
          letterSpacing: typography.styles.body5Regular.letterSpacing,
        }}
      >
        {label}
      </span>
    </div>
  );
}
