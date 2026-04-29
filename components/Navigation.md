# Navigation

**Variants:** 8 (Desktop + Mobile x 4 states)

## Properties
| Property | Values |
|----------|--------|
| Size | desktop, mobile |
| State | default, items-added, consultation, checkout |
| Banner State | no-promo, subscribe, promo |
| Banner Message | optional custom text |
| User Name | optional (shown next to account icon on desktop) |

## Visual rules
Two-part header: SitewideBanner (40px) + Nav bar (56px desktop, 55px mobile) = 96/95px total.

### Desktop
- **default / items-added:** Logo left, nav links (Haircare, Skincare, Accessories, Our Ingredients, Our Story, Reviews, Gift Prose, Subscribe & Save), icons right (Cart + Account). Items-added shows accent-200 dot badge on cart.
- **consultation:** "← Back" left, Logo centered, "Exit" right.
- **checkout:** Arrow icon left, Logo centered, empty right.

### Mobile
- **default / items-added:** Hamburger left, Logo center-left, Cart + Account icons right. Items-added shows accent-200 dot badge on cart.
- **consultation:** "← Back" left, Logo centered, "Exit" right.
- **checkout:** Arrow icon left, Logo centered, empty right.

### Typography
- Nav links: body/4 regular (14px Simplon Norm)
- Banner text: body/5 regular (12px Simplon Norm), underlined

### Colors
- Banner: varies by banner state (see SitewideBanner)
- Nav bar: neutral/100 background
- Text/icons: primary/400
- Cart badge: accent/200

## Code
`src/components/Navigation/Navigation.tsx`
