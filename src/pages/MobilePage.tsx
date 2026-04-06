import { Button } from "../components/Button/Button";
import { typography } from "../tokens";

export default function MobilePage() {
  return (
    <div className="min-h-dvh bg-(--color-neutral-200) flex flex-col">
      {/* Header */}
      <header className="px-(--spacing-spacing-24) pt-(--spacing-spacing-48) pb-(--spacing-spacing-32)">
        <h1
          style={{
            fontFamily: typography.styles.h2.fontFamily,
            fontSize: typography.styles.h2.fontSize,
            fontWeight: typography.styles.h2.fontWeight,
            lineHeight: typography.styles.h2.lineHeight,
            letterSpacing: typography.styles.h2.letterSpacing,
            color: "var(--color-primary-400)",
          }}
        >
          Your personalized formula
        </h1>
        <p
          style={{
            fontFamily: typography.styles.body3Regular.fontFamily,
            fontSize: typography.styles.body3Regular.fontSize,
            fontWeight: typography.styles.body3Regular.fontWeight,
            lineHeight: typography.styles.body3Regular.lineHeight,
            letterSpacing: typography.styles.body3Regular.letterSpacing,
            color: "var(--color-neutral-800)",
          }}
          className="mt-(--spacing-spacing-12)"
        >
          Designed for your skin, backed by science.
        </p>
      </header>

      {/* Content */}
      <main className="flex-1 px-(--spacing-spacing-24)">
        <div
          className="rounded-(--radius-radius-20) bg-(--color-neutral-100) p-(--spacing-spacing-24)"
        >
          <h2
            style={{
              fontFamily: typography.styles.h4.fontFamily,
              fontSize: typography.styles.h4.fontSize,
              fontWeight: typography.styles.h4.fontWeight,
              lineHeight: typography.styles.h4.lineHeight,
              letterSpacing: typography.styles.h4.letterSpacing,
              color: "var(--color-primary-400)",
            }}
          >
            How it works
          </h2>
          <ul className="mt-(--spacing-spacing-16) flex flex-col gap-(--spacing-spacing-16)">
            {["Take the quiz", "We analyze your results", "Get your custom blend"].map(
              (step, i) => (
                <li key={i} className="flex items-start gap-(--spacing-spacing-12)">
                  <span
                    className="flex items-center justify-center shrink-0 w-6 h-6 rounded-full bg-(--color-primary-400) text-(--color-neutral-100)"
                    style={{
                      fontFamily: typography.label2Medium.fontFamily,
                      fontSize: typography.label2Medium.fontSize,
                      fontWeight: typography.label2Medium.fontWeight,
                      lineHeight: typography.label2Medium.lineHeight,
                    }}
                  >
                    {i + 1}
                  </span>
                  <span
                    style={{
                      fontFamily: typography.styles.body3Regular.fontFamily,
                      fontSize: typography.styles.body3Regular.fontSize,
                      fontWeight: typography.styles.body3Regular.fontWeight,
                      lineHeight: typography.styles.body3Regular.lineHeight,
                      color: "var(--color-neutral-800)",
                    }}
                  >
                    {step}
                  </span>
                </li>
              )
            )}
          </ul>
        </div>
      </main>

      {/* Footer CTA */}
      <footer className="px-(--spacing-spacing-24) py-(--spacing-spacing-32) flex justify-center">
        <Button variant="primary-light" size="fixed">
          Get your formula
        </Button>
      </footer>
    </div>
  );
}
