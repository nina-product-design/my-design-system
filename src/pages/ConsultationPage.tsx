import { useState } from "react";
import { Logo } from "../components/Logo";
import { Selector } from "../components/Selector";
import { Button } from "../components/Button";
import { typography } from "../tokens";
import { ArrowLeft } from "lucide-react";

const CATEGORIES = ["HAIR & SCALP", "TREATMENTS", "LIFESTYLE", "PREFERENCES"];

const LENGTHS = [
  { label: "Short", subcopy: "Buzz-cut to early-Beatles" },
  { label: "Chin-length", subcopy: "Doesn't touch shoulders" },
  { label: "Shoulder length", subcopy: "Sits on shoulders or falls slightly past" },
  { label: "Long", subcopy: "Below shoulder blades to mid-back" },
  { label: "Very Long", subcopy: "Mid-back and beyond" },
];

export default function ConsultationPage() {
  const [selected, setSelected] = useState<number>(1);
  const [showImages, setShowImages] = useState(false);

  return (
    <div className="min-h-dvh bg-(--color-neutral-200) flex flex-col max-w-[430px] mx-auto w-full">
      {/* Promo banner */}
      <div className="bg-(--color-primary-400) py-(--spacing-spacing-8) text-center">
        <a
          href="#"
          className="text-(--color-neutral-100) underline"
          style={{
            fontFamily: typography.styles.body5Regular.fontFamily,
            fontSize: typography.styles.body5Regular.fontSize,
            fontWeight: typography.styles.body5Regular.fontWeight,
            lineHeight: typography.styles.body5Regular.lineHeight,
            letterSpacing: typography.styles.body5Regular.letterSpacing,
          }}
        >
          Exclusive Welcome Offer: 60% off + free gift
        </a>
      </div>

      {/* Header */}
      <header className="flex items-center justify-center px-(--spacing-spacing-24) py-(--spacing-spacing-16) relative">
        <Logo variant="dark" height={18} />
        <button
          className="absolute right-(--spacing-spacing-24) text-(--color-neutral-900) cursor-pointer bg-transparent border-none"
          style={{
            fontFamily: typography.styles.body3Regular.fontFamily,
            fontSize: typography.styles.body3Regular.fontSize,
            fontWeight: typography.styles.body3Regular.fontWeight,
            lineHeight: typography.styles.body3Regular.lineHeight,
            letterSpacing: typography.styles.body3Regular.letterSpacing,
          }}
        >
          Exit
        </button>
      </header>

      {/* Category tabs + progress bar */}
      <nav className="flex">
        {CATEGORIES.map((cat, i) => (
          <div key={cat} className="flex-1 flex flex-col items-center">
            <span
              className={`pb-(--spacing-spacing-12) ${i === 0 ? "text-(--color-neutral-900)" : "text-(--color-neutral-700)"}`}
              style={{
                fontFamily: typography.styles.label3Regular.fontFamily,
                fontSize: typography.styles.label3Regular.fontSize,
                fontWeight: typography.styles.label3Regular.fontWeight,
                lineHeight: typography.styles.label3Regular.lineHeight,
                letterSpacing: typography.styles.label3Regular.letterSpacing,
                textTransform: "uppercase" as const,
              }}
            >
              {cat}
            </span>
            <div
              className={`w-full h-[3px] ${i === 0 ? "bg-(--color-primary-200)" : "bg-(--color-neutral-400)"}`}
            />
          </div>
        ))}
      </nav>

      {/* Scrollable content area */}
      <main className="flex-1 flex flex-col items-center px-(--spacing-spacing-24) pt-(--spacing-spacing-48) pb-(--spacing-spacing-24) overflow-y-auto">
        {/* Heading */}
        <h2
          className="text-center text-(--color-neutral-900)"
          style={{
            fontFamily: typography.styles.h4.fontFamily,
            fontSize: typography.styles.h4.fontSize,
            fontWeight: typography.styles.h4.fontWeight,
            lineHeight: typography.styles.h4.lineHeight,
            letterSpacing: typography.styles.h4.letterSpacing,
          }}
        >
          How long is your hair?
        </h2>

        {/* Subtext */}
        <p
          className="text-center text-(--color-neutral-800) mt-(--spacing-spacing-16) max-w-[480px]"
          style={{
            fontFamily: typography.styles.body4Regular.fontFamily,
            fontSize: typography.styles.body4Regular.fontSize,
            fontWeight: typography.styles.body4Regular.fontWeight,
            lineHeight: typography.styles.body4Regular.lineHeight,
            letterSpacing: typography.styles.body4Regular.letterSpacing,
          }}
        >
          If you have curly hair, pull the curl all the way down to find your true length.
        </p>

        {/* Visual learner toggle */}
        <button
          onClick={() => setShowImages(!showImages)}
          className="flex items-center gap-(--spacing-spacing-8) mt-(--spacing-spacing-24) cursor-pointer bg-transparent border-none"
        >
          <span className="text-(--color-tertiary-300) flex items-center justify-center w-[20px] h-[20px] rounded-full border border-(--color-tertiary-300) text-xs leading-none">
            +
          </span>
          <span
            className="text-(--color-neutral-800) underline"
            style={{
              fontFamily: typography.styles.body4Regular.fontFamily,
              fontSize: typography.styles.body4Regular.fontSize,
              fontWeight: typography.styles.body4Regular.fontWeight,
              lineHeight: typography.styles.body4Regular.lineHeight,
              letterSpacing: typography.styles.body4Regular.letterSpacing,
            }}
          >
            More of a visual learner? Tap for pics
          </span>
        </button>

        {/* Length selectors */}
        <div className="flex flex-col items-center gap-(--spacing-spacing-12) mt-(--spacing-spacing-32) w-full">
          {LENGTHS.map((item, i) => (
            <Selector
              key={item.label}
              label={item.label}
              subcopy={item.subcopy}
              selected={selected === i}
              onClick={() => setSelected(i)}
              size="hug"
              className="w-full"
            />
          ))}
        </div>
      </main>

      {/* Bottom navigation */}
      <footer className="sticky bottom-0 bg-(--color-neutral-200) pl-(--spacing-spacing-24) pr-(--spacing-spacing-12) py-(--spacing-spacing-16) flex items-center gap-(--spacing-spacing-12)">
        <button className="w-[52px] h-[52px] rounded-full bg-(--color-primary-400) flex items-center justify-center shrink-0 cursor-pointer border-none">
          <ArrowLeft className="text-(--color-neutral-100)" size={20} />
        </button>
        <Button variant="primary-light" size="flexible" className="flex-1">
          Next
        </Button>
      </footer>
    </div>
  );
}
