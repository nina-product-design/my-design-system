/*
 * ProductCardCarousel — Figma: Design System > Product Card Carousel
 *
 * Horizontally scrollable row of ProductCards with a section title.
 * Title: Saol Text, 28px, tracking 0.5px, leading 36px, #1f232d.
 * Gap: 23px title→cards, 12px between cards.
 * Padding: 16px horizontal.
 * Overflow: horizontal scroll, hidden scrollbar.
 */

import { typography } from "../../tokens";
import { ProductCard } from "../ProductCard";

export type ProductCardItem = {
  image: string;
  name: string;
  price: string;
  badge?: string;
};

type ProductCardCarouselProps = {
  title: string;
  items: ProductCardItem[];
  className?: string;
};

export function ProductCardCarousel({
  title,
  items,
  className = "",
}: ProductCardCarouselProps) {
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
          gap: 12,
          overflowX: "auto",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {items.map((item) => (
          <ProductCard
            key={item.name}
            image={item.image}
            name={item.name}
            price={item.price}
            badge={item.badge}
          />
        ))}
      </div>
    </div>
  );
}
