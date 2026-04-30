/*
 * VideoControls — Figma: Design System > UI Controls > Video Controls
 *
 * 32x32px circular button for video play/pause.
 *
 * States:
 *   "pause" — two vertical bars (currently playing, click to pause)
 *   "play"  — right-pointing triangle (currently paused, click to play)
 *
 * Circle: 1px border neutral/600, bg neutral/100.
 * Icons: neutral/900.
 */

export type VideoControlsState = "pause" | "play";

type VideoControlsProps = {
  state?: VideoControlsState;
  onClick?: () => void;
  className?: string;
};

export function VideoControls({
  state = "pause",
  onClick,
  className = "",
}: VideoControlsProps) {
  return (
    <button
      onClick={onClick}
      className={`size-[32px] rounded-full border border-(--color-neutral-600) bg-(--color-neutral-100) flex items-center justify-center cursor-pointer ${className}`}
      aria-label={state === "pause" ? "Pause" : "Play"}
    >
      {state === "pause" ? (
        /* Two vertical bars */
        <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
          <rect x="0" y="0" width="3" height="12" rx="0.5" fill="var(--color-neutral-900)" />
          <rect x="7" y="0" width="3" height="12" rx="0.5" fill="var(--color-neutral-900)" />
        </svg>
      ) : (
        /* Play triangle */
        <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
          <path d="M1 1.5V10.5L9 6L1 1.5Z" fill="var(--color-neutral-900)" />
        </svg>
      )}
    </button>
  );
}
