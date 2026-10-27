// ─────────────────────────────────────────────────────────────────────────
// ROB'S SITE: all content lives in this one file.
// Edit anything here and the page updates on save. No markup knowledge needed.
// Tone: first person, plain and friendly. This is a personal site, not a pitch.
// House style: no em dashes in visible copy (Rob's rule). Use colons,
// commas or the · separator; en dashes only in date ranges.
// Public facts only: no client names, tickers or anything not on the record.
// ─────────────────────────────────────────────────────────────────────────

export const identity = {
  name: 'Robert Zukerman',
  shortName: 'Rob Zukerman',
  firstName: 'Rob',
  location: 'New York, NY',
  // Rob's own words. Shown under the hello and on the share card.
  tagline:
    'Moved from Vancouver to New York City. Fitness, sports and tech enthusiast. Love golfing and travel. Building with AI.',
};

// About: a few sentences in Rob's voice.
export const about = [
  `I moved from Vancouver to New York City in 2026. From 2020 to 2025 I built a hydroponics company with my co-founder, from the very first sale all the way to selling it.`,
  `These days I work on investor relations for small public companies at Fairfax Partners, and I build a lot of my own tools with AI along the way.`,
];

// NOW: what I'm working on. Update freely; date it.
export const now = {
  asOf: 'October 2026',
  items: [
    {
      title: 'Fair',
      text: 'Building an investor relations platform at Fairfax Partners Inc., the infrastructure that small-cap public companies run on.',
      href: 'https://fairfax.partners/ir',
      linkLabel: 'fairfax.partners/ir',
    },
    {
      title: 'Building with AI',
      text: 'Most of my work now runs on agents and tools I built myself, and I keep making small apps for my own life too. A few are below.',
      href: '#made',
      linkLabel: 'Things I’ve made',
    },
    {
      title: 'Training',
      text: 'Lifting and running, and getting out to golf whenever I can.',
    },
    {
      title: 'New York City',
      text: 'Settling in after the move from Vancouver, and looking to connect with like-minded people, whether that’s working together, training, golfing or just hanging out.',
      href: '#contact',
      linkLabel: 'Say hi',
    },
  ],
};

// STORY: what I've done, newest first. `bullets` only appear on the
// printed résumé (Résumé link in the footer).
export const story = [
  {
    dates: '2025 – Now',
    place: 'Fairfax Partners',
    role: 'Investor relations',
    text: 'Investor relations and marketing for small and micro-cap public companies in five countries. Now building Fair, the firm’s IR platform.',
    bullets: [
      'Building Fair, the firm’s investor relations platform: a built-for-you investor website, deck and fact sheet, then hosting, updates, inbox and phone handling on a monthly plan.',
      'Run investor-awareness programs for publicly traded small- and micro-cap companies across five countries, working with CEOs and management teams on positioning and market communications.',
      'Designed and built an in-house analytics platform integrating ad-platform, web-analytics and market data (share price, volume, news flow), used daily for reporting and decisions.',
      'Run daily operations on self-built AI agent workflows: inbox triage, client-file management, reporting and compliance-checked drafting.',
      'Publish The Sunrise Investor, an independent financial newsletter with a clearly disclosed sponsored-content program.',
    ],
  },
  {
    dates: '2020 – 2025',
    place: 'Max Yield Bins',
    role: 'Co-founder & COO',
    text: 'Co-founded a hydroponics company and grew it without outside money: $5M+ in sales, a YouTube channel with over a million views and a launch in Australia. We sold it to our wholesale partner in 2025.',
    href: 'https://maxyieldbins.com',
    bullets: [
      'Co-founded and bootstrapped a direct-to-consumer hydroponics brand; scaled it to $5M+ in cumulative revenue and exited via acquisition by the company’s wholesale partner.',
      'Ran the business end to end: product development, manufacturing and supply chain, pricing and margin strategy, customer acquisition, customer service and finance.',
      'Built the growth engine: 1M+ YouTube views, 15,000+ subscribers and paid-social acquisition managed to unit-level economics.',
      'Expanded internationally (Australia launch, 2024) and negotiated the wholesale partnerships that became the path to acquisition.',
    ],
  },
  {
    dates: '2017 – 2020',
    place: 'Haven Apparel',
    role: 'Finance & operations',
    text: 'Ran payroll, payables and reporting at a Vancouver apparel brand while it grew from about $8M to $25M+ in revenue and from 20 to 50 people.',
    bullets: [
      'Core operations support to the leadership team through rapid growth: revenue scaled from ~$8M to $25M+ and headcount from 20 to 50.',
      'Ran payroll, accounts payable and financial reporting across the growth period.',
      'Led brand events, retail installations and cross-functional special projects.',
    ],
  },
  {
    dates: '2013 – 2016',
    place: 'University of Calgary',
    role: 'Economics & communications',
    text: 'Studied economics and communications. Picked up a digital marketing certificate at BrainStation later, in 2023.',
    bullets: [],
  },
];

// MADE: side businesses, apps and tools.
export const made = [
  {
    name: 'The Sunrise Investor',
    kind: 'Newsletter',
    text: 'Independent financial media covering emerging public companies in mining, biotech and fintech.',
    href: 'https://thesunriseinvestor.com',
  },
  {
    name: 'Gonzo Cream',
    kind: 'Side business',
    text: 'Numbing cream for tattoos, microblading and laser treatments, sold online.',
    href: 'https://gonzocream.com',
  },
  {
    name: 'Health dashboard',
    kind: 'Personal app',
    text: 'My bloodwork, training and nutrition in one place, with an AI that reads across all of it.',
  },
  {
    name: 'Treasury',
    kind: 'Personal app',
    text: 'My own finance app: what I own and owe, a monthly ledger and an assistant that answers from the books.',
  },
  {
    name: 'The Fairfax toolkit',
    kind: 'At work',
    text: 'An app that puts ad, web and market data in one place, plus the agents that handle the inbox, client files and weekly reports.',
  },
  {
    name: 'This site',
    kind: 'Built with AI',
    text: 'Every word on this page lives in one file that I edit and ship whenever something changes.',
  },
];

// SKILLS: printed résumé only.
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
    items: ['Agentic workflows', 'LLM-assisted research', 'Full-stack analytics dashboards'],
  },
];

// ── LINKS: how to reach Rob (no email on the site, by Rob's choice).
export const links = [
  { label: 'X', handle: '@RobZukerman', href: 'https://x.com/RobZukerman' },
  { label: 'Instagram', handle: '@RobZukerman', href: 'https://www.instagram.com/robzukerman/' },
  { label: 'LinkedIn', handle: 'Rob Zukerman', href: 'https://www.linkedin.com/in/rob-zukerman-bb8336150' },
  { label: 'GitHub', handle: 'rz-blip', href: 'https://github.com/rz-blip' },
];

export const meta = {
  version: 'v5',
  siteTitle: 'Rob Zukerman',
  description:
    'Rob Zukerman: moved from Vancouver to New York City, sold my first company in 2025, building with AI. What I’m working on, what I’ve done and things I’ve made.',
  ogImage: '/og.png',
};
