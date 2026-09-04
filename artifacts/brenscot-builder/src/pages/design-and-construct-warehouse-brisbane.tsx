import { motion } from "framer-motion";
import { Link } from "wouter";
import { NavBar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/layout/page-hero";
import { SeoHead } from "@/seo/SeoHead";
import { getStaticPage } from "@/seo/config";

const seo = getStaticPage("/design-and-construct-warehouse-brisbane")!;

const stages = [
  {
    title: "Design",
    body: "We shape the warehouse around how the building will actually be used — clear-span, roller doors, hardstand, office, fire compartments and crane provision where they belong.",
  },
  {
    title: "Approvals",
    body: "Planning, building and civil approvals sit in the same programme as design, so the facility that is approved is the one we intend to build.",
  },
  {
    title: "Construction",
    body: "Tilt-panel and structural steel, with the works that matter kept under Brenscot's direct control through to handover.",
  },
];

export default function DesignAndConstructWarehousePage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <SeoHead {...seo} />
      <NavBar />

      <PageHero
        eyebrow="For landowners"
        title={
          <>
            Design and construct
            <br />
            warehouse Brisbane.
          </>
        }
      >
        Turnkey design, approvals and construction for landowners who already hold a site. One team from concept through to a finished industrial warehouse — typically up to about 10,000m² — in Brisbane and SEQ.
      </PageHero>

      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-20">
            <span className="text-black/50 font-sans uppercase tracking-[0.2em] text-xs mb-8 block">
              Design and construct
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-black leading-tight mb-8">
              Your land. Our delivery, end to end.
            </h2>
            <p className="text-black/60 text-lg font-light leading-relaxed mb-6">
              If you own industrial land in Brisbane or SEQ and want a warehouse built on it, Brenscot can take the project from design through approvals and construction to handover. That is design-and-construct turnkey — not a construct-only tender against other builders.
            </p>
            <p className="text-black/60 text-lg font-light leading-relaxed">
              Where you do not yet hold a site, the other path is our developer-builder model: Indevelop acquires the land, Brenscot builds, and the completed warehouse is sold or leased. Commercial agents who bring land or occupier deals work with us on both paths.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-x-8 gap-y-12 mb-20">
            {stages.map((stage, index) => (
              <motion.div
                key={stage.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="pt-8 border-t border-black/10"
              >
                <span className="text-[#C8A24A] text-[10px] uppercase tracking-[0.25em] block mb-4">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-2xl font-serif text-black mb-4">{stage.title}</h3>
                <p className="text-black/60 font-light leading-relaxed">{stage.body}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/warehouse-builders-brisbane"
              className="inline-flex items-center justify-center bg-[#C8A24A] text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#C8A24A]/85 transition-colors"
            >
              Warehouse builders Brisbane
            </Link>
            <Link
              href="/process"
              className="inline-flex items-center justify-center border border-[#0b1526] text-[#0b1526] px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#0b1526] hover:text-[#C8A24A] transition-colors"
            >
              Our process
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-[#0b1526] text-[#0b1526] px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#0b1526] hover:text-[#C8A24A] transition-colors"
            >
              Discuss your site
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
