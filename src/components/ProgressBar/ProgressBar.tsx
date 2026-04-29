/*
 * ProgressBar — Figma: Design System > Progress Bars
 *
 * Horizontal step progress indicator for consultation and R&R flows.
 * Track BG: neutral/600 (#eaeaea). Fill: secondary/200 (#a2c6d1).
 * Font: Simplon Mono Regular, 10px, tracking 0.8px, uppercase, centered.
 * Text: active = neutral/900, completed = neutral/800, upcoming = neutral/700.
 * Desktop: 1440px × 29px. Mobile: 375px × 29px.
 * Dividers: 1px vertical lines at each step boundary.
 */

import { typography } from "../../tokens";

export type ProgressBarSize = "desktop" | "mobile";

type ProgressBarProps = {
  steps: string[];
  activeStep: number;
  size?: ProgressBarSize;
  className?: string;
};

// ─── Predefined step configurations ──────────────────────
export const HAIR_RR_STEPS = ["OVERALL", "SCALP", "HAIR", "PRODUCTS", "FRAGRANCE"];
export const SKIN_RR_STEPS = ["OVERALL", "SKIN", "PRODUCTS", "FRAGRANCE"];
export const HAIR_CONSULTATION_STEPS = ["HAIR & SCALP", "TREATMENTS", "LIFESTYLE", "PREFERENCES"];
export const SKIN_CONSULTATION_STEPS = ["LIFESTYLE", "MY SKIN", "PREFERENCES"];

export function ProgressBar({
  steps,
  activeStep,
  size = "desktop",
  className = "",
}: ProgressBarProps) {
  const isDesktop = size === "desktop";
  const barHeight = 29;
  const fillPercent = Math.min(
    ((activeStep + 0.5) / steps.length) * 100,
    100,
  );

  const dividerStyle: React.CSSProperties = {
    width: 1,
    alignSelf: "stretch",
    backgroundColor: "rgba(0, 0, 0, 0.06)",
    flexShrink: 0,
  };

  return (
    <div
      className={className}
      style={{
        position: "relative",
        width: isDesktop ? 1440 : 375,
        height: barHeight,
        backgroundColor: "var(--color-neutral-600)",
        overflow: "hidden",
      }}
    >
      {/* Fill */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          right: `${100 - fillPercent}%`,
          backgroundColor: "var(--color-secondary-200)",
        }}
      />

      {/* Labels + dividers */}
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          height: "100%",
          fontFamily: typography.families.label,
          fontWeight: typography.weights.regular,
          fontSize: 10,
          lineHeight: 1.2,
          letterSpacing: "0.8px",
          textTransform: "uppercase",
          textAlign: "center",
        }}
      >
        <div style={dividerStyle} />
        {steps.map((step, i) => (
          <div key={step} style={{ display: "contents" }}>
            <div
              style={{
                flex: 1,
                color:
                  i < activeStep
                    ? "var(--color-neutral-800)"
                    : i === activeStep
                      ? "var(--color-neutral-900)"
                      : "var(--color-neutral-700)",
              }}
            >
              {step}
            </div>
            <div style={dividerStyle} />
          </div>
        ))}
      </div>
    </div>
  );
}
