// Generated from the approved article masters. Edit with care: the HTML in insights-content.ts is what is published.

export type InsightMeta = {
  slug: string;
  /** Title tag */
  title: string;
  /** Meta description, 155 characters or fewer */
  description: string;
  /** On-page H1 */
  h1: string;
  category: string;
  /** ISO dates used in Article structured data */
  datePublished: string;
  dateModified: string;
  /** Shown on the page as "Last reviewed" */
  reviewed: string;
};

// To publish another article: add its entry here, add its HTML to insights-content.ts,
// and add its two rewrite rules to .replit-artifact/artifact.toml.
export const INSIGHTS: InsightMeta[] = [
  {
    "slug": "developer-builder-vs-construct-only-builder",
    "title": "Industrial Warehouse Builders Brisbane: Developer-Builder Explained",
    "description": "What a developer-builder does that a construct-only builder doesn’t, who carries the risk, and which model suits your Brisbane warehouse project.",
    "h1": "Industrial warehouse builders in Brisbane: what a developer-builder actually does",
    "category": "Delivery models",
    "datePublished": "2026-09-20",
    "dateModified": "2026-09-20",
    "reviewed": "September 2026"
  },
  {
    "slug": "design-and-construct-vs-tender",
    "title": "Design and Construct vs Tender for Warehouses | Brenscot",
    "description": "Design and construct or traditional tender? How each works, who carries the design risk, and which suits a warehouse project in Brisbane and SEQ.",
    "h1": "Design and construct vs tender: which suits your warehouse?",
    "category": "Delivery models",
    "datePublished": "2026-09-20",
    "dateModified": "2026-09-20",
    "reviewed": "September 2026"
  },
  {
    "slug": "turnkey-industrial-development-brisbane",
    "title": "Turnkey Industrial Warehouse Development Brisbane | Brenscot",
    "description": "How turnkey industrial development works in South East Queensland: site, design, approvals, construction and handover with one team.",
    "h1": "Turnkey industrial development for owner-occupiers and investors",
    "category": "Delivery models",
    "datePublished": "2026-09-20",
    "dateModified": "2026-09-20",
    "reviewed": "September 2026"
  },
  {
    "slug": "warehouse-construction-cost-drivers-brisbane",
    "title": "What Drives Warehouse Construction Cost in Brisbane? | Brenscot",
    "description": "The design and site factors that move the cost of a warehouse in Brisbane and SEQ, what a rate per m2 leaves out, and how to compare prices.",
    "h1": "What drives the cost of an industrial warehouse in South East Queensland?",
    "category": "Cost and programme",
    "datePublished": "2026-09-20",
    "dateModified": "2026-09-20",
    "reviewed": "September 2026"
  },
  {
    "slug": "warehouse-awnings-fire-compartment-volume",
    "title": "Do Warehouse Awnings Count in Fire Compartment Volume?",
    "description": "How awnings and loading canopies can count towards NCC fire compartment floor area and volume, and how to plan them to avoid a redesign.",
    "h1": "Why a warehouse awning can count towards fire compartment volume",
    "category": "Fire and the NCC",
    "datePublished": "2026-09-20",
    "dateModified": "2026-09-20",
    "reviewed": "September 2026"
  },
  {
    "slug": "warehouse-retaining-walls-types",
    "title": "Retaining Walls for Warehouses: Types Compared | Brenscot",
    "description": "Retaining wall types for industrial sites in SEQ compared: sleeper, block, reinforced concrete and boulder, plus when a wall needs approval.",
    "h1": "Retaining walls for warehouses: types, advantages and disadvantages",
    "category": "Site and civil",
    "datePublished": "2026-09-20",
    "dateModified": "2026-09-20",
    "reviewed": "September 2026"
  },
  {
    "slug": "warehouse-fire-services-hydrants-sprinklers",
    "title": "Warehouse Fire Services: Hydrants, Hose Reels and Sprinklers",
    "description": "When a Queensland warehouse needs fire hydrants, hose reels, sprinklers, tanks and pumps under the NCC, what triggers each, and why to decide early.",
    "h1": "Fire services for warehouses: what triggers hydrants, hose reels and sprinklers",
    "category": "Fire and the NCC",
    "datePublished": "2026-09-20",
    "dateModified": "2026-09-20",
    "reviewed": "September 2026"
  },
  {
    "slug": "warehouse-insulation-condensation-section-j",
    "title": "Warehouse Insulation, Condensation and NCC Section J in SEQ",
    "description": "How NCC Section J applies to warehouses and their offices in South East Queensland, why metal roofs drip, and how to insulate properly.",
    "h1": "Insulation, condensation and energy efficiency for warehouses in South East Queensland",
    "category": "Building performance",
    "datePublished": "2026-09-20",
    "dateModified": "2026-09-20",
    "reviewed": "September 2026"
  },
  {
    "slug": "asbestos-hazardous-materials-industrial-upgrades",
    "title": "Asbestos in Industrial Buildings: Upgrades and Make-Goods | Brenscot",
    "description": "What Queensland law requires before you renovate or strip out an older industrial building: asbestos registers, surveys, removal and clearance.",
    "h1": "Asbestos and hazardous materials in industrial upgrades and make-goods",
    "category": "Upgrades",
    "datePublished": "2026-09-20",
    "dateModified": "2026-09-20",
    "reviewed": "September 2026"
  }
];

export function getInsight(slug: string): InsightMeta | undefined {
  return INSIGHTS.find((item) => item.slug === slug);
}
