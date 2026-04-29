# SitewideBanner

**Variants:** 3

## Properties
| Property | Values |
|----------|--------|
| State | no-promo, subscribe, promo |
| Message | optional custom text (defaults per state) |

## Visual rules
Full-width promotional banner at the top of the page. Height: 40px. Text: body/5 regular (12px Simplon Norm), centered, underlined.

| State | Background | Text Color | Default Message |
|-------|-----------|------------|-----------------|
| no-promo | primary/400 (dark green) | neutral/100 (white) | "500k+ 5-star Prose haircare reviews on Review & Refine" |
| subscribe | highlight/200 (lime) | primary/400 (dark green) | "15% off your custom haircare orders when you subscribe" |
| promo | tertiary/200 (lavender) | primary/400 (dark green) | "50% off your first custom haircare order when you subscribe" |

## Code
`src/components/SitewideBanner/SitewideBanner.tsx`
