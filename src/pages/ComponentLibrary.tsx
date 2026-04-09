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
import { colors, cssVars, tokenMap } from "../tokens";

// ─── Navigation ───────────────────────────────────────────────────────────────

type Page = "logo" | "colors" | "typography" | "spacing" | "radius" | "buttons" | "text-links" | "inputs" | "selectors" | "ui-controls" | "accordion";

const navItems: { id: Page; label: string }[] = [
  { id: "logo",        label: "Logo" },
  { id: "colors",      label: "Colors" },
  { id: "typography",  label: "Typography" },
  { id: "spacing",     label: "Spacing" },
  { id: "radius",      label: "Radius" },
  { id: "buttons",     label: "Buttons" },
  { id: "text-links",  label: "Text Links" },
  { id: "inputs",      label: "Inputs" },
  { id: "selectors",   label: "Selectors" },
  { id: "ui-controls", label: "UI Controls" },
  { id: "accordion",   label: "Accordion" },
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
  return (
    <div>
      <PageHeader
        title="Selectors"
        subtitle="Consultation selectors — text pills and image cards. Selected state uses primary/200 (light green)."
      />

      {/* Text pill — fixed width */}
      <div className="mb-10">
        <SectionLabel>Text Pill — Fixed</SectionLabel>
        <div className="flex flex-col gap-3 items-start">
          <Selector label="Once or twice a week" />
          <Selector selected label="Once or twice a week" />
        </div>
        <div className="flex flex-wrap gap-1.5 mt-3"><TokenPill token="color/neutral/100" /><TokenPill token="color/neutral/300" /><TokenPill token="color/primary/400" /><TokenPill token="color/primary/200" /></div>
      </div>

      {/* Text pill — with subcopy */}
      <div className="mb-10">
        <SectionLabel>Text Pill — With Subcopy</SectionLabel>
        <div className="flex flex-col gap-3 items-start">
          <Selector label="Once or twice a week" subcopy="Some fibers look healthy, others don't" />
          <Selector selected label="Once or twice a week" subcopy="Some fibers look healthy, others don't" />
        </div>
      </div>

      {/* Text pill — hug width */}
      <div className="mb-10">
        <SectionLabel>Text Pill — Hug</SectionLabel>
        <div className="flex flex-wrap gap-3 items-start">
          <Selector size="hug" label="Once or twice a week" />
          <Selector selected size="hug" label="Once or twice a week" />
          <Selector size="hug" label="$100" />
          <Selector selected size="hug" label="$100" />
        </div>
      </div>

      {/* Image card — mobile */}
      <div className="mb-10">
        <SectionLabel>Image Card — Mobile</SectionLabel>
        <div className="flex flex-wrap gap-4 items-start">
          <Selector image={sampleImage} size="mobile" label="Haircare" subcopy="Shampoo, conditioner, masks, stylers" />
          <Selector selected image={sampleImage} size="mobile" label="Haircare" subcopy="Shampoo, conditioner, masks, stylers" />
          <Selector image={sampleImageType} size="mobile" label="Type 1 - Straight" />
          <Selector selected image={sampleImageType} size="mobile" label="Type 1 - Straight" />
        </div>
      </div>

      {/* Image card — desktop */}
      <div className="mb-10">
        <SectionLabel>Image Card — Desktop</SectionLabel>
        <div className="flex flex-wrap gap-4 items-start">
          <Selector image={sampleImage} size="desktop" label="Haircare" subcopy="Shampoo, conditioner, masks, stylers" />
          <Selector selected image={sampleImage} size="desktop" label="Haircare" subcopy="Shampoo, conditioner, masks, stylers" />
          <Selector image={sampleImageType} size="desktop" label="Type 1 - Straight" />
          <Selector selected image={sampleImageType} size="desktop" label="Type 1 - Straight" />
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
  return (
    <div>
      <PageHeader
        title="Input Fields"
        subtitle="Text inputs, dropdowns, and button inputs — all states."
      />

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
  { question: "How Prose does custom" },
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

  return (
    <div>
      <PageHeader
        title="UI Controls"
        subtitle="Radio buttons, checkboxes, and toggles."
      />

      {/* Radio buttons */}
      <div className="mb-10">
        <SectionLabel>Radio Buttons — Small (20px)</SectionLabel>
        <div className="flex gap-6 items-center">
          <div className="flex flex-col gap-1 items-center">
            <Radio state="selected" size="small" />
            <span className="text-[10px] font-mono" style={{ color: cssVars["color/neutral/700"] }}>Selected</span>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <Radio state="empty" size="small" />
            <span className="text-[10px] font-mono" style={{ color: cssVars["color/neutral/700"] }}>Empty</span>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <Radio state="disabled" size="small" />
            <span className="text-[10px] font-mono" style={{ color: cssVars["color/neutral/700"] }}>Disabled</span>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <SectionLabel>Radio Buttons — Large (24px)</SectionLabel>
        <div className="flex gap-6 items-center">
          <div className="flex flex-col gap-1 items-center">
            <Radio state="selected" size="large" />
            <span className="text-[10px] font-mono" style={{ color: cssVars["color/neutral/700"] }}>Selected</span>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <Radio state="empty" size="large" />
            <span className="text-[10px] font-mono" style={{ color: cssVars["color/neutral/700"] }}>Empty</span>
          </div>
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
          <div className="flex flex-col gap-1 items-center">
            <Checkbox state="empty" />
            <span className="text-[10px] font-mono" style={{ color: cssVars["color/neutral/700"] }}>Empty</span>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <Checkbox state="selected" />
            <span className="text-[10px] font-mono" style={{ color: cssVars["color/neutral/700"] }}>Selected</span>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <Checkbox state="inactive" />
            <span className="text-[10px] font-mono" style={{ color: cssVars["color/neutral/700"] }}>Inactive</span>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <Checkbox state="read-only" />
            <span className="text-[10px] font-mono" style={{ color: cssVars["color/neutral/700"] }}>Read Only</span>
          </div>
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
          <Checkbox
            state="selected"
            headline="To help reduce waste, we encourage reusing pumps and droppers for your bottles."
            label="Check this box to send my subscription orders with pumps and droppers"
          />
          <Checkbox
            state="inactive"
            headline="To help reduce waste, we encourage reusing pumps and droppers for your bottles."
            label="Check this box to send my subscription orders with pumps and droppers"
          />
        </div>
      </div>

      {/* Toggles */}
      <div className="mb-10">
        <SectionLabel>Toggle — Basic</SectionLabel>
        <div className="flex gap-6 items-center">
          <div className="flex flex-col gap-1 items-center">
            <Toggle on={false} />
            <span className="text-[10px] font-mono" style={{ color: cssVars["color/neutral/700"] }}>Off</span>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <Toggle on={true} />
            <span className="text-[10px] font-mono" style={{ color: cssVars["color/neutral/700"] }}>On</span>
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
          <Toggle on={false} showLabels />
          <Toggle on={true} showLabels />
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

      <div className="mb-10">
        <SectionLabel>Interactive Demo</SectionLabel>
        <div className="flex items-center gap-4">
          <Toggle on={toggleOn} onChange={setToggleOn} />
          <span className="text-[13px]" style={{ color: cssVars["color/primary/400"] }}>
            Toggle is {toggleOn ? "ON" : "OFF"} — click to change
          </span>
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
      <div className="mb-8 px-3">
        <Logo variant="dark" height={20} />
        <p
          className="text-[11px] font-mono uppercase tracking-[2px] mt-1.5"
          style={{ color: cssVars["color/neutral/700"] }}
        >
          Design System
        </p>
      </div>

      {/* Nav items */}
      <ul className="flex flex-col gap-0.5">
        {navItems.map(({ id, label }) => {
          const isActive = active === id;
          return (
            <li key={id}>
              <button
                onClick={() => onNav(id)}
                className="w-full text-left px-3 py-2 rounded-lg text-[13px] font-medium transition-colors duration-100 cursor-pointer"
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
    </nav>
  );
}

// ─── Layout ───────────────────────────────────────────────────────────────────

export default function ComponentLibrary() {
  const [page, setPage] = useState<Page>("colors");

  return (
    <div className="flex min-h-screen" style={{ background: cssVars["color/neutral/200"] }}>
      <Sidebar active={page} onNav={setPage} />

      <main className="ml-[220px] flex-1 px-12 py-10 min-h-screen">
        {page === "logo"       && <LogoPage />}
        {page === "colors"     && <ColorsPage />}
        {page === "typography" && <TypographyPage />}
        {page === "spacing"    && <SpacingPage />}
        {page === "radius"     && <RadiusPage />}
        {page === "buttons"    && <ButtonsPage />}
        {page === "text-links" && <TextLinksPage />}
        {page === "inputs"     && <InputsPage />}
        {page === "selectors"  && <SelectorsPage />}
        {page === "ui-controls" && <UIControlsPage />}
        {page === "accordion"   && <AccordionPage />}
      </main>
    </div>
  );
}
