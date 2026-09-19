import { Link } from "wouter";

export const primaryCtaClass =
  "inline-flex items-center justify-center bg-[#C8A24A] text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#C8A24A]/85 transition-colors";
export const navyOutlineCtaClass =
  "inline-flex items-center justify-center border border-[#0b1526] text-[#0b1526] px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#0b1526] hover:text-[#C8A24A] transition-colors";
export const goldOutlineCtaClass =
  "inline-flex items-center justify-center border border-[#C8A24A] text-[#C8A24A] px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#C8A24A] hover:text-white transition-colors";

export type LanderCta = {
  href: string;
  label: string;
  variant?: "primary" | "navy" | "gold";
};

export function LanderCtas({
  ctas,
  className = "flex flex-col sm:flex-row gap-4",
}: {
  ctas: LanderCta[];
  className?: string;
}) {
  return (
    <div className={className}>
      {ctas.map((cta) => {
        const variant = cta.variant ?? "navy";
        const className =
          variant === "primary" ? primaryCtaClass : variant === "gold" ? goldOutlineCtaClass : navyOutlineCtaClass;
        return (
          <Link key={`${cta.href}-${cta.label}`} href={cta.href} className={className}>
            {cta.label}
          </Link>
        );
      })}
    </div>
  );
}
