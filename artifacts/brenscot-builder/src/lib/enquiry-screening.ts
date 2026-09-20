export const ROLES = [
  { value: "owner-occupier", label: "Owner-occupier" },
  { value: "investor", label: "Investor" },
  { value: "commercial-agent", label: "Commercial agent" },
  { value: "other", label: "Other" },
] as const;

export const PROJECT_TYPES = [
  { value: "freestanding-warehouse", label: "Freestanding warehouse" },
  { value: "multi-unit-industrial", label: "Multi-unit industrial" },
  { value: "land-plus-build", label: "Land + build (need site)" },
  { value: "design-construct-on-land", label: "Design & construct on my land" },
  { value: "not-sure", label: "Not sure" },
] as const;

export const LOCATIONS = [
  { value: "brisbane-northside", label: "Brisbane northside" },
  { value: "brisbane-other", label: "Brisbane other" },
  { value: "seq", label: "SEQ" },
  { value: "outside-seq", label: "Outside SEQ" },
] as const;

export const LAND_STATUSES = [
  { value: "own-land", label: "Own land" },
  { value: "under-contract", label: "Under contract" },
  { value: "need-site", label: "Need site acquired" },
  { value: "na", label: "N/A" },
] as const;

export const TIMELINES = [
  { value: "0-6", label: "0–6 months" },
  { value: "6-12", label: "6–12 months" },
  { value: "12-24", label: "12–24 months" },
  { value: "exploring", label: "Exploring" },
] as const;

export const BUDGETS = [
  { value: "under-2m", label: "Under $2m" },
  { value: "2-5m", label: "$2–5m" },
  { value: "5-10m", label: "$5–10m" },
  { value: "10m-plus", label: "$10m+" },
  { value: "prefer-discuss", label: "Prefer to discuss" },
] as const;

export const PRIMARY_GOALS = [
  { value: "turnkey-dc", label: "Turnkey D&C" },
  { value: "developer-builder", label: "Developer-builder land-to-lease" },
  { value: "investment-multi-unit", label: "Investment multi-unit" },
  { value: "tender-prices", label: "Just comparing tender prices" },
  { value: "other", label: "Other" },
] as const;

export const DECISION_MAKERS = [
  { value: "yes", label: "Yes" },
  { value: "shared", label: "Shared" },
  { value: "no", label: "No — introducing for someone else" },
] as const;

export type RoleValue = (typeof ROLES)[number]["value"];
export type ProjectTypeValue = (typeof PROJECT_TYPES)[number]["value"];
export type LocationValue = (typeof LOCATIONS)[number]["value"];
export type LandStatusValue = (typeof LAND_STATUSES)[number]["value"];
export type TimelineValue = (typeof TIMELINES)[number]["value"];
export type BudgetValue = (typeof BUDGETS)[number]["value"];
export type PrimaryGoalValue = (typeof PRIMARY_GOALS)[number]["value"];
export type DecisionMakerValue = (typeof DECISION_MAKERS)[number]["value"];

export type FitBand = "good" | "review" | "soft-disqualify";

export type EnquiryScreening = {
  role: RoleValue | "";
  projectType: ProjectTypeValue | "";
  location: LocationValue | "";
  landStatus: LandStatusValue | "";
  timeline: TimelineValue | "";
  budget: BudgetValue | "";
  primaryGoal: PrimaryGoalValue | "";
  decisionMaker: DecisionMakerValue | "";
  howFound: string;
  description: string;
};

export type FitScore = {
  band: FitBand;
  score: number;
  reasons: string[];
  flags: string[];
};

const SEQ_PLAN =
  /\b(seq|s\.?e\.?q\.?|south[-\s]?east queensland|brisbane|northside|north brisbane|relocating to (qld|queensland|brisbane)|moving to (qld|queensland|brisbane))\b/i;

const NON_INDUSTRIAL =
  /\b(kitchen reno(?:vation)?|bathroom reno(?:vation)?|granny flat|backyard|swimming pool|house extension|residential (?:house|dwelling|home)|new home build|duplex|townhouse|renovating (?:our|my) (?:house|home))\b/i;

const SEQ_LOCATIONS = new Set<LocationValue>(["brisbane-northside", "brisbane-other", "seq"]);

const STRONG_PROJECT_TYPES = new Set<ProjectTypeValue>([
  "design-construct-on-land",
  "land-plus-build",
]);

const STRONG_GOALS = new Set<PrimaryGoalValue>(["turnkey-dc", "developer-builder"]);

const QUALIFIED_BUDGETS = new Set<BudgetValue>(["2-5m", "5-10m", "10m-plus", "prefer-discuss"]);

function labelOf<T extends { value: string; label: string }>(options: readonly T[], value: string): string {
  return options.find((option) => option.value === value)?.label ?? value;
}

export function hasSeqPlan(description: string): boolean {
  return SEQ_PLAN.test(description);
}

export function looksNonIndustrial(description: string): boolean {
  return NON_INDUSTRIAL.test(description);
}

export function scoreEnquiry(input: EnquiryScreening): FitScore {
  const reasons: string[] = [];
  const flags: string[] = [];
  let score = 50;

  const inSeq = input.location !== "" && SEQ_LOCATIONS.has(input.location as LocationValue);
  const outsideSeq = input.location === "outside-seq";
  const seqPlan = hasSeqPlan(input.description);
  const tenderOnly = input.primaryGoal === "tender-prices";
  const exploring = input.timeline === "exploring";
  const under2m = input.budget === "under-2m";
  const qualifiedBudget = input.budget !== "" && QUALIFIED_BUDGETS.has(input.budget as BudgetValue);
  const strongType = input.projectType !== "" && STRONG_PROJECT_TYPES.has(input.projectType as ProjectTypeValue);
  const strongGoal = input.primaryGoal !== "" && STRONG_GOALS.has(input.primaryGoal as PrimaryGoalValue);
  const investment = input.primaryGoal === "investment-multi-unit";
  const nonIndustrial = looksNonIndustrial(input.description);

  if (inSeq) {
    score += 15;
    reasons.push("Project is in Brisbane or SEQ");
  }

  if (outsideSeq && !seqPlan) {
    score -= 25;
    flags.push("outside-seq");
    reasons.push("Location is outside SEQ with no SEQ plan mentioned");
  } else if (outsideSeq && seqPlan) {
    reasons.push("Outside SEQ, but description mentions a Brisbane/SEQ plan");
  }

  if (strongType || strongGoal) {
    score += 15;
    reasons.push("Design-and-construct or developer-builder path");
  } else if (investment) {
    score += 10;
    reasons.push("Investment multi-unit brief");
  }

  if (tenderOnly) {
    score -= 30;
    flags.push("tender-only");
    reasons.push("Primary goal is comparing tender prices");
  }

  if (qualifiedBudget) {
    score += input.budget === "prefer-discuss" ? 5 : 10;
    reasons.push(
      input.budget === "prefer-discuss" ? "Budget to be discussed" : "Indicative budget is $2m+",
    );
  } else if (under2m) {
    score -= 10;
    reasons.push("Indicative budget is under $2m");
  }

  if (exploring) {
    score -= 10;
    reasons.push("Timeline is still exploring");
  } else if (input.timeline === "0-6" || input.timeline === "6-12") {
    score += 5;
    reasons.push("Timeline is within 12 months");
  }

  if (exploring && under2m && tenderOnly) {
    flags.push("exploring-under-2m-tender");
    reasons.push("Exploring + under $2m + tender comparison");
  }

  if (nonIndustrial) {
    score -= 20;
    flags.push("non-industrial");
    reasons.push("Description looks like a non-industrial / residential brief");
  }

  if (input.decisionMaker === "yes") {
    score += 5;
  }

  score = Math.max(0, Math.min(100, score));

  const goodFit =
    inSeq &&
    (strongType || strongGoal) &&
    qualifiedBudget &&
    !exploring &&
    flags.length === 0;

  const band: FitBand = flags.length > 0 ? "soft-disqualify" : goodFit ? "good" : "review";

  if (goodFit) {
    reasons.unshift("Looks like a Brisbane/SEQ D&C or developer-builder fit");
  }

  return { band, score, reasons, flags };
}

export function screeningSummary(input: EnquiryScreening, fit: FitScore): string {
  const lines = [
    "Lead screening",
    `Role: ${labelOf(ROLES, input.role) || "—"}`,
    `Project type: ${labelOf(PROJECT_TYPES, input.projectType) || "—"}`,
    `Location: ${labelOf(LOCATIONS, input.location) || "—"}`,
    `Land status: ${labelOf(LAND_STATUSES, input.landStatus) || "—"}`,
    `Timeline: ${labelOf(TIMELINES, input.timeline) || "—"}`,
    `Indicative budget: ${labelOf(BUDGETS, input.budget) || "—"}`,
    `Primary goal: ${labelOf(PRIMARY_GOALS, input.primaryGoal) || "—"}`,
    `Decision-maker: ${labelOf(DECISION_MAKERS, input.decisionMaker) || "—"}`,
    `How they found us: ${input.howFound.trim() || "—"}`,
    `Fit: ${fit.band} (${fit.score})`,
    ...(fit.reasons.length ? [`Reasons: ${fit.reasons.join("; ")}`] : []),
  ];
  return lines.join("\n");
}

export function buildEnquiryMessage(description: string, input: EnquiryScreening, fit: FitScore): string {
  const details = description.trim();
  const summary = screeningSummary(input, fit);
  return details ? `${details}\n\n---\n${summary}` : summary;
}

export type ContactEnquiryPayload = {
  name: string;
  phone: string;
  email: string;
  projectType: string;
  message: string;
  recaptchaToken?: string;
  role: string;
  location: string;
  landStatus: string;
  timeline: string;
  budget: string;
  primaryGoal: string;
  decisionMaker: string;
  howFound: string;
  fitScore: FitScore;
};

export function buildContactPayload(input: {
  name: string;
  phone: string;
  email: string;
  recaptchaToken?: string;
  screening: EnquiryScreening;
}): ContactEnquiryPayload {
  const fitScore = scoreEnquiry(input.screening);
  return {
    name: input.name.trim(),
    phone: input.phone.trim(),
    email: input.email.trim(),
    projectType: labelOf(PROJECT_TYPES, input.screening.projectType),
    message: buildEnquiryMessage(input.screening.description, input.screening, fitScore),
    ...(input.recaptchaToken ? { recaptchaToken: input.recaptchaToken } : {}),
    role: labelOf(ROLES, input.screening.role),
    location: labelOf(LOCATIONS, input.screening.location),
    landStatus: labelOf(LAND_STATUSES, input.screening.landStatus),
    timeline: labelOf(TIMELINES, input.screening.timeline),
    budget: labelOf(BUDGETS, input.screening.budget),
    primaryGoal: labelOf(PRIMARY_GOALS, input.screening.primaryGoal),
    decisionMaker: labelOf(DECISION_MAKERS, input.screening.decisionMaker),
    howFound: input.screening.howFound.trim(),
    fitScore,
  };
}

export const SOFT_DISQUALIFY_COPY =
  "Brenscot focuses on design-and-construct and developer-builder warehouse projects in Brisbane and SEQ — typically not competitive tender-only builds. If that’s still you, tell us more below; otherwise our Process page explains how we work.";
