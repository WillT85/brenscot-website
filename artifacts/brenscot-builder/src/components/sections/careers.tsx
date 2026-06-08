import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight } from 'lucide-react';

const openRoles = [
  {
    title: "Site Manager",
    type: "Full-Time",
    location: "Various Sites, Australia",
    description: "Run the day-to-day on site — coordinating subcontractors, programme and safety to deliver each build to standard and on time.",
  },
  {
    title: "Project Manager",
    type: "Full-Time",
    location: "Head Office / Hybrid",
    description: "Own projects from design through to handover, managing programme, budget, subcontractors and quality end to end.",
  },
  {
    title: "Contract Administrator",
    type: "Full-Time",
    location: "Various Sites, Australia",
    description: "Keep projects running commercially — procurement, subcontractor letting, variations, progress claims and cost reporting.",
  },
  {
    title: "Development Manager",
    type: "Full-Time",
    location: "Head Office",
    description: "Drive projects from site acquisition through design and approvals, working across Indevelop and Brenscot to bring developments to life.",
  },
];

export function Careers() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="careers" className="py-32 md:py-48 bg-[#0b1526] text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <span className="text-white/50 font-sans uppercase tracking-[0.2em] text-xs mb-8 block">Careers</span>
            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">Join the build.</h2>
            <p className="text-white/60 text-lg leading-relaxed font-light mb-12 max-w-md">
              We are always looking for driven, skilled people who want to work on significant industrial projects and build a long-term career with a company that values expertise and rewards results.
            </p>
            <p className="text-white/40 text-sm">
              Don't see your role?{' '}
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-white hover:underline uppercase tracking-widest text-[10px] ml-2"
              >
                Email Us
              </button>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="w-full border-t border-white/10">
              {openRoles.map((role, index) => (
                <div key={index} className="border-b border-white/10">
                  <button
                    className="w-full py-8 md:py-10 flex items-center justify-between text-left group"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    data-testid={`career-toggle-${index}`}
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-4 flex-1 pr-8">
                      <span className="text-2xl md:text-3xl font-serif font-normal group-hover:text-white/70 transition-colors flex-1">{role.title}</span>
                      <div className="flex gap-4 md:gap-8 text-[10px] uppercase tracking-[0.2em] text-white/50">
                        <span>{role.location}</span>
                        <span>{role.type}</span>
                      </div>
                    </div>
                    <div className="text-white/50 group-hover:text-white transition-colors flex-shrink-0">
                      {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </div>
                  </button>
                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-10 pt-2">
                          <p className="text-white/60 text-base md:text-lg font-light leading-relaxed mb-8 max-w-2xl">
                            {role.description}
                          </p>
                          <button
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-white hover:gap-6 transition-all border-b border-white pb-2"
                            data-testid={`button-apply-${index}`}
                          >
                            Apply Now <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
