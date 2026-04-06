import { typography } from "../../tokens";

/*
 * TextLink — Figma: Design System Foundations > Text Links
 *
 * Used when a button is unnecessary or too large.
 *
 * Types:
 *   Primary   — Simplon Mono, 12px, medium 500, uppercase, tracking 0.96px
 *               Underline animates left→right on hover.
 *   Secondary — Same styling as Primary (different semantic token in Figma).
 *   Simple    — Simplon Norm, 14px, regular 400, sentence case, static underline.
 *
 * Color modes:
 *   "light" → primary/400 text on light backgrounds
 *   "dark"  → neutral/100 text on dark backgrounds
 *
 * All variant × state class strings are STATIC LITERALS.
 */

export type TextLinkType = "primary" | "secondary" | "simple";
export type TextLinkColor = "light" | "dark";

type TextLinkProps = {
  type?: TextLinkType;
  color?: TextLinkColor;
  disabled?: boolean;
  hasIcon?: boolean;
  children?: React.ReactNode;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  className?: string;
};

// ─── State class maps ──────────────────────────────────────────────────────────
// Exported so ComponentLibrary can render static hover/disabled previews.

export const stateClasses: Record<
  `${TextLinkType}-${TextLinkColor}`,
  { default: string; hover: string; disabled: string }
> = {
  "primary-light": {
    default:  "text-(--color-primary-400)",
    hover:    "text-(--color-primary-300)",
    disabled: "text-(--color-neutral-700)",
  },
  "primary-dark": {
    default:  "text-(--color-neutral-100)",
    hover:    "text-(--color-neutral-100)",
    disabled: "text-(--color-neutral-700)",
  },
  "secondary-light": {
    default:  "text-(--color-primary-400)",
    hover:    "text-(--color-primary-300)",
    disabled: "text-(--color-neutral-700)",
  },
  "secondary-dark": {
    default:  "text-(--color-neutral-100)",
    hover:    "text-(--color-neutral-100)",
    disabled: "text-(--color-neutral-700)",
  },
  "simple-light": {
    default:  "text-(--color-primary-400)",
    hover:    "text-(--color-primary-300)",
    disabled: "text-(--color-neutral-700)",
  },
  "simple-dark": {
    default:  "text-(--color-neutral-100)",
    hover:    "text-(--color-neutral-100)",
    disabled: "text-(--color-neutral-700)",
  },
};

// Underline color tokens per variant
const underlineColors: Record<`${TextLinkType}-${TextLinkColor}`, { default: string; disabled: string }> = {
  "primary-light":   { default: "bg-(--color-accent-300)", disabled: "bg-(--color-neutral-700)" },
  "primary-dark":    { default: "bg-(--color-accent-300)", disabled: "bg-(--color-neutral-700)" },
  "secondary-light": { default: "bg-(--color-primary-400)", disabled: "bg-(--color-neutral-700)" },
  "secondary-dark":  { default: "bg-(--color-neutral-100)", disabled: "bg-(--color-neutral-700)" },
  "simple-light":    { default: "bg-(--color-primary-400)", disabled: "bg-(--color-neutral-700)" },
  "simple-dark":     { default: "bg-(--color-neutral-100)", disabled: "bg-(--color-neutral-700)" },
};

// Interactive classes (with Tailwind pseudo-class modifiers)
const variantClasses: Record<`${TextLinkType}-${TextLinkColor}`, string> = {
  "primary-light":
    "text-(--color-primary-400) hover:text-(--color-primary-300)",
  "primary-dark":
    "text-(--color-neutral-100)",
  "secondary-light":
    "text-(--color-primary-400) hover:text-(--color-primary-300)",
  "secondary-dark":
    "text-(--color-neutral-100)",
  "simple-light":
    "text-(--color-primary-400) hover:text-(--color-primary-300)",
  "simple-dark":
    "text-(--color-neutral-100)",
};

// ─── Token references for ComponentLibrary docs ─────────────────────────────

export const variantTokens: Record<
  `${TextLinkType}-${TextLinkColor}`,
  { text: string; underline: string }
> = {
  "primary-light":   { text: "color/primary/400", underline: "color/accent/300" },
  "primary-dark":    { text: "color/neutral/100", underline: "color/accent/300" },
  "secondary-light": { text: "color/primary/400", underline: "color/primary/400" },
  "secondary-dark":  { text: "color/neutral/100", underline: "color/neutral/100" },
  "simple-light":    { text: "color/primary/400", underline: "color/primary/400" },
  "simple-dark":     { text: "color/neutral/100", underline: "color/neutral/100" },
};

// ─── Arrow icon (play outline from Figma) ────────────────────────────────────

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="9.5" stroke="currentColor" />
      <path d="M8.5 6L13.5 10L8.5 14" fill="currentColor" />
    </svg>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export function TextLink({
  type = "primary",
  color = "light",
  disabled = false,
  hasIcon = false,
  children = "Text goes here",
  href,
  onClick,
  className = "",
}: TextLinkProps) {
  const key = `${type}-${color}` as const;
  const isSimple = type === "simple";

  const textColorClass = disabled
    ? "text-(--color-neutral-700)"
    : variantClasses[key];

  const underlineBg = disabled
    ? underlineColors[key].disabled
    : underlineColors[key].default;

  if (isSimple) {
    return (
      <a
        href={href}
        onClick={disabled ? undefined : onClick}
        aria-disabled={disabled || undefined}
        className={[
          "inline-flex items-center gap-(--spacing-spacing-8) underline decoration-current",
          "transition-colors duration-150 ease-out",
          textColorClass,
          disabled ? "pointer-events-none" : "cursor-pointer",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        style={{
          fontFamily: typography.styles.body4Regular.fontFamily,
          fontSize: typography.styles.body4Regular.fontSize,
          fontWeight: typography.styles.body4Regular.fontWeight,
          lineHeight: typography.styles.body4Regular.lineHeight,
          letterSpacing: typography.styles.body4Regular.letterSpacing,
        }}
      >
        {children}
      </a>
    );
  }

  // Primary & Secondary — animated underline
  return (
    <a
      href={href}
      onClick={disabled ? undefined : onClick}
      aria-disabled={disabled || undefined}
      className={[
        "group inline-flex items-center gap-(--spacing-spacing-8)",
        "transition-colors duration-150 ease-out",
        textColorClass,
        disabled ? "pointer-events-none" : "cursor-pointer",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span className="flex flex-col gap-[4px] items-start overflow-clip">
        <span
          className="uppercase whitespace-nowrap"
          style={{
            fontFamily: typography.label2Medium.fontFamily,
            fontSize: typography.label2Medium.fontSize,
            fontWeight: typography.label2Medium.fontWeight,
            lineHeight: typography.label2Medium.lineHeight,
            letterSpacing: typography.label2Medium.letterSpacing,
          }}
        >
          {children}
        </span>
        <span
          className={[
            "h-px w-full origin-left transition-transform duration-300 ease-out",
            disabled ? "scale-x-100" : "scale-x-100 group-hover:scale-x-0 group-hover:origin-right",
            underlineBg,
          ].join(" ")}
          aria-hidden="true"
        />
      </span>
      {hasIcon && <ArrowIcon />}
    </a>
  );
}
