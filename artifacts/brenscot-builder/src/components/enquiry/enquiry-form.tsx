import { useMemo, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "wouter";
import { useToast } from "@/hooks/use-toast";
import {
  BUDGETS,
  DECISION_MAKERS,
  LAND_STATUSES,
  LOCATIONS,
  PRIMARY_GOALS,
  PROJECT_TYPES,
  ROLES,
  SOFT_DISQUALIFY_COPY,
  TIMELINES,
  buildContactPayload,
  scoreEnquiry,
  type EnquiryScreening,
} from "@/lib/enquiry-screening";

const SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY as string | undefined;

const emptyScreening: EnquiryScreening = {
  role: "",
  projectType: "",
  location: "",
  landStatus: "",
  timeline: "",
  budget: "",
  primaryGoal: "",
  decisionMaker: "",
  howFound: "",
  description: "",
};

const fieldClass =
  "w-full bg-transparent border-b border-black/20 pb-4 text-lg font-light focus:outline-none focus:border-black transition-colors placeholder:text-black/30 rounded-none";

const selectClass = `${fieldClass} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8"><path fill="%230b1526" fill-opacity="0.45" d="M1.4.3 6 4.9 10.6.3 12 1.7 6 7.7 0 1.7z"/></svg>')] bg-no-repeat bg-[right_0.25rem_center] pr-8`;

const labelClass = "block text-[10px] uppercase tracking-[0.2em] text-black/40 mb-3";

const buttonClass =
  "bg-black text-white px-12 py-5 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#C8A24A] hover:text-[#0b1526] transition-colors w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed";

const secondaryButtonClass =
  "border border-black/20 text-[#0b1526] px-12 py-5 text-xs font-bold uppercase tracking-[0.2em] hover:border-black hover:bg-black hover:text-white transition-colors w-full sm:w-auto";

type Step = 1 | 2;

function FieldSelect({
  id,
  label,
  value,
  required,
  options,
  onChange,
}: {
  id: string;
  label: string;
  value: string;
  required?: boolean;
  options: readonly { value: string; label: string }[];
  onChange: (value: string) => void;
}) {
  return (
    <div className="relative">
      <label htmlFor={id} className={labelClass}>
        {label}
        {required ? " *" : ""}
      </label>
      <select
        id={id}
        name={id}
        required={required}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={`${selectClass} ${value ? "text-[#0b1526]" : "text-black/30"}`}
      >
        <option value="" disabled>
          Select
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value} className="text-[#0b1526]">
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export function EnquiryForm({
  id = "enquiry",
  className,
}: {
  id?: string;
  className?: string;
}) {
  const { toast } = useToast();
  const [step, setStep] = useState<Step>(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [screening, setScreening] = useState<EnquiryScreening>(emptyScreening);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const fit = useMemo(() => scoreEnquiry(screening), [screening]);
  const showSoftWarn = step === 2 && fit.band === "soft-disqualify";

  const updateScreening = <K extends keyof EnquiryScreening>(key: K, value: EnquiryScreening[K]) => {
    setScreening((current) => ({ ...current, [key]: value }));
  };

  const resetForm = () => {
    setStep(1);
    setName("");
    setEmail("");
    setPhone("");
    setScreening(emptyScreening);
    recaptchaRef.current?.reset();
    setSubmitted(false);
  };

  const handleContinue = (event: React.FormEvent) => {
    event.preventDefault();
    if (!name.trim() || !email.trim() || !phone.trim() || !screening.role || !screening.decisionMaker) {
      toast({
        title: "A few details are still needed",
        description: "Please complete the required fields so we know who to reply to.",
        variant: "destructive",
      });
      return;
    }
    setStep(2);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const recaptchaToken = recaptchaRef.current?.getValue() ?? undefined;
    if (SITE_KEY && !recaptchaToken) {
      toast({
        title: "Please complete the reCAPTCHA",
        description: "Tick the 'I'm not a robot' box before submitting.",
        variant: "destructive",
      });
      return;
    }

    const payload = buildContactPayload({
      name,
      phone,
      email,
      recaptchaToken,
      screening,
    });

    setSubmitting(true);
    try {
      const res = await fetch(`${import.meta.env.BASE_URL}api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? "Something went wrong.");
      }

      recaptchaRef.current?.reset();
      setSubmitted(true);
    } catch (err) {
      recaptchaRef.current?.reset();
      toast({
        title: "Unable to send enquiry",
        description:
          err instanceof Error
            ? err.message
            : "Please try again or email us directly at enquiries@brenscot.com.au.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div
        id={id}
        className={`scroll-mt-32 border border-black/10 bg-[#f8f6f1] px-8 py-12 md:px-12 md:py-16 ${className ?? ""}`}
      >
        <h2 className="font-serif text-3xl md:text-4xl text-[#0b1526] mb-4">Thank You</h2>
        <p className="text-[#0b1526]/70 text-lg font-light leading-relaxed mb-2">
          Your enquiry has been received.
        </p>
        <p className="text-[#0b1526]/60 text-[15px] font-light leading-relaxed mb-10 max-w-md">
          Our team will review your project details and be in touch shortly. For urgent matters, call us
          on{" "}
          <a href="tel:0480800077" className="text-[#C8A24A] hover:text-[#0b1526] transition-colors">
            0480 800 077
          </a>
          .
        </p>
        <button type="button" onClick={resetForm} className={buttonClass}>
          Send Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <div id={id} className={`scroll-mt-32 ${className ?? ""}`}>
      <p className="text-[#0b1526]/60 text-[15px] font-light leading-relaxed mb-10 max-w-xl">
        We are a developer-builder and turnkey design-and-construct partner for client-specific
        warehouses. A few details help us respond with the right path — Indevelop land-to-lease, or D&amp;C
        on a site you already hold.
      </p>

      <div className="flex items-center gap-4 mb-10 text-[10px] uppercase tracking-[0.2em] text-black/40">
        <span className={step === 1 ? "text-[#0b1526]" : ""}>01 About you</span>
        <span className="h-px flex-1 bg-black/10" />
        <span className={step === 2 ? "text-[#0b1526]" : ""}>02 The project</span>
      </div>

      {step === 1 ? (
        <form onSubmit={handleContinue} className="space-y-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="relative">
              <label htmlFor="enquiry-name" className={labelClass}>
                Full name *
              </label>
              <input
                type="text"
                id="enquiry-name"
                name="name"
                required
                autoComplete="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Your name"
                className={fieldClass}
              />
            </div>
            <div className="relative">
              <label htmlFor="enquiry-phone" className={labelClass}>
                Phone *
              </label>
              <input
                type="tel"
                id="enquiry-phone"
                name="phone"
                required
                autoComplete="tel"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                placeholder="Best number"
                className={fieldClass}
              />
            </div>
          </div>
          <div className="relative">
            <label htmlFor="enquiry-email" className={labelClass}>
              Email *
            </label>
            <input
              type="email"
              id="enquiry-email"
              name="email"
              required
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@company.com"
              className={fieldClass}
            />
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <FieldSelect
              id="role"
              label="Role"
              required
              value={screening.role}
              options={ROLES}
              onChange={(value) => updateScreening("role", value as EnquiryScreening["role"])}
            />
            <FieldSelect
              id="decisionMaker"
              label="Are you the decision-maker?"
              required
              value={screening.decisionMaker}
              options={DECISION_MAKERS}
              onChange={(value) => updateScreening("decisionMaker", value as EnquiryScreening["decisionMaker"])}
            />
          </div>
          <div className="relative">
            <label htmlFor="howFound" className={labelClass}>
              How did you find us?
            </label>
            <input
              type="text"
              id="howFound"
              name="howFound"
              value={screening.howFound}
              onChange={(event) => updateScreening("howFound", event.target.value)}
              placeholder="Referral, search, agent…"
              className={fieldClass}
            />
          </div>
          <button type="submit" className={buttonClass}>
            Continue
          </button>
        </form>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-12">
          <div className="grid md:grid-cols-2 gap-12">
            <FieldSelect
              id="projectType"
              label="Project type"
              required
              value={screening.projectType}
              options={PROJECT_TYPES}
              onChange={(value) => updateScreening("projectType", value as EnquiryScreening["projectType"])}
            />
            <FieldSelect
              id="location"
              label="Location"
              required
              value={screening.location}
              options={LOCATIONS}
              onChange={(value) => updateScreening("location", value as EnquiryScreening["location"])}
            />
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <FieldSelect
              id="landStatus"
              label="Land status"
              required
              value={screening.landStatus}
              options={LAND_STATUSES}
              onChange={(value) => updateScreening("landStatus", value as EnquiryScreening["landStatus"])}
            />
            <FieldSelect
              id="timeline"
              label="Timeline"
              required
              value={screening.timeline}
              options={TIMELINES}
              onChange={(value) => updateScreening("timeline", value as EnquiryScreening["timeline"])}
            />
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <FieldSelect
              id="budget"
              label="Indicative budget"
              required
              value={screening.budget}
              options={BUDGETS}
              onChange={(value) => updateScreening("budget", value as EnquiryScreening["budget"])}
            />
            <FieldSelect
              id="primaryGoal"
              label="Primary goal"
              required
              value={screening.primaryGoal}
              options={PRIMARY_GOALS}
              onChange={(value) => updateScreening("primaryGoal", value as EnquiryScreening["primaryGoal"])}
            />
          </div>
          <div className="relative">
            <label htmlFor="description" className={labelClass}>
              Short project description *
            </label>
            <textarea
              id="description"
              name="description"
              required
              rows={4}
              value={screening.description}
              onChange={(event) => updateScreening("description", event.target.value)}
              placeholder="Site, size, use, anything that helps us reply well"
              className={`${fieldClass} resize-none`}
            />
          </div>

          {showSoftWarn ? (
            <div className="border border-[#C8A24A]/40 bg-[#f8f6f1] px-6 py-6 md:px-8">
              <p className="text-[#0b1526]/75 text-[15px] font-light leading-relaxed mb-4">
                {SOFT_DISQUALIFY_COPY}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 text-[12px]">
                <Link href="/process" className="text-[#C8A24A] hover:text-[#0b1526] transition-colors">
                  Read our process
                </Link>
                <a
                  href="mailto:enquiries@brenscot.com.au"
                  className="text-[#C8A24A] hover:text-[#0b1526] transition-colors"
                >
                  Email enquiries@brenscot.com.au
                </a>
              </div>
            </div>
          ) : null}

          {SITE_KEY ? <ReCAPTCHA ref={recaptchaRef} sitekey={SITE_KEY} /> : null}

          <div className="flex flex-col sm:flex-row gap-4">
            <button type="button" onClick={() => setStep(1)} className={secondaryButtonClass}>
              Back
            </button>
            <button type="submit" disabled={submitting} className={buttonClass}>
              {submitting ? "Sending..." : showSoftWarn ? "Send anyway" : "Submit Enquiry"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
