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

## Code
`src/components/Selector/Selector.tsx`
