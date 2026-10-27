// ─────────────────────────────────────────────────────────────────────────
// THE LIVING RÉSUMÉ: all site content lives in this one file.
// Edit anything here and the page updates on save. No markup knowledge needed.
// Source of truth: Robert-Zukerman-Resume.pdf (2026 edition).
// House style: no em dashes in visible copy (Rob's rule). Use colons,
// commas or the · separator; en dashes only in date ranges.
// ─────────────────────────────────────────────────────────────────────────

export const identity = {
  name: 'Robert Zukerman',
  shortName: 'Rob Zukerman',
  location: 'New York, NY',
  email: 'rz@fairfax.plus',
  roleLine:
    'Founder-operator with a realized exit, now in small-cap capital markets: building Fair and running a firm on AI agents.',
};

export const summary = `Co-founded and bootstrapped a direct-to-consumer hydroponics brand to $5M+ in cumulative revenue, then sold the business in 2025. Moved into investor relations: investor-marketing programs for publicly traded small- and micro-cap companies, working directly with their executive teams. Now building Fair, Fairfax Partners' investor relations platform, with a founder's command of operations and unit economics, day-to-day exposure to disclosure compliance, and the AI fluency to build the tools the work runs on.`;

// Quick facts: the ledger block beside the summary.
export const facts = [
  { label: 'Location', value: 'New York, NY' },
  { label: 'Currently', value: 'Building Fair at Fairfax Partners' },
  { label: 'Track record', value: '$5M+ revenue built · exited 2025' },
  { label: 'Focus', value: 'Small caps · IR · AI agents' },
];

// Hero ticker strip, in order.
export const ticker = [
  'Small-cap capital markets',
  'Investor relations',
  'Building Fair',
  '$5M+ revenue built',
  'Exited 2025',
  'AI-native operator',
  'New York City',
];

// ── NOW: what's on the desk this month. Update freely; date it.
export const now = {
  asOf: 'October 2026',
  items: [
    'Building Fair: investor websites, decks and fact sheets for small-cap public companies, run as a monthly investor relations service.',
    'Running investor-awareness programs for small- and micro-cap public companies across five countries.',
    'Publishing The Sunrise Investor, a global-markets newsletter with a clearly disclosed sponsored-content program.',
    'Running the back office on self-built AI agents: inbox triage, client files, reporting decks and compliance-checked drafting.',
    'Writing on X about small caps, investor relations and building with AI, as @robzukerman.',
  ],
};

// ── EXPERIENCE
export const experience = [
  {
    company: 'Fairfax Partners',
    alias: 'Fairfax+',
    location: 'Vancouver, BC · Hybrid',
    role: 'Building Fair (investor relations platform)',
    dates: '2025 – Present',
    tag: null,
    bullets: [
      'Building Fair, the firm’s investor relations platform: a built-for-you investor website, deck and fact sheet, then hosting, updates, inbox and phone handling on a monthly plan.',
      'Run investor-awareness and IR-marketing programs for publicly traded small- and micro-cap companies across five countries, advising CEOs and management teams on positioning and market communications.',
      'Own the full engagement lifecycle: strategy, messaging, paid-channel budget allocation, and executive-level performance reporting.',
      'Designed and built an in-house analytics platform integrating ad-platform, web-analytics, and market data (share price, volume, news flow), used daily for client reporting and campaign decisions.',
      'Run daily operations on self-built AI agent workflows (inbox triage, client-file management, reporting decks, compliance-checked drafting), the leverage that lets a small firm serve a multi-client roster.',
      'Operate under securities-advertising compliance discipline: sponsorship disclosure, jurisdictional disclaimers, and strict separation between marketing performance and share-price claims.',
      'Publish The Sunrise Investor, a global-markets investor newsletter with a compliant sponsored-content program.',
    ],
  },
  {
    company: 'Max Yield Bins Inc.',
    alias: null,
    location: 'Vancouver, BC',
    role: 'Co-Founder & Chief Operating Officer',
    dates: '2020 – 2025',
    tag: 'Company acquired, 2025',
    bullets: [
      'Co-founded and bootstrapped a direct-to-consumer hydroponics brand; scaled it to $5M+ in cumulative revenue and exited via acquisition by the company’s wholesale partner.',
      'Ran the business end to end: product development, manufacturing and supply chain, pricing and margin strategy, customer acquisition, customer service, and finance.',
      'Built the growth engine that drove the brand: 1M+ YouTube views, 15,000+ subscribers, and paid-social acquisition managed to unit-level economics.',
      'Expanded internationally (Australia launch, 2024) and negotiated the wholesale partnerships that became the path to acquisition.',
      'Owned budgeting, cash-flow management, and financial reporting from first sale through exit negotiations.',
    ],
  },
  {
    company: 'Haven Apparel Inc.',
    alias: null,
    location: 'Vancouver, BC',
    role: 'Executive Assistant, Finance & Operations',
    dates: '2017 – 2020',
    tag: null,
    bullets: [
      'Core operations support to the leadership team through a period of rapid growth: revenue scaled from ~$8M to $25M+ and headcount from 20 to 50 during tenure.',
      'Ran payroll, accounts payable, and financial reporting across the growth period.',
      'Led brand events, retail installations, and cross-functional special projects.',
    ],
  },
];

// ── VENTURES: things owned / built / published under the 33rd umbrella.
export const ventures = [
  {
    name: 'The Sunrise Investor',
    domain: 'thesunriseinvestor.com',
    href: 'https://thesunriseinvestor.com',
    blurb:
      'Global-markets investor newsletter with a compliant sponsored-content program.',
    status: 'Publishing',
  },
  {
    name: 'Max Yield Bins',
    domain: 'maxyieldbins.com',
    href: 'https://maxyieldbins.com',
    blurb:
      'Direct-to-consumer hydroponics brand: co-founded, scaled to $5M+ cumulative revenue, acquired by its wholesale partner.',
    status: 'Exited 2025',
  },
  {
    name: 'Gonzo Cream',
    domain: 'gonzocream.com',
    href: 'https://gonzocream.com',
    blurb: 'Independent consumer products brand.',
    status: 'Side venture',
  },
];

// ── BUILT: software and systems, proof of the AI-native claim.
export const built = [
  {
    name: 'Market & campaign analytics platform',
    context: 'Fairfax+ · in production',
    blurb:
      'In-house platform integrating ad-platform, web-analytics, and market data (share price, volume, news flow), used daily for client reporting and campaign decisions.',
  },
  {
    name: 'Agentic back office',
    context: 'Fairfax+ · in production',
    blurb:
      'Self-built AI agent workflows for inbox triage, client-file management, reporting decks, and compliance-checked drafting: the leverage that lets a small firm serve a multi-client roster.',
  },
  {
    name: 'This site',
    context: '33rdventures.com',
    blurb:
      'A living résumé. Every section on this page renders from a single data file, edited continuously and shipped on save.',
  },
];

// ── SKILLS: grouped for scanning.
export const skills = [
  {
    group: 'Finance & deal work',
    items: [
      'Financial reporting & budgeting',
      'Unit economics & pricing strategy',
      'Deal analysis: comparables, precedent transactions, LBO fundamentals',
    ],
  },
  {
    group: 'Capital markets',
    items: [
      'Capital-markets communications',
      'Securities-marketing compliance',
      'Executive-level performance reporting',
    ],
  },
  {
    group: 'Growth',
    items: [
      'Paid customer acquisition (Meta, Google)',
      'Funnel & acquisition economics',
      'Brand & content programs',
    ],
  },
  {
    group: 'AI-native tooling',
    items: [
      'Agentic workflows',
      'LLM-assisted research',
      'Full-stack analytics dashboards',
    ],
  },
];

export const education = [
  {
    school: 'University of Calgary',
    detail: 'Economics & Communications',
    dates: '2013 – 2016',
  },
  {
    school: 'BrainStation',
    detail: 'Digital Marketing Certificate',
    dates: '2023',
  },
];

// ── LINKS: LinkedIn per the July 14 résumé; X is the consolidated account.
export const links = [
  { label: 'X', href: 'https://x.com/robzukerman' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rob-zukerman-bb8336150' },
  { label: 'GitHub', href: 'https://github.com/rz-blip' },
];

export const meta = {
  version: 'v3',
  siteTitle: 'Robert Zukerman · 33rd Ventures',
  description:
    'Founder-operator with a realized exit, now in small-cap capital markets: building Fair at Fairfax Partners. The living résumé of Robert Zukerman.',
  ogImage: '/og.png',
};
