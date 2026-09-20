import type { FaqItem } from "./config";
import type { LanderCta } from "@/components/layout/lander-ctas";

export type SeoBlock = {
  heading: string;
  paragraphs: string[];
};

export type LanderCard = {
  title: string;
  body: string;
  href?: string;
  cta?: string;
};

export type LanderSection = {
  eyebrow?: string;
  heading: string;
  paragraphs?: string[];
  cards?: LanderCard[];
  precincts?: string[];
  projectSlugs?: string[];
  tone?: "light" | "dark" | "sand";
};

export type LanderSpec = {
  path: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  lead: string;
  heroCtas: LanderCta[];
  sections: LanderSection[];
  faqs: FaqItem[];
  finalHeading: string;
  finalLead: string;
  finalCtas: LanderCta[];
};

const QBCC_FAQ: FaqItem = {
  question: "Are you QBCC licensed?",
  answer:
    "Yes. Brenscot Builders Pty Ltd holds QBCC licence 15213515 (Builder – Open).",
};

const TENDER_FAQ: FaqItem = {
  question: "Do you take competitive tenders or construct-only work?",
  answer:
    "No. We do not bid construct-only competitive tenders. The work we take on is development we originate with Indevelop, or design-and-construct we run end to end with the landowner.",
};

export const WAREHOUSE_FAQS: FaqItem[] = [
  {
    question: "What kind of warehouse builder is Brenscot?",
    answer:
      "A Brisbane developer-builder: Indevelop acquires land, Brenscot designs, approves and constructs, then the warehouse is sold or leased. We also deliver turnkey D&C if you already hold the land. We are not a tender general contractor.",
  },
  TENDER_FAQ,
  {
    question: "What size warehouses do you build?",
    answer:
      "Client-specific freestanding warehouses and multi-unit facilities, typically up to about 10,000m², with a northside Brisbane and SEQ focus.",
  },
  {
    question: "Where in Brisbane do you work?",
    answer:
      "Northside and SEQ industrial precincts including Brendale, North Lakes, Caboolture, Zillmere, Northgate, Geebung, Eagle Farm, Chermside and Clontarf.",
  },
  QBCC_FAQ,
];

export const DC_FAQS: FaqItem[] = [
  {
    question: "What does design-and-construct mean here?",
    answer:
      "Turnkey delivery on land you already hold: design and approvals through construction and handover, typically up to about 10,000m². One team — not a construct-only tender against other builders.",
  },
  {
    question: "What if I do not have a site yet?",
    answer:
      "That is the developer-builder path. Indevelop can acquire the land; Brenscot designs, approves and constructs; the completed warehouse is sold or leased.",
  },
  TENDER_FAQ,
  QBCC_FAQ,
];

export const PROCESS_FAQS: FaqItem[] = [
  {
    question: "How does a Brenscot project actually run?",
    answer:
      "Site (Indevelop acquire or your land), then design, approvals, tilt-panel and steel construction, handover, and sell or lease. The same chain, two ways in.",
  },
  {
    question: "Who is the process for?",
    answer:
      "Landowners who want turnkey D&C, and investors or commercial agents on the Indevelop land-to-lease path. Not construct-only tender panels.",
  },
  TENDER_FAQ,
  QBCC_FAQ,
];

export const DEVELOPER_FAQS: FaqItem[] = [
  {
    question: "What is an industrial developer-builder?",
    answer:
      "One journey from raw land to a finished warehouse. Indevelop finds and buys the site; Brenscot designs, approves and constructs; the completed facility is sold or leased.",
  },
  {
    question: "Is this the same as a general contractor?",
    answer:
      "No. A tender GC prices someone else’s documents. We originate the development, or we run end-to-end D&C with the landowner. We do not chase cheap competitive tenders.",
  },
  {
    question: "Can I still use you if I already own the land?",
    answer:
      "Yes — that is turnkey design-and-construct, not the Indevelop acquire path. Typical buildings up to about 10,000m².",
  },
  QBCC_FAQ,
];

export const NORTH_FAQS: FaqItem[] = [
  {
    question: "Do you only build in North Brisbane?",
    answer:
      "Work is centred on Brisbane’s northside, and we also deliver across the wider SEQ industrial market. Northside precincts include Brendale, North Lakes, Zillmere, Northgate, Geebung and Caboolture.",
  },
  {
    question: "What kind of warehouses do you build on the northside?",
    answer:
      "Client-specific freestanding warehouses and multi-unit facilities, typically up to about 10,000m², as developer-builder or turnkey D&C.",
  },
  TENDER_FAQ,
  QBCC_FAQ,
];

export const TILT_FAQS: FaqItem[] = [
  {
    question: "Do you build tilt-panel warehouses in Brisbane?",
    answer:
      "Yes. Industrial warehouses here are typically concrete tilt-panel and structural steel. Critical works stay under Brenscot’s control.",
  },
  {
    question: "Is tilt-panel offered as construct-only?",
    answer:
      "No. Tilt-panel and steel sit inside developer-builder or turnkey D&C — not as a cheap construct-only tender package.",
  },
  {
    question: "What size tilt-panel buildings do you deliver?",
    answer:
      "Typically up to about 10,000m², freestanding or multi-unit, Brisbane northside and SEQ.",
  },
  QBCC_FAQ,
];

export const AGENTS_FAQS: FaqItem[] = [
  {
    question: "How do commercial agents work with Brenscot?",
    answer:
      "Introduce land or occupier relationships. We work the Indevelop land-to-lease path or landowner D&C — not as a construct-only tender panel.",
  },
  {
    question: "Do you pay introductions on competitive tenders?",
    answer:
      "No. If the brief is a cheap construct-only tender, we are not the right builder. Bring land or an occupier who wants a client-specific warehouse.",
  },
  {
    question: "Where do you prefer sites?",
    answer:
      "Brisbane northside and SEQ industrial precincts, typically for buildings up to about 10,000m².",
  },
  QBCC_FAQ,
];

export const DEVELOPMENTS_FAQS: FaqItem[] = [
  {
    question: "What developments does Brenscot deliver?",
    answer:
      "Industrial warehouse and multi-unit facilities across Brisbane and SEQ — developer-built with Indevelop, or design-and-construct on a client’s land. Not tendered general contracting.",
  },
  {
    question: "Can I see completed and current projects?",
    answer:
      "Yes. This page introduces the development model. The full gallery of completed and ongoing projects is on our projects page.",
  },
  TENDER_FAQ,
  QBCC_FAQ,
];

export const LANDERS: LanderSpec[] = [
  {
    path: "/industrial-developer-builder-brisbane",
    title: "Industrial Developer-Builder Brisbane | Land to Lease | Brenscot",
    description:
      "Industrial developer-builder in Brisbane. Indevelop acquires the land; Brenscot designs and builds warehouses and multi-unit facilities to sell or lease.",
    eyebrow: "Indevelop + Brenscot",
    h1: "Industrial developer-builder Brisbane — from land to lease",
    lead: "Indevelop acquires the site. Brenscot designs, approves and constructs. The completed warehouse is sold or leased. That is developer-builder — not a cheap general contractor chasing competitive tenders.",
    heroCtas: [
      { href: "/contact#enquiry", label: "Enquire", variant: "primary" },
      { href: "/industrial-builders-brisbane", label: "Industrial builders", variant: "gold" },
    ],
    sections: [
      {
        eyebrow: "What developer-builder means",
        heading: "One journey from raw land to a finished warehouse.",
        paragraphs: [
          "The preferred model is acquire land, secure approvals, build, then sell or lease. Indevelop finds and buys the site; Brenscot takes design, approvals and construction — typically up to about 10,000m², with a northside Brisbane and SEQ focus.",
          "If you already hold land, the other path is turnkey design-and-construct. Neither path is construct-only tender work.",
        ],
        cards: [
          {
            title: "Acquire",
            body: "Indevelop identifies and buys industrial land suited to a warehouse or multi-unit facility.",
          },
          {
            title: "Design and approve",
            body: "Brenscot shapes the building and runs planning, building and civil approvals with the design.",
          },
          {
            title: "Construct, then sell or lease",
            body: "Tilt-panel and steel under our control, then a finished building ready to occupy, sell or lease.",
          },
        ],
      },
      {
        eyebrow: "Not a tender GC",
        heading: "We originate the work — we do not bid it.",
        tone: "dark",
        paragraphs: [
          "Competitive tender construct-only work asks a builder to price someone else’s documents. That is not how Brenscot is set up.",
          "Commercial agents who bring land or occupier relationships work with us on this path. See industrial builders Brisbane if you want the wider positioning.",
        ],
        cards: [
          {
            title: "Your land instead?",
            body: "Turnkey D&C for landowners who already hold a site.",
            href: "/design-and-construct-warehouse-brisbane",
            cta: "Design and construct",
          },
          {
            title: "How it runs",
            body: "Site, design, approvals, construction, handover, sell or lease.",
            href: "/process",
            cta: "Our process",
          },
        ],
      },
    ],
    faqs: DEVELOPER_FAQS,
    finalHeading: "Talk to us about a land-to-lease warehouse.",
    finalLead:
      "Developer-builder for Brisbane northside and SEQ. If the brief is a competitive construct-only tender, we are not the right builder.",
    finalCtas: [
      { href: "/contact#enquiry", label: "Enquire", variant: "primary" },
      { href: "/partners", label: "Investors & agents", variant: "gold" },
      { href: "/developments", label: "Developments", variant: "gold" },
    ],
  },
  {
    path: "/warehouse-builders-north-brisbane",
    title: "Warehouse Builders North Brisbane | Northside Industrial | Brenscot",
    description:
      "Warehouse builders for North Brisbane: Brendale, North Lakes, Zillmere, Northgate, Geebung and Caboolture. Developer-builder and turnkey design and construct.",
    eyebrow: "Northside industrial",
    h1: "Warehouse builders North Brisbane — northside industrial",
    lead: "Brenscot is a northside-preferring industrial warehouse developer-builder. We develop and build to sell or lease, and we deliver turnkey D&C for landowners — not a cheap tender GC.",
    heroCtas: [
      { href: "/contact#enquiry", label: "Enquire", variant: "primary" },
      { href: "/warehouse-builders-brisbane", label: "Warehouse builders Brisbane", variant: "gold" },
    ],
    sections: [
      {
        eyebrow: "North Brisbane",
        heading: "Precincts we actually work in.",
        paragraphs: [
          "Work is centred on Brisbane’s northside and the wider SEQ industrial market. Typical buildings up to about 10,000m² — freestanding or multi-unit.",
        ],
        precincts: ["Brendale", "North Lakes", "Caboolture", "Zillmere", "Northgate", "Geebung", "Eagle Farm"],
      },
      {
        eyebrow: "Two paths",
        heading: "Indevelop on the northside, or your land.",
        cards: [
          {
            title: "Developer-builder",
            body: "Indevelop acquires a northside or SEQ site; Brenscot designs, approves and constructs; the warehouse is sold or leased.",
            href: "/industrial-developer-builder-brisbane",
            cta: "Developer-builder",
          },
          {
            title: "Design and construct",
            body: "You already hold northside or SEQ industrial land. We deliver turnkey D&C through to handover.",
            href: "/design-and-construct-warehouse-brisbane",
            cta: "Design and construct",
          },
        ],
      },
      {
        eyebrow: "Proof",
        heading: "Northside warehouses we have delivered.",
        projectSlugs: [
          "24-robertson-st-brendale",
          "15-king-court-north-lakes",
          "535-zillmere-zillmere",
          "30-36-bell-are-ave-northgate",
        ],
      },
    ],
    faqs: NORTH_FAQS,
    finalHeading: "Talk to us about a northside warehouse.",
    finalLead: "North Brisbane and SEQ. Developer-builder or turnkey D&C — not competitive construct-only work.",
    finalCtas: [
      { href: "/contact#enquiry", label: "Enquire", variant: "primary" },
      { href: "/industrial-builders-brisbane", label: "Industrial builders", variant: "gold" },
      { href: "/projects", label: "All projects", variant: "gold" },
    ],
  },
  {
    path: "/tilt-panel-warehouse-brisbane",
    title: "Tilt Panel Warehouse Brisbane | Steel & Precast | Brenscot",
    description:
      "Tilt-panel warehouses in Brisbane. Concrete tilt-panel and structural steel construction by Brenscot, as developer-builder or turnkey design and construct.",
    eyebrow: "Tilt-panel and steel",
    h1: "Tilt-panel warehouse Brisbane — construction we control",
    lead: "Industrial warehouses here are typically concrete tilt-panel and structural steel. Critical works stay with Brenscot. That construction sits inside developer-builder or turnkey D&C — not a cheap construct-only tender.",
    heroCtas: [
      { href: "/contact#enquiry", label: "Enquire", variant: "primary" },
      { href: "/process", label: "Our process", variant: "gold" },
    ],
    sections: [
      {
        eyebrow: "How we build",
        heading: "Tilt-panel and steel, kept in the same chain as design.",
        paragraphs: [
          "Planning, building and civil approvals run with design so the facility that is approved is the one we intend to construct — typically tilt-panel walls, structural steel, metal roof, and the hardstand and access the occupier actually needs.",
          "Selected trades are people we already trust, not a race to the lowest bid. See industrial builders Brisbane for the wider positioning.",
        ],
        cards: [
          {
            title: "Developer-builder",
            body: "Indevelop acquires; we design and construct in tilt-panel and steel; the building is sold or leased.",
            href: "/industrial-developer-builder-brisbane",
            cta: "Developer-builder",
          },
          {
            title: "Your land D&C",
            body: "Turnkey tilt-panel warehouse on a site you already hold, through to handover.",
            href: "/design-and-construct-warehouse-brisbane",
            cta: "Design and construct",
          },
        ],
      },
      {
        eyebrow: "Proof",
        heading: "Tilt-panel warehouses in Brisbane and SEQ.",
        projectSlugs: [
          "24-robertson-st-brendale",
          "59-alta-road-caboolture",
          "15-king-court-north-lakes",
          "47-noble-ave-northgate",
        ],
      },
    ],
    faqs: TILT_FAQS,
    finalHeading: "Talk to us about a tilt-panel warehouse.",
    finalLead:
      "Construction we control, inside developer-builder or D&C. Not a construct-only tender package.",
    finalCtas: [
      { href: "/contact#enquiry", label: "Enquire", variant: "primary" },
      { href: "/industrial-builders-brisbane", label: "Industrial builders", variant: "gold" },
      { href: "/projects", label: "Projects", variant: "gold" },
    ],
  },
  {
    path: "/for-commercial-agents",
    title: "For Commercial Agents | Industrial Warehouse Introducers | Brenscot",
    description:
      "Commercial agents: introduce land or occupiers to Brenscot for Brisbane industrial warehouses. Developer-builder and turnkey design and construct.",
    eyebrow: "Investors and agents",
    h1: "For commercial agents — land and occupier introductions",
    lead: "Bring land or an occupier who wants a client-specific warehouse. We work the Indevelop land-to-lease path or landowner D&C. We are not a cheap general contractor on a tender list.",
    heroCtas: [
      { href: "/contact#enquiry", label: "Talk to us", variant: "primary" },
      { href: "/partners", label: "Investors & partners", variant: "gold" },
    ],
    sections: [
      {
        eyebrow: "How agents work with us",
        heading: "Introduce the site or the occupier — not a tender.",
        paragraphs: [
          "Commercial agents who bring land or occupier relationships work with Brenscot on developer-builder and design-and-construct. Typical buildings up to about 10,000m², northside Brisbane and SEQ.",
          "If the instruction is “get three construct-only prices”, we are not the right call.",
        ],
        cards: [
          {
            title: "Land to lease",
            body: "Indevelop can acquire. Brenscot designs and constructs. The completed warehouse is sold or leased.",
            href: "/industrial-developer-builder-brisbane",
            cta: "Developer-builder",
          },
          {
            title: "Client already has land",
            body: "Turnkey D&C for the landowner — design, approvals, construction, handover.",
            href: "/design-and-construct-warehouse-brisbane",
            cta: "Design and construct",
          },
          {
            title: "Industrial builders",
            body: "The wider Brisbane industrial-builder positioning, including precincts and proof.",
            href: "/industrial-builders-brisbane",
            cta: "Industrial builders",
          },
        ],
      },
    ],
    faqs: AGENTS_FAQS,
    finalHeading: "Bring a site or an occupier.",
    finalLead: "Northside and SEQ industrial. Developer-builder or D&C — not a tender panel.",
    finalCtas: [
      { href: "/contact#enquiry", label: "Enquire", variant: "primary" },
      { href: "/process", label: "Our process", variant: "gold" },
      { href: "/developments", label: "Developments", variant: "gold" },
    ],
  },
  {
    path: "/developments",
    title: "Industrial Warehouse Developments Brisbane | Brenscot",
    description:
      "Industrial warehouse developments across Brisbane and SEQ by Brenscot: developer-built and design and construct facilities, available to buy or lease.",
    eyebrow: "Developments",
    h1: "Industrial warehouse developments Brisbane",
    lead: "Developer-built warehouses and multi-unit facilities — Indevelop land to lease, or turnkey D&C on a client’s land. Not tendered general contracting.",
    heroCtas: [
      { href: "/projects", label: "View projects", variant: "primary" },
      { href: "/industrial-builders-brisbane", label: "Industrial builders", variant: "gold" },
    ],
    sections: [
      {
        eyebrow: "How developments are originated",
        heading: "We develop and construct — we do not tender the build.",
        paragraphs: [
          "On work we originate, Indevelop acquires the site and Brenscot delivers design, approvals and construction. On a landowner D&C, the same delivery chain runs on land you already hold.",
          "The project gallery lives on our projects page. This page is the developments pathway for landowners, investors and agents.",
        ],
        cards: [
          {
            title: "Developer-builder",
            body: "Land to lease or sell, under one roof.",
            href: "/industrial-developer-builder-brisbane",
            cta: "Developer-builder",
          },
          {
            title: "Design and construct",
            body: "Your land, our end-to-end delivery.",
            href: "/design-and-construct-warehouse-brisbane",
            cta: "Design and construct",
          },
          {
            title: "For agents",
            body: "Introduce land or occupiers — not a construct-only panel.",
            href: "/for-commercial-agents",
            cta: "For agents",
          },
        ],
      },
      {
        eyebrow: "Selected developments",
        heading: "Warehouses and multi-unit facilities we have delivered.",
        projectSlugs: [
          "24-robertson-st-brendale",
          "15-king-court-north-lakes",
          "59-alta-road-caboolture",
          "535-zillmere-zillmere",
        ],
      },
    ],
    faqs: DEVELOPMENTS_FAQS,
    finalHeading: "See the full project gallery, or start a conversation.",
    finalLead: "Completed and current industrial warehouse developments across Brisbane and SEQ.",
    finalCtas: [
      { href: "/projects", label: "All projects", variant: "primary" },
      { href: "/contact#enquiry", label: "Enquire", variant: "gold" },
      { href: "/warehouse-builders-brisbane", label: "Warehouse builders", variant: "gold" },
    ],
  },
];

export function getLander(path: string): LanderSpec {
  const lander = LANDERS.find((item) => item.path === path);
  if (!lander) {
    throw new Error(`Unknown lander: ${path}`);
  }
  return lander;
}

export function landerBlocks(lander: LanderSpec): SeoBlock[] {
  return [
    ...lander.sections.map((section) => ({
      heading: section.heading,
      paragraphs: [
        ...(section.paragraphs ?? []),
        ...(section.cards ?? []).map((card) => `${card.title}: ${card.body}`),
        section.precincts ? `Precincts: ${section.precincts.join(", ")}.` : "",
      ].filter(Boolean),
    })),
    ...lander.faqs.map((faq) => ({
      heading: faq.question,
      paragraphs: [faq.answer],
    })),
  ];
}

export const PATHWAY_CARDS = [
  {
    href: "/industrial-builders-brisbane",
    title: "Industrial builders Brisbane",
    description:
      "Developer-builder and bespoke turnkey D&C for client-specific warehouses and multi-unit facilities. Northside and SEQ — not a tender general contractor.",
  },
  {
    href: "/industrial-developer-builder-brisbane",
    title: "Industrial developer-builder",
    description:
      "Indevelop acquires the land; Brenscot designs and constructs; the completed warehouse is sold or leased.",
  },
  {
    href: "/warehouse-builders-brisbane",
    title: "Warehouse builders Brisbane",
    description:
      "Developer-builder for industrial warehouses in Brisbane and the northside — acquire, approve, build, then sell or lease. D&C for landowners, up to about 10,000m².",
  },
  {
    href: "/warehouse-builders-north-brisbane",
    title: "Warehouse builders North Brisbane",
    description:
      "Northside industrial precincts: Brendale, North Lakes, Zillmere, Northgate, Geebung, Caboolture and Eagle Farm.",
  },
  {
    href: "/design-and-construct-warehouse-brisbane",
    title: "Design and construct",
    description:
      "Turnkey design, approvals and construction for landowners who already hold a site. One team from concept through to a finished warehouse.",
  },
  {
    href: "/tilt-panel-warehouse-brisbane",
    title: "Tilt-panel warehouse Brisbane",
    description:
      "Concrete tilt-panel and structural steel under Brenscot control — inside developer-builder or turnkey D&C, not a construct-only tender.",
  },
  {
    href: "/process",
    title: "Our process",
    description:
      "How a Brenscot project runs: site (Indevelop or your land), design, approvals, tilt-panel and steel, handover, then sell or lease.",
  },
  {
    href: "/for-commercial-agents",
    title: "For commercial agents",
    description:
      "Introduce land or occupiers. We work developer-builder and D&C — not as a cheap construct-only tender panel.",
  },
  {
    href: "/developments",
    title: "Developments",
    description:
      "Industrial warehouse developments across Brisbane and SEQ, then through to the full project gallery.",
  },
];
