# Routine Card

**Variants:** 3 (One-time purchase, Subscription, Subscription expanded)

## Properties
| Property | Values |
|----------|--------|
| Type | one-time, subscription, subscription-expanded |
| Product Image | URL |
| Product Name | string |
| Product Description | string |
| Product Size | string (e.g. "8.5 fl oz 250mL") |
| Show Recommended Tag | boolean (defaults to true for subscription variants) |
| Ingredients | array of { image, name, description? } (subscription only) |
| Preferences | string (subscription only) |
| Price | string (e.g. "$34.00") |
| Original Price | string (subscription only, shown strikethrough) |
| Frequency Label | string (defaults based on type) |
| Frequency Note | string (subscription discount note) |

## Visual rules
- Card: 327px wide, bg neutral/100, radius-10, pb-24, gap-24
- Image area: 220px tall, full-width, object-cover
- Close button: 32px, top-right of image
- "Recommended" tag: bg white/50%, radius-4, body/5 regular, primary/300
- Product name: H3 (Saol Text 32px, weight 300, -0.96px tracking), primary/400
- Description: body/5 regular (12px), primary/300
- Ingredients: label/2 medium section heading, 32x40px images, body/5 medium names, border-b neutral/600, plus/minus 12px
- Expanded ingredient: body/5 regular description, pl-34px
- Preferences: label/2 medium heading, body/5 regular text
- Frequency selector: border neutral/400, radius-10, "Added to cart" floating label body/6
- Subscription price: highlight/200 bg, strikethrough original

## Code
`src/components/RoutineCard/RoutineCard.tsx`
