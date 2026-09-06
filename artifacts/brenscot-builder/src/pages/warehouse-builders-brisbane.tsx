import { motion } from "framer-motion";
import { Link } from "wouter";
import { NavBar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/layout/page-hero";
import { SeoHead } from "@/seo/SeoHead";
import { getStaticPage } from "@/seo/config";

const seo = getStaticPage("/warehouse-builders-brisbane")!;

const points = [
  {
    title: "Developer-builder",
    body: "The preferred model is acquire land, secure approvals, build, then sell or lease. Indevelop finds and buys the site; Brenscot designs, approves and constructs — one journey from raw land to a finished warehouse.",
  },
  {
    title: "Design and construct for landowners",
    body: "If you already hold land, we deliver turnkey design-and-construct: design and approvals through construction and handover. Buildings up to about 10,000m².",
  },
  {
    title: "Brisbane, with a northside focus",
    body: "Work is centred on Brisbane — including the northside — and the wider South East Queensland industrial market. Projects sit in places such as North Lakes, Northgate, Brendale, Zillmere, Chermside, Caboolture and Clontarf.",
  },
];

export default function WarehouseBuildersBrisbanePage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <SeoHead {...seo} />
      <NavBar />

      <PageHero
        eyebrow="Industrial warehouses"
        title={
          <>
            Warehouse builders
            <br />
            Brisbane.
          </>
        }
      >
        Brenscot is a Brisbane industrial warehouse developer-builder — not a tender general contractor. We develop and build warehouses to sell or lease, and we deliver design-and-construct turnkey for landowners.
      </PageHero>

      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5"
            >
              <span className="text-black/50 font-sans uppercase tracking-[0.2em] text-xs mb-8 block">
                How we work
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-black leading-tight mb-8">
                Built from the ground up — not bid against other builders.
              </h2>
              <p className="text-black/60 text-lg font-light leading-relaxed mb-6">
                Brenscot is not set up for competitive tender or construct-only general contracting. The work we take on is development we control, or design-and-construct we run end to end with the landowner.
              </p>
              <p className="text-black/60 text-lg font-light leading-relaxed">
                That is the difference landowners, investors and commercial agents come to us for: one team, from site through to a warehouse ready to occupy, sell or lease.
              </p>
            </motion.div>

            <div className="lg:col-span-7 space-y-12">
              {points.map((point, index) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="pt-8 border-t border-black/10"
                >
                  <h3 className="text-2xl font-serif text-black mb-4">{point.title}</h3>
                  <p className="text-black/60 font-light leading-relaxed">{point.body}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-20">
            <Link
              href="/design-and-construct-warehouse-brisbane"
              className="inline-flex items-center justify-center bg-[#C8A24A] text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#C8A24A]/85 transition-colors"
            >
              Design and construct
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
              Enquire
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
