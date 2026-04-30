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
import { FrequencySelector, type FrequencyOption } from "../Selector";
import { CloseButton } from "../CloseButton";
import { ProductTag } from "../ProductTag";
import imgCardBg from "../../../images/products/bg.png";

// ─── Icons (inline SVGs) ──────────────────────────────────

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

// ─── Types ────────────────────────────────────────────────

export type RoutineCardType = "one-time" | "subscription" | "subscription-expanded";

export type RoutineCardIngredient = {
  image: string;
  name: string;
  description?: React.ReactNode;
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
  /** Frequency options for the selector. Defaults based on type. */
  frequencyOptions?: FrequencyOption[];
  /** Index of the default-selected frequency option */
  defaultFrequencyIndex?: number;
  onClose?: () => void;
  onDetailsClick?: () => void;
  onFrequencyChange?: (index: number) => void;
  className?: string;
};

// ─── Sub-components ───────────────────────────────────────

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
        <p
          className="pl-[40px] pr-(--spacing-spacing-24) text-(--color-primary-300)"
          style={{
            fontFamily: typography.styles.body5Regular.fontFamily,
            fontSize: typography.styles.body5Regular.fontSize,
            fontWeight: typography.styles.body5Regular.fontWeight,
            lineHeight: typography.styles.body5Regular.lineHeight,
            letterSpacing: typography.styles.body5Regular.letterSpacing,
            margin: 0,
          }}
        >
          {ingredient.description}
        </p>
      )}
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
  frequencyOptions,
  defaultFrequencyIndex,
  onClose,
  onDetailsClick,
  onFrequencyChange,
  className = "",
}: RoutineCardProps) {
  const isSubscription = type !== "one-time";

  // Default recommended tag for subscription types
  const showTag = showRecommendedTag ?? isSubscription;

  // Map type to FrequencySelector selection mode
  const freqSelection = isSubscription ? "subscription" : "one-time";

  // Manage expanded ingredient state
  const [expandedIndex, setExpandedIndex] = useState<number | null>(
    type === "subscription-expanded" ? 0 : null
  );

  return (
    <div
      className={`flex flex-col gap-(--spacing-spacing-24) items-center pb-(--spacing-spacing-16) rounded-(--radius-radius-10) bg-(--color-neutral-100) w-[327px] ${className}`}
    >
      {/* ── Product image ──────────────────────────────── */}
      <div className="relative w-full h-[220px] shrink-0 rounded-t-(--radius-radius-10) overflow-hidden" style={{ backgroundImage: `url(${imgCardBg})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        {productImage && (
          <img
            alt={productName}
            src={productImage}
            className="absolute inset-0 w-full h-full object-contain"
          />
        )}

        {/* Top bar: tag + close */}
        <div className={`absolute top-[8px] left-[8px] right-[8px] flex items-start ${showTag ? "justify-between" : "justify-end"}`}>
          {showTag && <ProductTag />}
          <CloseButton color="light" onClick={onClose} />
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
          <div className="flex items-baseline gap-(--spacing-spacing-12) w-full">
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
        selection={freqSelection}
        options={frequencyOptions}
        selectedIndex={defaultFrequencyIndex}
        onChange={onFrequencyChange}
      />
    </div>
  );
}
