import { motion } from 'framer-motion';
import aboutImage from '@/assets/images/about.png';

const stats = [
  { value: "20+", label: "Years Delivering" },
  { value: "2.1M+", label: "Square Metres Built" },
  { value: "$3.8B+", label: "Project Value" }
];

export function About() {
  return (
    <section id="about" className="py-32 md:py-48 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
            whileInView={{ opacity: 1, clipPath: "inset(0 0 0 0)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[70vh] lg:h-[90vh] w-full order-2 lg:order-1"
          >
            <img 
              src={aboutImage} 
              alt="Brenscot industrial construction in progress" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2"
          >
            <span className="text-black/50 font-sans uppercase tracking-[0.2em] text-xs mb-8 block">About Us</span>
            <h2 className="text-4xl md:text-6xl font-serif text-black mb-10 leading-tight">
              A Queensland developer-builder, built on control and relationships.
            </h2>
            
            <div className="space-y-8 text-black/60 text-lg md:text-xl font-light leading-relaxed mb-16">
              <p>
                Brenscot is a Queensland-based construction and property development company specialising in industrial warehouse projects — from single freestanding facilities to multi-unit complexes. We design, develop and deliver high-performance buildings for logistics, manufacturing and distribution.
              </p>
              <p>
                As a developer-builder, we manage every stage of a project and keep the works that matter under our direct control. We work with a select group of proven subcontractors and consultants — long-term relationships chosen for quality and reliability, not lowest price — so every development performs now and into the future.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-black/10">
              {stats.map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                >
                  <div className="text-3xl md:text-4xl font-serif text-black mb-4">{stat.value}</div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/50">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
