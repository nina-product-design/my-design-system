/*
 * ProductCard — Figma: Design System > Product Card
 *
 * Product image with name and price. Used inside ProductCardCarousel.
 * Image: 185×246px, radius 10px, object-cover.
 * Optional badge: 50×50px circle, highlight/200 bg, Simplon Mono 14px uppercase.
 * Name: body/3 medium (Simplon Norm Medium, 16px), #1f232d.
 * Price: body/3 regular (Simplon Norm Regular, 16px), #1f232d.
 * Gap: 24px image→text, 5px name→price.
 */

import { typography } from "../../tokens";

// ─── Product images ──────────────────────────────────────
import imgShampoo from "../../../images/products/hair/Prose-custom-shampoo.png";
import imgConditioner from "../../../images/products/hair/Prose-custom-conditioner.png";
import imgScalpMask from "../../../images/products/hair/Prose-scalp-mask-front-background.png";
import imgCurlCream from "../../../images/products/hair/Prose-curl-cream.png";
import imgLeaveInPump from "../../../images/products/hair/Prose-leave-in-conditioner-pump-front-background.png";
import imgLeaveInSpray from "../../../images/products/hair/Prose-leave-in-conditioner-spray-front-background.png";
import imgDryShampoo from "../../../images/products/hair/Prose-dry-shampoo-front-background.png";
import imgHairMask from "../../../images/products/hair/Prose-hair-mask-front-background.png";
import imgHairOil from "../../../images/products/hair/Prose-hair-oil-front-background.png";
import imgScalpSerum from "../../../images/products/hair/Prose-scalp-serum-front-background.png";
import imgStylingGel from "../../../images/products/hair/Prose-styling-gel-front-background.png";
import imgRootSource from "../../../images/products/hair/Prose-root-source-background-1.png";

// ─── Skincare images ─────────────────────────────────────
import imgCleanser from "../../../images/products/Skin/Prose-cleanser-front-background.png";
import imgMoisturizer from "../../../images/products/Skin/Prose-moisturizer-front-background.png";
import imgSerum from "../../../images/products/Skin/Prose-serum-front-background.png";

// ─── Accessory images ────────────────────────────────────
import imgBoarBrush from "../../../images/products/Accessories/Prose-Brush-Boar-BG.png";
import imgNylonBrush from "../../../images/products/Accessories/Prose-Brush-Boar-Nylon-BG.png";
import imgMetalTipBrush from "../../../images/products/Accessories/Prose-Brush-Metal-Tip-BG.png";
import imgCandleArcadia from "../../../images/products/Accessories/Prose-Candle-Arcadia-Front-BG.png";
import imgCandleCorsica from "../../../images/products/Accessories/Prose-Candle-Corsica-Front-BG.png";
import imgCandlePrelude from "../../../images/products/Accessories/Prose-Candle-Prelude-Front-BG.png";
import imgHairTowel from "../../../images/products/Accessories/Prose-Hair-Towel-BG.png";

// ─── Predefined product instances ────────────────────────
export type HaircareProduct =
  | "shampoo"
  | "conditioner"
  | "scalp-mask"
  | "curl-cream"
  | "leave-in-pump"
  | "leave-in-spray"
  | "dry-shampoo"
  | "hair-mask"
  | "hair-oil"
  | "scalp-serum"
  | "styling-gel"
  | "root-source";

export type ProductCardData = {
  image: string;
  name: string;
  price: string;
  badge?: string;
};

export const HAIRCARE_PRODUCTS: Record<HaircareProduct, ProductCardData> = {
  "shampoo":        { image: imgShampoo,      name: "Custom Shampoo",       price: "From $28.90" },
  "conditioner":    { image: imgConditioner,   name: "Custom Conditioner",   price: "From $14.80" },
  "scalp-mask":     { image: imgScalpMask,     name: "Custom Scalp Mask",    price: "From $19.60" },
  "curl-cream":     { image: imgCurlCream,     name: "Custom Curl Cream",    price: "From $13.20" },
  "leave-in-pump":  { image: imgLeaveInPump,   name: "Custom Leave-In",      price: "From $13.20" },
  "leave-in-spray": { image: imgLeaveInSpray,  name: "Custom Leave-In",      price: "From $13.20" },
  "dry-shampoo":    { image: imgDryShampoo,    name: "Custom Dry Shampoo",   price: "From $13.20" },
  "hair-mask":      { image: imgHairMask,      name: "Custom Hair Mask",     price: "From $19.60" },
  "hair-oil":       { image: imgHairOil,       name: "Custom Hair Oil",      price: "From $19.60" },
  "scalp-serum":    { image: imgScalpSerum,    name: "Custom Scalp Serum",   price: "From $22.40", badge: "NEW" },
  "styling-gel":    { image: imgStylingGel,    name: "Custom Styling Gel",   price: "From $13.20" },
  "root-source":    { image: imgRootSource,    name: "Custom Root Source\u00AE", price: "From $28.90" },
};

export type AccessoryProduct =
  | "boar-brush"
  | "nylon-brush"
  | "metal-tip-brush"
  | "candle-arcadia"
  | "candle-corsica"
  | "candle-prelude"
  | "hair-towel";

export const ACCESSORY_PRODUCTS: Record<AccessoryProduct, ProductCardData> = {
  "boar-brush":       { image: imgBoarBrush,       name: "Custom Boar Brush",       price: "$72.00" },
  "nylon-brush":      { image: imgNylonBrush,      name: "Custom Nylon Brush",      price: "$48.00" },
  "metal-tip-brush":  { image: imgMetalTipBrush,   name: "Custom Metal Tip Brush",  price: "$48.00" },
  "candle-arcadia":   { image: imgCandleArcadia,   name: "Custom Arcadia Candle",   price: "$52.00" },
  "candle-corsica":   { image: imgCandleCorsica,   name: "Custom Corsica Candle",   price: "$52.00" },
  "candle-prelude":   { image: imgCandlePrelude,   name: "Custom Prelude Candle",   price: "$52.00" },
  "hair-towel":       { image: imgHairTowel,       name: "Custom Hair Towel",       price: "$35.00" },
};

export type SkincareProduct =
  | "cleanser"
  | "moisturizer"
  | "serum";

export const SKINCARE_PRODUCTS: Record<SkincareProduct, ProductCardData> = {
  "cleanser":     { image: imgCleanser,     name: "Custom Cleanser",     price: "From $26.10" },
  "moisturizer":  { image: imgMoisturizer,  name: "Custom Moisturizer",  price: "From $46.75" },
  "serum":        { image: imgSerum,        name: "Custom Serum",        price: "From $56.00" },
};

type ProductCardProps = {
  /** Use a preset product, or pass image/name/price manually */
  product?: HaircareProduct | AccessoryProduct | SkincareProduct;
  image?: string;
  name?: string;
  price?: string;
  badge?: string;
  className?: string;
};

export function ProductCard({
  product,
  image: imageProp,
  name: nameProp,
  price: priceProp,
  badge: badgeProp,
  className = "",
}: ProductCardProps) {
  const preset = product
    ? (HAIRCARE_PRODUCTS as Record<string, ProductCardData>)[product] ??
      (ACCESSORY_PRODUCTS as Record<string, ProductCardData>)[product] ??
      (SKINCARE_PRODUCTS as Record<string, ProductCardData>)[product]
    : undefined;
  const image = imageProp ?? preset?.image ?? "";
  const name = nameProp ?? preset?.name ?? "";
  const price = priceProp ?? preset?.price ?? "";
  const badge = badgeProp ?? preset?.badge;

  return (
    <div
      className={className}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 24,
        alignItems: "flex-start",
        flexShrink: 0,
      }}
    >
      {/* Image */}
      <div
        style={{
          position: "relative",
          width: 185,
          height: 246,
          borderRadius: "var(--radius-radius-10)",
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        <img
          alt={name}
          src={image}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "var(--radius-radius-10)",
          }}
        />
        {badge && (
          <div
            style={{
              position: "absolute",
              top: 20,
              left: 20,
              width: 50,
              height: 50,
              borderRadius: "100px",
              backgroundColor: "var(--color-highlight-200)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: typography.families.label,
              fontWeight: typography.weights.regular,
              fontSize: 14,
              lineHeight: 1.2,
              letterSpacing: "1.12px",
              textTransform: "uppercase",
              color: "var(--color-primary-400)",
            }}
          >
            {badge}
          </div>
        )}
      </div>

      {/* Text */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 5,
          color: "#1f232d",
          whiteSpace: "nowrap",
        }}
      >
        <span style={typography.styles.body3Medium}>{name}</span>
        <span style={typography.styles.body3Regular}>{price}</span>
      </div>
    </div>
  );
}
