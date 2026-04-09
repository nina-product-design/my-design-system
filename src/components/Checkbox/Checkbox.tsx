/*
 * Checkbox — Figma: Design System Foundations > UI Controls > Checkboxes
 *
 * States: empty, selected (primary/300 fill + white check), inactive (neutral/200 fill + dash), read-only
 * Size: 28×28px, shadow 2px 2px 3px #eaeaea
 */

export type CheckboxState = "empty" | "selected" | "inactive" | "read-only";

type CheckboxProps = {
  state?: CheckboxState;
  label?: string;
  headline?: string;
  className?: string;
};

function CheckIcon({ color = "white" }: { color?: string }) {
  return (
    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden="true">
      <path d="M1 5.5L6 10.5L15 1.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DashIcon() {
  return (
    <svg width="12" height="2" viewBox="0 0 12 2" fill="none" aria-hidden="true">
      <line x1="0" y1="1" x2="12" y2="1" stroke="var(--color-neutral-700)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function Box({ state }: { state: CheckboxState }) {
  const base = "flex items-center justify-center size-[28px] shrink-0 shadow-[2px_2px_3px_0px_#eaeaea]";

  if (state === "selected") {
    return (
      <div className={`${base} bg-(--color-primary-300)`}>
        <CheckIcon />
      </div>
    );
  }

  if (state === "inactive") {
    return (
      <div className={`${base} bg-(--color-neutral-200)`}>
        <DashIcon />
      </div>
    );
  }

  if (state === "read-only") {
    return (
      <div className={`${base} bg-(--color-primary-300) opacity-50`}>
        <CheckIcon />
      </div>
    );
  }

  // empty
  return (
    <div className={`${base} bg-(--color-neutral-100) border border-(--color-neutral-700)/50`} />
  );
}

export function Checkbox({
  state = "empty",
  label,
  headline,
  className = "",
}: CheckboxProps) {
  if (!label && !headline) {
    return <Box state={state} />;
  }

  return (
    <div className={`flex flex-col items-start gap-(--spacing-spacing-8) ${className}`}>
      {headline && (
        <span
          className="text-(--color-neutral-900)"
          style={{
            fontFamily: "var(--font-body-4-family)",
            fontSize: "var(--font-body-4-size)",
            fontWeight: "var(--font-body-4-weight-regular)",
            lineHeight: "var(--font-body-4-line-height)",
            letterSpacing: "var(--font-body-4-letter-spacing)",
          }}
        >
          {headline}
        </span>
      )}
      <div className="flex items-center gap-(--spacing-spacing-16)">
        <Box state={state} />
        {label && (
          <span
            className={state === "inactive" ? "text-(--color-neutral-700)" : "text-(--color-neutral-900)"}
            style={{
              fontFamily: "var(--font-body-4-family)",
              fontSize: "var(--font-body-4-size)",
              fontWeight: "var(--font-body-4-weight-regular)",
              lineHeight: "var(--font-body-4-line-height)",
              letterSpacing: "var(--font-body-4-letter-spacing)",
            }}
          >
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
