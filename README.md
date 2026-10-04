# GBA, Simplified

Citizen explainer for the Greater Bengaluru Governance Act, built for the
**Decoding Civic Governance in Bengaluru** project (Global Shapers Bengaluru II Hub).

Bilingual (English / ಕನ್ನಡ) Next.js + Tailwind site, statically generated, hosted on Vercel.

## Sections
- **Hero**: a Three.js model of the 369 wards that rises and splits from one BBMP slab into five corporations (drag to rotate, tap a ward to look it up)
- **The line so far**: timeline drawn as a metro line, with the pending elections as the under-construction stretch
- **What it means for you**: five composite personas, one per corporation: what the Act says, what's happening on the ground, what they can do
- **What changed**: BBMP Act 2020 vs GBG Act 2024, through participation, autonomy and accountability
- **Find your ward**: search or tap any ward to see corporation, zone and assembly constituency
- **Who to ask**: pick an everyday problem, see which body owns it
- **Survey** and **About**

## Design
- Ground is Bangalore-granite grey, ink is indigo; the only colours are Namma Metro's five line colours, one per corporation (`src/lib/wards.ts`, `globals.css`)
- Type: Anek Kannada (one family for Kannada and Latin; condensed widths for headlines)

## Editing content
All copy lives in `src/lib/i18n.ts` (one `en` and one `kn` object with the same shape).
Edit text there; no component changes needed. Ward data is in `src/data/`.

## Develop
```sh
npm install
npm run dev   # http://localhost:3000 -> redirects to /en
```

## Before launch
- [ ] Desk Research team to verify each row of the comparison table and the timeline
- [ ] Native Kannada review of all `kn` strings
- [ ] Validate personas against survey responses and interviews
- [ ] Add survey charts once responses are exported
- [ ] Confirm current corporation election status

## Data
- Ward list and boundaries (369 GBA wards, 5 corporations)
- Policy comparison: PRS Legislative Research brief on the GBG Bill, 2024
