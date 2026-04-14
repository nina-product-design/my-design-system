/*
 * Tag — Figma: Design System Foundations > Tags
 *
 * Offer/promo tags with lime highlight background.
 * BG: highlight/200 (#ECFF92), text: primary/400, uppercase
 * Font: Simplon Mono Medium — label/1 (14px) default, label/2 (12px) small
 * Padding: 8px, radius: 4px
 */

import { typography } from "../../tokens";

export type TagSize = "default" | "small";

type TagProps = {
  children: React.ReactNode;
  size?: TagSize;
  className?: string;
};

export function Tag({ children, size = "default", className = "" }: TagProps) {
  const isSmall = size === "small";
  const typo = isSmall ? typography.label2Medium : typography.styles.label1Medium;

  return (
    <div
      className={`inline-flex items-center justify-center p-(--spacing-spacing-8) rounded-(--radius-radius-4) bg-(--color-highlight-200) ${className}`}
    >
      <span
        className="text-(--color-primary-400) uppercase whitespace-nowrap"
        style={{
          fontFamily: typo.fontFamily,
          fontSize: typo.fontSize,
          fontWeight: typo.fontWeight,
          lineHeight: typo.lineHeight,
          letterSpacing: typo.letterSpacing,
        }}
      >
        {children}
      </span>
    </div>
  );
}
