# PromoModal

**Variants:** Desktop + Mobile, with/without image, configurable content blocks

## Properties
| Property | Values |
|----------|--------|
| Size | desktop (555px), mobile (375px) |
| Image | optional hero image URL |
| Eyebrow | optional text, plain or highlight (lime tag) |
| Headline | optional, H3 (32px Saol Text) |
| Subhead | optional, body/4 regular (14px) |
| Form Field | boolean, email input (56px) |
| CTA Label | optional, primary-light button |
| Text Link | optional, underlined body/4 link |
| Disclaimer | boolean, body/5 (12px) with Terms/Privacy links |

## Visual rules
Desktop: 555px wide, 20px radius, 40px content padding, neutral/200 content bg. Image area is 350px tall with close button (32px circle) top-right.

Mobile: 375px wide, 10px top radius (bottom-sheet style), 24px content padding. Image area is 236px tall.

Eyebrow plain: label/1 regular (14px Simplon Mono, uppercase). Eyebrow highlight: label/2 medium (12px) inside highlight/200 tag with 4px radius.

Headline: H3 — Saol Text 32px, weight 300, -0.96px letter-spacing. Subhead: body/4 regular (14px). Form field: 56px height, border neutral/600, shadow. Disclaimer: body/5 (12px), neutral/800, underlined Terms & Privacy links.

## Code
`src/components/PromoModal/PromoModal.tsx`
