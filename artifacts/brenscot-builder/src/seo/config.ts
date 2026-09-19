export const SITE_ORIGIN = "https://brenscot.com.au";
export const SITE_NAME = "Brenscot Builders";
export const DEFAULT_OG_IMAGE = "/opengraph.jpg";
export const SEO_HEAD_START = "<!--seo-head-start-->";
export const SEO_HEAD_END = "<!--seo-head-end-->";

export type FaqItem = {
  question: string;
  answer: string;
};

export type PageSeo = {
  path: string;
  title: string;
  description: string;
  robots?: string;
  faqs?: FaqItem[];
};

export const INDUSTRIAL_BUILDERS_FAQS: FaqItem[] = [
  {
    question: "What does industrial builder mean at Brenscot?",
    answer:
      "Brenscot is a developer-builder and turnkey design-and-construct partner for client-specific warehouses and multi-unit industrial facilities in Brisbane and SEQ. We are not a cheap general contractor chasing competitive tenders.",
  },
  {
    question: "Do you take competitive tenders or construct-only work?",
    answer:
      "No. We do not bid construct-only competitive tenders. The work we take on is development we originate with Indevelop, or design-and-construct we run end to end with the landowner.",
  },
  {
    question: "What if I already own the land?",
    answer:
      "If you hold industrial land in Brisbane or SEQ, we deliver turnkey design-and-construct — design and approvals through construction and handover. Typical buildings are up to about 10,000m².",
  },
  {
    question: "What if I do not have a site yet?",
    answer:
      "Indevelop, our in-house development company, can acquire the land. Brenscot then designs, approves and constructs. The completed warehouse is sold or leased.",
  },
  {
    question: "What size and type of buildings do you deliver?",
    answer:
      "Client-specific freestanding warehouses and multi-unit facilities, typically up to about 10,000m², with a focus on Brisbane’s northside and the wider SEQ industrial market.",
  },
  {
    question: "Which Brisbane precincts do you work in?",
    answer:
      "Work is centred on Brisbane’s northside and SEQ, including Brendale, North Lakes, Caboolture, Zillmere, Northgate, Geebung and Eagle Farm.",
  },
  {
    question: "Are you QBCC licensed?",
    answer:
      "Brenscot is a Queensland industrial builder. QBCC licence details are available on request — we do not publish a licence number on this page.",
  },
];

export const STATIC_PAGES: PageSeo[] = [
  {
    path: "/",
    title: "Brenscot | Brisbane Industrial Warehouse Developer-Builder",
    description:
      "Brisbane industrial warehouse developer-builder. We acquire land, secure approvals, then build to sell or lease — and deliver design-and-construct turnkey for landowners, up to about 10,000m², across Brisbane and SEQ.",
  },
  {
    path: "/industrial-builders-brisbane",
    title: "Industrial Builders Brisbane | Bespoke D&C | Brenscot",
    description:
      "Industrial builders Brisbane for warehouses & multi-unit facilities — developer-builder and turnkey design-and-construct tailored to your requirements. Northside & SEQ. Not a tender GC.",
    faqs: INDUSTRIAL_BUILDERS_FAQS,
  },
  {
    path: "/warehouse-builders-brisbane",
    title: "Warehouse Builders Brisbane | Developer-Builder | Brenscot",
    description:
      "Brisbane warehouse builders focused on the northside and SEQ. Brenscot is a developer-builder — acquire, approve, build, sell or lease — and delivers design-and-construct for landowners, up to about 10,000m². Not tender general contracting.",
  },
  {
    path: "/design-and-construct-warehouse-brisbane",
    title: "Design and Construct Warehouse Brisbane | Brenscot",
    description:
      "Design-and-construct turnkey for landowners in Brisbane and SEQ: design, approvals and construction through to a finished warehouse, typically up to about 10,000m². One team — not a construct-only tender.",
  },
  {
    path: "/process",
    title: "Our Process | Warehouse Developer-Builder Brisbane | Brenscot",
    description:
      "How Brenscot delivers industrial warehouses: Indevelop acquires the site or you bring the land, then design, approvals, tilt-panel and steel construction, handover, and sell or lease.",
  },
  {
    path: "/projects",
    title: "Industrial Warehouse Projects | Brisbane & SEQ | Brenscot",
    description:
      "Completed and current industrial warehouse developments by Brenscot across Brisbane and South East Queensland — developer-built and design-and-construct, not tendered general contracting.",
  },
  {
    path: "/about",
    title: "About Brenscot | Brisbane Industrial Warehouse Developer-Builder",
    description:
      "Brenscot is a Queensland developer-builder specialising in industrial warehouses in Brisbane and SEQ. We take projects from land and approvals through construction, including design-and-construct turnkey.",
  },
  {
    path: "/partners",
    title: "Investors & Agents | Industrial Warehouse Partners | Brenscot",
    description:
      "Partner with Brenscot on Brisbane industrial warehouse developments. We work with investors and commercial agents on land-to-lease projects and design-and-construct for landowners.",
  },
  {
    path: "/contact",
    title: "Contact Brenscot | Brisbane Warehouse Developer-Builder",
    description:
      "Enquire about industrial warehouse development or design-and-construct in Brisbane and SEQ. Head office, Clarke Street, Hendra. Email enquiries@brenscot.com.au or call 0480 800 077.",
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
  return {
    path: `/projects/${project.slug}`,
    title: `${project.title} | ${suburb} warehouse | Brenscot`,
    description: truncateMeta(
      `${project.title} in ${project.location}${areaBit}. Industrial warehouse developed and built by Brenscot in Brisbane and South East Queensland.`,
    ),
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": `${SITE_ORIGIN}/#organization`,
    name: SITE_NAME,
    url: `${SITE_ORIGIN}/`,
    email: "enquiries@brenscot.com.au",
    telephone: "+61480800077",
    image: absoluteAsset(DEFAULT_OG_IMAGE),
    logo: `${SITE_ORIGIN}/favicon.png`,
    description:
      "Brisbane industrial warehouse developer-builder. Brenscot acquires land, secures approvals and builds warehouses to sell or lease, and delivers design-and-construct turnkey for landowners across Brisbane and South East Queensland.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Clarke Street",
      addressLocality: "Hendra",
      addressRegion: "QLD",
      postalCode: "4011",
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

export function pageJsonLdGraph(page: PageSeo) {
  const graph: object[] = [organizationJsonLd(), webPageJsonLd(page)];
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
    `    <meta property="og:type" content="website" />`,
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

