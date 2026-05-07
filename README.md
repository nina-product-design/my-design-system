# Prose Design System Skill

A Claude Code skill that lets anyone at Prose create working, on-brand prototypes using the Prose product design system. Describe what you want in plain English, and Claude builds it with the real fonts, colors, and components.

---

## What This Is

This is **not** production code and **not** the Prose brand design system. It is a prototyping toolkit — a coded reference of the Prose product design system that Claude uses to build interactive prototypes for user testing and ideation.

The design system is built from our Figma source of truth using the Figma MCP. It includes tokens (colors, typography, spacing, radius), 27+ components (navigation, buttons, product cards, routine cards, modals, etc.), and product/ingredient photography.

The skill is a work in progress and continues to be refined.

---

## What's In This Repo

| File / Folder | What it is |
|---|---|
| `designsystem.md` | The Claude Code skill file — the instructions Claude follows when building prototypes |
| `PROSE-COMPONENTS.md` | Full source code for every component — Claude reads this to copy exact implementations |
| `DESIGN-SYSTEM.md` | The design system spec (tokens, component docs) |
| `src/components/` | Component source code (React + TypeScript + Tailwind v4) |
| `src/tokens.ts` | Design tokens (colors, typography, spacing, radius) |
| `src/globals.css` | CSS custom properties and @font-face declarations |
| `src/pages/ComponentLibrary.tsx` | The interactive component library display page |
| `src/pages/DesignSystemPage.tsx` | The token/component reference page |
| `images/` | Product photos, ingredient images, oils, icons |
| `tokens/` | Token JSON files (colors, typography, spacing, radius) |
| `components/` | Component reference markdown docs |

---

## Where Everything Lives

| Resource | Location |
|---|---|
| **Component Library** (live) | https://nina-product-design.github.io/my-design-system/ |
| **GitHub Repo** | https://github.com/nina-product-design/my-design-system |
| **Figma Source of Truth** | [Design System Foundations](https://www.figma.com/design/LdvVTP8r3aYB4wc9lTWZfI/Design-System-Foundations) |
| **Google Drive** | 04_DigitalProduct > Digital Design System |
| **Skill file (installed)** | `~/.claude/commands/designsystem.md` on each user's machine |

---

## How to Use It (Build Prototypes)

### One-Time Setup

1. **Install Claude Code** — download the desktop app from [claude.ai/code](https://claude.ai/code)
2. **Install the skill** — open Terminal and paste:

```
mkdir -p ~/.claude/commands && curl -sL https://raw.githubusercontent.com/nina-product-design/my-design-system/main/designsystem.md -o ~/.claude/commands/designsystem.md
```

### Build a Prototype

1. Create a new empty folder on your Desktop
2. Open it in Claude Code (File > Open Folder)
3. Type `/designsystem` and describe what you want:

```
/designsystem

Build a mobile page with the Prose nav, a hero headline "Your Custom Routine",
three routine cards for shampoo, conditioner, and hair mask,
and a checkout button at the bottom.
```

4. Claude sets up the project, copies the real components, and gives you a preview URL
5. Keep iterating in plain English — "make the headline bigger", "add a FAQ section", "swap in the accent button"

### You Don't Need to Name Components

Just describe what you want and Claude will use the right Prose components automatically. But if you want to be specific, here are the components available:

| Component | What it is |
|---|---|
| Navigation | Site header (banner + nav bar) |
| Button | Primary, secondary, accent, destructive |
| InputField | Form fields, dropdowns |
| Selector | Quiz/survey pills and image cards |
| FrequencySelector | Subscription frequency picker |
| Accordion | Expandable FAQ and product sections |
| ProductCard | Product image cards with pricing |
| RoutineCard | Routine cards with ingredients and pricing |
| IngredientCard | Ingredient cards with descriptions |
| ReviewCarousel | Customer review carousel |
| PromoModal | Promotional overlay modals |
| Toast | Notification bars |
| ProgressBar | Consultation step indicators |
| Tag / ProductTag / OfferBadge | Promo tags and badges |
| Logo | The Prose wordmark |
| ArrowButton / CloseButton / VideoControls | UI controls |
| Carousels | Product card and ingredient card carousels |
| TextLink | Inline links with animated underlines |
| Radio / Checkbox / Toggle | Form controls |
| Tip | Bottom-sheet tooltip panels |

### If Something Looks Wrong

Tell Claude: *"Use the actual component from the design system, don't make a new one"*

### Updating the Skill

When the design system is updated, re-run:

```
curl -sL https://raw.githubusercontent.com/nina-product-design/my-design-system/main/designsystem.md -o ~/.claude/commands/designsystem.md
```

---

## How to Update the Design System

The design system is maintained by the Product Design team. To make changes:

### Using the Update Skill

In Claude Code, open the `my-design-system` repo folder and run:

```
/update-design-system
```

This skill walks you through pulling latest, making changes, building, and deploying. It ensures all files stay in sync:

- Component source code (`src/components/`)
- Display pages (ComponentLibrary, DesignSystemPage)
- Spec files (DESIGN-SYSTEM.md, component reference docs)
- The skill file (`designsystem.md`)
- The component bundle (PROSE-COMPONENTS.md)
- Google Drive copies

### What Gets Updated

When you change a component, **all of these must be updated together**:

1. The component `.tsx` file
2. The ComponentLibrary display page
3. The DesignSystemPage
4. The DESIGN-SYSTEM.md spec
5. The component reference doc in `components/`
6. The `designsystem.md` skill file
7. PROSE-COMPONENTS.md (rebuilt with all component source)
8. The Google Drive PROSE-DESIGN-SYSTEM.md

The `/update-design-system` skill handles this propagation.

### Adding a New Component from Figma

1. Get the Figma node URL for the component
2. Run `/update-design-system` and tell Claude what to add
3. Claude pulls the specs from Figma (via the Figma MCP), creates the component, and updates all files

### Deploying

After changes are reviewed:

```
git add -A && git commit -m "description" && git push origin main
npm run build && npx gh-pages -d dist
```

The component library is hosted on GitHub Pages and updates automatically.

---

## Architecture

- **Framework:** React + TypeScript + Vite
- **Styling:** Tailwind CSS v4 with CSS custom properties
- **Tokens:** Defined as CSS variables in `globals.css`, mirrored in `tokens.ts` for JS access
- **Components:** Each in `src/components/<Name>/` with a `.tsx` implementation and `index.ts` barrel export
- **Images:** Served from GitHub Pages URLs so prototypes work without local files
- **Fonts:** Loaded from cdn2.prose.com (Saol Text, Simplon Norm, Simplon Mono)

---

## Maintained By

Product Design team. Questions — ask Nina.
