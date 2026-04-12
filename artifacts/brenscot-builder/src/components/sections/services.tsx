import { motion } from 'framer-motion';

const services = [
  {
    title: "Residential",
    description: "Architecturally designed custom homes built with uncompromising quality and attention to detail. Every residence is a tailored masterpiece."
  },
  {
    title: "Commercial",
    description: "Striking, functional commercial spaces and boutique developments delivered on schedule to elevate your business presence."
  },
  {
    title: "Renovations",
    description: "Transformative extensions and high-end renovations that seamlessly integrate modern luxury with existing architectural character."
  },
  {
    title: "Management",
    description: "Comprehensive project oversight. We handle every facet of the build from conception to handover, ensuring absolute perfection."
  }
];

export function Services() {
  return (
    <section id="services" className="py-32 md:py-48 bg-[#0f0f0f] text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-12">
          <div className="max-w-2xl">
            <span className="text-white/50 font-sans uppercase tracking-[0.2em] text-xs mb-8 block">Expertise</span>
            <h2 className="text-5xl md:text-7xl font-serif leading-tight">Mastery in <br className="hidden md:block"/>every detail.</h2>
          </div>
          <p className="text-white/60 text-lg leading-relaxed max-w-md md:mb-4">
            Our approach blends innovative construction techniques with traditional craftsmanship to create spaces of enduring value.
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