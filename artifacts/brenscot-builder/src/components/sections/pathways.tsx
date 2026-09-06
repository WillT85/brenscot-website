import { motion } from "framer-motion";
import { Link } from "wouter";

const pathways = [
  {
    href: "/warehouse-builders-brisbane",
    title: "Warehouse builders Brisbane",
    description:
      "Developer-builder for industrial warehouses in Brisbane and the northside — acquire, approve, build, then sell or lease. Design-and-construct for landowners, up to about 10,000m².",
  },
  {
    href: "/design-and-construct-warehouse-brisbane",
    title: "Design and construct",
    description:
      "Turnkey design, approvals and construction for landowners who already hold a site. One team from concept through to a finished warehouse.",
  },
  {
    href: "/process",
    title: "Our process",
    description:
      "How a Brenscot project actually runs: site (Indevelop or your land), design, approvals, tilt-panel and steel construction, handover, then sell or lease.",
  },
];

export function Pathways() {
  return (
    <section id="how-we-work" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 md:mb-24 gap-8">
          <h2 className="text-4xl md:text-6xl font-serif text-black leading-tight max-w-2xl">
            Developer-builder,<br />or design and construct.
          </h2>
          <p className="text-black/55 text-lg font-light leading-relaxed max-w-md">
            Brenscot works with landowners, investors and commercial agents on industrial warehouses across Brisbane and SEQ — not competitive tender construct-only work.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-x-8 gap-y-12">
          {pathways.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={item.href}
                className="group relative block pt-8 border-t border-black/15 h-full"
              >
                <span className="absolute top-0 left-0 w-0 h-[2px] bg-[#C8A24A] transition-all duration-700 ease-out group-hover:w-full -translate-y-[1px]" />
                <h3 className="text-2xl font-serif text-black mb-4 group-hover:text-[#C8A24A] transition-colors">
                  {item.title}
                </h3>
                <p className="text-black/55 leading-relaxed font-light mb-6">
                  {item.description}
                </p>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#C8A24A]">
                  Read more
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
