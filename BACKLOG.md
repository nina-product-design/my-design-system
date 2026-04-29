# Backlog

Items requiring a decision or follow-up. Do not resolve without confirmation.

---

## Figma Naming Cleanup (moved from DESIGN-SYSTEM.md)

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

---

## Token Discrepancies

### Heading font-weight: DESIGN-SYSTEM.md says 300, globals.css uses 200
- `DESIGN-SYSTEM.md` specifies headings as "Saol Text Light (300)"
- `globals.css` sets `--font-heading-h*-weight: 200` for all headings
- `tokens/typography.json` follows DESIGN-SYSTEM.md (weight 300) since the markdown is authoritative
- **Decision needed:** Which weight is correct? Should globals.css be updated to 300, or should the markdown be corrected to 200?

---

## Stale Artifacts Removed

- `design-tokens.tokens.json` — deleted (contained Geist font references and incorrect sizes)
- `code .` — deleted (accidental shell command saved as a file)

---

## Components Without React Implementations

The following components are documented in DESIGN-SYSTEM.md but do not have React implementations in `src/components/`:

| Component | Figma Variants |
|-----------|---------------|
| Icon/Bag | 3 variants (Default, Items Added, Routine) |
| Icon/Flag | 3 variants (USflag, CAflag, FrenchFlag) |
| Icon/Payment | 8 variants (Visa, Mastercard, Amex, Discover, UCB, All options, Default CC, Error) |
| UI controls/Arrow | standalone |
| UI controls/Caret | 4 variants (Closed, Open, Left) |
| UI controls/Video controls | 2 variants (pause, play) |
| Arrow button | 12 variants |
| Pagination dots | 4 variants |
| carousel | 3 variants |
| dots | 3 variants |
| Radio Button/5 Lines | standalone |

---

## Components With Implementations but Not in DESIGN-SYSTEM.md

The following React components exist in `src/components/` but are not documented in DESIGN-SYSTEM.md:

| Component | File |
|-----------|------|
| Tag | `src/components/Tag/Tag.tsx` |
| Toast | `src/components/Toast/Toast.tsx` |
| Typography (showcase) | `src/components/Typography/Typography.tsx` |

**Decision needed:** Should these be added to DESIGN-SYSTEM.md?

---

## Font Loading

Font files are loaded via CDN URLs (`cdn2.prose.com`) in `src/globals.css`. If fonts fail to load in local development, components will fall back to the CSS fallback stacks defined in `globals.css`:
- Saol: `serif`
- Simplon Norm: `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`
- Simplon Mono: `monospace`

No local font files are bundled in the repo.
