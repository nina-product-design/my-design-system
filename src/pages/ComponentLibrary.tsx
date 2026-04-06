import { useState } from "react";
import {
  Button,
  type ButtonVariant,
  type ButtonSize,
  stateClasses,
  variantTokens,
} from "../components/Button/Button";
import { Logo } from "../components/Logo";
import {
  InputField,
  type InputFieldType,
  type InputFieldState,
  bgClasses as inputBgClasses,
  stateTokens as inputStateTokens,
} from "../components/InputField/InputField";
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

type Page = "logo" | "colors" | "typography" | "spacing" | "radius" | "buttons" | "text-links" | "inputs";

const navItems: { id: Page; label: string }[] = [
  { id: "logo",       label: "Logo" },
  { id: "colors",     label: "Colors" },
  { id: "typography", label: "Typography" },
  { id: "spacing",    label: "Spacing" },
  { id: "radius",     label: "Radius" },
  { id: "buttons",    label: "Buttons" },
  { id: "text-links", label: "Text Links" },
  { id: "inputs",     label: "Inputs" },
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
      </main>
    </div>
  );
}
