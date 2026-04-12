import { motion } from 'framer-motion';

const partners = [
  "BlueScope Steel",
  "Boral",
  "Hanson",
  "Dematic",
  "Knauf",
  "Tilt-Wall Australia",
  "Danfoss",
  "Kingspan"
];

export function Partners() {
  return (
    <section id="partners" className="py-32 bg-[#0d1a2d] text-white border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24"
        >
          <span className="text-white/30 font-sans uppercase tracking-[0.3em] text-[10px] mb-6 block">Trusted Supply Partners</span>
          <p className="text-white/40 text-sm font-light max-w-lg mx-auto mb-16 leading-relaxed">
            We partner with Australia's leading industrial materials suppliers and systems integrators to deliver best-in-class facilities.
          </p>
          
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="border-t border-white/10 pt-24 max-w-3xl mx-auto text-center"
        >
          <span className="text-white/30 font-sans uppercase tracking-[0.3em] text-[10px] mb-6 block">Trusted Partnership</span>
          <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed mb-8">
            In partnership with <span className="text-white font-normal">Indevelop Pty Ltd</span> — delivering industrial developments with strength and precision.
          </p>
          <p className="text-white/40 text-sm font-light leading-relaxed max-w-2xl mx-auto">
            This collaboration brings together strategic development expertise and construction precision, strengthening our ability to deliver large-scale industrial warehouse projects with confidence and consistency.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
