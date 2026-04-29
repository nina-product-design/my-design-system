# Button

**Variants:** 40 (Button) + 8 (Button/Mini)

## Properties

### Button
| Property | Values |
|----------|--------|
| Appearance | Primary Light, Primary Dark, Secondary Light, Secondary Dark, Accent, Destructive |
| State | Default, Hover, Disabled, Loading |
| Size | Fit, Full |
| Floating | True, False |

### Button/Mini
| Property | Values |
|----------|--------|
| Variant | Back, Add |
| Floating | True, False |
| Color | Light mode, Dark mode |

## Visual rules
Pill shape (rounded-full). Font: label/2 medium (Simplon Mono 12px uppercase, tracking 0.96px). Fixed size: min-width 327px. Flexible: w-fit, max-width 327px. Height: 44px. Floating adds drop shadow. Loading state shows animated spinner.

Button/Mini: 44x44px circular button with icon. Back variant shows left arrow, Add variant shows plus icon.

## Code
- `src/components/Button/Button.tsx`
- `src/components/Button/ButtonMini.tsx`
