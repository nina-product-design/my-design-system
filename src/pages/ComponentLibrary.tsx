import {
  Button,
  type ButtonVariant,
  type ButtonSize,
  stateClasses,
  variantTokens,
} from "../components/Button/Button";
import { TypographyShowcase } from "../components/Typography/Typography";
import { colors, cssVars, tokenMap } from "../tokens";

// ─── Shared types ─────────────────────────────────────────────────────────────

type ColorSwatch = { token: string; value: string; label: string };

// ─── Color data ───────────────────────────────────────────────────────────────

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
    group: "Accent",
    swatches: [
      { token: "color/accent/300", value: colors.accent[300], label: "300" },
      { token: "color/accent/200", value: colors.accent[200], label: "200" },
      { token: "color/accent/100", value: colors.accent[100], label: "100" },
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

// ─── Button grid data ─────────────────────────────────────────────────────────

type ButtonRow = {
  variant: ButtonVariant;
  label: string;
  floating?: boolean;
  hasLoading?: boolean;
  /** Background for the preview cell */
  previewBg: "light" | "dark";
};

type ButtonGroup = {
  name: string;
  rows: ButtonRow[];
};

const buttonGroups: ButtonGroup[] = [
  {
    name: "Primary",
    rows: [
      { variant: "primary-light",   label: "Primary Light",          previewBg: "light", hasLoading: true },
      { variant: "primary-dark",    label: "Primary Dark",           previewBg: "dark",  hasLoading: true },
      { variant: "primary-light",   label: "Primary Floating",       previewBg: "light", floating: true },
      { variant: "primary-dark",    label: "Primary Dark Floating",  previewBg: "dark",  floating: true },
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

// ─── Sub-components ───────────────────────────────────────────────────────────

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="mb-8 pb-3 border-b" style={{ borderColor: cssVars["color/neutral/600"] }}>
      <h2
        className="label-2-medium text-[11px] tracking-[2px] uppercase"
        style={{ color: cssVars["color/neutral/800"] }}
      >
        {title}
      </h2>
    </div>
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
      <p
        className="label-2-medium text-[11px] uppercase tracking-widest mb-3"
        style={{ color: cssVars["color/neutral/700"] }}
      >
        {group}
      </p>
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

// ─── Static button preview (forces a specific visual state without pseudo-classes)

const floatingShadow = "shadow-[0_4px_24px_rgba(50,52,41,0.20)]";
const baseButtonClasses =
  "inline-flex items-center justify-center h-[44px] px-(--spacing-spacing-32) py-[14px] rounded-full min-w-[327px]";

function HoverPreview({
  variant,
  floating = false,
}: {
  variant: ButtonVariant;
  floating?: boolean;
}) {
  return (
    <div
      className={[
        baseButtonClasses,
        floating ? floatingShadow : "",
        stateClasses[variant].hover,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span className="label-2-medium uppercase text-center flex-1 min-w-0">
        get your formula
      </span>
    </div>
  );
}

// ─── Button group section ─────────────────────────────────────────────────────

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

function PreviewCell({
  bg,
  children,
}: {
  bg: "light" | "dark";
  children: React.ReactNode;
}) {
  return (
    <div
      className="flex items-center justify-center p-4 rounded-xl"
      style={{
        background:
          bg === "dark"
            ? cssVars["color/primary/400"]
            : cssVars["color/primary/100"],
      }}
    >
      {children}
    </div>
  );
}

function ButtonGroupSection({ name, rows }: ButtonGroup) {
  const hasLoading = rows.some((r) => r.hasLoading);

  return (
    <div className="mb-10">
      <p
        className="label-2-medium text-[11px] uppercase tracking-widest mb-4"
        style={{ color: cssVars["color/neutral/700"] }}
      >
        {name}
      </p>

      {/* Column headers */}
      <div
        className={`grid gap-3 mb-2 ${hasLoading ? "grid-cols-[200px_1fr_1fr_1fr_1fr_200px]" : "grid-cols-[200px_1fr_1fr_1fr_200px]"}`}
      >
        <div />
        <StateLabel>Default</StateLabel>
        <StateLabel>Hover</StateLabel>
        <StateLabel>Disabled</StateLabel>
        {hasLoading && <StateLabel>Loading</StateLabel>}
        <StateLabel>Tokens</StateLabel>
      </div>

      {/* Rows */}
      {rows.map((row) => {
        const tokens = variantTokens[row.variant];
        const colClass = hasLoading
          ? "grid-cols-[200px_1fr_1fr_1fr_1fr_200px]"
          : "grid-cols-[200px_1fr_1fr_1fr_200px]";

        return (
          <div
            key={row.label}
            className={`grid gap-3 items-center py-3 border-b last:border-0`}
            style={{ gridTemplateColumns: hasLoading ? "200px 1fr 1fr 1fr 1fr 200px" : "200px 1fr 1fr 1fr 200px", borderColor: cssVars["color/neutral/600"] }}
          >
            {/* Row label */}
            <div>
              <p className="text-[13px] font-medium" style={{ color: cssVars["color/primary/400"] }}>
                {row.label}
              </p>
              <p className="text-[10px] font-mono mt-0.5" style={{ color: cssVars["color/neutral/700"] }}>
                variant="{row.variant}"{row.floating ? ' floating' : ''}
              </p>
            </div>

            {/* Default */}
            <PreviewCell bg={row.previewBg}>
              <Button variant={row.variant} size="fixed" floating={row.floating}>
                get your formula
              </Button>
            </PreviewCell>

            {/* Hover — static visual preview */}
            <PreviewCell bg={row.previewBg}>
              <HoverPreview variant={row.variant} floating={row.floating} />
            </PreviewCell>

            {/* Disabled */}
            <PreviewCell bg={row.previewBg}>
              <Button variant={row.variant} size="fixed" floating={row.floating} disabled>
                get your formula
              </Button>
            </PreviewCell>

            {/* Loading (optional) */}
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

            {/* Token badges */}
            <div className="flex flex-col gap-1.5">
              {tokens.bg     && <TokenPill token={tokens.bg} />}
              {tokens.border && <TokenPill token={tokens.border} />}
              <TokenPill token={tokens.text} />
              <TokenPill token={`color/primary/300`} />
              {row.floating  && <TokenPill token="radius/radius-400" />}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─── Sizes section ────────────────────────────────────────────────────────────

function SizesSection() {
  const sizes: { size: ButtonSize; label: string; desc: string }[] = [
    { size: "fixed",    label: "Fixed",    desc: "min-width: 327px" },
    { size: "flexible", label: "Flexible", desc: "w-fit, max-width: 327px" },
  ];

  return (
    <div className="mb-10">
      <p
        className="label-2-medium text-[11px] uppercase tracking-widest mb-6"
        style={{ color: cssVars["color/neutral/700"] }}
      >
        Sizes
      </p>
      <div className="flex flex-wrap gap-10 items-start">
        {sizes.map(({ size, label, desc }) => (
          <div key={size} className="flex flex-col gap-3 items-start">
            <PreviewCell bg="light">
              <Button variant="primary-light" size={size}>
                get your formula
              </Button>
            </PreviewCell>
            <div>
              <p className="text-[12px] font-medium" style={{ color: cssVars["color/primary/400"] }}>
                {label}
              </p>
              <p className="text-[11px] font-mono" style={{ color: cssVars["color/neutral/700"] }}>
                {desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ComponentLibrary() {
  return (
    <div className="min-h-screen px-12 py-16" style={{ background: "#fafaf8" }}>

      {/* Title */}
      <div className="mb-16">
        <h1
          className="text-[32px] font-semibold tracking-tight"
          style={{ color: cssVars["color/primary/400"] }}
        >
          Design System Foundations
        </h1>
        <p className="text-[14px] mt-2" style={{ color: cssVars["color/neutral/800"] }}>
          Figma · RHVDAjk5iKIMQcoIKb94jy · synced 2026-03-17
        </p>
      </div>

      {/* ── Colors ─────────────────────────────────────────── */}
      <section className="mb-20">
        <SectionHeader title="Tokens — Colors" />
        <div className="grid grid-cols-4 gap-10">
          {colorGroups.map((g) => (
            <ColorGroup key={g.group} {...g} />
          ))}
        </div>
      </section>

      {/* ── Typography ─────────────────────────────────────── */}
      <section className="mb-20">
        <SectionHeader title="Tokens — Typography" />
        <TypographyShowcase />
      </section>

      {/* ── Radius & Spacing ───────────────────────────────── */}
      <section className="mb-20">
        <SectionHeader title="Tokens — Radius & Spacing" />
        <div className="flex flex-wrap gap-10 items-end">
          {(
            [
              { token: "radius/radius-0",   value: "0px"   },
              { token: "radius/radius-4",   value: "4px"   },
              { token: "radius/radius-10",  value: "10px"  },
              { token: "radius/radius-12",  value: "12px"  },
              { token: "radius/radius-20",  value: "20px"  },
              { token: "radius/radius-60",  value: "60px"  },
              { token: "radius/radius-400", value: "400px" },
            ] as const
          ).map(({ token, value }) => (
            <div key={token} className="flex flex-col gap-2 items-center">
              <div
                className="w-12 h-12 border-2"
                style={{
                  borderColor: cssVars["color/primary/400"],
                  borderRadius: value,
                }}
              />
              <p className="text-[10px] font-mono" style={{ color: cssVars["color/neutral/800"] }}>
                {value}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-4 mt-8 items-end">
          {(
            [
              { token: "spacing/spacing-4",  value: "4px"  },
              { token: "spacing/spacing-8",  value: "8px"  },
              { token: "spacing/spacing-12", value: "12px" },
              { token: "spacing/spacing-16", value: "16px" },
              { token: "spacing/spacing-24", value: "24px" },
              { token: "spacing/spacing-32", value: "32px" },
              { token: "spacing/spacing-48", value: "48px" },
              { token: "spacing/spacing-64", value: "64px" },
              { token: "spacing/spacing-80", value: "80px" },
            ] as const
          ).map(({ token, value }) => (
            <div key={token} className="flex flex-col gap-2 items-center">
              <div
                className="rounded"
                style={{
                  width: value,
                  height: "32px",
                  background: cssVars["color/accent/200"],
                }}
              />
              <p className="text-[10px] font-mono" style={{ color: cssVars["color/neutral/800"] }}>
                {value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Button ─────────────────────────────────────────── */}
      <section className="mb-20">
        <SectionHeader title="Component — Button" />

        <SizesSection />

        {buttonGroups.map((group) => (
          <ButtonGroupSection key={group.name} {...group} />
        ))}
      </section>
    </div>
  );
}
