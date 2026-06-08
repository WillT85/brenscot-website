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
          <span className="text-black font-sans uppercase tracking-[0.3em] text-xs md:text-sm mb-8 block">From land to lease, under one roof.</span>
          <p className="text-[#0b1526] text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto mb-8">
            <span className="text-[#C8A24A]">Indevelop</span> identifies and acquires the sites; <span className="text-[#C8A24A]">Brenscot</span> takes it from there — design, approvals and construction through to a completed, ready-to-occupy building.
          </p>
          <p className="text-[#0b1526] text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto">
            Controlling the full journey from raw land to finished facility gives us certainty over programme, cost and quality that a standalone builder can't match — and it's why we can deliver buildings to suit, ready to lease or purchase.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
