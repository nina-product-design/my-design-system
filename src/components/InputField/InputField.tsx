import { typography } from "../../tokens";

/*
 * InputField — Figma: Design System Foundations > Input Fields
 *
 * Shared base:
 *   Width   : 327px (full-width in container)
 *   Height  : 56px
 *   Border  : 1px solid neutral/600 (#eaeaea)
 *   Shadow  : 2px 2px 3px rgba(234,234,234,0.5)
 *   BG      : neutral/100 (white), disabled → neutral/600
 *   Padding : 16px horizontal, 8px vertical
 *
 * Types:
 *   form-field — plain text input
 *   dropdown   — text input with caret icon on right
 *   button     — text input with circular arrow button on right
 *
 * States:
 *   default    — placeholder only, no label
 *   active     — label + value, dark underline
 *   disabled   — gray background, label + value
 *   incomplete — error text (no label), red underline + "*Required" helper
 *   invalid    — error label + value, red underline + "*Invalid format" helper
 *   complete   — label + value, no underline
 */

export type InputFieldType = "form-field" | "dropdown" | "button";

export type InputFieldState =
  | "default"
  | "active"
  | "disabled"
  | "incomplete"
  | "invalid"
  | "complete";

type InputFieldProps = {
  type?: InputFieldType;
  state?: InputFieldState;
  label?: string;
  value?: string;
  helperText?: string;
  className?: string;
};

// ─── State styling ───────────────────────────────────────────────────────────

const hasLabel: Record<InputFieldState, boolean> = {
  default: false,
  active: true,
  disabled: true,
  incomplete: false,
  invalid: true,
  complete: true,
};

const hasUnderline: Record<InputFieldState, boolean> = {
  default: false,
  active: true,
  disabled: false,
  incomplete: true,
  invalid: true,
  complete: false,
};

const hasHelper: Record<InputFieldState, boolean> = {
  default: false,
  active: false,
  disabled: false,
  incomplete: true,
  invalid: true,
  complete: false,
};

export const bgClasses: Record<InputFieldState, string> = {
  default:    "bg-(--color-neutral-100)",
  active:     "bg-(--color-neutral-100)",
  disabled:   "bg-(--color-neutral-600)",
  incomplete: "bg-(--color-neutral-100)",
  invalid:    "bg-(--color-neutral-100)",
  complete:   "bg-(--color-neutral-100)",
};

const underlineClasses: Record<InputFieldState, string> = {
  default:    "",
  active:     "bg-(--color-neutral-900)",
  disabled:   "",
  incomplete: "bg-(--color-error-200)",
  invalid:    "bg-(--color-error-200)",
  complete:   "",
};

const labelColorClasses: Record<InputFieldState, string> = {
  default:    "",
  active:     "text-(--color-neutral-900)",
  disabled:   "text-(--color-neutral-900)",
  incomplete: "",
  invalid:    "text-(--color-error-200)",
  complete:   "text-(--color-neutral-900)",
};

const valueColorClasses: Record<InputFieldState, string> = {
  default:    "text-(--color-neutral-800)",
  active:     "text-(--color-neutral-800)",
  disabled:   "text-(--color-neutral-800)",
  incomplete: "text-(--color-error-200)",
  invalid:    "text-(--color-neutral-800)",
  complete:   "text-(--color-neutral-800)",
};

const defaultValues: Record<InputFieldState, string> = {
  default:    "Default state",
  active:     "Active state",
  disabled:   "Disabled state",
  incomplete: "Error state - Incomplete*",
  invalid:    "Error state – Invalid format",
  complete:   "Complete state",
};

const defaultHelpers: Record<InputFieldState, string> = {
  default:    "",
  active:     "",
  disabled:   "",
  incomplete: "*Required",
  invalid:    "*Invalid format",
  complete:   "",
};

// ─── Token refs for ComponentLibrary ─────────────────────────────────────────

export const stateTokens: Record<
  InputFieldState,
  { bg: string; border: string; label?: string; value: string; underline?: string }
> = {
  default:    { bg: "color/neutral/100", border: "color/neutral/600", value: "color/neutral/800" },
  active:     { bg: "color/neutral/100", border: "color/neutral/600", label: "color/neutral/900", value: "color/neutral/800", underline: "color/neutral/900" },
  disabled:   { bg: "color/neutral/600", border: "color/neutral/600", label: "color/neutral/900", value: "color/neutral/800" },
  incomplete: { bg: "color/neutral/100", border: "color/neutral/600", value: "color/error/200", underline: "color/error/200" },
  invalid:    { bg: "color/neutral/100", border: "color/neutral/600", label: "color/error/200", value: "color/neutral/800", underline: "color/error/200" },
  complete:   { bg: "color/neutral/100", border: "color/neutral/600", label: "color/neutral/900", value: "color/neutral/800" },
};

// ─── Sub-icons ───────────────────────────────────────────────────────────────

function CaretIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className="shrink-0 text-(--color-neutral-800)"
      aria-hidden="true"
    >
      <path d="M5 8L10 13L15 8" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function ArrowButton({ active = false }: { active?: boolean }) {
  return (
    <div
      className={[
        "flex items-center justify-center rounded-full size-[29px] shrink-0",
        active ? "bg-(--color-primary-400)" : "bg-(--color-neutral-600)",
      ].join(" ")}
    >
      <svg width="5" height="10" viewBox="0 0 5 10" fill="none" aria-hidden="true">
        <path d="M0 0L5 5L0 10" fill={active ? "white" : "currentColor"} />
      </svg>
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export function InputField({
  type = "form-field",
  state = "default",
  label = "Label",
  value,
  helperText,
  className = "",
}: InputFieldProps) {
  const showLabel = hasLabel[state];
  const showUnderline = hasUnderline[state];
  const showHelper = hasHelper[state];
  const displayValue = value ?? defaultValues[state];
  const displayHelper = helperText ?? defaultHelpers[state];
  const isError = state === "incomplete" || state === "invalid";

  return (
    <div className={`flex flex-col items-start w-full text-left ${className}`}>
      {/* Field container */}
      <div
        className={[
          "flex flex-col items-start w-full",
          "border border-(--color-neutral-600) shadow-[2px_2px_3px_0px_rgba(234,234,234,0.5)]",
        ].join(" ")}
      >
        {/* Inner content */}
        <div
          className={[
            "flex items-center w-full h-[56px] px-(--spacing-spacing-16) py-(--spacing-spacing-8)",
            bgClasses[state],
          ].join(" ")}
        >
          {/* Text area */}
          <div className="flex flex-col flex-1 min-w-0 gap-[2px]">
            {showLabel && (
              <span
                className={labelColorClasses[state]}
                style={{
                  fontFamily: typography.styles.body5Regular.fontFamily,
                  fontSize: typography.styles.body5Regular.fontSize,
                  fontWeight: typography.styles.body5Regular.fontWeight,
                  lineHeight: typography.styles.body5Regular.lineHeight,
                  letterSpacing: typography.styles.body5Regular.letterSpacing,
                }}
              >
                {isError && state === "invalid" ? `${label}*` : label}
              </span>
            )}
            <span
              className={valueColorClasses[state]}
              style={{
                fontFamily: typography.styles.body3Regular.fontFamily,
                fontSize: typography.styles.body3Regular.fontSize,
                fontWeight: typography.styles.body3Regular.fontWeight,
                lineHeight: typography.styles.body3Regular.lineHeight,
                letterSpacing: typography.styles.body3Regular.letterSpacing,
              }}
            >
              {displayValue}
            </span>
          </div>

          {/* Right accessory */}
          {type === "dropdown" && <CaretIcon />}
          {type === "button" && (
            <ArrowButton active={state === "active" || state === "complete"} />
          )}
        </div>

        {/* Underline */}
        {showUnderline && (
          <div className={`h-[2px] w-full ${underlineClasses[state]}`} />
        )}
      </div>

      {/* Helper text */}
      {showHelper && (
        <span
          className="text-(--color-error-200) px-(--spacing-spacing-16)"
          style={{
            fontFamily: typography.styles.body5Regular.fontFamily,
            fontSize: typography.styles.body5Regular.fontSize,
            fontWeight: typography.styles.body5Regular.fontWeight,
            lineHeight: typography.styles.body5Regular.lineHeight,
            letterSpacing: typography.styles.body5Regular.letterSpacing,
          }}
        >
          {displayHelper}
        </span>
      )}
    </div>
  );
}
