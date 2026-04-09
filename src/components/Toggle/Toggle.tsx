/*
 * Toggle — Figma: Design System Foundations > UI Controls > Toggle
 *
 * Track: 55×18px rounded pill
 * Thumb: 18px circle
 * Off: neutral/600 track, white thumb on left
 * On: primary/300 track, white thumb on right
 *
 * Optional text labels ("OFF" / "ON") on either side — Simplon Mono 11px uppercase
 */

type ToggleProps = {
  on?: boolean;
  showLabels?: boolean;
  label?: string;
  headline?: string;
  onChange?: (on: boolean) => void;
  className?: string;
};

export function Toggle({
  on = false,
  showLabels = false,
  label,
  headline,
  onChange,
  className = "",
}: ToggleProps) {
  const track = (
    <button
      type="button"
      onClick={() => onChange?.(!on)}
      className={[
        "relative w-[55px] h-[24px] rounded-full transition-colors duration-200 cursor-pointer shrink-0",
        on ? "bg-(--color-primary-300)" : "bg-(--color-neutral-600)",
      ].join(" ")}
    >
      <div
        className="absolute top-[3px] size-[18px] rounded-full bg-(--color-neutral-100) transition-[left] duration-200 shadow-[0_1px_2px_rgba(0,0,0,0.15)]"
        style={{ left: on ? "34px" : "3px" }}
      />
    </button>
  );

  const toggleRow = showLabels ? (
    <div className="flex items-center gap-2">
      <span
        className="text-[11px] uppercase tracking-[1px] text-(--color-neutral-900)"
        style={{ fontFamily: "var(--font-label-2-family)" }}
      >
        off
      </span>
      {track}
      <span
        className="text-[11px] uppercase tracking-[1px] text-(--color-neutral-700)"
        style={{ fontFamily: "var(--font-label-2-family)" }}
      >
        on
      </span>
    </div>
  ) : (
    track
  );

  if (!label && !headline) {
    return <div className={className}>{toggleRow}</div>;
  }

  return (
    <div className={`flex flex-col items-start gap-(--spacing-spacing-8) ${className}`}>
      {headline && (
        <span
          className="text-(--color-primary-400)"
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
      <div className="flex items-end gap-(--spacing-spacing-16)">
        {toggleRow}
        {label && (
          <span
            className="text-(--color-primary-400)"
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
