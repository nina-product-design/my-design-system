import { useState } from "react";
import {
  Button,
  type ButtonVariant,
  type ButtonSize,
  stateClasses,
  variantTokens,
} from "../components/Button/Button";
import { Accordion } from "../components/Accordion/Accordion";
import { ButtonMini, type ButtonMiniVariant, type ButtonMiniColor } from "../components/Button/ButtonMini";
import { Checkbox, type CheckboxState } from "../components/Checkbox/Checkbox";
import { Logo } from "../components/Logo";
import { Radio, type RadioState, type RadioSize } from "../components/Radio/Radio";
import { Tag, type TagSize } from "../components/Tag/Tag";
import { OfferBadge, type OfferBadgeColor, type OfferBadgeOffer, type OfferBadgeSize } from "../components/OfferBadge";
import { ProgressBar, HAIR_RR_STEPS, SKIN_RR_STEPS, HAIR_CONSULTATION_STEPS, SKIN_CONSULTATION_STEPS } from "../components/ProgressBar";
import { ProductCard, HAIRCARE_PRODUCTS, ACCESSORY_PRODUCTS, SKINCARE_PRODUCTS, type HaircareProduct, type AccessoryProduct, type SkincareProduct } from "../components/ProductCard";
import { ProductCardCarousel, type ProductCardItem } from "../components/ProductCardCarousel";
import { IngredientCard, INGREDIENTS, type IngredientKey } from "../components/IngredientCard";
import { Tip, TipTrigger } from "../components/Tip";
import { IngredientCardCarousel } from "../components/IngredientCardCarousel";
import { Toast, type ToastType, type ToastBreakpoint } from "../components/Toast/Toast";
import { Toggle } from "../components/Toggle/Toggle";
import {
  InputField,
  type InputFieldType,
  type InputFieldState,
  bgClasses as inputBgClasses,
  stateTokens as inputStateTokens,
} from "../components/InputField/InputField";
import {
  Selector,
  type SelectorSize,
  stateTokens as selectorStateTokens,
} from "../components/Selector/Selector";
import {
  TextLink,
  type TextLinkType,
  type TextLinkColor,
  stateClasses as linkStateClasses,
  variantTokens as linkVariantTokens,
} from "../components/TextLink/TextLink";
import { TypographyShowcase } from "../components/Typography/Typography";
import { Navigation, type NavigationSize, type NavigationState } from "../components/Navigation/Navigation";
import { SitewideBanner, type SitewideBannerState } from "../components/SitewideBanner/SitewideBanner";
import { PromoModal, type OfferModalOffer, type OfferModalType } from "../components/PromoModal/PromoModal";
import { RoutineCard, type RoutineCardType } from "../components/RoutineCard";
import { colors, cssVars, tokenMap } from "../tokens";

// ─── Navigation ───────────────────────────────────────────────────────────────

type Page = "logo" | "colors" | "typography" | "spacing" | "radius" | "icons" | "navigation" | "promo-modals" | "buttons" | "text-links" | "inputs" | "selectors" | "ui-controls" | "accordion" | "toasts" | "tags" | "offer-badges" | "progress-bars" | "product-cards" | "routine-cards" | "carousels" | "tips";

type NavSection = {
  title: string;
  items: { id: Page; label: string }[];
};

const navSections: NavSection[] = [
  {
    title: "Foundations",
    items: [
      { id: "logo",       label: "Logo" },
      { id: "colors",     label: "Colors" },
      { id: "typography", label: "Typography" },
      { id: "spacing",    label: "Spacing" },
      { id: "radius",     label: "Radius" },
      { id: "icons",      label: "Icons" },
    ],
  },
  {
    title: "Components",
    items: [
      { id: "buttons",       label: "Buttons" },
      { id: "text-links",    label: "Text Links" },
      { id: "inputs",        label: "Inputs" },
      { id: "selectors",     label: "Selectors" },
      { id: "ui-controls",   label: "UI Controls" },
      { id: "accordion",     label: "Accordion" },
      { id: "toasts",        label: "Toasts" },
      { id: "tags",           label: "Tags" },
      { id: "offer-badges",   label: "Offer Badges" },
      { id: "progress-bars",  label: "Progress Bars" },
      { id: "product-cards",  label: "Product Cards" },
      { id: "routine-cards",  label: "Routine Cards" },
    ],
  },
  {
    title: "Patterns",
    items: [
      { id: "navigation", label: "Navigation" },
      { id: "promo-modals", label: "Promo Modals" },
      { id: "carousels", label: "Carousels" },
      { id: "tips",      label: "Tips" },
    ],
  },
];

// ─── Color data ───────────────────────────────────────────────────────────────

type ColorSwatch = { token: string; value: string; label: string };

const colorGroups: { group: string; swatches: ColorSwatch[] }[] = [
  {
    group: "Primary",
    swatches: [
      { token: "color/primary/400", value: colors.primary[400], label: "400" },
      { token: "color/primary/300", value: colors.primary[300], label: "300" },
      { token: "color/primary/200", value: colors.primary[200], label: "200" },
      { token: "color/primary/100", value: colors.primary[100], label: "100" },
    ],
  },
  {
    group: "Neutral",
    swatches: [
      { token: "color/neutral/900", value: colors.neutral[900], label: "900" },
      { token: "color/neutral/800", value: colors.neutral[800], label: "800" },
      { token: "color/neutral/700", value: colors.neutral[700], label: "700" },
      { token: "color/neutral/600", value: colors.neutral[600], label: "600" },
      { token: "color/neutral/500", value: colors.neutral[500], label: "500" },
      { token: "color/neutral/400", value: colors.neutral[400], label: "400" },
      { token: "color/neutral/300", value: colors.neutral[300], label: "300" },
      { token: "color/neutral/200", value: colors.neutral[200], label: "200" },
      { token: "color/neutral/100", value: colors.neutral[100], label: "100" },
    ],
  },
  {
    group: "Accent",
    swatches: [
      { token: "color/accent/300", value: colors.accent[300], label: "300" },
      { token: "color/accent/200", value: colors.accent[200], label: "200" },
      { token: "color/accent/100", value: colors.accent[100], label: "100" },
    ],
  },
  {
    group: "Secondary",
    swatches: [
      { token: "color/secondary/300", value: colors.secondary[300], label: "300" },
      { token: "color/secondary/200", value: colors.secondary[200], label: "200" },
      { token: "color/secondary/100", value: colors.secondary[100], label: "100" },
    ],
  },
  {
    group: "Tertiary",
    swatches: [
      { token: "color/tertiary/300", value: colors.tertiary[300], label: "300" },
      { token: "color/tertiary/200", value: colors.tertiary[200], label: "200" },
      { token: "color/tertiary/100", value: colors.tertiary[100], label: "100" },
    ],
  },
  {
    group: "Highlight",
    swatches: [
      { token: "color/highlight/200", value: colors.highlight[200], label: "200" },
      { token: "color/highlight/100", value: colors.highlight[100], label: "100" },
    ],
  },
  {
    group: "Success",
    swatches: [
      { token: "color/success/200", value: colors.success[200], label: "200" },
      { token: "color/success/100", value: colors.success[100], label: "100" },
    ],
  },
  {
    group: "Error",
    swatches: [
      { token: "color/error/200", value: colors.error[200], label: "200" },
      { token: "color/error/100", value: colors.error[100], label: "100" },
    ],
  },
];

// ─── Button data ──────────────────────────────────────────────────────────────

type ButtonRow = {
  variant: ButtonVariant;
  label: string;
  floating?: boolean;
  hasLoading?: boolean;
  previewBg: "light" | "dark";
};

type ButtonGroup = { name: string; rows: ButtonRow[] };

const buttonGroups: ButtonGroup[] = [
  {
    name: "Primary",
    rows: [
      { variant: "primary-light",  label: "Primary Light",         previewBg: "light", hasLoading: true },
      { variant: "primary-dark",   label: "Primary Dark",          previewBg: "dark",  hasLoading: true },
      { variant: "primary-light",  label: "Primary Floating",      previewBg: "light", floating: true },
      { variant: "primary-dark",   label: "Primary Dark Floating", previewBg: "dark",  floating: true },
    ],
  },
  {
    name: "Secondary",
    rows: [
      { variant: "secondary-light", label: "Secondary Light", previewBg: "light" },
      { variant: "secondary-dark",  label: "Secondary Dark",  previewBg: "dark" },
    ],
  },
  {
    name: "Accent",
    rows: [
      { variant: "accent", label: "Accent",          previewBg: "light", hasLoading: true },
      { variant: "accent", label: "Accent Floating", previewBg: "light", floating: true },
    ],
  },
  {
    name: "Destructive",
    rows: [
      { variant: "destructive", label: "Destructive", previewBg: "light" },
    ],
  },
];

// ─── Shared sub-components ────────────────────────────────────────────────────

function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-10 pb-6 border-b" style={{ borderColor: cssVars["color/neutral/600"] }}>
      <h1
        style={{
          fontFamily: "var(--font-heading-h2-family)",
          fontSize: "var(--font-heading-h2-size)",
          fontWeight: "var(--font-heading-h2-weight)",
          lineHeight: "var(--font-heading-h2-line-height)",
          color: cssVars["color/primary/400"],
        }}
      >
        {title}
      </h1>
      {subtitle && (
        <p className="mt-2 text-[13px]" style={{ color: cssVars["color/neutral/800"] }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-[10px] uppercase tracking-[2px] font-mono font-medium mb-4"
      style={{ color: cssVars["color/neutral/700"] }}
    >
      {children}
    </p>
  );
}

function TokenPill({ token }: { token: string }) {
  const value = tokenMap[token as keyof typeof tokenMap] ?? token;
  return (
    <span
      className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono"
      style={{ background: cssVars["color/primary/100"], color: cssVars["color/primary/400"] }}
    >
      <span className="opacity-60">{token}</span>
      <span className="font-semibold">{value}</span>
    </span>
  );
}

function ColorGroup({ group, swatches }: (typeof colorGroups)[number]) {
  return (
    <div>
      <SectionLabel>{group}</SectionLabel>
      <div className="flex flex-wrap gap-3">
        {swatches.map((s) => (
          <div key={s.token} className="flex flex-col items-start gap-1.5">
            <div
              className="w-14 h-14 rounded-xl border"
              style={{
                background: cssVars[s.token as keyof typeof cssVars] ?? s.value,
                borderColor: cssVars["color/neutral/600"],
              }}
            />
            <p className="text-[11px] font-mono font-medium" style={{ color: cssVars["color/neutral/800"] }}>
              {s.label}
            </p>
            <p className="text-[10px] font-mono" style={{ color: cssVars["color/neutral/700"] }}>
              {s.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Static button hover preview ──────────────────────────────────────────────

const floatingShadow = "shadow-[0_4px_24px_rgba(50,52,41,0.20)]";
const baseButtonClasses =
  "inline-flex items-center justify-center h-[44px] px-(--spacing-spacing-32) py-[14px] rounded-full min-w-[327px]";

function HoverPreview({ variant, floating = false }: { variant: ButtonVariant; floating?: boolean }) {
  return (
    <div
      className={[baseButtonClasses, floating ? floatingShadow : "", stateClasses[variant].hover]
        .filter(Boolean)
        .join(" ")}
    >
      <span className="label-2-medium uppercase text-center flex-1 min-w-0">
        get your formula
      </span>
    </div>
  );
}

function StateLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-[10px] uppercase tracking-widest font-medium text-center"
      style={{ color: cssVars["color/neutral/700"] }}
    >
      {children}
    </p>
  );
}

function PreviewCell({ bg, children }: { bg: "light" | "dark"; children: React.ReactNode }) {
  return (
    <div
      className="flex items-center justify-center p-4 rounded-xl"
      style={{
        background: bg === "dark" ? cssVars["color/primary/400"] : cssVars["color/primary/100"],
      }}
    >
      {children}
    </div>
  );
}

function ButtonGroupSection({ name, rows }: ButtonGroup) {
  const hasLoading = rows.some((r) => r.hasLoading);
  const gridCols = hasLoading ? "200px 1fr 1fr 1fr 1fr 200px" : "200px 1fr 1fr 1fr 200px";

  return (
    <div className="mb-10">
      <SectionLabel>{name}</SectionLabel>

      {/* Column headers */}
      <div className="grid gap-3 mb-2" style={{ gridTemplateColumns: gridCols }}>
        <div />
        <StateLabel>Default</StateLabel>
        <StateLabel>Hover</StateLabel>
        <StateLabel>Disabled</StateLabel>
        {hasLoading && <StateLabel>Loading</StateLabel>}
        <StateLabel>Tokens</StateLabel>
      </div>

      {rows.map((row) => {
        const tokens = variantTokens[row.variant];
        return (
          <div
            key={row.label}
            className="grid gap-3 items-center py-3 border-b last:border-0"
            style={{ gridTemplateColumns: gridCols, borderColor: cssVars["color/neutral/600"] }}
          >
            <div>
              <p className="text-[13px] font-medium" style={{ color: cssVars["color/primary/400"] }}>
                {row.label}
              </p>
              <p className="text-[10px] font-mono mt-0.5" style={{ color: cssVars["color/neutral/700"] }}>
                variant="{row.variant}"{row.floating ? " floating" : ""}
              </p>
            </div>

            <PreviewCell bg={row.previewBg}>
              <Button variant={row.variant} size="fixed" floating={row.floating}>
                get your formula
              </Button>
            </PreviewCell>

            <PreviewCell bg={row.previewBg}>
              <HoverPreview variant={row.variant} floating={row.floating} />
            </PreviewCell>

            <PreviewCell bg={row.previewBg}>
              <Button variant={row.variant} size="fixed" floating={row.floating} disabled>
                get your formula
              </Button>
            </PreviewCell>

            {hasLoading && (
              <PreviewCell bg={row.previewBg}>
                {row.hasLoading ? (
                  <Button variant={row.variant} size="fixed" loading>
                    get your formula
                  </Button>
                ) : (
                  <span className="text-[11px]" style={{ color: cssVars["color/neutral/700"] }}>—</span>
                )}
              </PreviewCell>
            )}

            <div className="flex flex-col gap-1.5">
              {tokens.bg     && <TokenPill token={tokens.bg} />}
              {tokens.border && <TokenPill token={tokens.border} />}
              <TokenPill token={tokens.text} />
              <TokenPill token="color/primary/300" />
              {row.floating  && <TokenPill token="radius/radius-400" />}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function SizesSection() {
  const sizes: { size: ButtonSize; label: string; desc: string }[] = [
    { size: "fixed",    label: "Fixed",    desc: "min-width: 327px" },
    { size: "flexible", label: "Flexible", desc: "w-fit, max-width: 327px" },
  ];

  return (
    <div className="mb-10">
      <SectionLabel>Sizes</SectionLabel>
      <div className="flex flex-wrap gap-10 items-start">
        {sizes.map(({ size, label, desc }) => (
          <div key={size} className="flex flex-col gap-3 items-start">
            <PreviewCell bg="light">
              <Button variant="primary-light" size={size}>
                get your formula
              </Button>
            </PreviewCell>
            <div>
              <p className="text-[12px] font-medium" style={{ color: cssVars["color/primary/400"] }}>{label}</p>
              <p className="text-[11px] font-mono" style={{ color: cssVars["color/neutral/700"] }}>{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Pages ────────────────────────────────────────────────────────────────────

function ColorsPage() {
  return (
    <div>
      <PageHeader title="Colors" subtitle="All color tokens from the design system." />
      <div className="grid grid-cols-4 gap-10">
        {colorGroups.map((g) => (
          <ColorGroup key={g.group} {...g} />
        ))}
      </div>
    </div>
  );
}

function TypographyPage() {
  return (
    <div>
      <PageHeader title="Typography" subtitle="All type styles — headings, body, and labels." />
      <TypographyShowcase />
    </div>
  );
}

function SpacingPage() {
  const tokens = [
    { label: "spacing/4",  value: "4px",  cssVar: "var(--spacing-spacing-4)"  },
    { label: "spacing/8",  value: "8px",  cssVar: "var(--spacing-spacing-8)"  },
    { label: "spacing/12", value: "12px", cssVar: "var(--spacing-spacing-12)" },
    { label: "spacing/16", value: "16px", cssVar: "var(--spacing-spacing-16)" },
    { label: "spacing/24", value: "24px", cssVar: "var(--spacing-spacing-24)" },
    { label: "spacing/32", value: "32px", cssVar: "var(--spacing-spacing-32)" },
    { label: "spacing/48", value: "48px", cssVar: "var(--spacing-spacing-48)" },
    { label: "spacing/64", value: "64px", cssVar: "var(--spacing-spacing-64)" },
    { label: "spacing/80", value: "80px", cssVar: "var(--spacing-spacing-80)" },
  ] as const;

  return (
    <div>
      <PageHeader title="Spacing" subtitle="Spacing scale tokens." />
      <div className="flex flex-col gap-3">
        {tokens.map(({ label, value }) => (
          <div key={label} className="flex items-center gap-4">
            <div
              className="shrink-0 rounded"
              style={{
                width: value,
                height: "32px",
                background: cssVars["color/accent/200"],
              }}
            />
            <div>
              <p className="text-[12px] font-mono font-medium" style={{ color: cssVars["color/primary/400"] }}>
                {value}
              </p>
              <p className="text-[10px] font-mono" style={{ color: cssVars["color/neutral/700"] }}>
                {label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function RadiusPage() {
  const tokens = [
    { label: "radius/0",   value: "0px",   cssVar: "var(--radius-radius-0)"   },
    { label: "radius/4",   value: "4px",   cssVar: "var(--radius-radius-4)"   },
    { label: "radius/10",  value: "10px",  cssVar: "var(--radius-radius-10)"  },
    { label: "radius/12",  value: "12px",  cssVar: "var(--radius-radius-12)"  },
    { label: "radius/20",  value: "20px",  cssVar: "var(--radius-radius-20)"  },
    { label: "radius/60",  value: "60px",  cssVar: "var(--radius-radius-60)"  },
    { label: "radius/400", value: "400px", cssVar: "var(--radius-radius-400)" },
  ] as const;

  return (
    <div>
      <PageHeader title="Radius" subtitle="Border radius tokens." />
      <div className="flex flex-wrap gap-8 items-end">
        {tokens.map(({ label, value }) => (
          <div key={label} className="flex flex-col items-center gap-3">
            <div
              className="w-16 h-16 border-2"
              style={{
                borderRadius: value,
                borderColor: cssVars["color/primary/400"],
                background: cssVars["color/primary/100"],
              }}
            />
            <div className="text-center">
              <p className="text-[11px] font-mono font-medium" style={{ color: cssVars["color/primary/400"] }}>
                {value}
              </p>
              <p className="text-[10px] font-mono" style={{ color: cssVars["color/neutral/700"] }}>
                {label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function LogoPage() {
  return (
    <div>
      <PageHeader title="Logo" subtitle="The Prose wordmark. Uses currentColor — inherits text color from parent." />

      <div className="flex flex-col gap-10">
        {/* Dark variant on light bg */}
        <div>
          <SectionLabel>Dark variant — for light backgrounds</SectionLabel>
          <div
            className="flex items-center justify-center p-10 rounded-xl"
            style={{ background: cssVars["color/neutral/200"] }}
          >
            <Logo variant="dark" height={48} />
          </div>
          <p className="text-[10px] font-mono mt-2" style={{ color: cssVars["color/neutral/700"] }}>
            {'<Logo variant="dark" height={48} />'}
          </p>
        </div>

        {/* Light variant on dark bg */}
        <div>
          <SectionLabel>Light variant — for dark backgrounds</SectionLabel>
          <div
            className="flex items-center justify-center p-10 rounded-xl"
            style={{ background: cssVars["color/primary/400"] }}
          >
            <Logo variant="light" height={48} />
          </div>
          <p className="text-[10px] font-mono mt-2" style={{ color: cssVars["color/neutral/700"] }}>
            {'<Logo variant="light" height={48} />'}
          </p>
        </div>

        {/* Size examples */}
        <div>
          <SectionLabel>Sizes</SectionLabel>
          <div
            className="flex items-end gap-8 p-10 rounded-xl"
            style={{ background: cssVars["color/neutral/200"] }}
          >
            <div className="flex flex-col items-center gap-2">
              <Logo variant="dark" height={18} />
              <p className="text-[10px] font-mono" style={{ color: cssVars["color/neutral/700"] }}>18px</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Logo variant="dark" height={24} />
              <p className="text-[10px] font-mono" style={{ color: cssVars["color/neutral/700"] }}>24px</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Logo variant="dark" height={32} />
              <p className="text-[10px] font-mono" style={{ color: cssVars["color/neutral/700"] }}>32px</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Logo variant="dark" height={48} />
              <p className="text-[10px] font-mono" style={{ color: cssVars["color/neutral/700"] }}>48px</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Logo variant="dark" height={64} />
              <p className="text-[10px] font-mono" style={{ color: cssVars["color/neutral/700"] }}>64px</p>
            </div>
          </div>
        </div>

        {/* Tokens */}
        <div>
          <SectionLabel>Tokens</SectionLabel>
          <div className="flex gap-3">
            <TokenPill token="color/primary/400" />
            <TokenPill token="color/neutral/100" />
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Text Links data ─────────────────────────────────────────────────────────

type LinkRow = {
  type: TextLinkType;
  color: TextLinkColor;
  label: string;
  hasIcon?: boolean;
  previewBg: "light" | "dark";
};

type LinkGroup = { name: string; rows: LinkRow[] };

const linkGroups: LinkGroup[] = [
  {
    name: "Primary",
    rows: [
      { type: "primary", color: "light", label: "Primary Light",           previewBg: "light" },
      { type: "primary", color: "light", label: "Primary Light + Icon",    previewBg: "light", hasIcon: true },
      { type: "primary", color: "dark",  label: "Primary Dark",            previewBg: "dark" },
      { type: "primary", color: "dark",  label: "Primary Dark + Icon",     previewBg: "dark",  hasIcon: true },
    ],
  },
  {
    name: "Secondary",
    rows: [
      { type: "secondary", color: "light", label: "Secondary Light", previewBg: "light" },
      { type: "secondary", color: "dark",  label: "Secondary Dark",  previewBg: "dark" },
    ],
  },
  {
    name: "Simple",
    rows: [
      { type: "simple", color: "light", label: "Simple Light", previewBg: "light" },
      { type: "simple", color: "dark",  label: "Simple Dark",  previewBg: "dark" },
    ],
  },
];

function LinkHoverPreview({
  type,
  color,
  hasIcon = false,
}: {
  type: TextLinkType;
  color: TextLinkColor;
  hasIcon?: boolean;
}) {
  const key = `${type}-${color}` as const;
  const isSimple = type === "simple";

  if (isSimple) {
    return (
      <span
        className={[
          "inline-flex items-center underline decoration-current",
          linkStateClasses[key].hover,
        ].join(" ")}
        style={{
          fontFamily: "var(--font-body-4-family)",
          fontSize: "var(--font-body-4-size)",
          fontWeight: "var(--font-body-4-weight-regular)",
          lineHeight: "var(--font-body-4-line-height)",
          letterSpacing: "var(--font-body-4-letter-spacing)",
        }}
      >
        Text goes here
      </span>
    );
  }

  const isPrimary = type === "primary";
  const underlineBgClass = isPrimary ? "bg-(--color-accent-300)" : "bg-(--color-primary-400)";
  const underlineBgDarkClass = isPrimary ? "bg-(--color-accent-300)" : "bg-(--color-neutral-100)";
  const ulClass = color === "dark" ? underlineBgDarkClass : underlineBgClass;

  return (
    <span className={["inline-flex items-center gap-(--spacing-spacing-8)", linkStateClasses[key].hover].join(" ")}>
      <span className="flex flex-col gap-[4px] items-start">
        <span className="label-2-medium uppercase whitespace-nowrap">Text goes here</span>
        <span className={`h-px w-full ${ulClass}`} aria-hidden="true" />
      </span>
      {hasIcon && (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0" aria-hidden="true">
          <circle cx="10" cy="10" r="9.5" stroke="currentColor" />
          <path d="M8.5 6L13.5 10L8.5 14" fill="currentColor" />
        </svg>
      )}
    </span>
  );
}

function LinkGroupSection({ name, rows }: LinkGroup) {
  return (
    <div className="mb-10">
      <SectionLabel>{name}</SectionLabel>

      {/* Column headers */}
      <div className="grid gap-3 mb-2" style={{ gridTemplateColumns: "200px 1fr 1fr 1fr 200px" }}>
        <div />
        <StateLabel>Default</StateLabel>
        <StateLabel>Hover</StateLabel>
        <StateLabel>Disabled</StateLabel>
        <StateLabel>Tokens</StateLabel>
      </div>

      {rows.map((row) => {
        const key = `${row.type}-${row.color}` as const;
        const tokens = linkVariantTokens[key];
        return (
          <div
            key={row.label}
            className="grid gap-3 items-center py-3 border-b last:border-0"
            style={{ gridTemplateColumns: "200px 1fr 1fr 1fr 200px", borderColor: cssVars["color/neutral/600"] }}
          >
            <div>
              <p className="text-[13px] font-medium" style={{ color: cssVars["color/primary/400"] }}>
                {row.label}
              </p>
              <p className="text-[10px] font-mono mt-0.5" style={{ color: cssVars["color/neutral/700"] }}>
                type="{row.type}" color="{row.color}"{row.hasIcon ? " hasIcon" : ""}
              </p>
            </div>

            <PreviewCell bg={row.previewBg}>
              <TextLink type={row.type} color={row.color} hasIcon={row.hasIcon}>
                Text goes here
              </TextLink>
            </PreviewCell>

            <PreviewCell bg={row.previewBg}>
              <LinkHoverPreview type={row.type} color={row.color} hasIcon={row.hasIcon} />
            </PreviewCell>

            <PreviewCell bg={row.previewBg}>
              <TextLink type={row.type} color={row.color} hasIcon={row.hasIcon} disabled>
                Text goes here
              </TextLink>
            </PreviewCell>

            <div className="flex flex-col gap-1.5">
              <TokenPill token={tokens.text} />
              <TokenPill token={tokens.underline} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─── Inputs data ─────────────────────────────────────────────────────────────

const inputTypes: { type: InputFieldType; label: string }[] = [
  { type: "form-field", label: "Form Field" },
  { type: "dropdown",   label: "Dropdown" },
  { type: "button",     label: "Button" },
];

const inputStates: InputFieldState[] = [
  "default",
  "active",
  "disabled",
  "incomplete",
  "invalid",
  "complete",
];

const stateLabels: Record<InputFieldState, string> = {
  default:    "Default",
  active:     "Active",
  disabled:   "Disabled",
  incomplete: "Incomplete",
  invalid:    "Invalid",
  complete:   "Complete",
};

// ─── Selectors data ──────────────────────────────────────────────────────────

import sampleImage from "../../images/shampoo.png";
import sampleImageType from "../../images/type-3-defined-curl.png";

function SelectorsPage() {
  const [fixedSel, setFixedSel] = useState<string | null>(null);
  const [subcopySel, setSubcopySel] = useState<string | null>(null);
  const [hugSel, setHugSel] = useState<string | null>(null);
  const [mobileSel, setMobileSel] = useState<string | null>(null);
  const [desktopSel, setDesktopSel] = useState<string | null>(null);

  const fixedOptions = ["Once or twice a week", "Every other day", "Daily"];
  const subcopyOptions = [
    { label: "Once or twice a week", subcopy: "Some fibers look healthy, others don't" },
    { label: "Every other day", subcopy: "Most fibers look healthy and shiny" },
  ];
  const hugOptions = ["Once or twice a week", "$100", "Daily"];

  return (
    <div>
      <PageHeader
        title="Selectors"
        subtitle="Consultation selectors — text pills and image cards. Click to select."
      />

      {/* Text pill — fixed width */}
      <div className="mb-10">
        <SectionLabel>Text Pill — Fixed</SectionLabel>
        <div className="flex flex-col gap-3 items-start">
          {fixedOptions.map((opt) => (
            <Selector key={opt} label={opt} selected={fixedSel === opt} onClick={() => setFixedSel(fixedSel === opt ? null : opt)} />
          ))}
        </div>
        <div className="flex flex-wrap gap-1.5 mt-3"><TokenPill token="color/neutral/100" /><TokenPill token="color/neutral/300" /><TokenPill token="color/primary/400" /><TokenPill token="color/primary/200" /></div>
      </div>

      {/* Text pill — with subcopy */}
      <div className="mb-10">
        <SectionLabel>Text Pill — With Subcopy</SectionLabel>
        <div className="flex flex-col gap-3 items-start">
          {subcopyOptions.map((opt) => (
            <Selector key={opt.label} label={opt.label} subcopy={opt.subcopy} selected={subcopySel === opt.label} onClick={() => setSubcopySel(subcopySel === opt.label ? null : opt.label)} />
          ))}
        </div>
      </div>

      {/* Text pill — hug width */}
      <div className="mb-10">
        <SectionLabel>Text Pill — Hug</SectionLabel>
        <div className="flex flex-wrap gap-3 items-start">
          {hugOptions.map((opt) => (
            <Selector key={opt} size="hug" label={opt} selected={hugSel === opt} onClick={() => setHugSel(hugSel === opt ? null : opt)} />
          ))}
        </div>
      </div>

      {/* Image card — mobile */}
      <div className="mb-10">
        <SectionLabel>Image Card — Mobile</SectionLabel>
        <div className="flex flex-wrap gap-4 items-start">
          <Selector image={sampleImage} size="mobile" label="Haircare" subcopy="Shampoo, conditioner, masks, stylers" selected={mobileSel === "Haircare"} onClick={() => setMobileSel(mobileSel === "Haircare" ? null : "Haircare")} />
          <Selector image={sampleImageType} size="mobile" label="Type 1 - Straight" selected={mobileSel === "Type 1 - Straight"} onClick={() => setMobileSel(mobileSel === "Type 1 - Straight" ? null : "Type 1 - Straight")} />
        </div>
      </div>

      {/* Image card — desktop */}
      <div className="mb-10">
        <SectionLabel>Image Card — Desktop</SectionLabel>
        <div className="flex flex-wrap gap-4 items-start">
          <Selector image={sampleImage} size="desktop" label="Haircare" subcopy="Shampoo, conditioner, masks, stylers" selected={desktopSel === "Haircare"} onClick={() => setDesktopSel(desktopSel === "Haircare" ? null : "Haircare")} />
          <Selector image={sampleImageType} size="desktop" label="Type 1 - Straight" selected={desktopSel === "Type 1 - Straight"} onClick={() => setDesktopSel(desktopSel === "Type 1 - Straight" ? null : "Type 1 - Straight")} />
        </div>
      </div>

      {/* Spec notes */}
      <div className="mt-8 p-6 rounded-xl" style={{ background: cssVars["color/neutral/300"] }}>
        <SectionLabel>Specs</SectionLabel>
        <div className="flex flex-col gap-1">
          <p className="text-[13px]" style={{ color: cssVars["color/primary/400"] }}>
            Text pill: py-16px, rounded-10. Fixed: w-327px px-32. Hug: w-fit px-12.
          </p>
          <p className="text-[13px]" style={{ color: cssVars["color/primary/400"] }}>
            Image card: 127px tall. Image: 101px wide. Mobile: 327px total. Desktop: 368px total.
          </p>
          <p className="text-[13px]" style={{ color: cssVars["color/primary/400"] }}>
            Deselected: bg neutral/100, border neutral/300, text primary/400
          </p>
          <p className="text-[13px]" style={{ color: cssVars["color/primary/400"] }}>
            Selected: bg primary/200, text neutral/900 — border primary/200 (image cards)
          </p>
        </div>
      </div>
    </div>
  );
}

function InputsPage() {
  const [inputVal, setInputVal] = useState("");
  const [inputState, setInputState] = useState<InputFieldState>("default");

  return (
    <div>
      <PageHeader
        title="Input Fields"
        subtitle="Text inputs, dropdowns, and button inputs — all states."
      />

      {/* Interactive demo */}
      <div className="mb-12">
        <SectionLabel>Interactive Demo</SectionLabel>
        <div className="flex gap-3 mb-4 flex-wrap">
          {inputStates.map((s) => (
            <button
              key={s}
              onClick={() => setInputState(s)}
              className="px-3 py-1 rounded-[60px] text-xs font-label uppercase tracking-[0.96px] cursor-pointer transition-colors"
              style={{
                background: inputState === s ? cssVars["color/primary/300"] : cssVars["color/neutral/100"],
                color: inputState === s ? cssVars["color/neutral/100"] : cssVars["color/primary/400"],
                border: `1px solid ${cssVars["color/neutral/400"]}`,
              }}
            >
              {stateLabels[s]}
            </button>
          ))}
        </div>
        <div className="flex items-start justify-center p-6 rounded-xl min-h-[100px]" style={{ background: cssVars["color/neutral/200"] }}>
          <InputField type="form-field" state={inputState} value={inputVal || undefined} />
        </div>
      </div>

      {inputTypes.map(({ type, label: typeLabel }) => (
        <div key={type} className="mb-12">
          <SectionLabel>{typeLabel}</SectionLabel>

          <div className="grid grid-cols-3 gap-6">
            {inputStates.map((state) => {
              const tokens = inputStateTokens[state];
              return (
                <div key={state} className="flex flex-col gap-2">
                  <StateLabel>{stateLabels[state]}</StateLabel>
                  <div
                    className="flex items-start justify-center p-6 rounded-xl min-h-[100px]"
                    style={{ background: cssVars["color/neutral/200"] }}
                  >
                    <InputField type={type} state={state} />
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    <TokenPill token={tokens.bg} />
                    <TokenPill token={tokens.border} />
                    <TokenPill token={tokens.value} />
                    {tokens.label && <TokenPill token={tokens.label} />}
                    {tokens.underline && <TokenPill token={tokens.underline} />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {/* Spec notes */}
      <div className="mt-8 p-6 rounded-xl" style={{ background: cssVars["color/neutral/300"] }}>
        <SectionLabel>Specs</SectionLabel>
        <div className="flex flex-col gap-1">
          <p className="text-[13px]" style={{ color: cssVars["color/primary/400"] }}>
            Height: 56px — Padding: 16px horizontal, 8px vertical
          </p>
          <p className="text-[13px]" style={{ color: cssVars["color/primary/400"] }}>
            Border: 1px solid neutral/600 — Shadow: 2px 2px 3px rgba(234,234,234,0.5)
          </p>
          <p className="text-[13px]" style={{ color: cssVars["color/primary/400"] }}>
            Label: body/5 regular (12px) — Value: body/3 regular (16px)
          </p>
          <p className="text-[13px]" style={{ color: cssVars["color/primary/400"] }}>
            Active/error underline: 2px solid — Disabled bg: neutral/600
          </p>
        </div>
      </div>
    </div>
  );
}

function TextLinksPage() {
  return (
    <div>
      <PageHeader
        title="Text Links"
        subtitle="Used when a button is unnecessary or too large. Underline animates left→right on hover."
      />
      {linkGroups.map((group) => (
        <LinkGroupSection key={group.name} {...group} />
      ))}

      {/* Animation note */}
      <div className="mt-8 p-6 rounded-xl" style={{ background: cssVars["color/neutral/300"] }}>
        <SectionLabel>Animation</SectionLabel>
        <p className="text-[13px]" style={{ color: cssVars["color/primary/400"] }}>
          Primary & Secondary: underline animates left→right on hover.
          <br />
          Simple: static underline (text-decoration), no animation.
        </p>
      </div>
    </div>
  );
}

function ButtonsPage() {
  return (
    <div>
      <PageHeader title="Buttons" subtitle="All button variants, sizes, and states." />
      <SizesSection />
      {buttonGroups.map((group) => (
        <ButtonGroupSection key={group.name} {...group} />
      ))}

      {/* Mini buttons */}
      <div className="mb-10">
        <SectionLabel>Mini Buttons</SectionLabel>
        <p className="text-[13px] mb-4" style={{ color: cssVars["color/neutral/800"] }}>
          44×44px circular icon buttons. Back (arrow) and Add (plus) variants.
        </p>

        <div className="mb-6">
          <p className="text-[11px] font-mono uppercase tracking-[1px] mb-3" style={{ color: cssVars["color/neutral/700"] }}>
            Light mode (dark bg)
          </p>
          <div className="flex gap-4 items-center">
            <div className="flex flex-col gap-1 items-center">
              <ButtonMini variant="back" color="light" floating />
              <span className="text-[10px] font-mono" style={{ color: cssVars["color/neutral/700"] }}>Back + Float</span>
            </div>
            <div className="flex flex-col gap-1 items-center">
              <ButtonMini variant="back" color="light" floating={false} />
              <span className="text-[10px] font-mono" style={{ color: cssVars["color/neutral/700"] }}>Back</span>
            </div>
            <div className="flex flex-col gap-1 items-center">
              <ButtonMini variant="add" color="light" floating />
              <span className="text-[10px] font-mono" style={{ color: cssVars["color/neutral/700"] }}>Add + Float</span>
            </div>
            <div className="flex flex-col gap-1 items-center">
              <ButtonMini variant="add" color="light" floating={false} />
              <span className="text-[10px] font-mono" style={{ color: cssVars["color/neutral/700"] }}>Add</span>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-[11px] font-mono uppercase tracking-[1px] mb-3" style={{ color: cssVars["color/neutral/700"] }}>
            Dark mode (light bg)
          </p>
          <div className="flex gap-4 items-center">
            <div className="flex flex-col gap-1 items-center">
              <ButtonMini variant="back" color="dark" floating />
              <span className="text-[10px] font-mono" style={{ color: cssVars["color/neutral/700"] }}>Back + Float</span>
            </div>
            <div className="flex flex-col gap-1 items-center">
              <ButtonMini variant="back" color="dark" floating={false} />
              <span className="text-[10px] font-mono" style={{ color: cssVars["color/neutral/700"] }}>Back</span>
            </div>
            <div className="flex flex-col gap-1 items-center">
              <ButtonMini variant="add" color="dark" floating />
              <span className="text-[10px] font-mono" style={{ color: cssVars["color/neutral/700"] }}>Add + Float</span>
            </div>
            <div className="flex flex-col gap-1 items-center">
              <ButtonMini variant="add" color="dark" floating={false} />
              <span className="text-[10px] font-mono" style={{ color: cssVars["color/neutral/700"] }}>Add</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5">
          <TokenPill token="color/primary/400" />
          <TokenPill token="color/neutral/200" />
          <TokenPill token="color/neutral/100" />
        </div>
      </div>
    </div>
  );
}

// ─── Accordion ───────────────────────────────────────────────────────────────

const productAccordionItems = [
  {
    question: "How Prose does custom",
    steps: [
      { title: "Take our haircare consultation", description: "We'll analyze 85+ factors — from what you eat to where you live — to understand the unique needs of your hair and scalp." },
      { title: "Your formulas are made to order", description: "Our AI-powered algorithm creates your personalized formulas + recommended routine, carefully selecting from 185+ clean ingredients to meet your hair goals." },
      { title: "As you change, so does your Prose", description: "We'll address any new concerns, adjust your formulas with the seasons, and learn from your feedback for better hair with every order." },
    ],
  },
  { question: "Scientific results" },
  { question: "Exclusive fragrances" },
];

const faqItems = [
  {
    question: "What shampoo should I use?",
    answer: "Everyone's hair is unique, and your shampoo should factor in your hair type, porosity, density, and the environmental stressors (like hard water, humidity and pollution) in your zip code. Prose asks in-depth questions about your diet, lifestyle, and climate, all of which impact your hair. From millions of possible formulas, only one is uniquely yours.",
  },
  { question: "What type of hair is this shampoo for?" },
  { question: "How often should I wash my hair?" },
  { question: "Will Prose shampoo help me go longer in between washes?" },
  { question: "I have a sensitive scalp — can I still use Prose Custom Shampoo?" },
  { question: "What ingredients should I avoid in shampoo?" },
  { question: "What is the best shampoo and conditioner to use together?" },
];

function AccordionPage() {
  return (
    <div>
      <PageHeader
        title="Accordion"
        subtitle="Product detail accordions and FAQ accordions. Click items to expand."
      />

      {/* Product Details variant */}
      <div className="mb-10">
        <SectionLabel>Product Details</SectionLabel>
        <div className="max-w-[417px]">
          <Accordion variant="product" items={productAccordionItems} />
        </div>
      </div>

      {/* FAQ variant — interactive */}
      <div className="mb-10">
        <SectionLabel>FAQ — Mobile (375px)</SectionLabel>
        <div className="max-w-[375px] bg-(--color-neutral-100) p-(--spacing-spacing-24) rounded-(--radius-radius-10)">
          <h3
            className="mb-(--spacing-spacing-24)"
            style={{
              fontFamily: "var(--font-heading-h3-family)",
              fontSize: "var(--font-heading-h3-size)",
              fontWeight: "var(--font-heading-h3-weight)",
              lineHeight: "var(--font-heading-h3-line-height)",
              letterSpacing: "var(--font-heading-h3-letter-spacing)",
              color: "var(--color-primary-400)",
            }}
          >
            FAQs
          </h3>
          <Accordion variant="faq" items={faqItems} />
        </div>
      </div>

      {/* FAQ variant — desktop layout */}
      <div className="mb-10">
        <SectionLabel>FAQ — Desktop</SectionLabel>
        <div className="flex gap-(--spacing-spacing-64) bg-(--color-neutral-100) p-(--spacing-spacing-64) rounded-(--radius-radius-10)">
          <h3
            className="shrink-0 w-[200px]"
            style={{
              fontFamily: "var(--font-heading-h3-family)",
              fontSize: "var(--font-heading-h3-size)",
              fontWeight: "var(--font-heading-h3-weight)",
              lineHeight: "var(--font-heading-h3-line-height)",
              letterSpacing: "var(--font-heading-h3-letter-spacing)",
              color: "var(--color-neutral-900)",
            }}
          >
            FAQs
          </h3>
          <div className="flex-1">
            <Accordion variant="faq" items={faqItems} />
          </div>
        </div>
      </div>

      {/* Spec notes */}
      <div className="mt-8 p-6 rounded-xl" style={{ background: cssVars["color/neutral/300"] }}>
        <SectionLabel>Specs</SectionLabel>
        <div className="flex flex-col gap-1">
          <p className="text-[13px]" style={{ color: cssVars["color/primary/400"] }}>
            Product: label/2 medium (Simplon Mono 12px uppercase), text primary/300, chevron icon
          </p>
          <p className="text-[13px]" style={{ color: cssVars["color/primary/400"] }}>
            FAQ mobile: body/4 regular (14px), text primary/400, plus/minus icon
          </p>
          <p className="text-[13px]" style={{ color: cssVars["color/primary/400"] }}>
            FAQ desktop: body/3 regular (16px), two-column layout (title left, questions right)
          </p>
          <p className="text-[13px]" style={{ color: cssVars["color/primary/400"] }}>
            Divider: 1px neutral/600 between items. Padding: 8px vertical per row.
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── UI Controls ─────────────────────────────────────────────────────────────

function UIControlsPage() {
  const [toggleOn, setToggleOn] = useState(false);
  const [toggleLabelOn, setToggleLabelOn] = useState(false);
  const [radioSmall, setRadioSmall] = useState<number>(0);
  const [radioLarge, setRadioLarge] = useState<number>(0);
  const [checkStates, setCheckStates] = useState<CheckboxState[]>(["empty", "selected", "inactive", "read-only"]);
  const [checkLabeled, setCheckLabeled] = useState(true);

  const toggleCheck = (i: number) => {
    setCheckStates((prev) => {
      const next = [...prev];
      if (next[i] === "inactive" || next[i] === "read-only") return next;
      next[i] = next[i] === "selected" ? "empty" : "selected";
      return next;
    });
  };

  const radioLabels = ["Option A", "Option B", "Option C"];

  return (
    <div>
      <PageHeader
        title="UI Controls"
        subtitle="Radio buttons, checkboxes, and toggles. Click to interact."
      />

      {/* Radio buttons */}
      <div className="mb-10">
        <SectionLabel>Radio Buttons — Small (20px)</SectionLabel>
        <div className="flex gap-6 items-center">
          {radioLabels.map((label, i) => (
            <button key={label} onClick={() => setRadioSmall(i)} className="flex flex-col gap-1 items-center cursor-pointer">
              <Radio state={radioSmall === i ? "selected" : "empty"} size="small" />
              <span className="text-[10px] font-mono" style={{ color: cssVars["color/neutral/700"] }}>{label}</span>
            </button>
          ))}
          <div className="flex flex-col gap-1 items-center">
            <Radio state="disabled" size="small" />
            <span className="text-[10px] font-mono" style={{ color: cssVars["color/neutral/700"] }}>Disabled</span>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <SectionLabel>Radio Buttons — Large (24px)</SectionLabel>
        <div className="flex gap-6 items-center">
          {radioLabels.map((label, i) => (
            <button key={label} onClick={() => setRadioLarge(i)} className="flex flex-col gap-1 items-center cursor-pointer">
              <Radio state={radioLarge === i ? "selected" : "empty"} size="large" />
              <span className="text-[10px] font-mono" style={{ color: cssVars["color/neutral/700"] }}>{label}</span>
            </button>
          ))}
          <div className="flex flex-col gap-1 items-center">
            <Radio state="disabled" size="large" />
            <span className="text-[10px] font-mono" style={{ color: cssVars["color/neutral/700"] }}>Disabled</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5 mt-3">
          <TokenPill token="color/primary/300" />
          <TokenPill token="color/neutral/700" />
        </div>
      </div>

      {/* Checkboxes */}
      <div className="mb-10">
        <SectionLabel>Checkbox — Box Only</SectionLabel>
        <div className="flex gap-6 items-center">
          {(["empty", "selected", "inactive", "read-only"] as const).map((_, i) => (
            <button key={i} onClick={() => toggleCheck(i)} className="flex flex-col gap-1 items-center cursor-pointer">
              <Checkbox state={checkStates[i]} />
              <span className="text-[10px] font-mono" style={{ color: cssVars["color/neutral/700"] }}>{checkStates[i]}</span>
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-1.5 mt-3">
          <TokenPill token="color/primary/300" />
          <TokenPill token="color/neutral/700" />
          <TokenPill token="color/neutral/200" />
        </div>
      </div>

      <div className="mb-10">
        <SectionLabel>Checkbox — With Label</SectionLabel>
        <div className="flex flex-col gap-4 items-start">
          <button onClick={() => setCheckLabeled(!checkLabeled)} className="cursor-pointer text-left">
            <Checkbox
              state={checkLabeled ? "selected" : "empty"}
              headline="To help reduce waste, we encourage reusing pumps and droppers for your bottles."
              label="Check this box to send my subscription orders with pumps and droppers"
            />
          </button>
        </div>
      </div>

      {/* Toggles */}
      <div className="mb-10">
        <SectionLabel>Toggle — Basic</SectionLabel>
        <div className="flex gap-6 items-center">
          <div className="flex flex-col gap-1 items-center">
            <Toggle on={toggleOn} onChange={setToggleOn} />
            <span className="text-[10px] font-mono" style={{ color: cssVars["color/neutral/700"] }}>{toggleOn ? "On" : "Off"}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5 mt-3">
          <TokenPill token="color/primary/300" />
          <TokenPill token="color/neutral/600" />
        </div>
      </div>

      <div className="mb-10">
        <SectionLabel>Toggle — With Labels</SectionLabel>
        <div className="flex gap-6 items-center">
          <Toggle on={toggleLabelOn} onChange={setToggleLabelOn} showLabels />
        </div>
      </div>

      <div className="mb-10">
        <SectionLabel>Toggle — With Label + Headline</SectionLabel>
        <div className="flex flex-col gap-4 items-start">
          <Toggle
            on={toggleLabelOn}
            onChange={setToggleLabelOn}
            headline="To help reduce waste, we encourage reusing pumps and droppers for your bottles."
            label="Check this box to send my subscription orders with pumps and droppers"
          />
        </div>
      </div>

      {/* Spec notes */}
      <div className="mt-8 p-6 rounded-xl" style={{ background: cssVars["color/neutral/300"] }}>
        <SectionLabel>Specs</SectionLabel>
        <div className="flex flex-col gap-1">
          <p className="text-[13px]" style={{ color: cssVars["color/primary/400"] }}>
            Radio: small 20px, large 24px. Border/fill: primary/300. Disabled border: neutral/700.
          </p>
          <p className="text-[13px]" style={{ color: cssVars["color/primary/400"] }}>
            Checkbox: 28×28px, shadow 2px 2px 3px #eaeaea. Selected fill: primary/300, white check.
          </p>
          <p className="text-[13px]" style={{ color: cssVars["color/primary/400"] }}>
            Toggle: 55×24px track, 18px thumb. Off: neutral/600. On: primary/300.
          </p>
          <p className="text-[13px]" style={{ color: cssVars["color/primary/400"] }}>
            Labels: body/4 regular (14px), text neutral/900 or primary/400.
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Sidebar ──────────────────────────────────────────────────────────────────

function SidebarSection({
  title,
  items,
  active,
  onNav,
}: NavSection & { active: Page; onNav: (p: Page) => void }) {
  const hasActiveChild = items.some(({ id }) => id === active);
  const [isOpen, setIsOpen] = useState(hasActiveChild || true);

  return (
    <div className="flex flex-col">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between px-3 py-2 cursor-pointer"
      >
        <span
          className="text-[11px] font-mono uppercase tracking-[1.5px] font-medium"
          style={{ color: cssVars["color/neutral/700"] }}
        >
          {title}
        </span>
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          className="transition-transform duration-150"
          style={{ transform: isOpen ? "rotate(0deg)" : "rotate(-90deg)" }}
        >
          <path d="M1 1L5 5L9 1" stroke={colors.neutral[700]} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {isOpen && (
        <ul className="flex flex-col gap-0.5 pb-3">
          {items.map(({ id, label }) => {
            const isActive = active === id;
            return (
              <li key={id}>
                <button
                  onClick={() => onNav(id)}
                  className="w-full text-left px-3 py-1.5 rounded-lg text-[13px] font-medium transition-colors duration-100 cursor-pointer"
                  style={
                    isActive
                      ? { background: cssVars["color/primary/400"], color: cssVars["color/neutral/100"] }
                      : { color: cssVars["color/neutral/800"] }
                  }
                >
                  {label}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

function Sidebar({ active, onNav }: { active: Page; onNav: (p: Page) => void }) {
  return (
    <nav
      className="fixed top-0 left-0 h-screen w-[220px] flex flex-col px-4 py-8 border-r overflow-y-auto"
      style={{
        background: cssVars["color/neutral/100"],
        borderColor: cssVars["color/neutral/600"],
      }}
    >
      {/* Brand */}
      <div className="mb-6 px-3">
        <Logo variant="dark" height={20} />
        <p
          className="text-[11px] font-mono uppercase tracking-[2px] mt-1.5"
          style={{ color: cssVars["color/neutral/700"] }}
        >
          Design System
        </p>
      </div>

      {/* Sections */}
      <div className="flex flex-col gap-1">
        {navSections.map((section) => (
          <SidebarSection
            key={section.title}
            {...section}
            active={active}
            onNav={onNav}
          />
        ))}
      </div>
    </nav>
  );
}

// ─── Toasts ──────────────────────────────────────────────────────────────────

const toastTypes: ToastType[] = ["removal", "added", "paused", "error"];

const toastMessages: Record<ToastType, string> = {
  removal: "Removed: Maggie's Shampoo",
  added: "Added: Maggie's Shampoo",
  paused: "Subscription paused 2 weeks",
  error: "Change payment method",
};

function ToastsPage() {
  const [demoType, setDemoType] = useState<ToastType>("removal");
  const [demoImage, setDemoImage] = useState(false);
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <PageHeader
        title="Toasts"
        subtitle="Notification banners for confirmations, errors, and status changes."
      />

      {/* Interactive demo */}
      <div className="mb-10">
        <SectionLabel>Interactive Demo</SectionLabel>
        <div className="flex gap-3 mb-4 flex-wrap items-center">
          {toastTypes.map((t) => (
            <button
              key={t}
              onClick={() => setDemoType(t)}
              className="px-3 py-1 rounded-[60px] text-xs font-label uppercase tracking-[0.96px] cursor-pointer transition-colors"
              style={{
                background: demoType === t ? cssVars["color/primary/300"] : cssVars["color/neutral/100"],
                color: demoType === t ? cssVars["color/neutral/100"] : cssVars["color/primary/400"],
                border: `1px solid ${cssVars["color/neutral/400"]}`,
              }}
            >
              {t}
            </button>
          ))}
          <button
            onClick={() => setDemoImage(!demoImage)}
            className="px-3 py-1 rounded-[60px] text-xs font-label uppercase tracking-[0.96px] cursor-pointer transition-colors"
            style={{
              background: demoImage ? cssVars["color/primary/300"] : cssVars["color/neutral/100"],
              color: demoImage ? cssVars["color/neutral/100"] : cssVars["color/primary/400"],
              border: `1px solid ${cssVars["color/neutral/400"]}`,
            }}
          >
            Image
          </button>
          <button
            onClick={() => { setVisible(true); setTimeout(() => setVisible(false), 3000); }}
            className="px-3 py-1 rounded-[60px] text-xs font-label uppercase tracking-[0.96px] cursor-pointer bg-(--color-accent-200) text-(--color-primary-400)"
          >
            Show Toast
          </button>
        </div>
        {visible && (
          <div className="mb-4 transition-opacity">
            <Toast type={demoType} message={toastMessages[demoType]} image={demoImage ? sampleImage : undefined} breakpoint="desktop" />
          </div>
        )}
      </div>

      {/* Mobile */}
      <div className="mb-10">
        <SectionLabel>Mobile — Without Image</SectionLabel>
        <div className="flex flex-col gap-4">
          {toastTypes.map((t) => (
            <Toast key={t} type={t} message={toastMessages[t]} breakpoint="mobile" />
          ))}
        </div>
      </div>

      <div className="mb-10">
        <SectionLabel>Mobile — With Image</SectionLabel>
        <div className="flex flex-col gap-4">
          {toastTypes.map((t) => (
            <Toast key={t} type={t} message={toastMessages[t]} image={sampleImage} breakpoint="mobile" />
          ))}
        </div>
      </div>

      {/* Desktop */}
      <div className="mb-10">
        <SectionLabel>Desktop — Without Image</SectionLabel>
        <div className="flex flex-col gap-4">
          {toastTypes.map((t) => (
            <Toast key={t} type={t} message={toastMessages[t]} breakpoint="desktop" />
          ))}
        </div>
      </div>

      <div className="mb-10">
        <SectionLabel>Desktop — With Image</SectionLabel>
        <div className="flex flex-col gap-4">
          {toastTypes.map((t) => (
            <Toast key={t} type={t} message={toastMessages[t]} image={sampleImage} breakpoint="desktop" />
          ))}
        </div>
      </div>

      {/* Spec notes */}
      <div className="mt-8 p-6 rounded-xl" style={{ background: cssVars["color/neutral/300"] }}>
        <SectionLabel>Specs</SectionLabel>
        <div className="flex flex-col gap-1">
          <p className="text-[13px]" style={{ color: cssVars["color/primary/400"] }}>
            Height: 60px. Mobile: 343px, px-16. Desktop: 600px, px-16.
          </p>
          <p className="text-[13px]" style={{ color: cssVars["color/primary/400"] }}>
            BG: primary/300 (removal, added, paused), error/200 (error). Radius: 12px.
          </p>
          <p className="text-[13px]" style={{ color: cssVars["color/primary/400"] }}>
            Shadow: 0px 8px 24px rgba(0,0,0,0.18). Text: body/4 medium, neutral/100.
          </p>
          <p className="text-[13px]" style={{ color: cssVars["color/primary/400"] }}>
            Icon: 24px circle, bg white 15% opacity. Product image: 32×40px, rounded-[6px].
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Tags ────────────────────────────────────────────────────────────────────

const tagExamples = [
  "15% off",
  "50% off first order",
  "Free skincare starter set",
  "50% off",
  "$65 value",
  "NEW",
  "Get $20",
  "60% off",
];

// ─── Page: Icons ──────────────────────────────────────────────────────────────

import iconManifest from "../icon-manifest.json";

type IconEntry = { category: string; name: string; size: string; file: string; path: string };

const allIcons: IconEntry[] = iconManifest as IconEntry[];

const iconCategories = ["Brand", "Hair", "Skin", "Subscription", "Nav"] as const;

function IconsPage() {
  return (
    <div>
      <PageHeader
        title="Icons"
        subtitle="All icons from the design system, grouped by category. Sizes: XL, Large, Small."
      />

      {iconCategories.map((cat) => {
        const icons = allIcons.filter((i) => i.category === cat && !(cat === "Nav" && i.name === "Cart") && !i.name.startsWith("Slice"));
        if (icons.length === 0) return null;

        // Group by name, then show sizes side by side
        const byName: Record<string, IconEntry[]> = {};
        for (const icon of icons) {
          const key = icon.name;
          if (!byName[key]) byName[key] = [];
          byName[key].push(icon);
        }

        return (
          <div key={cat} className="mb-12">
            <SectionLabel>{cat}</SectionLabel>
            <div className="flex flex-wrap gap-6">
              {Object.entries(byName).map(([name, variants]) => (
                <div
                  key={name}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl"
                  style={{ background: cssVars["color/neutral/100"], minWidth: 100 }}
                >
                  <div className="flex items-end gap-3">
                    {variants
                      .sort((a, b) => {
                        const order: Record<string, number> = { XL: 0, Large: 1, Small: 2, "": 3 };
                        return (order[a.size] ?? 9) - (order[b.size] ?? 9);
                      })
                      .map((v) => {
                        const src = `${import.meta.env.BASE_URL}${encodeURI(v.path)}`;
                        return (
                          <div key={v.path} className="flex flex-col items-center gap-1">
                            <img
                              src={src}
                              alt={v.name}
                              className={
                                v.size === "XL" ? "w-[48px] h-[48px]" :
                                v.size === "Large" ? "w-[32px] h-[32px]" :
                                "w-[20px] h-[20px]"
                              }
                              style={{ objectFit: "contain" }}
                            />
                            {variants.length > 1 && (
                              <span className="text-[8px] font-mono" style={{ color: cssVars["color/neutral/700"] }}>
                                {v.size || "—"}
                              </span>
                            )}
                          </div>
                        );
                      })}
                  </div>
                  <span
                    className="text-[10px] font-mono text-center max-w-[120px]"
                    style={{ color: cssVars["color/neutral/800"] }}
                  >
                    {name}
                  </span>
                </div>
              ))}

              {/* Nav: replace file-based Cart with inline Cart + Cart with badge side by side */}
              {cat === "Nav" && (() => {
                const cartSvg = <svg width="25" height="22" viewBox="0 0 25 22" fill="none"><path d="M15.0778 22H1.11111L0 6.26666H16.1889L15.0778 22Z" fill="currentColor"/><path d="M8.10018 0C5.43351 0 3.26685 2.16667 3.26685 4.82222V5.26667H5.3224V4.82222C5.3224 3.28889 6.56685 2.05556 8.08907 2.05556C9.61129 2.05556 10.8557 3.3 10.8557 4.82222V5.26667H12.9113V4.82222C12.9224 2.16667 10.7557 0 8.10018 0Z" fill="currentColor"/></svg>;
                return (
                  <div className="flex flex-col items-center gap-2 p-4 rounded-xl" style={{ background: cssVars["color/neutral/100"], minWidth: 100 }}>
                    <div className="flex items-end gap-4 text-(--color-primary-400)">
                      <div className="flex flex-col items-center gap-1">
                        {cartSvg}
                        <span className="text-[8px] font-mono" style={{ color: cssVars["color/neutral/700"] }}>default</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <div className="relative">
                          {cartSvg}
                          <div className="absolute -top-[2px] -right-[2px] size-[16px] rounded-full bg-(--color-accent-200)" />
                        </div>
                        <span className="text-[8px] font-mono" style={{ color: cssVars["color/neutral/700"] }}>items added</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-center" style={{ color: cssVars["color/neutral/800"] }}>Cart</span>
                  </div>
                );
              })()}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─── Page: Navigation ─────────────────────────────────────────────────────────

function NavigationPage() {
  const navStates: NavigationState[] = ["default", "items-added", "consultation", "checkout"];
  const bannerStates: SitewideBannerState[] = ["no-promo", "subscribe", "promo"];

  return (
    <div>
      <PageHeader
        title="Navigation"
        subtitle="Site header with sitewide banner + nav bar. Desktop and mobile sizes with multiple states."
      />

      {/* Sitewide Banner standalone */}
      <SectionLabel>Sitewide Banner (standalone)</SectionLabel>
      <div className="flex flex-col gap-4 mb-12">
        {bannerStates.map((bs) => (
          <div key={bs} className="flex flex-col gap-1">
            <p className="text-[10px] uppercase tracking-widest font-medium" style={{ color: cssVars["color/neutral/700"] }}>
              {bs}
            </p>
            <SitewideBanner state={bs} />
          </div>
        ))}
      </div>

      {/* Desktop navigation */}
      <SectionLabel>Desktop</SectionLabel>
      <div className="flex flex-col gap-8 mb-12">
        {navStates.map((ns) => (
          <div key={`desktop-${ns}`} className="flex flex-col gap-1">
            <p className="text-[10px] uppercase tracking-widest font-medium" style={{ color: cssVars["color/neutral/700"] }}>
              {ns}
            </p>
            <div className="overflow-hidden">
              <Navigation size="desktop" state={ns} />
            </div>
          </div>
        ))}
      </div>

      {/* Mobile navigation */}
      <SectionLabel>Mobile</SectionLabel>
      <div className="flex flex-col gap-8 mb-12">
        {navStates.map((ns) => (
          <div key={`mobile-${ns}`} className="flex flex-col gap-1">
            <p className="text-[10px] uppercase tracking-widest font-medium" style={{ color: cssVars["color/neutral/700"] }}>
              {ns}
            </p>
            <div className="w-[375px] overflow-hidden">
              <Navigation size="mobile" state={ns} />
            </div>
          </div>
        ))}
      </div>

      {/* Banner color variants within navigation */}
      <SectionLabel>Banner Variants (in navigation)</SectionLabel>
      <div className="flex flex-col gap-8">
        {bannerStates.map((bs) => (
          <div key={`banner-${bs}`} className="flex flex-col gap-1">
            <p className="text-[10px] uppercase tracking-widest font-medium" style={{ color: cssVars["color/neutral/700"] }}>
              {bs}
            </p>
            <div className="overflow-hidden">
              <Navigation size="desktop" state="default" bannerState={bs} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Page: Promo Modals ───────────────────────────────────────────────────────

const promoModalImage = "/my-design-system/images/pop-up modal/Image.png";

function PromoModalsPage() {
  const img = promoModalImage;
  const offers: OfferModalOffer[] = ["hc", "sss", "sk50"];
  const types: OfferModalType[] = ["standard", "email", "no-cta"];

  const offerLabels: Record<OfferModalOffer, string> = {
    hc: "HC (60% off)",
    sss: "SSS (Starter Set)",
    sk50: "SK 50%",
    "hc-no-image": "HC No Image",
  };

  const typeLabels: Record<OfferModalType, string> = {
    standard: "Standard",
    email: "Email",
    "no-cta": "No CTA",
  };

  return (
    <div>
      <PageHeader
        title="Offer Modals"
        subtitle="Promotional overlay modals with offer-specific content. 18 variants: 4 offers × 3 types × 2 sizes."
      />

      {/* ── Desktop ────────────────────────────────────────────── */}
      <SectionLabel>Desktop</SectionLabel>
      <div className="flex flex-col gap-10 mb-16">
        {offers.map((offer) => (
          <div key={`d-${offer}`}>
            <p className="text-[11px] font-mono font-medium mb-4" style={{ color: cssVars["color/neutral/800"] }}>
              {offerLabels[offer]}
            </p>
            <div className="flex flex-wrap gap-8">
              {types.map((type) => (
                <div key={`d-${offer}-${type}`} className="flex flex-col gap-1">
                  <p className="text-[9px] font-mono uppercase" style={{ color: cssVars["color/neutral/700"] }}>
                    {typeLabels[type]}
                  </p>
                  <PromoModal size="desktop" offer={offer} type={type} />
                </div>
              ))}
            </div>
          </div>
        ))}
        {/* HC No Image — Desktop only, Standard type */}
        <div>
          <p className="text-[11px] font-mono font-medium mb-4" style={{ color: cssVars["color/neutral/800"] }}>
            {offerLabels["hc-no-image"]}
          </p>
          <div className="flex flex-col gap-1">
            <p className="text-[9px] font-mono uppercase" style={{ color: cssVars["color/neutral/700"] }}>Standard</p>
            <PromoModal size="desktop" offer="hc-no-image" type="standard" />
          </div>
        </div>
      </div>

      {/* ── Mobile ─────────────────────────────────────────────── */}
      <SectionLabel>Mobile</SectionLabel>
      <div className="flex flex-col gap-10 mb-16">
        {offers.map((offer) => (
          <div key={`m-${offer}`}>
            <p className="text-[11px] font-mono font-medium mb-4" style={{ color: cssVars["color/neutral/800"] }}>
              {offerLabels[offer]}
            </p>
            <div className="flex flex-wrap gap-8">
              {types.map((type) => (
                <div key={`m-${offer}-${type}`} className="flex flex-col gap-1">
                  <p className="text-[9px] font-mono uppercase" style={{ color: cssVars["color/neutral/700"] }}>
                    {typeLabels[type]}
                  </p>
                  <PromoModal size="mobile" offer={offer} type={type} />
                </div>
              ))}
            </div>
          </div>
        ))}
        {/* HC No Image — Mobile */}
        <div>
          <p className="text-[11px] font-mono font-medium mb-4" style={{ color: cssVars["color/neutral/800"] }}>
            {offerLabels["hc-no-image"]}
          </p>
          <div className="flex flex-col gap-1">
            <p className="text-[9px] font-mono uppercase" style={{ color: cssVars["color/neutral/700"] }}>Standard</p>
            <PromoModal size="mobile" offer="hc-no-image" type="standard" />
          </div>
        </div>
      </div>
    </div>
  );
}

function TagsPage() {
  return (
    <div>
      <PageHeader
        title="Tags"
        subtitle="Offer and promo tags. Lime highlight background with uppercase mono text."
      />

      <div className="mb-10">
        <SectionLabel>Default — Label/1 (14px)</SectionLabel>
        <div className="flex flex-wrap gap-3">
          {tagExamples.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
        <div className="flex flex-wrap gap-1.5 mt-3">
          <TokenPill token="color/highlight/200" />
          <TokenPill token="color/primary/400" />
        </div>
      </div>

      <div className="mb-10">
        <SectionLabel>Small — Label/2 (12px)</SectionLabel>
        <div className="flex flex-wrap gap-3">
          {tagExamples.map((t) => (
            <Tag key={t} size="small">{t}</Tag>
          ))}
        </div>
      </div>

      {/* Spec notes */}
      <div className="mt-8 p-6 rounded-xl" style={{ background: cssVars["color/neutral/300"] }}>
        <SectionLabel>Specs</SectionLabel>
        <div className="flex flex-col gap-1">
          <p className="text-[13px]" style={{ color: cssVars["color/primary/400"] }}>
            BG: highlight/200. Text: primary/400, Simplon Mono Medium, uppercase.
          </p>
          <p className="text-[13px]" style={{ color: cssVars["color/primary/400"] }}>
            Default (label/1): 14px, tracking 1.12px. Small (label/2): 12px, tracking 0.96px.
          </p>
          <p className="text-[13px]" style={{ color: cssVars["color/primary/400"] }}>
            Padding: 8px. Border radius: 4px.
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Carousels ───────────────────────────────────────────────────────────────

const allHaircareKeys = Object.keys(HAIRCARE_PRODUCTS) as HaircareProduct[];
const allAccessoryKeys = Object.keys(ACCESSORY_PRODUCTS) as AccessoryProduct[];
const allSkincareKeys = Object.keys(SKINCARE_PRODUCTS) as SkincareProduct[];
const allIngredientKeys = Object.keys(INGREDIENTS) as IngredientKey[];

const sampleCarouselItems: ProductCardItem[] = allHaircareKeys.map((key) => ({
  image: HAIRCARE_PRODUCTS[key].image,
  name: HAIRCARE_PRODUCTS[key].name,
  price: HAIRCARE_PRODUCTS[key].priceUS,
}));

// ─── Page: Product Cards ──────────────────────────────────────────────────────

function ProductCardsPage() {
  return (
    <div>
      <PageHeader
        title="Product Cards"
        subtitle="Product cards with image and overlapping name + price. Desktop (260px) and mobile (185px) sizes, US and CA pricing."
      />

      {/* Haircare — Desktop US */}
      <SectionLabel>Haircare — Desktop / US</SectionLabel>
      <div className="flex gap-4 overflow-x-auto pb-4 mb-10">
        {allHaircareKeys.map((key) => (
          <div key={key} className="flex flex-col items-center gap-2">
            <ProductCard product={key} size="desktop" country="US" />
            <span className="text-[10px] font-mono" style={{ color: cssVars["color/neutral/700"] }}>{key}</span>
          </div>
        ))}
      </div>

      {/* Haircare — Desktop CA */}
      <SectionLabel>Haircare — Desktop / CA</SectionLabel>
      <div className="flex gap-4 overflow-x-auto pb-4 mb-10">
        {allHaircareKeys.map((key) => (
          <div key={key} className="flex flex-col items-center gap-2">
            <ProductCard product={key} size="desktop" country="CA" />
            <span className="text-[10px] font-mono" style={{ color: cssVars["color/neutral/700"] }}>{key}</span>
          </div>
        ))}
      </div>

      {/* Haircare — Mobile US */}
      <SectionLabel>Haircare — Mobile / US</SectionLabel>
      <div className="flex gap-3 overflow-x-auto pb-4 mb-10">
        {allHaircareKeys.map((key) => (
          <div key={key} className="flex flex-col items-center gap-2">
            <ProductCard product={key} size="mobile" country="US" />
            <span className="text-[10px] font-mono" style={{ color: cssVars["color/neutral/700"] }}>{key}</span>
          </div>
        ))}
      </div>

      {/* Haircare — Mobile CA */}
      <SectionLabel>Haircare — Mobile / CA</SectionLabel>
      <div className="flex gap-3 overflow-x-auto pb-4 mb-10">
        {allHaircareKeys.map((key) => (
          <div key={key} className="flex flex-col items-center gap-2">
            <ProductCard product={key} size="mobile" country="CA" />
            <span className="text-[10px] font-mono" style={{ color: cssVars["color/neutral/700"] }}>{key}</span>
          </div>
        ))}
      </div>

      {/* Skincare */}
      <SectionLabel>Skincare — Desktop / US</SectionLabel>
      <div className="flex gap-4 overflow-x-auto pb-4 mb-10">
        {allSkincareKeys.map((key) => (
          <div key={key} className="flex flex-col items-center gap-2">
            <ProductCard product={key} size="desktop" country="US" />
            <span className="text-[10px] font-mono" style={{ color: cssVars["color/neutral/700"] }}>{key}</span>
          </div>
        ))}
      </div>

      <SectionLabel>Skincare — Desktop / CA</SectionLabel>
      <div className="flex gap-4 overflow-x-auto pb-4 mb-10">
        {allSkincareKeys.map((key) => (
          <div key={key} className="flex flex-col items-center gap-2">
            <ProductCard product={key} size="desktop" country="CA" />
            <span className="text-[10px] font-mono" style={{ color: cssVars["color/neutral/700"] }}>{key}</span>
          </div>
        ))}
      </div>

      <SectionLabel>Skincare — Mobile / US</SectionLabel>
      <div className="flex gap-3 overflow-x-auto pb-4 mb-10">
        {allSkincareKeys.map((key) => (
          <div key={key} className="flex flex-col items-center gap-2">
            <ProductCard product={key} size="mobile" country="US" />
            <span className="text-[10px] font-mono" style={{ color: cssVars["color/neutral/700"] }}>{key}</span>
          </div>
        ))}
      </div>

      <SectionLabel>Skincare — Mobile / CA</SectionLabel>
      <div className="flex gap-3 overflow-x-auto pb-4 mb-10">
        {allSkincareKeys.map((key) => (
          <div key={key} className="flex flex-col items-center gap-2">
            <ProductCard product={key} size="mobile" country="CA" />
            <span className="text-[10px] font-mono" style={{ color: cssVars["color/neutral/700"] }}>{key}</span>
          </div>
        ))}
      </div>

      {/* Accessories */}
      <SectionLabel>Accessories — Desktop / US</SectionLabel>
      <div className="flex gap-4 overflow-x-auto pb-4 mb-10">
        {allAccessoryKeys.map((key) => (
          <div key={key} className="flex flex-col items-center gap-2">
            <ProductCard product={key} size="desktop" country="US" />
            <span className="text-[10px] font-mono" style={{ color: cssVars["color/neutral/700"] }}>{key}</span>
          </div>
        ))}
      </div>

      {/* Ingredient Cards */}
      <SectionLabel>Ingredient Cards</SectionLabel>
      <div className="flex gap-3 overflow-x-auto pb-2 mb-10" style={{ background: cssVars["color/neutral/300"], borderRadius: 12, padding: 16 }}>
        {allIngredientKeys.map((key) => (
          <div key={key} className="flex flex-col items-center gap-2">
            <IngredientCard ingredient={key} />
            <span className="text-[10px] font-mono" style={{ color: cssVars["color/neutral/700"] }}>{key}</span>
          </div>
        ))}
      </div>

      {/* Specs */}
      <div className="p-6 rounded-xl" style={{ background: cssVars["color/neutral/300"] }}>
        <SectionLabel>Specs</SectionLabel>
        <div className="flex flex-col gap-1">
          <p className="text-[13px] font-medium" style={{ color: cssVars["color/primary/400"] }}>Product Card</p>
          <p className="text-[13px]" style={{ color: cssVars["color/primary/400"] }}>Desktop: 260×453px image, radius-10, text at top 362px. Mobile: 185×332px image, radius-8, text at top 253px.</p>
          <p className="text-[13px]" style={{ color: cssVars["color/primary/400"] }}>Name: body/3 medium (16px), primary/400. Price: body/3 regular (16px), primary/400.</p>
          <p className="text-[13px]" style={{ color: cssVars["color/primary/400"] }}>Country: US ($ prices) or CA (CA $ prices).</p>
          <p className="text-[13px] font-medium mt-2" style={{ color: cssVars["color/primary/400"] }}>Ingredient Card</p>
          <p className="text-[13px]" style={{ color: cssVars["color/primary/400"] }}>Card: 204×207px, white, radius 15px. Image: ~148×148px, overlaps top. Name: body/3 regular, neutral/800.</p>
        </div>
      </div>
    </div>
  );
}

// ─── Page: Routine Cards ─────────────────────────────────────────────────────

// Sample ingredient images for demo (reuse existing ingredient images)
import imgIngBamboo from "../../images/ingredients/Acai 1-3.png";
import imgIngPinkClay from "../../images/ingredients/Acai 1-4.png";
import imgIngAniseMyrtle from "../../images/ingredients/Acai 1-5.png";

const sampleIngredients = [
  { image: imgIngBamboo, name: "Bamboo Charcoal", description: "Gently cleanses and detoxifies the scalp to help manage your sensitivity." },
  { image: imgIngPinkClay, name: "Pink Clay" },
  { image: imgIngAniseMyrtle, name: "Anise Myrtle Extract" },
];

function RoutineCardsPage() {
  return (
    <div>
      <PageHeader
        title="Routine Cards"
        subtitle="Product routine cards showing product details, optional key ingredients, preferences, and frequency/price selector. Three variants: one-time purchase, subscription (collapsed), and subscription expanded."
      />

      <SectionLabel>All Variants</SectionLabel>
      <div className="flex gap-6 overflow-x-auto pb-4 mb-10">
        {/* One-time purchase */}
        <div className="flex flex-col items-center gap-2 shrink-0">
          <RoutineCard
            type="one-time"
            productImage="/my-design-system/images/products/Accessories/Prose-Hair-Towel-BG.png"
            productName="Maggie's Hair Towel"
            productDescription={'Fast-drying hair towel for reducing unwanted frizz and preserving hair\u2019s natural texture. Made from 100% recycled microfiber derived from plastic bottles.\n\nDesigned for all textures and lengths.'}
            productSize='23" x 37" in'
            price="$34.00"
          />
          <span className="text-[10px] font-mono" style={{ color: cssVars["color/neutral/700"] }}>one-time</span>
        </div>

        {/* Subscription (collapsed) */}
        <div className="flex flex-col items-center gap-2 shrink-0">
          <RoutineCard
            type="subscription"
            productImage="/my-design-system/images/products/Hair/Prose-custom-shampoo.png"
            productName="Maggie's Shampoo"
            productDescription="A gentle, sulfate-free cleanser that maintains the natural balance of your scalp, without color washout."
            productSize="8.5 fl oz 250mL"
            ingredients={sampleIngredients}
            preferences="Fragrance free."
            price="$14.00"
            originalPrice="$35.00"
          />
          <span className="text-[10px] font-mono" style={{ color: cssVars["color/neutral/700"] }}>subscription</span>
        </div>

        {/* Subscription (expanded) */}
        <div className="flex flex-col items-center gap-2 shrink-0">
          <RoutineCard
            type="subscription-expanded"
            productImage="/my-design-system/images/products/Hair/Prose-custom-shampoo.png"
            productName="Maggie's Shampoo"
            productDescription="A gentle, sulfate-free cleanser that maintains the natural balance of your scalp, without color washout."
            productSize="8.5 fl oz 250mL"
            ingredients={sampleIngredients}
            preferences="Fragrance free."
            price="$14.00"
            originalPrice="$35.00"
          />
          <span className="text-[10px] font-mono" style={{ color: cssVars["color/neutral/700"] }}>subscription-expanded</span>
        </div>
      </div>

      {/* Specs */}
      <div className="p-6 rounded-xl" style={{ background: cssVars["color/neutral/300"] }}>
        <SectionLabel>Specs</SectionLabel>
        <div className="flex flex-col gap-1">
          <p className="text-[13px] font-medium" style={{ color: cssVars["color/primary/400"] }}>Routine Card</p>
          <p className="text-[13px]" style={{ color: cssVars["color/primary/400"] }}>Card: 327px wide, bg neutral/100, radius-10, pb-24, gap-24 between sections.</p>
          <p className="text-[13px]" style={{ color: cssVars["color/primary/400"] }}>Image: 220px tall, full-width, object-cover. Close button 32px top-right.</p>
          <p className="text-[13px]" style={{ color: cssVars["color/primary/400"] }}>Name: H3 (Saol Text 32px, weight 300, -0.96px tracking). Description: body/5 regular (12px).</p>
          <p className="text-[13px]" style={{ color: cssVars["color/primary/400"] }}>Ingredients: label/2 medium section heading, 32x40px images, body/5 medium names, border-b neutral/600.</p>
          <p className="text-[13px]" style={{ color: cssVars["color/primary/400"] }}>Frequency selector: border neutral/400, radius-10, "Added to cart" floating label. Subscription: highlight/200 price bg, strikethrough original.</p>
        </div>
      </div>
    </div>
  );
}

// ─── Page: Carousels ──────────────────────────────────────────────────────────

function CarouselsPage() {
  return (
    <div>
      <PageHeader
        title="Carousels"
        subtitle="Horizontally scrollable card rows with a section title."
      />

      <div className="mb-10">
        <SectionLabel>Product Card Carousel</SectionLabel>
        <div className="rounded-xl overflow-hidden" style={{ background: cssVars["color/neutral/200"], maxWidth: 420 }}>
          <div className="py-6">
            <ProductCardCarousel title="Custom Haircare" items={sampleCarouselItems} />
          </div>
        </div>
      </div>

      <div className="mb-10">
        <SectionLabel>Ingredient Card Carousel</SectionLabel>
        <div className="rounded-xl overflow-hidden" style={{ background: cssVars["color/neutral/300"], maxWidth: 420 }}>
          <div className="py-6">
            <IngredientCardCarousel title="Your Ingredients" items={allIngredientKeys.map((key) => INGREDIENTS[key])} />
          </div>
        </div>
      </div>

      {/* Spec notes */}
      <div className="mt-8 p-6 rounded-xl" style={{ background: cssVars["color/neutral/300"] }}>
        <SectionLabel>Specs</SectionLabel>
        <div className="flex flex-col gap-1">
          <p className="text-[13px]" style={{ color: cssVars["color/primary/400"] }}>
            Title: Saol Text Regular 28px, tracking 0.5px, leading 36px. Gap 23px title→cards, 12px between cards, px-16.
          </p>
          <p className="text-[13px]" style={{ color: cssVars["color/primary/400"] }}>
            Ingredient carousel gap: 11px between cards. Hidden scrollbar.
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Tips ────────────────────────────────────────────────────────────────────

function TipsPage() {
  const [isMobileTipOpen, setIsMobileTipOpen] = useState(false);
  const [isDesktopTipOpen, setIsDesktopTipOpen] = useState(false);

  return (
    <div>
      <PageHeader
        title="Tips"
        subtitle="Bottom-sheet tooltip panels triggered by a link. Used in consultation flows to explain why a question is asked."
      />

      <div className="mb-10">
        <SectionLabel>Trigger</SectionLabel>
        <div className="flex flex-col gap-4">
          <TipTrigger label="More of a visual learner? Tap for pics (Mobile)" onClick={() => setIsMobileTipOpen(true)} />
          <TipTrigger label="Why we ask (Desktop)" onClick={() => setIsDesktopTipOpen(true)} />
        </div>
        <div className="flex flex-wrap gap-1.5 mt-3">
          <TokenPill token="color/tertiary/300" />
          <TokenPill token="color/neutral/800" />
        </div>
      </div>

      <div className="mb-10">
        <SectionLabel>Mobile Panel (375px)</SectionLabel>
        <div className="rounded-xl overflow-hidden" style={{ maxWidth: 375 }}>
          <div
            style={{
              backgroundColor: "var(--color-tertiary-200)",
              borderTopLeftRadius: "var(--radius-radius-20)",
              borderTopRightRadius: "var(--radius-radius-20)",
              padding: "12px 24px 24px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 16,
            }}
          >
            <div style={{ width: 42, height: 5, borderRadius: 5, backgroundColor: "var(--color-tertiary-300)" }} />
            <div style={{ display: "flex", flexDirection: "column", gap: 24, width: "100%", textAlign: "center" }}>
              <p style={{ fontFamily: "var(--font-family-label)", fontSize: 13, letterSpacing: "1px", textTransform: "uppercase", color: "var(--color-neutral-900)", margin: 0 }}>WHY WE ASK:</p>
              <div style={{ fontFamily: "var(--font-family-body)", fontSize: 14, lineHeight: "22px", letterSpacing: "0.5px", color: "var(--color-neutral-900)" }}>
                <p style={{ margin: "0 0 22px" }}>Over the course of a lifetime, hair goes through changes in texture, density, and strength. We'll use this info to give you extra support at any stage.</p>
                <p style={{ margin: 0 }}>*Please note our haircare products are not intended for use by individuals under the age of 18. These products have not been specifically formulated or tested for this age group.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <SectionLabel>Desktop Panel (500px)</SectionLabel>
        <div className="rounded-xl overflow-hidden" style={{ maxWidth: 500 }}>
          <div
            style={{
              backgroundColor: "var(--color-tertiary-200)",
              borderTopLeftRadius: "var(--radius-radius-20)",
              borderTopRightRadius: "var(--radius-radius-20)",
              padding: "18px 24px 48px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 32,
            }}
          >
            <div style={{ width: 42, height: 5, borderRadius: 5, backgroundColor: "var(--color-tertiary-300)" }} />
            <div style={{ display: "flex", flexDirection: "column", gap: 24, width: "100%", textAlign: "center" }}>
              <p style={{ fontFamily: "var(--font-family-label)", fontSize: 14, letterSpacing: "1.12px", textTransform: "uppercase", color: "var(--color-neutral-900)", margin: 0 }}>WHY WE ASK:</p>
              <div style={{ fontFamily: "var(--font-family-body)", fontSize: 16, lineHeight: 1.5, letterSpacing: "0.32px", color: "var(--color-neutral-900)" }}>
                <p style={{ margin: "0 0 24px" }}>Over the course of a lifetime, hair goes through changes in texture, density, and strength. We'll use this info to give you extra support at any stage.</p>
                <p style={{ margin: 0 }}>*Please note our haircare products are not intended for use by individuals under the age of 18. These products have not been specifically formulated or tested for this age group.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Live demo tips */}
      <Tip isOpen={isMobileTipOpen} onClose={() => setIsMobileTipOpen(false)} size="mobile">
        <p style={{ margin: "0 0 22px" }}>Over the course of a lifetime, hair goes through changes in texture, density, and strength. We'll use this info to give you extra support at any stage.</p>
        <p style={{ margin: 0 }}>*Please note our haircare products are not intended for use by individuals under the age of 18.</p>
      </Tip>
      <Tip isOpen={isDesktopTipOpen} onClose={() => setIsDesktopTipOpen(false)} size="desktop">
        <p style={{ margin: "0 0 24px" }}>Over the course of a lifetime, hair goes through changes in texture, density, and strength. We'll use this info to give you extra support at any stage.</p>
        <p style={{ margin: 0 }}>*Please note our haircare products are not intended for use by individuals under the age of 18.</p>
      </Tip>

      {/* Spec notes */}
      <div className="mt-8 p-6 rounded-xl" style={{ background: cssVars["color/neutral/300"] }}>
        <SectionLabel>Specs</SectionLabel>
        <div className="flex flex-col gap-1">
          <p className="text-[13px] font-medium" style={{ color: cssVars["color/primary/400"] }}>
            Panel
          </p>
          <p className="text-[13px]" style={{ color: cssVars["color/primary/400"] }}>
            BG: tertiary/200. Rounded top: radius-20. Drag handle: 42×5px, tertiary/300, rounded 5px.
          </p>
          <p className="text-[13px]" style={{ color: cssVars["color/primary/400"] }}>
            Mobile: 375px, px-24, pt-12, pb-24, gap 16px. Title: Simplon Mono 13px, tracking 1px. Body: 14px, leading 22px.
          </p>
          <p className="text-[13px]" style={{ color: cssVars["color/primary/400"] }}>
            Desktop: 500px, px-24, pt-18, pb-48, gap 32px. Title: label/1 (14px, tracking 1.12px). Body: body/3 (16px, leading 1.5).
          </p>
          <p className="text-[13px] font-medium mt-2" style={{ color: cssVars["color/primary/400"] }}>
            Trigger
          </p>
          <p className="text-[13px]" style={{ color: cssVars["color/primary/400"] }}>
            "+" icon: 20×20px circle, 1.5px border tertiary/300, text tertiary/300. Label: underlined, neutral/800.
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Progress Bars ───────────────────────────────────────────────────────────

const progressBarFlows = [
  { label: "Hair — R&R Flow", steps: HAIR_RR_STEPS },
  { label: "Skin — R&R Flow", steps: SKIN_RR_STEPS },
  { label: "Hair — Consultation Flow", steps: HAIR_CONSULTATION_STEPS },
  { label: "Skin — Consultation Flow", steps: SKIN_CONSULTATION_STEPS },
];

function ProgressBarsPage() {
  return (
    <div>
      <PageHeader
        title="Progress Bars"
        subtitle="Horizontal step progress indicators for consultation and R&R flows. Blue fill advances per step."
      />

      {progressBarFlows.map(({ label, steps }) => (
        <div key={label} className="mb-12">
          <SectionLabel>{label} — Desktop</SectionLabel>
          <div className="flex flex-col gap-4 overflow-x-auto pb-2">
            {steps.map((_, i) => (
              <ProgressBar key={i} steps={steps} activeStep={i} size="desktop" />
            ))}
          </div>

          <SectionLabel>{label} — Mobile</SectionLabel>
          <div className="flex flex-col gap-4">
            {steps.map((_, i) => (
              <ProgressBar key={i} steps={steps} activeStep={i} size="mobile" />
            ))}
          </div>
        </div>
      ))}

      {/* Spec notes */}
      <div className="mt-8 p-6 rounded-xl" style={{ background: cssVars["color/neutral/300"] }}>
        <SectionLabel>Specs</SectionLabel>
        <div className="flex flex-col gap-1">
          <p className="text-[13px]" style={{ color: cssVars["color/primary/400"] }}>
            Track: neutral/600 (#eaeaea). Fill: secondary/200 (#a2c6d1).
          </p>
          <p className="text-[13px]" style={{ color: cssVars["color/primary/400"] }}>
            Desktop: 1440×29px. Mobile: 375×29px.
          </p>
          <p className="text-[13px]" style={{ color: cssVars["color/primary/400"] }}>
            Font: Simplon Mono Regular, 10px, tracking 0.8px, uppercase, centered.
          </p>
          <p className="text-[13px]" style={{ color: cssVars["color/primary/400"] }}>
            Text: active = neutral/900, completed = neutral/800, upcoming = neutral/700.
          </p>
          <p className="text-[13px]" style={{ color: cssVars["color/primary/400"] }}>
            Fill width: (activeStep + 0.5) / totalSteps × 100%. Dividers: 1px at each step boundary.
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Offer Badges ────────────────────────────────────────────────────────────

const offerTypes: OfferBadgeOffer[] = ["50-off", "sss", "raf"];
const offerLabels: Record<OfferBadgeOffer, string> = {
  "50-off": "50% Off",
  sss: "Free Skincare Starter Set",
  raf: "Refer-a-Friend",
};

function OfferBadgesPage() {
  return (
    <div>
      <PageHeader
        title="Offer Badges"
        subtitle="Circular promotional badges for offer callouts. Two colors, two sizes, three offer types."
      />

      <div className="mb-10">
        <SectionLabel>Desktop — 136px</SectionLabel>
        <div className="flex flex-wrap gap-6">
          {(["yellow", "green"] as OfferBadgeColor[]).map((color) =>
            offerTypes.map((offer) => (
              <div key={`${color}-${offer}`} className="flex flex-col items-center gap-2">
                <OfferBadge offer={offer} color={color} size="desktop" />
                <span className="text-[11px]" style={{ color: cssVars["color/primary/300"] }}>
                  {color} · {offerLabels[offer]}
                </span>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="mb-10">
        <SectionLabel>Mobile — 88px</SectionLabel>
        <div className="flex flex-wrap gap-6">
          {(["yellow", "green"] as OfferBadgeColor[]).map((color) =>
            offerTypes.map((offer) => (
              <div key={`${color}-${offer}`} className="flex flex-col items-center gap-2">
                <OfferBadge offer={offer} color={color} size="mobile" />
                <span className="text-[11px]" style={{ color: cssVars["color/primary/300"] }}>
                  {color} · {offerLabels[offer]}
                </span>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Spec notes */}
      <div className="mt-8 p-6 rounded-xl" style={{ background: cssVars["color/neutral/300"] }}>
        <SectionLabel>Specs</SectionLabel>
        <div className="flex flex-col gap-1">
          <p className="text-[13px]" style={{ color: cssVars["color/primary/400"] }}>
            Yellow: BG highlight/200, text neutral/900. Green: BG primary/400, text highlight/200.
          </p>
          <p className="text-[13px]" style={{ color: cssVars["color/primary/400"] }}>
            Desktop: 136×136px. Mobile: 88×88px. Shape: circle (border-radius 50%).
          </p>
          <p className="text-[13px]" style={{ color: cssVars["color/primary/400"] }}>
            Font: Simplon Mono. Primary text: Medium weight, 32px (desktop) / 20px (mobile).
          </p>
          <p className="text-[13px]" style={{ color: cssVars["color/primary/400"] }}>
            SSS secondary text: Light weight, 16px (desktop) / 10px (mobile). Tracking: 1px. Uppercase.
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Layout ───────────────────────────────────────────────────────────────────

export default function ComponentLibrary() {
  const [page, setPage] = useState<Page>("colors");

  return (
    <div className="flex min-h-screen" style={{ background: "#E5E5E5" }}>
      <Sidebar active={page} onNav={setPage} />

      <main className="ml-[220px] flex-1 px-12 py-10 min-h-screen">
        {page === "logo"       && <LogoPage />}
        {page === "colors"     && <ColorsPage />}
        {page === "typography" && <TypographyPage />}
        {page === "spacing"    && <SpacingPage />}
        {page === "radius"     && <RadiusPage />}
        {page === "icons"      && <IconsPage />}
        {page === "navigation" && <NavigationPage />}
        {page === "promo-modals" && <PromoModalsPage />}
        {page === "buttons"    && <ButtonsPage />}
        {page === "text-links" && <TextLinksPage />}
        {page === "inputs"     && <InputsPage />}
        {page === "selectors"  && <SelectorsPage />}
        {page === "ui-controls" && <UIControlsPage />}
        {page === "accordion"   && <AccordionPage />}
        {page === "toasts"     && <ToastsPage />}
        {page === "tags"         && <TagsPage />}
        {page === "offer-badges"  && <OfferBadgesPage />}
        {page === "progress-bars" && <ProgressBarsPage />}
        {page === "product-cards"  && <ProductCardsPage />}
        {page === "routine-cards"  && <RoutineCardsPage />}
        {page === "carousels"     && <CarouselsPage />}
        {page === "tips"          && <TipsPage />}
      </main>
    </div>
  );
}
