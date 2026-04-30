/*
 * ProductCard — Figma: Design System > Haircare Product Cards
 *
 * Product image with overlapping name + price text block.
 *
 * Sizes:
 *   "desktop" — 260px wide, 453px image, radius-10, text at top 362px
 *   "mobile"  — 185px wide, 332px image, radius-8, text at top 253px
 *
 * Country: "US" | "CA" — affects price display
 * Text: centered, primary/400
 *   Name: body/3 medium (Simplon Norm Medium, 16px)
 *   Price: body/3 regular (Simplon Norm Regular, 16px)
 */

import { typography } from "../../tokens";
import imgCardBg from "../../../images/products/bg.png";

// ─── Product images ──────────────────────────────────────
import imgShampoo from "../../../images/products/Hair/Prose-custom-shampoo.png";
import imgConditioner from "../../../images/products/Hair/Prose-custom-conditioner.png";
import imgScalpMask from "../../../images/products/Hair/Prose-scalp-mask-front-background.png";
import imgCurlCream from "../../../images/products/Hair/Prose-curl-cream.png";
import imgLeaveInPump from "../../../images/products/Hair/Prose-leave-in-conditioner-pump-front-background.png";
import imgDryShampoo from "../../../images/products/Hair/Prose-dry-shampoo-front-background.png";
import imgHairMask from "../../../images/products/Hair/Prose-hair-mask-front-background.png";
import imgHairOil from "../../../images/products/Hair/Prose-hair-oil-front-background.png";
import imgScalpSerum from "../../../images/products/Hair/Prose-scalp-serum-front-background.png";
import imgStylingGel from "../../../images/products/Hair/Prose-styling-gel-front-background.png";
import imgRootSource from "../../../images/products/Hair/Prose-root-source-background-1.png";

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

// ─── Product data ────────────────────────────────────────

export type ProductCardData = {
  image: string;
  name: string;
  priceUS: string;
  priceCA: string;
};

export type HaircareProduct =
  | "shampoo"
  | "conditioner"
  | "hair-mask"
  | "scalp-serum"
  | "root-source"
  | "curl-cream"
  | "scalp-mask"
  | "styling-gel"
  | "hair-oil"
  | "dry-shampoo"
  | "leave-in-conditioner";

export const HAIRCARE_PRODUCTS: Record<HaircareProduct, ProductCardData> = {
  "shampoo":              { image: imgShampoo,     name: "Custom Shampoo",               priceUS: "$35.00",  priceCA: "CA $42.00" },
  "conditioner":          { image: imgConditioner,  name: "Custom Conditioner",            priceUS: "$35.00",  priceCA: "CA $42.00" },
  "hair-mask":            { image: imgHairMask,     name: "Custom Hair Mask",              priceUS: "$38.00",  priceCA: "CA $46.00" },
  "scalp-serum":          { image: imgScalpSerum,   name: "Custom Scalp Serum",            priceUS: "$49.00",  priceCA: "CA $59.00" },
  "root-source":          { image: imgRootSource,   name: "Root Source\u00AE",             priceUS: "$49.00",  priceCA: "CA $59.00" },
  "curl-cream":           { image: imgCurlCream,    name: "Custom Curl Cream",             priceUS: "$32.00",  priceCA: "CA $38.00" },
  "scalp-mask":           { image: imgScalpMask,    name: "Custom Scalp Mask",             priceUS: "$42.00",  priceCA: "CA $50.00" },
  "styling-gel":          { image: imgStylingGel,   name: "Custom Styling Gel",            priceUS: "$32.00",  priceCA: "CA $38.00" },
  "hair-oil":             { image: imgHairOil,      name: "Custom Hair Oil",               priceUS: "$44.00",  priceCA: "CA $53.00" },
  "dry-shampoo":          { image: imgDryShampoo,   name: "Custom Dry Shampoo",            priceUS: "$32.00",  priceCA: "CA $38.00" },
  "leave-in-conditioner": { image: imgLeaveInPump,  name: "Custom Leave-In Conditioner",   priceUS: "$32.00",  priceCA: "CA $38.00" },
};

export type SkincareProduct = "cleanser" | "moisturizer" | "serum";

export const SKINCARE_PRODUCTS: Record<SkincareProduct, ProductCardData> = {
  "cleanser":     { image: imgCleanser,     name: "Custom Cleanser",     priceUS: "$29.00",  priceCA: "CA $35.00" },
  "moisturizer":  { image: imgMoisturizer,  name: "Custom Moisturizer",  priceUS: "$49.00",  priceCA: "CA $59.00" },
  "serum":        { image: imgSerum,        name: "Custom Serum",        priceUS: "$56.00",  priceCA: "CA $67.00" },
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
  "boar-brush":       { image: imgBoarBrush,       name: "Boar Bristle Brush",    priceUS: "$72.00",  priceCA: "CA $86.00" },
  "nylon-brush":      { image: imgNylonBrush,      name: "Nylon & Boar Brush",    priceUS: "$48.00",  priceCA: "CA $58.00" },
  "metal-tip-brush":  { image: imgMetalTipBrush,   name: "Metal Tip Brush",       priceUS: "$48.00",  priceCA: "CA $58.00" },
  "candle-arcadia":   { image: imgCandleArcadia,   name: "Arcadia Candle",        priceUS: "$52.00",  priceCA: "CA $62.00" },
  "candle-corsica":   { image: imgCandleCorsica,   name: "Corsica Candle",        priceUS: "$52.00",  priceCA: "CA $62.00" },
  "candle-prelude":   { image: imgCandlePrelude,   name: "Prelude Candle",        priceUS: "$52.00",  priceCA: "CA $62.00" },
  "hair-towel":       { image: imgHairTowel,       name: "Hair Towel",            priceUS: "$35.00",  priceCA: "CA $42.00" },
};

// ─── Component ───────────────────────────────────────────

export type ProductCardSize = "desktop" | "mobile";
export type ProductCardCountry = "US" | "CA";

type ProductCardProps = {
  product?: HaircareProduct | AccessoryProduct | SkincareProduct;
  size?: ProductCardSize;
  country?: ProductCardCountry;
  image?: string;
  name?: string;
  price?: string;
  className?: string;
};

export function ProductCard({
  product,
  size = "mobile",
  country = "US",
  image: imageProp,
  name: nameProp,
  price: priceProp,
  className = "",
}: ProductCardProps) {
  const preset = product
    ? (HAIRCARE_PRODUCTS as Record<string, ProductCardData>)[product] ??
      (ACCESSORY_PRODUCTS as Record<string, ProductCardData>)[product] ??
      (SKINCARE_PRODUCTS as Record<string, ProductCardData>)[product]
    : undefined;

  const image = imageProp ?? preset?.image ?? "";
  const name = nameProp ?? preset?.name ?? "";
  const price = priceProp ?? (country === "CA" ? preset?.priceCA : preset?.priceUS) ?? "";

  const isDesktop = size === "desktop";
  const cardWidth = isDesktop ? "w-[260px]" : "w-[185px]";
  const imageHeight = isDesktop ? "h-[362px]" : "h-[253px]";
  const cardRadius = "rounded-(--radius-radius-10)";
  const textPadding = isDesktop ? "p-(--spacing-spacing-24)" : "p-(--spacing-spacing-16)";
  const textGap = isDesktop ? "gap-[5px]" : "gap-(--spacing-spacing-4)";

  return (
    <div
      className={`flex flex-col shrink-0 ${cardWidth} ${cardRadius} overflow-hidden ${className}`}
      style={{ backgroundColor: "#f1e6db" }}
    >
      {/* Image */}
      <div className={`relative w-full ${imageHeight} shrink-0`}>
        <img
          alt={name}
          src={image}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Text */}
      <div className={`flex flex-col items-center ${textGap} text-center ${textPadding}`}>
        <span
          className="text-(--color-primary-400) w-full"
          style={{
            fontFamily: typography.styles.body3Medium.fontFamily,
            fontSize: typography.styles.body3Medium.fontSize,
            fontWeight: typography.styles.body3Medium.fontWeight,
            lineHeight: typography.styles.body3Medium.lineHeight,
          }}
        >
          {name}
        </span>
        <span
          className="text-(--color-primary-400) w-full"
          style={{
            fontFamily: typography.styles.body3Regular.fontFamily,
            fontSize: typography.styles.body3Regular.fontSize,
            fontWeight: typography.styles.body3Regular.fontWeight,
            lineHeight: typography.styles.body3Regular.lineHeight,
            letterSpacing: typography.styles.body3Regular.letterSpacing,
          }}
        >
          {price}
        </span>
      </div>
    </div>
  );
}
