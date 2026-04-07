# Prose Design System

> Source: [Figma — Design System Foundations](https://www.figma.com/design/LdvVTP8r3aYB4wc9lTWZfI/Design-System-Foundations)
> Extracted: 2026-03-30

---

## Color Tokens

### Primary
| Token | Hex | Usage |
|-------|-----|-------|
| `color/primary/100` | `#dce0d2` | Lightest tint — background highlights |
| `color/primary/200` | `#b9c2a6` | Light green |
| `color/primary/300` | `#4d523c` | Mid — hover / pressed states |
| `color/primary/400` | `#323429` | Brand dark green — primary surface |

### Neutral
| Token | Hex | Usage |
|-------|-----|-------|
| `color/neutral/100` | `#ffffff` | White |
| `color/neutral/200` | `#f9f7f2` | Off-white background |
| `color/neutral/300` | `#f1ece0` | Warm light background |
| `color/neutral/400` | `#e2d9c2` | Light tan |
| `color/neutral/500` | `#c8bfa8` | Muted tan |
| `color/neutral/600` | `#eaeaea` | Light dividers / subtle background |
| `color/neutral/700` | `#a6a6a6` | Secondary text / icons |
| `color/neutral/800` | `#6c6c6c` | Tertiary text / disabled background |
| `color/neutral/900` | `#161714` | Near-black |

### Accent
| Token | Hex | Usage |
|-------|-----|-------|
| `color/accent/100` | `#fcded3` | Light accent tint |
| `color/accent/200` | `#f69371` | Warm salmon — primary CTA accent |
| `color/accent/300` | `#c5765a` | Darker accent — hover state |

### Highlight
| Token | Hex | Usage |
|-------|-----|-------|
| `color/highlight/100` | `#f6ffcd` | Highlight tint |
| `color/highlight/200` | `#ecff92` | Highlight bright |

### Secondary
| Token | Hex | Usage |
|-------|-----|-------|
| `color/secondary/100` | `#d0e2e8` | Light blue |
| `color/secondary/200` | `#a2c6d1` | Mid blue |
| `color/secondary/300` | `#88acb7` | Dark blue |

### Tertiary
| Token | Hex | Usage |
|-------|-----|-------|
| `color/tertiary/100` | `#f9f9fe` | Light lavender |
| `color/tertiary/200` | `#ead7f3` | Mid lavender |
| `color/tertiary/300` | `#bbacc2` | Dark lavender |

### Error
| Token | Hex | Usage |
|-------|-----|-------|
| `color/error/100` | `#e8cac6` | Error tint |
| `color/error/200` | `#b45446` | Destructive / error |

### Success
| Token | Hex | Usage |
|-------|-----|-------|
| `color/success/100` | `#bed9c7` | Success tint |
| `color/success/200` | `#2e844a` | Success |

---

## Typography

### Font Families
| Role | Family | CSS Variable |
|------|--------|-------------|
| Headings | Saol Text | `--font-family-title` |
| Body | Simplon Norm | `--font-family-body` |
| Labels | Simplon Mono | `--font-family-label` |

### Font Weights
| Weight | Value |
|--------|-------|
| Light | 300 (headings only) |
| Regular | 400 |
| Medium | 500 |

### Headings — Saol Text Light (300)
| Style | Size | Line Height |
|-------|------|-------------|
| Heading/H1 | 48px | 110% |
| Heading/H2 | 40px | 110% |
| Heading/H3 | 32px | 110% |
| Heading/H4 | 24px | 110% |
| Heading/H5 | 20px | 120% |
| Heading/H6 | 16px | 120% |

### Body — Simplon Norm (Regular 400, Medium 500, Italic)
| Style | Size | Line Height |
|-------|------|-------------|
| Body 1 | 24px | 150% |
| Body 2 | 20px | 150% |
| Body 3 | 16px | 150% |
| Body 4 | 14px | 150% |
| Body 5 | 12px | 150% |
| Body 6 | 10px | 150% |

Each body size has Regular, Medium, and Italic variants.

### Labels — Simplon Mono (Regular 400, Medium 500)
| Style | Size | Line Height |
|-------|------|-------------|
| Label 1 | 14px | 120% |
| Label 2 | 12px | 120% |
| Label 3 | 10px | 120% |

Each label size has Regular and Medium variants (no italic).

---

## Spacing Scale

| Token | Value |
|-------|-------|
| `spacing/none` | 0px |
| `spacing/4` | 4px |
| `spacing/8` | 8px |
| `spacing/12` | 12px |
| `spacing/16` | 16px |
| `spacing/24` | 24px |
| `spacing/32` | 32px |
| `spacing/48` | 48px |
| `spacing/64` | 64px |
| `spacing/80` | 80px |

---

## Border Radius

| Token | Value |
|-------|-------|
| `radius/0` | 0px |
| `radius/4` | 4px |
| `radius/10` | 10px |
| `radius/12` | 12px |
| `radius/20` | 20px |
| `radius/60` | 60px |
| `radius/400` | 400px (pill) |

---

## Components

### Logo (page: Logo)
| Component | Variants | Properties |
|-----------|----------|------------|
| **Logo** | 2 variants | Variant (Dark, Light), Height (number, default 32px) |

The Prose wordmark with registered trademark symbol. SVG uses `currentColor` — Dark variant uses `color/primary/400`, Light variant uses `color/neutral/100`.

### Text Links (page: Text Links)
| Component | Variants | Properties |
|-----------|----------|------------|
| **TextLink** | 10 variants | Type (Primary, Secondary, Simple), Color (Light, Dark), Disabled (True, False), Has Icon (True, False) |

Primary & Secondary use Simplon Mono 12px medium uppercase with animated underline (left→right on hover). Simple uses Simplon Norm 14px regular with static text-decoration underline. Icon variant adds a 20px play/arrow circle icon.

### Input Fields (page: Inputs)
| Component | Variants | Properties |
|-----------|----------|------------|
| **InputField** | 18 variants | Type (Form field, Dropdown, Button), State (Default, Active, Disabled, Incomplete, Invalid, Complete) |

56px height, 1px border neutral/600, shadow 2px 2px 3px. Label is body/5 regular (12px), value is body/3 regular (16px). Active state has dark underline, error states (incomplete/invalid) have red underline + helper text. Disabled uses neutral/600 background. Dropdown shows caret icon, Button shows circular arrow.

### Selectors (page: Selectors)
| Component | Variants | Properties |
|-----------|----------|------------|
| **Selector** | Text pill + Image card | Selected (True/False), Size (Fixed/Hug/Mobile/Desktop), Subcopy (optional), Image (optional URL) |

Two forms: text pills and image cards. Deselected: white bg, border neutral/300, text primary/400. Selected: bg primary/200 (light green), text neutral/900. Text pills: rounded-10, body/4 regular (14px). Image cards: 127px tall, image 101px wide, rounded-8. Subcopy uses body/5 (12px).

### Buttons (page: Buttons)
| Component | Variants | Properties |
|-----------|----------|------------|
| **Buttons** | 40 variants | Appearance (Primary Light, Primary Dark, Secondary Light, Secondary Dark, Accent, Destructive), State (Default, Hover, Disabled, Loading), Size (Fit, Full), Floating (True, False) |
| **Button/Mini** | 8 variants | Variant (Back, Add), Size (Mini), Floating (True, False), Color (Light mode, Dark mode) |

### Text Links (page: Text Links)
| Component | Variants | Properties |
|-----------|----------|------------|
| **Text link** | 10 variants | Type (Primary Light, Primary Dark, Secondary Light, Secondary Dark, Simple Light, Simple Dark), Disabled (True, False), Has Icon (True, False) |

### UI Controls (page: UI Controls)
| Component | Variants | Properties |
|-----------|----------|------------|
| **Radio Button/Small** | 3 variants | State (Selected, Empty, Disabled) |
| **Radio Button/Large** | 3 variants | State (Selected, Empty, Disabled) |
| **Radio Button/5 Lines** | standalone | — |
| **Checkbox/Box** | 4 variants | State (Selected, Empty, Inactive, Read Only) |
| **Checkbox/Check Icon** | 3 variants | State (Dark, Light, Disabled) |
| **Checkbox/With Label** | 4 variants | Size (Desktop, Mobile), State (Default, Inactive) |
| **Checkbox/Standard** | 4 variants | Size (Desktop, Mobile), State (Default, Inactive) |
| **Toggle/With Label** | 2 variants | Size (Desktop, Mobile) |
| **toggle** | 4 variants | Toggle (on, off), text (on, off) |
| **Icon/Bag** | 3 variants | State (Default, Items Added, Routine) |
| **Icon/Flag** | 3 variants | Country (USflag, CAflag, FrenchFlag) |
| **Icon/Payment** | 8 variants | State (Visa, Mastercard, Amex, Discover, UCB, All options, Default CC, Error) |
| **UI controls/Arrow** | standalone | — |
| **UI controls/Caret** | 4 variants | State (Closed, Open, Left) |
| **UI controls/Video controls** | 2 variants | State (pause, play) |
| **Arrow button** | 12 variants | Size (Small, Large), Arrow (Right, Left), Color (Disabled, Light, Dark) |
| **Pagination dots** | 4 variants | Color (Light, Dark), Arrows (Yes, No) |
| **carousel** | 3 variants | shape (dots, lines), color (dark, light) |
| **dots** | 3 variants | Property 1 (image-carousel-1, -2, -3) |

---

## Naming Conventions

### Tokens
- Path separator: `/` (e.g., `color/primary/400`, `spacing/16`)
- Scale: numeric increments of 100 for colors, raw values for spacing/radius

### Text Styles
- Pattern: `Category/Weight/Size` (e.g., `Body/Regular/Body 1`)
- Headings: `Heading/H1` through `Heading/H6`

### Components
- **Standard:** TitleCase with `/` grouping (e.g., `Radio Button/Small`, `Checkbox/Box`, `Icon/Bag`)
- **Variant properties:** `PropertyName=Value` with Title Case (e.g., `State=Selected`, `Size=Desktop`)

### Layers
- Semantic names, no generic "Frame N" or "Group N" names
- Internal layers describe their purpose (e.g., `Weight badge`, `Link content`, `Plus icon`)

---

## Known Issues / Cleanup Remaining

The following components still use inconsistent naming and need standardization to TitleCase/Slash:

| Current Name | Suggested Fix |
|---|---|
| `toggle` | `Toggle` |
| `Arrow button` | `Button/Arrow` |
| `Pagination dots` | `Pagination/Dots` |
| `carousel` | `Carousel` |
| `dots` | `Carousel/Dots` |
| `UI controls/Caret` | `Icon/Caret` |
| `UI controls/Video controls` | `Icon/Video Controls` |
| `UI controls/Arrow` | `Icon/Arrow` |

### Unnamed variant properties
- `dots` component uses `Property 1` — should be renamed to a meaningful property name (e.g., `Slide`)
- `carousel` variants use lowercase property values — should be Title Case

### Stray variable
- `Collection 1` contains a single white color variable — should be deleted
