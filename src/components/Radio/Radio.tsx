/*
 * Radio — Figma: Design System Foundations > UI Controls > Radio Buttons
 *
 * Sizes: small (20px outer, 15px inner), large (24px outer, 18px inner)
 * States: empty (neutral/700 ring), selected (primary/400 ring + dot), disabled (neutral/700 ring + dot)
 */

export type RadioState = "empty" | "selected" | "disabled";
export type RadioSize = "small" | "large";

type RadioProps = {
  state?: RadioState;
  size?: RadioSize;
  className?: string;
};

const sizeMap: Record<RadioSize, number> = { small: 20, large: 24 };
const dotMap: Record<RadioSize, number> = { small: 7.5, large: 9 };

export function Radio({ state = "empty", size = "small", className = "" }: RadioProps) {
  const s = sizeMap[size];
  const dotR = dotMap[size];

  const ringColor = state === "selected"
    ? "var(--color-primary-400)"
    : "var(--color-neutral-700)";

  const dotColor = state === "selected"
    ? "var(--color-primary-400)"
    : "var(--color-neutral-700)";

  return (
    <div
      className={`flex items-center justify-center shrink-0 rounded-full ${className}`}
      style={{ width: s, height: s }}
    >
      <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`} fill="none">
        {/* Outer circle */}
        <circle
          cx={s / 2}
          cy={s / 2}
          r={s / 2 - 0.5}
          stroke={ringColor}
          strokeWidth={1}
          fill="none"
        />
        {/* Inner dot for selected and disabled */}
        {(state === "selected" || state === "disabled") && (
          <circle
            cx={s / 2}
            cy={s / 2}
            r={dotR}
            fill={dotColor}
          />
        )}
      </svg>
    </div>
  );
}
