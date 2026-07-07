import { motion } from 'framer-motion';
import { NavBar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import aboutImage from '@/assets/images/about.png';

const facts = [
  "Established 2020",
  "South-East Queensland",
  "Developer-builder"
];

export default function AboutPage() {
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
            About<br />Brenscot.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-white/40 text-lg font-light mt-8 max-w-xl"
          >
            Industrial warehouses that lead the market — freestanding or multi-unit, built from the ground up.
          </motion.p>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            <motion.div
              initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
              whileInView={{ opacity: 1, clipPath: "inset(0 0 0 0)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-[60vh] lg:h-[80vh] w-full"
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

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-12 border-t border-black/10">
                {facts.map((fact, index) => (
                  <motion.div
                    key={fact}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                    className="flex items-center gap-x-4"
                  >
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-black/50">{fact}</span>
                    {index < facts.length - 1 && (
                      <span className="text-black/30" aria-hidden="true">·</span>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[#0b1526]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-[60vh] lg:h-[80vh] w-full bg-white/5 flex items-center justify-center overflow-hidden"
            >
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-white/30 font-serif text-6xl">WT</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-white/30 font-sans uppercase tracking-[0.3em] text-[10px] mb-6 block">Leadership</span>
              <h2 className="text-4xl md:text-6xl font-serif text-white mb-4 leading-tight">
                William Tobin
              </h2>
              <span className="text-[#C8A24A] text-xs uppercase tracking-[0.2em] font-medium mb-10 block">
                Managing Director
              </span>

              <div className="space-y-6 text-white/50 text-lg font-light leading-relaxed">
                <p>
                  With over two decades of experience in commercial construction and industrial development, William Tobin founded Brenscot Builders with a clear vision — to deliver large-scale warehouse projects with uncompromising precision and quality.
                </p>
                <p>
                  Under his leadership, Brenscot has grown into one of South-East Queensland's most trusted industrial developers, delivering millions of square metres of high-performance facilities for logistics, manufacturing, and distribution clients.
                </p>
                <p>
                  William's hands-on approach and deep understanding of the construction lifecycle ensure every project is executed with discipline, efficiency, and a commitment to exceeding client expectations.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
