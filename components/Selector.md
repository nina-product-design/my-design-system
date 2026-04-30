# Selector

**Variants:** Text pill + Image card

## Properties
| Property | Values |
|----------|--------|
| Selected | True, False |
| Size | Fixed, Hug, Mobile, Desktop |
| Subcopy | optional text |
| Image | optional URL |

## Visual rules
Two forms: text pills and image cards. Deselected: white bg, border neutral/300, text primary/400. Selected: bg primary/200 (light green), text neutral/900. Text pills: rounded-10, body/4 regular (14px). Image cards: 127px tall, image 101px wide, rounded-8. Subcopy uses body/5 (12px).

## Frequency Selector

Collapsible frequency/price selector with radio-button dropdown. Used inside RoutineCard.

| Property | Values |
|----------|--------|
| Selection | subscription, one-time, accessory |
| Options | FrequencyOption[] (label, price, originalPrice?, note?) |
| Selected Index | number |
| Default Open | boolean |

- Width: 295px, border neutral/400, radius-10
- "Added to cart" floating label (body/6, neutral/900)
- Header: selected option label (body/5) + optional note (body/6, neutral/800) + price (body/4 medium)
- Subscription prices: highlight/200 bg, strikethrough original (body/6)
- Chevron toggles dropdown. Accessory mode: non-expandable
- Dropdown rows: radio small (20px) + label (body/5) + price. Border-l/r/b neutral/400, last row rounded-b-10

## Code
- `src/components/Selector/Selector.tsx`
- `src/components/Selector/FrequencySelector.tsx`
