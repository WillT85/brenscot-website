import { motion } from 'framer-motion';
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
        
        <div className="overflow-hidden flex flex-col items-center">
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-white font-serif uppercase leading-[0.85] text-[15vw] md:text-[12vw] font-bold tracking-tighter"
          >
            INDUSTRIAL
          </motion.h1>
        </div>
        <div className="overflow-hidden flex flex-col items-center -mt-2 md:-mt-6">
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-white font-serif uppercase leading-[0.85] text-[15vw] md:text-[12vw] font-bold tracking-tighter"
          >
            PRECISION
          </motion.h1>
        </div>

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

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-10 hidden md:flex"
      >
        <span className="text-white/50 text-[10px] uppercase tracking-[0.3em] rotate-90 translate-y-6">Scroll</span>
        <div className="w-px h-16 bg-white/20 relative mt-10">
          <motion.div 
            animate={{ y: [0, 64, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
}
