// Bilingual content. English is the source; Kannada needs a native-speaker
// review before launch (tracked in README).

export const locales = ["en", "kn"] as const;
export type Locale = (typeof locales)[number];
export const hasLocale = (l: string): l is Locale =>
  (locales as readonly string[]).includes(l);

export const SURVEY_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfrxMXtk5bAe91E7STgkvob0nCyYuZef8XfxWLD-7lWs82Imw/viewform";

// Corporation order; colours follow Namma Metro's five lines.
export const CORPS = [
  { key: "Central", full: "Bengaluru Central City Corporation", kn: "ಕೇಂದ್ರ", knFull: "ಬೆಂಗಳೂರು ಕೇಂದ್ರ ನಗರ ಪಾಲಿಕೆ", color: "var(--c-central)" },
  { key: "North", full: "Bengaluru North City Corporation", kn: "ಉತ್ತರ", knFull: "ಬೆಂಗಳೂರು ಉತ್ತರ ನಗರ ಪಾಲಿಕೆ", color: "var(--c-north)" },
  { key: "East", full: "Bengaluru East City Corporation", kn: "ಪೂರ್ವ", knFull: "ಬೆಂಗಳೂರು ಪೂರ್ವ ನಗರ ಪಾಲಿಕೆ", color: "var(--c-east)" },
  { key: "South", full: "Bengaluru South City Corporation", kn: "ದಕ್ಷಿಣ", knFull: "ಬೆಂಗಳೂರು ದಕ್ಷಿಣ ನಗರ ಪಾಲಿಕೆ", color: "var(--c-south)" },
  { key: "West", full: "Bengaluru West City Corporation", kn: "ಪಶ್ಚಿಮ", knFull: "ಬೆಂಗಳೂರು ಪಶ್ಚಿಮ ನಗರ ಪಾಲಿಕೆ", color: "var(--c-west)" },
] as const;

export const CORP_KN: Record<string, string> = Object.fromEntries(CORPS.map((c) => [c.full, c.knFull]));

type Persona = {
  id: string;
  ward: string;
  name: string;
  who: string;
  act: string;
  ground: string;
  todo: string[];
};

const en = {
  meta: {
    title: "GBA, Simplified: how Bengaluru is governed now",
    description:
      "BBMP has been split into five city corporations under the Greater Bengaluru Authority. Find your ward, see who answers for what, and what it means for people like you.",
  },
  nav: {
    brand: "GBA, Simplified",
    links: [
      ["people", "What it means for you"],
      ["changed", "What changed"],
      ["ward", "Your ward"],
      ["who", "Who to ask"],
      ["survey", "Survey"],
    ] as [string, string][],
    switchLang: "ಕನ್ನಡ",
  },
  hero: {
    title: "Bengaluru is now five city corporations.",
    lede: "The Greater Bengaluru Governance Act broke BBMP into five corporations under one Greater Bengaluru Authority. Here is who runs your ward, what changed, and where you still have a say.",
    ctaWard: "Find your ward",
    ctaSurvey: "Take the citizen survey",
    inscription: "ಸರ್ಕಾರದ ಕೆಲಸ ದೇವರ ಕೆಲಸ",
    inscriptionGloss: "“Government work is God's work,” carved over the Vidhana Soudha. So who does the work now?",
    mapHint: "Drag to turn the city. Tap a ward to look it up.",
    wards: "wards",
    replay: "Replay the split",
  },
  timeline: {
    title: "The line so far",
    lede: "Bengaluru has been without an elected council since 2020. The last stretch is still under construction.",
    stops: [
      { date: "2015", text: "Last BBMP council elected" },
      { date: "Sep 2020", text: "Council's term ends; officials run the city" },
      { date: "Mar 2025", text: "Legislature passes the GBG Bill" },
      { date: "Apr 2025", text: "Governor signs; Act published" },
      { date: "Sep 2025", text: "Five corporations formed" },
      { date: "By 31 Dec 2026", text: "Corporation elections, as ordered by the Supreme Court" },
    ],
  },
  people: {
    title: "What it means for people like you",
    lede: "Five Bengalureans, one in each corporation. For each: what the Act says, what is actually happening, and what they can do about it.",
    note: "These are composite characters built from news reports and early survey themes, not real individuals. We will refine them with interviews.",
    act: "What the Act says",
    ground: "What's happening on the ground",
    todo: "What they can do",
    list: [
      {
        id: "ananya",
        ward: "E-047",
        name: "Ananya, 29",
        who: "Rents a flat in Bellanduru and works in tech.",
        act: "Her ward is one of 50 in the new Bengaluru East City Corporation. Once elections happen, she will vote for a ward councillor, and the council picks a mayor for 30 months.",
        ground: "Bellanduru has had no elected councillor since 2020. Her biggest problems, water and flooding, sit partly outside the corporation: water and sewage are BWSSB's job, and many apartments here still depend on tankers. Renters often aren't on the voter roll at their current address.",
        todo: [
          "Check or move her voter registration while electoral rolls are being revised in 2026.",
          "Take water and sewage complaints to BWSSB, and flooded roads to the corporation.",
          "Get her apartment association to track complaints together, so they're harder to close without action.",
        ],
      },
      {
        id: "manjunath",
        ward: "S-011",
        name: "Manjunath, 64",
        who: "Retired, owns a house in Jayanagar East.",
        act: "Property tax rates are now set by the state government in consultation with the GBA, and the Bengaluru South City Corporation collects them.",
        ground: "An e-khata, the digital property record, is now needed to sell, register or borrow against a property. Owners report errors and repeated office visits. In 2025, about 26,000 owners received tax notices after their e-khata details were matched against old tax records.",
        todo: [
          "Check his e-khata details, especially plot size, before he needs them.",
          "Contest a wrong tax notice through the online appeals process instead of queueing at the office.",
          "Join his residents' association's e-khata help camps.",
        ],
      },
      {
        id: "lakshmamma",
        ward: "C-058",
        name: "Lakshmamma, 47",
        who: "Sells flowers near KR Market, in Chickpete ward.",
        act: "Street vending is protected by the national Street Vendors Act, 2014. It requires a Town Vending Committee, with vendors on it, to decide where vending is allowed. Footpaths and trade licences fall to the Bengaluru Central City Corporation.",
        ground: "In July 2026, a footpath clearance drive removed vendors across the city. The government said vending on main roads won't be allowed, but agreed to a fresh vendor survey and provisional vending committees. Many vendors are still waiting for ID cards.",
        todo: [
          "Make sure she is counted in the new vendor survey.",
          "Keep any vending certificate or ID card safe; it is her proof of the right to vend.",
          "Work through her vendor union to push for elections to the vending committee.",
        ],
      },
      {
        id: "farhan",
        ward: "N-005",
        name: "Farhan, 19",
        who: "A student in Yelahanka Satellite Town, voting for the first time.",
        act: "He will elect a councillor for his ward, one of 72 in the Bengaluru North City Corporation. Mayors now serve 30 months instead of BBMP's one year: more time to get things done, and to be held to it.",
        ground: "There have been no civic polls since 2015. The Supreme Court has set 31 December 2026 as the deadline for corporation elections, after electoral rolls are revised.",
        todo: [
          "Register to vote, or check his entry, on the Election Commission's voter portal.",
          "Find out his new ward number; boundaries changed when 198 wards became 369.",
          "Ask candidates what they will do in their first 30 months.",
        ],
      },
      {
        id: "shobha",
        ward: "W-053",
        name: "Shobha, 52",
        who: "Volunteers with her residents' association in Malleshwaram.",
        act: "Ward committees, chaired by the elected councillor, can propose local works and keep watch on services. The neighbourhood-level area sabhas that the 2020 BBMP Act promised were dropped from the final GBG Act.",
        ground: "Without councillors, ward committees have been run by officials. Reports describe meetings turning into complaint sessions, few residents attending, and MLAs stepping in informally.",
        todo: [
          "Ask the ward office for the committee's meeting dates and minutes.",
          "Use RTI to get records of works in her ward: work orders, bills, completion certificates.",
          "Bring neighbours along; a full room is harder to ignore.",
        ],
      },
    ] as Persona[],
  },
  changed: {
    title: "What changed",
    lede: "More corporations and longer mayoral terms, but more power with the state government, and one layer of citizen participation gone.",
    before: "BBMP Act, 2020",
    after: "GBG Act, 2024",
    rows: [
      ["City bodies", "One corporation, BBMP", "Five corporations (up to seven allowed) under the Greater Bengaluru Authority"],
      ["At the top", "The mayor and BBMP council", "The GBA, chaired by the Chief Minister"],
      ["Mayor's term", "1 year", "30 months, in each corporation"],
      ["Neighbourhood voice", "Ward committees and area sabhas", "Ward committees only; area sabhas dropped"],
      ["City planning", "No metropolitan planning committee", "A planning committee chaired by the Chief Minister"],
      ["Big contracts", "Approved by the mayor", "Need state government approval"],
    ] as [string, string, string][],
    lensesTitle: "We look at every change through three questions.",
    lenses: [
      { name: "Participation", text: "Can citizens shape decisions? Ward committees stay; area sabhas are gone." },
      { name: "Autonomy", text: "Can elected corporations act on their own? Many decisions now need state or GBA approval." },
      { name: "Accountability", text: "Is it clear who answers for what? Five corporations plus parastatals like BDA and BWSSB can blur this." },
    ],
    concernsTitle: "Concerns experts have raised",
    concerns: [
      "The Chief Minister chairs both the GBA and the planning committee, concentrating power with the state.",
      "The state can dissolve an elected corporation on broad grounds.",
      "Appointed commissioners, not elected mayors, hold most executive power.",
    ],
    source: "Based on PRS Legislative Research's analysis of the Bill; under review by our Desk Research team.",
  },
  ward: {
    title: "Find your ward",
    lede: "Search for your area, or tap the map.",
    placeholder: "Your area, e.g. Jayanagar, Kogilu, Hebbal",
    corporation: "City corporation",
    zone: "Zone",
    assembly: "Assembly constituency",
    wardId: "Ward number",
    empty: "Pick a ward on the map, or search for one, to see who it belongs to.",
    noMatch: "No ward by that name. Try a nearby locality or landmark.",
    caveat: "Boundaries are simplified. If you live near one, confirm with your corporation office.",
  },
  who: {
    title: "Who to ask",
    lede: "Your corporation handles most day-to-day civic work, but several services are run by separate state bodies. Pick a problem.",
    problems: [
      { q: "A pothole on my street", a: "Your city corporation.", more: "Main arterial roads and projects that cross corporations involve the GBA." },
      { q: "Garbage isn't collected", a: "Your city corporation.", more: "Ask your ward office for the collection schedule and the supervisor's number." },
      { q: "No water, or sewage overflowing", a: "BWSSB, the water board.", more: "Water is not your corporation's job. BWSSB's helpline is 1916." },
      { q: "Power cut or a sparking transformer", a: "BESCOM.", more: "Electricity is supplied by a state company, separate from the corporation." },
      { q: "Street light not working", a: "Your city corporation.", more: "The corporation maintains street lights; BESCOM supplies the power." },
      { q: "Road floods every time it rains", a: "Your city corporation.", more: "Large stormwater drains that cross corporations involve the GBA." },
      { q: "Property tax or e-khata", a: "Your city corporation.", more: "Tax rates are set by the state government in consultation with the GBA." },
      { q: "Bus route or frequency", a: "BMTC.", more: "City buses are run by a state transport corporation." },
      { q: "Traffic signal or parking", a: "Bengaluru Traffic Police.", more: "Footpath encroachments are handled together with the corporation." },
    ],
  },
  survey: {
    title: "Tell us what you see",
    lede: "We are surveying residents on how they experience civic services and what they know about the GBA. The findings will be published here.",
    cta: "Take the survey",
    note: "About 5 minutes. Answers are anonymous unless you choose to be interviewed.",
  },
  about: {
    title: "About this project",
    text: "Decoding Civic Governance in Bengaluru is a project of the Global Shapers Bengaluru II Hub, a community of young people under the World Economic Forum. We are studying how the new Act affects citizens compared with BBMP, through participation, autonomy and accountability.",
    disclaimer: "This is an independent explainer, not an official government source. Always confirm with the relevant authority.",
  },
  footer: {
    sources: "Sources",
    data: "Ward data: GBA ward boundary dataset (369 wards).",
    colours: "Corporation colours borrow Namma Metro's five lines.",
    built: "Made by Global Shapers Bengaluru II.",
  },
};

export type Dict = typeof en;

const kn: Dict = {
  meta: {
    title: "ಜಿಬಿಎ, ಸರಳವಾಗಿ: ಈಗ ಬೆಂಗಳೂರಿನ ಆಡಳಿತ ಹೇಗೆ",
    description:
      "ಬಿಬಿಎಂಪಿಯನ್ನು ಗ್ರೇಟರ್ ಬೆಂಗಳೂರು ಪ್ರಾಧಿಕಾರದ ಅಡಿಯಲ್ಲಿ ಐದು ನಗರ ಪಾಲಿಕೆಗಳಾಗಿ ವಿಂಗಡಿಸಲಾಗಿದೆ. ನಿಮ್ಮ ವಾರ್ಡ್ ಹುಡುಕಿ, ಯಾರು ಯಾವುದಕ್ಕೆ ಹೊಣೆ ಎಂದು ತಿಳಿಯಿರಿ.",
  },
  nav: {
    brand: "ಜಿಬಿಎ, ಸರಳವಾಗಿ",
    links: [
      ["people", "ನಿಮಗೆ ಇದರ ಅರ್ಥ"],
      ["changed", "ಏನು ಬದಲಾಯಿತು"],
      ["ward", "ನಿಮ್ಮ ವಾರ್ಡ್"],
      ["who", "ಯಾರನ್ನು ಕೇಳಬೇಕು"],
      ["survey", "ಸಮೀಕ್ಷೆ"],
    ],
    switchLang: "English",
  },
  hero: {
    title: "ಬೆಂಗಳೂರು ಈಗ ಐದು ನಗರ ಪಾಲಿಕೆಗಳು.",
    lede: "ಗ್ರೇಟರ್ ಬೆಂಗಳೂರು ಆಡಳಿತ ಕಾಯ್ದೆಯು ಬಿಬಿಎಂಪಿಯನ್ನು ಒಂದೇ ಗ್ರೇಟರ್ ಬೆಂಗಳೂರು ಪ್ರಾಧಿಕಾರದ ಅಡಿಯಲ್ಲಿ ಐದು ಪಾಲಿಕೆಗಳಾಗಿ ವಿಂಗಡಿಸಿತು. ನಿಮ್ಮ ವಾರ್ಡ್ ಅನ್ನು ಯಾರು ನಡೆಸುತ್ತಾರೆ, ಏನು ಬದಲಾಯಿತು, ಮತ್ತು ನಿಮಗೆ ಇನ್ನೂ ಎಲ್ಲಿ ಧ್ವನಿ ಇದೆ ಎಂಬುದು ಇಲ್ಲಿದೆ.",
    ctaWard: "ನಿಮ್ಮ ವಾರ್ಡ್ ಹುಡುಕಿ",
    ctaSurvey: "ನಾಗರಿಕ ಸಮೀಕ್ಷೆಯಲ್ಲಿ ಭಾಗವಹಿಸಿ",
    inscription: "ಸರ್ಕಾರದ ಕೆಲಸ ದೇವರ ಕೆಲಸ",
    inscriptionGloss: "ವಿಧಾನಸೌಧದ ಮೇಲೆ ಕೆತ್ತಿರುವ ಮಾತು. ಹಾಗಾದರೆ ಈಗ ಆ ಕೆಲಸ ಮಾಡುವವರು ಯಾರು?",
    mapHint: "ನಗರವನ್ನು ತಿರುಗಿಸಲು ಎಳೆಯಿರಿ. ವಾರ್ಡ್ ನೋಡಲು ಒತ್ತಿರಿ.",
    wards: "ವಾರ್ಡ್‌ಗಳು",
    replay: "ವಿಭಜನೆಯನ್ನು ಮತ್ತೆ ನೋಡಿ",
  },
  timeline: {
    title: "ಇಲ್ಲಿಯವರೆಗಿನ ಮಾರ್ಗ",
    lede: "2020ರಿಂದ ಬೆಂಗಳೂರಿಗೆ ಚುನಾಯಿತ ಕೌನ್ಸಿಲ್ ಇಲ್ಲ. ಕೊನೆಯ ಭಾಗ ಇನ್ನೂ ನಿರ್ಮಾಣ ಹಂತದಲ್ಲಿದೆ.",
    stops: [
      { date: "2015", text: "ಕೊನೆಯ ಬಿಬಿಎಂಪಿ ಕೌನ್ಸಿಲ್ ಚುನಾವಣೆ" },
      { date: "ಸೆಪ್ಟೆಂಬರ್ 2020", text: "ಕೌನ್ಸಿಲ್ ಅವಧಿ ಮುಕ್ತಾಯ; ಅಧಿಕಾರಿಗಳ ಆಡಳಿತ" },
      { date: "ಮಾರ್ಚ್ 2025", text: "ವಿಧಾನಮಂಡಲದಲ್ಲಿ ಮಸೂದೆ ಅಂಗೀಕಾರ" },
      { date: "ಏಪ್ರಿಲ್ 2025", text: "ರಾಜ್ಯಪಾಲರ ಅಂಕಿತ; ಕಾಯ್ದೆ ಪ್ರಕಟ" },
      { date: "ಸೆಪ್ಟೆಂಬರ್ 2025", text: "ಐದು ಪಾಲಿಕೆಗಳ ರಚನೆ" },
      { date: "31 ಡಿಸೆಂಬರ್ 2026ರೊಳಗೆ", text: "ಸುಪ್ರೀಂ ಕೋರ್ಟ್ ಆದೇಶದಂತೆ ಪಾಲಿಕೆ ಚುನಾವಣೆ" },
    ],
  },
  people: {
    title: "ನಿಮ್ಮಂತಹವರಿಗೆ ಇದರ ಅರ್ಥ",
    lede: "ಐದು ಬೆಂಗಳೂರಿಗರು, ಪ್ರತಿ ಪಾಲಿಕೆಯಿಂದ ಒಬ್ಬರು. ಕಾಯ್ದೆ ಏನು ಹೇಳುತ್ತದೆ, ನಿಜವಾಗಿ ಏನಾಗುತ್ತಿದೆ, ಮತ್ತು ಅವರು ಏನು ಮಾಡಬಹುದು.",
    note: "ಇವರು ಸುದ್ದಿ ವರದಿಗಳು ಮತ್ತು ಸಮೀಕ್ಷೆಯ ಆರಂಭಿಕ ಅಂಶಗಳಿಂದ ರೂಪಿಸಿದ ಸಂಯೋಜಿತ ಪಾತ್ರಗಳು, ನಿಜವಾದ ವ್ಯಕ್ತಿಗಳಲ್ಲ. ಸಂದರ್ಶನಗಳ ಮೂಲಕ ಇವುಗಳನ್ನು ಉತ್ತಮಪಡಿಸುತ್ತೇವೆ.",
    act: "ಕಾಯ್ದೆ ಏನು ಹೇಳುತ್ತದೆ",
    ground: "ನಿಜವಾಗಿ ಏನಾಗುತ್ತಿದೆ",
    todo: "ಅವರು ಏನು ಮಾಡಬಹುದು",
    list: [
      {
        id: "ananya",
        ward: "E-047",
        name: "ಅನನ್ಯ, 29",
        who: "ಬೆಳ್ಳಂದೂರಿನಲ್ಲಿ ಬಾಡಿಗೆ ಮನೆಯಲ್ಲಿದ್ದಾರೆ, ಟೆಕ್ ಉದ್ಯೋಗಿ.",
        act: "ಅವರ ವಾರ್ಡ್ ಹೊಸ ಬೆಂಗಳೂರು ಪೂರ್ವ ನಗರ ಪಾಲಿಕೆಯ 50 ವಾರ್ಡ್‌ಗಳಲ್ಲಿ ಒಂದು. ಚುನಾವಣೆ ನಡೆದಾಗ ಅವರು ವಾರ್ಡ್ ಸದಸ್ಯರಿಗೆ ಮತ ಹಾಕುತ್ತಾರೆ, ಕೌನ್ಸಿಲ್ 30 ತಿಂಗಳಿಗೆ ಮೇಯರ್ ಆರಿಸುತ್ತದೆ.",
        ground: "2020ರಿಂದ ಬೆಳ್ಳಂದೂರಿಗೆ ಚುನಾಯಿತ ಸದಸ್ಯರಿಲ್ಲ. ಅವರ ದೊಡ್ಡ ಸಮಸ್ಯೆಗಳಾದ ನೀರು ಮತ್ತು ಪ್ರವಾಹ ಭಾಗಶಃ ಪಾಲಿಕೆಯ ಹೊರಗಿವೆ: ನೀರು ಮತ್ತು ಒಳಚರಂಡಿ ಜಲಮಂಡಳಿಯ ಕೆಲಸ, ಇಲ್ಲಿನ ಅನೇಕ ಅಪಾರ್ಟ್‌ಮೆಂಟ್‌ಗಳು ಇನ್ನೂ ಟ್ಯಾಂಕರ್ ಅವಲಂಬಿಸಿವೆ. ಬಾಡಿಗೆದಾರರು ಹೆಚ್ಚಾಗಿ ತಮ್ಮ ಈಗಿನ ವಿಳಾಸದ ಮತದಾರರ ಪಟ್ಟಿಯಲ್ಲಿ ಇರುವುದಿಲ್ಲ.",
        todo: [
          "2026ರಲ್ಲಿ ಮತದಾರರ ಪಟ್ಟಿ ಪರಿಷ್ಕರಣೆ ನಡೆಯುತ್ತಿರುವಾಗ ತಮ್ಮ ನೋಂದಣಿ ಪರಿಶೀಲಿಸಿ ಅಥವಾ ವರ್ಗಾಯಿಸಿ.",
          "ನೀರು, ಒಳಚರಂಡಿ ದೂರುಗಳನ್ನು ಜಲಮಂಡಳಿಗೆ, ಪ್ರವಾಹದ ರಸ್ತೆಗಳ ದೂರನ್ನು ಪಾಲಿಕೆಗೆ ಕೊಡಿ.",
          "ಅಪಾರ್ಟ್‌ಮೆಂಟ್ ಸಂಘದೊಂದಿಗೆ ಒಟ್ಟಾಗಿ ದೂರುಗಳನ್ನು ಗಮನಿಸಿ, ಕೆಲಸವಿಲ್ಲದೆ ಮುಚ್ಚುವುದು ಕಷ್ಟವಾಗುತ್ತದೆ.",
        ],
      },
      {
        id: "manjunath",
        ward: "S-011",
        name: "ಮಂಜುನಾಥ್, 64",
        who: "ನಿವೃತ್ತರು, ಜಯನಗರ ಪೂರ್ವದಲ್ಲಿ ಸ್ವಂತ ಮನೆ.",
        act: "ಆಸ್ತಿ ತೆರಿಗೆ ದರವನ್ನು ಈಗ ಜಿಬಿಎ ಜೊತೆ ಸಮಾಲೋಚಿಸಿ ರಾಜ್ಯ ಸರ್ಕಾರ ನಿಗದಿಪಡಿಸುತ್ತದೆ, ಬೆಂಗಳೂರು ದಕ್ಷಿಣ ನಗರ ಪಾಲಿಕೆ ಅದನ್ನು ಸಂಗ್ರಹಿಸುತ್ತದೆ.",
        ground: "ಆಸ್ತಿ ಮಾರಾಟ, ನೋಂದಣಿ ಅಥವಾ ಸಾಲಕ್ಕೆ ಈಗ ಡಿಜಿಟಲ್ ಆಸ್ತಿ ದಾಖಲೆಯಾದ ಇ-ಖಾತಾ ಬೇಕು. ತಪ್ಪುಗಳು ಮತ್ತು ಕಚೇರಿಗೆ ಪದೇ ಪದೇ ಅಲೆದಾಟದ ಬಗ್ಗೆ ಮಾಲೀಕರು ದೂರುತ್ತಾರೆ. 2025ರಲ್ಲಿ ಇ-ಖಾತಾ ವಿವರಗಳನ್ನು ಹಳೆಯ ತೆರಿಗೆ ದಾಖಲೆಗಳೊಂದಿಗೆ ಹೋಲಿಸಿದ ನಂತರ ಸುಮಾರು 26,000 ಮಾಲೀಕರಿಗೆ ತೆರಿಗೆ ನೋಟಿಸ್ ಬಂತು.",
        todo: [
          "ಅಗತ್ಯ ಬರುವ ಮೊದಲೇ ತಮ್ಮ ಇ-ಖಾತಾ ವಿವರ, ವಿಶೇಷವಾಗಿ ನಿವೇಶನದ ಅಳತೆ, ಪರಿಶೀಲಿಸಿ.",
          "ತಪ್ಪು ತೆರಿಗೆ ನೋಟಿಸ್ ಅನ್ನು ಕಚೇರಿ ಸರದಿಯ ಬದಲು ಆನ್‌ಲೈನ್ ಮೇಲ್ಮನವಿ ಮೂಲಕ ಪ್ರಶ್ನಿಸಿ.",
          "ನಿವಾಸಿಗಳ ಸಂಘದ ಇ-ಖಾತಾ ಸಹಾಯ ಶಿಬಿರಗಳಿಗೆ ಸೇರಿ.",
        ],
      },
      {
        id: "lakshmamma",
        ward: "C-058",
        name: "ಲಕ್ಷ್ಮಮ್ಮ, 47",
        who: "ಚಿಕ್ಕಪೇಟೆ ವಾರ್ಡ್‌ನ ಕೆ.ಆರ್. ಮಾರುಕಟ್ಟೆ ಬಳಿ ಹೂವು ಮಾರುತ್ತಾರೆ.",
        act: "ರಾಷ್ಟ್ರೀಯ ಬೀದಿ ಬದಿ ವ್ಯಾಪಾರಿಗಳ ಕಾಯ್ದೆ, 2014 ಬೀದಿ ವ್ಯಾಪಾರವನ್ನು ರಕ್ಷಿಸುತ್ತದೆ. ಎಲ್ಲಿ ವ್ಯಾಪಾರ ಮಾಡಬಹುದು ಎಂದು ನಿರ್ಧರಿಸಲು ವ್ಯಾಪಾರಿಗಳನ್ನು ಒಳಗೊಂಡ ಪಟ್ಟಣ ವ್ಯಾಪಾರ ಸಮಿತಿ ಇರಬೇಕು. ಪಾದಚಾರಿ ಮಾರ್ಗ ಮತ್ತು ವ್ಯಾಪಾರ ಪರವಾನಗಿ ಬೆಂಗಳೂರು ಕೇಂದ್ರ ನಗರ ಪಾಲಿಕೆಯದು.",
        ground: "ಜುಲೈ 2026ರಲ್ಲಿ ಪಾದಚಾರಿ ಮಾರ್ಗ ತೆರವು ಕಾರ್ಯಾಚರಣೆ ನಗರದಾದ್ಯಂತ ವ್ಯಾಪಾರಿಗಳನ್ನು ತೆಗೆದುಹಾಕಿತು. ಮುಖ್ಯ ರಸ್ತೆಗಳಲ್ಲಿ ವ್ಯಾಪಾರಕ್ಕೆ ಅವಕಾಶವಿಲ್ಲ ಎಂದು ಸರ್ಕಾರ ಹೇಳಿತು, ಆದರೆ ಹೊಸ ಸಮೀಕ್ಷೆ ಮತ್ತು ತಾತ್ಕಾಲಿಕ ವ್ಯಾಪಾರ ಸಮಿತಿಗಳಿಗೆ ಒಪ್ಪಿತು. ಅನೇಕ ವ್ಯಾಪಾರಿಗಳು ಇನ್ನೂ ಗುರುತಿನ ಚೀಟಿಗಾಗಿ ಕಾಯುತ್ತಿದ್ದಾರೆ.",
        todo: [
          "ಹೊಸ ವ್ಯಾಪಾರಿಗಳ ಸಮೀಕ್ಷೆಯಲ್ಲಿ ತಮ್ಮ ಹೆಸರು ಸೇರುವಂತೆ ನೋಡಿಕೊಳ್ಳಿ.",
          "ವ್ಯಾಪಾರ ಪ್ರಮಾಣಪತ್ರ ಅಥವಾ ಗುರುತಿನ ಚೀಟಿ ಜೋಪಾನವಾಗಿಡಿ; ವ್ಯಾಪಾರದ ಹಕ್ಕಿಗೆ ಅದೇ ಪುರಾವೆ.",
          "ವ್ಯಾಪಾರ ಸಮಿತಿಗೆ ಚುನಾವಣೆಗಾಗಿ ವ್ಯಾಪಾರಿಗಳ ಸಂಘದ ಮೂಲಕ ಒತ್ತಾಯಿಸಿ.",
        ],
      },
      {
        id: "farhan",
        ward: "N-005",
        name: "ಫರ್ಹಾನ್, 19",
        who: "ಯಲಹಂಕ ಉಪನಗರದ ವಿದ್ಯಾರ್ಥಿ, ಮೊದಲ ಬಾರಿ ಮತ ಹಾಕುತ್ತಿದ್ದಾರೆ.",
        act: "ಬೆಂಗಳೂರು ಉತ್ತರ ನಗರ ಪಾಲಿಕೆಯ 72 ವಾರ್ಡ್‌ಗಳಲ್ಲಿ ಒಂದಾದ ತಮ್ಮ ವಾರ್ಡ್‌ಗೆ ಅವರು ಸದಸ್ಯರನ್ನು ಆರಿಸುತ್ತಾರೆ. ಮೇಯರ್ ಅವಧಿ ಈಗ ಬಿಬಿಎಂಪಿಯ ಒಂದು ವರ್ಷದ ಬದಲು 30 ತಿಂಗಳು: ಕೆಲಸ ಮಾಡಲು, ಮತ್ತು ಹೊಣೆಗಾರರನ್ನಾಗಿಸಲು ಹೆಚ್ಚು ಸಮಯ.",
        ground: "2015ರಿಂದ ಪಾಲಿಕೆ ಚುನಾವಣೆ ನಡೆದಿಲ್ಲ. ಮತದಾರರ ಪಟ್ಟಿ ಪರಿಷ್ಕರಣೆಯ ನಂತರ, 31 ಡಿಸೆಂಬರ್ 2026 ಅನ್ನು ಸುಪ್ರೀಂ ಕೋರ್ಟ್ ಚುನಾವಣೆಯ ಗಡುವಾಗಿ ನಿಗದಿಪಡಿಸಿದೆ.",
        todo: [
          "ಚುನಾವಣಾ ಆಯೋಗದ ಮತದಾರರ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ನೋಂದಾಯಿಸಿ ಅಥವಾ ತಮ್ಮ ಹೆಸರು ಪರಿಶೀಲಿಸಿ.",
          "ತಮ್ಮ ಹೊಸ ವಾರ್ಡ್ ಸಂಖ್ಯೆ ತಿಳಿಯಿರಿ; 198 ವಾರ್ಡ್‌ಗಳು 369 ಆದಾಗ ಗಡಿಗಳು ಬದಲಾದವು.",
          "ಮೊದಲ 30 ತಿಂಗಳಲ್ಲಿ ಏನು ಮಾಡುತ್ತೀರಿ ಎಂದು ಅಭ್ಯರ್ಥಿಗಳನ್ನು ಕೇಳಿ.",
        ],
      },
      {
        id: "shobha",
        ward: "W-053",
        name: "ಶೋಭಾ, 52",
        who: "ಮಲ್ಲೇಶ್ವರದ ನಿವಾಸಿಗಳ ಸಂಘದ ಸ್ವಯಂಸೇವಕಿ.",
        act: "ಚುನಾಯಿತ ಸದಸ್ಯರ ಅಧ್ಯಕ್ಷತೆಯ ವಾರ್ಡ್ ಸಮಿತಿಗಳು ಸ್ಥಳೀಯ ಕಾಮಗಾರಿಗಳನ್ನು ಪ್ರಸ್ತಾಪಿಸಬಹುದು ಮತ್ತು ಸೇವೆಗಳ ಮೇಲೆ ನಿಗಾ ಇಡಬಹುದು. 2020ರ ಬಿಬಿಎಂಪಿ ಕಾಯ್ದೆ ಭರವಸೆ ನೀಡಿದ್ದ ನೆರೆಹೊರೆ ಮಟ್ಟದ ಪ್ರದೇಶ ಸಭೆಗಳನ್ನು ಅಂತಿಮ ಜಿಬಿಜಿ ಕಾಯ್ದೆಯಿಂದ ಕೈಬಿಡಲಾಗಿದೆ.",
        ground: "ಸದಸ್ಯರಿಲ್ಲದೆ ವಾರ್ಡ್ ಸಮಿತಿಗಳನ್ನು ಅಧಿಕಾರಿಗಳು ನಡೆಸಿದ್ದಾರೆ. ಸಭೆಗಳು ದೂರು ಸಭೆಗಳಾಗಿ ಬದಲಾಗಿವೆ, ಕೆಲವೇ ನಿವಾಸಿಗಳು ಬರುತ್ತಾರೆ, ಶಾಸಕರು ಅನೌಪಚಾರಿಕವಾಗಿ ಮಧ್ಯಪ್ರವೇಶಿಸುತ್ತಾರೆ ಎಂದು ವರದಿಗಳು ಹೇಳುತ್ತವೆ.",
        todo: [
          "ಸಮಿತಿ ಸಭೆಗಳ ದಿನಾಂಕ ಮತ್ತು ನಡಾವಳಿಗಳನ್ನು ವಾರ್ಡ್ ಕಚೇರಿಯಲ್ಲಿ ಕೇಳಿ.",
          "ವಾರ್ಡ್ ಕಾಮಗಾರಿಗಳ ದಾಖಲೆ ಪಡೆಯಲು ಮಾಹಿತಿ ಹಕ್ಕು ಬಳಸಿ: ಕಾರ್ಯಾದೇಶ, ಬಿಲ್, ಪೂರ್ಣಗೊಂಡ ಪ್ರಮಾಣಪತ್ರ.",
          "ನೆರೆಹೊರೆಯವರನ್ನು ಜೊತೆಗೆ ಕರೆತನ್ನಿ; ತುಂಬಿದ ಸಭೆಯನ್ನು ಕಡೆಗಣಿಸುವುದು ಕಷ್ಟ.",
        ],
      },
    ],
  },
  changed: {
    title: "ಏನು ಬದಲಾಯಿತು",
    lede: "ಹೆಚ್ಚು ಪಾಲಿಕೆಗಳು ಮತ್ತು ದೀರ್ಘ ಮೇಯರ್ ಅವಧಿ, ಆದರೆ ರಾಜ್ಯ ಸರ್ಕಾರದ ಕೈಯಲ್ಲಿ ಹೆಚ್ಚು ಅಧಿಕಾರ, ಮತ್ತು ನಾಗರಿಕ ಭಾಗವಹಿಸುವಿಕೆಯ ಒಂದು ಹಂತ ಇಲ್ಲವಾಗಿದೆ.",
    before: "ಬಿಬಿಎಂಪಿ ಕಾಯ್ದೆ, 2020",
    after: "ಜಿಬಿಜಿ ಕಾಯ್ದೆ, 2024",
    rows: [
      ["ನಗರ ಸಂಸ್ಥೆಗಳು", "ಒಂದೇ ಪಾಲಿಕೆ, ಬಿಬಿಎಂಪಿ", "ಗ್ರೇಟರ್ ಬೆಂಗಳೂರು ಪ್ರಾಧಿಕಾರದ ಅಡಿಯಲ್ಲಿ ಐದು ಪಾಲಿಕೆಗಳು (ಏಳರವರೆಗೆ ಅವಕಾಶ)"],
      ["ಮೇಲ್ಭಾಗದಲ್ಲಿ", "ಮೇಯರ್ ಮತ್ತು ಬಿಬಿಎಂಪಿ ಕೌನ್ಸಿಲ್", "ಮುಖ್ಯಮಂತ್ರಿ ಅಧ್ಯಕ್ಷತೆಯ ಜಿಬಿಎ"],
      ["ಮೇಯರ್ ಅವಧಿ", "1 ವರ್ಷ", "ಪ್ರತಿ ಪಾಲಿಕೆಯಲ್ಲಿ 30 ತಿಂಗಳು"],
      ["ನೆರೆಹೊರೆಯ ಧ್ವನಿ", "ವಾರ್ಡ್ ಸಮಿತಿ ಮತ್ತು ಪ್ರದೇಶ ಸಭೆ", "ವಾರ್ಡ್ ಸಮಿತಿ ಮಾತ್ರ; ಪ್ರದೇಶ ಸಭೆ ಕೈಬಿಡಲಾಗಿದೆ"],
      ["ನಗರ ಯೋಜನೆ", "ಮಹಾನಗರ ಯೋಜನಾ ಸಮಿತಿ ಇರಲಿಲ್ಲ", "ಮುಖ್ಯಮಂತ್ರಿ ಅಧ್ಯಕ್ಷತೆಯ ಯೋಜನಾ ಸಮಿತಿ"],
      ["ದೊಡ್ಡ ಗುತ್ತಿಗೆಗಳು", "ಮೇಯರ್ ಅನುಮೋದನೆ", "ರಾಜ್ಯ ಸರ್ಕಾರದ ಅನುಮೋದನೆ ಬೇಕು"],
    ],
    lensesTitle: "ಪ್ರತಿ ಬದಲಾವಣೆಯನ್ನು ನಾವು ಮೂರು ಪ್ರಶ್ನೆಗಳ ಮೂಲಕ ನೋಡುತ್ತೇವೆ.",
    lenses: [
      { name: "ಭಾಗವಹಿಸುವಿಕೆ", text: "ನಾಗರಿಕರು ನಿರ್ಧಾರಗಳನ್ನು ರೂಪಿಸಬಹುದೇ? ವಾರ್ಡ್ ಸಮಿತಿಗಳು ಉಳಿದಿವೆ; ಪ್ರದೇಶ ಸಭೆಗಳು ಇಲ್ಲ." },
      { name: "ಸ್ವಾಯತ್ತತೆ", text: "ಚುನಾಯಿತ ಪಾಲಿಕೆಗಳು ಸ್ವತಂತ್ರವಾಗಿ ಕೆಲಸ ಮಾಡಬಹುದೇ? ಅನೇಕ ನಿರ್ಧಾರಗಳಿಗೆ ಈಗ ರಾಜ್ಯ ಅಥವಾ ಜಿಬಿಎ ಅನುಮೋದನೆ ಬೇಕು." },
      { name: "ಹೊಣೆಗಾರಿಕೆ", text: "ಯಾವುದಕ್ಕೆ ಯಾರು ಉತ್ತರಿಸಬೇಕು ಎಂಬುದು ಸ್ಪಷ್ಟವೇ? ಐದು ಪಾಲಿಕೆಗಳ ಜೊತೆಗೆ ಬಿಡಿಎ, ಜಲಮಂಡಳಿಯಂತಹ ಸಂಸ್ಥೆಗಳು ಇದನ್ನು ಗೊಂದಲಗೊಳಿಸಬಹುದು." },
    ],
    concernsTitle: "ತಜ್ಞರು ಎತ್ತಿರುವ ಕಳವಳಗಳು",
    concerns: [
      "ಜಿಬಿಎ ಮತ್ತು ಯೋಜನಾ ಸಮಿತಿ ಎರಡಕ್ಕೂ ಮುಖ್ಯಮಂತ್ರಿಯೇ ಅಧ್ಯಕ್ಷರು, ಅಧಿಕಾರ ರಾಜ್ಯದಲ್ಲಿ ಕೇಂದ್ರೀಕೃತ.",
      "ವಿಶಾಲ ಕಾರಣಗಳ ಮೇಲೆ ರಾಜ್ಯವು ಚುನಾಯಿತ ಪಾಲಿಕೆಯನ್ನು ವಿಸರ್ಜಿಸಬಹುದು.",
      "ಹೆಚ್ಚಿನ ಕಾರ್ಯಾಂಗ ಅಧಿಕಾರ ಚುನಾಯಿತ ಮೇಯರ್‌ಗಳದಲ್ಲ, ನೇಮಕಗೊಂಡ ಆಯುಕ್ತರದು.",
    ],
    source: "ಪಿಆರ್‌ಎಸ್ ಲೆಜಿಸ್ಲೇಟಿವ್ ರಿಸರ್ಚ್ ವಿಶ್ಲೇಷಣೆಯ ಆಧಾರದ ಮೇಲೆ; ನಮ್ಮ ಸಂಶೋಧನಾ ತಂಡ ಪರಿಶೀಲಿಸುತ್ತಿದೆ.",
  },
  ward: {
    title: "ನಿಮ್ಮ ವಾರ್ಡ್ ಹುಡುಕಿ",
    lede: "ನಿಮ್ಮ ಪ್ರದೇಶವನ್ನು ಹುಡುಕಿ, ಅಥವಾ ನಕ್ಷೆಯ ಮೇಲೆ ಒತ್ತಿ.",
    placeholder: "ನಿಮ್ಮ ಪ್ರದೇಶ, ಉದಾ. ಜಯನಗರ, ಕೋಗಿಲು, ಹೆಬ್ಬಾಳ",
    corporation: "ನಗರ ಪಾಲಿಕೆ",
    zone: "ವಲಯ",
    assembly: "ವಿಧಾನಸಭಾ ಕ್ಷೇತ್ರ",
    wardId: "ವಾರ್ಡ್ ಸಂಖ್ಯೆ",
    empty: "ಅದು ಯಾವ ಪಾಲಿಕೆಗೆ ಸೇರಿದೆ ಎಂದು ನೋಡಲು ನಕ್ಷೆಯಲ್ಲಿ ವಾರ್ಡ್ ಆಯ್ಕೆಮಾಡಿ ಅಥವಾ ಹುಡುಕಿ.",
    noMatch: "ಆ ಹೆಸರಿನ ವಾರ್ಡ್ ಇಲ್ಲ. ಹತ್ತಿರದ ಪ್ರದೇಶ ಅಥವಾ ಹೆಗ್ಗುರುತು ಪ್ರಯತ್ನಿಸಿ.",
    caveat: "ಗಡಿಗಳು ಸರಳೀಕೃತ. ನೀವು ಗಡಿಯ ಹತ್ತಿರ ಇದ್ದರೆ ಪಾಲಿಕೆ ಕಚೇರಿಯಲ್ಲಿ ದೃಢಪಡಿಸಿ.",
  },
  who: {
    title: "ಯಾರನ್ನು ಕೇಳಬೇಕು",
    lede: "ದಿನನಿತ್ಯದ ಹೆಚ್ಚಿನ ನಾಗರಿಕ ಕೆಲಸ ನಿಮ್ಮ ಪಾಲಿಕೆಯದು, ಆದರೆ ಕೆಲವು ಸೇವೆಗಳನ್ನು ಪ್ರತ್ಯೇಕ ರಾಜ್ಯ ಸಂಸ್ಥೆಗಳು ನಡೆಸುತ್ತವೆ. ಒಂದು ಸಮಸ್ಯೆ ಆಯ್ಕೆಮಾಡಿ.",
    problems: [
      { q: "ನನ್ನ ಬೀದಿಯಲ್ಲಿ ಗುಂಡಿ", a: "ನಿಮ್ಮ ನಗರ ಪಾಲಿಕೆ.", more: "ಮುಖ್ಯ ರಸ್ತೆಗಳು ಮತ್ತು ಪಾಲಿಕೆಗಳನ್ನು ದಾಟುವ ಯೋಜನೆಗಳಲ್ಲಿ ಜಿಬಿಎ ಪಾತ್ರ ಇದೆ." },
      { q: "ಕಸ ಸಂಗ್ರಹವಾಗುತ್ತಿಲ್ಲ", a: "ನಿಮ್ಮ ನಗರ ಪಾಲಿಕೆ.", more: "ಸಂಗ್ರಹ ವೇಳಾಪಟ್ಟಿ ಮತ್ತು ಮೇಲ್ವಿಚಾರಕರ ಸಂಖ್ಯೆಯನ್ನು ವಾರ್ಡ್ ಕಚೇರಿಯಲ್ಲಿ ಕೇಳಿ." },
      { q: "ನೀರಿಲ್ಲ, ಅಥವಾ ಒಳಚರಂಡಿ ಉಕ್ಕುತ್ತಿದೆ", a: "ಜಲಮಂಡಳಿ (BWSSB).", more: "ನೀರು ನಿಮ್ಮ ಪಾಲಿಕೆಯ ಕೆಲಸವಲ್ಲ. ಜಲಮಂಡಳಿ ಸಹಾಯವಾಣಿ 1916." },
      { q: "ವಿದ್ಯುತ್ ಕಡಿತ ಅಥವಾ ಕಿಡಿ ಹಾರುವ ಟ್ರಾನ್ಸ್‌ಫಾರ್ಮರ್", a: "ಬೆಸ್ಕಾಂ.", more: "ವಿದ್ಯುತ್ ಸರಬರಾಜು ಪಾಲಿಕೆಯಿಂದ ಪ್ರತ್ಯೇಕವಾದ ರಾಜ್ಯ ಕಂಪನಿಯದು." },
      { q: "ಬೀದಿ ದೀಪ ಕೆಲಸ ಮಾಡುತ್ತಿಲ್ಲ", a: "ನಿಮ್ಮ ನಗರ ಪಾಲಿಕೆ.", more: "ಬೀದಿ ದೀಪಗಳನ್ನು ಪಾಲಿಕೆ ನಿರ್ವಹಿಸುತ್ತದೆ; ವಿದ್ಯುತ್ ಬೆಸ್ಕಾಂನದು." },
      { q: "ಮಳೆ ಬಂದಾಗಲೆಲ್ಲ ರಸ್ತೆ ಮುಳುಗುತ್ತದೆ", a: "ನಿಮ್ಮ ನಗರ ಪಾಲಿಕೆ.", more: "ಪಾಲಿಕೆಗಳನ್ನು ದಾಟುವ ದೊಡ್ಡ ಮಳೆನೀರು ಚರಂಡಿಗಳಲ್ಲಿ ಜಿಬಿಎ ಪಾತ್ರ ಇದೆ." },
      { q: "ಆಸ್ತಿ ತೆರಿಗೆ ಅಥವಾ ಇ-ಖಾತಾ", a: "ನಿಮ್ಮ ನಗರ ಪಾಲಿಕೆ.", more: "ತೆರಿಗೆ ದರವನ್ನು ಜಿಬಿಎ ಜೊತೆ ಸಮಾಲೋಚಿಸಿ ರಾಜ್ಯ ಸರ್ಕಾರ ನಿಗದಿಪಡಿಸುತ್ತದೆ." },
      { q: "ಬಸ್ ಮಾರ್ಗ ಅಥವಾ ಸಮಯ", a: "ಬಿಎಂಟಿಸಿ.", more: "ನಗರ ಬಸ್‌ಗಳನ್ನು ರಾಜ್ಯ ಸಾರಿಗೆ ನಿಗಮ ನಡೆಸುತ್ತದೆ." },
      { q: "ಸಂಚಾರ ಸಿಗ್ನಲ್ ಅಥವಾ ಪಾರ್ಕಿಂಗ್", a: "ಬೆಂಗಳೂರು ಸಂಚಾರ ಪೊಲೀಸ್.", more: "ಪಾದಚಾರಿ ಮಾರ್ಗ ಒತ್ತುವರಿಯನ್ನು ಪಾಲಿಕೆಯ ಜೊತೆ ನಿರ್ವಹಿಸುತ್ತಾರೆ." },
    ],
  },
  survey: {
    title: "ನೀವು ಕಾಣುವುದನ್ನು ನಮಗೆ ಹೇಳಿ",
    lede: "ನಾಗರಿಕ ಸೇವೆಗಳ ಅನುಭವ ಮತ್ತು ಜಿಬಿಎ ಬಗ್ಗೆ ತಿಳುವಳಿಕೆ ಕುರಿತು ನಿವಾಸಿಗಳ ಸಮೀಕ್ಷೆ ನಡೆಸುತ್ತಿದ್ದೇವೆ. ಫಲಿತಾಂಶಗಳನ್ನು ಇಲ್ಲಿ ಪ್ರಕಟಿಸುತ್ತೇವೆ.",
    cta: "ಸಮೀಕ್ಷೆಯಲ್ಲಿ ಭಾಗವಹಿಸಿ",
    note: "ಸುಮಾರು 5 ನಿಮಿಷ. ನೀವು ಸಂದರ್ಶನಕ್ಕೆ ಒಪ್ಪದ ಹೊರತು ಉತ್ತರಗಳು ಅನಾಮಧೇಯ.",
  },
  about: {
    title: "ಈ ಯೋಜನೆಯ ಬಗ್ಗೆ",
    text: "ಬೆಂಗಳೂರಿನ ನಾಗರಿಕ ಆಡಳಿತವನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವ ಈ ಯೋಜನೆ, ವಿಶ್ವ ಆರ್ಥಿಕ ವೇದಿಕೆಯ ಯುವ ಸಮುದಾಯವಾದ ಗ್ಲೋಬಲ್ ಶೇಪರ್ಸ್ ಬೆಂಗಳೂರು II ಹಬ್‌ನದು. ಹೊಸ ಕಾಯ್ದೆ ಬಿಬಿಎಂಪಿಗೆ ಹೋಲಿಸಿದರೆ ನಾಗರಿಕರ ಮೇಲೆ ಹೇಗೆ ಪರಿಣಾಮ ಬೀರುತ್ತದೆ ಎಂಬುದನ್ನು ಭಾಗವಹಿಸುವಿಕೆ, ಸ್ವಾಯತ್ತತೆ ಮತ್ತು ಹೊಣೆಗಾರಿಕೆಯ ದೃಷ್ಟಿಯಿಂದ ಅಧ್ಯಯನ ಮಾಡುತ್ತಿದ್ದೇವೆ.",
    disclaimer: "ಇದು ಸ್ವತಂತ್ರ ವಿವರಣೆ, ಅಧಿಕೃತ ಸರ್ಕಾರಿ ಮೂಲವಲ್ಲ. ಸಂಬಂಧಪಟ್ಟ ಪ್ರಾಧಿಕಾರದೊಂದಿಗೆ ಯಾವಾಗಲೂ ದೃಢಪಡಿಸಿ.",
  },
  footer: {
    sources: "ಮೂಲಗಳು",
    data: "ವಾರ್ಡ್ ದತ್ತಾಂಶ: ಜಿಬಿಎ ವಾರ್ಡ್ ಗಡಿ ದತ್ತಾಂಶ (369 ವಾರ್ಡ್‌ಗಳು).",
    colours: "ಪಾಲಿಕೆಗಳ ಬಣ್ಣಗಳು ನಮ್ಮ ಮೆಟ್ರೊದ ಐದು ಮಾರ್ಗಗಳಿಂದ ಪಡೆದವು.",
    built: "ಗ್ಲೋಬಲ್ ಶೇಪರ್ಸ್ ಬೆಂಗಳೂರು II ನಿರ್ಮಿಸಿದೆ.",
  },
};

export const dictionaries: Record<Locale, Dict> = { en, kn };
export const getDictionary = (l: Locale) => dictionaries[l];

export const SOURCES = [
  { title: "PRS Legislative Research: The Greater Bengaluru Governance Bill, 2024", url: "https://prsindia.org/bills/state-legislative-briefs/the-greater-bengaluru-governance-bill-2024" },
  { title: "Wikipedia: 2026 Greater Bengaluru Authority elections", url: "https://en.wikipedia.org/wiki/2026_Greater_Bengaluru_Authority_elections" },
  { title: "Deccan Herald: e-khata tax notices for property owners (Jul 2025)", url: "https://www.deccanherald.com/amp/story/india%2Fkarnataka%2Fbengaluru%2Fafter-e-khata-success-tax-tensionfor-bengaluru-property-owners-3643097" },
  { title: "The News Minute: vendors, the eviction drive and a fresh survey (Jul 2026)", url: "https://www.thenewsminute.com/karnataka/bengaluru-vendors-welcome-fresh-survey-oppose-eviction-drive-and-main-road-ban" },
  { title: "The News Minute: ward committees without corporators (2022)", url: "https://www.thenewsminute.com/amp/story/karnataka/absence-corporators-bengaluru-mlas-muscle-their-way-ward-committee-meets-163806" },
  { title: "The News Minute: Bellandur and the water tanker economy", url: "https://www.thenewsminute.com/amp/story/karnataka/amid-water-crisis-residents-bengaluru-s-bellandur-struggle-against-tanker-mafia-98082" },
  { title: "Citizen Matters: what is changing with the GBG Act", url: "https://citizenmatters.in/?p=88673" },
];
