import { useState } from "react";
import { typography } from "../../tokens";

/*
 * Accordion — Figma: Design System Foundations > Accordion
 *
 * Two variants:
 *   "product" — Simplon Mono 12px uppercase labels (label/2 medium), chevron icon
 *   "faq"     — Simplon Norm body text, plus/minus icon, expandable answer
 *
 * Divider: 1px neutral/600 between items
 * Icon: rotates on open (chevron for product, plus→minus for faq)
 */

export type AccordionVariant = "product" | "faq";

export type ProductStep = {
  title: string;
  description: string;
};

type AccordionItem = {
  question: string;
  answer?: string;
  steps?: ProductStep[];
};

type AccordionProps = {
  variant?: AccordionVariant;
  items: AccordionItem[];
  className?: string;
};

// ─── Icons ───────────────────────────────────────────────────────────────────

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      className={`shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <path d="M2 4.5L6 8.5L10 4.5" stroke="var(--color-primary-300)" strokeWidth="1.2" />
    </svg>
  );
}

function PlusMinusIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      className="shrink-0"
      aria-hidden="true"
    >
      <line x1="0" y1="5" x2="10" y2="5" stroke="var(--color-neutral-700)" strokeWidth="1" />
      {!open && (
        <line x1="5" y1="0" x2="5" y2="10" stroke="var(--color-neutral-700)" strokeWidth="1" />
      )}
    </svg>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export function Accordion({
  variant = "faq",
  items,
  className = "",
}: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const isProduct = variant === "product";

  return (
    <div className={`flex flex-col w-full ${className}`}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;

        return (
          <div key={i}>
            {/* Row */}
            <button
              type="button"
              onClick={() => toggle(i)}
              className={`flex items-center justify-between w-full gap-(--spacing-spacing-12) cursor-pointer text-left ${isProduct ? "h-[70px]" : "min-h-[53px] py-(--spacing-spacing-8)"}`}
            >
              <span
                className={isProduct ? "text-(--color-primary-300)" : "text-(--color-primary-400)"}
                style={
                  isProduct
                    ? {
                        fontFamily: typography.label2Medium.fontFamily,
                        fontSize: typography.label2Medium.fontSize,
                        fontWeight: typography.label2Medium.fontWeight,
                        lineHeight: typography.label2Medium.lineHeight,
                        letterSpacing: typography.label2Medium.letterSpacing,
                        textTransform: "uppercase",
                      }
                    : {
                        fontFamily: typography.styles.body4Regular.fontFamily,
                        fontSize: typography.styles.body4Regular.fontSize,
                        fontWeight: typography.styles.body4Regular.fontWeight,
                        lineHeight: typography.styles.body4Regular.lineHeight,
                        letterSpacing: typography.styles.body4Regular.letterSpacing,
                      }
                }
              >
                {item.question}
              </span>
              {isProduct ? <ChevronIcon open={isOpen} /> : <PlusMinusIcon open={isOpen} />}
            </button>

            {/* Product steps (open state) */}
            {isProduct && isOpen && item.steps && (
              <div className="flex flex-col gap-(--spacing-spacing-16) pb-(--spacing-spacing-12) text-(--color-primary-300)">
                {item.steps.map((step, si) => (
                  <div key={si} className="flex gap-(--spacing-spacing-16) items-start">
                    <span
                      className="shrink-0"
                      style={{
                        fontFamily: typography.styles.body4Medium.fontFamily,
                        fontSize: typography.styles.body4Medium.fontSize,
                        fontWeight: typography.styles.body4Medium.fontWeight,
                        lineHeight: typography.styles.body4Medium.lineHeight,
                      }}
                    >
                      {String(si + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p
                        style={{
                          fontFamily: typography.styles.body4Medium.fontFamily,
                          fontSize: typography.styles.body4Medium.fontSize,
                          fontWeight: typography.styles.body4Medium.fontWeight,
                          lineHeight: typography.styles.body4Medium.lineHeight,
                        }}
                      >
                        {step.title}
                      </p>
                      <p
                        style={{
                          fontFamily: typography.styles.body4Regular.fontFamily,
                          fontSize: typography.styles.body4Regular.fontSize,
                          fontWeight: typography.styles.body4Regular.fontWeight,
                          lineHeight: typography.styles.body4Regular.lineHeight,
                          letterSpacing: typography.styles.body4Regular.letterSpacing,
                        }}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Answer (FAQ only) */}
            {!isProduct && isOpen && item.answer && (
              <div
                className="pb-(--spacing-spacing-16) text-(--color-primary-400)"
                style={{
                  fontFamily: typography.styles.body4Regular.fontFamily,
                  fontSize: typography.styles.body4Regular.fontSize,
                  fontWeight: typography.styles.body4Regular.fontWeight,
                  lineHeight: typography.styles.body4Regular.lineHeight,
                  letterSpacing: typography.styles.body4Regular.letterSpacing,
                }}
              >
                {item.answer}
              </div>
            )}

            {/* Divider */}
            <div className="h-px w-full bg-(--color-neutral-600)" />
          </div>
        );
      })}
    </div>
  );
}
