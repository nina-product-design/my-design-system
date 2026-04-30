/*
 * FrequencySelector — Figma: Design System > Frequency Selector
 *
 * Collapsible selector for purchase frequency (subscription intervals
 * or one-time). Sits inside RoutineCard but is a standalone component.
 *
 * Selection modes:
 *   "subscription" — default to subscription option, shows frequency list when open
 *   "one-time"     — default to one-time, shows frequency list when open
 *   "accessory"    — one-time only, no dropdown (not expandable)
 *
 * Width: 295px. "Added to cart" floating label. Border neutral/400, radius-10.
 * Subscription prices: highlight/200 bg, strikethrough original.
 */

import { useState } from "react";
import { typography } from "../../tokens";
import { Radio } from "../Radio/Radio";

// ─── Icons ────────────────────────────────────────────────

function ChevronDownIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path d="M1.5 3L5 7L8.5 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronUpIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path d="M1.5 7L5 3L8.5 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ─── Types ────────────────────────────────────────────────

export type FrequencyOption = {
  label: string;
  price: string;
  originalPrice?: string;
  note?: string;
};

export type FrequencySelectorProps = {
  /** Which mode: subscription shows frequency options, accessory is non-expandable */
  selection?: "subscription" | "one-time" | "accessory";
  /** The list of selectable frequency options */
  options?: FrequencyOption[];
  /** Index of the currently selected option */
  selectedIndex?: number;
  /** Called when the user picks a different option */
  onChange?: (index: number) => void;
  /** Control open/closed state externally */
  defaultOpen?: boolean;
  className?: string;
};

// ─── Defaults ─────────────────────────────────────────────

const DEFAULT_OPTIONS: FrequencyOption[] = [
  { label: "Every 4 weeks [recommended]", price: "$14.00", originalPrice: "$35.00", note: "60% off first subscription order" },
  { label: "Every 8 weeks", price: "$14.00", originalPrice: "$35.00" },
  { label: "Every 12 weeks", price: "$14.00", originalPrice: "$35.00" },
  { label: "One-time purchase", price: "$35.00" },
];

// ─── Sub-components ───────────────────────────────────────

function PriceDisplay({ price, originalPrice, highlighted }: { price: string; originalPrice?: string; highlighted?: boolean }) {
  return (
    <div className="flex flex-col items-end gap-[4px] shrink-0 text-right whitespace-nowrap">
      <div
        className={`flex items-center justify-center px-(--spacing-spacing-4) rounded-(--radius-radius-4) ${
          highlighted ? "bg-(--color-highlight-200)" : ""
        }`}
      >
        <span
          className="text-(--color-neutral-900) text-center"
          style={{
            fontFamily: typography.styles.body4Medium.fontFamily,
            fontSize: typography.styles.body4Medium.fontSize,
            fontWeight: typography.styles.body4Medium.fontWeight,
            lineHeight: typography.styles.body4Medium.lineHeight,
          }}
        >
          {price}
        </span>
      </div>
      {originalPrice && (
        <span
          className="text-(--color-neutral-800) text-center line-through px-[4px]"
          style={{
            fontFamily: typography.styles.body6Regular.fontFamily,
            fontSize: typography.styles.body6Regular.fontSize,
            fontWeight: typography.styles.body6Regular.fontWeight,
            lineHeight: typography.styles.body6Regular.lineHeight,
            letterSpacing: typography.styles.body6Regular.letterSpacing,
          }}
        >
          {originalPrice}
        </span>
      )}
    </div>
  );
}

function SelectionRow({
  option,
  selected,
  isLast,
  onClick,
}: {
  option: FrequencyOption;
  selected: boolean;
  isLast: boolean;
  onClick: () => void;
}) {
  const hasOriginal = !!option.originalPrice;

  return (
    <button
      onClick={onClick}
      className={`bg-(--color-neutral-100) border-(--color-neutral-400) border-b border-l border-r flex items-center gap-(--spacing-spacing-24) px-[12px] py-[16px] w-full cursor-pointer ${
        isLast ? "rounded-b-(--radius-radius-10)" : ""
      } ${isLast ? "h-[72px]" : ""}`}
    >
      {/* Radio + label */}
      <div className="flex flex-1 min-w-0 items-center gap-(--spacing-spacing-8)">
        <Radio state={selected ? "selected" : "empty"} size="small" />
        <span
          className="flex-1 min-w-0 text-(--color-neutral-900) text-left"
          style={{
            fontFamily: typography.styles.body5Regular.fontFamily,
            fontSize: typography.styles.body5Regular.fontSize,
            fontWeight: typography.styles.body5Regular.fontWeight,
            lineHeight: typography.styles.body5Regular.lineHeight,
            letterSpacing: typography.styles.body5Regular.letterSpacing,
          }}
        >
          {option.label}
        </span>
      </div>

      {/* Price */}
      <PriceDisplay
        price={option.price}
        originalPrice={option.originalPrice}
        highlighted={hasOriginal}
      />
    </button>
  );
}

// ─── Main component ───────────────────────────────────────

export function FrequencySelector({
  selection = "subscription",
  options,
  selectedIndex: controlledIndex,
  onChange,
  defaultOpen = false,
  className = "",
}: FrequencySelectorProps) {
  const [open, setOpen] = useState(defaultOpen);
  const [internalIndex, setInternalIndex] = useState(
    selection === "one-time" ? (options ?? DEFAULT_OPTIONS).length - 1 : 0
  );

  const isAccessory = selection === "accessory";
  const canExpand = !isAccessory;

  const opts = options ?? (isAccessory
    ? [{ label: "One-time purchase", price: "$35.00" }]
    : DEFAULT_OPTIONS);

  const selectedIdx = controlledIndex ?? internalIndex;
  const current = opts[selectedIdx] ?? opts[0];
  const hasOriginal = !!current.originalPrice;

  function handleSelect(idx: number) {
    if (controlledIndex === undefined) {
      setInternalIndex(idx);
    }
    onChange?.(idx);
  }

  function handleToggle() {
    if (canExpand) setOpen(!open);
  }

  return (
    <div className={`relative w-[295px] shrink-0 ${className}`}>
      {/* ── Header (always visible) ────────────────────── */}
      <button
        onClick={handleToggle}
        className={`relative w-full border border-(--color-neutral-400) bg-(--color-neutral-100) px-[12px] py-[16px] ${
          canExpand ? "cursor-pointer" : "cursor-default"
        } ${open ? "rounded-t-(--radius-radius-10)" : "rounded-(--radius-radius-10)"}`}
      >
        <div className="flex items-center gap-[12px] w-full">
          {/* Label + note */}
          <div className={`flex flex-col items-start ${hasOriginal ? "gap-px shrink-0 w-[171px]" : "flex-1 min-w-0"}`}>
            <span
              className="text-(--color-neutral-900) w-full text-left"
              style={{
                fontFamily: typography.styles.body5Regular.fontFamily,
                fontSize: typography.styles.body5Regular.fontSize,
                fontWeight: typography.styles.body5Regular.fontWeight,
                lineHeight: typography.styles.body5Regular.lineHeight,
                letterSpacing: typography.styles.body5Regular.letterSpacing,
              }}
            >
              {current.label}
            </span>
            {current.note && (
              <span
                className="text-(--color-neutral-800) w-full text-left"
                style={{
                  fontFamily: typography.styles.body6Regular.fontFamily,
                  fontSize: typography.styles.body6Regular.fontSize,
                  fontWeight: typography.styles.body6Regular.fontWeight,
                  lineHeight: typography.styles.body6Regular.lineHeight,
                  letterSpacing: typography.styles.body6Regular.letterSpacing,
                }}
              >
                {current.note}
              </span>
            )}
          </div>

          {/* Price */}
          <PriceDisplay
            price={current.price}
            originalPrice={current.originalPrice}
            highlighted={hasOriginal}
          />

          {/* Chevron */}
          {canExpand && (
            <>
              {/* Vertical divider */}
              <div className="h-[36px] w-0 border-l border-(--color-neutral-400) shrink-0" />
              <div className="shrink-0 flex items-center text-(--color-neutral-900)">
                {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
              </div>
            </>
          )}
        </div>
      </button>

      {/* "Added to cart" floating label — centered on the top border */}
      <div className="absolute top-0 left-[8px] -translate-y-1/2 bg-(--color-neutral-100) px-[4px]">
        <span
          className="text-(--color-neutral-900) whitespace-nowrap leading-none"
          style={{
            fontFamily: typography.styles.body6Regular.fontFamily,
            fontSize: typography.styles.body6Regular.fontSize,
            fontWeight: typography.styles.body6Regular.fontWeight,
            letterSpacing: typography.styles.body6Regular.letterSpacing,
          }}
        >
          Added to cart
        </span>
      </div>

      {/* ── Dropdown list ──────────────────────────────── */}
      {open && canExpand && (
        <div className="flex flex-col w-full">
          {opts.map((opt, i) => (
            <SelectionRow
              key={i}
              option={opt}
              selected={selectedIdx === i}
              isLast={i === opts.length - 1}
              onClick={() => handleSelect(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
