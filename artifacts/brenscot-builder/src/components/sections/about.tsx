import { motion } from 'framer-motion';
import aboutImage from '@/assets/images/about.png';

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "120+", label: "Completed Projects" },
  { value: "100%", label: "Client Satisfaction" }
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
              alt="Architectural materials and craftsmanship" 
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
              Building legacies, <br />one frame at a time.
            </h2>
            
            <div className="space-y-8 text-black/60 text-lg md:text-xl font-light leading-relaxed mb-16">
              <p>
                Founded on the principle that exceptional architecture demands exceptional execution. We are builders who view construction not just as an assembly of materials, but as the physical realization of a vision.
              </p>
              <p>
                Our reputation across Australia is built on uncompromising quality, transparent communication, and an obsessive attention to the finest architectural details. We don't just build homes; we craft landmarks.
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