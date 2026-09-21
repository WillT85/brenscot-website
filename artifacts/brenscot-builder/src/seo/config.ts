import { LANDERS, landerBlocks, DC_FAQS, PROCESS_FAQS, WAREHOUSE_FAQS } from "./lander-copy";
import { INSIGHTS, type InsightMeta } from "../data/insights-index";

export const SITE_ORIGIN = "https://brenscot.com.au";
export const SITE_NAME = "Brenscot Builders";
export const DEFAULT_OG_IMAGE = "/opengraph.jpg";
export const SEO_HEAD_START = "<!--seo-head-start-->";
export const SEO_HEAD_END = "<!--seo-head-end-->";

export type FaqItem = {
  question: string;
  answer: string;
};

export type SeoBodyBlock = {
  heading: string;
  paragraphs: string[];
};

export type PageSeo = {
  path: string;
  title: string;
  description: string;
  robots?: string;
  faqs?: FaqItem[];
  h1?: string;
  lead?: string;
  blocks?: SeoBodyBlock[];
  /** Trusted, pre-rendered HTML appended to the prerendered body (insights articles). */
  bodyHtml?: string;
  /** Present on insights articles; adds Article structured data. */
  article?: { datePublished: string; dateModified: string };
};

export const INDUSTRIAL_BUILDERS_FAQS: FaqItem[] = [
  {
    question: "What does industrial builder mean at Brenscot?",
    answer:
      "Brenscot is a developer-builder and turnkey design-and-construct partner for client-specific warehouses and multi-unit industrial facilities in Brisbane and SEQ.",
  },
  {
    question: "Do you take competitive tenders or construct-only work?",
    answer:
      "No. We do not bid construct-only competitive tenders. The work we take on is development we originate with Indevelop, or design-and-construct we run end to end with the landowner.",
  },
  {
    question: "What if I already own the land?",
    answer:
      "If you hold industrial land in Brisbane or SEQ, we deliver turnkey design-and-construct — design and approvals through construction and handover.",
  },
  {
    question: "What if I do not have a site yet?",
    answer:
      "Indevelop, our in-house development company, can acquire the land. Brenscot then designs, approves and constructs. The completed warehouse is sold or leased.",
  },
  {
    question: "What size and type of buildings do you deliver?",
    answer:
      "Client-specific freestanding warehouses and multi-unit facilities, with a focus on Brisbane’s northside and the wider SEQ industrial market.",
  },
  {
    question: "Which Brisbane precincts do you work in?",
    answer:
      "Work is centred on Brisbane’s northside and SEQ, including Brendale, North Lakes, Caboolture, Zillmere, Northgate, Geebung and Eagle Farm.",
  },
  {
    question: "Are you QBCC licensed?",
    answer:
      "Yes. Brenscot Builders Pty Ltd holds QBCC licence 15213515 (Builder – Open).",
  },
];

export const P0_LANDER_PATHS = [
  "/industrial-builders-brisbane",
  "/warehouse-builders-brisbane",
  "/design-and-construct-warehouse-brisbane",
  "/process",
  "/industrial-developer-builder-brisbane",
  "/warehouse-builders-north-brisbane",
  "/tilt-panel-warehouse-brisbane",
  "/for-commercial-agents",
  "/developments",
] as const;

export const STATIC_PAGES: PageSeo[] = [
  {
    path: "/",
    title: "Industrial Warehouse Developer-Builder Brisbane | Brenscot",
    description:
      "Brenscot designs, develops and builds industrial warehouses across Brisbane and SEQ. Buy or lease a new building, or design and construct on your land.",
    h1: "Brisbane industrial warehouse developer-builder",
    lead: "Brenscot designs, develops and builds industrial warehouses across Brisbane and SEQ — Indevelop land to lease, or turnkey D&C for landowners. Northside strength.",
    blocks: [
      {
        heading: "Developer-builder, or design and construct",
        paragraphs: [
          "Indevelop acquires land and Brenscot constructs warehouses to sell or lease, or we deliver turnkey design-and-construct for landowners who already hold a site.",
        ],
      },
    ],
  },
  {
    path: "/industrial-builders-brisbane",
    title: "Industrial Builders Brisbane | Bespoke D&C | Brenscot",
    description:
      "Industrial builders in Brisbane for warehouses and multi-unit facilities. Developer-builder and turnkey design and construct across the northside and SEQ.",
    faqs: INDUSTRIAL_BUILDERS_FAQS,
    h1: "Industrial builders Brisbane — bespoke design, develop & construct",
    lead: "We are industrial developer-builders and turnkey D&C partners for client-specific warehouses across Brisbane and SEQ.",
    blocks: INDUSTRIAL_BUILDERS_FAQS.map((item) => ({
      heading: item.question,
      paragraphs: [item.answer],
    })),
  },
  {
    path: "/warehouse-builders-brisbane",
    title: "Warehouse Builders Brisbane | Developer-Builder | Brenscot",
    description:
      "Warehouse builders in Brisbane. Brenscot develops and builds industrial warehouses to sell or lease, or delivers turnkey design and construct on your land.",
    faqs: WAREHOUSE_FAQS,
    h1: "Warehouse builders Brisbane — develop, design and construct",
    lead: "Brenscot is a Brisbane industrial warehouse developer-builder. We develop and build warehouses to sell or lease, and we deliver design-and-construct turnkey for landowners.",
    blocks: WAREHOUSE_FAQS.map((item) => ({ heading: item.question, paragraphs: [item.answer] })),
  },
  {
    path: "/design-and-construct-warehouse-brisbane",
    title: "Design and Construct Warehouse Brisbane | Turnkey D&C | Brenscot",
    description:
      "Turnkey design and construct warehouses in Brisbane for landowners. One team for design, approvals and construction through to handover.",
    faqs: DC_FAQS,
    h1: "Design and construct warehouse Brisbane — turnkey for landowners",
    lead: "Turnkey design, approvals and construction for landowners who already hold a site. One team from concept through to a finished industrial warehouse in Brisbane and SEQ.",
    blocks: DC_FAQS.map((item) => ({ heading: item.question, paragraphs: [item.answer] })),
  },
  {
    path: "/process",
    title: "Our Process | Industrial Warehouse Developer-Builder | Brenscot",
    description:
      "How Brenscot delivers industrial warehouses in Brisbane and SEQ: site, design, approvals, tilt-panel and steel construction, then handover, sale or lease.",
    faqs: PROCESS_FAQS,
    h1: "How Brenscot delivers industrial warehouses",
    lead: "Site acquire through Indevelop, or your land. Then design, approvals, construction, handover, and sell or lease. The same chain, two ways in.",
    blocks: PROCESS_FAQS.map((item) => ({ heading: item.question, paragraphs: [item.answer] })),
  },
  ...LANDERS.map((lander) => ({
    path: lander.path,
    title: lander.title,
    description: lander.description,
    faqs: lander.faqs,
    h1: lander.h1,
    lead: lander.lead,
    blocks: landerBlocks(lander),
  })),
  {
    path: "/projects",
    title: "Industrial Warehouse Projects | Brisbane & SEQ | Brenscot",
    description:
      "Completed and current industrial warehouse projects by Brenscot across Brisbane and South East Queensland, from freestanding to multi-unit complexes.",
    h1: "Industrial warehouse projects and developments",
    lead: "Completed and current industrial warehouse projects by Brenscot across Brisbane and South East Queensland, from single freestanding facilities to multi-unit complexes.",
  },
  {
    path: "/about",
    title: "About Brenscot | Brisbane Industrial Warehouse Developer-Builder",
    description:
      "Brenscot is a Queensland developer-builder of industrial warehouses in Brisbane and SEQ, taking projects from land and approvals through to construction.",
    h1: "About Brenscot Builders",
    lead: "Brenscot is a Queensland developer-builder specialising in industrial warehouses, from single freestanding facilities to multi-unit complexes. We design, develop and build across Brisbane and South East Queensland, managing each project from land and approvals through construction to handover.",
  },
  {
    path: "/partners",
    title: "Investors & Agents | Industrial Warehouse Partners | Brenscot",
    description:
      "Partner with Brenscot on Brisbane industrial warehouse developments. We work with investors, landowners and commercial agents across South East Queensland.",
    h1: "Partner with Brenscot",
    lead: "We work with investors, landowners and commercial agents on industrial warehouse developments across Brisbane and South East Queensland.",
  },
  {
    path: "/contact",
    title: "Contact Brenscot | Brisbane Warehouse Developer-Builder",
    description:
      "Enquire about industrial warehouse development or design and construct in Brisbane and SEQ. Email enquiries@brenscot.com.au or call 0480 800 077.",
    h1: "Contact Brenscot Builders",
    lead: "Enquire about industrial warehouse development or design and construct in Brisbane and South East Queensland. Email enquiries@brenscot.com.au or call 0480 800 077.",
  },
  {
    path: "/insights",
    title: "Industrial Warehouse Insights for SEQ | Brenscot Builders",
    description:
      "Plain-English guides to designing, approving and building industrial warehouses in Brisbane and South East Queensland, from Brenscot Builders.",
    h1: "Industrial warehouse insights",
    lead: "Plain-English guides to designing, approving and building industrial warehouses in Brisbane and South East Queensland, written by Brenscot Builders and checked against the National Construction Code and Queensland legislation.",
    blocks: [
      {
        heading: "Articles",
        paragraphs: INSIGHTS.map((item) => `${item.h1}. ${item.description}`),
      },
    ],
  },
  {
    path: "/privacy-policy",
    title: "Privacy Policy | Brenscot Builders",
    description:
      "How Brenscot Builders collects, holds and uses personal information in line with the Australian Privacy Principles.",
  },
  {
    path: "/terms-conditions",
    title: "Terms & Conditions | Brenscot Builders",
    description:
      "Terms of use for the Brenscot Builders website, covering project information, intellectual property and site use.",
  },
];

export const NOT_FOUND_SEO: PageSeo = {
  path: "/404",
  title: "Page not found | Brenscot Builders",
  description: "This page does not exist. Return to Brenscot Builders for industrial warehouse development in Brisbane.",
  robots: "noindex, follow",
};

export function getStaticPage(path: string): PageSeo | undefined {
  return STATIC_PAGES.find((page) => page.path === path);
}

export function absoluteUrl(path: string): string {
  if (path === "/" || path === "") {
    return `${SITE_ORIGIN}/`;
  }
  const normalised = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_ORIGIN}${normalised}`;
}

export function absoluteAsset(path: string): string {
  if (!path) {
    return `${SITE_ORIGIN}${DEFAULT_OG_IMAGE}`;
  }
  if (/^https?:\/\//i.test(path)) {
    return path;
  }
  return `${SITE_ORIGIN}${path.startsWith("/") ? path : `/${path}`}`;
}

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export function truncateMeta(text: string, max = 155): string {
  const compact = text.replace(/\s+/g, " ").trim();
  if (compact.length <= max) {
    return compact;
  }
  const sliced = compact.slice(0, max - 1);
  const lastSpace = sliced.lastIndexOf(" ");
  const clipped = sliced.slice(0, lastSpace > 80 ? lastSpace : max - 1).replace(/[,;:]$/, "");
  return `${clipped}…`;
}

export function projectPageSeo(project: {
  slug: string;
  title: string;
  location: string;
  description?: string;
  area?: string;
  keyInfo?: { label: string; value: string }[];
}): PageSeo {
  const suburb = project.location.replace(/,?\s*QLD\.?$/i, "").trim();
  const rawArea =
    project.area ??
    project.keyInfo?.find((item) => /gfa|building area|lettable/i.test(item.label))?.value;
  const area = rawArea?.match(/[\d,]+\s*m²/)?.[0] ?? rawArea;
  const areaBit = area ? ` — ${area}` : "";
  const firstParagraph = project.description
    ?.split(/\n\s*\n|\\n\\n/)[0]
    ?.replace(/\s+/g, " ")
    .trim();
  return {
    path: `/projects/${project.slug}`,
    h1: project.title,
    lead:
      firstParagraph ||
      `${project.title} in ${project.location}. Industrial warehouse developed and built by Brenscot.`,
    title: `${project.title} | ${suburb} warehouse | Brenscot`,
    description: truncateMeta(
      `${project.title} in ${project.location}${areaBit}. Industrial warehouse developed and built by Brenscot in Brisbane and South East Queensland.`,
    ),
  };
}

export function insightPageSeo(insight: InsightMeta, bodyHtml?: string): PageSeo {
  return {
    path: `/insights/${insight.slug}`,
    title: insight.title,
    description: insight.description,
    h1: insight.h1,
    lead: `By ${SITE_NAME} | Last reviewed ${insight.reviewed}`,
    article: { datePublished: insight.datePublished, dateModified: insight.dateModified },
    ...(bodyHtml ? { bodyHtml } : {}),
  };
}

export function articleJsonLd(page: PageSeo) {
  if (!page.article) {
    return undefined;
  }
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.h1 ?? page.title,
    description: page.description,
    image: absoluteAsset(DEFAULT_OG_IMAGE),
    datePublished: page.article.datePublished,
    dateModified: page.article.dateModified,
    inLanguage: "en-AU",
    mainEntityOfPage: absoluteUrl(page.path),
    author: { "@type": "Organization", name: SITE_NAME, url: `${SITE_ORIGIN}/` },
    publisher: { "@id": `${SITE_ORIGIN}/#organization` },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "GeneralContractor"],
    "@id": `${SITE_ORIGIN}/#organization`,
    name: SITE_NAME,
    url: `${SITE_ORIGIN}/`,
    email: "enquiries@brenscot.com.au",
    telephone: "+61480800077",
    image: absoluteAsset(DEFAULT_OG_IMAGE),
    logo: `${SITE_ORIGIN}/favicon.png`,
    description:
      "Brisbane industrial warehouse developer-builder, QBCC 15213515. Brenscot acquires land, secures approvals and builds warehouses to sell or lease, and delivers design-and-construct turnkey for landowners across Brisbane and South East Queensland.",
    identifier: {
      "@type": "PropertyValue",
      name: "QBCC",
      value: "15213515",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Suite 2C, 134 Racecourse Rd",
      addressLocality: "Ascot",
      addressRegion: "QLD",
      postalCode: "4007",
      addressCountry: "AU",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Brisbane",
        containedInPlace: { "@type": "State", name: "Queensland" },
      },
      {
        "@type": "AdministrativeArea",
        name: "South East Queensland",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+61480800077",
      email: "enquiries@brenscot.com.au",
      contactType: "sales",
      areaServed: "AU",
      availableLanguage: "English",
    },
  };
}

export function webPageJsonLd(page: PageSeo) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.title,
    description: page.description,
    url: absoluteUrl(page.path === "/404" ? "/" : page.path),
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: `${SITE_ORIGIN}/`,
    },
    about: { "@id": `${SITE_ORIGIN}/#organization` },
  };
}

export function faqPageJsonLd(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(page: PageSeo) {
  if (page.path === "/" || page.path === "/404") {
    return undefined;
  }
  const name = (page.h1 ?? page.title.split("|")[0] ?? page.title).trim();
  const trail: { name: string; path: string }[] = [{ name: "Home", path: "/" }];
  if (page.path.startsWith("/projects/")) {
    trail.push({ name: "Projects", path: "/projects" });
  }
  if (page.path.startsWith("/insights/")) {
    trail.push({ name: "Insights", path: "/insights" });
  }
  trail.push({ name, path: page.path });
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function pageJsonLdGraph(page: PageSeo) {
  const graph: object[] = [organizationJsonLd(), webPageJsonLd(page)];
  const breadcrumb = breadcrumbJsonLd(page);
  if (breadcrumb) {
    graph.push(breadcrumb);
  }
  const article = articleJsonLd(page);
  if (article) {
    graph.push(article);
  }
  if (page.faqs?.length) {
    graph.push(faqPageJsonLd(page.faqs));
  }
  return graph;
}

export function renderSeoHeadHtml(page: PageSeo, options?: { ogImage?: string }): string {
  const url = absoluteUrl(page.path === "/404" ? "/" : page.path);
  const canonical = page.path === "/404" ? `${SITE_ORIGIN}/` : url;
  const image = absoluteAsset(options?.ogImage ?? DEFAULT_OG_IMAGE);
  const jsonLd = pageJsonLdGraph(page);
  const robots = page.robots
    ? `    <meta name="robots" content="${escapeHtml(page.robots)}" />\n`
    : "";

  return [
    `    ${SEO_HEAD_START}`,
    `    <title>${escapeHtml(page.title)}</title>`,
    `    <meta name="description" content="${escapeHtml(page.description)}" />`,
    robots.trimEnd(),
    `    <link rel="canonical" href="${escapeHtml(canonical)}" />`,
    `    <meta property="og:locale" content="en_AU" />`,
    `    <meta property="og:type" content="${page.article ? "article" : "website"}" />`,
    `    <meta property="og:site_name" content="${escapeHtml(SITE_NAME)}" />`,
    `    <meta property="og:title" content="${escapeHtml(page.title)}" />`,
    `    <meta property="og:description" content="${escapeHtml(page.description)}" />`,
    `    <meta property="og:image" content="${escapeHtml(image)}" />`,
    `    <meta property="og:image:secure_url" content="${escapeHtml(image)}" />`,
    `    <meta property="og:url" content="${escapeHtml(canonical)}" />`,
    `    <meta name="twitter:card" content="summary_large_image" />`,
    `    <meta name="twitter:title" content="${escapeHtml(page.title)}" />`,
    `    <meta name="twitter:description" content="${escapeHtml(page.description)}" />`,
    `    <meta name="twitter:image" content="${escapeHtml(image)}" />`,
    `    <script type="application/ld+json" data-seo="ld">${JSON.stringify(jsonLd)}</script>`,
    `    ${SEO_HEAD_END}`,
  ]
    .filter((line) => line.length > 0)
    .join("\n");
}

export function applySeoHead(html: string, page: PageSeo, options?: { ogImage?: string }): string {
  const block = renderSeoHeadHtml(page, options);
  if (html.includes(SEO_HEAD_START) && html.includes(SEO_HEAD_END)) {
    const start = html.indexOf(SEO_HEAD_START);
    const end = html.indexOf(SEO_HEAD_END) + SEO_HEAD_END.length;
    const lineStart = html.lastIndexOf("\n", start);
    const before = lineStart === -1 ? "" : html.slice(0, lineStart + 1);
    const after = html.slice(end);
    return `${before}${block}${after}`;
  }
  return html.replace("</head>", `${block}\n  </head>`);
}

export function renderSeoBodyHtml(page: PageSeo): string {
  if (!page.h1) {
    return "";
  }
  const sections = [
    `<h1>${escapeHtml(page.h1)}</h1>`,
    page.lead ? `<p>${escapeHtml(page.lead)}</p>` : "",
    ...(page.blocks ?? []).map(
      (block) =>
        `<section><h2>${escapeHtml(block.heading)}</h2>${block.paragraphs
          .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
          .join("")}</section>`,
    ),
    page.bodyHtml ?? "",
  ].filter(Boolean);
  return `<main data-seo-prerender="body">${sections.join("\n")}</main>`;
}

export function applySeoPage(html: string, page: PageSeo, options?: { ogImage?: string }): string {
  const withHead = applySeoHead(html, page, options);
  const body = renderSeoBodyHtml(page);
  if (!body) {
    return withHead;
  }
  if (withHead.includes('<div id="root"></div>')) {
    return withHead.replace('<div id="root"></div>', `<div id="root">${body}</div>`);
  }
  return withHead.replace('<div id="root">', `<div id="root">${body}`);
}

