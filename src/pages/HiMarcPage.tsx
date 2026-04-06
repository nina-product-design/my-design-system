export default function HiMarcPage() {
  return (
    <div
      className="flex min-h-screen items-center justify-center"
      style={{ background: "var(--color-neutral-200)" }}
    >
      <div
        className="flex w-full max-w-md flex-col items-start"
        style={{
          background: "var(--color-neutral-900)",
          padding: "var(--spacing-spacing-64) var(--spacing-spacing-24)",
          gap: "var(--spacing-spacing-32)",
        }}
      >
        {/* Heading — h1: Saol Text Light 48px */}
        <h1
          className="w-full"
          style={{
            fontFamily: "var(--font-heading-h1-family)",
            fontSize: "var(--font-heading-h1-size)",
            fontWeight: "var(--font-heading-h1-weight)",
            lineHeight: "var(--font-heading-h1-line-height)",
            letterSpacing: "var(--font-heading-h1-letter-spacing)",
            color: "var(--color-neutral-100)",
          }}
        >
          hi marc!!!
        </h1>

        {/* Body — body-3: Simplon Norm Regular 16px */}
        <p
          className="w-full"
          style={{
            fontFamily: "var(--font-body-3-family)",
            fontSize: "var(--font-body-3-size)",
            fontWeight: "var(--font-body-3-weight-regular)",
            lineHeight: "var(--font-body-3-line-height)",
            letterSpacing: "var(--font-body-3-letter-spacing)",
            color: "var(--color-neutral-100)",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat.
        </p>

        {/* Button — label-2 medium: Simplon Mono Medium 12px, uppercase */}
        <button
          className="flex w-full items-center justify-center uppercase"
          style={{
            background: "var(--color-neutral-100)",
            padding: "var(--spacing-spacing-16) var(--spacing-spacing-32)",
            fontFamily: "var(--font-label-2-family)",
            fontSize: "var(--font-label-2-size)",
            fontWeight: "var(--font-label-2-weight-medium)",
            lineHeight: "var(--font-label-2-line-height)",
            letterSpacing: "2px",
            color: "var(--color-neutral-900)",
          }}
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
}
