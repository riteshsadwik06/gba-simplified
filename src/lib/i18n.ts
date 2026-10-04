// Bilingual content for the site. English is the source; Kannada needs a
// native-speaker review before launch (tracked in README).

export const locales = ["en", "kn"] as const;
export type Locale = (typeof locales)[number];
export const hasLocale = (l: string): l is Locale =>
  (locales as readonly string[]).includes(l);

export const SURVEY_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfrxMXtk5bAe91E7STgkvob0nCyYuZef8XfxWLD-7lWs82Imw/viewform";

const en = {
  meta: {
    title: "GBA, Simplified | Decoding Civic Governance in Bengaluru",
    description:
      "What the Greater Bengaluru Governance Act changes for you, explained in plain language. Find your ward, your corporation and who to ask.",
  },
  nav: {
    brand: "GBA, Simplified",
    changed: "What changed",
    ward: "Find your ward",
    who: "Who does what",
    voice: "Your voice",
    survey: "Citizen survey",
    about: "About",
    switchLang: "ಕನ್ನಡ",
  },
  hero: {
    kicker: "Decoding Civic Governance in Bengaluru",
    title: "BBMP is gone. Here is how your city is run now.",
    lede: "In 2025 the Greater Bengaluru Governance Act replaced one big city body with five city corporations under a new Greater Bengaluru Authority. This site explains what that means for you, in plain language.",
    ctaWard: "Find your ward",
    ctaSurvey: "Take the citizen survey",
  },
  facts: [
    { value: "5", label: "city corporations replace the single BBMP" },
    { value: "369", label: "wards, up from 198" },
    { value: "30", label: "months for a mayor's term, up from 1 year" },
    { value: "1", label: "apex authority, chaired by the Chief Minister" },
  ],
  timeline: {
    title: "How we got here",
    items: [
      { date: "2015", text: "Last BBMP council elected. Its term ended in 2020 and the city ran without elected councillors after that." },
      { date: "Jul 2024", text: "Greater Bengaluru Governance Bill tabled; sent to a Joint Select Committee." },
      { date: "Mar 2025", text: "Bill passed by the Karnataka Legislature." },
      { date: "Apr 2025", text: "Governor's assent; Act published in the Gazette on 24 April." },
      { date: "Sep 2025", text: "Five city corporations formally constituted on 2 September." },
      { date: "2026", text: "First elections to the five corporations ordered. Check the latest status before relying on this." },
    ],
  },
  changed: {
    title: "What changed: BBMP vs GBA",
    lede: "The short version: more, smaller corporations and longer mayoral terms, but more power sits with the state government and one layer of citizen participation was dropped.",
    headers: ["", "Before (BBMP Act, 2020)", "Now (GBG Act, 2024)"],
    rows: [
      ["City bodies", "One corporation, BBMP", "Up to 7 corporations (5 formed) under the Greater Bengaluru Authority"],
      ["Who's at the top", "Mayor and BBMP Council", "Greater Bengaluru Authority, chaired by the Chief Minister"],
      ["Mayor's term", "1 year", "30 months, for each corporation"],
      ["Tiers", "BBMP, zonal committees, ward committees, area sabhas", "GBA, city corporations, ward committees"],
      ["Area sabhas", "Yes, neighbourhood-level voter groups", "Removed in the final Act"],
      ["City planning", "No metropolitan planning committee", "Metropolitan Planning Committee chaired by the Chief Minister"],
      ["Big contracts", "Approved by the mayor", "Need state government approval"],
    ],
    lensesTitle: "Three lenses we use",
    lenses: [
      { name: "Participation", text: "Can citizens shape decisions? Ward committees stay; area sabhas are gone." },
      { name: "Autonomy", text: "Can elected corporations act on their own? Many decisions now need state or GBA approval." },
      { name: "Accountability", text: "Is it clear who answers for what? Five corporations plus parastatals like BDA and BWSSB can blur this." },
    ],
    source: "Based on PRS Legislative Research's analysis of the Bill. Our Desk Research team is reviewing each row.",
  },
  ward: {
    title: "Find your ward",
    lede: "Search your area or tap the map to see which corporation, zone and assembly constituency you fall under.",
    placeholder: "Type your area, e.g. Jayanagar, Kogilu, HSR",
    corporation: "City corporation",
    zone: "Zone",
    assembly: "Assembly constituency",
    wardId: "Ward number",
    empty: "Pick a ward to see the details.",
    noMatch: "No ward matches that name. Try a nearby landmark or locality.",
    wards: "wards",
    caveat: "Ward boundaries are simplified. If you live near a border, confirm with your corporation office.",
  },
  who: {
    title: "Who does what",
    lede: "Your corporation handles most day-to-day civic work, but several services are run by separate state bodies. Knowing which one owns your problem is half the battle.",
    items: [
      { name: "Your city corporation", text: "Roads inside your ward, drains, garbage, street lights, property tax, trade licences." },
      { name: "Greater Bengaluru Authority", text: "City-wide planning, arterial roads and projects that cross corporations; coordinates the bodies below." },
      { name: "BWSSB", text: "Water supply and sewage." },
      { name: "BESCOM", text: "Electricity supply, transformers and billing." },
      { name: "BMTC", text: "City buses." },
      { name: "BMRCL", text: "Namma Metro construction and operations." },
      { name: "BDA", text: "Layouts, sites and development schemes." },
      { name: "Bengaluru City Police", text: "Law and order, and traffic." },
    ],
    vicharane: "Got a specific complaint? Vicharane drafts it for the right authority and tracks it.",
    vicharaneCta: "Open Vicharane",
  },
  voice: {
    title: "Where you still have a say",
    items: [
      { title: "Vote for your councillor", text: "Each ward elects a councillor to its corporation. Mayors are chosen from among them for 30 months." },
      { title: "Ward committees", text: "Chaired by your councillor, they propose ward works and keep an eye on services. Ask when your ward committee meets." },
      { title: "Right to Information", text: "Any citizen can ask for records such as work orders, bills and completion certificates." },
    ],
    concernsTitle: "Concerns raised by experts",
    concerns: [
      "The Chief Minister chairs both the GBA and the planning committee, concentrating power with the state.",
      "The state can dissolve elected corporations on broad grounds.",
      "Commissioners, not elected mayors, hold most executive power.",
      "Removing area sabhas reduces neighbourhood-level participation.",
    ],
  },
  survey: {
    title: "What Bengaluru is telling us",
    lede: "We're surveying residents on how they experience civic services and whether they know about the GBA. Results will appear here as they come in.",
    pending: "Results coming soon",
    cta: "Add your voice: take the survey",
    note: "Takes about 5 minutes. Responses are anonymous unless you opt in to a follow-up interview.",
  },
  about: {
    title: "About this project",
    text: "Decoding Civic Governance in Bengaluru is a project of the Global Shapers Bengaluru II Hub, a community of young people under the World Economic Forum. We are studying how the new Act affects citizens compared with BBMP, through participation, autonomy and accountability.",
    workstreams: [
      { name: "Stakeholder Survey", text: "Citizen survey, field outreach and interviews." },
      { name: "Desk Research & Policy", text: "Reading the Act, think-tank work and case studies." },
      { name: "External Content & Data", text: "This website, data analysis and public updates." },
    ],
    disclaimer: "This is an independent explainer, not an official government source. Always confirm with the relevant authority.",
  },
  footer: {
    sources: "Sources",
    data: "Ward data: GBA ward boundary dataset (369 wards), as used in Vicharane.",
    built: "Built by Global Shapers Bengaluru II.",
  },
};

export type Dict = typeof en;

const kn: Dict = {
  meta: {
    title: "ಜಿಬಿಎ, ಸರಳವಾಗಿ | ಬೆಂಗಳೂರಿನ ನಾಗರಿಕ ಆಡಳಿತ",
    description:
      "ಗ್ರೇಟರ್ ಬೆಂಗಳೂರು ಆಡಳಿತ ಕಾಯ್ದೆ ನಿಮಗೆ ಏನು ಬದಲಾಯಿಸುತ್ತದೆ ಎಂಬುದನ್ನು ಸರಳ ಭಾಷೆಯಲ್ಲಿ ತಿಳಿಯಿರಿ. ನಿಮ್ಮ ವಾರ್ಡ್, ನಗರ ಪಾಲಿಕೆ ಮತ್ತು ಯಾರನ್ನು ಕೇಳಬೇಕು ಎಂಬುದನ್ನು ಹುಡುಕಿ.",
  },
  nav: {
    brand: "ಜಿಬಿಎ, ಸರಳವಾಗಿ",
    changed: "ಏನು ಬದಲಾಯಿತು",
    ward: "ನಿಮ್ಮ ವಾರ್ಡ್",
    who: "ಯಾರು ಏನು ಮಾಡುತ್ತಾರೆ",
    voice: "ನಿಮ್ಮ ಧ್ವನಿ",
    survey: "ನಾಗರಿಕ ಸಮೀಕ್ಷೆ",
    about: "ನಮ್ಮ ಬಗ್ಗೆ",
    switchLang: "English",
  },
  hero: {
    kicker: "ಬೆಂಗಳೂರಿನ ನಾಗರಿಕ ಆಡಳಿತವನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳೋಣ",
    title: "ಬಿಬಿಎಂಪಿ ಇನ್ನಿಲ್ಲ. ಈಗ ನಮ್ಮ ನಗರ ಹೀಗೆ ನಡೆಯುತ್ತದೆ.",
    lede: "2025ರಲ್ಲಿ ಗ್ರೇಟರ್ ಬೆಂಗಳೂರು ಆಡಳಿತ ಕಾಯ್ದೆಯು ಒಂದೇ ದೊಡ್ಡ ಪಾಲಿಕೆಯ ಬದಲು, ಹೊಸ ಗ್ರೇಟರ್ ಬೆಂಗಳೂರು ಪ್ರಾಧಿಕಾರದ ಅಡಿಯಲ್ಲಿ ಐದು ನಗರ ಪಾಲಿಕೆಗಳನ್ನು ತಂದಿತು. ಇದರ ಅರ್ಥ ನಿಮಗೆ ಏನು ಎಂಬುದನ್ನು ಈ ತಾಣ ಸರಳವಾಗಿ ವಿವರಿಸುತ್ತದೆ.",
    ctaWard: "ನಿಮ್ಮ ವಾರ್ಡ್ ಹುಡುಕಿ",
    ctaSurvey: "ನಾಗರಿಕ ಸಮೀಕ್ಷೆಯಲ್ಲಿ ಭಾಗವಹಿಸಿ",
  },
  facts: [
    { value: "5", label: "ನಗರ ಪಾಲಿಕೆಗಳು, ಒಂದೇ ಬಿಬಿಎಂಪಿ ಬದಲಿಗೆ" },
    { value: "369", label: "ವಾರ್ಡ್‌ಗಳು, ಹಿಂದೆ 198 ಇದ್ದವು" },
    { value: "30", label: "ತಿಂಗಳು ಮೇಯರ್ ಅವಧಿ, ಹಿಂದೆ 1 ವರ್ಷ" },
    { value: "1", label: "ಮುಖ್ಯಮಂತ್ರಿ ಅಧ್ಯಕ್ಷತೆಯ ಉನ್ನತ ಪ್ರಾಧಿಕಾರ" },
  ],
  timeline: {
    title: "ಇಲ್ಲಿಯವರೆಗೆ ಹೇಗೆ ಬಂದೆವು",
    items: [
      { date: "2015", text: "ಕೊನೆಯ ಬಿಬಿಎಂಪಿ ಕೌನ್ಸಿಲ್ ಚುನಾವಣೆ. 2020ರಲ್ಲಿ ಅವಧಿ ಮುಗಿದ ನಂತರ ಚುನಾಯಿತ ಸದಸ್ಯರಿಲ್ಲದೆ ನಗರ ನಡೆಯಿತು." },
      { date: "ಜುಲೈ 2024", text: "ಗ್ರೇಟರ್ ಬೆಂಗಳೂರು ಆಡಳಿತ ಮಸೂದೆ ಮಂಡನೆ; ಜಂಟಿ ಸದನ ಸಮಿತಿಗೆ ಕಳುಹಿಸಲಾಯಿತು." },
      { date: "ಮಾರ್ಚ್ 2025", text: "ಕರ್ನಾಟಕ ವಿಧಾನಮಂಡಲದಲ್ಲಿ ಮಸೂದೆ ಅಂಗೀಕಾರ." },
      { date: "ಏಪ್ರಿಲ್ 2025", text: "ರಾಜ್ಯಪಾಲರ ಅಂಕಿತ; ಏಪ್ರಿಲ್ 24ರಂದು ರಾಜಪತ್ರದಲ್ಲಿ ಪ್ರಕಟ." },
      { date: "ಸೆಪ್ಟೆಂಬರ್ 2025", text: "ಸೆಪ್ಟೆಂಬರ್ 2ರಂದು ಐದು ನಗರ ಪಾಲಿಕೆಗಳ ರಚನೆ." },
      { date: "2026", text: "ಐದು ಪಾಲಿಕೆಗಳಿಗೆ ಮೊದಲ ಚುನಾವಣೆಗೆ ಆದೇಶ. ಇತ್ತೀಚಿನ ಸ್ಥಿತಿಯನ್ನು ಪರಿಶೀಲಿಸಿ." },
    ],
  },
  changed: {
    title: "ಏನು ಬದಲಾಯಿತು: ಬಿಬಿಎಂಪಿ ಮತ್ತು ಜಿಬಿಎ",
    lede: "ಸಂಕ್ಷಿಪ್ತವಾಗಿ: ಹೆಚ್ಚು, ಚಿಕ್ಕ ಪಾಲಿಕೆಗಳು ಮತ್ತು ದೀರ್ಘ ಮೇಯರ್ ಅವಧಿ. ಆದರೆ ರಾಜ್ಯ ಸರ್ಕಾರದ ಕೈಯಲ್ಲಿ ಹೆಚ್ಚು ಅಧಿಕಾರ, ಮತ್ತು ನಾಗರಿಕ ಭಾಗವಹಿಸುವಿಕೆಯ ಒಂದು ಹಂತ ಕೈಬಿಡಲಾಗಿದೆ.",
    headers: ["", "ಹಿಂದೆ (ಬಿಬಿಎಂಪಿ ಕಾಯ್ದೆ, 2020)", "ಈಗ (ಜಿಬಿಜಿ ಕಾಯ್ದೆ, 2024)"],
    rows: [
      ["ನಗರ ಸಂಸ್ಥೆಗಳು", "ಒಂದೇ ಪಾಲಿಕೆ, ಬಿಬಿಎಂಪಿ", "ಗ್ರೇಟರ್ ಬೆಂಗಳೂರು ಪ್ರಾಧಿಕಾರದ ಅಡಿಯಲ್ಲಿ 7ರವರೆಗೆ ಪಾಲಿಕೆಗಳು (5 ರಚನೆ)"],
      ["ಮೇಲ್ಭಾಗದಲ್ಲಿ ಯಾರು", "ಮೇಯರ್ ಮತ್ತು ಬಿಬಿಎಂಪಿ ಕೌನ್ಸಿಲ್", "ಮುಖ್ಯಮಂತ್ರಿ ಅಧ್ಯಕ್ಷತೆಯ ಗ್ರೇಟರ್ ಬೆಂಗಳೂರು ಪ್ರಾಧಿಕಾರ"],
      ["ಮೇಯರ್ ಅವಧಿ", "1 ವರ್ಷ", "ಪ್ರತಿ ಪಾಲಿಕೆಗೆ 30 ತಿಂಗಳು"],
      ["ಹಂತಗಳು", "ಬಿಬಿಎಂಪಿ, ವಲಯ ಸಮಿತಿ, ವಾರ್ಡ್ ಸಮಿತಿ, ಪ್ರದೇಶ ಸಭೆ", "ಜಿಬಿಎ, ನಗರ ಪಾಲಿಕೆ, ವಾರ್ಡ್ ಸಮಿತಿ"],
      ["ಪ್ರದೇಶ ಸಭೆಗಳು", "ಇದ್ದವು, ನೆರೆಹೊರೆ ಮಟ್ಟದ ಮತದಾರರ ಗುಂಪು", "ಅಂತಿಮ ಕಾಯ್ದೆಯಲ್ಲಿ ತೆಗೆದುಹಾಕಲಾಗಿದೆ"],
      ["ನಗರ ಯೋಜನೆ", "ಮಹಾನಗರ ಯೋಜನಾ ಸಮಿತಿ ಇರಲಿಲ್ಲ", "ಮುಖ್ಯಮಂತ್ರಿ ಅಧ್ಯಕ್ಷತೆಯ ಮಹಾನಗರ ಯೋಜನಾ ಸಮಿತಿ"],
      ["ದೊಡ್ಡ ಗುತ್ತಿಗೆಗಳು", "ಮೇಯರ್ ಅನುಮೋದನೆ", "ರಾಜ್ಯ ಸರ್ಕಾರದ ಅನುಮೋದನೆ ಬೇಕು"],
    ],
    lensesTitle: "ನಾವು ಬಳಸುವ ಮೂರು ದೃಷ್ಟಿಕೋನಗಳು",
    lenses: [
      { name: "ಭಾಗವಹಿಸುವಿಕೆ", text: "ನಾಗರಿಕರು ನಿರ್ಧಾರಗಳನ್ನು ರೂಪಿಸಬಹುದೇ? ವಾರ್ಡ್ ಸಮಿತಿಗಳು ಉಳಿದಿವೆ; ಪ್ರದೇಶ ಸಭೆಗಳು ಇಲ್ಲ." },
      { name: "ಸ್ವಾಯತ್ತತೆ", text: "ಚುನಾಯಿತ ಪಾಲಿಕೆಗಳು ಸ್ವತಂತ್ರವಾಗಿ ಕೆಲಸ ಮಾಡಬಹುದೇ? ಅನೇಕ ನಿರ್ಧಾರಗಳಿಗೆ ಈಗ ರಾಜ್ಯ ಅಥವಾ ಜಿಬಿಎ ಅನುಮೋದನೆ ಬೇಕು." },
      { name: "ಹೊಣೆಗಾರಿಕೆ", text: "ಯಾವುದಕ್ಕೆ ಯಾರು ಉತ್ತರಿಸಬೇಕು ಎಂಬುದು ಸ್ಪಷ್ಟವೇ? ಐದು ಪಾಲಿಕೆಗಳ ಜೊತೆಗೆ ಬಿಡಿಎ, ಜಲಮಂಡಳಿಯಂತಹ ಸಂಸ್ಥೆಗಳು ಇದನ್ನು ಗೊಂದಲಗೊಳಿಸಬಹುದು." },
    ],
    source: "ಪಿಆರ್‌ಎಸ್ ಲೆಜಿಸ್ಲೇಟಿವ್ ರಿಸರ್ಚ್ ವಿಶ್ಲೇಷಣೆಯ ಆಧಾರದ ಮೇಲೆ. ನಮ್ಮ ಸಂಶೋಧನಾ ತಂಡ ಪ್ರತಿ ಸಾಲನ್ನು ಪರಿಶೀಲಿಸುತ್ತಿದೆ.",
  },
  ward: {
    title: "ನಿಮ್ಮ ವಾರ್ಡ್ ಹುಡುಕಿ",
    lede: "ನಿಮ್ಮ ಪ್ರದೇಶವನ್ನು ಹುಡುಕಿ ಅಥವಾ ನಕ್ಷೆಯ ಮೇಲೆ ಒತ್ತಿ, ನೀವು ಯಾವ ಪಾಲಿಕೆ, ವಲಯ ಮತ್ತು ವಿಧಾನಸಭಾ ಕ್ಷೇತ್ರಕ್ಕೆ ಸೇರಿದ್ದೀರಿ ಎಂದು ನೋಡಿ.",
    placeholder: "ನಿಮ್ಮ ಪ್ರದೇಶ ಟೈಪ್ ಮಾಡಿ, ಉದಾ. ಜಯನಗರ, ಕೋಗಿಲು",
    corporation: "ನಗರ ಪಾಲಿಕೆ",
    zone: "ವಲಯ",
    assembly: "ವಿಧಾನಸಭಾ ಕ್ಷೇತ್ರ",
    wardId: "ವಾರ್ಡ್ ಸಂಖ್ಯೆ",
    empty: "ವಿವರಗಳನ್ನು ನೋಡಲು ಒಂದು ವಾರ್ಡ್ ಆಯ್ಕೆಮಾಡಿ.",
    noMatch: "ಆ ಹೆಸರಿನ ವಾರ್ಡ್ ಸಿಗಲಿಲ್ಲ. ಹತ್ತಿರದ ಪ್ರದೇಶದ ಹೆಸರು ಪ್ರಯತ್ನಿಸಿ.",
    wards: "ವಾರ್ಡ್‌ಗಳು",
    caveat: "ವಾರ್ಡ್ ಗಡಿಗಳು ಸರಳೀಕೃತ. ನೀವು ಗಡಿಯ ಹತ್ತಿರ ಇದ್ದರೆ, ನಿಮ್ಮ ಪಾಲಿಕೆ ಕಚೇರಿಯಲ್ಲಿ ದೃಢಪಡಿಸಿಕೊಳ್ಳಿ.",
  },
  who: {
    title: "ಯಾರು ಏನು ಮಾಡುತ್ತಾರೆ",
    lede: "ದಿನನಿತ್ಯದ ಹೆಚ್ಚಿನ ನಾಗರಿಕ ಕೆಲಸ ನಿಮ್ಮ ಪಾಲಿಕೆಯದು, ಆದರೆ ಕೆಲವು ಸೇವೆಗಳನ್ನು ಪ್ರತ್ಯೇಕ ರಾಜ್ಯ ಸಂಸ್ಥೆಗಳು ನಡೆಸುತ್ತವೆ. ನಿಮ್ಮ ಸಮಸ್ಯೆ ಯಾರದು ಎಂದು ತಿಳಿದರೆ ಅರ್ಧ ಕೆಲಸ ಮುಗಿದಂತೆ.",
    items: [
      { name: "ನಿಮ್ಮ ನಗರ ಪಾಲಿಕೆ", text: "ವಾರ್ಡ್ ರಸ್ತೆಗಳು, ಚರಂಡಿ, ಕಸ, ಬೀದಿ ದೀಪ, ಆಸ್ತಿ ತೆರಿಗೆ, ವ್ಯಾಪಾರ ಪರವಾನಗಿ." },
      { name: "ಗ್ರೇಟರ್ ಬೆಂಗಳೂರು ಪ್ರಾಧಿಕಾರ", text: "ನಗರಮಟ್ಟದ ಯೋಜನೆ, ಮುಖ್ಯ ರಸ್ತೆಗಳು, ಪಾಲಿಕೆಗಳನ್ನು ದಾಟುವ ಯೋಜನೆಗಳು; ಕೆಳಗಿನ ಸಂಸ್ಥೆಗಳ ಸಮನ್ವಯ." },
      { name: "BWSSB (ಜಲಮಂಡಳಿ)", text: "ನೀರು ಸರಬರಾಜು ಮತ್ತು ಒಳಚರಂಡಿ." },
      { name: "BESCOM", text: "ವಿದ್ಯುತ್ ಸರಬರಾಜು, ಟ್ರಾನ್ಸ್‌ಫಾರ್ಮರ್, ಬಿಲ್." },
      { name: "BMTC", text: "ನಗರ ಬಸ್‌ಗಳು." },
      { name: "BMRCL (ನಮ್ಮ ಮೆಟ್ರೊ)", text: "ಮೆಟ್ರೊ ನಿರ್ಮಾಣ ಮತ್ತು ಕಾರ್ಯಾಚರಣೆ." },
      { name: "BDA", text: "ಬಡಾವಣೆಗಳು, ನಿವೇಶನಗಳು, ಅಭಿವೃದ್ಧಿ ಯೋಜನೆಗಳು." },
      { name: "ಬೆಂಗಳೂರು ನಗರ ಪೊಲೀಸ್", text: "ಕಾನೂನು ಸುವ್ಯವಸ್ಥೆ ಮತ್ತು ಸಂಚಾರ." },
    ],
    vicharane: "ನಿರ್ದಿಷ್ಟ ದೂರು ಇದೆಯೇ? ವಿಚಾರಣೆ ಅದನ್ನು ಸರಿಯಾದ ಪ್ರಾಧಿಕಾರಕ್ಕೆ ಬರೆದು ಟ್ರ್ಯಾಕ್ ಮಾಡುತ್ತದೆ.",
    vicharaneCta: "ವಿಚಾರಣೆ ತೆರೆಯಿರಿ",
  },
  voice: {
    title: "ನಿಮಗೆ ಇನ್ನೂ ಎಲ್ಲಿ ಧ್ವನಿ ಇದೆ",
    items: [
      { title: "ನಿಮ್ಮ ಕಾರ್ಪೊರೇಟರ್‌ಗೆ ಮತ ಹಾಕಿ", text: "ಪ್ರತಿ ವಾರ್ಡ್ ತನ್ನ ಪಾಲಿಕೆಗೆ ಒಬ್ಬ ಸದಸ್ಯರನ್ನು ಆರಿಸುತ್ತದೆ. ಅವರಲ್ಲಿ ಒಬ್ಬರು 30 ತಿಂಗಳು ಮೇಯರ್ ಆಗುತ್ತಾರೆ." },
      { title: "ವಾರ್ಡ್ ಸಮಿತಿಗಳು", text: "ನಿಮ್ಮ ಕಾರ್ಪೊರೇಟರ್ ಅಧ್ಯಕ್ಷತೆಯಲ್ಲಿ, ವಾರ್ಡ್ ಕಾಮಗಾರಿಗಳನ್ನು ಪ್ರಸ್ತಾಪಿಸಿ ಸೇವೆಗಳ ಮೇಲೆ ನಿಗಾ ಇಡುತ್ತವೆ. ನಿಮ್ಮ ವಾರ್ಡ್ ಸಮಿತಿ ಯಾವಾಗ ಸೇರುತ್ತದೆ ಎಂದು ಕೇಳಿ." },
      { title: "ಮಾಹಿತಿ ಹಕ್ಕು", text: "ಯಾವುದೇ ನಾಗರಿಕರು ಕಾರ್ಯಾದೇಶ, ಬಿಲ್, ಪೂರ್ಣಗೊಂಡ ಪ್ರಮಾಣಪತ್ರಗಳಂತಹ ದಾಖಲೆಗಳನ್ನು ಕೇಳಬಹುದು." },
    ],
    concernsTitle: "ತಜ್ಞರು ಎತ್ತಿರುವ ಕಳವಳಗಳು",
    concerns: [
      "ಜಿಬಿಎ ಮತ್ತು ಯೋಜನಾ ಸಮಿತಿ ಎರಡಕ್ಕೂ ಮುಖ್ಯಮಂತ್ರಿಯೇ ಅಧ್ಯಕ್ಷರು, ಅಧಿಕಾರ ರಾಜ್ಯದಲ್ಲಿ ಕೇಂದ್ರೀಕೃತ.",
      "ವಿಶಾಲ ಕಾರಣಗಳ ಮೇಲೆ ರಾಜ್ಯವು ಚುನಾಯಿತ ಪಾಲಿಕೆಗಳನ್ನು ವಿಸರ್ಜಿಸಬಹುದು.",
      "ಹೆಚ್ಚಿನ ಕಾರ್ಯಾಂಗ ಅಧಿಕಾರ ಚುನಾಯಿತ ಮೇಯರ್‌ಗಳದಲ್ಲ, ಆಯುಕ್ತರದು.",
      "ಪ್ರದೇಶ ಸಭೆಗಳನ್ನು ತೆಗೆದಿರುವುದರಿಂದ ನೆರೆಹೊರೆ ಮಟ್ಟದ ಭಾಗವಹಿಸುವಿಕೆ ಕಡಿಮೆಯಾಗಿದೆ.",
    ],
  },
  survey: {
    title: "ಬೆಂಗಳೂರು ನಮಗೆ ಏನು ಹೇಳುತ್ತಿದೆ",
    lede: "ನಾಗರಿಕ ಸೇವೆಗಳ ಅನುಭವ ಮತ್ತು ಜಿಬಿಎ ಬಗ್ಗೆ ತಿಳುವಳಿಕೆ ಕುರಿತು ನಾವು ನಿವಾಸಿಗಳ ಸಮೀಕ್ಷೆ ನಡೆಸುತ್ತಿದ್ದೇವೆ. ಫಲಿತಾಂಶಗಳು ಬಂದಂತೆ ಇಲ್ಲಿ ಕಾಣಿಸುತ್ತವೆ.",
    pending: "ಫಲಿತಾಂಶಗಳು ಶೀಘ್ರದಲ್ಲಿ",
    cta: "ನಿಮ್ಮ ಅಭಿಪ್ರಾಯ ಸೇರಿಸಿ: ಸಮೀಕ್ಷೆ ತೆಗೆದುಕೊಳ್ಳಿ",
    note: "ಸುಮಾರು 5 ನಿಮಿಷ. ಮುಂದಿನ ಸಂದರ್ಶನಕ್ಕೆ ನೀವು ಒಪ್ಪದ ಹೊರತು ಉತ್ತರಗಳು ಅನಾಮಧೇಯ.",
  },
  about: {
    title: "ಈ ಯೋಜನೆಯ ಬಗ್ಗೆ",
    text: "ಬೆಂಗಳೂರಿನ ನಾಗರಿಕ ಆಡಳಿತವನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವ ಈ ಯೋಜನೆ, ವಿಶ್ವ ಆರ್ಥಿಕ ವೇದಿಕೆಯ ಯುವ ಸಮುದಾಯವಾದ ಗ್ಲೋಬಲ್ ಶೇಪರ್ಸ್ ಬೆಂಗಳೂರು II ಹಬ್‌ನದು. ಹೊಸ ಕಾಯ್ದೆ ಬಿಬಿಎಂಪಿಗೆ ಹೋಲಿಸಿದರೆ ನಾಗರಿಕರ ಮೇಲೆ ಹೇಗೆ ಪರಿಣಾಮ ಬೀರುತ್ತದೆ ಎಂಬುದನ್ನು ಭಾಗವಹಿಸುವಿಕೆ, ಸ್ವಾಯತ್ತತೆ ಮತ್ತು ಹೊಣೆಗಾರಿಕೆಯ ದೃಷ್ಟಿಯಿಂದ ಅಧ್ಯಯನ ಮಾಡುತ್ತಿದ್ದೇವೆ.",
    workstreams: [
      { name: "ಭಾಗೀದಾರರ ಸಮೀಕ್ಷೆ", text: "ನಾಗರಿಕ ಸಮೀಕ್ಷೆ, ಕ್ಷೇತ್ರ ಸಂಪರ್ಕ ಮತ್ತು ಸಂದರ್ಶನಗಳು." },
      { name: "ಸಂಶೋಧನೆ ಮತ್ತು ನೀತಿ", text: "ಕಾಯ್ದೆಯ ಅಧ್ಯಯನ, ಚಿಂತಕರ ಚಾವಡಿಗಳ ಕೆಲಸ, ಪ್ರಕರಣ ಅಧ್ಯಯನಗಳು." },
      { name: "ಬಾಹ್ಯ ವಿಷಯ ಮತ್ತು ದತ್ತಾಂಶ", text: "ಈ ಜಾಲತಾಣ, ದತ್ತಾಂಶ ವಿಶ್ಲೇಷಣೆ ಮತ್ತು ಸಾರ್ವಜನಿಕ ಮಾಹಿತಿ." },
    ],
    disclaimer: "ಇದು ಸ್ವತಂತ್ರ ವಿವರಣೆ, ಅಧಿಕೃತ ಸರ್ಕಾರಿ ಮೂಲವಲ್ಲ. ಸಂಬಂಧಪಟ್ಟ ಪ್ರಾಧಿಕಾರದೊಂದಿಗೆ ಯಾವಾಗಲೂ ದೃಢಪಡಿಸಿಕೊಳ್ಳಿ.",
  },
  footer: {
    sources: "ಮೂಲಗಳು",
    data: "ವಾರ್ಡ್ ದತ್ತಾಂಶ: ಜಿಬಿಎ ವಾರ್ಡ್ ಗಡಿ ದತ್ತಾಂಶ (369 ವಾರ್ಡ್‌ಗಳು), ವಿಚಾರಣೆಯಲ್ಲಿ ಬಳಸಿದಂತೆ.",
    built: "ಗ್ಲೋಬಲ್ ಶೇಪರ್ಸ್ ಬೆಂಗಳೂರು II ನಿರ್ಮಿಸಿದೆ.",
  },
};

export const dictionaries: Record<Locale, Dict> = { en, kn };
export const getDictionary = (l: Locale) => dictionaries[l];

export const SOURCES = [
  { title: "PRS: The Greater Bengaluru Governance Bill, 2024", url: "https://prsindia.org/bills/state-legislative-briefs/the-greater-bengaluru-governance-bill-2024" },
  { title: "Citizen Matters: What is changing with the GBG Act", url: "https://citizenmatters.in/?p=88673" },
  { title: "Wikipedia: Bengaluru Central City Corporation", url: "https://en.wikipedia.org/wiki/Bengaluru_Central_City_Corporation" },
  { title: "OpenCity: Bengaluru civic data", url: "https://opencity.in/" },
];

export const CORP_KN: Record<string, string> = {
  "Bengaluru Central City Corporation": "ಬೆಂಗಳೂರು ಕೇಂದ್ರ ನಗರ ಪಾಲಿಕೆ",
  "Bengaluru East City Corporation": "ಬೆಂಗಳೂರು ಪೂರ್ವ ನಗರ ಪಾಲಿಕೆ",
  "Bengaluru West City Corporation": "ಬೆಂಗಳೂರು ಪಶ್ಚಿಮ ನಗರ ಪಾಲಿಕೆ",
  "Bengaluru North City Corporation": "ಬೆಂಗಳೂರು ಉತ್ತರ ನಗರ ಪಾಲಿಕೆ",
  "Bengaluru South City Corporation": "ಬೆಂಗಳೂರು ದಕ್ಷಿಣ ನಗರ ಪಾಲಿಕೆ",
};
