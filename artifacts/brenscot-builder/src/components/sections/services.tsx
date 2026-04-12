import { motion } from 'framer-motion';

const services = [
  {
    title: "Design & Construct",
    description: "Fully integrated design and build solutions for warehouses, distribution centres, and industrial facilities. One point of contact from concept through to handover."
  },
  {
    title: "Industrial Construction",
    description: "High-spec tilt-panel and structural steel construction for large-footprint industrial buildings. We self-perform critical trades to maintain schedule and quality."
  },
  {
    title: "Logistics & Distribution",
    description: "Purpose-built facilities engineered for maximum operational efficiency — dock levellers, hardstand, truck courts, and high-bay racking integration by design."
  },
  {
    title: "Project Management",
    description: "End-to-end project delivery oversight with rigorous programme management, transparent reporting, and a commitment to zero-defect handovers."
  }
];

export function Services() {
  return (
    <section id="services" className="py-32 md:py-48 bg-[#0d1a2d] text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-12">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-serif leading-tight">Built for <br className="hidden md:block"/>industry scale.</h2>
          </div>
          <p className="text-white/60 text-lg leading-relaxed max-w-md md:mb-4">
            From greenfield industrial estates to complex brownfield redevelopments, we bring the systems and expertise to deliver on time and on budget.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {services.map((service, index) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative group pt-8 border-t border-primary/40"
            >
              <div className="absolute top-0 left-0 w-0 h-[2px] bg-primary transition-all duration-700 ease-out group-hover:w-full -translate-y-[1px]" />
              
              <h3 className="text-2xl font-serif mb-6">{service.title}</h3>
              <p className="text-white/50 leading-relaxed font-sans font-light">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
