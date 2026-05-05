# Prose Design System

You are setting up or working in a Prose design system prototype. Follow every rule below.

## Project Setup

If this folder does NOT already have a `package.json` with Vite configured:
1. Scaffold a new Vite + React + Tailwind project in the current folder
2. Add the @font-face declarations from the Fonts section below into `src/index.css` (fonts load from cdn2.prose.com — no download needed)
3. Replace `tailwind.config.js` with the Tailwind Config below
4. Run `npm install`
5. Start the dev server and give the user the localhost URL

If the project is already set up, skip straight to building.

---

## Default Behavior

Follow these rules for every prototype unless the user explicitly says otherwise:

1. **Always include the Navigation** (SitewideBanner + Nav bar) at the top of every page. Do not skip it.
2. **Always build mobile-first** (375px viewport). Make it responsive if straightforward, but default to mobile if the user doesn't specify.
3. **Always include all standard page elements**: Navigation at top, content area, and any relevant CTAs. Don't leave out elements unless the user says to.
4. **Use real components** from PROSE-COMPONENTS.md — never rebuild from scratch. Copy the component source code exactly.
5. **The Prose Logo must always appear** in the Navigation, horizontally centered within the nav bar.

---

## Component Library

The coded component library with all interactive examples and exact specs lives at:
https://nina-product-design.github.io/my-design-system/

Every component in this skill file is implemented there. If a spec seems ambiguous, reference the component library as the source of truth.

---

## Component Source — IMPORTANT

The full source code for every component is in a companion file called **PROSE-COMPONENTS.md**. That file contains `tokens.ts`, `globals.css`, and every component's `.tsx` and `index.ts` — ready to copy into any prototype.

- **GitHub repo:** https://github.com/nina-product-design/my-design-system
- **Companion file:** PROSE-COMPONENTS.md (should be in this same Claude Project or available locally)

### Available components

```
Accordion              IngredientCard            ProductCardCarousel    SitewideBanner
ArrowButton            IngredientCardCarousel    ProgressBar            Tag
Button (+ ButtonMini)  InputField                PromoModal             TextLink
Checkbox               Logo                      Radio                  Tip
CloseButton            Navigation                RoutineCard            Toast
FrequencySelector      OfferBadge                Selector               Toggle
ProductCard            ProductTag                                       Typography
                                                                        VideoControls
```

### How to use them in a prototype

When building a prototype, **do NOT rebuild components from the spec tables in this file**. Copy the real code from PROSE-COMPONENTS.md instead.

1. **Copy `tokens.ts`** from the companion file into the prototype's `src/tokens.ts`. All components depend on it.
2. **Merge the CSS variables** from the `globals.css` section into the prototype's main CSS file (e.g. `src/index.css`). This includes `@font-face` declarations and `:root` custom properties.
3. **Copy the component files** you need. Each component section in PROSE-COMPONENTS.md has the `.tsx` file and `index.ts` barrel. Create `src/components/<Name>/` and paste both files.
4. If the prototype is JS-only (`.jsx`), convert `.tsx` → `.jsx` by removing type annotations.
5. Import via the barrel: `import { Selector } from './components/Selector'`.
6. If a component depends on other components (e.g. `Navigation` uses `Logo` and `SitewideBanner`, `RoutineCard` uses `FrequencySelector`, `CloseButton`, and `ProductTag`), copy those too.

### If the repo is cloned locally

If `~/my-design-system/` exists, you can copy directly from `src/components/` instead.

### When to fall back to the spec tables

Only when:
- The component you need does not exist in PROSE-COMPONENTS.md
- The user explicitly asks for an inline/one-off variant
- You're documenting a new component to add to the system

---

## Design Personality

Prose has an **editorial, warm, premium** aesthetic — upscale magazine, not SaaS dashboard.

- **Saol Text** serif headings: elegant, editorial character
- Warm neutral palette (creams and tans, never cool grays)
- **Simplon Mono** uppercase labels: structured, typographic contrast
- Coral accent (`#F69371`): single pop of energy, reserve for primary CTAs
- Generous whitespace — never cram elements
- One subtle shadow only — restraint is the default

---

## Typography

Three font families only. Never use any others.

### Font Families
| Role     | Family            | Tailwind Class  |
|----------|-------------------|-----------------|
| Headings | **Saol Text**     | `font-heading`  |
| Body     | **Simplon Norm**  | `font-body`     |
| Labels   | **Simplon Mono**  | `font-label`    |

### Headings — Saol Text, weight 300 (light)
Always light weight. Never bold headings. Tight negative letter-spacing.

| Level | Size  | Line Height    | Letter Spacing | Tailwind                    |
|-------|-------|----------------|----------------|-----------------------------|
| H1    | 48px  | 110% (52.8px)  | -1.44px        | `font-heading text-5xl`     |
| H2    | 40px  | 110% (44px)    | -1.2px         | `font-heading text-4xl`     |
| H3    | 32px  | 110% (35.2px)  | -0.96px        | `font-heading text-3xl`     |
| H4    | 24px  | 110% (26.4px)  | -0.72px        | `font-heading text-2xl`     |
| H5    | 20px  | 120% (24px)    | -0.6px         | `font-heading text-xl`      |
| H6    | 16px  | 120% (19.2px)  | -0.48px        | `font-heading text-base`    |

### Body — Simplon Norm (Regular 400, Medium 500, Italic)
| Token  | Size | Line Height   | Letter Spacing (reg) | Tailwind                 |
|--------|------|---------------|----------------------|--------------------------|
| body-1 | 24px | 150% (36px)   | 0.48px               | `font-body text-2xl`     |
| body-2 | 20px | 150% (30px)   | 0.4px                | `font-body text-xl`      |
| body-3 | 16px | 150% (24px)   | 0.32px               | `font-body text-base`    |
| body-4 | 14px | 150% (21px)   | 0.28px               | `font-body text-sm`      |
| body-5 | 12px | 150% (18px)   | 0.24px               | `font-body text-xs`      |
| body-6 | 10px | 150% (15px)   | 0.2px                | `font-body text-[10px]`  |

### Labels — Simplon Mono, ALWAYS UPPERCASE
| Token   | Size | Line Height    | Letter Spacing | Tailwind                                          |
|---------|------|----------------|----------------|---------------------------------------------------|
| label-1 | 14px | 120% (16.8px)  | 1.12px         | `font-label text-sm uppercase tracking-wider`     |
| label-2 | 12px | 120% (14.4px)  | 0.96px         | `font-label text-xs uppercase tracking-wide`      |
| label-3 | 10px | 120% (12px)    | 0.8px          | `font-label text-[10px] uppercase tracking-wide`  |

---

## Colors

Always use Tailwind token classes. Never raw hex. Never default Tailwind colors.

### Primary (olive green)
| Token       | Hex       | Tailwind          | Use                                    |
|-------------|-----------|--------------------|----------------------------------------|
| primary-100 | `#DCE0D2` | `bg-primary-100`   | Light background highlights            |
| primary-200 | `#B9C2A6` | `bg-primary-200`   | Hover states on light primary bg       |
| primary-300 | `#4D523C` | `bg-primary-300`   | Primary button backgrounds, icons      |
| primary-400 | `#323429` | `bg-primary-400`   | Darkest green, high-contrast text      |

### Neutral (warm grays + cream)
| Token       | Hex       | Tailwind           | Use                                     |
|-------------|-----------|---------------------|-----------------------------------------|
| neutral-100 | `#FFFFFF` | `bg-neutral-100`    | Card/panel backgrounds, button text     |
| neutral-200 | `#F9F7F2` | `bg-neutral-200`    | **Page background** (never pure white)  |
| neutral-300 | `#F1ECE0` | `bg-neutral-300`    | Card backgrounds, secondary panels      |
| neutral-400 | `#E2D9C2` | `bg-neutral-400`    | Borders, dividers (warm)                |
| neutral-500 | `#C8BFA8` | `bg-neutral-500`    | Disabled/muted borders                  |
| neutral-600 | `#EAEAEA` | `bg-neutral-600`    | Light dividers (cool gray)              |
| neutral-700 | `#A6A6A6` | `text-neutral-700`  | Placeholder text, disabled icons        |
| neutral-800 | `#6C6C6C` | `text-neutral-800`  | Secondary text                          |
| neutral-900 | `#161716` | `text-neutral-900`  | Primary text (near-black)               |

### Accent (coral / salmon)
| Token      | Hex       | Tailwind         | Use                                |
|------------|-----------|-------------------|------------------------------------|
| accent-100 | `#FCDED3` | `bg-accent-100`  | Light accent background            |
| accent-200 | `#F69371` | `bg-accent-200`  | **Primary CTA buttons**, links     |
| accent-300 | `#C5765A` | `bg-accent-300`  | Hover/pressed on accent            |

### Secondary (steel blue)
| Token          | Hex       | Tailwind            | Use                         |
|----------------|-----------|----------------------|-----------------------------|
| secondary-100  | `#D0E2E8` | `bg-secondary-100`  | Info panel backgrounds      |
| secondary-200  | `#A2C6D1` | `bg-secondary-200`  | Secondary buttons, borders  |
| secondary-300  | `#88ACB7` | `bg-secondary-300`  | Hover/active on secondary   |

### Tertiary (lavender)
| Token          | Hex       | Tailwind            | Use                         |
|----------------|-----------|----------------------|-----------------------------|
| tertiary-100   | `#F9F9FE` | `bg-tertiary-100`   | Light purple background     |
| tertiary-200   | `#EAD7F3` | `bg-tertiary-200`   | Purple highlights, tags     |
| tertiary-300   | `#BBACC2` | `bg-tertiary-300`   | Purple borders, muted text  |

### Highlight (lime)
| Token          | Hex       | Tailwind            | Use                     |
|----------------|-----------|----------------------|-------------------------|
| highlight-100  | `#F6FFCD` | `bg-highlight-100`  | Highlight background    |
| highlight-200  | `#ECFF92` | `bg-highlight-200`  | Strong highlight, badges|

### Success / Error
| Token       | Hex       | Tailwind           | Use                             |
|-------------|-----------|---------------------|---------------------------------|
| success-100 | `#BED9C7` | `bg-success-100`   | Success background              |
| success-200 | `#2E844A` | `text-success-200` | Success text, checkmarks        |
| error-100   | `#E8CAC6` | `bg-error-100`     | Error background                |
| error-200   | `#B45446` | `text-error-200`   | Error text, destructive actions |

### Common Pairings
| Context           | Background    | Text/Icon     | Border        |
|-------------------|---------------|---------------|---------------|
| Page              | neutral-200   | neutral-900   | —             |
| Card              | neutral-100   | neutral-900   | neutral-400   |
| Primary button    | primary-300   | neutral-100   | —             |
| Accent CTA        | accent-200    | neutral-100   | —             |
| Disabled          | —             | neutral-700   | neutral-500   |

---

## Spacing

4px base grid. Only these values.

| Value | Tailwind | Use                          |
|-------|----------|------------------------------|
| 0     | `0`      | No spacing                   |
| 4px   | `1`      | Tight internal padding       |
| 8px   | `2`      | Compact gaps, icon spacing   |
| 12px  | `3`      | Default inner padding        |
| 16px  | `4`      | Standard gap                 |
| 24px  | `6`      | Card padding, section gaps   |
| 32px  | `8`      | Large section spacing        |
| 48px  | `12`     | Major section breaks         |
| 64px  | `16`     | Hero/page-level breaks       |
| 80px  | `20`     | Largest spacing              |

---

## Border Radius

| Value  | Tailwind             | Use                           |
|--------|----------------------|-------------------------------|
| 0      | `rounded-none`       | Sharp corners                 |
| 4px    | `rounded`            | Small chips, tags             |
| 10px   | `rounded-[10px]`     | Buttons, inputs               |
| 12px   | `rounded-xl`         | Cards, panels                 |
| 20px   | `rounded-[20px]`     | Large cards, modals           |
| 60px   | `rounded-[60px]`     | Pills, badges                 |
| 400px  | `rounded-full`       | Avatars, circular buttons     |

---

## Shadow

One shadow only. Use sparingly: `shadow-[2px_2px_3px_#eaeaea]`

---

## Grid & Layout

| Breakpoint | Columns | Gutter | Side Padding | Tailwind                         |
|------------|---------|--------|--------------|----------------------------------|
| Large      | 12      | 24px   | 48px         | `grid grid-cols-12 gap-6 px-12` |
| Medium     | 6       | 16px   | 20px         | `grid grid-cols-6 gap-4 px-5`   |
| Small      | 4       | 16px   | 24px         | `grid grid-cols-4 gap-4 px-6`   |

Page wrapper: `mx-auto min-w-[960px] max-w-[1440px] px-8`

---

## Tailwind Config

Use this exact config for `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: { 100: "#DCE0D2", 200: "#B9C2A6", 300: "#4D523C", 400: "#323429" },
      neutral: { 100: "#FFFFFF", 200: "#F9F7F2", 300: "#F1ECE0", 400: "#E2D9C2", 500: "#C8BFA8", 600: "#EAEAEA", 700: "#A6A6A6", 800: "#6C6C6C", 900: "#161716" },
      accent: { 100: "#FCDED3", 200: "#F69371", 300: "#C5765A" },
      secondary: { 100: "#D0E2E8", 200: "#A2C6D1", 300: "#88ACB7" },
      tertiary: { 100: "#F9F9FE", 200: "#EAD7F3", 300: "#BBACC2" },
      highlight: { 100: "#F6FFCD", 200: "#ECFF92" },
      success: { 100: "#BED9C7", 200: "#2E844A" },
      error: { 100: "#E8CAC6", 200: "#B45446" },
    },
    fontFamily: {
      heading: ['"Saol Text"', "serif"],
      body: ['"Simplon Norm"', "sans-serif"],
      label: ['"Simplon Mono"', "monospace"],
    },
    extend: {
      boxShadow: { prose: "2px 2px 3px #eaeaea" },
      borderRadius: { 10: "10px", 12: "12px", 20: "20px", 60: "60px" },
    },
  },
  plugins: [],
};
```

---

## Fonts — CDN (no download needed)

Fonts load directly from cdn2.prose.com. No local font files required.

### @font-face declarations for src/index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Saol Text — Headings */
@font-face { font-family: "Saol Text"; src: url("https://cdn2.prose.com/build/client/fonts/saol-text-light.woff2") format("woff2"); font-weight: 300; font-style: normal; font-display: swap; }

/* Simplon Norm — Body */
@font-face { font-family: "Simplon Norm"; src: url("https://cdn2.prose.com/build/client/fonts/SimplonNorm-Light-WebS.woff2") format("woff2"); font-weight: 300; font-style: normal; font-display: swap; }
@font-face { font-family: "Simplon Norm"; src: url("https://cdn2.prose.com/build/client/fonts/SimplonNorm-Regular-WebS.woff2") format("woff2"); font-weight: 400; font-style: normal; font-display: swap; }
@font-face { font-family: "Simplon Norm"; src: url("https://cdn2.prose.com/build/client/fonts/SimplonNorm-Medium-WebS.woff2") format("woff2"); font-weight: 500; font-style: normal; font-display: swap; }
@font-face { font-family: "Simplon Norm"; src: url("https://cdn2.prose.com/build/client/fonts/SimplonNorm-Bold-WebS.woff2") format("woff2"); font-weight: 700; font-style: normal; font-display: swap; }

/* Simplon Mono — Labels (ALWAYS UPPERCASE) */
@font-face { font-family: "Simplon Mono"; src: url("https://cdn2.prose.com/build/client/fonts/SimplonMono-Regular-WebS.woff2") format("woff2"); font-weight: 400; font-style: normal; font-display: swap; }
@font-face { font-family: "Simplon Mono"; src: url("https://cdn2.prose.com/build/client/fonts/SimplonMono-Medium-WebS.woff2") format("woff2"); font-weight: 500; font-style: normal; font-display: swap; }

body {
  background-color: #F9F7F2;
  color: #161716;
  font-family: "Simplon Norm", sans-serif;
}
```

---

## Buttons

All buttons use **Simplon Mono** (font-label), 12px, weight 500, uppercase, tracking 0.96px. Pill-shaped with `rounded-[60px]`. Height 44px, padding `px-8 py-3.5`.

### Appearances (exact Figma values)

| Appearance | Default | Hover | Disabled |
|---|---|---|---|
| **Primary Light** | `bg-primary-400 text-neutral-100` | `bg-primary-300 text-neutral-100` | `bg-neutral-800 text-neutral-100` |
| **Primary Dark** | `bg-neutral-100 text-primary-400` | `bg-primary-100 text-primary-400` | `bg-neutral-800 text-neutral-100` |
| **Secondary Light** (outlined) | `border border-primary-400 text-primary-400` | `bg-primary-300 text-neutral-100` (fills solid) | `border border-neutral-700 text-neutral-700` |
| **Secondary Dark** (outlined, for dark bgs) | `border border-neutral-100 text-neutral-100` | `bg-neutral-100 text-primary-400` (fills solid) | `border border-neutral-700 text-neutral-700` |
| **Accent** | `bg-accent-200 text-primary-400` | `bg-accent-300 text-neutral-100` | — |
| **Destructive** (outlined) | `border border-error-200 text-error-200` | `bg-error-200 text-neutral-100` (fills solid) | — |

### Loading State
`bg-neutral-800` with a white spinning icon replacing the label text.

### Sizes
- **Fit content**: `w-auto h-[44px] px-8 py-3.5`
- **Full width**: `w-full h-[44px] px-8 py-3.5`

### Floating
Add `shadow-[2px_2px_3px_#eaeaea]` to any button for the floating variant.

### Button base classes
```
font-label text-xs font-medium uppercase tracking-[0.96px] rounded-[60px] h-[44px] px-8 py-3.5 transition-colors
```

### Button Mini

44x44px circular icon buttons for back navigation or add actions.

- **Size:** 44x44px (`size-[44px]`)
- **Shape:** circle (`rounded-full`)
- **Variants:** `back` (left arrow) or `add` (plus icon)
- **Floating:** optional `shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]`

| Color | Background | Icon Color | Use on |
|---|---|---|---|
| **Light** | `bg-primary-400` | `text-neutral-100` | Light/neutral backgrounds |
| **Dark** | `bg-neutral-200` | `text-primary-400` | Dark/primary backgrounds |

#### Back arrow icon
SVG 18x14px: arrow pointing left with `stroke="currentColor"` strokeWidth 1.5, strokeLinecap round.

#### Plus icon
SVG 16x16px: crosshair plus with `stroke="currentColor"` strokeWidth 1.5.

---

## Text Links

Inline links for when a full button is unnecessary. Three types, each with light and dark color modes.

### Primary & Secondary Links
- **Font:** Simplon Mono, 12px, weight 500, uppercase, tracking 0.96px (label-2 medium)
- **Underline:** animated line beneath text, scales out on hover
- **Optional arrow icon:** 20px circle outline with right-pointing caret, placed after text with `gap-2`

### Simple Links
- **Font:** Simplon Norm, 14px, weight 400, sentence case (body-4 regular)
- **Underline:** static `text-decoration: underline`, no animation

### Color Modes

| Type × Color | Default Text | Hover Text | Underline Color | Disabled |
|---|---|---|---|---|
| **Primary Light** | `text-primary-400` | `text-primary-300` | `bg-accent-300` (coral) | `text-neutral-700` |
| **Primary Dark** | `text-neutral-100` | `text-neutral-100` | `bg-accent-300` (coral) | `text-neutral-700` |
| **Secondary Light** | `text-primary-400` | `text-primary-300` | `bg-primary-400` | `text-neutral-700` |
| **Secondary Dark** | `text-neutral-100` | `text-neutral-100` | `bg-neutral-100` | `text-neutral-700` |
| **Simple Light** | `text-primary-400` | `text-primary-300` | inherits text color | `text-neutral-700` |
| **Simple Dark** | `text-neutral-100` | `text-neutral-100` | inherits text color | `text-neutral-700` |

### Animated Underline (Primary & Secondary)
- 1px-tall `<span>` below text, full width
- `origin-left scale-x-100` by default
- On hover: `scale-x-0 origin-right` (slides out left-to-right)
- Transition: `transition-transform duration-300 ease-out`
- 4px gap between text and underline

---

## Tags

Offer/promo badges with lime highlight background.

- **Background:** `bg-highlight-200`
- **Text color:** `text-primary-400`
- **Font:** Simplon Mono, ALWAYS UPPERCASE
- **Padding:** 8px (`p-2`)
- **Border radius:** 4px (`rounded`)

### Sizes
| Size | Font Token | Tailwind |
|---|---|---|
| **Default** | label-1 medium (14px, 500) | `font-label text-sm font-medium uppercase tracking-wider` |
| **Small** | label-2 medium (12px, 500) | `font-label text-xs font-medium uppercase tracking-wide` |

### Tag base classes
```
inline-flex items-center justify-center p-2 rounded bg-highlight-200 text-primary-400 font-label font-medium uppercase whitespace-nowrap
```

---

## Toasts

Notification bars for add/remove/pause/error feedback. Fixed height, dark background, icon + message.

### Dimensions
- **Height:** 60px (`h-[60px]`)
- **Padding:** 12px vertical, 16px horizontal (`py-3 px-4`)
- **Border radius:** 12px (`rounded-xl`)
- **Shadow:** `shadow-[0px_8px_24px_0px_rgba(0,0,0,0.18)]`

### Breakpoints
| Breakpoint | Width |
|---|---|
| **Mobile** | 343px (`w-[343px]`) |
| **Desktop** | 600px (`w-[600px]`) |

### Types

| Type | Background | Icon |
|---|---|---|
| **Removal** | `bg-primary-400` | X icon (close) in circle |
| **Added** | `bg-primary-400` | Checkmark in circle |
| **Paused** | `bg-primary-400` | Pause bars in circle |
| **Error** | `bg-error-200` | X icon (close) in circle |

### Icon Circle
- **Size:** 24x24px (`size-[24px]`)
- **Background:** `bg-white/15` (15% white opacity)
- **Shape:** circle (`rounded-full`)
- **SVG icons:** white stroke, centered in circle

### Message Text
- **Font:** body-4 medium — `font-body text-sm font-medium tracking-[0.28px]`
- **Color:** `text-neutral-100`

### Optional Product Image
- **Size:** 32x40px (`w-[32px] h-[40px]`)
- **Border radius:** 6px (`rounded-[6px]`)
- **Fit:** `object-cover`
- **Position:** right side of toast, after message text

### Layout
```
flex items-center h-[60px] py-3 px-4 rounded-xl
  └─ flex items-center justify-between w-full
       ├─ flex items-center gap-4  (icon + message)
       └─ optional product image (right-aligned)
```

### Behavior
- Always appears at the top of the screen, horizontally centered
- 24px padding above the toast (`top-6`)
- If a Prose nav bar is present on the page, the toast appears directly below the nav bar (not overlapping it) with 24px spacing
- Position: `fixed` so it stays visible on scroll

---

## Logo

The Prose wordmark is available as an inline SVG component at `src/components/Logo/Logo.tsx`.

### Usage
```tsx
import { Logo } from "../components/Logo";

<Logo variant="dark" height={32} />
<Logo variant="light" height={24} />
```

### Props
| Prop      | Type              | Default  | Description                                      |
|-----------|-------------------|----------|--------------------------------------------------|
| variant   | `"dark" \| "light"` | `"dark"` | Dark (primary-400) for light bgs, Light (neutral-100) for dark bgs |
| height    | `number`          | `32`     | Height in px — width scales proportionally (≈3.46:1 aspect ratio) |
| className | `string`          | `""`     | Additional classes                               |

### Color mapping
| Variant | Token used       | Hex       | Use on                |
|---------|------------------|-----------|-----------------------|
| dark    | `primary-400`    | `#323429` | Light/neutral backgrounds |
| light   | `neutral-100`    | `#FFFFFF` | Dark/primary backgrounds  |

The SVG uses `currentColor` so it inherits from the Tailwind text color class applied by the variant.

---

## Input Fields

Underline-style fields — NOT fully bordered boxes. No border-radius on inputs.

### Dimensions
- **Height:** 56px (`h-[56px]`)
- **Padding:** 16px horizontal, 8px vertical (`px-4 py-2`)
- **Border:** bottom-only 1px `neutral-600`, no side/top borders
- **Border radius:** 0 (`rounded-none`)
- **Shadow:** `shadow-[2px_2px_3px_rgba(234,234,234,0.5)]`

### Typography
- **Placeholder / value text:** body-3 (16px, weight 400, `font-body text-base`)
- **Floating label:** body-5 (12px, weight 400, `font-body text-xs`)

### States

| State | Background | Border Bottom | Placeholder/Value | Label | Helper Text |
|---|---|---|---|---|---|
| **Default** | `bg-neutral-100` | 1px `border-neutral-600` | `text-neutral-800` | hidden | — |
| **Active** | `bg-neutral-100` | 2px `border-neutral-900` | `text-neutral-900` | `text-neutral-900` (12px, floats up) | — |
| **Disabled** | `bg-neutral-600` | 1px `border-neutral-600` | `text-neutral-800` | `text-neutral-900` | — |
| **Incomplete** | `bg-neutral-100` | 2px `border-error-200` | `text-error-200` | hidden | `text-error-200` "*Required" |
| **Invalid** | `bg-neutral-100` | 2px `border-error-200` | `text-neutral-800` | `text-error-200` (12px) | `text-error-200` "*Invalid format" |
| **Complete** | `bg-neutral-100` | 2px `border-neutral-900` | `text-neutral-900` | `text-neutral-900` (12px) | — |

### Floating Label Behavior
On focus or when the field has a value, the placeholder transitions into a small label (12px) that floats to the top of the field. The bottom border thickens to 2px.

### Input base classes
```
h-[56px] w-full rounded-none border-0 border-b border-neutral-600 bg-neutral-100 px-4 py-2 font-body text-base tracking-[0.32px] text-neutral-800 shadow-[2px_2px_3px_rgba(234,234,234,0.5)] placeholder:text-neutral-800 focus:border-b-2 focus:border-neutral-900 focus:text-neutral-900 focus:outline-none transition-colors
```

### Dropdown / Select
Same base dimensions and underline style as text inputs. Add a chevron icon on the right side (`pr-10`). Chevron color: `text-neutral-800`.

---

## Selectors

Pill-shaped selection controls for quiz/survey flows. NOT standard form selects.

### Text Pill — Fixed Width

Container: `flex flex-col gap-3 items-start`

Each pill: `flex flex-col items-start justify-center py-4 rounded-[10px] overflow-clip text-left`
- **Width:** 327px (`w-[327px]`)
- **Height:** 55px (deselected), 53px (selected — border removed)
- **Padding:** 16px vertical, 24px horizontal (`py-4 px-6`)
- **Border radius:** 10px (`rounded-[10px]`)

**Title text:** body-4 regular — `font-body text-sm tracking-[0.28px]`

| State | Background | Border | Title Color |
|---|---|---|---|
| **Deselected** | `bg-neutral-100` | 1px `border-neutral-300` | `text-primary-400` |
| **Selected** | `bg-primary-200` | none (border removed) | `text-neutral-900` |

### Text Pill — With Subcopy

Same container and pill base as Fixed. Taller to accommodate subcopy.
- **Width:** 327px (`w-[327px]`)
- **Height:** 73px (deselected), 71px (selected)
- **Padding:** 16px vertical, 24px horizontal (`py-4 px-6`)

**Title text:** body-4 regular — `font-body text-sm tracking-[0.28px]`
**Subcopy text:** body-5 regular — `font-body text-xs tracking-[0.24px]`
Gap between title and subcopy: 0px (stacked via line-height).

| State | Background | Border | Title Color | Subcopy Color |
|---|---|---|---|---|
| **Deselected** | `bg-neutral-100` | 1px `border-neutral-300` | `text-primary-400` | `text-neutral-800` |
| **Selected** | `bg-primary-200` | none | `text-neutral-900` | `text-neutral-900` |

### Text Pill — Hug (fit-content width)

Container: `flex flex-wrap gap-3 items-start` (horizontal row, wraps)

Each pill: same as Fixed except width and horizontal padding.
- **Width:** `w-fit` (auto-sized to content)
- **Height:** 55px (deselected), 53px (selected)
- **Padding:** 16px vertical, 24px horizontal (`py-4 px-6`)
- **Border radius:** 10px (`rounded-[10px]`)
- Same font and color states as Fixed

### Image Card — Mobile

Container: `flex flex-wrap gap-4 items-start` (horizontal row, wraps, 16px gap)

Each card: `flex items-center rounded-lg overflow-clip`
- **Width:** 327px (`w-[327px]`)
- **Height:** 129px
- **Border radius:** 8px (`rounded-lg`)
- **Background:** transparent

**Image area:**
- Width: 101px, Height: 127px (`h-[127px] w-[101px] shrink-0`)
- Border radius: `rounded-l-[10px]` (left corners only)
- Overflow: hidden
- `<img>` uses `absolute inset-0 w-full h-full object-cover`

**Text area:**
- Width: remaining space (224px computed)
- Height: 127px
- Padding: 30px vertical, 32px horizontal (`py-[30px] px-8`)
- Border radius: `rounded-r-[10px]` (right corners only)
- **Title:** body-4 regular — `font-body text-sm tracking-[0.28px]`
- **Subcopy** (optional): body-5 regular — `font-body text-xs tracking-[0.24px]`

| State | Outer Border | Text Area Bg | Title Color | Subcopy Color |
|---|---|---|---|---|
| **Deselected** | 1px `border-neutral-300` | `bg-neutral-100` | `text-primary-400` | `text-neutral-800` |
| **Selected** | 1px `border-primary-200` | `bg-primary-200` | `text-neutral-900` | `text-neutral-900` |

### Image Card — Desktop

Identical to Mobile except:
- **Width:** 368px (`w-[368px]`)
- Text area width: 265px (computed, vs 224px mobile)
- All other styles, colors, padding, border-radius identical

### Frequency Selector

Collapsible frequency/price selector with radio-button dropdown. Used inside RoutineCard.

- **Width:** 295px
- **Border:** `border-neutral-400 rounded-[10px]`
- **"Added to cart" label:** floating above border, `bg-neutral-100 px-1`, body-6 regular (10px)

**Selection modes:**

| Mode | Behavior |
|---|---|
| **subscription** | Default to first subscription option, expandable |
| **one-time** | Default to "One-time purchase", expandable |
| **accessory** | One-time only, NOT expandable (no chevron) |

**Header (collapsed):**
- `px-3 py-4 border border-neutral-400 rounded-[10px]`
- Label: body-5 regular — `font-body text-xs tracking-[0.24px] text-neutral-900`
- Note (optional): body-6 regular — `font-body text-[10px] tracking-[0.2px] text-neutral-800`
- Price: body-4 medium — `font-body text-sm font-medium text-neutral-900`
- Subscription price: `bg-highlight-200 rounded px-1`
- Original price: body-6, `line-through text-neutral-800`
- Vertical divider + chevron (subscription/one-time only)

**Dropdown rows (expanded):**
- `border-l border-r border-b border-neutral-400 px-3 py-4`
- Last row: `rounded-b-[10px]`
- Radio button: small (20px) + label (body-5 regular) + price stack
- Selected radio: filled `primary-400`

**Default options:**
1. "Every 4 weeks [recommended]" — $14.00 (highlight) / ~~$35.00~~ + "60% off first subscription order"
2. "Every 8 weeks" — $14.00 (highlight) / ~~$35.00~~
3. "Every 12 weeks" — $14.00 (highlight) / ~~$35.00~~
4. "One-time purchase" — $35.00

---

## UI Controls

### Radio Buttons

SVG-based circles. Two sizes available. Three states each.

#### Small (20px)
- **Size:** 20x20px (`size-5`)
- **Inner dot:** 15x15px (r=7.5)

| State | Outer Ring | Inner Dot |
|---|---|---|
| **Empty** | 1px stroke `neutral-700` | none |
| **Selected** | 1px stroke `primary-400` | 15px filled circle `primary-400` (r=7.5) |
| **Disabled** | 1px stroke `neutral-700` | 15px filled circle `neutral-700` (r=7.5) |

#### Large (24px)
- **Size:** 24x24px (`size-6`)
- **Inner dot:** 18x18px (r=9)

| State | Outer Ring | Inner Dot |
|---|---|---|
| **Empty** | 1px stroke `neutral-700` | none |
| **Selected** | 1px stroke `primary-400` | 18px filled circle `primary-400` (r=9) |
| **Disabled** | 1px stroke `neutral-700` | 18px filled circle `neutral-700` (r=9) |

#### Radio label text
`font-body text-sm tracking-[0.28px] text-neutral-900` — placed to the right with `gap-3`.

### Checkboxes

Square checkboxes, no border-radius.

- **Size:** 28x28px (`size-7`)
- **Border radius:** 0 (`rounded-none`)
- **Shadow:** `shadow-[2px_2px_3px_#eaeaea]`

| State | Background | Border | Icon |
|---|---|---|---|
| **Empty** | `bg-neutral-100` | 1px `border-neutral-700/50` | — |
| **Selected** | `bg-primary-300` | none | white checkmark |
| **Inactive** | `bg-neutral-200` | none | dash icon |
| **Read-only** | `bg-primary-300 opacity-50` | none | white checkmark (dimmed) |

#### Checkbox with label
Label text: `font-body text-sm text-neutral-900` with `gap-3` spacing.

### Toggle Switches

Pill-shaped track with sliding circular thumb.

- **Track:** 55px wide, 24px tall, fully rounded (`rounded-full`)
- **Thumb:** 18px circle, `bg-neutral-100`, `shadow-[0_1px_2px_rgba(0,0,0,0.15)]`
- **Thumb position:** 3px from left (off), slides right (on)
- **Transition:** `transition-colors duration-200` on track, `transition-all duration-200` on thumb

| State | Track Color |
|---|---|
| **Off** | `bg-neutral-600` |
| **On** | `bg-primary-300` |

#### Toggle with labels
"OFF" / "ON" text alongside toggle, or headline + description text at body-4.

---

## Accordion

Three variants. All share a 1px `neutral-600` divider between items.

### Product Details Accordion

Used for collapsible product information sections (e.g. "How Prose does custom").

**Header button:**
- Display: `flex justify-between items-center`
- Height: 70px, full width
- Gap: 12px
- Background: transparent
- Cursor: pointer

**Header text:** label-2 medium — `font-label text-xs font-medium uppercase tracking-wide text-primary-300`

**Chevron icon:**
- SVG 12x12px, viewBox `0 0 12 12`
- Path: `M2 4.5L6 8.5L10 4.5` (down-pointing caret)
- Stroke: `primary-300`, stroke-width 1.2, fill none
- **Closed:** no rotation
- **Open:** `rotate-180`
- Transition: `transition-transform duration-200`

**Expanded content:**
- Padding: `0 0 12px` (12px bottom)
- Numbered items in flex rows with `gap-4`
- Number: `font-body text-sm font-medium text-primary-300`
- Item title: `font-body text-sm font-medium text-neutral-800`
- Item description: `font-body text-sm text-neutral-800`

**Divider:** 1px height, full width, `bg-neutral-600`

### FAQ Accordion — Mobile (375px)

Used for FAQ sections. Sits inside a white card.

**Card container:**
- Background: `bg-neutral-100`
- Padding: 24px (`p-6`)
- Border radius: 10px (`rounded-[10px]`)

**Item button:**
- Display: `flex justify-between items-center`
- Height: 53px, full width
- Padding: `py-2`
- Gap: 12px
- Cursor: pointer
- Background: transparent

**Item text:** body-4 regular — `font-body text-sm tracking-[0.28px] text-primary-400`

**Plus/minus icon:**
- SVG 10x10px, viewBox `0 0 10 10`
- Two lines forming a "+" (horizontal: `x1=0 y1=5 x2=10 y2=5`, vertical: `x1=5 y1=0 x2=5 y2=10`)
- Stroke: `neutral-700`, stroke-width 1, fill none
- **Open:** vertical line hidden (opacity 0), leaving only horizontal "−"
- Transition: `transition-opacity duration-200`

**Divider:** 1px height, full width, `bg-neutral-600`

### FAQ Accordion — Desktop

Two-column layout inside a white card.

**Card container:**
- Display: `flex flex-row`
- Gap: 64px (`gap-16`)
- Background: `bg-neutral-100`
- Padding: 64px (`p-16`)
- Border radius: 10px (`rounded-[10px]`)
- Left column: "FAQs" title
- Right column: accordion items

**Item text:** body-3 regular — `font-body text-base tracking-[0.32px] text-primary-400`

**Icon and divider:** same as mobile FAQ variant.

---

## Sitewide Banner

Full-width promotional banner at the top of every page. Part of the Navigation component but also usable standalone.

- **Height:** 40px (`h-[40px]`)
- **Width:** full (`w-full`)
- **Text:** body-5 regular — `font-body text-xs tracking-[0.24px]`
- **Text alignment:** center, underlined
- **Layout:** `flex items-center justify-center`

### States

| State | Background | Text Color | Default Message |
|---|---|---|---|
| **No Promo** | `bg-primary-400` | `text-neutral-100` | "500k+ 5-star Prose haircare reviews on Review & Refine®" |
| **Subscribe** | `bg-highlight-200` | `text-primary-400` | "15% off your custom haircare orders when you subscribe" |
| **Promo** | `bg-tertiary-200` | `text-primary-400` | "50% off your first custom haircare order when you subscribe" |

---

## Navigation

Two-part site header: Sitewide Banner (40px) + Nav bar (56px desktop, 55px mobile).

### Structure

```
Navigation
├── SitewideBanner (40px)
└── Nav bar (56px / 55px)
    ├── Left: Logo or back action
    ├── Center (simplified states): Logo
    ├── Nav links (default/items-added, desktop only)
    └── Right: Icons (Cart, Account) or "Exit"
```

### Nav Bar
- **Height:** 56px desktop, 55px mobile
- **Background:** `bg-neutral-100`
- **Padding:** 32px horizontal desktop (`px-8`), 24px horizontal mobile (`px-6`)

### Desktop — Default / Items Added
- **Left:** Prose logo (22px height) + nav links in a row
- **Nav links:** body-4 regular — `font-body text-sm tracking-[0.28px] text-primary-400`
- **Links:** Haircare, Skincare, Accessories, Our Ingredients, Our Story (with dropdown caret), Reviews, Gift Prose, Subscribe & Save
- **Right:** Cart icon + Account icon, gap 32px
- **Items Added:** Cart icon has a 16px accent-200 dot badge (top-right)

### Desktop — Consultation
- **Left:** "← Back" text link (body-4 regular, primary-400)
- **Center:** Prose logo (22px)
- **Right:** "Exit" text link (body-4 regular, primary-400)

### Desktop — Checkout
- **Left:** Back arrow icon (18x14px, primary-400)
- **Center:** Prose logo (22px)
- **Right:** empty spacer

### Mobile — Default / Items Added
- **Left:** Hamburger icon (20x18px, primary-400)
- **Center-left:** Prose logo (18px height)
- **Right:** Cart icon + Account icon, gap 16px
- **Items Added:** Cart icon has accent-200 dot badge

### Mobile — Consultation / Checkout
Same layout as desktop simplified states but with 18px logo height.

### Icons
| Icon | Size | Source |
|---|---|---|
| Account | 21x22px | `images/icons/Nav/Account.svg` |
| Cart | 25x22px | `images/icons/Nav/Cart.svg` |
| Hamburger | 20x18px | `images/icons/Nav/Hamburger.svg` |
| Close (X) | 17x17px | Inline SVG |
| Back Arrow | 18x14px | Inline SVG |
| Dropdown Caret | 8x5px | Inline SVG |

All icons use `currentColor` (inherit from parent text color, typically `text-primary-400`).

### Cart Badge (Items Added state)
- **Size:** 16px circle (`size-[16px] rounded-full`)
- **Background:** `bg-accent-200`
- **Position:** absolute, top-right of cart icon

---

## Promo Modals

Promotional overlay modals for offers, email capture, and announcements. Configurable content blocks.

### Dimensions

| Size | Width | Image Height | Content Padding | Radius |
|---|---|---|---|---|
| **Desktop** | 555px | 350px | 40px | `rounded-[20px]` |
| **Mobile** | 375px | 236px | 24px | `rounded-t-[10px]` (bottom-sheet) |

### Structure

```
PromoModal
├── Image area (optional, with close button top-right)
└── Content area (bg-neutral-200)
    ├── Close button (no-image variant, top-right)
    ├── Eyebrow (optional — plain label or highlight tag)
    ├── Headline (H3 — Saol Text 32px, weight 300)
    ├── Subhead (body-4 regular, 14px)
    ├── Form field (optional — 56px input, border neutral-600)
    ├── CTA button (primary-light, full width)
    ├── Text link (optional — underlined body-4)
    └── Disclaimer (optional — body-5, 12px, neutral-800)
```

### Close Button
- **Size:** 32x32px circle
- **On image:** `bg-white/80` with X icon, positioned 24px from top-right of image
- **No image:** `bg-neutral-200` with X icon, top-right of content area

### Eyebrow Options
- **Plain:** label-1 regular — `font-label text-sm uppercase tracking-wider text-primary-400`
- **Highlight:** label-2 medium inside a Tag — `bg-highlight-200 rounded p-2 font-label text-xs uppercase tracking-wide text-primary-400`

### Content Typography
- **Headline:** H3 — `font-heading text-[32px] font-light tracking-[-0.96px] text-primary-400`
- **Subhead:** body-4 regular — `font-body text-sm tracking-[0.28px] text-primary-400`
- **Disclaimer:** body-5 regular — `font-body text-xs tracking-[0.24px] text-neutral-800`
- All text center-aligned

### Disclaimer Text
```
By submitting your email address, you agree to receive marketing emails from
Prose. You also acknowledge and agree to our Terms and confirm that you have
read and understand our Privacy Policy.
```
"Terms" and "Privacy Policy" are underlined links.

---

## Routine Cards

Product routine cards showing product details, optional key ingredients, preferences, and a frequency/price selector. Used in the cart/routine builder flow.

### Variants

| Type | Description |
|---|---|
| **one-time** | Simple card: product image, name, description, size, one-time price |
| **subscription** | Full card: + "Recommended" tag, key ingredients (collapsed), preferences, subscription pricing with discount |
| **subscription-expanded** | Same as subscription but first ingredient expanded with description |

### Dimensions

- **Width:** 327px
- **Background:** `bg-neutral-100`
- **Radius:** `rounded-[10px]`
- **Bottom padding:** `pb-6` (24px)
- **Section gap:** `gap-6` (24px)

### Structure

```
RoutineCard
├── Product image area (h-[220px], w-full, object-cover)
│   ├── "Recommended" tag (subscription only — bg-white/50 rounded px-2 py-1)
│   └── Close button (32x32px, top-right)
├── Content area (px-4)
│   ├── Product name — H3 (font-heading text-[32px] font-light tracking-[-0.96px] text-primary-400)
│   ├── Description — body-5 regular (font-body text-xs tracking-[0.24px] text-primary-300)
│   ├── Size + "See full details" link (subscription, underlined)
│   ├── Key Ingredients (subscription only)
│   │   ├── Section label — label-2 medium (font-label text-xs uppercase tracking-wide text-primary-300)
│   │   └── Ingredient rows (border-b border-neutral-600)
│   │       ├── Image (32×40px)
│   │       ├── Name — body-5 medium (font-body text-xs font-medium text-primary-300)
│   │       └── Plus/Minus toggle icon (12px)
│   │       └── [Expanded] Description — body-5 regular, pl-[34px]
│   └── Preferences (subscription only)
│       ├── Section label — label-2 medium uppercase
│       └── Text — body-5 regular
└── FrequencySelector component (see Selectors > Frequency Selector section)
    └── Modes: subscription (expandable) / one-time (expandable) / accessory (static)
```

### Key classes
- Card: `flex flex-col gap-6 items-center pb-6 rounded-[10px] bg-neutral-100 w-[327px]`
- Product name: `font-heading text-[32px] font-light leading-[1.1] tracking-[-0.96px] text-primary-400`
- Section labels: `font-label text-xs font-medium uppercase tracking-wide text-primary-300`
- Ingredient row: `flex items-center gap-2 border-b border-neutral-600 pb-2`
- Subscription price: `bg-highlight-200 rounded px-1 text-sm font-medium text-neutral-900`

---

## Hard Rules

1. Never use default Tailwind colors (blue-500, slate-300, etc.)
2. Never use arbitrary values (w-[347px], text-[15px], p-[13px])
3. Never bold headings — always font-weight 300
4. Never use sans-serif for headings — always Saol Text
5. Never forget uppercase on labels — ALWAYS uppercase
6. Never use cool/blue-gray neutrals — warm cream tones only
7. Never skip letter-spacing on body text and labels
8. Never invent a second shadow
9. Never use pure white as page background — always neutral-200
10. Never use raw hex in components — always Tailwind token classes
