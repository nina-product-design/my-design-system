/*
 * CloseButton — Figma: Design System > UI Controls > Close Button
 *
 * 32x32px circular button with an X icon.
 * Used in RoutineCard, PromoModal, Navigation, and other dismissible elements.
 *
 * Colors:
 *   "light" — bg white/80%, icon primary/400 (for use on images/dark backgrounds)
 *   "dark"  — bg transparent, icon primary/400 (for use on light backgrounds)
 */

export type CloseButtonColor = "light" | "dark";

type CloseButtonProps = {
  color?: CloseButtonColor;
  onClick?: () => void;
  className?: string;
};

function XIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path
        d="M1 1L11 11M11 1L1 11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

const bgClasses: Record<CloseButtonColor, string> = {
  light: "bg-(--color-neutral-100)/50",
  dark: "bg-transparent",
};

export function CloseButton({
  color = "dark",
  onClick,
  className = "",
}: CloseButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`size-[32px] rounded-full flex items-center justify-center text-(--color-primary-400) cursor-pointer ${bgClasses[color]} ${className}`}
      aria-label="Close"
    >
      <XIcon />
    </button>
  );
}
