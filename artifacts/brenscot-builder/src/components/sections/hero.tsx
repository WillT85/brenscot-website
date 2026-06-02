import { motion } from 'framer-motion';
import { HardHat } from 'lucide-react';
import heroImage from '@/assets/images/hero.png';

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-[#0b1526]">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Modern industrial warehouse development" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col items-center justify-center text-center mt-20">
        
        <h1 className="text-white font-serif uppercase leading-[0.85] text-[11vw] md:text-[9vw] font-bold tracking-tighter flex flex-col items-center">
          <span className="flex pb-[0.08em]">
            {"BRENSCOT".split("").map((letter, i) => (
              <motion.span
                key={`b-${i}`}
                initial={{ y: "-60vh", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.3, delay: i * 0.18, ease: [0.34, 1.2, 0.64, 1] }}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </span>
          <span className="flex pb-[0.08em] -mt-2 md:-mt-5 text-[0.8em] text-[#C8A24A]">
            {"BUILDERS".split("").map((letter, i) => (
              <span key={`u-${i}`} className="relative inline-block">
                {i === 0 && (
                  <motion.span
                    initial={{ y: "-70vh", opacity: 0, rotate: -18 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    transition={{ duration: 0.9, delay: 3.2, ease: [0.34, 1.4, 0.5, 1] }}
                    className="absolute left-1/2 -translate-x-1/2 bottom-[58%] text-white pointer-events-none"
                    aria-hidden="true"
                  >
                    <HardHat className="w-[0.7em] h-[0.7em]" strokeWidth={1.5} />
                  </motion.span>
                )}
                <motion.span
                  initial={{ x: "-100vw", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.9 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              </span>
            ))}
          </span>
        </h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="mt-12 flex flex-col items-center gap-8"
        >
          <p className="text-white/80 text-sm md:text-base tracking-[0.2em] uppercase font-medium max-w-xl text-center">
            Large-scale industrial warehouses that lead from the ground up.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 mt-4">
            <button 
              onClick={scrollToProjects}
              className="bg-[#C8A24A] text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#C8A24A]/85 transition-colors"
            >
              View Projects
            </button>
            <button 
              onClick={scrollToContact}
              className="border border-[#C8A24A] text-[#C8A24A] px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#C8A24A] hover:text-white transition-colors"
            >
              Contact Us
            </button>
          </div>
        </motion.div>

      </div>

    </section>
  );
}
