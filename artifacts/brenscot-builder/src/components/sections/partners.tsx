import { motion } from 'framer-motion';

export function Partners() {
  return (
    <section id="partners" className="py-32 bg-white text-[#C8A24A] border-t border-black/5">
      <div className="container mx-auto px-6 md:px-12">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="text-black font-sans uppercase tracking-[0.3em] text-xs md:text-sm mb-8 block">Trusted Partnership</span>
          <p className="text-[#C8A24A] text-2xl md:text-4xl font-light leading-relaxed mb-10">
            In partnership with <span className="text-[#0b1526] font-normal">Indevelop Pty Ltd</span> — delivering industrial developments with strength and precision.
          </p>
          <p className="text-[#C8A24A] text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto">
            This collaboration brings together strategic development expertise and construction precision, strengthening our ability to deliver large-scale industrial warehouse projects with confidence and consistency.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
