import { useState } from "react";
import colorsData from "../../tokens/colors.json";
import spacingData from "../../tokens/spacing.json";
import radiusData from "../../tokens/radius.json";

import { Logo } from "../components/Logo";
import {
  Button,
  type ButtonVariant,
  stateClasses as buttonStateClasses,
} from "../components/Button/Button";
import {
  ButtonMini,
  type ButtonMiniVariant,
  type ButtonMiniColor,
} from "../components/Button/ButtonMini";
import { Accordion } from "../components/Accordion/Accordion";
import { Checkbox, type CheckboxState } from "../components/Checkbox/Checkbox";
import { Radio, type RadioState, type RadioSize } from "../components/Radio/Radio";
import { Tag } from "../components/Tag/Tag";
import { Toast, type ToastType } from "../components/Toast/Toast";
import { Toggle } from "../components/Toggle/Toggle";
import {
  InputField,
  type InputFieldType,
  type InputFieldState,
} from "../components/InputField/InputField";
import {
  Selector,
  type SelectorSize,
} from "../components/Selector/Selector";
import {
  TextLink,
  type TextLinkType,
  type TextLinkColor,
} from "../components/TextLink/TextLink";
import { TypographyShowcase } from "../components/Typography/Typography";
import { cssVars } from "../tokens";

// ─── Navigation ─────────────────────────────────────────────────────────────

type Page =
  | "colors"
  | "typography"
  | "spacing"
  | "radius"
  | "components";

const navItems: { id: Page; label: string }[] = [
  { id: "colors", label: "Colors" },
  { id: "typography", label: "Typography" },
  { id: "spacing", label: "Spacing" },
  { id: "radius", label: "Radius" },
  { id: "components", label: "Components" },
];

// ─── Color helpers ──────────────────────────────────────────────────────────

type ColorEntry = { token: string; value: string; usage: string };

const colorCategories = [
  "primary",
  "neutral",
  "accent",
  "highlight",
  "secondary",
  "tertiary",
  "error",
  "success",
] as const;

function groupColors(): { group: string; entries: ColorEntry[] }[] {
  const groups: { group: string; entries: ColorEntry[] }[] = [];

  for (const cat of colorCategories) {
    const prefix = `color/${cat}/`;
    const entries: ColorEntry[] = [];
    for (const [token, data] of Object.entries(colorsData)) {
      if (token.startsWith(prefix)) {
        entries.push({
          token,
          value: (data as { value: string; usage: string }).value,
          usage: (data as { value: string; usage: string }).usage,
        });
      }
    }
    if (entries.length > 0) {
      groups.push({
        group: cat.charAt(0).toUpperCase() + cat.slice(1),
        entries,
      });
    }
  }
  return groups;
}

const colorGroups = groupColors();

// ─── Spacing/Radius data ────────────────────────────────────────────────────

const spacingEntries = Object.entries(spacingData).map(([token, data]) => ({
  token,
  value: (data as { value: string }).value,
}));

const radiusEntries = Object.entries(radiusData).map(([token, data]) => ({
  token,
  value: (data as { value: string }).value,
}));

// ─── Shared sub-components ──────────────────────────────────────────────────

function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div
      className="mb-10 pb-6 border-b"
      style={{ borderColor: cssVars["color/neutral/600"] }}
    >
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
        <p
          className="mt-2 text-[13px]"
          style={{ color: cssVars["color/neutral/800"] }}
        >
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

function Placeholder({ name }: { name: string }) {
  return (
    <div
      className="flex items-center justify-center rounded-xl border-2 border-dashed p-8"
      style={{
        borderColor: cssVars["color/neutral/600"],
        color: cssVars["color/neutral/700"],
      }}
    >
      <p className="text-[13px] font-mono text-center">
        Implementation pending — see{" "}
        <code className="text-[12px]">components/{name}.md</code>
      </p>
    </div>
  );
}

// ─── Page: Colors ───────────────────────────────────────────────────────────

function ColorsPage() {
  return (
    <div>
      <PageHeader
        title="Colors"
        subtitle="Every color token from the design system, grouped by category."
      />
      <div className="flex flex-col gap-10">
        {colorGroups.map((group) => (
          <div key={group.group}>
            <SectionLabel>{group.group}</SectionLabel>
            <div className="flex flex-wrap gap-4">
              {group.entries.map((entry) => {
                const label = entry.token.split("/").pop() ?? "";
                const isDark = isColorDark(entry.value);
                return (
                  <div
                    key={entry.token}
                    className="flex flex-col items-start gap-1.5"
                  >
                    <div
                      className="w-16 h-16 rounded-xl border flex items-end p-1.5"
                      style={{
                        background: entry.value,
                        borderColor: cssVars["color/neutral/600"],
                      }}
                    >
                      <span
                        className="text-[9px] font-mono font-medium"
                        style={{ color: isDark ? "#fff" : "#000" }}
                      >
                        {label}
                      </span>
                    </div>
                    <p
                      className="text-[11px] font-mono font-medium"
                      style={{ color: cssVars["color/neutral/800"] }}
                    >
                      {entry.value}
                    </p>
                    <p
                      className="text-[10px] max-w-[120px]"
                      style={{ color: cssVars["color/neutral/700"] }}
                    >
                      {entry.usage}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function isColorDark(hex: string): boolean {
  const c = hex.replace("#", "");
  const r = parseInt(c.substring(0, 2), 16);
  const g = parseInt(c.substring(2, 4), 16);
  const b = parseInt(c.substring(4, 6), 16);
  return r * 0.299 + g * 0.587 + b * 0.114 < 128;
}

// ─── Page: Typography ───────────────────────────────────────────────────────

function TypographyPage() {
  return (
    <div>
      <PageHeader
        title="Typography"
        subtitle="Type scale for headings, body, and labels."
      />
      <TypographyShowcase />
    </div>
  );
}

// ─── Page: Spacing ──────────────────────────────────────────────────────────

function SpacingPage() {
  return (
    <div>
      <PageHeader
        title="Spacing"
        subtitle="Spacing scale tokens for consistent layout."
      />
      <div className="flex flex-col gap-3">
        {spacingEntries.map((entry) => {
          const px = parseInt(entry.value, 10);
          return (
            <div key={entry.token} className="flex items-center gap-4">
              <span
                className="text-[11px] font-mono w-[120px] text-right shrink-0"
                style={{ color: cssVars["color/neutral/800"] }}
              >
                {entry.token}
              </span>
              <div
                className="h-6 rounded"
                style={{
                  width: Math.max(px, 2),
                  background: cssVars["color/primary/200"],
                }}
              />
              <span
                className="text-[11px] font-mono shrink-0"
                style={{ color: cssVars["color/neutral/700"] }}
              >
                {entry.value}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Page: Radius ───────────────────────────────────────────────────────────

function RadiusPage() {
  return (
    <div>
      <PageHeader
        title="Border Radius"
        subtitle="Radius scale tokens."
      />
      <div className="flex flex-wrap gap-6">
        {radiusEntries.map((entry) => {
          const px = parseInt(entry.value, 10);
          const displayRadius = Math.min(px, 40);
          return (
            <div
              key={entry.token}
              className="flex flex-col items-center gap-2"
            >
              <div
                className="w-20 h-20 border-2"
                style={{
                  borderColor: cssVars["color/primary/300"],
                  borderRadius: displayRadius,
                  background: cssVars["color/primary/100"],
                }}
              />
              <span
                className="text-[11px] font-mono font-medium"
                style={{ color: cssVars["color/neutral/800"] }}
              >
                {entry.token}
              </span>
              <span
                className="text-[10px] font-mono"
                style={{ color: cssVars["color/neutral/700"] }}
              >
                {entry.value}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Page: Components ───────────────────────────────────────────────────────

function ComponentsPage() {
  const [toggleOn, setToggleOn] = useState(false);
  const [selectorSelected, setSelectorSelected] = useState(false);

  return (
    <div>
      <PageHeader
        title="Components"
        subtitle="All implemented components with their variants. Pending components show a placeholder."
      />

      {/* ── Logo ───────────────────────────────────────────────── */}
      <section className="mb-12">
        <SectionLabel>Logo</SectionLabel>
        <div className="flex flex-wrap items-center gap-8">
          <PreviewCell bg="light">
            <Logo variant="dark" height={32} />
          </PreviewCell>
          <PreviewCell bg="dark">
            <Logo variant="light" height={32} />
          </PreviewCell>
        </div>
      </section>

      {/* ── Buttons ────────────────────────────────────────────── */}
      <section className="mb-12">
        <SectionLabel>Buttons</SectionLabel>
        <div className="flex flex-col gap-6">
          {(
            [
              "primary-light",
              "primary-dark",
              "secondary-light",
              "secondary-dark",
              "accent",
              "destructive",
            ] as ButtonVariant[]
          ).map((variant) => {
            const isDark =
              variant === "primary-dark" || variant === "secondary-dark";
            return (
              <div key={variant} className="flex flex-col gap-2">
                <p
                  className="text-[11px] font-mono font-medium"
                  style={{ color: cssVars["color/neutral/800"] }}
                >
                  {variant}
                </p>
                <div className="flex flex-wrap gap-4">
                  <PreviewCell bg={isDark ? "dark" : "light"}>
                    <Button variant={variant} size="flexible">
                      Default
                    </Button>
                  </PreviewCell>
                  <PreviewCell bg={isDark ? "dark" : "light"}>
                    <div
                      className={[
                        "inline-flex items-center justify-center h-[44px] px-(--spacing-spacing-32) py-[14px] rounded-full w-fit max-w-[327px]",
                        buttonStateClasses[variant].hover,
                      ].join(" ")}
                    >
                      <span className="label-2-medium uppercase text-center flex-1 min-w-0">
                        Hover
                      </span>
                    </div>
                  </PreviewCell>
                  <PreviewCell bg={isDark ? "dark" : "light"}>
                    <Button variant={variant} size="flexible" disabled>
                      Disabled
                    </Button>
                  </PreviewCell>
                  {(variant === "primary-light" ||
                    variant === "primary-dark" ||
                    variant === "accent") && (
                    <PreviewCell bg={isDark ? "dark" : "light"}>
                      <Button variant={variant} size="flexible" loading>
                        Loading
                      </Button>
                    </PreviewCell>
                  )}
                </div>
              </div>
            );
          })}

          <p
            className="text-[11px] font-mono font-medium mt-4"
            style={{ color: cssVars["color/neutral/800"] }}
          >
            Button/Mini
          </p>
          <div className="flex flex-wrap gap-4">
            {(["back", "add"] as ButtonMiniVariant[]).map((v) =>
              (["light", "dark"] as ButtonMiniColor[]).map((c) => (
                <PreviewCell
                  key={`${v}-${c}`}
                  bg={c === "dark" ? "light" : "light"}
                >
                  <ButtonMini variant={v} color={c} />
                </PreviewCell>
              ))
            )}
          </div>
        </div>
      </section>

      {/* ── Text Links ─────────────────────────────────────────── */}
      <section className="mb-12">
        <SectionLabel>Text Links</SectionLabel>
        <div className="flex flex-col gap-4">
          {(["primary", "secondary", "simple"] as TextLinkType[]).map(
            (type) =>
              (["light", "dark"] as TextLinkColor[]).map((color) => (
                <div
                  key={`${type}-${color}`}
                  className="flex flex-wrap items-center gap-4"
                >
                  <span
                    className="text-[10px] font-mono w-[140px] shrink-0"
                    style={{ color: cssVars["color/neutral/700"] }}
                  >
                    {type} / {color}
                  </span>
                  <PreviewCell bg={color === "dark" ? "dark" : "light"}>
                    <TextLink type={type} color={color}>
                      Text link
                    </TextLink>
                  </PreviewCell>
                  <PreviewCell bg={color === "dark" ? "dark" : "light"}>
                    <TextLink type={type} color={color} hasIcon>
                      With icon
                    </TextLink>
                  </PreviewCell>
                  <PreviewCell bg={color === "dark" ? "dark" : "light"}>
                    <TextLink type={type} color={color} disabled>
                      Disabled
                    </TextLink>
                  </PreviewCell>
                </div>
              ))
          )}
        </div>
      </section>

      {/* ── Input Fields ───────────────────────────────────────── */}
      <section className="mb-12">
        <SectionLabel>Input Fields</SectionLabel>
        <div className="flex flex-col gap-6">
          {(
            ["form-field", "dropdown", "button"] as InputFieldType[]
          ).map((type) => (
            <div key={type}>
              <p
                className="text-[11px] font-mono font-medium mb-3"
                style={{ color: cssVars["color/neutral/800"] }}
              >
                {type}
              </p>
              <div className="flex flex-wrap gap-4">
                {(
                  [
                    "default",
                    "active",
                    "disabled",
                    "incomplete",
                    "invalid",
                    "complete",
                  ] as InputFieldState[]
                ).map((state) => (
                  <div key={state} className="flex flex-col gap-1">
                    <span
                      className="text-[9px] font-mono uppercase"
                      style={{ color: cssVars["color/neutral/700"] }}
                    >
                      {state}
                    </span>
                    <InputField type={type} state={state} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Selectors ──────────────────────────────────────────── */}
      <section className="mb-12">
        <SectionLabel>Selectors</SectionLabel>
        <div className="flex flex-col gap-6">
          <p
            className="text-[11px] font-mono font-medium"
            style={{ color: cssVars["color/neutral/800"] }}
          >
            Text Pill
          </p>
          <div className="flex flex-wrap gap-4">
            {(["fixed", "hug"] as SelectorSize[]).map((size) => (
              <div key={size} className="flex flex-col gap-2">
                <span
                  className="text-[9px] font-mono uppercase"
                  style={{ color: cssVars["color/neutral/700"] }}
                >
                  {size}
                </span>
                <Selector
                  size={size}
                  selected={selectorSelected}
                  onClick={() => setSelectorSelected(!selectorSelected)}
                  label="Once or twice a week"
                  subcopy="Recommended for your hair type"
                />
              </div>
            ))}
          </div>
          <p
            className="text-[11px] font-mono font-medium"
            style={{ color: cssVars["color/neutral/800"] }}
          >
            Image Card
          </p>
          <div className="flex flex-wrap gap-4">
            <Selector
              size="mobile"
              selected={false}
              image="/my-design-system/images/type-3-defined-curl.png"
              label="Curly hair"
              subcopy="Type 3 — defined curls"
            />
            <Selector
              size="mobile"
              selected={true}
              image="/my-design-system/images/type-3-defined-curl.png"
              label="Curly hair"
              subcopy="Type 3 — defined curls"
            />
          </div>
        </div>
      </section>

      {/* ── UI Controls ────────────────────────────────────────── */}
      <section className="mb-12">
        <SectionLabel>UI Controls</SectionLabel>

        <p
          className="text-[11px] font-mono font-medium mb-3"
          style={{ color: cssVars["color/neutral/800"] }}
        >
          Radio
        </p>
        <div className="flex flex-wrap gap-6 mb-6">
          {(["empty", "selected", "disabled"] as RadioState[]).map(
            (state) =>
              (["small", "large"] as RadioSize[]).map((size) => (
                <div
                  key={`${state}-${size}`}
                  className="flex flex-col items-center gap-1"
                >
                  <Radio state={state} size={size} />
                  <span
                    className="text-[9px] font-mono"
                    style={{ color: cssVars["color/neutral/700"] }}
                  >
                    {state}/{size}
                  </span>
                </div>
              ))
          )}
        </div>

        <p
          className="text-[11px] font-mono font-medium mb-3"
          style={{ color: cssVars["color/neutral/800"] }}
        >
          Checkbox
        </p>
        <div className="flex flex-wrap gap-6 mb-6">
          {(
            [
              "empty",
              "selected",
              "inactive",
              "read-only",
            ] as CheckboxState[]
          ).map((state) => (
            <div
              key={state}
              className="flex flex-col items-center gap-1"
            >
              <Checkbox state={state} />
              <span
                className="text-[9px] font-mono"
                style={{ color: cssVars["color/neutral/700"] }}
              >
                {state}
              </span>
            </div>
          ))}
          <div className="flex flex-col gap-1">
            <Checkbox
              state="selected"
              label="With label"
              headline="Headline"
            />
          </div>
        </div>

        <p
          className="text-[11px] font-mono font-medium mb-3"
          style={{ color: cssVars["color/neutral/800"] }}
        >
          Toggle
        </p>
        <div className="flex flex-wrap gap-6 mb-6">
          <div className="flex flex-col items-center gap-1">
            <Toggle on={toggleOn} onChange={setToggleOn} />
            <span
              className="text-[9px] font-mono"
              style={{ color: cssVars["color/neutral/700"] }}
            >
              {toggleOn ? "on" : "off"}
            </span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Toggle on={true} showLabels />
            <span
              className="text-[9px] font-mono"
              style={{ color: cssVars["color/neutral/700"] }}
            >
              with labels
            </span>
          </div>
          <Toggle
            on={false}
            label="With label"
            headline="Headline"
          />
        </div>
      </section>

      {/* ── Accordion ──────────────────────────────────────────── */}
      <section className="mb-12">
        <SectionLabel>Accordion</SectionLabel>
        <div className="flex flex-col gap-8 max-w-[500px]">
          <div>
            <p
              className="text-[11px] font-mono font-medium mb-3"
              style={{ color: cssVars["color/neutral/800"] }}
            >
              FAQ variant
            </p>
            <Accordion
              variant="faq"
              items={[
                {
                  question: "What makes Prose different?",
                  answer:
                    "Every Prose formula is custom-made for your unique hair profile.",
                },
                {
                  question: "How does the consultation work?",
                  answer:
                    "Our online consultation takes about 5 minutes and covers your hair goals, lifestyle, and preferences.",
                },
                {
                  question: "Can I change my formula?",
                  answer:
                    "Yes! You can update your hair profile and adjust your formula at any time.",
                },
              ]}
            />
          </div>
          <div>
            <p
              className="text-[11px] font-mono font-medium mb-3"
              style={{ color: cssVars["color/neutral/800"] }}
            >
              Product variant
            </p>
            <Accordion
              variant="product"
              items={[
                {
                  question: "How to use",
                  steps: [
                    {
                      title: "Wet your hair",
                      description:
                        "Start with thoroughly wet hair in the shower.",
                    },
                    {
                      title: "Apply shampoo",
                      description:
                        "Massage a quarter-sized amount into your scalp.",
                    },
                  ],
                },
                {
                  question: "Ingredients",
                  steps: [
                    {
                      title: "Key actives",
                      description: "Hyaluronic acid, biotin, silk protein.",
                    },
                  ],
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* ── Tags ───────────────────────────────────────────────── */}
      <section className="mb-12">
        <SectionLabel>Tags</SectionLabel>
        <div className="flex flex-wrap gap-4">
          <Tag>Best seller</Tag>
          <Tag size="small">New</Tag>
        </div>
      </section>

      {/* ── Toasts ─────────────────────────────────────────────── */}
      <section className="mb-12">
        <SectionLabel>Toasts</SectionLabel>
        <div className="flex flex-col gap-4">
          {(
            ["removal", "added", "paused", "error"] as ToastType[]
          ).map((type) => (
            <div key={type} className="flex flex-col gap-1">
              <span
                className="text-[9px] font-mono uppercase"
                style={{ color: cssVars["color/neutral/700"] }}
              >
                {type}
              </span>
              <Toast type={type} message={`Item ${type}`} />
            </div>
          ))}
        </div>
      </section>

      {/* ── Pending implementations ────────────────────────────── */}
      <section className="mb-12">
        <SectionLabel>Pending Implementations</SectionLabel>
        <div className="flex flex-col gap-4">
          <Placeholder name="IconBag" />
          <Placeholder name="IconFlag" />
          <Placeholder name="IconPayment" />
          <Placeholder name="Caret" />
          <Placeholder name="VideoControls" />
          <Placeholder name="ArrowButton" />
          <Placeholder name="PaginationDots" />
          <Placeholder name="Carousel" />
        </div>
      </section>
    </div>
  );
}

// ─── Layout ─────────────────────────────────────────────────────────────────

const pages: Record<Page, () => JSX.Element> = {
  colors: ColorsPage,
  typography: TypographyPage,
  spacing: SpacingPage,
  radius: RadiusPage,
  components: ComponentsPage,
};

export default function DesignSystemPage() {
  const [activePage, setActivePage] = useState<Page>("colors");
  const ActiveComponent = pages[activePage];

  return (
    <div
      className="flex min-h-screen"
      style={{
        background: cssVars["color/neutral/200"],
        color: cssVars["color/neutral/900"],
      }}
    >
      {/* Sidebar */}
      <nav
        className="w-[220px] shrink-0 flex flex-col border-r sticky top-0 h-screen overflow-y-auto"
        style={{
          background: cssVars["color/neutral/100"],
          borderColor: cssVars["color/neutral/600"],
        }}
      >
        <div
          className="px-6 py-6 border-b"
          style={{ borderColor: cssVars["color/neutral/600"] }}
        >
          <Logo variant="dark" height={20} />
          <p
            className="mt-2 text-[10px] uppercase tracking-[2px] font-mono"
            style={{ color: cssVars["color/neutral/700"] }}
          >
            Design System
          </p>
        </div>

        <div className="flex flex-col py-4 gap-0.5">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className="flex items-center px-6 py-2.5 text-left cursor-pointer transition-colors duration-100"
              style={{
                fontFamily: "var(--font-label-2-family)",
                fontSize: "var(--font-label-2-size)",
                fontWeight:
                  activePage === item.id
                    ? "var(--font-label-2-weight-medium)"
                    : "var(--font-label-2-weight-regular)",
                lineHeight: "var(--font-label-2-line-height)",
                letterSpacing: "var(--font-label-2-letter-spacing)",
                textTransform: "uppercase",
                color:
                  activePage === item.id
                    ? cssVars["color/primary/400"]
                    : cssVars["color/neutral/700"],
                background:
                  activePage === item.id
                    ? cssVars["color/primary/100"]
                    : "transparent",
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Main content */}
      <main className="flex-1 p-12 overflow-y-auto">
        <div className="max-w-[960px]">
          <ActiveComponent />
        </div>
      </main>
    </div>
  );
}
