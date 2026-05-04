# Prose Design System -- Component Library Source

**Repo:** `https://github.com/nina-product-design/my-design-system`
**Last updated:** 2026-05-04

---

## tokens.ts

`src/tokens.ts`

```ts
/*
 * Design tokens — Figma: Design System Foundations (RHVDAjk5iKIMQcoIKb94jy)
 * Synced: 2026-03-17
 *
 * These values are the authoritative TypeScript mirror of the CSS custom
 * properties defined in globals.css. Keep both files in sync.
 *
 * Extraction note: the Figma MCP remote server's get_variable_defs tool is
 * selection-scoped; it returns only variables applied to queried nodes.
 * 13 primitive tokens were found across all reachable component nodes —
 * no semantic / mode layer was surfaced. If the Figma file gains color modes,
 * re-run extraction and update both this file and globals.css.
 */

// ── Primitive values (for JS/TS usage and ComponentLibrary docs) ─────────────

export const colors = {
  primary: {
    100: "#dce0d2", // lightest tint
    200: "#b9c2a6",
    300: "#4d523c", // mid / hover
    400: "#323429", // brand dark green
  },
  neutral: {
    100: "#ffffff",
    200: "#f9f7f2",
    300: "#f1ece0",
    400: "#e2d9c2",
    500: "#c8bfa8",
    600: "#eaeaea",
    700: "#a6a6a6",
    800: "#6c6c6c",
    900: "#161714", // near-black
  },
  accent: {
    100: "#fcded3",
    200: "#f69371",
    300: "#c5765a",
  },
  highlight: {
    100: "#f6ffcd",
    200: "#ecff92",
  },
  tertiary: {
    100: "#f9f9fe",
    200: "#ead7f3",
    300: "#bbacc2",
  },
  secondary: {
    100: "#d0e2e8",
    200: "#a2c6d1",
    300: "#88acb7",
  },
  error: {
    100: "#e8cac6",
    200: "#b45446",
  },
  success: {
    100: "#bed9c7",
    200: "#2e844a",
  },
} as const;

export const typography = {
  families: {
    title: "var(--font-family-title)",
    body: "var(--font-family-body)",
    label: "var(--font-family-label)",
  },
  weights: {
    regular: "var(--font-weight-regular)",
    light: "var(--font-weight-light)",
    medium: "var(--font-weight-medium)",
  },
  styles: {
    // Headings
    h1: {
      fontFamily: "var(--font-heading-h1-family)",
      fontSize: "var(--font-heading-h1-size)",
      fontWeight: "var(--font-heading-h1-weight)",
      lineHeight: "var(--font-heading-h1-line-height)",
      letterSpacing: "var(--font-heading-h1-letter-spacing)",
    },
    h2: {
      fontFamily: "var(--font-heading-h2-family)",
      fontSize: "var(--font-heading-h2-size)",
      fontWeight: "var(--font-heading-h2-weight)",
      lineHeight: "var(--font-heading-h2-line-height)",
      letterSpacing: "var(--font-heading-h2-letter-spacing)",
    },
    h3: {
      fontFamily: "var(--font-heading-h3-family)",
      fontSize: "var(--font-heading-h3-size)",
      fontWeight: "var(--font-heading-h3-weight)",
      lineHeight: "var(--font-heading-h3-line-height)",
      letterSpacing: "var(--font-heading-h3-letter-spacing)",
    },
    h4: {
      fontFamily: "var(--font-heading-h4-family)",
      fontSize: "var(--font-heading-h4-size)",
      fontWeight: "var(--font-heading-h4-weight)",
      lineHeight: "var(--font-heading-h4-line-height)",
      letterSpacing: "var(--font-heading-h4-letter-spacing)",
    },
    h5: {
      fontFamily: "var(--font-heading-h5-family)",
      fontSize: "var(--font-heading-h5-size)",
      fontWeight: "var(--font-heading-h5-weight)",
      lineHeight: "var(--font-heading-h5-line-height)",
      letterSpacing: "var(--font-heading-h5-letter-spacing)",
    },
    h6: {
      fontFamily: "var(--font-heading-h6-family)",
      fontSize: "var(--font-heading-h6-size)",
      fontWeight: "var(--font-heading-h6-weight)",
      lineHeight: "var(--font-heading-h6-line-height)",
      letterSpacing: "var(--font-heading-h6-letter-spacing)",
    },
    // Body (regular weight)
    body1Regular: {
      fontFamily: "var(--font-body-1-family)",
      fontSize: "var(--font-body-1-size)",
      fontWeight: "var(--font-body-1-weight-regular)",
      lineHeight: "var(--font-body-1-line-height)",
      letterSpacing: "var(--font-body-1-letter-spacing)",
    },
    body2Regular: {
      fontFamily: "var(--font-body-2-family)",
      fontSize: "var(--font-body-2-size)",
      fontWeight: "var(--font-body-2-weight-regular)",
      lineHeight: "var(--font-body-2-line-height)",
      letterSpacing: "var(--font-body-2-letter-spacing)",
    },
    body3Regular: {
      fontFamily: "var(--font-body-3-family)",
      fontSize: "var(--font-body-3-size)",
      fontWeight: "var(--font-body-3-weight-regular)",
      lineHeight: "var(--font-body-3-line-height)",
      letterSpacing: "var(--font-body-3-letter-spacing)",
    },
    body4Regular: {
      fontFamily: "var(--font-body-4-family)",
      fontSize: "var(--font-body-4-size)",
      fontWeight: "var(--font-body-4-weight-regular)",
      lineHeight: "var(--font-body-4-line-height)",
      letterSpacing: "var(--font-body-4-letter-spacing)",
    },
    body5Regular: {
      fontFamily: "var(--font-body-5-family)",
      fontSize: "var(--font-body-5-size)",
      fontWeight: "var(--font-body-5-weight-regular)",
      lineHeight: "var(--font-body-5-line-height)",
      letterSpacing: "var(--font-body-5-letter-spacing)",
    },
    body6Regular: {
      fontFamily: "var(--font-body-6-family)",
      fontSize: "var(--font-body-6-size)",
      fontWeight: "var(--font-body-6-weight-regular)",
      lineHeight: "var(--font-body-6-line-height)",
      letterSpacing: "var(--font-body-6-letter-spacing)",
    },
    // Body (medium weight)
    body1Medium: {
      fontFamily: "var(--font-body-1-family)",
      fontSize: "var(--font-body-1-size)",
      fontWeight: "var(--font-body-1-weight-medium)",
      lineHeight: "var(--font-body-1-line-height)",
      letterSpacing: "var(--font-body-1-letter-spacing)",
    },
    body2Medium: {
      fontFamily: "var(--font-body-2-family)",
      fontSize: "var(--font-body-2-size)",
      fontWeight: "var(--font-body-2-weight-medium)",
      lineHeight: "var(--font-body-2-line-height)",
      letterSpacing: "var(--font-body-2-letter-spacing)",
    },
    body3Medium: {
      fontFamily: "var(--font-body-3-family)",
      fontSize: "var(--font-body-3-size)",
      fontWeight: "var(--font-body-3-weight-medium)",
      lineHeight: "var(--font-body-3-line-height)",
      letterSpacing: "var(--font-body-3-letter-spacing)",
    },
    body4Medium: {
      fontFamily: "var(--font-body-4-family)",
      fontSize: "var(--font-body-4-size)",
      fontWeight: "var(--font-body-4-weight-medium)",
      lineHeight: "var(--font-body-4-line-height)",
      letterSpacing: "var(--font-body-4-letter-spacing)",
    },
    body5Medium: {
      fontFamily: "var(--font-body-5-family)",
      fontSize: "var(--font-body-5-size)",
      fontWeight: "var(--font-body-5-weight-medium)",
      lineHeight: "var(--font-body-5-line-height)",
      letterSpacing: "var(--font-body-5-letter-spacing)",
    },
    body6Medium: {
      fontFamily: "var(--font-body-6-family)",
      fontSize: "var(--font-body-6-size)",
      fontWeight: "var(--font-body-6-weight-medium)",
      lineHeight: "var(--font-body-6-line-height)",
      letterSpacing: "var(--font-body-6-letter-spacing)",
    },
    // Labels
    label1Regular: {
      fontFamily: "var(--font-label-1-family)",
      fontSize: "var(--font-label-1-size)",
      fontWeight: "var(--font-label-1-weight-regular)",
      lineHeight: "var(--font-label-1-line-height)",
      letterSpacing: "var(--font-label-1-letter-spacing)",
    },
    label1Medium: {
      fontFamily: "var(--font-label-1-family)",
      fontSize: "var(--font-label-1-size)",
      fontWeight: "var(--font-label-1-weight-medium)",
      lineHeight: "var(--font-label-1-line-height)",
      letterSpacing: "var(--font-label-1-letter-spacing)",
    },
    label2Regular: {
      fontFamily: "var(--font-label-2-family)",
      fontSize: "var(--font-label-2-size)",
      fontWeight: "var(--font-label-2-weight-regular)",
      lineHeight: "var(--font-label-2-line-height)",
      letterSpacing: "var(--font-label-2-letter-spacing)",
    },
    label3Regular: {
      fontFamily: "var(--font-label-3-family)",
      fontSize: "var(--font-label-3-size)",
      fontWeight: "var(--font-label-3-weight-regular)",
      lineHeight: "var(--font-label-3-line-height)",
      letterSpacing: "var(--font-label-3-letter-spacing)",
    },
  },
  /** label/2 medium */
  label2Medium: {
    fontFamily: "var(--font-label-2-family)",
    fontSize: "var(--font-label-2-size)",
    fontWeight: "var(--font-label-2-weight-medium)",
    lineHeight: "var(--font-label-2-line-height)",
    letterSpacing: "var(--font-label-2-letter-spacing)",
    // Raw values — use for documentation only, not inline styles
    _raw: {
      fontFamily: '"Simplon Mono", monospace',
      fontSize: "12px",
      fontWeight: 500,
      lineHeight: 1.2,
      letterSpacing: "0.96px",
    },
  },
} as const;

export const radius = {
  0: "var(--radius-radius-0)",
  4: "var(--radius-radius-4)",
  10: "var(--radius-radius-10)",
  12: "var(--radius-radius-12)",
  20: "var(--radius-radius-20)",
  60: "var(--radius-radius-60)",
  400: "var(--radius-radius-400)",
} as const;

export const spacing = {
  none: "var(--spacing-spacing-none)",
  4: "var(--spacing-spacing-4)",
  8: "var(--spacing-spacing-8)",
  12: "var(--spacing-spacing-12)",
  16: "var(--spacing-spacing-16)",
  24: "var(--spacing-spacing-24)",
  32: "var(--spacing-spacing-32)",
  48: "var(--spacing-spacing-48)",
  64: "var(--spacing-spacing-64)",
  80: "var(--spacing-spacing-80)",
} as const;

// ── CSS variable name map ─────────────────────────────────────────────────────
// Use these when you need the variable name string (e.g. to build a style prop)
// e.g. cssVars["color/primary/400"] === "var(--color-primary-400)"

export const cssVars = {
  "color/primary/100": "var(--color-primary-100)",
  "color/primary/200": "var(--color-primary-200)",
  "color/primary/300": "var(--color-primary-300)",
  "color/primary/400": "var(--color-primary-400)",
  "color/neutral/100": "var(--color-neutral-100)",
  "color/neutral/200": "var(--color-neutral-200)",
  "color/neutral/300": "var(--color-neutral-300)",
  "color/neutral/400": "var(--color-neutral-400)",
  "color/neutral/500": "var(--color-neutral-500)",
  "color/neutral/600": "var(--color-neutral-600)",
  "color/neutral/700": "var(--color-neutral-700)",
  "color/neutral/800": "var(--color-neutral-800)",
  "color/neutral/900": "var(--color-neutral-900)",
  "color/accent/100": "var(--color-accent-100)",
  "color/accent/200": "var(--color-accent-200)",
  "color/accent/300": "var(--color-accent-300)",
  "color/highlight/100": "var(--color-highlight-100)",
  "color/highlight/200": "var(--color-highlight-200)",
  "color/tertiary/100": "var(--color-tertiary-100)",
  "color/tertiary/200": "var(--color-tertiary-200)",
  "color/tertiary/300": "var(--color-tertiary-300)",
  "color/secondary/100": "var(--color-secondary-100)",
  "color/secondary/200": "var(--color-secondary-200)",
  "color/secondary/300": "var(--color-secondary-300)",
  "color/success/100": "var(--color-success-100)",
  "color/success/200": "var(--color-success-200)",
  "color/error/100": "var(--color-error-100)",
  "color/error/200": "var(--color-error-200)",
  "radius/radius-0": "var(--radius-radius-0)",
  "radius/radius-4": "var(--radius-radius-4)",
  "radius/radius-10": "var(--radius-radius-10)",
  "radius/radius-12": "var(--radius-radius-12)",
  "radius/radius-20": "var(--radius-radius-20)",
  "radius/radius-60": "var(--radius-radius-60)",
  "radius/radius-400": "var(--radius-radius-400)",
  "spacing/spacing-none": "var(--spacing-spacing-none)",
  "spacing/spacing-4": "var(--spacing-spacing-4)",
  "spacing/spacing-8": "var(--spacing-spacing-8)",
  "spacing/spacing-12": "var(--spacing-spacing-12)",
  "spacing/spacing-16": "var(--spacing-spacing-16)",
  "spacing/spacing-24": "var(--spacing-spacing-24)",
  "spacing/spacing-32": "var(--spacing-spacing-32)",
  "spacing/spacing-48": "var(--spacing-spacing-48)",
  "spacing/spacing-64": "var(--spacing-spacing-64)",
  "spacing/spacing-80": "var(--spacing-spacing-80)",
  "font/family-title": "var(--font-family-title)",
  "font/family-body": "var(--font-family-body)",
  "font/family-label": "var(--font-family-label)",
  "font/weight-regular": "var(--font-weight-regular)",
  "font/weight-light": "var(--font-weight-light)",
  "font/weight-medium": "var(--font-weight-medium)",
  "type/heading/h1": "var(--font-heading-h1-size)",
  "type/heading/h2": "var(--font-heading-h2-size)",
  "type/heading/h3": "var(--font-heading-h3-size)",
  "type/heading/h4": "var(--font-heading-h4-size)",
  "type/heading/h5": "var(--font-heading-h5-size)",
  "type/heading/h6": "var(--font-heading-h6-size)",
  "type/body/1": "var(--font-body-1-size)",
  "type/body/2": "var(--font-body-2-size)",
  "type/body/3": "var(--font-body-3-size)",
  "type/body/4": "var(--font-body-4-size)",
  "type/body/5": "var(--font-body-5-size)",
  "type/body/6": "var(--font-body-6-size)",
  "type/label/1": "var(--font-label-1-size)",
  "type/label/2": "var(--font-label-2-size)",
  "type/label/3": "var(--font-label-3-size)",
} as const;

// ── Flat token map for ComponentLibrary display ───────────────────────────────
// Maps Figma token path → resolved hex / raw value

export const tokenMap = {
  "color/primary/100": colors.primary[100],
  "color/primary/200": colors.primary[200],
  "color/primary/300": colors.primary[300],
  "color/primary/400": colors.primary[400],
  "color/neutral/100": colors.neutral[100],
  "color/neutral/200": colors.neutral[200],
  "color/neutral/300": colors.neutral[300],
  "color/neutral/400": colors.neutral[400],
  "color/neutral/500": colors.neutral[500],
  "color/neutral/600": colors.neutral[600],
  "color/neutral/700": colors.neutral[700],
  "color/neutral/800": colors.neutral[800],
  "color/neutral/900": colors.neutral[900],
  "color/accent/100": colors.accent[100],
  "color/accent/200": colors.accent[200],
  "color/accent/300": colors.accent[300],
  "color/highlight/100": colors.highlight[100],
  "color/highlight/200": colors.highlight[200],
  "color/tertiary/100": colors.tertiary[100],
  "color/tertiary/200": colors.tertiary[200],
  "color/tertiary/300": colors.tertiary[300],
  "color/secondary/100": colors.secondary[100],
  "color/secondary/200": colors.secondary[200],
  "color/secondary/300": colors.secondary[300],
  "color/success/100": colors.success[100],
  "color/success/200": colors.success[200],
  "color/error/100": colors.error[100],
  "color/error/200": colors.error[200],
  "radius/radius-0": "0px",
  "radius/radius-4": "4px",
  "radius/radius-10": "10px",
  "radius/radius-12": "12px",
  "radius/radius-20": "20px",
  "radius/radius-60": "60px",
  "radius/radius-400": "400px",
  "spacing/spacing-none": "0px",
  "spacing/spacing-4": "4px",
  "spacing/spacing-8": "8px",
  "spacing/spacing-12": "12px",
  "spacing/spacing-16": "16px",
  "spacing/spacing-24": "24px",
  "spacing/spacing-32": "32px",
  "spacing/spacing-48": "48px",
  "spacing/spacing-64": "64px",
  "spacing/spacing-80": "80px",
  "label/2 medium": 'Simplon Mono, 12px, weight 500',
  "font/family-title": "Saol",
  "font/family-body": "Simplon Norm",
  "font/family-label": "Simplon Mono",
  "font/weight-regular": "Regular",
  "font/weight-light": "Light",
  "font/weight-medium": "Medium",
  "type/heading/h1": "Saol Text, 48px, weight 300",
  "type/heading/h2": "Saol Text, 40px, weight 300",
  "type/heading/h3": "Saol Text, 32px, weight 300",
  "type/heading/h4": "Saol Text, 24px, weight 300",
  "type/heading/h5": "Saol Text, 20px, weight 300",
  "type/heading/h6": "Saol Text, 16px, weight 300",
  "type/body/1": "Simplon Norm, 24px, 150%",
  "type/body/2": "Simplon Norm, 20px, 150%",
  "type/body/3": "Simplon Norm, 16px, 150%",
  "type/body/4": "Simplon Norm, 14px, 150%",
  "type/body/5": "Simplon Norm, 12px, 150%",
  "type/body/6": "Simplon Norm, 10px, 150%",
  "type/label/1": "Simplon Mono, 14px, 120%",
  "type/label/2": "Simplon Mono, 12px, 120%",
  "type/label/3": "Simplon Mono, 10px, 120%",
} as const;
```

---

## globals.css

`src/globals.css`

```css
/*
 * Design token CSS custom properties
 * Source: Figma — Design System Foundations (RHVDAjk5iKIMQcoIKb94jy)
 * Synced: 2026-03-17
 *
 * Extraction method: get_variable_defs across all reachable component nodes.
 * The Figma MCP remote server surfaces only variables applied to accessible nodes;
 * if the file gains a semantic/mode layer, re-run get_variable_defs and add here.
 *
 * Naming convention: Figma path "color/primary/400" → --color-primary-400
 */

/* Saol Text — Headings */
@font-face {
  font-family: "Saol";
  src: url("https://cdn2.prose.com/build/client/fonts/saol-text-light.woff2") format("woff2");
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

/* Simplon Norm — Body */
@font-face {
  font-family: "Simplon Norm";
  src: url("https://cdn2.prose.com/build/client/fonts/SimplonNorm-Light-WebS.woff2") format("woff2");
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Simplon Norm";
  src: url("https://cdn2.prose.com/build/client/fonts/SimplonNorm-Regular-WebS.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Simplon Norm";
  src: url("https://cdn2.prose.com/build/client/fonts/SimplonNorm-Medium-WebS.woff2") format("woff2");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Simplon Norm";
  src: url("https://cdn2.prose.com/build/client/fonts/SimplonNorm-Bold-WebS.woff2") format("woff2");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

/* Simplon Mono — Labels */
@font-face {
  font-family: "Simplon Mono";
  src: url("https://cdn2.prose.com/build/client/fonts/SimplonMono-Regular-WebS.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Simplon Mono";
  src: url("https://cdn2.prose.com/build/client/fonts/SimplonMono-Medium-WebS.woff2") format("woff2");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@layer base {
  :root {
    /* ── color/primary ─────────────────────────────────────── */
    --color-primary-100: #dce0d2; /* lightest tint — bg highlights       */
    --color-primary-200: #b9c2a6;
    --color-primary-300: #4d523c; /* mid — hover / pressed states        */
    --color-primary-400: #323429; /* brand dark green — primary surface  */

    /* ── color/neutral ─────────────────────────────────────── */
    --color-neutral-100: #ffffff; /* white                               */
    --color-neutral-200: #f9f7f2;
    --color-neutral-300: #f1ece0;
    --color-neutral-400: #e2d9c2;
    --color-neutral-500: #c8bfa8;
    --color-neutral-600: #eaeaea; /* light dividers / subtle bg          */
    --color-neutral-700: #a6a6a6; /* secondary text / icons              */
    --color-neutral-800: #6c6c6c; /* tertiary text / disabled bg         */
    --color-neutral-900: #161714; /* near-black                          */

    /* ── color/accent ──────────────────────────────────────── */
    --color-accent-100: #fcded3; /* light accent tint                   */
    --color-accent-200: #f69371; /* warm salmon — primary CTA accent    */
    --color-accent-300: #c5765a; /* darker accent — hover state         */

    /* ── color/highlight ───────────────────────────────────── */
    --color-highlight-100: #f6ffcd; /* highlight tint                     */
    --color-highlight-200: #ecff92; /* highlight bright                   */

    /* ── color/secondary ───────────────────────────────────── */
    --color-secondary-100: #d0e2e8;
    --color-secondary-200: #a2c6d1;
    --color-secondary-300: #88acb7;

    /* ── color/tertiary ────────────────────────────────────── */
    --color-tertiary-100: #f9f9fe;
    --color-tertiary-200: #ead7f3;
    --color-tertiary-300: #bbacc2;

    /* ── color/error ───────────────────────────────────────── */
    --color-error-100: #e8cac6;
    --color-error-200: #b45446; /* destructive / error                 */

    /* ── color/success ─────────────────────────────────────── */
    --color-success-100: #bed9c7;
    --color-success-200: #2e844a;

    /* ── radius ────────────────────────────────────────────── */
    --radius-radius-0: 0px;
    --radius-radius-4: 4px;
    --radius-radius-10: 10px;
    --radius-radius-12: 12px;
    --radius-radius-20: 20px;
    --radius-radius-60: 60px;
    --radius-radius-400: 400px;

    /* ── spacing ───────────────────────────────────────────── */
    --spacing-spacing-none: 0px;
    --spacing-spacing-4: 4px;
    --spacing-spacing-8: 8px;
    --spacing-spacing-12: 12px;
    --spacing-spacing-16: 16px;
    --spacing-spacing-24: 24px;
    --spacing-spacing-32: 32px;
    --spacing-spacing-48: 48px;
    --spacing-spacing-64: 64px;
    --spacing-spacing-80: 80px;

    /* ── typography primitives ─────────────────────────────── */
    --font-family-title: "Saol", serif;
    --font-family-body: "Simplon Norm", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    --font-family-label: "Simplon Mono", monospace;

    --font-weight-regular: 400;
    --font-weight-light: 300;
    --font-weight-medium: 500;

    /* ── typography styles — headings (Saol, weight 200) ───── */
    --font-heading-h1-family: var(--font-family-title);
    --font-heading-h1-size: 48px;
    --font-heading-h1-weight: 200;
    --font-heading-h1-line-height: 1.1; /* 110% */
    --font-heading-h1-letter-spacing: -0.03em;

    --font-heading-h2-family: var(--font-family-title);
    --font-heading-h2-size: 40px;
    --font-heading-h2-weight: 200;
    --font-heading-h2-line-height: 1.1;
    --font-heading-h2-letter-spacing: -0.03em;

    --font-heading-h3-family: var(--font-family-title);
    --font-heading-h3-size: 32px;
    --font-heading-h3-weight: 200;
    --font-heading-h3-line-height: 1.1;
    --font-heading-h3-letter-spacing: -0.03em;

    --font-heading-h4-family: var(--font-family-title);
    --font-heading-h4-size: 24px;
    --font-heading-h4-weight: 200;
    --font-heading-h4-line-height: 1.1;
    --font-heading-h4-letter-spacing: -0.03em;

    --font-heading-h5-family: var(--font-family-title);
    --font-heading-h5-size: 20px;
    --font-heading-h5-weight: 200;
    --font-heading-h5-line-height: 1.2; /* 120% */
    --font-heading-h5-letter-spacing: -0.03em;

    --font-heading-h6-family: var(--font-family-title);
    --font-heading-h6-size: 16px;
    --font-heading-h6-weight: 200;
    --font-heading-h6-line-height: 1.2;
    --font-heading-h6-letter-spacing: -0.03em;

    /* ── typography styles — body (Simplon Norm) ───────────── */
    /* Body 1: 24px / 150% */
    --font-body-1-family: var(--font-family-body);
    --font-body-1-size: 24px;
    --font-body-1-line-height: 1.5;
    --font-body-1-letter-spacing: 0.02em;
    --font-body-1-weight-regular: 400;
    --font-body-1-weight-medium: 500;

    /* Body 2: 20px / 150% */
    --font-body-2-family: var(--font-family-body);
    --font-body-2-size: 20px;
    --font-body-2-line-height: 1.5;
    --font-body-2-letter-spacing: 0.02em;
    --font-body-2-weight-regular: 400;
    --font-body-2-weight-medium: 500;

    /* Body 3: 16px / 150% */
    --font-body-3-family: var(--font-family-body);
    --font-body-3-size: 16px;
    --font-body-3-line-height: 1.5;
    --font-body-3-letter-spacing: 0.02em;
    --font-body-3-weight-regular: 400;
    --font-body-3-weight-medium: 500;

    /* Body 4: 14px / 150% */
    --font-body-4-family: var(--font-family-body);
    --font-body-4-size: 14px;
    --font-body-4-line-height: 1.5;
    --font-body-4-letter-spacing: 0.02em;
    --font-body-4-weight-regular: 400;
    --font-body-4-weight-medium: 500;

    /* Body 5: 12px / 150% */
    --font-body-5-family: var(--font-family-body);
    --font-body-5-size: 12px;
    --font-body-5-line-height: 1.5;
    --font-body-5-letter-spacing: 0.02em;
    --font-body-5-weight-regular: 400;
    --font-body-5-weight-medium: 500;

    /* Body 6: 10px / 150% */
    --font-body-6-family: var(--font-family-body);
    --font-body-6-size: 10px;
    --font-body-6-line-height: 1.5;
    --font-body-6-letter-spacing: 0.02em;
    --font-body-6-weight-regular: 400;
    --font-body-6-weight-medium: 500;

    /* ── typography styles — labels (Simplon Mono) ─────────── */
    /* Label 1: 14px / 120% */
    --font-label-1-family: var(--font-family-label);
    --font-label-1-size: 14px;
    --font-label-1-line-height: 1.2;
    --font-label-1-letter-spacing: 0.08em;
    --font-label-1-weight-regular: 400;
    --font-label-1-weight-medium: 500;

    /* Label 2: 12px / 120% */
    --font-label-2-family: var(--font-family-label);
    --font-label-2-size: 12px;
    --font-label-2-line-height: 1.2;
    --font-label-2-letter-spacing: 0.08em; /* 8% = 0.96px at 12px */
    --font-label-2-weight-regular: 400;
    --font-label-2-weight-medium: 500;

    /* Label 3: 10px / 120% (regular only) */
    --font-label-3-family: var(--font-family-label);
    --font-label-3-size: 10px;
    --font-label-3-line-height: 1.2;
    --font-label-3-letter-spacing: 0.08em;
    --font-label-3-weight-regular: 400;
  }

  /* ── default type colors ──────────────────────────────────── */
  h1, h2, h3, h4, h5, h6 {
    color: var(--color-primary-400);
  }

  p, li, td, th, blockquote {
    color: var(--color-neutral-800);
  }

  /* Utility: applies the label/2 medium type style in one class */
  .label-2-medium {
    font-family: var(--font-label-2-family);
    font-size: var(--font-label-2-size);
    font-weight: var(--font-label-2-weight);
    line-height: var(--font-label-2-line-height);
    letter-spacing: var(--font-label-2-letter-spacing);
    font-style: normal;
  }
}
```

---

## Components

### Accordion

#### Accordion.tsx

```tsx
import { useState } from "react";
import { typography } from "../../tokens";

/*
 * Accordion — Figma: Design System Foundations > Accordion
 *
 * Two variants:
 *   "product" — Simplon Mono 12px uppercase labels (label/2 medium), chevron icon
 *   "faq"     — Simplon Norm body text, plus/minus icon, expandable answer
 *
 * Divider: 1px neutral/600 between items
 * Icon: rotates on open (chevron for product, plus→minus for faq)
 */

export type AccordionVariant = "product" | "faq";

export type ProductStep = {
  title: string;
  description: string;
};

type AccordionItem = {
  question: string;
  answer?: string;
  steps?: ProductStep[];
};

type AccordionProps = {
  variant?: AccordionVariant;
  items: AccordionItem[];
  className?: string;
};

// ─── Icons ───────────────────────────────────────────────────────────────────

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      className={`shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <path d="M2 4.5L6 8.5L10 4.5" stroke="var(--color-primary-300)" strokeWidth="1.2" />
    </svg>
  );
}

function PlusMinusIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      className="shrink-0"
      aria-hidden="true"
    >
      <line x1="0" y1="5" x2="10" y2="5" stroke="var(--color-neutral-700)" strokeWidth="1" />
      {!open && (
        <line x1="5" y1="0" x2="5" y2="10" stroke="var(--color-neutral-700)" strokeWidth="1" />
      )}
    </svg>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export function Accordion({
  variant = "faq",
  items,
  className = "",
}: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const isProduct = variant === "product";

  return (
    <div className={`flex flex-col w-full ${className}`}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;

        return (
          <div key={i}>
            {/* Row */}
            <button
              type="button"
              onClick={() => toggle(i)}
              className={`flex items-center justify-between w-full gap-(--spacing-spacing-12) cursor-pointer text-left ${isProduct ? "h-[70px]" : "min-h-[53px] py-(--spacing-spacing-8)"}`}
            >
              <span
                className={isProduct ? "text-(--color-primary-300)" : "text-(--color-primary-400)"}
                style={
                  isProduct
                    ? {
                        fontFamily: typography.label2Medium.fontFamily,
                        fontSize: typography.label2Medium.fontSize,
                        fontWeight: typography.label2Medium.fontWeight,
                        lineHeight: typography.label2Medium.lineHeight,
                        letterSpacing: typography.label2Medium.letterSpacing,
                        textTransform: "uppercase",
                      }
                    : {
                        fontFamily: typography.styles.body4Regular.fontFamily,
                        fontSize: typography.styles.body4Regular.fontSize,
                        fontWeight: typography.styles.body4Regular.fontWeight,
                        lineHeight: typography.styles.body4Regular.lineHeight,
                        letterSpacing: typography.styles.body4Regular.letterSpacing,
                      }
                }
              >
                {item.question}
              </span>
              {isProduct ? <ChevronIcon open={isOpen} /> : <PlusMinusIcon open={isOpen} />}
            </button>

            {/* Product steps (open state) */}
            {isProduct && isOpen && item.steps && (
              <div className="flex flex-col gap-(--spacing-spacing-16) pb-(--spacing-spacing-12) text-(--color-primary-300)">
                {item.steps.map((step, si) => (
                  <div key={si} className="flex gap-(--spacing-spacing-16) items-start">
                    <span
                      className="shrink-0"
                      style={{
                        fontFamily: typography.styles.body4Medium.fontFamily,
                        fontSize: typography.styles.body4Medium.fontSize,
                        fontWeight: typography.styles.body4Medium.fontWeight,
                        lineHeight: typography.styles.body4Medium.lineHeight,
                      }}
                    >
                      {String(si + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p
                        style={{
                          fontFamily: typography.styles.body4Medium.fontFamily,
                          fontSize: typography.styles.body4Medium.fontSize,
                          fontWeight: typography.styles.body4Medium.fontWeight,
                          lineHeight: typography.styles.body4Medium.lineHeight,
                        }}
                      >
                        {step.title}
                      </p>
                      <p
                        style={{
                          fontFamily: typography.styles.body4Regular.fontFamily,
                          fontSize: typography.styles.body4Regular.fontSize,
                          fontWeight: typography.styles.body4Regular.fontWeight,
                          lineHeight: typography.styles.body4Regular.lineHeight,
                          letterSpacing: typography.styles.body4Regular.letterSpacing,
                        }}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Answer (FAQ only) */}
            {!isProduct && isOpen && item.answer && (
              <div
                className="pb-(--spacing-spacing-16) text-(--color-primary-400)"
                style={{
                  fontFamily: typography.styles.body4Regular.fontFamily,
                  fontSize: typography.styles.body4Regular.fontSize,
                  fontWeight: typography.styles.body4Regular.fontWeight,
                  lineHeight: typography.styles.body4Regular.lineHeight,
                  letterSpacing: typography.styles.body4Regular.letterSpacing,
                }}
              >
                {item.answer}
              </div>
            )}

            {/* Divider */}
            <div className="h-px w-full bg-(--color-neutral-600)" />
          </div>
        );
      })}
    </div>
  );
}

```

#### index.ts

```ts
export { Accordion } from "./Accordion";

```

---

### ArrowButton

#### ArrowButton.tsx

```tsx
/*
 * ArrowButton — Figma: Design System > UI Controls > Arrow Button
 *
 * Circular arrow buttons for carousel/slider navigation.
 *
 * Sizes:
 *   "small" — 29px, rounded-[14.5px]
 *   "large" — 50px, rounded-full
 *
 * Directions:
 *   "left"  — chevron pointing left
 *   "right" — chevron pointing right
 *
 * Colors:
 *   "light"    — bg neutral/300, icon primary/400
 *   "dark"     — bg primary/300, icon neutral/100
 *   "disabled" — bg neutral/600, icon neutral/700
 */

export type ArrowButtonSize = "small" | "large";
export type ArrowButtonDirection = "left" | "right";
export type ArrowButtonColor = "light" | "dark" | "disabled";

type ArrowButtonProps = {
  size?: ArrowButtonSize;
  direction?: ArrowButtonDirection;
  color?: ArrowButtonColor;
  onClick?: () => void;
  className?: string;
};

const bgClasses: Record<ArrowButtonColor, string> = {
  light: "bg-(--color-neutral-300)",
  dark: "bg-(--color-primary-300)",
  disabled: "bg-(--color-neutral-600)",
};

const iconColors: Record<ArrowButtonColor, string> = {
  light: "var(--color-primary-400)",
  dark: "var(--color-neutral-100)",
  disabled: "var(--color-neutral-700)",
};

function ChevronSvg({ size, direction, color }: { size: ArrowButtonSize; direction: ArrowButtonDirection; color: ArrowButtonColor }) {
  const stroke = iconColors[color];
  const isSmall = size === "small";
  const w = isSmall ? 5 : 11;
  const h = isSmall ? 10 : 19;
  const strokeW = isSmall ? 1.5 : 2;

  return (
    <svg
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      fill="none"
      style={direction === "left" ? { transform: "scaleX(-1)" } : undefined}
    >
      <path
        d={isSmall ? "M0.5 0.5L4.5 5L0.5 9.5" : "M1 1L10 9.5L1 18"}
        stroke={stroke}
        strokeWidth={strokeW}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowButton({
  size = "small",
  direction = "right",
  color = "light",
  onClick,
  className = "",
}: ArrowButtonProps) {
  const isSmall = size === "small";
  const sizeClass = isSmall ? "size-[29px] rounded-[14.5px]" : "size-[50px] rounded-full";
  const isDisabled = color === "disabled";

  return (
    <button
      onClick={isDisabled ? undefined : onClick}
      disabled={isDisabled}
      className={`flex items-center justify-center ${sizeClass} ${bgClasses[color]} ${
        isDisabled ? "cursor-default" : "cursor-pointer"
      } ${className}`}
      aria-label={`${direction === "left" ? "Previous" : "Next"}`}
    >
      <ChevronSvg size={size} direction={direction} color={color} />
    </button>
  );
}

```

#### index.ts

```ts
export { ArrowButton } from "./ArrowButton";
export type { ArrowButtonSize, ArrowButtonDirection, ArrowButtonColor } from "./ArrowButton";

```

---

### Button

#### Button.tsx

```tsx
import { typography } from "../../tokens";

/*
 * Button — Figma: Design System Foundations
 *
 * Shape   : rounded-full (9999px pill)
 * Font    : label/2 medium — Simplon Mono, uppercase, tracking-[0.96px]
 * Sizes   : "fixed" → min-w-[327px]  |  "flexible" → w-fit max-w-[327px]
 *
 * All variant × state class strings are STATIC LITERALS so Tailwind v4's
 * scanner emits every rule. No dynamic class construction.
 */

export type ButtonVariant =
  | "primary-light"
  | "primary-dark"
  | "secondary-light"
  | "secondary-dark"
  | "accent"
  | "destructive";

export type ButtonSize = "fixed" | "flexible";

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Adds drop shadow — applies to primary and accent */
  floating?: boolean;
  disabled?: boolean;
  loading?: boolean;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  className?: string;
};

// ─── State class maps ──────────────────────────────────────────────────────────
// Exported so ComponentLibrary can render static hover/disabled previews
// without relying on CSS pseudo-class activation.

export const stateClasses: Record<
  ButtonVariant,
  { default: string; hover: string; disabled: string }
> = {
  "primary-light": {
    default:  "bg-(--color-primary-400) text-(--color-neutral-100)",
    hover:    "bg-(--color-primary-300) text-(--color-neutral-100)",
    disabled: "bg-(--color-neutral-800) text-(--color-neutral-100)",
  },
  "primary-dark": {
    default:  "bg-(--color-neutral-100) text-(--color-primary-400)",
    hover:    "bg-(--color-primary-100) text-(--color-primary-400)",
    disabled: "bg-(--color-neutral-800) text-(--color-neutral-100)",
  },
  "secondary-light": {
    default:  "bg-transparent border border-(--color-primary-400) text-(--color-primary-400)",
    hover:    "bg-(--color-primary-400) border border-(--color-primary-400) text-(--color-neutral-100)",
    disabled: "bg-transparent border border-(--color-neutral-700) text-(--color-neutral-700)",
  },
  "secondary-dark": {
    default:  "bg-transparent border border-(--color-neutral-100) text-(--color-neutral-100)",
    hover:    "bg-(--color-neutral-100) border border-(--color-neutral-100) text-(--color-primary-400)",
    disabled: "bg-transparent border border-(--color-neutral-700) text-(--color-neutral-700)",
  },
  accent: {
    default:  "bg-(--color-accent-200) text-(--color-primary-400)",
    hover:    "bg-(--color-accent-300) text-(--color-neutral-100)",
    disabled: "bg-(--color-neutral-800) text-(--color-neutral-100)",
  },
  destructive: {
    default:  "bg-transparent border border-(--color-error-200) text-(--color-error-200)",
    hover:    "bg-(--color-error-200) border border-(--color-error-200) text-(--color-neutral-100)",
    disabled: "bg-transparent border border-(--color-neutral-700) text-(--color-neutral-700)",
  },
};

// ─── Interactive variant classes (with Tailwind pseudo-class modifiers) ────────

const variantClasses: Record<ButtonVariant, string> = {
  "primary-light":
    "bg-(--color-primary-400) text-(--color-neutral-100) " +
    "hover:bg-(--color-primary-300) " +
    "disabled:bg-(--color-neutral-800) disabled:text-(--color-neutral-100) disabled:opacity-100",

  "primary-dark":
    "bg-(--color-neutral-100) text-(--color-primary-400) " +
    "hover:bg-(--color-primary-100) " +
    "disabled:bg-(--color-neutral-800) disabled:text-(--color-neutral-100) disabled:opacity-100",

  "secondary-light":
    "bg-transparent border border-(--color-primary-400) text-(--color-primary-400) " +
    "hover:bg-(--color-primary-400) hover:text-(--color-neutral-100) " +
    "disabled:bg-transparent disabled:border-(--color-neutral-700) disabled:text-(--color-neutral-700) disabled:opacity-100",

  "secondary-dark":
    "bg-transparent border border-(--color-neutral-100) text-(--color-neutral-100) " +
    "hover:bg-(--color-neutral-100) hover:text-(--color-primary-400) " +
    "disabled:bg-transparent disabled:border-(--color-neutral-700) disabled:text-(--color-neutral-700) disabled:opacity-100",

  accent:
    "bg-(--color-accent-200) text-(--color-primary-400) " +
    "hover:bg-(--color-accent-300) hover:text-(--color-neutral-100) " +
    "disabled:bg-(--color-neutral-800) disabled:text-(--color-neutral-100) disabled:opacity-100",

  destructive:
    "bg-transparent border border-(--color-error-200) text-(--color-error-200) " +
    "hover:bg-(--color-error-200) hover:text-(--color-neutral-100) " +
    "disabled:bg-transparent disabled:border-(--color-neutral-700) disabled:text-(--color-neutral-700) disabled:opacity-100",
};

// ─── Token references for ComponentLibrary documentation ──────────────────────

export const variantTokens: Record<
  ButtonVariant,
  { bg?: string; border?: string; text: string; hoverBg: string }
> = {
  "primary-light":   { bg: "color/primary/400",   text: "color/neutral/100",  hoverBg: "color/primary/300" },
  "primary-dark":    { bg: "color/neutral/100",    text: "color/primary/400",  hoverBg: "color/primary/100" },
  "secondary-light": { border: "color/primary/400", text: "color/primary/400", hoverBg: "color/primary/400" },
  "secondary-dark":  { border: "color/neutral/100", text: "color/neutral/100", hoverBg: "color/neutral/100" },
  accent:            { bg: "color/accent/200",     text: "color/primary/400",  hoverBg: "color/accent/300" },
  destructive:       { border: "color/error/200",  text: "color/error/200",    hoverBg: "color/error/200" },
};

// Shadow value used for floating variants
const floatingShadow = "shadow-[0_4px_24px_rgba(50,52,41,0.20)]";

// ─── Component ────────────────────────────────────────────────────────────────

export function Button({
  variant = "primary-light",
  size = "fixed",
  floating = false,
  disabled = false,
  loading = false,
  children = "Get your formula",
  onClick,
  type = "button",
  className = "",
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      disabled={isDisabled}
      onClick={onClick}
      className={[
        "inline-flex items-center justify-center",
        // spacing/spacing-32 for horizontal padding, 14px vertical
        "h-[44px] px-(--spacing-spacing-32) py-[14px]",
        // Full pill — border-radius 9999px
        "rounded-full",
        "cursor-pointer",
        "transition-colors duration-150 ease-out",
        // Size
        size === "fixed" ? "min-w-[327px]" : "w-fit max-w-[327px]",
        // Floating elevation
        floating ? floatingShadow : "",
        // Appearance + hover + disabled
        loading ? "bg-(--color-neutral-800) border-transparent" : variantClasses[variant],
        // Cursor when non-interactive
        isDisabled ? "cursor-not-allowed" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {loading ? (
        <Spinner />
      ) : (
        <span
          style={{
            fontFamily: typography.label2Medium.fontFamily,
            fontSize: typography.label2Medium.fontSize,
            fontWeight: typography.label2Medium.fontWeight,
            lineHeight: typography.label2Medium.lineHeight,
            letterSpacing: typography.label2Medium.letterSpacing,
            textTransform: "uppercase",
          }}
          className="text-center flex-1 min-w-0"
        >
          {children}
        </span>
      )}
    </button>
  );
}

// ─── Spinner ──────────────────────────────────────────────────────────────────

function Spinner() {
  return (
    <>
      <style>{`
        @keyframes spinner-draw {
          0%   { stroke-dasharray: 0 63; stroke-dashoffset: 0; }
          50%  { stroke-dasharray: 50 63; stroke-dashoffset: 0; }
          100% { stroke-dasharray: 0 63; stroke-dashoffset: -50; }
        }
        @keyframes spinner-rotate {
          100% { transform: rotate(360deg); }
        }
      `}</style>
      <svg
        className="h-[19px] w-[19px] shrink-0"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        style={{ animation: "spinner-rotate 4s linear infinite" }}
      >
        <circle
          cx="12" cy="12" r="10"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          style={{ animation: "spinner-draw 1.5s ease-in-out infinite" }}
        />
      </svg>
    </>
  );
}

```

#### ButtonMini.tsx

```tsx
/*
 * ButtonMini — Figma: Design System Foundations > Buttons > Button/Mini
 *
 * 44×44px circular button with icon.
 * Variants: "back" (left arrow) or "add" (plus)
 * Color: "light" (primary/400 bg, white icon) or "dark" (neutral/200 bg, dark icon)
 * Floating: optional shadow
 */

export type ButtonMiniVariant = "back" | "add";
export type ButtonMiniColor = "light" | "dark";

type ButtonMiniProps = {
  variant?: ButtonMiniVariant;
  color?: ButtonMiniColor;
  floating?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

function ArrowIcon() {
  return (
    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true">
      <path d="M7 1L1 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="1" y1="7" x2="17" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <line x1="8" y1="0" x2="8" y2="16" stroke="currentColor" strokeWidth="1.5" />
      <line x1="0" y1="8" x2="16" y2="8" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

const bgClasses: Record<ButtonMiniColor, string> = {
  light: "bg-(--color-primary-400) text-(--color-neutral-100)",
  dark:  "bg-(--color-neutral-200) text-(--color-primary-400)",
};

export function ButtonMini({
  variant = "back",
  color = "light",
  floating = true,
  onClick,
  className = "",
}: ButtonMiniProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "flex items-center justify-center size-[44px] rounded-full cursor-pointer",
        bgClasses[color],
        floating ? "shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {variant === "back" ? <ArrowIcon /> : <PlusIcon />}
    </button>
  );
}

```

#### index.ts

```ts
export { Button } from "./Button";

```

---

### Checkbox

#### Checkbox.tsx

```tsx
/*
 * Checkbox — Figma: Design System Foundations > UI Controls > Checkboxes
 *
 * States: empty, selected (primary/300 fill + white check), inactive (neutral/200 fill + dash), read-only
 * Size: 28×28px, shadow 2px 2px 3px #eaeaea
 */

export type CheckboxState = "empty" | "selected" | "inactive" | "read-only";

type CheckboxProps = {
  state?: CheckboxState;
  label?: string;
  headline?: string;
  className?: string;
};

function CheckIcon({ color = "white" }: { color?: string }) {
  return (
    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden="true">
      <path d="M1 5.5L6 10.5L15 1.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DashIcon() {
  return (
    <svg width="12" height="2" viewBox="0 0 12 2" fill="none" aria-hidden="true">
      <line x1="0" y1="1" x2="12" y2="1" stroke="var(--color-neutral-700)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function Box({ state }: { state: CheckboxState }) {
  const base = "flex items-center justify-center size-[28px] shrink-0 shadow-[2px_2px_3px_0px_#eaeaea]";

  if (state === "selected") {
    return (
      <div className={`${base} bg-(--color-primary-300)`}>
        <CheckIcon />
      </div>
    );
  }

  if (state === "inactive") {
    return (
      <div className={`${base} bg-(--color-neutral-200)`}>
        <DashIcon />
      </div>
    );
  }

  if (state === "read-only") {
    return (
      <div className={`${base} bg-(--color-primary-300) opacity-50`}>
        <CheckIcon />
      </div>
    );
  }

  // empty
  return (
    <div className={`${base} bg-(--color-neutral-100) border border-(--color-neutral-700)/50`} />
  );
}

export function Checkbox({
  state = "empty",
  label,
  headline,
  className = "",
}: CheckboxProps) {
  if (!label && !headline) {
    return <Box state={state} />;
  }

  return (
    <div className={`flex flex-col items-start gap-(--spacing-spacing-8) ${className}`}>
      {headline && (
        <span
          className="text-(--color-neutral-900)"
          style={{
            fontFamily: "var(--font-body-4-family)",
            fontSize: "var(--font-body-4-size)",
            fontWeight: "var(--font-body-4-weight-regular)",
            lineHeight: "var(--font-body-4-line-height)",
            letterSpacing: "var(--font-body-4-letter-spacing)",
          }}
        >
          {headline}
        </span>
      )}
      <div className="flex items-center gap-(--spacing-spacing-16)">
        <Box state={state} />
        {label && (
          <span
            className={state === "inactive" ? "text-(--color-neutral-700)" : "text-(--color-neutral-900)"}
            style={{
              fontFamily: "var(--font-body-4-family)",
              fontSize: "var(--font-body-4-size)",
              fontWeight: "var(--font-body-4-weight-regular)",
              lineHeight: "var(--font-body-4-line-height)",
              letterSpacing: "var(--font-body-4-letter-spacing)",
            }}
          >
            {label}
          </span>
        )}
      </div>
    </div>
  );
}

```

#### index.ts

```ts
export { Checkbox } from "./Checkbox";

```

---

### CloseButton

#### CloseButton.tsx

```tsx
/*
 * CloseButton — Figma: Design System > UI Controls > Close Button
 *
 * 32x32px circular button with an X icon.
 * Used in RoutineCard, PromoModal, Navigation, and other dismissible elements.
 *
 * Colors:
 *   "light" — bg white/80%, icon primary/400 (for use on images/dark backgrounds)
 *   "dark"  — bg transparent, icon primary/400 (for use on light backgrounds)
 */

export type CloseButtonColor = "light" | "dark";

type CloseButtonProps = {
  color?: CloseButtonColor;
  onClick?: () => void;
  className?: string;
};

function XIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path
        d="M1 1L11 11M11 1L1 11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

const bgClasses: Record<CloseButtonColor, string> = {
  light: "bg-(--color-neutral-100)/50",
  dark: "bg-transparent",
};

export function CloseButton({
  color = "dark",
  onClick,
  className = "",
}: CloseButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`size-[32px] rounded-full flex items-center justify-center text-(--color-primary-400) cursor-pointer ${bgClasses[color]} ${className}`}
      aria-label="Close"
    >
      <XIcon />
    </button>
  );
}

```

#### index.ts

```ts
export { CloseButton } from "./CloseButton";
export type { CloseButtonColor } from "./CloseButton";

```

---

### IngredientCard

#### IngredientCard.tsx

```tsx
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

// ─── Ingredient images (served from GitHub Pages) ────────
const IMG_BASE = "https://nina-product-design.github.io/my-design-system/images/ingredients";
const imgHyaluronicAcid = `${IMG_BASE}/hyaluronic.png`;
const imgSeaMoss = `${IMG_BASE}/RED%20ALGAE.png`;
const imgSpirulina = `${IMG_BASE}/agastache.png`;
const imgBiotin = `${IMG_BASE}/Peppermint.png`;
const imgRosehipOil = `${IMG_BASE}/20190723_Ingredients_Argan.png`;
const imgNiacinamide = `${IMG_BASE}/niacinamide.png`;
const imgBakuchiol = `${IMG_BASE}/bakuchiol.png`;
const imgVitaminC = `${IMG_BASE}/Caviar%20Lime%20Extract.png`;
const imgAminoAcids = `${IMG_BASE}/amino-acid.png`;
const imgCastorOil = `${IMG_BASE}/Castor%20Oil.png`;
const imgAcaciaCollagen = `${IMG_BASE}/Babbasu.png`;
const imgAloeVera = `${IMG_BASE}/20190723_Ingredients_Aloe_Vera.png`;
const imgAppleCiderVinegar = `${IMG_BASE}/2019118_Ingredients_Apple_Cider_Vinegar.png`;
const imgCoconutOil = `${IMG_BASE}/Coconut%20Oil.png`;

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

```

#### index.ts

```ts
export { IngredientCard, INGREDIENTS } from "./IngredientCard";
export type { IngredientKey, IngredientCardData } from "./IngredientCard";

```

---

### IngredientCardCarousel

#### IngredientCardCarousel.tsx

```tsx
/*
 * IngredientCardCarousel — Figma: Design System > Ingredient Carousel
 *
 * Horizontally scrollable row of IngredientCards with a section title.
 * Title: Saol Text, 28px, tracking 0.5px, leading 36px, #1f232d.
 * Gap: 23px title→cards, 11px between cards.
 * Padding: 16px horizontal.
 * Overflow: horizontal scroll, hidden scrollbar.
 */

import { typography } from "../../tokens";
import { IngredientCard, type IngredientCardData } from "../IngredientCard";

type IngredientCardCarouselProps = {
  title: string;
  items: IngredientCardData[];
  className?: string;
};

export function IngredientCardCarousel({
  title,
  items,
  className = "",
}: IngredientCardCarouselProps) {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 23,
        padding: "0 16px",
      }}
    >
      {/* Title */}
      <h2
        style={{
          fontFamily: typography.families.title,
          fontWeight: typography.weights.regular,
          fontSize: 28,
          lineHeight: "36px",
          letterSpacing: "0.5px",
          color: "#1f232d",
          margin: 0,
        }}
      >
        {title}
      </h2>

      {/* Scrollable card row */}
      <div
        style={{
          display: "flex",
          gap: 11,
          overflowX: "auto",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {items.map((item) => (
          <IngredientCard
            key={item.name}
            image={item.image}
            name={item.name}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

```

#### index.ts

```ts
export { IngredientCardCarousel } from "./IngredientCardCarousel";

```

---

### InputField

#### InputField.tsx

```tsx
import { typography } from "../../tokens";

/*
 * InputField — Figma: Design System Foundations > Input Fields
 *
 * Shared base:
 *   Width   : 327px (full-width in container)
 *   Height  : 56px
 *   Border  : 1px solid neutral/600 (#eaeaea)
 *   Shadow  : 2px 2px 3px rgba(234,234,234,0.5)
 *   BG      : neutral/100 (white), disabled → neutral/600
 *   Padding : 16px horizontal, 8px vertical
 *
 * Types:
 *   form-field — plain text input
 *   dropdown   — text input with caret icon on right
 *   button     — text input with circular arrow button on right
 *
 * States:
 *   default    — placeholder only, no label
 *   active     — label + value, dark underline
 *   disabled   — gray background, label + value
 *   incomplete — error text (no label), red underline + "*Required" helper
 *   invalid    — error label + value, red underline + "*Invalid format" helper
 *   complete   — label + value, no underline
 */

export type InputFieldType = "form-field" | "dropdown" | "button";

export type InputFieldState =
  | "default"
  | "active"
  | "disabled"
  | "incomplete"
  | "invalid"
  | "complete";

type InputFieldProps = {
  type?: InputFieldType;
  state?: InputFieldState;
  label?: string;
  value?: string;
  helperText?: string;
  className?: string;
};

// ─── State styling ───────────────────────────────────────────────────────────

const hasLabel: Record<InputFieldState, boolean> = {
  default: false,
  active: true,
  disabled: true,
  incomplete: false,
  invalid: true,
  complete: true,
};

const hasUnderline: Record<InputFieldState, boolean> = {
  default: false,
  active: true,
  disabled: false,
  incomplete: true,
  invalid: true,
  complete: false,
};

const hasHelper: Record<InputFieldState, boolean> = {
  default: false,
  active: false,
  disabled: false,
  incomplete: true,
  invalid: true,
  complete: false,
};

export const bgClasses: Record<InputFieldState, string> = {
  default:    "bg-(--color-neutral-100)",
  active:     "bg-(--color-neutral-100)",
  disabled:   "bg-(--color-neutral-600)",
  incomplete: "bg-(--color-neutral-100)",
  invalid:    "bg-(--color-neutral-100)",
  complete:   "bg-(--color-neutral-100)",
};

const underlineClasses: Record<InputFieldState, string> = {
  default:    "",
  active:     "bg-(--color-neutral-900)",
  disabled:   "",
  incomplete: "bg-(--color-error-200)",
  invalid:    "bg-(--color-error-200)",
  complete:   "",
};

const labelColorClasses: Record<InputFieldState, string> = {
  default:    "",
  active:     "text-(--color-neutral-900)",
  disabled:   "text-(--color-neutral-900)",
  incomplete: "",
  invalid:    "text-(--color-error-200)",
  complete:   "text-(--color-neutral-900)",
};

const valueColorClasses: Record<InputFieldState, string> = {
  default:    "text-(--color-neutral-800)",
  active:     "text-(--color-neutral-800)",
  disabled:   "text-(--color-neutral-800)",
  incomplete: "text-(--color-error-200)",
  invalid:    "text-(--color-neutral-800)",
  complete:   "text-(--color-neutral-800)",
};

const defaultValues: Record<InputFieldState, string> = {
  default:    "Default state",
  active:     "Active state",
  disabled:   "Disabled state",
  incomplete: "Error state - Incomplete*",
  invalid:    "Error state – Invalid format",
  complete:   "Complete state",
};

const defaultHelpers: Record<InputFieldState, string> = {
  default:    "",
  active:     "",
  disabled:   "",
  incomplete: "*Required",
  invalid:    "*Invalid format",
  complete:   "",
};

// ─── Token refs for ComponentLibrary ─────────────────────────────────────────

export const stateTokens: Record<
  InputFieldState,
  { bg: string; border: string; label?: string; value: string; underline?: string }
> = {
  default:    { bg: "color/neutral/100", border: "color/neutral/600", value: "color/neutral/800" },
  active:     { bg: "color/neutral/100", border: "color/neutral/600", label: "color/neutral/900", value: "color/neutral/800", underline: "color/neutral/900" },
  disabled:   { bg: "color/neutral/600", border: "color/neutral/600", label: "color/neutral/900", value: "color/neutral/800" },
  incomplete: { bg: "color/neutral/100", border: "color/neutral/600", value: "color/error/200", underline: "color/error/200" },
  invalid:    { bg: "color/neutral/100", border: "color/neutral/600", label: "color/error/200", value: "color/neutral/800", underline: "color/error/200" },
  complete:   { bg: "color/neutral/100", border: "color/neutral/600", label: "color/neutral/900", value: "color/neutral/800" },
};

// ─── Sub-icons ───────────────────────────────────────────────────────────────

function CaretIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className="shrink-0 text-(--color-neutral-800)"
      aria-hidden="true"
    >
      <path d="M5 8L10 13L15 8" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function ArrowButton({ active = false }: { active?: boolean }) {
  return (
    <div
      className={[
        "flex items-center justify-center rounded-full size-[29px] shrink-0",
        active ? "bg-(--color-primary-400)" : "bg-(--color-neutral-600)",
      ].join(" ")}
    >
      <svg width="5" height="10" viewBox="0 0 5 10" fill="none" aria-hidden="true">
        <path d="M0 0L5 5L0 10" fill={active ? "white" : "currentColor"} />
      </svg>
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export function InputField({
  type = "form-field",
  state = "default",
  label = "Label",
  value,
  helperText,
  className = "",
}: InputFieldProps) {
  const showLabel = hasLabel[state];
  const showUnderline = hasUnderline[state];
  const showHelper = hasHelper[state];
  const displayValue = value ?? defaultValues[state];
  const displayHelper = helperText ?? defaultHelpers[state];
  const isError = state === "incomplete" || state === "invalid";

  return (
    <div className={`flex flex-col items-start w-full text-left ${className}`}>
      {/* Field container */}
      <div
        className={[
          "flex flex-col items-start w-full",
          "border border-(--color-neutral-600) shadow-[2px_2px_3px_0px_rgba(234,234,234,0.5)]",
        ].join(" ")}
      >
        {/* Inner content */}
        <div
          className={[
            "flex items-center w-full h-[56px] px-(--spacing-spacing-16) py-(--spacing-spacing-8)",
            bgClasses[state],
          ].join(" ")}
        >
          {/* Text area */}
          <div className="flex flex-col flex-1 min-w-0 gap-[2px]">
            {showLabel && (
              <span
                className={labelColorClasses[state]}
                style={{
                  fontFamily: typography.styles.body5Regular.fontFamily,
                  fontSize: typography.styles.body5Regular.fontSize,
                  fontWeight: typography.styles.body5Regular.fontWeight,
                  lineHeight: typography.styles.body5Regular.lineHeight,
                  letterSpacing: typography.styles.body5Regular.letterSpacing,
                }}
              >
                {isError && state === "invalid" ? `${label}*` : label}
              </span>
            )}
            <span
              className={valueColorClasses[state]}
              style={{
                fontFamily: typography.styles.body3Regular.fontFamily,
                fontSize: typography.styles.body3Regular.fontSize,
                fontWeight: typography.styles.body3Regular.fontWeight,
                lineHeight: typography.styles.body3Regular.lineHeight,
                letterSpacing: typography.styles.body3Regular.letterSpacing,
              }}
            >
              {displayValue}
            </span>
          </div>

          {/* Right accessory */}
          {type === "dropdown" && <CaretIcon />}
          {type === "button" && (
            <ArrowButton active={state === "active" || state === "complete"} />
          )}
        </div>

        {/* Underline */}
        {showUnderline && (
          <div className={`h-[2px] w-full ${underlineClasses[state]}`} />
        )}
      </div>

      {/* Helper text */}
      {showHelper && (
        <span
          className="text-(--color-error-200) px-(--spacing-spacing-16)"
          style={{
            fontFamily: typography.styles.body5Regular.fontFamily,
            fontSize: typography.styles.body5Regular.fontSize,
            fontWeight: typography.styles.body5Regular.fontWeight,
            lineHeight: typography.styles.body5Regular.lineHeight,
            letterSpacing: typography.styles.body5Regular.letterSpacing,
          }}
        >
          {displayHelper}
        </span>
      )}
    </div>
  );
}

```

#### index.ts

```ts
export { InputField } from "./InputField";

```

---

### Logo

#### Logo.tsx

```tsx
/*
 * Logo — Figma: Design System Foundations > Logo
 *
 * The Prose wordmark with registered trademark symbol.
 * SVG uses currentColor so it inherits text color from the parent.
 *
 * Variants:
 *   - "dark"  → color/primary/400 (#323429) — for light backgrounds
 *   - "light" → color/neutral/100 (#ffffff) — for dark backgrounds
 */

type LogoVariant = "dark" | "light";

type LogoProps = {
  variant?: LogoVariant;
  /** Height in pixels — width scales proportionally (aspect ratio ~3.46:1) */
  height?: number;
  className?: string;
};

const variantClasses: Record<LogoVariant, string> = {
  dark: "text-(--color-primary-400)",
  light: "text-(--color-neutral-100)",
};

export function Logo({
  variant = "dark",
  height = 32,
  className = "",
}: LogoProps) {
  return (
    <svg
      viewBox="0 0 428.31 123.89"
      overflow="visible"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ height, width: height * (428.31 / 123.89) }}
      className={`${variantClasses[variant]} ${className}`.trim()}
      aria-label="Prose"
      role="img"
    >
      <g>
        <path
          d="M395.03 43.44L395.01 43.4H395.03C394.89 17.43 381.37 0.86 357.92 0.86C334.47 0.86 319.31 18.26 319.31 43.75C319.31 69.24 334.37 86.64 357.92 86.64C375.65 86.64 388.08 78.26 393.5 62.78L378.73 59C376.05 75.22 368.64 82.4 357.92 82.4C344.29 82.4 335.99 70.92 335.99 43.76C335.99 43.66 335.99 43.56 335.99 43.45H395.02L395.03 43.44ZM357.92 5.1C370.67 5.1 377.34 14.58 378.15 38.59H336.1C337.11 15.13 345.18 5.1 357.92 5.1ZM282.08 37.01L273.53 34.59C262.56 31.52 257.29 26.14 257.29 19.37C257.29 11.51 264.47 5.11 272.2 5.11C282.37 5.11 288.88 11.27 290.82 25.8L304.34 22.34C301.55 8.4 288.17 0.86 272.19 0.86C259.36 0.86 246.04 9.89 246.04 24.16C246.04 35.4 253.67 43.97 268.35 48.16L276.9 50.58C287.39 53.48 295.45 57.71 295.45 66.31C295.45 74.91 287.72 82.39 277.46 82.39C267.2 82.39 258.89 75.3 256.65 58.99L242.55 62.6C245.57 78.11 259.73 86.63 277.46 86.63C295.19 86.63 307.52 75.04 307.52 61.01C307.52 46.98 297.4 41.36 282.07 37L282.08 37.01ZM37.52 0.85C27.88 0.85 20.39 5.58 15.35 9.97V2.61H0V123.89H15.35V77.52C20.39 81.91 27.87 86.64 37.52 86.64C60.8 86.64 75.13 69.24 75.13 43.75C75.13 18.26 60.8 0.85 37.52 0.85ZM36.92 81.64C28.82 81.64 19.65 76.69 15.35 70.28V17.22C19.65 10.81 28.88 5.85 36.92 5.85C49.88 5.85 58.35 16.58 58.35 43.74C58.35 70.9 49.89 81.63 36.92 81.63V81.64ZM147.65 15.08C146.01 15.08 144.38 14.19 142.27 12.23L136.69 7.05C131.11 1.87 128.66 0.77 125.17 0.77C121.68 0.77 118.18 3.04 114.07 7.25C110.88 10.52 108.5 13.25 105.91 16.93V2.61H90.56V84.88H105.91V23.77C110.64 17.34 115.27 12.49 120.22 12.49C123.1 12.49 124.57 13.68 128.06 16.91L133.64 22.09C136.91 25.13 138.5 26.63 141.8 26.63C146.12 26.63 151.58 18.12 153.38 14.42L151.49 12.98C150.17 14.46 148.83 15.09 147.65 15.09V15.08ZM193.36 0.85C169.81 0.85 154.75 18.25 154.75 43.74C154.75 69.23 169.81 86.63 193.36 86.63C216.91 86.63 231.97 69.23 231.97 43.74C231.97 18.25 216.91 0.85 193.36 0.85ZM193.36 82.39C179.68 82.39 171.25 71.01 171.25 43.75C171.25 16.49 179.68 5.11 193.36 5.11C207.04 5.11 215.37 16.49 215.37 43.75C215.37 71.01 207.04 82.39 193.36 82.39Z"
          fill="currentColor"
        />
        <path
          d="M417.05 0C423.27 0 428.31 5.03 428.31 11.26C428.31 17.49 423.28 22.52 417.05 22.52C410.82 22.52 405.79 17.49 405.79 11.26C405.79 5.03 410.82 0 417.05 0ZM417.05 20.51C422.18 20.51 426.28 16.38 426.28 11.25C426.28 6.12 422.18 1.99 417.05 1.99C411.92 1.99 407.82 6.12 407.82 11.25C407.82 16.38 411.92 20.51 417.05 20.51ZM420.12 17.79L416.87 12.25H414.84V17.79H412.71V4.72H418.03C420.56 4.72 422.1 6.13 422.1 8.5C422.1 10.5 421.04 11.78 419.19 12.16L422.5 17.79H420.12ZM414.83 10.2H418.02C419.15 10.2 419.9 9.64 419.9 8.54C419.9 7.44 419.15 6.85 418.02 6.85H414.83V10.2Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

```

#### index.ts

```ts
export { Logo } from "./Logo";

```

---

### Navigation

#### Navigation.tsx

```tsx
/*
 * Navigation — Figma: Design System > Navigation
 *
 * Two-part header: SitewideBanner (40px) + Nav bar (56px) = 96px total
 *
 * Sizes: "desktop" | "mobile"
 * States:
 *   "default"      — full nav links + icons (Guest, empty cart)
 *   "items-added"  — same as default but cart has accent dot badge
 *   "consultation" — simplified: ← Back | Logo | Exit
 *   "checkout"     — simplified: ← Arrow | Logo
 *
 * Icons from images/icons/Nav/ (Account.svg, Cart.svg, Hamburger.svg)
 * Close (X) and dropdown caret drawn inline.
 */

import { typography } from "../../tokens";
import { SitewideBanner, type SitewideBannerState } from "../SitewideBanner/SitewideBanner";
import { Logo } from "../Logo/Logo";

export type NavigationSize = "desktop" | "mobile";
export type NavigationState = "default" | "items-added" | "consultation" | "checkout";

type NavigationProps = {
  size?: NavigationSize;
  state?: NavigationState;
  bannerState?: SitewideBannerState;
  bannerMessage?: string;
  userName?: string;
  className?: string;
};

// ─── Icons ──────────────────────────────────────────────────────────────────

function AccountIcon() {
  return (
    <svg width="21" height="22" viewBox="0 0 21 22" fill="none" aria-hidden="true">
      <path
        d="M10.5 11.2063C13.3322 11.2063 15.8882 12.3063 17.8224 14.1625C19.6875 16.0188 20.9309 18.4937 21 21.3125V22H20.3092H0.690789H0V21.3125C0.0690789 18.4937 1.3125 15.95 3.17763 14.1625C5.04276 12.3063 7.66776 11.2063 10.5 11.2063ZM10.5 0C13.3322 0 15.6809 2.26875 15.6809 5.15625C15.6809 7.975 13.3322 10.3125 10.5 10.3125C7.66776 10.3125 5.31908 8.04375 5.31908 5.15625C5.31908 2.3375 7.59868 0 10.5 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg width="25" height="22" viewBox="0 0 25 22" fill="none" aria-hidden="true">
      <path d="M15.0778 22H1.11111L0 6.26666H16.1889L15.0778 22Z" fill="currentColor" />
      <path
        d="M8.10018 0C5.43351 0 3.26685 2.16667 3.26685 4.82222V5.26667H5.3224V4.82222C5.3224 3.28889 6.56685 2.05556 8.08907 2.05556C9.61129 2.05556 10.8557 3.3 10.8557 4.82222V5.26667H12.9113V4.82222C12.9224 2.16667 10.7557 0 8.10018 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

function HamburgerIcon() {
  return (
    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" aria-hidden="true">
      <line y1="1" x2="20" y2="1" stroke="currentColor" strokeWidth="2" />
      <line y1="9" x2="20" y2="9" stroke="currentColor" strokeWidth="2" />
      <line y1="17" x2="20" y2="17" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" aria-hidden="true">
      <path d="M1 1L16 16M16 1L1 16" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function DropdownCaret() {
  return (
    <svg width="8" height="5" viewBox="0 0 8 5" fill="none" aria-hidden="true">
      <path d="M0.5 0.5L4 4L7.5 0.5" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

function BackArrowIcon() {
  return (
    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true">
      <path d="M7 1L1 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="1" y1="7" x2="17" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// ─── Cart with badge ────────────────────────────────────────────────────────

function CartWithBadge({ hasItems }: { hasItems: boolean }) {
  return (
    <div className="relative">
      <CartIcon />
      {hasItems && (
        <div className="absolute -top-[2px] -right-[2px] size-[16px] rounded-full bg-(--color-accent-200) flex items-center justify-center">
          <span className="sr-only">Items in cart</span>
        </div>
      )}
    </div>
  );
}

// ─── Nav link text ──────────────────────────────────────────────────────────

const navLinkStyle = {
  fontFamily: typography.styles.body4Regular.fontFamily,
  fontSize: typography.styles.body4Regular.fontSize,
  fontWeight: typography.styles.body4Regular.fontWeight,
  lineHeight: typography.styles.body4Regular.lineHeight,
  letterSpacing: typography.styles.body4Regular.letterSpacing,
};

function NavLink({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-(--color-primary-400) whitespace-nowrap cursor-pointer" style={navLinkStyle}>
      {children}
    </span>
  );
}

// ─── Desktop nav links ──────────────────────────────────────────────────────

const desktopLinks = [
  "Haircare",
  "Skincare",
  "Accessories",
  "Our Ingredients",
  "Our Story",
  "Reviews",
  "Gift Prose",
  "Subscribe & Save",
];

function DesktopNavLinks() {
  return (
    <div className="flex items-center justify-between flex-1 min-w-0">
      <Logo variant="dark" height={22} />
      {desktopLinks.map((link) =>
        link === "Our Story" ? (
          <div key={link} className="flex items-center gap-1 cursor-pointer">
            <NavLink>{link}</NavLink>
            <DropdownCaret />
          </div>
        ) : (
          <NavLink key={link}>{link}</NavLink>
        )
      )}
    </div>
  );
}

// ─── Desktop icons ──────────────────────────────────────────────────────────

function DesktopIcons({ hasItems, userName }: { hasItems: boolean; userName?: string }) {
  return (
    <div className="flex items-center gap-(--spacing-spacing-32) text-(--color-primary-400)">
      <CartWithBadge hasItems={hasItems} />
      <div className="flex items-center gap-(--spacing-spacing-8)">
        <AccountIcon />
        {userName && (
          <span className="text-(--color-primary-400) whitespace-nowrap" style={navLinkStyle}>
            {userName}
          </span>
        )}
      </div>
    </div>
  );
}

// ─── Mobile icons ───────────────────────────────────────────────────────────

function MobileIcons({ hasItems }: { hasItems: boolean }) {
  return (
    <div className="flex items-center gap-(--spacing-spacing-16) text-(--color-primary-400)">
      <CartWithBadge hasItems={hasItems} />
      <AccountIcon />
    </div>
  );
}

// ─── Component ──────────────────────────────────────────────────────────────

export function Navigation({
  size = "desktop",
  state = "default",
  bannerState = "banner",
  bannerMessage,
  userName,
  className = "",
}: NavigationProps) {
  const hasItems = state === "items-added";
  const isSimplified = state === "consultation" || state === "checkout";
  const isDesktop = size === "desktop";

  const checkoutBanner = "Love your first order (or it's on us)";
  const resolvedBannerMessage =
    bannerMessage ?? (state === "checkout" ? checkoutBanner : undefined);

  // ── Desktop ─────────────────────────────────────────────────────────────
  if (isDesktop) {
    return (
      <div className={`flex flex-col w-full ${className}`}>
        <SitewideBanner state={bannerState} message={resolvedBannerMessage} />

        <div className="flex items-center justify-between w-full h-[56px] px-(--spacing-spacing-32) py-[17px] bg-(--color-neutral-100)">
          {isSimplified ? (
            <>
              {/* Left */}
              <div className="flex items-center text-(--color-primary-400)">
                {state === "consultation" ? (
                  <span className="cursor-pointer" style={navLinkStyle}>
                    ← Back
                  </span>
                ) : (
                  <span className="cursor-pointer text-(--color-primary-400)">
                    <BackArrowIcon />
                  </span>
                )}
              </div>
              {/* Center */}
              <Logo variant="dark" height={22} />
              {/* Right */}
              {state === "consultation" ? (
                <span className="text-(--color-primary-400) cursor-pointer" style={navLinkStyle}>
                  Exit
                </span>
              ) : (
                <div className="w-[40px]" />
              )}
            </>
          ) : (
            <>
              <DesktopNavLinks />
              <div className="ml-(--spacing-spacing-32)">
                <DesktopIcons hasItems={hasItems} userName={userName} />
              </div>
            </>
          )}
        </div>
      </div>
    );
  }

  // ── Mobile ──────────────────────────────────────────────────────────────
  return (
    <div className={`flex flex-col w-full ${className}`}>
      <SitewideBanner state={bannerState} message={resolvedBannerMessage} />

      <div className="flex items-center justify-between w-full h-[55px] px-(--spacing-spacing-24) bg-(--color-neutral-100)">
        {isSimplified ? (
          <>
            {/* Left */}
            <div className="flex items-center text-(--color-primary-400)">
              {state === "consultation" ? (
                <span className="cursor-pointer" style={navLinkStyle}>
                  ← Back
                </span>
              ) : (
                <span className="cursor-pointer text-(--color-primary-400)">
                  <BackArrowIcon />
                </span>
              )}
            </div>
            {/* Center */}
            <Logo variant="dark" height={18} />
            {/* Right */}
            {state === "consultation" ? (
              <span className="text-(--color-primary-400) cursor-pointer" style={navLinkStyle}>
                Exit
              </span>
            ) : (
              <div className="w-[40px]" />
            )}
          </>
        ) : (
          <>
            {/* Left: hamburger */}
            <span className="text-(--color-primary-400) cursor-pointer">
              <HamburgerIcon />
            </span>
            {/* Center + Right: logo and icons */}
            <div className="flex items-center justify-between flex-1 ml-(--spacing-spacing-24)">
              <Logo variant="dark" height={18} />
              <MobileIcons hasItems={hasItems} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

```

#### index.ts

```ts
export { Navigation } from "./Navigation";

```

---

### OfferBadge

#### OfferBadge.tsx

```tsx
/*
 * OfferBadge — Figma: Design System > Offer Badge / Post Purchase Module
 *
 * Circular promotional badges for offer callouts.
 * Three offer types: 50% OFF, FREE $65 VALUE (SSS), GET $20 (RAF)
 * Two colors: yellow (highlight/200 bg, neutral/900 text), green (primary/400 bg, highlight/200 text)
 * Two sizes: desktop (136px), mobile (88px)
 * Font: Simplon Mono — Medium for primary text, Light for secondary text
 */

import { typography } from "../../tokens";

export type OfferBadgeColor = "yellow" | "green";
export type OfferBadgeSize = "desktop" | "mobile";
export type OfferBadgeOffer = "50-off" | "sss" | "raf";

type OfferBadgeProps = {
  offer: OfferBadgeOffer;
  color?: OfferBadgeColor;
  size?: OfferBadgeSize;
  className?: string;
};

export function OfferBadge({
  offer,
  color = "yellow",
  size = "desktop",
  className = "",
}: OfferBadgeProps) {
  const isDesktop = size === "desktop";
  const dimension = isDesktop ? 136 : 88;

  const bg =
    color === "yellow"
      ? "var(--color-highlight-200)"
      : "var(--color-primary-400)";
  const fg =
    color === "yellow"
      ? "var(--color-neutral-900)"
      : "var(--color-highlight-200)";

  const primaryFontSize = isDesktop ? "32px" : "20px";
  const secondaryFontSize = isDesktop ? "16px" : "10px";

  return (
    <div
      className={className}
      style={{
        width: dimension,
        height: dimension,
        borderRadius: "50%",
        backgroundColor: bg,
        color: fg,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        textTransform: "uppercase",
        letterSpacing: "1px",
        fontFamily: typography.families.label,
      }}
    >
      {offer === "50-off" && (
        <div
          style={{
            fontWeight: typography.weights.medium,
            fontSize: primaryFontSize,
            lineHeight: 1,
          }}
        >
          <div>50%</div>
          <div>OFF</div>
        </div>
      )}

      {offer === "sss" && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: isDesktop ? "8px" : "4px",
          }}
        >
          <div
            style={{
              fontWeight: typography.weights.medium,
              fontSize: primaryFontSize,
              lineHeight: 1,
            }}
          >
            FREE
          </div>
          <div
            style={{
              fontWeight: typography.weights.light,
              fontSize: secondaryFontSize,
              lineHeight: 1,
            }}
          >
            $65 VALUE
          </div>
        </div>
      )}

      {offer === "raf" && (
        <div
          style={{
            fontWeight: typography.weights.medium,
            fontSize: primaryFontSize,
            lineHeight: 1,
          }}
        >
          <div>GET</div>
          <div>$20</div>
        </div>
      )}
    </div>
  );
}

```

#### index.ts

```ts
export { OfferBadge } from "./OfferBadge";
export type { OfferBadgeColor, OfferBadgeSize, OfferBadgeOffer } from "./OfferBadge";

```

---

### ProductCard

#### ProductCard.tsx

```tsx
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

// ─── Images (served from GitHub Pages) ───────────────────
const IMG_BASE = "https://nina-product-design.github.io/my-design-system/images/products";
const imgCardBg = `${IMG_BASE}/bg.png`;

// ─── Product images ──────────────────────────────────────
const imgShampoo = `${IMG_BASE}/Hair/Prose-custom-shampoo.png`;
const imgConditioner = `${IMG_BASE}/Hair/Prose-custom-conditioner.png`;
const imgScalpMask = `${IMG_BASE}/Hair/Prose-scalp-mask-front-background.png`;
const imgCurlCream = `${IMG_BASE}/Hair/Prose-curl-cream.png`;
const imgLeaveInPump = `${IMG_BASE}/Hair/Prose-leave-in-conditioner-pump-front-background.png`;
const imgDryShampoo = `${IMG_BASE}/Hair/Prose-dry-shampoo-front-background.png`;
const imgHairMask = `${IMG_BASE}/Hair/Prose-hair-mask-front-background.png`;
const imgHairOil = `${IMG_BASE}/Hair/Prose-hair-oil-front-background.png`;
const imgScalpSerum = `${IMG_BASE}/Hair/Prose-scalp-serum-front-background.png`;
const imgStylingGel = `${IMG_BASE}/Hair/Prose-styling-gel-front-background.png`;
const imgRootSource = `${IMG_BASE}/Hair/Prose-root-source-background-1.png`;

// ─── Skincare images ─────────────────────────────────────
const imgCleanser = `${IMG_BASE}/Skin/Prose-cleanser-front-background.png`;
const imgMoisturizer = `${IMG_BASE}/Skin/Prose-moisturizer-front-background.png`;
const imgSerum = `${IMG_BASE}/Skin/Prose-serum-front-background.png`;

// ─── Accessory images ────────────────────────────────────
const imgBoarBrush = `${IMG_BASE}/Accessories/Prose-Brush-Boar-BG.png`;
const imgNylonBrush = `${IMG_BASE}/Accessories/Prose-Brush-Boar-Nylon-BG.png`;
const imgMetalTipBrush = `${IMG_BASE}/Accessories/Prose-Brush-Metal-Tip-BG.png`;
const imgCandleArcadia = `${IMG_BASE}/Accessories/Prose-Candle-Arcadia-Front-BG.png`;
const imgCandleCorsica = `${IMG_BASE}/Accessories/Prose-Candle-Corsica-Front-BG.png`;
const imgCandlePrelude = `${IMG_BASE}/Accessories/Prose-Candle-Prelude-Front-BG.png`;
const imgHairTowel = `${IMG_BASE}/Accessories/Prose-Hair-Towel-BG.png`;

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

```

#### index.ts

```ts
export { ProductCard, HAIRCARE_PRODUCTS, ACCESSORY_PRODUCTS, SKINCARE_PRODUCTS } from "./ProductCard";
export type { HaircareProduct, AccessoryProduct, SkincareProduct, ProductCardData } from "./ProductCard";

```

---

### ProductCardCarousel

#### ProductCardCarousel.tsx

```tsx
/*
 * ProductCardCarousel — Figma: Design System > Product Card Carousel
 *
 * Horizontally scrollable row of ProductCards with a section title.
 * Title: Saol Text, 28px, tracking 0.5px, leading 36px, #1f232d.
 * Gap: 23px title→cards, 12px between cards.
 * Padding: 16px horizontal.
 * Overflow: horizontal scroll, hidden scrollbar.
 */

import { typography } from "../../tokens";
import { ProductCard } from "../ProductCard";

export type ProductCardItem = {
  image: string;
  name: string;
  price: string;
  badge?: string;
};

type ProductCardCarouselProps = {
  title: string;
  items: ProductCardItem[];
  className?: string;
};

export function ProductCardCarousel({
  title,
  items,
  className = "",
}: ProductCardCarouselProps) {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 23,
        padding: "0 16px",
      }}
    >
      {/* Title */}
      <h2
        style={{
          fontFamily: typography.families.title,
          fontWeight: typography.weights.regular,
          fontSize: 28,
          lineHeight: "36px",
          letterSpacing: "0.5px",
          color: "#1f232d",
          margin: 0,
        }}
      >
        {title}
      </h2>

      {/* Scrollable card row */}
      <div
        style={{
          display: "flex",
          gap: 12,
          overflowX: "auto",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {items.map((item) => (
          <ProductCard
            key={item.name}
            image={item.image}
            name={item.name}
            price={item.price}
            badge={item.badge}
          />
        ))}
      </div>
    </div>
  );
}

```

#### index.ts

```ts
export { ProductCardCarousel } from "./ProductCardCarousel";
export type { ProductCardItem } from "./ProductCardCarousel";

```

---

### ProductTag

#### ProductTag.tsx

```tsx
/*
 * ProductTag — Figma: Design System > Product Tag
 *
 * Small overlay badge used on product images (e.g. RoutineCard).
 * Semi-transparent white background with body/5 regular text.
 *
 * Dimensions: auto-width, px-8 py-4px, radius-4.
 * Background: white/50%.
 * Text: body/5 regular (12px), primary/300.
 */

import { typography } from "../../tokens";

type ProductTagProps = {
  label?: string;
  className?: string;
};

export function ProductTag({
  label = "Recommended",
  className = "",
}: ProductTagProps) {
  return (
    <div className={`bg-(--color-neutral-100)/50 px-(--spacing-spacing-8) py-[4px] rounded-(--radius-radius-4) ${className}`}>
      <span
        className="text-(--color-primary-300) whitespace-nowrap"
        style={{
          fontFamily: typography.styles.body5Regular.fontFamily,
          fontSize: typography.styles.body5Regular.fontSize,
          fontWeight: typography.styles.body5Regular.fontWeight,
          lineHeight: typography.styles.body5Regular.lineHeight,
          letterSpacing: typography.styles.body5Regular.letterSpacing,
        }}
      >
        {label}
      </span>
    </div>
  );
}

```

#### index.ts

```ts
export { ProductTag } from "./ProductTag";

```

---

### ProgressBar

#### ProgressBar.tsx

```tsx
/*
 * ProgressBar — Figma: Design System > Progress Bars
 *
 * Horizontal step progress indicator for consultation and R&R flows.
 * Track BG: neutral/600 (#eaeaea). Fill: secondary/200 (#a2c6d1).
 * Font: Simplon Mono Regular, 10px, tracking 0.8px, uppercase, centered.
 * Text: active = neutral/900, completed = neutral/800, upcoming = neutral/700.
 * Desktop: 1440px × 29px. Mobile: 375px × 29px.
 * Dividers: 1px vertical lines at each step boundary.
 */

import { typography } from "../../tokens";

export type ProgressBarSize = "desktop" | "mobile";

type ProgressBarProps = {
  steps: string[];
  activeStep: number;
  size?: ProgressBarSize;
  className?: string;
};

// ─── Predefined step configurations ──────────────────────
export const HAIR_RR_STEPS = ["OVERALL", "SCALP", "HAIR", "PRODUCTS", "FRAGRANCE"];
export const SKIN_RR_STEPS = ["OVERALL", "SKIN", "PRODUCTS", "FRAGRANCE"];
export const HAIR_CONSULTATION_STEPS = ["HAIR & SCALP", "TREATMENTS", "LIFESTYLE", "PREFERENCES"];
export const SKIN_CONSULTATION_STEPS = ["LIFESTYLE", "MY SKIN", "PREFERENCES"];

export function ProgressBar({
  steps,
  activeStep,
  size = "desktop",
  className = "",
}: ProgressBarProps) {
  const isDesktop = size === "desktop";
  const barHeight = 29;
  const fillPercent = Math.min(
    ((activeStep + 0.5) / steps.length) * 100,
    100,
  );

  const dividerStyle: React.CSSProperties = {
    width: 1,
    alignSelf: "stretch",
    backgroundColor: "rgba(0, 0, 0, 0.06)",
    flexShrink: 0,
  };

  return (
    <div
      className={className}
      style={{
        position: "relative",
        width: isDesktop ? 1440 : 375,
        height: barHeight,
        backgroundColor: "var(--color-neutral-600)",
        overflow: "hidden",
      }}
    >
      {/* Fill */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          right: `${100 - fillPercent}%`,
          backgroundColor: "var(--color-secondary-200)",
        }}
      />

      {/* Labels + dividers */}
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          height: "100%",
          fontFamily: typography.families.label,
          fontWeight: typography.weights.regular,
          fontSize: 10,
          lineHeight: 1.2,
          letterSpacing: "0.8px",
          textTransform: "uppercase",
          textAlign: "center",
        }}
      >
        <div style={dividerStyle} />
        {steps.map((step, i) => (
          <div key={step} style={{ display: "contents" }}>
            <div
              style={{
                flex: 1,
                color:
                  i < activeStep
                    ? "var(--color-neutral-800)"
                    : i === activeStep
                      ? "var(--color-neutral-900)"
                      : "var(--color-neutral-700)",
              }}
            >
              {step}
            </div>
            <div style={dividerStyle} />
          </div>
        ))}
      </div>
    </div>
  );
}

```

#### index.ts

```ts
export { ProgressBar, HAIR_RR_STEPS, SKIN_RR_STEPS, HAIR_CONSULTATION_STEPS, SKIN_CONSULTATION_STEPS } from "./ProgressBar";
export type { ProgressBarSize } from "./ProgressBar";

```

---

### PromoModal

#### PromoModal.tsx

```tsx
/*
 * OfferModal — Figma: Design System > Promo modules > OfferModal
 *
 * Promotional overlay modal with hero image, promo badge, and offer content.
 *
 * Sizes: "desktop" (556px) | "mobile" (375px)
 * Offers: "hc" (60% off haircare) | "sss" (Starter Set) | "sk50" (50% off skincare) | "hc-no-image"
 * Types: "standard" (CTA only) | "email" (input + CTA) | "no-cta" (info only)
 *
 * Image: product photo with PromoBadge (top-left) and close button (top-right)
 * Eyebrow: label-2 regular (12px Simplon Mono) with highlight-200 underline bar
 * Headline: H3 (32px Saol Text, weight 300)
 * Subhead: body-4 regular (14px) with bold segments
 * Disclaimer: body-6 regular (10px), neutral-800
 */

import { typography } from "../../tokens";
import { Button } from "../Button/Button";

export type OfferModalSize = "desktop" | "mobile";
export type OfferModalOffer = "hc" | "sss" | "sk50" | "hc-no-image";
export type OfferModalType = "standard" | "email" | "no-cta";

type OfferModalProps = {
  size?: OfferModalSize;
  offer?: OfferModalOffer;
  type?: OfferModalType;
  /** Override the default offer image. Each offer has a default image. */
  image?: string;
  onClose?: () => void;
  className?: string;
};

// Default images per offer (relative to vite base path)
const defaultImages: Record<string, string> = {
  hc: "/my-design-system/images/pop-up modal/Image.png",
  sss: "/my-design-system/images/pop-up modal/03_GWP_MINI_SKINCARE_SET_B_415 1.png",
  sk50: "/my-design-system/images/pop-up modal/SHOT-2-MAIN_3897PROSE_B_ADOBERGB.png",
};

// ─── Offer content ──────────────────────────────────────────────────────────

type OfferContent = {
  eyebrow: string;
  badge: string;
  headline: string;
  subhead: React.ReactNode;
  disclaimerStandard: string;
  disclaimerEmail: React.ReactNode;
};

const offerContent: Record<string, OfferContent> = {
  hc: {
    eyebrow: "FIRST ORDER EXCLUSIVE",
    badge: "60%\noff",
    headline: "Get 60% off + a free Midi Claw Clip",
    subhead: (
      <>
        Subscribe to any 3+ haircare products to unlock your{" "}
        <span className="font-medium">exclusive welcome offer</span>.* Limited time only!
      </>
    ),
    disclaimerStandard: "See the full promotion terms and conditions here.",
    disclaimerEmail: (
      <>
        By submitting your email address, you agree to receive marketing emails from Prose.
        You also acknowledge and agree to our <span className="underline">Terms</span> and
        confirm that you have read and understand our{" "}
        <span className="underline">Privacy Policy</span>. *Free gift when you subscribe to
        3+ haircare products. See the full promotion terms and conditions{" "}
        <span className="underline">here</span>.
      </>
    ),
  },
  sss: {
    eyebrow: "EXCLUSIVE TRIAL OFFER",
    badge: "$65\nvalue",
    headline: "Claim your Custom\nSkincare Starter Set",
    subhead: (
      <>
        Get a <span className="font-medium">DELUXE Starter Set ($65 value)</span> when you
        subscribe to skincare.
      </>
    ),
    disclaimerStandard: "See the full promotion terms and conditions here.",
    disclaimerEmail: (
      <>
        By submitting your email address, you agree to receive marketing emails from Prose.
        You also acknowledge and agree to our <span className="underline">Terms</span> and
        confirm that you have read and understand our{" "}
        <span className="underline">Privacy Policy</span>. See the full promotion terms and
        conditions <span className="underline">here</span>.
      </>
    ),
  },
  sk50: {
    eyebrow: "FIRST ORDER EXCLUSIVE",
    badge: "50%\noff",
    headline: "Get 50% off\ncustom skincare",
    subhead: "Subscribe to unlock your exclusive welcome offer.",
    disclaimerStandard: "See the full promotion terms and conditions here.",
    disclaimerEmail: null as unknown as React.ReactNode,
  },
  "hc-no-image": {
    eyebrow: "FIRST ORDER EXCLUSIVE",
    badge: "",
    headline: "Get 50% off\ncustom skincare",
    subhead: "Subscribe to unlock your exclusive welcome offer.",
    disclaimerStandard: "See the full promotion terms and conditions here.",
    disclaimerEmail: null as unknown as React.ReactNode,
  },
};

// ─── Sub-components ─────────────────────────────────────────────────────────

function CloseButton({ onClose }: { onClose?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClose}
      className="flex items-center justify-center size-[32px] rounded-full cursor-pointer shrink-0 bg-white/50"
    >
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
        <path d="M1 1L11 11M11 1L1 11" stroke="var(--color-primary-400)" strokeWidth="1.2" />
      </svg>
    </button>
  );
}

function PromoBadge({
  text,
  size,
}: {
  text: string;
  size: "desktop" | "mobile";
}) {
  const badgeSize = size === "desktop" ? "size-[128px]" : "size-[86px]";
  const fontSize = size === "desktop" ? "text-[32px]" : "text-[20px]";

  return (
    <div
      className={`flex flex-col items-center justify-center ${badgeSize} rounded-full bg-(--color-highlight-200)`}
    >
      <span
        className={`text-(--color-primary-400) ${fontSize} text-center uppercase leading-[1.2] whitespace-pre-line`}
        style={{
          fontFamily: "var(--font-label-2-family)",
          fontWeight: 500,
        }}
      >
        {text}
      </span>
    </div>
  );
}

function Eyebrow({ text }: { text: string }) {
  return (
    <div className="flex flex-col items-center relative">
      <span
        className="text-(--color-primary-400) uppercase text-center relative z-10"
        style={{
          fontFamily: typography.styles.label2Regular.fontFamily,
          fontSize: typography.styles.label2Regular.fontSize,
          fontWeight: typography.styles.label2Regular.fontWeight,
          lineHeight: typography.styles.label2Regular.lineHeight,
          letterSpacing: typography.styles.label2Regular.letterSpacing,
        }}
      >
        {text}
      </span>
      <div className="h-[10px] w-full bg-(--color-highlight-200) -mt-[10px]" />
    </div>
  );
}

// ─── Component ──────────────────────────────────────────────────────────────

export function PromoModal({
  size = "desktop",
  offer = "hc",
  type = "standard",
  image,
  onClose,
  className = "",
}: OfferModalProps) {
  const isDesktop = size === "desktop";
  const hasImage = offer !== "hc-no-image";
  const resolvedImage = image ?? defaultImages[offer] ?? "";
  const content = offerContent[offer] ?? offerContent.hc;
  const showCta = type !== "no-cta";
  const showEmail = type === "email";

  const containerWidth = isDesktop ? "w-[556px]" : "w-[375px]";
  const imageHeight = isDesktop ? "h-[350px]" : "h-[236px]";
  const badgeOffset = isDesktop ? "top-[20px] left-[20px]" : "top-[13px] left-[12px]";
  const closeOffset = isDesktop ? "top-[20px] right-[20px]" : "top-[12px] right-[12px]";
  const contentPadding = isDesktop
    ? "px-[48px] py-[48px]"
    : "px-(--spacing-spacing-24) py-(--spacing-spacing-48)";

  return (
    <div
      className={`flex flex-col items-center rounded-(--radius-radius-10) overflow-hidden ${containerWidth} ${className}`}
    >
      {/* ── Image + Badge + Close ─────────────────────────────── */}
      {hasImage && resolvedImage && (
        <div className={`relative w-full ${imageHeight}`}>
          <img
            src={resolvedImage}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Promo badge */}
          {content.badge && (
            <div className={`absolute ${badgeOffset}`}>
              <PromoBadge text={content.badge} size={size} />
            </div>
          )}
          {/* Close button */}
          <div className={`absolute ${closeOffset}`}>
            <CloseButton onClose={onClose} />
          </div>
        </div>
      )}

      {/* ── Content area ──────────────────────────────────────── */}
      <div
        className={`relative flex flex-col items-center gap-(--spacing-spacing-24) w-full bg-(--color-neutral-200) ${contentPadding} ${
          !hasImage ? "pt-[24px]" : ""
        }`}
      >
        {/* Close button (no-image variant) */}
        {!hasImage && (
          <div className="absolute top-[12px] right-[12px]">
            <CloseButton onClose={onClose} />
          </div>
        )}

        {/* Text content */}
        <div className="flex flex-col items-center gap-(--spacing-spacing-12) w-full">
          {/* Eyebrow */}
          <Eyebrow text={content.eyebrow} />

          {/* Headline */}
          <h3
            className="text-(--color-neutral-900) text-center w-full whitespace-pre-line"
            style={{
              fontFamily: "var(--font-heading-h3-family)",
              fontSize: "var(--font-heading-h3-size)",
              fontWeight: "var(--font-heading-h3-weight)",
              lineHeight: "var(--font-heading-h3-line-height)",
              letterSpacing: "var(--font-heading-h3-letter-spacing)",
            }}
          >
            {content.headline}
          </h3>

          {/* Subhead */}
          <p
            className="text-(--color-primary-400) text-center w-full"
            style={{
              fontFamily: typography.styles.body4Regular.fontFamily,
              fontSize: typography.styles.body4Regular.fontSize,
              fontWeight: typography.styles.body4Regular.fontWeight,
              lineHeight: typography.styles.body4Regular.lineHeight,
              letterSpacing: typography.styles.body4Regular.letterSpacing,
            }}
          >
            {content.subhead}
          </p>
        </div>

        {/* Email input */}
        {showEmail && (
          <div className={`flex flex-col items-start w-full ${isDesktop ? "max-w-[390px]" : ""} h-[56px] border border-(--color-neutral-600) shadow-[2px_2px_3px_0px_#eaeaea]`}>
            <div className="flex items-center w-full h-[56px] px-(--spacing-spacing-16) py-(--spacing-spacing-8) bg-(--color-neutral-100)">
              <span
                className="text-(--color-neutral-800)"
                style={{
                  fontFamily: typography.styles.body3Regular.fontFamily,
                  fontSize: typography.styles.body3Regular.fontSize,
                  fontWeight: typography.styles.body3Regular.fontWeight,
                  lineHeight: typography.styles.body3Regular.lineHeight,
                  letterSpacing: typography.styles.body3Regular.letterSpacing,
                }}
              >
                Enter email address
              </span>
            </div>
          </div>
        )}

        {/* CTA button */}
        {showCta && (
          <Button variant="primary-light" size={isDesktop ? "fixed" : "fixed"}>
            {showEmail ? "Unlock offer" : "Get your formula"}
          </Button>
        )}

        {/* Disclaimer */}
        <p
          className={`text-(--color-neutral-800) text-center ${isDesktop ? "w-[469px]" : "w-[300px]"}`}
          style={{
            fontFamily: typography.styles.body6Regular.fontFamily,
            fontSize: typography.styles.body6Regular.fontSize,
            fontWeight: typography.styles.body6Regular.fontWeight,
            lineHeight: typography.styles.body6Regular.lineHeight,
            letterSpacing: typography.styles.body6Regular.letterSpacing,
          }}
        >
          {showEmail ? content.disclaimerEmail : content.disclaimerStandard}
        </p>
      </div>
    </div>
  );
}

```

#### index.ts

```ts
export { PromoModal } from "./PromoModal";

```

---

### Radio

#### Radio.tsx

```tsx
/*
 * Radio — Figma: Design System Foundations > UI Controls > Radio Buttons
 *
 * Sizes: small (20px outer, 15px inner), large (24px outer, 18px inner)
 * States: empty (neutral/700 ring), selected (primary/400 ring + dot), disabled (neutral/700 ring + dot)
 */

export type RadioState = "empty" | "selected" | "disabled";
export type RadioSize = "small" | "large";

type RadioProps = {
  state?: RadioState;
  size?: RadioSize;
  className?: string;
};

const sizeMap: Record<RadioSize, number> = { small: 20, large: 24 };
const dotMap: Record<RadioSize, number> = { small: 7.5, large: 9 };

export function Radio({ state = "empty", size = "small", className = "" }: RadioProps) {
  const s = sizeMap[size];
  const dotR = dotMap[size];

  const ringColor = state === "selected"
    ? "var(--color-primary-400)"
    : "var(--color-neutral-700)";

  const dotColor = state === "selected"
    ? "var(--color-primary-400)"
    : "var(--color-neutral-700)";

  return (
    <div
      className={`flex items-center justify-center shrink-0 rounded-full ${className}`}
      style={{ width: s, height: s }}
    >
      <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`} fill="none">
        {/* Outer circle */}
        <circle
          cx={s / 2}
          cy={s / 2}
          r={s / 2 - 0.5}
          stroke={ringColor}
          strokeWidth={1}
          fill="none"
        />
        {/* Inner dot for selected and disabled */}
        {(state === "selected" || state === "disabled") && (
          <circle
            cx={s / 2}
            cy={s / 2}
            r={dotR}
            fill={dotColor}
          />
        )}
      </svg>
    </div>
  );
}

```

#### index.ts

```ts
export { Radio } from "./Radio";

```

---

### RoutineCard

#### RoutineCard.tsx

```tsx
/*
 * RoutineCard — Figma: Design System > Routine Cards
 *
 * Product routine card showing product image, details, optional key
 * ingredients, preferences, and a frequency/price selector.
 *
 * Variants (type):
 *   "one-time"              — simple card with one-time purchase pricing
 *   "subscription"          — includes ingredients (collapsed), preferences, subscription pricing
 *   "subscription-expanded" — subscription with first ingredient expanded
 *
 * Width: 327px, bg neutral/100, radius-10, bottom padding 24px.
 * Image area: 220px tall, full-width, object-cover.
 */

import { useState } from "react";
import { typography } from "../../tokens";
import { FrequencySelector, type FrequencyOption } from "../Selector";
import { CloseButton } from "../CloseButton";
import { ProductTag } from "../ProductTag";
const IMG_BASE = "https://nina-product-design.github.io/my-design-system/images";
const imgCardBg = `${IMG_BASE}/products/bg.png`;

// ─── Icons (inline SVGs) ──────────────────────────────────

function PlusIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M6 1V11M1 6H11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg width="12" height="1" viewBox="0 0 12 1" fill="none">
      <path d="M0 0.5H12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

// ─── Types ────────────────────────────────────────────────

export type RoutineCardType = "one-time" | "subscription" | "subscription-expanded";

export type RoutineCardIngredient = {
  image: string;
  name: string;
  description?: React.ReactNode;
};

export type RoutineCardProps = {
  type?: RoutineCardType;
  productImage?: string;
  productName?: string;
  productDescription?: string;
  productSize?: string;
  showRecommendedTag?: boolean;
  ingredients?: RoutineCardIngredient[];
  preferences?: string;
  /** Frequency options for the selector. Defaults based on type. */
  frequencyOptions?: FrequencyOption[];
  /** Index of the default-selected frequency option */
  defaultFrequencyIndex?: number;
  onClose?: () => void;
  onDetailsClick?: () => void;
  onFrequencyChange?: (index: number) => void;
  className?: string;
};

// ─── Sub-components ───────────────────────────────────────

function IngredientRow({
  ingredient,
  expanded = false,
  onToggle,
}: {
  ingredient: RoutineCardIngredient;
  expanded?: boolean;
  onToggle?: () => void;
}) {
  return (
    <div className="border-b border-(--color-neutral-600) pb-(--spacing-spacing-8) pr-(--spacing-spacing-8) w-full">
      <div className="flex items-center gap-(--spacing-spacing-8) w-full">
        {/* Ingredient image */}
        <div className="w-[32px] h-[40px] shrink-0 overflow-hidden">
          <img
            alt={ingredient.name}
            src={ingredient.image}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name */}
        <span
          className="flex-1 min-w-0 text-(--color-primary-300)"
          style={{
            fontFamily: typography.styles.body5Medium.fontFamily,
            fontSize: typography.styles.body5Medium.fontSize,
            fontWeight: typography.styles.body5Medium.fontWeight,
            lineHeight: typography.styles.body5Medium.lineHeight,
          }}
        >
          {ingredient.name}
        </span>

        {/* Toggle icon */}
        <button
          onClick={onToggle}
          className="shrink-0 w-[12px] h-[12px] flex items-center justify-center text-(--color-primary-300) cursor-pointer"
          aria-label={expanded ? "Collapse" : "Expand"}
        >
          {expanded ? <MinusIcon /> : <PlusIcon />}
        </button>
      </div>

      {/* Expanded description */}
      {expanded && ingredient.description && (
        <p
          className="pl-[40px] pr-(--spacing-spacing-24) text-(--color-primary-300)"
          style={{
            fontFamily: typography.styles.body5Regular.fontFamily,
            fontSize: typography.styles.body5Regular.fontSize,
            fontWeight: typography.styles.body5Regular.fontWeight,
            lineHeight: typography.styles.body5Regular.lineHeight,
            letterSpacing: typography.styles.body5Regular.letterSpacing,
            margin: 0,
          }}
        >
          {ingredient.description}
        </p>
      )}
    </div>
  );
}

// ─── Main component ───────────────────────────────────────

export function RoutineCard({
  type = "one-time",
  productImage,
  productName = "Product Name",
  productDescription = "",
  productSize = "",
  showRecommendedTag,
  ingredients = [],
  preferences,
  frequencyOptions,
  defaultFrequencyIndex,
  onClose,
  onDetailsClick,
  onFrequencyChange,
  className = "",
}: RoutineCardProps) {
  const isSubscription = type !== "one-time";

  // Default recommended tag for subscription types
  const showTag = showRecommendedTag ?? isSubscription;

  // Map type to FrequencySelector selection mode
  const freqSelection = isSubscription ? "subscription" : "one-time";

  // Manage expanded ingredient state
  const [expandedIndex, setExpandedIndex] = useState<number | null>(
    type === "subscription-expanded" ? 0 : null
  );

  return (
    <div
      className={`flex flex-col gap-(--spacing-spacing-24) items-center pb-(--spacing-spacing-16) rounded-(--radius-radius-10) bg-(--color-neutral-100) w-[327px] ${className}`}
    >
      {/* ── Product image ──────────────────────────────── */}
      <div className="relative w-full h-[220px] shrink-0 rounded-t-(--radius-radius-10) overflow-hidden" style={{ backgroundImage: `url(${imgCardBg})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        {productImage && (
          <img
            alt={productName}
            src={productImage}
            className="absolute inset-0 w-full h-full object-contain"
          />
        )}

        {/* Top bar: tag + close */}
        <div className={`absolute top-[8px] left-[8px] right-[8px] flex items-start ${showTag ? "justify-between" : "justify-end"}`}>
          {showTag && <ProductTag />}
          <CloseButton color="light" onClick={onClose} />
        </div>
      </div>

      {/* ── Content ────────────────────────────────────── */}
      <div className={`flex flex-col items-start px-(--spacing-spacing-16) w-full ${isSubscription ? "gap-(--spacing-spacing-24)" : "gap-(--spacing-spacing-16)"}`}>
        {/* Product info */}
        <div className="flex flex-col gap-(--spacing-spacing-8) items-start w-full">
          {/* Name */}
          <p
            className="text-(--color-primary-400) w-full"
            style={{
              fontFamily: typography.styles.h3.fontFamily,
              fontSize: typography.styles.h3.fontSize,
              fontWeight: typography.styles.h3.fontWeight,
              lineHeight: typography.styles.h3.lineHeight,
              letterSpacing: typography.styles.h3.letterSpacing,
            }}
          >
            {productName}
          </p>

          {/* Description */}
          {productDescription && (
            <p
              className="text-(--color-primary-300) w-full"
              style={{
                fontFamily: typography.styles.body5Regular.fontFamily,
                fontSize: typography.styles.body5Regular.fontSize,
                fontWeight: typography.styles.body5Regular.fontWeight,
                lineHeight: typography.styles.body5Regular.lineHeight,
                letterSpacing: typography.styles.body5Regular.letterSpacing,
              }}
            >
              {productDescription}
            </p>
          )}

          {/* Size + link */}
          <div className="flex items-baseline gap-(--spacing-spacing-12) w-full">
            {productSize && (
              <span
                className="text-(--color-primary-300) whitespace-nowrap"
                style={{
                  fontFamily: typography.styles.body5Regular.fontFamily,
                  fontSize: typography.styles.body5Regular.fontSize,
                  fontWeight: typography.styles.body5Regular.fontWeight,
                  lineHeight: typography.styles.body5Regular.lineHeight,
                  letterSpacing: typography.styles.body5Regular.letterSpacing,
                }}
              >
                {productSize}
              </span>
            )}
            {isSubscription && (
              <button
                onClick={onDetailsClick}
                className="cursor-pointer"
              >
                <span
                  className="text-(--color-primary-300) underline text-center whitespace-nowrap"
                  style={{
                    fontFamily: typography.styles.body5Regular.fontFamily,
                    fontSize: typography.styles.body5Regular.fontSize,
                    fontWeight: typography.styles.body5Regular.fontWeight,
                    lineHeight: typography.styles.body5Regular.lineHeight,
                    letterSpacing: typography.styles.body5Regular.letterSpacing,
                  }}
                >
                  See full details
                </span>
              </button>
            )}
          </div>
        </div>

        {/* ── Key Ingredients (subscription only) ──────── */}
        {isSubscription && ingredients.length > 0 && (
          <div className="flex flex-col gap-(--spacing-spacing-12) items-start w-full">
            <span
              className="text-(--color-primary-300) uppercase whitespace-nowrap"
              style={{
                fontFamily: typography.label2Medium.fontFamily,
                fontSize: typography.label2Medium.fontSize,
                fontWeight: typography.label2Medium.fontWeight,
                lineHeight: typography.label2Medium.lineHeight,
                letterSpacing: typography.label2Medium.letterSpacing,
              }}
            >
              your KEY INGREDIENTS
            </span>
            <div className="flex flex-col gap-(--spacing-spacing-8) items-center w-full">
              {ingredients.map((ing, i) => (
                <IngredientRow
                  key={i}
                  ingredient={ing}
                  expanded={expandedIndex === i}
                  onToggle={() => setExpandedIndex(expandedIndex === i ? null : i)}
                />
              ))}
            </div>
          </div>
        )}

        {/* ── Preferences (subscription only) ──────────── */}
        {isSubscription && preferences && (
          <div className="flex flex-col gap-(--spacing-spacing-8) items-start w-full">
            <span
              className="text-(--color-primary-300) uppercase whitespace-nowrap"
              style={{
                fontFamily: typography.label2Medium.fontFamily,
                fontSize: typography.label2Medium.fontSize,
                fontWeight: typography.label2Medium.fontWeight,
                lineHeight: typography.label2Medium.lineHeight,
                letterSpacing: typography.label2Medium.letterSpacing,
              }}
            >
              YOUR PREFERENCES
            </span>
            <p
              className="text-(--color-primary-300) w-full"
              style={{
                fontFamily: typography.styles.body5Regular.fontFamily,
                fontSize: typography.styles.body5Regular.fontSize,
                fontWeight: typography.styles.body5Regular.fontWeight,
                lineHeight: typography.styles.body5Regular.lineHeight,
                letterSpacing: typography.styles.body5Regular.letterSpacing,
              }}
            >
              {preferences}
            </p>
          </div>
        )}
      </div>

      {/* ── Frequency / Price selector ─────────────────── */}
      <FrequencySelector
        selection={freqSelection}
        options={frequencyOptions}
        selectedIndex={defaultFrequencyIndex}
        onChange={onFrequencyChange}
      />
    </div>
  );
}

```

#### index.ts

```ts
export { RoutineCard } from "./RoutineCard";
export type { RoutineCardType, RoutineCardIngredient, RoutineCardProps } from "./RoutineCard";

```

---

### Selector

#### FrequencySelector.tsx

```tsx
/*
 * FrequencySelector — Figma: Design System > Frequency Selector
 *
 * Collapsible selector for purchase frequency (subscription intervals
 * or one-time). Sits inside RoutineCard but is a standalone component.
 *
 * Selection modes:
 *   "subscription" — default to subscription option, shows frequency list when open
 *   "one-time"     — default to one-time, shows frequency list when open
 *   "accessory"    — one-time only, no dropdown (not expandable)
 *
 * Width: 295px. "Added to cart" floating label. Border neutral/400, radius-10.
 * Subscription prices: highlight/200 bg, strikethrough original.
 */

import { useState } from "react";
import { typography } from "../../tokens";
import { Radio } from "../Radio/Radio";

// ─── Icons ────────────────────────────────────────────────

function ChevronDownIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path d="M1.5 3L5 7L8.5 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronUpIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path d="M1.5 7L5 3L8.5 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ─── Types ────────────────────────────────────────────────

export type FrequencyOption = {
  label: string;
  price: string;
  originalPrice?: string;
  note?: string;
};

export type FrequencySelectorProps = {
  /** Which mode: subscription shows frequency options, accessory is non-expandable */
  selection?: "subscription" | "one-time" | "accessory";
  /** The list of selectable frequency options */
  options?: FrequencyOption[];
  /** Index of the currently selected option */
  selectedIndex?: number;
  /** Called when the user picks a different option */
  onChange?: (index: number) => void;
  /** Control open/closed state externally */
  defaultOpen?: boolean;
  className?: string;
};

// ─── Defaults ─────────────────────────────────────────────

const DEFAULT_OPTIONS: FrequencyOption[] = [
  { label: "Every 4 weeks [recommended]", price: "$14.00", originalPrice: "$35.00", note: "60% off first subscription order" },
  { label: "Every 8 weeks", price: "$14.00", originalPrice: "$35.00" },
  { label: "Every 12 weeks", price: "$14.00", originalPrice: "$35.00" },
  { label: "One-time purchase", price: "$35.00" },
];

// ─── Sub-components ───────────────────────────────────────

function PriceDisplay({ price, originalPrice, highlighted }: { price: string; originalPrice?: string; highlighted?: boolean }) {
  return (
    <div className="flex flex-col items-end gap-[4px] shrink-0 text-right whitespace-nowrap">
      <div
        className={`flex items-center justify-center px-(--spacing-spacing-4) rounded-(--radius-radius-4) ${
          highlighted ? "bg-(--color-highlight-200)" : ""
        }`}
      >
        <span
          className="text-(--color-neutral-900) text-center"
          style={{
            fontFamily: typography.styles.body4Medium.fontFamily,
            fontSize: typography.styles.body4Medium.fontSize,
            fontWeight: typography.styles.body4Medium.fontWeight,
            lineHeight: typography.styles.body4Medium.lineHeight,
          }}
        >
          {price}
        </span>
      </div>
      {originalPrice && (
        <span
          className="text-(--color-neutral-800) text-center line-through px-[4px]"
          style={{
            fontFamily: typography.styles.body6Regular.fontFamily,
            fontSize: typography.styles.body6Regular.fontSize,
            fontWeight: typography.styles.body6Regular.fontWeight,
            lineHeight: typography.styles.body6Regular.lineHeight,
            letterSpacing: typography.styles.body6Regular.letterSpacing,
          }}
        >
          {originalPrice}
        </span>
      )}
    </div>
  );
}

function SelectionRow({
  option,
  selected,
  isLast,
  onClick,
}: {
  option: FrequencyOption;
  selected: boolean;
  isLast: boolean;
  onClick: () => void;
}) {
  const hasOriginal = !!option.originalPrice;

  return (
    <button
      onClick={onClick}
      className={`bg-(--color-neutral-100) border-(--color-neutral-400) border-b border-l border-r flex items-center gap-(--spacing-spacing-24) px-[12px] py-[16px] w-full cursor-pointer ${
        isLast ? "rounded-b-(--radius-radius-10)" : ""
      } ${isLast ? "h-[72px]" : ""}`}
    >
      {/* Radio + label */}
      <div className="flex flex-1 min-w-0 items-center gap-(--spacing-spacing-8)">
        <Radio state={selected ? "selected" : "empty"} size="small" />
        <span
          className="flex-1 min-w-0 text-(--color-neutral-900) text-left"
          style={{
            fontFamily: typography.styles.body5Regular.fontFamily,
            fontSize: typography.styles.body5Regular.fontSize,
            fontWeight: typography.styles.body5Regular.fontWeight,
            lineHeight: typography.styles.body5Regular.lineHeight,
            letterSpacing: typography.styles.body5Regular.letterSpacing,
          }}
        >
          {option.label}
        </span>
      </div>

      {/* Price */}
      <PriceDisplay
        price={option.price}
        originalPrice={option.originalPrice}
        highlighted={hasOriginal}
      />
    </button>
  );
}

// ─── Main component ───────────────────────────────────────

export function FrequencySelector({
  selection = "subscription",
  options,
  selectedIndex: controlledIndex,
  onChange,
  defaultOpen = false,
  className = "",
}: FrequencySelectorProps) {
  const [open, setOpen] = useState(defaultOpen);
  const [internalIndex, setInternalIndex] = useState(
    selection === "one-time" ? (options ?? DEFAULT_OPTIONS).length - 1 : 0
  );

  const isAccessory = selection === "accessory";
  const canExpand = !isAccessory;

  const opts = options ?? (isAccessory
    ? [{ label: "One-time purchase", price: "$35.00" }]
    : DEFAULT_OPTIONS);

  const selectedIdx = controlledIndex ?? internalIndex;
  const current = opts[selectedIdx] ?? opts[0];
  const hasOriginal = !!current.originalPrice;

  function handleSelect(idx: number) {
    if (controlledIndex === undefined) {
      setInternalIndex(idx);
    }
    onChange?.(idx);
  }

  function handleToggle() {
    if (canExpand) setOpen(!open);
  }

  return (
    <div className={`relative w-[295px] shrink-0 ${className}`}>
      {/* ── Header (always visible) ────────────────────── */}
      <button
        onClick={handleToggle}
        className={`relative w-full border border-(--color-neutral-400) bg-(--color-neutral-100) px-[12px] py-[16px] ${
          canExpand ? "cursor-pointer" : "cursor-default"
        } ${open ? "rounded-t-(--radius-radius-10)" : "rounded-(--radius-radius-10)"}`}
      >
        <div className="flex items-center gap-[12px] w-full">
          {/* Label + note */}
          <div className={`flex flex-col items-start ${hasOriginal ? "gap-px shrink-0 w-[171px]" : "flex-1 min-w-0"}`}>
            <span
              className="text-(--color-neutral-900) w-full text-left"
              style={{
                fontFamily: typography.styles.body5Regular.fontFamily,
                fontSize: typography.styles.body5Regular.fontSize,
                fontWeight: typography.styles.body5Regular.fontWeight,
                lineHeight: typography.styles.body5Regular.lineHeight,
                letterSpacing: typography.styles.body5Regular.letterSpacing,
              }}
            >
              {current.label}
            </span>
            {current.note && (
              <span
                className="text-(--color-neutral-800) w-full text-left"
                style={{
                  fontFamily: typography.styles.body6Regular.fontFamily,
                  fontSize: typography.styles.body6Regular.fontSize,
                  fontWeight: typography.styles.body6Regular.fontWeight,
                  lineHeight: typography.styles.body6Regular.lineHeight,
                  letterSpacing: typography.styles.body6Regular.letterSpacing,
                }}
              >
                {current.note}
              </span>
            )}
          </div>

          {/* Price */}
          <PriceDisplay
            price={current.price}
            originalPrice={current.originalPrice}
            highlighted={hasOriginal}
          />

          {/* Chevron */}
          {canExpand && (
            <>
              {/* Vertical divider */}
              <div className="h-[36px] w-0 border-l border-(--color-neutral-400) shrink-0" />
              <div className="shrink-0 flex items-center text-(--color-neutral-900)">
                {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
              </div>
            </>
          )}
        </div>
      </button>

      {/* "Added to cart" floating label — centered on the top border */}
      <div className="absolute top-0 left-[8px] -translate-y-1/2 bg-(--color-neutral-100) px-[4px]">
        <span
          className="text-(--color-neutral-900) whitespace-nowrap leading-none"
          style={{
            fontFamily: typography.styles.body6Regular.fontFamily,
            fontSize: typography.styles.body6Regular.fontSize,
            fontWeight: typography.styles.body6Regular.fontWeight,
            letterSpacing: typography.styles.body6Regular.letterSpacing,
          }}
        >
          Added to cart
        </span>
      </div>

      {/* ── Dropdown list ──────────────────────────────── */}
      {open && canExpand && (
        <div className="flex flex-col w-full">
          {opts.map((opt, i) => (
            <SelectionRow
              key={i}
              option={opt}
              selected={selectedIdx === i}
              isLast={i === opts.length - 1}
              onClick={() => handleSelect(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

```

#### Selector.tsx

```tsx
import { typography } from "../../tokens";

/*
 * Selector — Figma: Design System Foundations > Consultation Selectors
 *
 * Two forms:
 *   1. Text pill (Image=False) — rounded pill with text, optional subcopy
 *   2. Image card (Image=True) — image on left, text on right, optional subcopy
 *
 * States:
 *   deselected — white bg, 1px border neutral/300
 *   selected   — primary/200 bg (light green), text neutral/900
 *
 * Sizes (text pill):
 *   fixed — 327px wide, px-32
 *   hug   — auto width (w-fit), px-12
 *
 * Sizes (image card):
 *   mobile  — 327px total (101px image + 226px text)
 *   desktop — 368px total (101px image + 267px text)
 *
 * All class strings are STATIC LITERALS.
 */

export type SelectorSize = "fixed" | "hug" | "mobile" | "desktop";

type SelectorProps = {
  selected?: boolean;
  subcopy?: string;
  label?: string;
  /** Image URL for card variant. When provided, renders as image card. */
  image?: string;
  size?: SelectorSize;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

// ─── Token refs for ComponentLibrary ─────────────────────────────────────────

export const stateTokens = {
  deselected: { bg: "color/neutral/100", border: "color/neutral/300", text: "color/primary/400" },
  selected:   { bg: "color/primary/200", border: "color/primary/200", text: "color/neutral/900" },
};

// ─── Text pill sizes ─────────────────────────────────────────────────────────

const pillSizeClasses: Record<"fixed" | "hug", string> = {
  fixed: "w-[327px] px-(--spacing-spacing-32)",
  hug:   "w-fit px-(--spacing-spacing-12)",
};

// ─── Image card text-side widths ─────────────────────────────────────────────

const cardTextWidths: Record<"mobile" | "desktop", string> = {
  mobile:  "w-[226px]",
  desktop: "w-[267px]",
};

// ─── Component ────────────────────────────────────────────────────────────────

export function Selector({
  selected = false,
  subcopy,
  label = "Once or twice a week",
  image,
  size = "fixed",
  onClick,
  className = "",
}: SelectorProps) {
  const isImageCard = !!image;

  // ── Image card variant ──────────────────────────────────────────────────
  if (isImageCard) {
    const cardSize = size === "desktop" ? "desktop" : "mobile";
    const totalWidth = cardSize === "desktop" ? "w-[368px]" : "w-[327px]";

    return (
      <button
        type="button"
        onClick={onClick}
        className={[
          "flex items-center rounded-[8px] overflow-clip",
          selected
            ? "border border-(--color-primary-200)"
            : "border border-(--color-neutral-300)",
          totalWidth,
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {/* Image */}
        <div className="h-[127px] w-[101px] shrink-0 relative overflow-hidden rounded-l-(--radius-radius-10)">
          <img
            src={image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Text side */}
        <div
          className={[
            "flex flex-col items-start justify-center h-[127px] px-(--spacing-spacing-32) py-[30px]",
            "rounded-r-(--radius-radius-10)",
            cardTextWidths[cardSize],
            selected ? "bg-(--color-primary-200)" : "bg-(--color-neutral-100)",
          ].join(" ")}
        >
          <span
            className={selected ? "text-(--color-neutral-900)" : "text-(--color-primary-400)"}
            style={{
              fontFamily: typography.styles.body4Regular.fontFamily,
              fontSize: typography.styles.body4Regular.fontSize,
              fontWeight: typography.styles.body4Regular.fontWeight,
              lineHeight: typography.styles.body4Regular.lineHeight,
              letterSpacing: typography.styles.body4Regular.letterSpacing,
              textAlign: "left",
            }}
          >
            {label}
          </span>
          {subcopy && (
            <span
              className={selected ? "text-(--color-neutral-900)" : "text-(--color-neutral-800)"}
              style={{
                fontFamily: typography.styles.body5Regular.fontFamily,
                fontSize: typography.styles.body5Regular.fontSize,
                fontWeight: typography.styles.body5Regular.fontWeight,
                lineHeight: typography.styles.body5Regular.lineHeight,
                letterSpacing: typography.styles.body5Regular.letterSpacing,
                textAlign: "left",
              }}
            >
              {subcopy}
            </span>
          )}
        </div>
      </button>
    );
  }

  // ── Text pill variant ───────────────────────────────────────────────────
  const pillSize = size === "hug" ? "hug" : "fixed";

  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "flex flex-col items-start justify-center py-[16px] rounded-[10px] overflow-clip text-left",
        pillSizeClasses[pillSize],
        selected
          ? "bg-(--color-primary-200)"
          : "bg-(--color-neutral-100) border border-(--color-neutral-300)",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span
        className={selected ? "text-(--color-neutral-900)" : "text-(--color-primary-400)"}
        style={{
          fontFamily: typography.styles.body4Regular.fontFamily,
          fontSize: typography.styles.body4Regular.fontSize,
          fontWeight: typography.styles.body4Regular.fontWeight,
          lineHeight: typography.styles.body4Regular.lineHeight,
          letterSpacing: typography.styles.body4Regular.letterSpacing,
        }}
      >
        {label}
      </span>
      {subcopy && (
        <span
          className={selected ? "text-(--color-neutral-900)" : "text-(--color-neutral-800)"}
          style={{
            fontFamily: typography.styles.body5Regular.fontFamily,
            fontSize: typography.styles.body5Regular.fontSize,
            fontWeight: typography.styles.body5Regular.fontWeight,
            lineHeight: typography.styles.body5Regular.lineHeight,
            letterSpacing: typography.styles.body5Regular.letterSpacing,
          }}
        >
          {subcopy}
        </span>
      )}
    </button>
  );
}

```

#### index.ts

```ts
export { Selector } from "./Selector";
export { FrequencySelector } from "./FrequencySelector";
export type { FrequencyOption, FrequencySelectorProps } from "./FrequencySelector";

```

---

### SitewideBanner

#### SitewideBanner.tsx

```tsx
/*
 * SitewideBanner — Figma: Design System > Sitewide Banner
 *
 * Full-width promotional banner at the top of the page.
 * Height: 40px
 * Text: body/5 regular (12px), centered, underlined
 *
 * Single state: primary/400 bg, neutral/100 text.
 */

import { typography } from "../../tokens";

export type SitewideBannerState = "banner";

type SitewideBannerProps = {
  state?: SitewideBannerState;
  message?: string;
  className?: string;
};

export function SitewideBanner({
  state: _state = "banner",
  message = "Exclusive Welcome Offer: 60% off + free gift",
  className = "",
}: SitewideBannerProps) {
  return (
    <div
      className={`flex items-center justify-center w-full h-[40px] bg-(--color-primary-400) ${className}`}
    >
      <p
        className="text-center underline whitespace-nowrap text-(--color-neutral-100)"
        style={{
          fontFamily: typography.styles.body5Regular.fontFamily,
          fontSize: typography.styles.body5Regular.fontSize,
          fontWeight: typography.styles.body5Regular.fontWeight,
          lineHeight: typography.styles.body5Regular.lineHeight,
          letterSpacing: typography.styles.body5Regular.letterSpacing,
        }}
      >
        {message}
      </p>
    </div>
  );
}

```

#### index.ts

```ts
export { SitewideBanner } from "./SitewideBanner";

```

---

### Tag

#### Tag.tsx

```tsx
/*
 * Tag — Figma: Design System Foundations > Tags
 *
 * Offer/promo tags with lime highlight background.
 * BG: highlight/200 (#ECFF92), text: primary/400, uppercase
 * Font: Simplon Mono Medium — label/1 (14px) default, label/2 (12px) small
 * Padding: 8px, radius: 4px
 */

import { typography } from "../../tokens";

export type TagSize = "default" | "small";

type TagProps = {
  children: React.ReactNode;
  size?: TagSize;
  className?: string;
};

export function Tag({ children, size = "default", className = "" }: TagProps) {
  const isSmall = size === "small";
  const typo = isSmall ? typography.label2Medium : typography.styles.label1Medium;

  return (
    <div
      className={`inline-flex items-center justify-center p-(--spacing-spacing-8) rounded-(--radius-radius-4) bg-(--color-highlight-200) ${className}`}
    >
      <span
        className="text-(--color-primary-400) uppercase whitespace-nowrap"
        style={{
          fontFamily: typo.fontFamily,
          fontSize: typo.fontSize,
          fontWeight: typo.fontWeight,
          lineHeight: typo.lineHeight,
          letterSpacing: typo.letterSpacing,
        }}
      >
        {children}
      </span>
    </div>
  );
}

```

#### index.ts

```ts
export { Tag } from "./Tag";
export type { TagSize } from "./Tag";

```

---

### TextLink

#### TextLink.tsx

```tsx
import { typography } from "../../tokens";

/*
 * TextLink — Figma: Design System Foundations > Text Links
 *
 * Used when a button is unnecessary or too large.
 *
 * Types:
 *   Primary   — Simplon Mono, 12px, medium 500, uppercase, tracking 0.96px
 *               Underline animates left→right on hover.
 *   Secondary — Same styling as Primary (different semantic token in Figma).
 *   Simple    — Simplon Norm, 14px, regular 400, sentence case, static underline.
 *
 * Color modes:
 *   "light" → primary/400 text on light backgrounds
 *   "dark"  → neutral/100 text on dark backgrounds
 *
 * All variant × state class strings are STATIC LITERALS.
 */

export type TextLinkType = "primary" | "secondary" | "simple";
export type TextLinkColor = "light" | "dark";

type TextLinkProps = {
  type?: TextLinkType;
  color?: TextLinkColor;
  disabled?: boolean;
  hasIcon?: boolean;
  children?: React.ReactNode;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  className?: string;
};

// ─── State class maps ──────────────────────────────────────────────────────────
// Exported so ComponentLibrary can render static hover/disabled previews.

export const stateClasses: Record<
  `${TextLinkType}-${TextLinkColor}`,
  { default: string; hover: string; disabled: string }
> = {
  "primary-light": {
    default:  "text-(--color-primary-400)",
    hover:    "text-(--color-primary-300)",
    disabled: "text-(--color-neutral-700)",
  },
  "primary-dark": {
    default:  "text-(--color-neutral-100)",
    hover:    "text-(--color-neutral-100)",
    disabled: "text-(--color-neutral-700)",
  },
  "secondary-light": {
    default:  "text-(--color-primary-400)",
    hover:    "text-(--color-primary-300)",
    disabled: "text-(--color-neutral-700)",
  },
  "secondary-dark": {
    default:  "text-(--color-neutral-100)",
    hover:    "text-(--color-neutral-100)",
    disabled: "text-(--color-neutral-700)",
  },
  "simple-light": {
    default:  "text-(--color-primary-400)",
    hover:    "text-(--color-primary-300)",
    disabled: "text-(--color-neutral-700)",
  },
  "simple-dark": {
    default:  "text-(--color-neutral-100)",
    hover:    "text-(--color-neutral-100)",
    disabled: "text-(--color-neutral-700)",
  },
};

// Underline color tokens per variant
const underlineColors: Record<`${TextLinkType}-${TextLinkColor}`, { default: string; disabled: string }> = {
  "primary-light":   { default: "bg-(--color-accent-300)", disabled: "bg-(--color-neutral-700)" },
  "primary-dark":    { default: "bg-(--color-accent-300)", disabled: "bg-(--color-neutral-700)" },
  "secondary-light": { default: "bg-(--color-primary-400)", disabled: "bg-(--color-neutral-700)" },
  "secondary-dark":  { default: "bg-(--color-neutral-100)", disabled: "bg-(--color-neutral-700)" },
  "simple-light":    { default: "bg-(--color-primary-400)", disabled: "bg-(--color-neutral-700)" },
  "simple-dark":     { default: "bg-(--color-neutral-100)", disabled: "bg-(--color-neutral-700)" },
};

// Interactive classes (with Tailwind pseudo-class modifiers)
const variantClasses: Record<`${TextLinkType}-${TextLinkColor}`, string> = {
  "primary-light":
    "text-(--color-primary-400) hover:text-(--color-primary-300)",
  "primary-dark":
    "text-(--color-neutral-100)",
  "secondary-light":
    "text-(--color-primary-400) hover:text-(--color-primary-300)",
  "secondary-dark":
    "text-(--color-neutral-100)",
  "simple-light":
    "text-(--color-primary-400) hover:text-(--color-primary-300)",
  "simple-dark":
    "text-(--color-neutral-100)",
};

// ─── Token references for ComponentLibrary docs ─────────────────────────────

export const variantTokens: Record<
  `${TextLinkType}-${TextLinkColor}`,
  { text: string; underline: string }
> = {
  "primary-light":   { text: "color/primary/400", underline: "color/accent/300" },
  "primary-dark":    { text: "color/neutral/100", underline: "color/accent/300" },
  "secondary-light": { text: "color/primary/400", underline: "color/primary/400" },
  "secondary-dark":  { text: "color/neutral/100", underline: "color/neutral/100" },
  "simple-light":    { text: "color/primary/400", underline: "color/primary/400" },
  "simple-dark":     { text: "color/neutral/100", underline: "color/neutral/100" },
};

// ─── Arrow icon (play outline from Figma) ────────────────────────────────────

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="9.5" stroke="currentColor" />
      <path d="M8.5 6L13.5 10L8.5 14" fill="currentColor" />
    </svg>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export function TextLink({
  type = "primary",
  color = "light",
  disabled = false,
  hasIcon = false,
  children = "Text goes here",
  href,
  onClick,
  className = "",
}: TextLinkProps) {
  const key = `${type}-${color}` as const;
  const isSimple = type === "simple";

  const textColorClass = disabled
    ? "text-(--color-neutral-700)"
    : variantClasses[key];

  const underlineBg = disabled
    ? underlineColors[key].disabled
    : underlineColors[key].default;

  if (isSimple) {
    return (
      <a
        href={href}
        onClick={disabled ? undefined : onClick}
        aria-disabled={disabled || undefined}
        className={[
          "inline-flex items-center gap-(--spacing-spacing-8) underline decoration-current",
          "transition-colors duration-150 ease-out",
          textColorClass,
          disabled ? "pointer-events-none" : "cursor-pointer",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        style={{
          fontFamily: typography.styles.body4Regular.fontFamily,
          fontSize: typography.styles.body4Regular.fontSize,
          fontWeight: typography.styles.body4Regular.fontWeight,
          lineHeight: typography.styles.body4Regular.lineHeight,
          letterSpacing: typography.styles.body4Regular.letterSpacing,
        }}
      >
        {children}
      </a>
    );
  }

  // Primary & Secondary — animated underline
  return (
    <a
      href={href}
      onClick={disabled ? undefined : onClick}
      aria-disabled={disabled || undefined}
      className={[
        "group inline-flex items-center gap-(--spacing-spacing-8)",
        "transition-colors duration-150 ease-out",
        textColorClass,
        disabled ? "pointer-events-none" : "cursor-pointer",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span className="flex flex-col gap-[4px] items-start overflow-clip">
        <span
          className="uppercase whitespace-nowrap"
          style={{
            fontFamily: typography.label2Medium.fontFamily,
            fontSize: typography.label2Medium.fontSize,
            fontWeight: typography.label2Medium.fontWeight,
            lineHeight: typography.label2Medium.lineHeight,
            letterSpacing: typography.label2Medium.letterSpacing,
          }}
        >
          {children}
        </span>
        <span
          className={[
            "h-px w-full origin-left transition-transform duration-300 ease-out",
            disabled ? "scale-x-100" : "scale-x-100 group-hover:scale-x-0 group-hover:origin-right",
            underlineBg,
          ].join(" ")}
          aria-hidden="true"
        />
      </span>
      {hasIcon && <ArrowIcon />}
    </a>
  );
}

```

#### index.ts

```ts
export { TextLink } from "./TextLink";

```

---

### Tip

#### Tip.tsx

```tsx
/*
 * Tip — Figma: Design System > New Consultation Tip
 *
 * Bottom-sheet tooltip triggered by a link on the page.
 * BG: tertiary/200 (#ead7f3). Rounded top corners: radius-20.
 * Drag handle: 42×5px, tertiary/300, rounded 5px.
 * Title: Simplon Mono, uppercase, centered.
 *   Mobile: 13px, tracking 1px.  Desktop: 14px (label/1), tracking 1.12px.
 * Body: Simplon Norm, centered.
 *   Mobile: 14px, tracking 0.5px, leading 22px.  Desktop: 16px (body/3), leading 1.5.
 * Mobile: 375px, px-24, pt-12, pb-24, gap 16px handle→content.
 * Desktop: 500px, px-24, pt-18, pb-48, gap 32px handle→content.
 */

import { useState } from "react";
import { typography } from "../../tokens";

export type TipSize = "desktop" | "mobile";

// ─── Tip Panel ───────────────────────────────────────────

type TipProps = {
  title?: string;
  children: React.ReactNode;
  size?: TipSize;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
};

export function Tip({
  title = "WHY WE ASK:",
  children,
  size = "mobile",
  isOpen,
  onClose,
  className = "",
}: TipProps) {
  if (!isOpen) return null;

  const isDesktop = size === "desktop";

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          zIndex: 99,
        }}
      />

      {/* Panel */}
      <div
        className={className}
        style={{
          position: "fixed",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: isDesktop ? 500 : 375,
          backgroundColor: "var(--color-tertiary-200)",
          borderTopLeftRadius: "var(--radius-radius-20)",
          borderTopRightRadius: "var(--radius-radius-20)",
          padding: isDesktop ? "18px 24px 48px" : "12px 24px 24px",
          zIndex: 100,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: isDesktop ? 32 : 16,
        }}
      >
        {/* Drag handle */}
        <div
          style={{
            width: 42,
            height: 5,
            borderRadius: 5,
            backgroundColor: "var(--color-tertiary-300)",
            flexShrink: 0,
            cursor: "pointer",
          }}
          onClick={onClose}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            width: "100%",
            textAlign: "center",
          }}
        >
          {/* Title */}
          <p
            style={{
              fontFamily: typography.families.label,
              fontWeight: typography.weights.regular,
              fontSize: isDesktop ? 14 : 13,
              lineHeight: 1.2,
              letterSpacing: isDesktop ? "1.12px" : "1px",
              textTransform: "uppercase",
              color: "var(--color-neutral-900)",
              margin: 0,
            }}
          >
            {title}
          </p>

          {/* Body */}
          <div
            style={{
              fontFamily: typography.families.body,
              fontWeight: typography.weights.regular,
              fontSize: isDesktop ? 16 : 14,
              lineHeight: isDesktop ? 1.5 : "22px",
              letterSpacing: isDesktop ? "0.32px" : "0.5px",
              color: "var(--color-neutral-900)",
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

// ─── Tip Trigger ─────────────────────────────────────────

type TipTriggerProps = {
  label: string;
  onClick: () => void;
  className?: string;
};

export function TipTrigger({ label, onClick, className = "" }: TipTriggerProps) {
  return (
    <button
      className={className}
      onClick={onClick}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        background: "none",
        border: "none",
        padding: 0,
        cursor: "pointer",
        fontFamily: typography.families.body,
        fontWeight: typography.weights.regular,
        fontSize: 16,
        color: "var(--color-neutral-800)",
      }}
    >
      <span
        style={{
          width: 20,
          height: 20,
          borderRadius: "50%",
          border: "1.5px solid var(--color-tertiary-300)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 14,
          lineHeight: 1,
          color: "var(--color-tertiary-300)",
          flexShrink: 0,
        }}
      >
        +
      </span>
      <span style={{ textDecoration: "underline" }}>{label}</span>
    </button>
  );
}

```

#### index.ts

```ts
export { Tip, TipTrigger } from "./Tip";
export type { TipSize } from "./Tip";

```

---

### Toast

#### Toast.tsx

```tsx
/*
 * Toast — Figma: Design System Foundations > Toast
 *
 * Types: removal (×), added (✓), paused (‖), error (×)
 * Breakpoints: mobile (345px, px-24), desktop (600px, px-48)
 * Optional product image on right (32×40px, rounded-[6px])
 *
 * BG: primary/300 for removal/added/paused, error/200 for error
 * Icon: 24px circle, bg white/15%, type-specific SVG
 * Text: body/4 medium (14px Simplon Norm medium), neutral/100
 * Shadow: 0px 8px 24px rgba(0,0,0,0.18)
 * Radius: 12px
 * Height: 60px
 */

import { typography } from "../../tokens";

export type ToastType = "removal" | "added" | "paused" | "error";
export type ToastBreakpoint = "mobile" | "desktop";

type ToastProps = {
  type?: ToastType;
  message: string;
  image?: string;
  breakpoint?: ToastBreakpoint;
  className?: string;
};

// ─── Icons ───────────────────────────────────────────────────────────────────

function CloseIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
      <path d="M1 1L9 9M9 1L1 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="12" height="10" viewBox="0 0 12 10" fill="none" aria-hidden="true">
      <path d="M1 5L4.5 8.5L11 1.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg width="8" height="10" viewBox="0 0 8 10" fill="none" aria-hidden="true">
      <line x1="1" y1="0" x2="1" y2="10" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <line x1="7" y1="0" x2="7" y2="10" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

const iconMap: Record<ToastType, () => JSX.Element> = {
  removal: CloseIcon,
  added: CheckIcon,
  paused: PauseIcon,
  error: CloseIcon,
};

const bgMap: Record<ToastType, string> = {
  removal: "bg-(--color-primary-400)",
  added: "bg-(--color-primary-400)",
  paused: "bg-(--color-primary-400)",
  error: "bg-(--color-error-200)",
};

const widthMap: Record<ToastBreakpoint, string> = {
  mobile: "w-[343px] px-(--spacing-spacing-16)",
  desktop: "w-[600px] px-(--spacing-spacing-16)",
};

// ─── Component ────────────────────────────────────────────────────────────────

export function Toast({
  type = "removal",
  message,
  image,
  breakpoint = "mobile",
  className = "",
}: ToastProps) {
  const Icon = iconMap[type];

  return (
    <div
      className={`flex items-center h-[60px] py-(--spacing-spacing-12) rounded-xl shadow-[0px_8px_24px_0px_rgba(0,0,0,0.18)] ${bgMap[type]} ${widthMap[breakpoint]} ${className}`}
    >
      <div className="flex items-center justify-between w-full">
        {/* Left: icon + text */}
        <div className="flex items-center gap-(--spacing-spacing-16)">
          {/* Icon circle */}
          <div className="flex items-center justify-center size-[24px] rounded-full bg-white/15 shrink-0">
            <Icon />
          </div>
          {/* Message */}
          <span
            className="text-(--color-neutral-100) whitespace-nowrap"
            style={{
              fontFamily: typography.styles.body4Medium.fontFamily,
              fontSize: typography.styles.body4Medium.fontSize,
              fontWeight: typography.styles.body4Medium.fontWeight,
              lineHeight: typography.styles.body4Medium.lineHeight,
              letterSpacing: typography.styles.body4Medium.letterSpacing,
            }}
          >
            {message}
          </span>
        </div>

        {/* Right: optional product image */}
        {image && (
          <img
            src={image}
            alt=""
            className="w-[32px] h-[40px] rounded-[6px] object-cover shrink-0"
          />
        )}
      </div>
    </div>
  );
}

```

#### index.ts

```ts
export { Toast } from "./Toast";
export type { ToastType, ToastBreakpoint } from "./Toast";

```

---

### Toggle

#### Toggle.tsx

```tsx
/*
 * Toggle — Figma: Design System Foundations > UI Controls > Toggle
 *
 * Track: 55×18px rounded pill
 * Thumb: 18px circle
 * Off: neutral/600 track, white thumb on left
 * On: primary/300 track, white thumb on right
 *
 * Optional text labels ("OFF" / "ON") on either side — Simplon Mono 11px uppercase
 */

type ToggleProps = {
  on?: boolean;
  showLabels?: boolean;
  label?: string;
  headline?: string;
  onChange?: (on: boolean) => void;
  className?: string;
};

export function Toggle({
  on = false,
  showLabels = false,
  label,
  headline,
  onChange,
  className = "",
}: ToggleProps) {
  const track = (
    <button
      type="button"
      onClick={() => onChange?.(!on)}
      className={[
        "relative w-[55px] h-[24px] rounded-full transition-colors duration-200 cursor-pointer shrink-0",
        on ? "bg-(--color-primary-300)" : "bg-(--color-neutral-600)",
      ].join(" ")}
    >
      <div
        className="absolute top-[3px] size-[18px] rounded-full bg-(--color-neutral-100) transition-[left] duration-200 shadow-[0_1px_2px_rgba(0,0,0,0.15)]"
        style={{ left: on ? "34px" : "3px" }}
      />
    </button>
  );

  const toggleRow = showLabels ? (
    <div className="flex items-center gap-2">
      <span
        className="text-[11px] uppercase tracking-[1px] text-(--color-neutral-900)"
        style={{ fontFamily: "var(--font-label-2-family)" }}
      >
        off
      </span>
      {track}
      <span
        className="text-[11px] uppercase tracking-[1px] text-(--color-neutral-700)"
        style={{ fontFamily: "var(--font-label-2-family)" }}
      >
        on
      </span>
    </div>
  ) : (
    track
  );

  if (!label && !headline) {
    return <div className={className}>{toggleRow}</div>;
  }

  return (
    <div className={`flex flex-col items-start gap-(--spacing-spacing-8) ${className}`}>
      {headline && (
        <span
          className="text-(--color-primary-400)"
          style={{
            fontFamily: "var(--font-body-4-family)",
            fontSize: "var(--font-body-4-size)",
            fontWeight: "var(--font-body-4-weight-regular)",
            lineHeight: "var(--font-body-4-line-height)",
            letterSpacing: "var(--font-body-4-letter-spacing)",
          }}
        >
          {headline}
        </span>
      )}
      <div className="flex items-end gap-(--spacing-spacing-16)">
        {toggleRow}
        {label && (
          <span
            className="text-(--color-primary-400)"
            style={{
              fontFamily: "var(--font-body-4-family)",
              fontSize: "var(--font-body-4-size)",
              fontWeight: "var(--font-body-4-weight-regular)",
              lineHeight: "var(--font-body-4-line-height)",
              letterSpacing: "var(--font-body-4-letter-spacing)",
            }}
          >
            {label}
          </span>
        )}
      </div>
    </div>
  );
}

```

#### index.ts

```ts
export { Toggle } from "./Toggle";

```

---

### Typography

#### Typography.tsx

```tsx
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


```

---

### VideoControls

#### VideoControls.tsx

```tsx
/*
 * VideoControls — Figma: Design System > UI Controls > Video Controls
 *
 * 32x32px circular button for video play/pause.
 *
 * States:
 *   "pause" — two vertical bars (currently playing, click to pause)
 *   "play"  — right-pointing triangle (currently paused, click to play)
 *
 * Circle: 1px border neutral/600, bg neutral/100.
 * Icons: neutral/900.
 */

export type VideoControlsState = "pause" | "play";

type VideoControlsProps = {
  state?: VideoControlsState;
  onClick?: () => void;
  className?: string;
};

export function VideoControls({
  state = "pause",
  onClick,
  className = "",
}: VideoControlsProps) {
  return (
    <button
      onClick={onClick}
      className={`size-[32px] rounded-full border border-(--color-neutral-600) bg-(--color-neutral-100) flex items-center justify-center cursor-pointer ${className}`}
      aria-label={state === "pause" ? "Pause" : "Play"}
    >
      {state === "pause" ? (
        /* Two vertical bars */
        <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
          <rect x="0" y="0" width="3" height="12" rx="0.5" fill="var(--color-neutral-900)" />
          <rect x="7" y="0" width="3" height="12" rx="0.5" fill="var(--color-neutral-900)" />
        </svg>
      ) : (
        /* Play triangle */
        <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
          <path d="M1 1.5V10.5L9 6L1 1.5Z" fill="var(--color-neutral-900)" />
        </svg>
      )}
    </button>
  );
}

```

#### index.ts

```ts
export { VideoControls } from "./VideoControls";
export type { VideoControlsState } from "./VideoControls";

```

---

