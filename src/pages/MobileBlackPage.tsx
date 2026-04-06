import { Button } from "../components/Button/Button";
import { typography } from "../tokens";

export default function MobileBlackPage() {
  return (
    <div className="min-h-dvh bg-(--color-neutral-900) flex flex-col items-center justify-center px-(--spacing-spacing-24)">
      {/* Heading */}
      <h1
        style={{
          fontFamily: typography.styles.h3.fontFamily,
          fontSize: typography.styles.h3.fontSize,
          fontWeight: typography.styles.h3.fontWeight,
          lineHeight: typography.styles.h3.lineHeight,
          letterSpacing: typography.styles.h3.letterSpacing,
          color: "var(--color-neutral-100)",
        }}
        className="text-center mb-(--spacing-spacing-48)"
      >
        Choose your path
      </h1>

      {/* Buttons */}
      <div className="flex flex-col gap-(--spacing-spacing-16) w-full max-w-[327px]">
        <Button variant="primary-dark" size="fixed">
          Get started
        </Button>
        <Button variant="secondary-dark" size="fixed">
          Learn more
        </Button>
        <Button variant="accent" size="fixed">
          Shop now
        </Button>
      </div>

      {/* Subtitle */}
      <p
        style={{
          fontFamily: typography.styles.body4Regular.fontFamily,
          fontSize: typography.styles.body4Regular.fontSize,
          fontWeight: typography.styles.body4Regular.fontWeight,
          lineHeight: typography.styles.body4Regular.lineHeight,
          letterSpacing: typography.styles.body4Regular.letterSpacing,
          color: "var(--color-neutral-700)",
        }}
        className="mt-(--spacing-spacing-32) text-center"
      >
        Personalized haircare, backed by science.
      </p>
    </div>
  );
}
