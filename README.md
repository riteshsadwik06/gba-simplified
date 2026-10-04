# GBA, Simplified

Citizen explainer for the Greater Bengaluru Governance Act, built for the
**Decoding Civic Governance in Bengaluru** project (Global Shapers Bengaluru II Hub).

Bilingual (English / ಕನ್ನಡ) Next.js + Tailwind site, statically generated, hosted on Vercel.

## Sections
- **What changed**: BBMP Act 2020 vs GBG Act 2024, through participation, autonomy and accountability
- **Find your ward**: search or tap any of the 369 wards to see corporation, zone and assembly constituency
- **Who does what**: corporations vs GBA vs parastatals (BWSSB, BESCOM, BDA ...), links to Vicharane for complaints
- **Your voice**: councillors, ward committees, RTI, plus expert concerns
- **Citizen survey**: placeholder until survey results are analysed
- **About**: project and workstreams

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
- [ ] Add survey charts once responses are exported
- [ ] Confirm current corporation election status

## Data
- Ward list and boundaries (369 GBA wards, 5 corporations): reused from Vicharane (`speak-up-karnataka`)
- Policy comparison: PRS Legislative Research brief on the GBG Bill, 2024
