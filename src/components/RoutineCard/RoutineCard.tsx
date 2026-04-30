/*
 * RoutineCard — Figma: Design System > Routine Cards
 *
 * Product routine card showing product image, details, optional key
 * ingredients, preferences, and a frequency/price selector.
 *
 * Variants (type):
 *   "one-time"              — simple card with one-time purchase pricing
 *   "subscription"          — includes ingredients (collapsed), preferences, subscription pricing
 *   "subscription-expanded" — subscription with first ingredient expanded
 *
 * Width: 327px, bg neutral/100, radius-10, bottom padding 24px.
 * Image area: 220px tall, full-width, object-cover.
 */

import { useState } from "react";
import { typography } from "../../tokens";

// ─── Icons (inline SVGs) ──────────────────────────────────

function CloseIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M1 1L11 11M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M6 1V11M1 6H11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg width="12" height="1" viewBox="0 0 12 1" fill="none">
      <path d="M0 0.5H12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path d="M3 1.5L7 5L3 8.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ─── Types ────────────────────────────────────────────────

export type RoutineCardType = "one-time" | "subscription" | "subscription-expanded";

export type RoutineCardIngredient = {
  image: string;
  name: string;
  description?: string;
};

export type RoutineCardProps = {
  type?: RoutineCardType;
  productImage?: string;
  productName?: string;
  productDescription?: string;
  productSize?: string;
  showRecommendedTag?: boolean;
  ingredients?: RoutineCardIngredient[];
  preferences?: string;
  price?: string;
  originalPrice?: string;
  frequencyLabel?: string;
  frequencyNote?: string;
  onClose?: () => void;
  onDetailsClick?: () => void;
  className?: string;
};

// ─── Sub-components ───────────────────────────────────────

function ProductTag() {
  return (
    <div className="bg-(--color-neutral-100)/50 px-(--spacing-spacing-8) py-[4px] rounded-(--radius-radius-4)">
      <span
        className="text-(--color-primary-300)"
        style={{
          fontFamily: typography.styles.body5Regular.fontFamily,
          fontSize: typography.styles.body5Regular.fontSize,
          fontWeight: typography.styles.body5Regular.fontWeight,
          lineHeight: typography.styles.body5Regular.lineHeight,
          letterSpacing: typography.styles.body5Regular.letterSpacing,
        }}
      >
        Recommended
      </span>
    </div>
  );
}

function IngredientRow({
  ingredient,
  expanded = false,
  onToggle,
}: {
  ingredient: RoutineCardIngredient;
  expanded?: boolean;
  onToggle?: () => void;
}) {
  return (
    <div className="border-b border-(--color-neutral-600) pb-(--spacing-spacing-8) pr-(--spacing-spacing-8) w-full">
      <div className="flex items-center gap-(--spacing-spacing-8) w-full">
        {/* Ingredient image */}
        <div className="w-[32px] h-[40px] shrink-0 overflow-hidden">
          <img
            alt={ingredient.name}
            src={ingredient.image}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name */}
        <span
          className="flex-1 min-w-0 text-(--color-primary-300)"
          style={{
            fontFamily: typography.styles.body5Medium.fontFamily,
            fontSize: typography.styles.body5Medium.fontSize,
            fontWeight: typography.styles.body5Medium.fontWeight,
            lineHeight: typography.styles.body5Medium.lineHeight,
          }}
        >
          {ingredient.name}
        </span>

        {/* Toggle icon */}
        <button
          onClick={onToggle}
          className="shrink-0 w-[12px] h-[12px] flex items-center justify-center text-(--color-primary-300) cursor-pointer"
          aria-label={expanded ? "Collapse" : "Expand"}
        >
          {expanded ? <MinusIcon /> : <PlusIcon />}
        </button>
      </div>

      {/* Expanded description */}
      {expanded && ingredient.description && (
        <div className="pl-[34px] pr-(--spacing-spacing-24) mt-0">
          <p
            className="text-(--color-primary-300)"
            style={{
              fontFamily: typography.styles.body5Regular.fontFamily,
              fontSize: typography.styles.body5Regular.fontSize,
              fontWeight: typography.styles.body5Regular.fontWeight,
              lineHeight: typography.styles.body5Regular.lineHeight,
              letterSpacing: typography.styles.body5Regular.letterSpacing,
            }}
          >
            {ingredient.description}
          </p>
        </div>
      )}
    </div>
  );
}

function FrequencySelector({
  type,
  price,
  originalPrice,
  frequencyLabel,
  frequencyNote,
}: {
  type: RoutineCardType;
  price: string;
  originalPrice?: string;
  frequencyLabel: string;
  frequencyNote?: string;
}) {
  const isSubscription = type !== "one-time";

  return (
    <div className={`relative w-[295px] shrink-0 ${isSubscription ? "h-[72px]" : "h-[53px]"}`}>
      {/* Container */}
      <div className="absolute top-0 left-0 right-0 border border-(--color-neutral-400) rounded-(--radius-radius-10) bg-(--color-neutral-100) px-[12px] py-[16px]">
        <div className="flex items-center gap-[12px] w-full">
          {/* Label + note */}
          <div className={`flex flex-col items-start ${isSubscription ? "gap-px shrink-0 w-[171px]" : "flex-1 min-w-0"}`}>
            <span
              className="text-(--color-neutral-900) w-full"
              style={{
                fontFamily: typography.styles.body5Regular.fontFamily,
                fontSize: typography.styles.body5Regular.fontSize,
                fontWeight: typography.styles.body5Regular.fontWeight,
                lineHeight: typography.styles.body5Regular.lineHeight,
                letterSpacing: typography.styles.body5Regular.letterSpacing,
              }}
            >
              {frequencyLabel}
            </span>
            {isSubscription && frequencyNote && (
              <span
                className="text-(--color-neutral-800) w-full"
                style={{
                  fontFamily: typography.styles.body6Regular.fontFamily,
                  fontSize: typography.styles.body6Regular.fontSize,
                  fontWeight: typography.styles.body6Regular.fontWeight,
                  lineHeight: typography.styles.body6Regular.lineHeight,
                  letterSpacing: typography.styles.body6Regular.letterSpacing,
                }}
              >
                {frequencyNote}
              </span>
            )}
          </div>

          {/* Price */}
          <div className={`flex flex-col shrink-0 w-[54px] ${isSubscription ? "items-end gap-[4px]" : "items-start"}`}>
            <div
              className={`flex items-center justify-center px-(--spacing-spacing-4) w-full rounded-[4px] ${
                isSubscription ? "bg-(--color-highlight-200)" : ""
              }`}
            >
              <span
                className="text-(--color-neutral-900) text-center whitespace-nowrap"
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
            {isSubscription && originalPrice && (
              <span
                className="text-(--color-neutral-800) text-center line-through whitespace-nowrap"
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

          {/* Chevron (subscription only) */}
          {isSubscription && (
            <div className="shrink-0 flex items-center text-(--color-neutral-900)">
              <ChevronIcon />
            </div>
          )}
        </div>
      </div>

      {/* "Added to cart" floating label */}
      <div className="absolute top-[-8px] left-[8px] bg-(--color-neutral-100) px-[4px]">
        <span
          className="text-(--color-neutral-900) text-center whitespace-nowrap"
          style={{
            fontFamily: typography.styles.body6Regular.fontFamily,
            fontSize: typography.styles.body6Regular.fontSize,
            fontWeight: typography.styles.body6Regular.fontWeight,
            lineHeight: typography.styles.body6Regular.lineHeight,
            letterSpacing: typography.styles.body6Regular.letterSpacing,
          }}
        >
          Added to cart
        </span>
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────

export function RoutineCard({
  type = "one-time",
  productImage,
  productName = "Product Name",
  productDescription = "",
  productSize = "",
  showRecommendedTag,
  ingredients = [],
  preferences,
  price = "$34.00",
  originalPrice,
  frequencyLabel,
  frequencyNote,
  onClose,
  onDetailsClick,
  className = "",
}: RoutineCardProps) {
  const isSubscription = type !== "one-time";

  // Default recommended tag for subscription types
  const showTag = showRecommendedTag ?? isSubscription;

  // Default frequency labels
  const label = frequencyLabel ?? (isSubscription ? "Every 4 weeks [recommended]" : "One-time purchase");
  const note = frequencyNote ?? (isSubscription ? "60% off first subscription order" : undefined);

  // Manage expanded ingredient state
  const [expandedIndex, setExpandedIndex] = useState<number | null>(
    type === "subscription-expanded" ? 0 : null
  );

  return (
    <div
      className={`flex flex-col gap-(--spacing-spacing-24) items-center pb-(--spacing-spacing-24) rounded-(--radius-radius-10) bg-(--color-neutral-100) w-[327px] ${className}`}
    >
      {/* ── Product image ──────────────────────────────── */}
      <div className="relative w-full h-[220px] shrink-0">
        {productImage && (
          <img
            alt={productName}
            src={productImage}
            className="absolute inset-0 w-full h-full object-cover rounded-t-(--radius-radius-10)"
          />
        )}

        {/* Top bar: tag + close */}
        <div className={`absolute top-[8px] left-[8px] right-[8px] flex items-start ${showTag ? "justify-between" : "justify-end"}`}>
          {showTag && <ProductTag />}
          <button
            onClick={onClose}
            className="w-[32px] h-[32px] flex items-center justify-center text-(--color-primary-400) cursor-pointer"
            aria-label="Close"
          >
            <CloseIcon />
          </button>
        </div>
      </div>

      {/* ── Content ────────────────────────────────────── */}
      <div className={`flex flex-col items-start px-(--spacing-spacing-16) w-full ${isSubscription ? "gap-(--spacing-spacing-24)" : "gap-(--spacing-spacing-16)"}`}>
        {/* Product info */}
        <div className="flex flex-col gap-(--spacing-spacing-8) items-start w-full">
          {/* Name */}
          <p
            className="text-(--color-primary-400) w-full"
            style={{
              fontFamily: typography.styles.h3.fontFamily,
              fontSize: typography.styles.h3.fontSize,
              fontWeight: typography.styles.h3.fontWeight,
              lineHeight: typography.styles.h3.lineHeight,
              letterSpacing: typography.styles.h3.letterSpacing,
            }}
          >
            {productName}
          </p>

          {/* Description */}
          {productDescription && (
            <p
              className="text-(--color-primary-300) w-full"
              style={{
                fontFamily: typography.styles.body5Regular.fontFamily,
                fontSize: typography.styles.body5Regular.fontSize,
                fontWeight: typography.styles.body5Regular.fontWeight,
                lineHeight: typography.styles.body5Regular.lineHeight,
                letterSpacing: typography.styles.body5Regular.letterSpacing,
              }}
            >
              {productDescription}
            </p>
          )}

          {/* Size + link */}
          <div className="flex items-center gap-(--spacing-spacing-12) w-full">
            {productSize && (
              <span
                className="text-(--color-primary-300) whitespace-nowrap"
                style={{
                  fontFamily: typography.styles.body5Regular.fontFamily,
                  fontSize: typography.styles.body5Regular.fontSize,
                  fontWeight: typography.styles.body5Regular.fontWeight,
                  lineHeight: typography.styles.body5Regular.lineHeight,
                  letterSpacing: typography.styles.body5Regular.letterSpacing,
                }}
              >
                {productSize}
              </span>
            )}
            {isSubscription && (
              <button
                onClick={onDetailsClick}
                className="cursor-pointer"
              >
                <span
                  className="text-(--color-primary-300) underline text-center whitespace-nowrap"
                  style={{
                    fontFamily: typography.styles.body5Regular.fontFamily,
                    fontSize: typography.styles.body5Regular.fontSize,
                    fontWeight: typography.styles.body5Regular.fontWeight,
                    lineHeight: typography.styles.body5Regular.lineHeight,
                    letterSpacing: typography.styles.body5Regular.letterSpacing,
                  }}
                >
                  See full details
                </span>
              </button>
            )}
          </div>
        </div>

        {/* ── Key Ingredients (subscription only) ──────── */}
        {isSubscription && ingredients.length > 0 && (
          <div className="flex flex-col gap-(--spacing-spacing-12) items-start w-full">
            <span
              className="text-(--color-primary-300) uppercase whitespace-nowrap"
              style={{
                fontFamily: typography.label2Medium.fontFamily,
                fontSize: typography.label2Medium.fontSize,
                fontWeight: typography.label2Medium.fontWeight,
                lineHeight: typography.label2Medium.lineHeight,
                letterSpacing: typography.label2Medium.letterSpacing,
              }}
            >
              your KEY INGREDIENTS
            </span>
            <div className="flex flex-col gap-(--spacing-spacing-8) items-center w-full">
              {ingredients.map((ing, i) => (
                <IngredientRow
                  key={i}
                  ingredient={ing}
                  expanded={expandedIndex === i}
                  onToggle={() => setExpandedIndex(expandedIndex === i ? null : i)}
                />
              ))}
            </div>
          </div>
        )}

        {/* ── Preferences (subscription only) ──────────── */}
        {isSubscription && preferences && (
          <div className="flex flex-col gap-(--spacing-spacing-8) items-start w-full">
            <span
              className="text-(--color-primary-300) uppercase whitespace-nowrap"
              style={{
                fontFamily: typography.label2Medium.fontFamily,
                fontSize: typography.label2Medium.fontSize,
                fontWeight: typography.label2Medium.fontWeight,
                lineHeight: typography.label2Medium.lineHeight,
                letterSpacing: typography.label2Medium.letterSpacing,
              }}
            >
              YOUR PREFERENCES
            </span>
            <p
              className="text-(--color-primary-300) w-full"
              style={{
                fontFamily: typography.styles.body5Regular.fontFamily,
                fontSize: typography.styles.body5Regular.fontSize,
                fontWeight: typography.styles.body5Regular.fontWeight,
                lineHeight: typography.styles.body5Regular.lineHeight,
                letterSpacing: typography.styles.body5Regular.letterSpacing,
              }}
            >
              {preferences}
            </p>
          </div>
        )}
      </div>

      {/* ── Frequency / Price selector ─────────────────── */}
      <FrequencySelector
        type={type}
        price={price}
        originalPrice={originalPrice}
        frequencyLabel={label}
        frequencyNote={note}
      />
    </div>
  );
}
