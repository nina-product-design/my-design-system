import { cssVars, tokenMap } from "../../tokens";

type TypeStyle = {
  id: string;
  token: string;
  label: string;
  sample: string;
  description: string;
  style: React.CSSProperties;
};

const typeStyles: TypeStyle[] = [
  // Headings (Saol, weight 300)
  {
    id: "heading-h1",
    token: "type/heading/h1",
    label: "Heading · H1",
    sample: "Heading/H1",
    description: "Saol · 48px · 110% · weight 300",
    style: {
      fontFamily: "var(--font-heading-h1-family)",
      fontSize: "var(--font-heading-h1-size)",
      fontWeight: "var(--font-heading-h1-weight)",
      lineHeight: "var(--font-heading-h1-line-height)",
      letterSpacing: "var(--font-heading-h1-letter-spacing)",
      color: cssVars["color/primary/400"],
    },
  },
  {
    id: "heading-h2",
    token: "type/heading/h2",
    label: "Heading · H2",
    sample: "Heading/H2",
    description: "Saol · 40px · 110% · weight 300",
    style: {
      fontFamily: "var(--font-heading-h2-family)",
      fontSize: "var(--font-heading-h2-size)",
      fontWeight: "var(--font-heading-h2-weight)",
      lineHeight: "var(--font-heading-h2-line-height)",
      letterSpacing: "var(--font-heading-h2-letter-spacing)",
      color: cssVars["color/primary/400"],
    },
  },
  {
    id: "heading-h3",
    token: "type/heading/h3",
    label: "Heading · H3",
    sample: "Heading/H3",
    description: "Saol · 32px · 110% · weight 300",
    style: {
      fontFamily: "var(--font-heading-h3-family)",
      fontSize: "var(--font-heading-h3-size)",
      fontWeight: "var(--font-heading-h3-weight)",
      lineHeight: "var(--font-heading-h3-line-height)",
      letterSpacing: "var(--font-heading-h3-letter-spacing)",
      color: cssVars["color/primary/400"],
    },
  },
  {
    id: "heading-h4",
    token: "type/heading/h4",
    label: "Heading · H4",
    sample: "Heading/H4",
    description: "Saol · 24px · 110% · weight 300",
    style: {
      fontFamily: "var(--font-heading-h4-family)",
      fontSize: "var(--font-heading-h4-size)",
      fontWeight: "var(--font-heading-h4-weight)",
      lineHeight: "var(--font-heading-h4-line-height)",
      letterSpacing: "var(--font-heading-h4-letter-spacing)",
      color: cssVars["color/primary/400"],
    },
  },
  {
    id: "heading-h5",
    token: "type/heading/h5",
    label: "Heading · H5",
    sample: "Heading/H5",
    description: "Saol · 20px · 120% · weight 300",
    style: {
      fontFamily: "var(--font-heading-h5-family)",
      fontSize: "var(--font-heading-h5-size)",
      fontWeight: "var(--font-heading-h5-weight)",
      lineHeight: "var(--font-heading-h5-line-height)",
      letterSpacing: "var(--font-heading-h5-letter-spacing)",
      color: cssVars["color/primary/400"],
    },
  },
  {
    id: "heading-h6",
    token: "type/heading/h6",
    label: "Heading · H6",
    sample: "Heading/H6",
    description: "Saol · 16px · 120% · weight 300",
    style: {
      fontFamily: "var(--font-heading-h6-family)",
      fontSize: "var(--font-heading-h6-size)",
      fontWeight: "var(--font-heading-h6-weight)",
      lineHeight: "var(--font-heading-h6-line-height)",
      letterSpacing: "var(--font-heading-h6-letter-spacing)",
      color: cssVars["color/primary/400"],
    },
  },

  // Body styles (Simplon Norm — regular)
  {
    id: "body-1-regular",
    token: "type/body/1",
    label: "Body · 1 — Regular",
    sample:
      "Body 1 text for large paragraphs, descriptions and supporting content.",
    description: "Simplon Norm · 24px · 150% · weight 400",
    style: {
      fontFamily: "var(--font-body-1-family)",
      fontSize: "var(--font-body-1-size)",
      fontWeight: "var(--font-body-1-weight-regular)",
      lineHeight: "var(--font-body-1-line-height)",
      letterSpacing: "var(--font-body-1-letter-spacing)",
      color: cssVars["color/neutral/800"],
    },
  },
  {
    id: "body-2-regular",
    token: "type/body/2",
    label: "Body · 2 — Regular",
    sample:
      "Body 2 text for general paragraphs, descriptions and UI copy.",
    description: "Simplon Norm · 20px · 150% · weight 400",
    style: {
      fontFamily: "var(--font-body-2-family)",
      fontSize: "var(--font-body-2-size)",
      fontWeight: "var(--font-body-2-weight-regular)",
      lineHeight: "var(--font-body-2-line-height)",
      letterSpacing: "var(--font-body-2-letter-spacing)",
      color: cssVars["color/neutral/800"],
    },
  },
  {
    id: "body-3-regular",
    token: "type/body/3",
    label: "Body · 3 — Regular",
    sample:
      "Body 3 text for standard paragraphs and in-product descriptions.",
    description: "Simplon Norm · 16px · 150% · weight 400",
    style: {
      fontFamily: "var(--font-body-3-family)",
      fontSize: "var(--font-body-3-size)",
      fontWeight: "var(--font-body-3-weight-regular)",
      lineHeight: "var(--font-body-3-line-height)",
      letterSpacing: "var(--font-body-3-letter-spacing)",
      color: cssVars["color/neutral/800"],
    },
  },
  {
    id: "body-4-regular",
    token: "type/body/4",
    label: "Body · 4 — Regular",
    sample:
      "Body 4 text for captions, meta information and helper labels.",
    description: "Simplon Norm · 14px · 150% · weight 400",
    style: {
      fontFamily: "var(--font-body-4-family)",
      fontSize: "var(--font-body-4-size)",
      fontWeight: "var(--font-body-4-weight-regular)",
      lineHeight: "var(--font-body-4-line-height)",
      letterSpacing: "var(--font-body-4-letter-spacing)",
      color: cssVars["color/neutral/800"],
    },
  },
  {
    id: "body-5-regular",
    token: "type/body/5",
    label: "Body · 5 — Regular",
    sample: "Body 5 text for small labels and supporting UI copy.",
    description: "Simplon Norm · 12px · 150% · weight 400",
    style: {
      fontFamily: "var(--font-body-5-family)",
      fontSize: "var(--font-body-5-size)",
      fontWeight: "var(--font-body-5-weight-regular)",
      lineHeight: "var(--font-body-5-line-height)",
      letterSpacing: "var(--font-body-5-letter-spacing)",
      color: cssVars["color/neutral/800"],
    },
  },
  {
    id: "body-6-regular",
    token: "type/body/6",
    label: "Body · 6 — Regular",
    sample: "Body 6 text for dense UI, badges and helper text.",
    description: "Simplon Norm · 10px · 150% · weight 400",
    style: {
      fontFamily: "var(--font-body-6-family)",
      fontSize: "var(--font-body-6-size)",
      fontWeight: "var(--font-body-6-weight-regular)",
      lineHeight: "var(--font-body-6-line-height)",
      letterSpacing: "var(--font-body-6-letter-spacing)",
      color: cssVars["color/neutral/800"],
    },
  },

  // Body styles (Simplon Norm — medium)
  {
    id: "body-1-medium",
    token: "type/body/1",
    label: "Body · 1 — Medium",
    sample:
      "Body 1 text for large paragraphs, descriptions and supporting content.",
    description: "Simplon Norm · 24px · 150% · weight 500",
    style: {
      fontFamily: "var(--font-body-1-family)",
      fontSize: "var(--font-body-1-size)",
      fontWeight: "var(--font-body-1-weight-medium)",
      lineHeight: "var(--font-body-1-line-height)",
      letterSpacing: "var(--font-body-1-letter-spacing)",
      color: cssVars["color/neutral/800"],
    },
  },
  {
    id: "body-2-medium",
    token: "type/body/2",
    label: "Body · 2 — Medium",
    sample:
      "Body 2 text for general paragraphs, descriptions and UI copy.",
    description: "Simplon Norm · 20px · 150% · weight 500",
    style: {
      fontFamily: "var(--font-body-2-family)",
      fontSize: "var(--font-body-2-size)",
      fontWeight: "var(--font-body-2-weight-medium)",
      lineHeight: "var(--font-body-2-line-height)",
      letterSpacing: "var(--font-body-2-letter-spacing)",
      color: cssVars["color/neutral/800"],
    },
  },
  {
    id: "body-3-medium",
    token: "type/body/3",
    label: "Body · 3 — Medium",
    sample:
      "Body 3 text for standard paragraphs and in-product descriptions.",
    description: "Simplon Norm · 16px · 150% · weight 500",
    style: {
      fontFamily: "var(--font-body-3-family)",
      fontSize: "var(--font-body-3-size)",
      fontWeight: "var(--font-body-3-weight-medium)",
      lineHeight: "var(--font-body-3-line-height)",
      letterSpacing: "var(--font-body-3-letter-spacing)",
      color: cssVars["color/neutral/800"],
    },
  },
  {
    id: "body-4-medium",
    token: "type/body/4",
    label: "Body · 4 — Medium",
    sample:
      "Body 4 text for captions, meta information and helper labels.",
    description: "Simplon Norm · 14px · 150% · weight 500",
    style: {
      fontFamily: "var(--font-body-4-family)",
      fontSize: "var(--font-body-4-size)",
      fontWeight: "var(--font-body-4-weight-medium)",
      lineHeight: "var(--font-body-4-line-height)",
      letterSpacing: "var(--font-body-4-letter-spacing)",
      color: cssVars["color/neutral/800"],
    },
  },
  {
    id: "body-5-medium",
    token: "type/body/5",
    label: "Body · 5 — Medium",
    sample: "Body 5 text for small labels and supporting UI copy.",
    description: "Simplon Norm · 12px · 150% · weight 500",
    style: {
      fontFamily: "var(--font-body-5-family)",
      fontSize: "var(--font-body-5-size)",
      fontWeight: "var(--font-body-5-weight-medium)",
      lineHeight: "var(--font-body-5-line-height)",
      letterSpacing: "var(--font-body-5-letter-spacing)",
      color: cssVars["color/neutral/800"],
    },
  },
  {
    id: "body-6-medium",
    token: "type/body/6",
    label: "Body · 6 — Medium",
    sample: "Body 6 text for dense UI, badges and helper text.",
    description: "Simplon Norm · 10px · 150% · weight 500",
    style: {
      fontFamily: "var(--font-body-6-family)",
      fontSize: "var(--font-body-6-size)",
      fontWeight: "var(--font-body-6-weight-medium)",
      lineHeight: "var(--font-body-6-line-height)",
      letterSpacing: "var(--font-body-6-letter-spacing)",
      color: cssVars["color/neutral/800"],
    },
  },

  // Body styles (Simplon Norm — italic, weight 400)
  {
    id: "body-1-italic",
    token: "type/body/1",
    label: "Body · 1 — Italic",
    sample:
      "Body 1 italic text for emphasis within large paragraphs and descriptions.",
    description: "Simplon Norm · 24px · 150% · italic",
    style: {
      fontFamily: "var(--font-body-1-family)",
      fontSize: "var(--font-body-1-size)",
      fontWeight: "var(--font-body-1-weight-regular)",
      lineHeight: "var(--font-body-1-line-height)",
      letterSpacing: "var(--font-body-1-letter-spacing)",
      fontStyle: "italic",
      color: cssVars["color/neutral/800"],
    },
  },
  {
    id: "body-2-italic",
    token: "type/body/2",
    label: "Body · 2 — Italic",
    sample:
      "Body 2 italic text for emphasis in general paragraphs and UI copy.",
    description: "Simplon Norm · 20px · 150% · italic",
    style: {
      fontFamily: "var(--font-body-2-family)",
      fontSize: "var(--font-body-2-size)",
      fontWeight: "var(--font-body-2-weight-regular)",
      lineHeight: "var(--font-body-2-line-height)",
      letterSpacing: "var(--font-body-2-letter-spacing)",
      fontStyle: "italic",
      color: cssVars["color/neutral/800"],
    },
  },
  {
    id: "body-3-italic",
    token: "type/body/3",
    label: "Body · 3 — Italic",
    sample:
      "Body 3 italic text for emphasis in standard paragraphs and descriptions.",
    description: "Simplon Norm · 16px · 150% · italic",
    style: {
      fontFamily: "var(--font-body-3-family)",
      fontSize: "var(--font-body-3-size)",
      fontWeight: "var(--font-body-3-weight-regular)",
      lineHeight: "var(--font-body-3-line-height)",
      letterSpacing: "var(--font-body-3-letter-spacing)",
      fontStyle: "italic",
      color: cssVars["color/neutral/800"],
    },
  },
  {
    id: "body-4-italic",
    token: "type/body/4",
    label: "Body · 4 — Italic",
    sample:
      "Body 4 italic text for captions, meta information and helper labels.",
    description: "Simplon Norm · 14px · 150% · italic",
    style: {
      fontFamily: "var(--font-body-4-family)",
      fontSize: "var(--font-body-4-size)",
      fontWeight: "var(--font-body-4-weight-regular)",
      lineHeight: "var(--font-body-4-line-height)",
      letterSpacing: "var(--font-body-4-letter-spacing)",
      fontStyle: "italic",
      color: cssVars["color/neutral/800"],
    },
  },
  {
    id: "body-5-italic",
    token: "type/body/5",
    label: "Body · 5 — Italic",
    sample: "Body 5 italic text for small labels and supporting UI copy.",
    description: "Simplon Norm · 12px · 150% · italic",
    style: {
      fontFamily: "var(--font-body-5-family)",
      fontSize: "var(--font-body-5-size)",
      fontWeight: "var(--font-body-5-weight-regular)",
      lineHeight: "var(--font-body-5-line-height)",
      letterSpacing: "var(--font-body-5-letter-spacing)",
      fontStyle: "italic",
      color: cssVars["color/neutral/800"],
    },
  },
  {
    id: "body-6-italic",
    token: "type/body/6",
    label: "Body · 6 — Italic",
    sample: "Body 6 italic text for dense UI, badges and helper text.",
    description: "Simplon Norm · 10px · 150% · italic",
    style: {
      fontFamily: "var(--font-body-6-family)",
      fontSize: "var(--font-body-6-size)",
      fontWeight: "var(--font-body-6-weight-regular)",
      lineHeight: "var(--font-body-6-line-height)",
      letterSpacing: "var(--font-body-6-letter-spacing)",
      fontStyle: "italic",
      color: cssVars["color/neutral/800"],
    },
  },

  // Label styles (Simplon Mono)
  {
    id: "label-1-regular",
    token: "type/label/1",
    label: "Label 1 — Regular",
    sample: "Label 1",
    description: "Simplon Mono · 14px · 120% · weight 400",
    style: {
      fontFamily: "var(--font-label-1-family)",
      fontSize: "var(--font-label-1-size)",
      fontWeight: "var(--font-label-1-weight-regular)",
      lineHeight: "var(--font-label-1-line-height)",
      letterSpacing: "var(--font-label-1-letter-spacing)",
      textTransform: "uppercase",
      color: cssVars["color/neutral/800"],
    },
  },
  {
    id: "label-1-medium",
    token: "type/label/1",
    label: "Label 1 — Medium",
    sample: "Label 1",
    description: "Simplon Mono · 14px · 120% · weight 500",
    style: {
      fontFamily: "var(--font-label-1-family)",
      fontSize: "var(--font-label-1-size)",
      fontWeight: "var(--font-label-1-weight-medium)",
      lineHeight: "var(--font-label-1-line-height)",
      letterSpacing: "var(--font-label-1-letter-spacing)",
      textTransform: "uppercase",
      color: cssVars["color/neutral/800"],
    },
  },
  {
    id: "label-2-regular",
    token: "type/label/2",
    label: "Label 2 — Regular",
    sample: "Label 2",
    description: "Simplon Mono · 12px · 120% · weight 400",
    style: {
      fontFamily: "var(--font-label-2-family)",
      fontSize: "var(--font-label-2-size)",
      fontWeight: "var(--font-label-2-weight-regular)",
      lineHeight: "var(--font-label-2-line-height)",
      letterSpacing: "var(--font-label-2-letter-spacing)",
      textTransform: "uppercase",
      color: cssVars["color/neutral/800"],
    },
  },
  {
    id: "label-2-medium",
    token: "type/label/2",
    label: "Label 2 — Medium",
    sample: "Label 2",
    description: "Simplon Mono · 12px · 120% · weight 500",
    style: {
      fontFamily: "var(--font-label-2-family)",
      fontSize: "var(--font-label-2-size)",
      fontWeight: "var(--font-label-2-weight-medium)",
      lineHeight: "var(--font-label-2-line-height)",
      letterSpacing: "var(--font-label-2-letter-spacing)",
      textTransform: "uppercase",
      color: cssVars["color/neutral/800"],
    },
  },
  {
    id: "label-3-regular",
    token: "type/label/3",
    label: "Label 3 — Regular",
    sample: "Label 3",
    description: "Simplon Mono · 10px · 120% · weight 400",
    style: {
      fontFamily: "var(--font-label-3-family)",
      fontSize: "var(--font-label-3-size)",
      fontWeight: "var(--font-label-3-weight-regular)",
      lineHeight: "var(--font-label-3-line-height)",
      letterSpacing: "var(--font-label-3-letter-spacing)",
      textTransform: "uppercase",
      color: cssVars["color/neutral/800"],
    },
  },
];

function TokenPill({ token }: { token: string }) {
  const value = tokenMap[token as keyof typeof tokenMap] ?? token;
  return (
    <span
      className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono"
      style={{
        background: cssVars["color/primary/100"],
        color: cssVars["color/primary/400"],
      }}
    >
      <span className="opacity-60">{token}</span>
      <span className="font-semibold">{value}</span>
    </span>
  );
}

export function TypographyShowcase() {
  return (
    <div className="flex flex-col gap-6">
      {typeStyles.map((t) => (
        <div key={t.id} className="flex items-start justify-between gap-8">
          <div className="flex-1 min-w-0">
            <p style={t.style}>{t.sample}</p>
          </div>
          <div className="flex flex-col items-end gap-1 text-right">
            <p
              className="label-2-medium tracking-[2px]"
              style={{ color: cssVars["color/neutral/700"] }}
            >
              {t.label}
            </p>
            <p
              className="text-[11px] font-mono"
              style={{ color: cssVars["color/neutral/800"] }}
            >
              {t.description}
            </p>
            <TokenPill token={t.token} />
          </div>
        </div>
      ))}
    </div>
  );
}

