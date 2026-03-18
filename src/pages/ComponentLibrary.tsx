import { useState } from "react";
import {
  Button,
  type ButtonVariant,
  type ButtonSize,
  stateClasses,
  variantTokens,
} from "../components/Button/Button";
import { TypographyShowcase } from "../components/Typography/Typography";
import { colors, cssVars, tokenMap } from "../tokens";

// ─── Navigation ───────────────────────────────────────────────────────────────

type Page = "colors" | "typography" | "spacing" | "radius" | "buttons";

const navItems: { id: Page; label: string }[] = [
  { id: "colors",     label: "Colors" },
  { id: "typography", label: "Typography" },
  { id: "spacing",    label: "Spacing" },
  { id: "radius",     label: "Radius" },
  { id: "buttons",    label: "Buttons" },
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
        <p
          className="text-[11px] font-mono uppercase tracking-[2px]"
          style={{ color: cssVars["color/neutral/700"] }}
        >
          Design System
        </p>
        <p
          className="text-[13px] font-medium mt-0.5"
          style={{ color: cssVars["color/primary/400"] }}
        >
          Foundations
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
        {page === "colors"     && <ColorsPage />}
        {page === "typography" && <TypographyPage />}
        {page === "spacing"    && <SpacingPage />}
        {page === "radius"     && <RadiusPage />}
        {page === "buttons"    && <ButtonsPage />}
      </main>
    </div>
  );
}
