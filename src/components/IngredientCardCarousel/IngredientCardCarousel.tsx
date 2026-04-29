/*
 * IngredientCardCarousel — Figma: Design System > Ingredient Carousel
 *
 * Horizontally scrollable row of IngredientCards with a section title.
 * Title: Saol Text, 28px, tracking 0.5px, leading 36px, #1f232d.
 * Gap: 23px title→cards, 11px between cards.
 * Padding: 16px horizontal.
 * Overflow: horizontal scroll, hidden scrollbar.
 */

import { typography } from "../../tokens";
import { IngredientCard, type IngredientCardData } from "../IngredientCard";

type IngredientCardCarouselProps = {
  title: string;
  items: IngredientCardData[];
  className?: string;
};

export function IngredientCardCarousel({
  title,
  items,
  className = "",
}: IngredientCardCarouselProps) {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 23,
        padding: "0 16px",
      }}
    >
      {/* Title */}
      <h2
        style={{
          fontFamily: typography.families.title,
          fontWeight: typography.weights.regular,
          fontSize: 28,
          lineHeight: "36px",
          letterSpacing: "0.5px",
          color: "#1f232d",
          margin: 0,
        }}
      >
        {title}
      </h2>

      {/* Scrollable card row */}
      <div
        style={{
          display: "flex",
          gap: 11,
          overflowX: "auto",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {items.map((item) => (
          <IngredientCard
            key={item.name}
            image={item.image}
            name={item.name}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}
