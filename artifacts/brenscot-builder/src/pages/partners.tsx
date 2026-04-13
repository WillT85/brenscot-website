import { motion } from 'framer-motion';
import { NavBar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

const supplyPartners = [
  "BlueScope Steel",
  "Boral",
  "Hanson",
  "Dematic",
  "Knauf",
  "Tilt-Wall Australia",
  "Danfoss",
  "Kingspan"
];

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <NavBar />

      <section className="pt-40 pb-20 md:pt-48 md:pb-32 bg-[#0b1526]">
        <div className="container mx-auto px-6 md:px-12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-tight"
          >
            Our<br />Partners.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-white/40 text-lg font-light mt-8 max-w-xl"
          >
            Strategic partnerships and trusted supply networks that underpin every project we deliver.
          </motion.p>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mb-16"
          >
            <span className="text-black/50 font-sans uppercase tracking-[0.3em] text-[10px] mb-6 block">Trusted Partnership</span>
            <h2 className="text-4xl md:text-6xl font-serif text-black leading-tight mb-8">
              Indevelop Pty Ltd
            </h2>
            <p className="text-black/60 text-lg md:text-xl font-light leading-relaxed mb-6">
              In partnership with <span className="text-black font-normal">Indevelop Pty Ltd</span> — delivering industrial developments with strength and precision.
            </p>
            <p className="text-black/40 text-base font-light leading-relaxed">
              This collaboration brings together strategic development expertise and construction precision, strengthening our ability to deliver large-scale industrial warehouse projects with confidence and consistency.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[#0b1526]">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16"
          >
            <span className="text-white/30 font-sans uppercase tracking-[0.3em] text-[10px] mb-6 block">Supply Network</span>
            <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
              Trusted supply partners.
            </h2>
            <p className="text-white/40 text-base font-light leading-relaxed mt-6 max-w-xl">
              We partner with Australia's leading industrial materials suppliers and systems integrators to deliver best-in-class facilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {supplyPartners.map((partner, index) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="border border-white/10 p-8 md:p-10 flex items-center justify-center hover:border-[#C8A24A]/40 transition-colors duration-500 group"
              >
                <span className="text-lg md:text-xl font-serif text-white/50 group-hover:text-white transition-colors duration-500 text-center">
                  {partner}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
