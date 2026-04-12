import { motion } from 'framer-motion';

export function Partners() {
  return (
    <section id="partners" className="py-32 bg-[#0d1a2d] text-white border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center"
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
