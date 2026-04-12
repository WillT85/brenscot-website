import { motion } from 'framer-motion';

const partners = [
  "Austral Bricks",
  "James Hardie",
  "Colorbond",
  "Caroma",
  "Dulux",
  "CSR Gyprock",
  "Miele",
  "Caesarstone"
];

export function Partners() {
  return (
    <section id="partners" className="py-32 bg-[#0f0f0f] text-white border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-white/30 font-sans uppercase tracking-[0.3em] text-[10px] mb-16 block">Selected Partners</span>
          
          <div className="flex flex-wrap justify-center gap-x-12 md:gap-x-20 gap-y-12 max-w-5xl mx-auto items-center">
            {partners.map((partner, index) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className="text-2xl md:text-4xl font-serif text-white/40 hover:text-white transition-colors duration-500 cursor-default"
                data-testid={`partner-${index}`}
              >
                {partner}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}