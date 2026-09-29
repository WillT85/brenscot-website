import { motion } from "framer-motion";
import { Link } from "wouter";
import { NavBar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/layout/page-hero";
import { TrustStrip } from "@/components/layout/trust-strip";
import { SeoHead } from "@/seo/SeoHead";
import { getStaticPage } from "@/seo/config";
import { getProjectBySlug } from "@/data/projects";

const seo = getStaticPage("/industrial-builders-brisbane")!;

const meaning = [
  {
    title: "Developer-builder",
    body: "The preferred model is acquire land, secure approvals, build, then sell or lease. Indevelop finds and buys the site; Brenscot designs, approves and constructs — one journey from raw land to a finished warehouse or multi-unit facility.",
  },
  {
    title: "Bespoke turnkey D&C",
    body: "If you already hold land, we deliver turnkey design-and-construct tailored to your requirements: design and approvals through construction and handover.",
  },
  {
    title: "How we take on work",
    body: "The projects we take on are developments we control, or design-and-construct we run end to end with the client. We do not bid construct-only competitive tenders.",
  },
];

const paths = [
  {
    title: "Indevelop — land to lease",
    body: "Indevelop acquires the site. Brenscot designs, approves and constructs. The completed warehouse or multi-unit facility is sold or leased. Commercial agents who bring land or occupier relationships work with us on this path.",
    href: "/industrial-developer-builder-brisbane",
    cta: "Developer-builder",
  },
  {
    title: "Your land — design and construct",
    body: "You already hold the site. We deliver turnkey D&C: design, approvals, tilt-panel and steel construction, handover. One team, shaped around how the building will actually be used — not a construct-only bid against other builders.",
    href: "/design-and-construct-warehouse-brisbane",
    cta: "Design and construct",
  },
];

const requirements = [
  {
    title: "Floorplate and access",
    body: "Clear-span planning, roller doors, hardstand, truck courts and parking laid out for how the facility will operate day to day.",
  },
  {
    title: "Office, mezzanine and amenities",
    body: "Warehouse paired with office and mezzanine where they belong — reception, amenities and fire separation designed with the occupier, not bolted on later.",
  },
  {
    title: "Structure and services",
    body: "Crane provision, fire compartments, power and civil works considered in design so the approved building is the one we intend to construct.",
  },
  {
    title: "Freestanding or multi-unit",
    body: "A single client-specific warehouse, or a multi-unit complex planned for a mix of occupiers.",
  },
];

const proofSlugs = [
  "24-robertson-st-brendale",
  "15-king-court-north-lakes",
  "59-alta-road-caboolture",
  "535-zillmere-zillmere",
] as const;

const proofProjects = proofSlugs
  .map((slug) => getProjectBySlug(slug))
  .filter((project): project is NonNullable<typeof project> => Boolean(project));

const precincts = [
  "Brendale",
  "North Lakes",
  "Caboolture",
  "Zillmere",
  "Northgate",
  "Geebung",
  "Eagle Farm",
];

const audiences = [
  {
    title: "Owner-occupiers",
    body: "A warehouse shaped around how you operate — not a generic shed bid on a tender list.",
  },
  {
    title: "Landowners",
    body: "Turnkey design-and-construct on a site you already hold, through to handover.",
    href: "/design-and-construct-warehouse-brisbane",
  },
  {
    title: "Investors",
    body: "Indevelop acquires; Brenscot builds; the completed facility is sold or leased.",
    href: "/industrial-developer-builder-brisbane",
  },
  {
    title: "Commercial agents",
    body: "Bring land or occupier relationships. We work the development or D&C path — not as a construct-only panel.",
    href: "/for-commercial-agents",
  },
];

const primaryCtaClass =
  "inline-flex items-center justify-center bg-[#C8A24A] text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#C8A24A]/85 transition-colors";
const navyOutlineCtaClass =
  "inline-flex items-center justify-center border border-[#0b1526] text-[#0b1526] px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#0b1526] hover:text-[#C8A24A] transition-colors";
const goldOutlineCtaClass =
  "inline-flex items-center justify-center border border-[#C8A24A] text-[#C8A24A] px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#C8A24A] hover:text-white transition-colors";

export default function IndustrialBuildersBrisbanePage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <SeoHead {...seo} />
      <NavBar />

      <PageHero
        eyebrow="Brisbane & SEQ"
        title={
          <>
            Industrial builders Brisbane —
            <br />
            bespoke design, develop & construct
          </>
        }
        actions={
          <>
            <Link href="/contact" className={primaryCtaClass}>
              Enquire
            </Link>
            <Link href="/process" className={goldOutlineCtaClass}>
              Our process
            </Link>
          </>
        }
      >
        We are industrial developer-builders and turnkey D&C partners for client-specific warehouses across Brisbane and SEQ.
      </PageHero>

      <TrustStrip />

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
                What industrial builder means here
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-black leading-tight mb-8">
                Client-specific warehouses, delivered end to end.
              </h2>
              <p className="text-black/60 text-lg font-light leading-relaxed mb-6">
                “Industrial builder” is a wide search. On this site it means a Queensland developer-builder and bespoke turnkey design-and-construct partner for warehouses and multi-unit facilities — Brisbane and SEQ, with a northside preference.
              </p>
              <p className="text-black/60 text-lg font-light leading-relaxed">
                That is the difference landowners, occupiers, investors and commercial agents come to us for. Read how we work as{" "}
                <Link href="/warehouse-builders-brisbane" className="text-[#C8A24A] hover:underline">
                  warehouse builders Brisbane
                </Link>
                , or go straight to{" "}
                <Link href="/process" className="text-[#C8A24A] hover:underline">
                  our process
                </Link>
                .
              </p>
            </motion.div>

            <div className="lg:col-span-7 space-y-12">
              {meaning.map((point, index) => (
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
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[#f8f6f1]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-16">
            <span className="text-black/50 font-sans uppercase tracking-[0.2em] text-xs mb-8 block">
              Two paths in
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-black leading-tight">
              Indevelop land to lease, or your land as D&amp;C.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {paths.map((path, index) => (
              <motion.div
                key={path.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="pt-8 border-t border-black/10"
              >
                <span className="text-[#C8A24A] text-[10px] uppercase tracking-[0.25em] block mb-4">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-3xl font-serif text-black mb-6">{path.title}</h3>
                <p className="text-black/60 text-lg font-light leading-relaxed mb-8">{path.body}</p>
                <Link href={path.href} className={navyOutlineCtaClass}>
                  {path.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-16">
            <span className="text-black/50 font-sans uppercase tracking-[0.2em] text-xs mb-8 block">
              Client-specific requirements
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-black leading-tight mb-8">
              Designed around how the building will be used.
            </h2>
            <p className="text-black/60 text-lg font-light leading-relaxed">
              Whether the brief is a single occupier warehouse or a multi-unit complex, the building is planned for the requirements — not reverse-engineered from a lowest-price construct-only package.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-10 gap-y-12">
            {requirements.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: (index % 2) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="pt-8 border-t border-black/10"
              >
                <h3 className="text-2xl font-serif text-black mb-4">{item.title}</h3>
                <p className="text-black/60 font-light leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[#0d1a2d] text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">
            <div className="lg:col-span-6">
              <span className="text-white/40 font-sans uppercase tracking-[0.2em] text-xs mb-8 block">
                Why not competitive tender
              </span>
              <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-8">
                We originate the work. We do not bid it.
              </h2>
              <p className="text-white/55 text-lg font-light leading-relaxed mb-6">
                Competitive tender construct-only work asks a builder to price someone else’s documents against a field of other builders. That is not how Brenscot is set up.
              </p>
              <p className="text-white/55 text-lg font-light leading-relaxed">
                We keep the works that matter under our direct control, and we work with a select group of proven trades — chosen for quality and reliability, not lowest bid. One team, from site through to a building ready to occupy, sell or lease.
              </p>
            </div>
            <div className="lg:col-span-6">
              <span className="text-white/40 font-sans uppercase tracking-[0.2em] text-xs mb-8 block">
                Tilt-panel and steel
              </span>
              <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-8">
                Construction we actually control.
              </h2>
              <p className="text-white/55 text-lg font-light leading-relaxed mb-6">
                Industrial warehouses here are typically concrete tilt-panel and structural steel. Critical works stay with Brenscot; selected trades are people we already trust.
              </p>
              <p className="text-white/55 text-lg font-light leading-relaxed mb-10">
                Tilt-panel and structural steel sit in the same delivery chain as design and approvals. Read{" "}
                <Link href="/tilt-panel-warehouse-brisbane" className="text-[#C8A24A] hover:underline">
                  tilt-panel warehouse Brisbane
                </Link>
                ,{" "}
                <Link href="/process" className="text-[#C8A24A] hover:underline">
                  our process
                </Link>
                , or the finished buildings on{" "}
                <Link href="/projects" className="text-[#C8A24A] hover:underline">
                  projects
                </Link>
                .
              </p>
              <Link href="/tilt-panel-warehouse-brisbane" className={goldOutlineCtaClass}>
                Tilt-panel warehouses
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
            <div>
              <span className="text-black/50 font-sans uppercase tracking-[0.2em] text-xs mb-8 block">
                Project proof
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-black leading-tight">
                Warehouses and multi-unit facilities we have delivered.
              </h2>
            </div>
            <Link href="/projects" className={`${navyOutlineCtaClass} md:mt-16`}>
              All projects
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {proofProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: (index % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link href={`/projects/${project.slug}`} className="group block h-full">
                  <div className="relative overflow-hidden h-[28vh] mb-5 bg-[#0b1526]">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        style={{ objectPosition: project.imagePosition }}
                        className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                      />
                    ) : null}
                  </div>
                  <p className="text-[#C8A24A] text-[10px] uppercase tracking-[0.2em] mb-2">
                    {project.location}
                  </p>
                  <h3 className="text-xl font-serif text-black group-hover:text-[#C8A24A] transition-colors">
                    {project.title}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[#f8f6f1]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-16">
            <span className="text-black/50 font-sans uppercase tracking-[0.2em] text-xs mb-8 block">
              Precincts
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-black leading-tight mb-8">
              Northside Brisbane and SEQ industrial precincts.
            </h2>
            <p className="text-black/60 text-lg font-light leading-relaxed">
              Work is centred on Brisbane — preferring the northside — and the wider South East Queensland industrial market.
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6">
            {precincts.map((precinct) => (
              <li
                key={precinct}
                className="pt-6 border-t border-black/10 text-2xl font-serif text-black"
              >
                {precinct}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-16">
            <span className="text-black/50 font-sans uppercase tracking-[0.2em] text-xs mb-8 block">
              Who this is for
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-black leading-tight">
              Occupiers, landowners, investors and agents.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {audiences.map((audience, index) => {
              const card = (
                <>
                  <h3 className="text-2xl font-serif text-black mb-4 group-hover:text-[#C8A24A] transition-colors">
                    {audience.title}
                  </h3>
                  <p className="text-black/60 font-light leading-relaxed">{audience.body}</p>
                </>
              );
              return (
                <motion.div
                  key={audience.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="pt-8 border-t border-black/10"
                >
                  {audience.href ? (
                    <Link href={audience.href} className="group block h-full">
                      {card}
                    </Link>
                  ) : (
                    card
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-white border-t border-black/10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-16">
            <span className="text-black/50 font-sans uppercase tracking-[0.2em] text-xs mb-8 block">
              Frequently asked
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-black leading-tight">
              Questions we are asked first.
            </h2>
          </div>
          <div className="max-w-3xl space-y-10">
            {(seo.faqs ?? []).map((item, index) => (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index % 3) * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="pt-8 border-t border-black/10"
              >
                <h3 className="text-2xl font-serif text-black mb-4">{item.question}</h3>
                <p className="text-black/60 font-light leading-relaxed">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[#0b1526]">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight mb-8 max-w-3xl">
            Talk to us about a client-specific warehouse.
          </h2>
          <p className="text-white/50 text-lg font-light leading-relaxed max-w-2xl mb-12">
            Developer-builder or turnkey D&amp;C — Brisbane northside and SEQ. If the brief is a competitive construct-only tender, we are not the right builder.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className={primaryCtaClass}>
              Enquire
            </Link>
            <Link href="/projects" className={goldOutlineCtaClass}>
              View projects
            </Link>
            <Link href="/warehouse-builders-brisbane" className={goldOutlineCtaClass}>
              Warehouse builders
            </Link>
            <Link href="/for-commercial-agents" className={goldOutlineCtaClass}>
              For agents
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
