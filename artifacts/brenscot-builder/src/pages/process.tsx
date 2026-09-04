import { motion } from "framer-motion";
import { Link } from "wouter";
import { NavBar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/layout/page-hero";
import { SeoHead } from "@/seo/SeoHead";
import { getStaticPage } from "@/seo/config";

const seo = getStaticPage("/process")!;

const steps = [
  {
    num: "01",
    title: "Site",
    body: "Indevelop acquires land for a Brenscot development, or you bring a site you already own. Either way, the land is the start of the same delivery chain.",
  },
  {
    num: "02",
    title: "Design",
    body: "Warehouse and office planning for how the building will operate — floorplates, access, hardstand, fire strategy and structure — before anyone is on site.",
  },
  {
    num: "03",
    title: "Approvals",
    body: "Planning, building and civil approvals are run with design, so what is approved is what we intend to construct.",
  },
  {
    num: "04",
    title: "Construction",
    body: "Tilt-panel and structural steel. Critical works stay under Brenscot's control; selected trades are people we already trust, not a race to the lowest bid.",
  },
  {
    num: "05",
    title: "Handover",
    body: "A finished industrial building, ready to occupy. We stand behind the work after handover.",
  },
  {
    num: "06",
    title: "Sell or lease",
    body: "On developments we originate, the completed warehouse is sold or leased. On a landowner D&C, the building is yours to occupy, hold, sell or lease.",
  },
];

const branches = [
  {
    title: "Landowners",
    body: "You hold the land. Brenscot delivers design-and-construct turnkey — design, approvals, tilt-panel and steel construction, handover. Typical buildings up to about 10,000m², Brisbane and SEQ, with a northside focus.",
    href: "/design-and-construct-warehouse-brisbane",
    cta: "Design and construct",
  },
  {
    title: "Investors and agents",
    body: "Indevelop acquires the site; Brenscot builds; the completed warehouse is sold or leased. Commercial agents who bring land or occupier relationships work with us on that path — not as a tender panel for construct-only jobs.",
    href: "/partners",
    cta: "Work with us",
  },
];

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <SeoHead {...seo} />
      <NavBar />

      <PageHero
        eyebrow="How a project runs"
        title={
          <>
            Our
            <br />
            process.
          </>
        }
      >
        Site acquire through Indevelop, or your land. Then design, approvals, construction, handover, and sell or lease. The same chain, two ways in.
      </PageHero>

      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16 mb-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="relative pt-6"
              >
                <div className="text-6xl font-serif font-bold text-black/10 absolute -top-4 -left-1 pointer-events-none select-none">
                  {step.num}
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-1 bg-[#C8A24A] mb-6" />
                  <h2 className="text-2xl font-serif text-black mb-4">{step.title}</h2>
                  <p className="text-black/60 font-light leading-relaxed">{step.body}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 pt-12 border-t border-black/10">
            {branches.map((branch) => (
              <motion.div
                key={branch.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="text-[#C8A24A] text-[10px] uppercase tracking-[0.25em] block mb-4">
                  Who this is for
                </span>
                <h2 className="text-3xl md:text-4xl font-serif text-black mb-6">{branch.title}</h2>
                <p className="text-black/60 text-lg font-light leading-relaxed mb-8">{branch.body}</p>
                <Link
                  href={branch.href}
                  className="inline-flex items-center justify-center border border-[#0b1526] text-[#0b1526] px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#0b1526] hover:text-[#C8A24A] transition-colors"
                >
                  {branch.cta}
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-20">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#C8A24A] text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#C8A24A]/85 transition-colors"
            >
              Start a conversation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
