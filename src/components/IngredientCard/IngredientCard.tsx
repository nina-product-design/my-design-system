/*
 * IngredientCard — Figma: Design System > Ingredient Carousel
 *
 * Ingredient image floating above a white card with name + description.
 * Card: 204×207px, white, radius 15px, offset 67px from top.
 * Image: ~148×148px, centered, overlaps card top.
 * Name: body/3 regular (16px), neutral/800.
 * Description: body/5 regular (12px), neutral/800, max-w 162px.
 * Gap name→description: 12px. Total height: 274px.
 */

import { typography } from "../../tokens";

// ─── Ingredient images ───────────────────────────────────
import imgHyaluronicAcid from "../../../images/ingredients/Acai 1.png";
import imgSeaMoss from "../../../images/ingredients/Acai 1-1.png";
import imgSpirulina from "../../../images/ingredients/Acai 1-2.png";
import imgBiotin from "../../../images/ingredients/Acai 1-3.png";
import imgRosehipOil from "../../../images/ingredients/Acai 1-4.png";
import imgNiacinamide from "../../../images/ingredients/Acai 1-5.png";
import imgBakuchiol from "../../../images/ingredients/Acai 1-6.png";
import imgVitaminC from "../../../images/ingredients/Acai 1-7.png";
import imgAminoAcids from "../../../images/ingredients/Acai 1-8.png";
import imgCastorOil from "../../../images/ingredients/Acai 1-9.png";
import imgAcaciaCollagen from "../../../images/ingredients/Acai 1-10.png";
import imgAloeVera from "../../../images/ingredients/Acai 1-11.png";
import imgAppleCiderVinegar from "../../../images/ingredients/Acai 1-12.png";
import imgCoconutOil from "../../../images/ingredients/Acai 1-13.png";

// ─── Predefined ingredients ──────────────────────────────
export type IngredientKey =
  | "hyaluronic-acid"
  | "sea-moss"
  | "spirulina"
  | "biotin"
  | "rosehip-oil"
  | "niacinamide"
  | "bakuchiol"
  | "vitamin-c"
  | "amino-acids"
  | "castor-oil"
  | "acacia-collagen"
  | "aloe-vera"
  | "apple-cider-vinegar"
  | "coconut-oil";

export type IngredientCardData = {
  image: string;
  name: string;
  description: string;
};

export const INGREDIENTS: Record<IngredientKey, IngredientCardData> = {
  "hyaluronic-acid":     { image: imgHyaluronicAcid,    name: "Hyaluronic Acid",      description: "to hydrate skin and support its moisture barrier" },
  "sea-moss":            { image: imgSeaMoss,            name: "Sea Moss",             description: "to protect skin from environmental stressors like pollution" },
  "spirulina":           { image: imgSpirulina,          name: "Spirulina",            description: "to balance and refresh oily roots" },
  "biotin":              { image: imgBiotin,             name: "Biotin",               description: "to fortify hair strength and boost density" },
  "rosehip-oil":         { image: imgRosehipOil,         name: "Rosehip Oil",          description: "to nourish skin and promote a healthy glow" },
  "niacinamide":         { image: imgNiacinamide,        name: "Niacinamide",          description: "to reduce the appearance of fine lines and blemishes" },
  "bakuchiol":           { image: imgBakuchiol,          name: "Bakuchiol",            description: "to boost skin firmness and reduce the appearance of redness" },
  "vitamin-c":           { image: imgVitaminC,           name: "Vitamin C",            description: "to help fade dark spots and fight oxidative stress" },
  "amino-acids":         { image: imgAminoAcids,         name: "Amino Acids",          description: "to mattify skin and help minimize the appearance of blemishes" },
  "castor-oil":          { image: imgCastorOil,          name: "Castor Oil",           description: "to nourish, soften, and add shine to hair" },
  "acacia-collagen":     { image: imgAcaciaCollagen,     name: "Acacia Collagen",      description: "to repair damage and boost hair + scalp hydration" },
  "aloe-vera":           { image: imgAloeVera,           name: "Aloe Vera",            description: "to soothe the scalp and support oil absorption" },
  "apple-cider-vinegar": { image: imgAppleCiderVinegar,  name: "Apple Cider Vinegar",  description: "to enhance shine and promote hair health" },
  "coconut-oil":         { image: imgCoconutOil,         name: "Coconut Oil",          description: "to help protect hair fibers from UV damage" },
};

type IngredientCardProps = {
  ingredient?: IngredientKey;
  image?: string;
  name?: string;
  description?: string;
  className?: string;
};

export function IngredientCard({
  ingredient,
  image: imageProp,
  name: nameProp,
  description: descProp,
  className = "",
}: IngredientCardProps) {
  const preset = ingredient ? INGREDIENTS[ingredient] : undefined;
  const image = imageProp ?? preset?.image ?? "";
  const name = nameProp ?? preset?.name ?? "";
  const description = descProp ?? preset?.description ?? "";

  return (
    <div
      className={className}
      style={{
        position: "relative",
        width: 204,
        height: 274,
        flexShrink: 0,
      }}
    >
      {/* White card */}
      <div
        style={{
          position: "absolute",
          top: 67,
          left: 0,
          width: 204,
          height: 207,
          borderRadius: 15,
          backgroundColor: "#ffffff",
        }}
      />

      {/* Floating image */}
      <img
        alt={name}
        src={image}
        style={{
          position: "absolute",
          top: 0,
          left: 61,
          width: 148,
          height: 148,
          objectFit: "cover",
        }}
      />

      {/* Text */}
      <div
        style={{
          position: "absolute",
          top: 167,
          left: 19,
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        <span style={{ ...typography.styles.body3Regular, color: "var(--color-neutral-800)" }}>
          {name}
        </span>
        <span style={{ ...typography.styles.body5Regular, color: "var(--color-neutral-800)", width: 162 }}>
          {description}
        </span>
      </div>
    </div>
  );
}
