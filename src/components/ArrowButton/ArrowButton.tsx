/*
 * ArrowButton — Figma: Design System > UI Controls > Arrow Button
 *
 * Circular arrow buttons for carousel/slider navigation.
 *
 * Sizes:
 *   "small" — 29px, rounded-[14.5px]
 *   "large" — 50px, rounded-full
 *
 * Directions:
 *   "left"  — chevron pointing left
 *   "right" — chevron pointing right
 *
 * Colors:
 *   "light"    — bg neutral/300, icon primary/400
 *   "dark"     — bg primary/300, icon neutral/100
 *   "disabled" — bg neutral/600, icon neutral/700
 */

export type ArrowButtonSize = "small" | "large";
export type ArrowButtonDirection = "left" | "right";
export type ArrowButtonColor = "light" | "dark" | "disabled";

type ArrowButtonProps = {
  size?: ArrowButtonSize;
  direction?: ArrowButtonDirection;
  color?: ArrowButtonColor;
  onClick?: () => void;
  className?: string;
};

const bgClasses: Record<ArrowButtonColor, string> = {
  light: "bg-(--color-neutral-300)",
  dark: "bg-(--color-primary-300)",
  disabled: "bg-(--color-neutral-600)",
};

const iconColors: Record<ArrowButtonColor, string> = {
  light: "var(--color-primary-400)",
  dark: "var(--color-neutral-100)",
  disabled: "var(--color-neutral-700)",
};

function ChevronSvg({ size, direction, color }: { size: ArrowButtonSize; direction: ArrowButtonDirection; color: ArrowButtonColor }) {
  const stroke = iconColors[color];
  const isSmall = size === "small";
  const w = isSmall ? 5 : 11;
  const h = isSmall ? 10 : 19;
  const strokeW = isSmall ? 1.5 : 2;

  return (
    <svg
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      fill="none"
      style={direction === "left" ? { transform: "scaleX(-1)" } : undefined}
    >
      <path
        d={isSmall ? "M0.5 0.5L4.5 5L0.5 9.5" : "M1 1L10 9.5L1 18"}
        stroke={stroke}
        strokeWidth={strokeW}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowButton({
  size = "small",
  direction = "right",
  color = "light",
  onClick,
  className = "",
}: ArrowButtonProps) {
  const isSmall = size === "small";
  const sizeClass = isSmall ? "size-[29px] rounded-[14.5px]" : "size-[50px] rounded-full";
  const isDisabled = color === "disabled";

  return (
    <button
      onClick={isDisabled ? undefined : onClick}
      disabled={isDisabled}
      className={`flex items-center justify-center ${sizeClass} ${bgClasses[color]} ${
        isDisabled ? "cursor-default" : "cursor-pointer"
      } ${className}`}
      aria-label={`${direction === "left" ? "Previous" : "Next"}`}
    >
      <ChevronSvg size={size} direction={direction} color={color} />
    </button>
  );
}
