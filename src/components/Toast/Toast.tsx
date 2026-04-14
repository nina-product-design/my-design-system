/*
 * Toast — Figma: Design System Foundations > Toast
 *
 * Types: removal (×), added (✓), paused (‖), error (×)
 * Breakpoints: mobile (345px, px-24), desktop (600px, px-48)
 * Optional product image on right (32×40px, rounded-[6px])
 *
 * BG: primary/300 for removal/added/paused, error/200 for error
 * Icon: 24px circle, bg white/15%, type-specific SVG
 * Text: body/4 medium (14px Simplon Norm medium), neutral/100
 * Shadow: 0px 8px 24px rgba(0,0,0,0.18)
 * Radius: 12px
 * Height: 60px
 */

import { typography } from "../../tokens";

export type ToastType = "removal" | "added" | "paused" | "error";
export type ToastBreakpoint = "mobile" | "desktop";

type ToastProps = {
  type?: ToastType;
  message: string;
  image?: string;
  breakpoint?: ToastBreakpoint;
  className?: string;
};

// ─── Icons ───────────────────────────────────────────────────────────────────

function CloseIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
      <path d="M1 1L9 9M9 1L1 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="12" height="10" viewBox="0 0 12 10" fill="none" aria-hidden="true">
      <path d="M1 5L4.5 8.5L11 1.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg width="8" height="10" viewBox="0 0 8 10" fill="none" aria-hidden="true">
      <line x1="1" y1="0" x2="1" y2="10" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <line x1="7" y1="0" x2="7" y2="10" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

const iconMap: Record<ToastType, () => JSX.Element> = {
  removal: CloseIcon,
  added: CheckIcon,
  paused: PauseIcon,
  error: CloseIcon,
};

const bgMap: Record<ToastType, string> = {
  removal: "bg-(--color-primary-300)",
  added: "bg-(--color-primary-300)",
  paused: "bg-(--color-primary-300)",
  error: "bg-(--color-error-200)",
};

const widthMap: Record<ToastBreakpoint, string> = {
  mobile: "w-[343px] px-(--spacing-spacing-16)",
  desktop: "w-[600px] px-(--spacing-spacing-16)",
};

// ─── Component ────────────────────────────────────────────────────────────────

export function Toast({
  type = "removal",
  message,
  image,
  breakpoint = "mobile",
  className = "",
}: ToastProps) {
  const Icon = iconMap[type];

  return (
    <div
      className={`flex items-center h-[60px] py-(--spacing-spacing-12) rounded-xl shadow-[0px_8px_24px_0px_rgba(0,0,0,0.18)] ${bgMap[type]} ${widthMap[breakpoint]} ${className}`}
    >
      <div className="flex items-center justify-between w-full">
        {/* Left: icon + text */}
        <div className="flex items-center gap-(--spacing-spacing-16)">
          {/* Icon circle */}
          <div className="flex items-center justify-center size-[24px] rounded-full bg-white/15 shrink-0">
            <Icon />
          </div>
          {/* Message */}
          <span
            className="text-(--color-neutral-100) whitespace-nowrap"
            style={{
              fontFamily: typography.styles.body4Medium.fontFamily,
              fontSize: typography.styles.body4Medium.fontSize,
              fontWeight: typography.styles.body4Medium.fontWeight,
              lineHeight: typography.styles.body4Medium.lineHeight,
            }}
          >
            {message}
          </span>
        </div>

        {/* Right: optional product image */}
        {image && (
          <img
            src={image}
            alt=""
            className="w-[32px] h-[40px] rounded-[6px] object-cover shrink-0"
          />
        )}
      </div>
    </div>
  );
}
