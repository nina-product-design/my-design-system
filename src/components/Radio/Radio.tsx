/*
 * Radio — Figma: Design System Foundations > UI Controls > Radio Buttons
 *
 * Sizes: small (20px), large (24px)
 * States: empty, selected (primary/300 fill), disabled (neutral/700 border)
 */

export type RadioState = "empty" | "selected" | "disabled";
export type RadioSize = "small" | "large";

type RadioProps = {
  state?: RadioState;
  size?: RadioSize;
  className?: string;
};

const sizeMap: Record<RadioSize, number> = { small: 20, large: 24 };

export function Radio({ state = "empty", size = "small", className = "" }: RadioProps) {
  const s = sizeMap[size];
  const inner = s * 0.5;

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
          r={s / 2 - 1}
          stroke={state === "disabled" ? "var(--color-neutral-700)" : "var(--color-primary-300)"}
          strokeWidth={1}
          fill="none"
        />
        {/* Inner dot for selected */}
        {state === "selected" && (
          <circle
            cx={s / 2}
            cy={s / 2}
            r={inner / 2}
            fill="var(--color-primary-300)"
          />
        )}
      </svg>
    </div>
  );
}
