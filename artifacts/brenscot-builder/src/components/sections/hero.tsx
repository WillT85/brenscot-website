import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import heroImage from '@/assets/images/hero.png';
import heroVideo from '@assets/brenscot_hero.mp4';

export function Hero() {
  const [introPhase, setIntroPhase] = useState<'intro' | 'black' | 'tagline' | 'done'>('intro');
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const toBlack = setTimeout(() => setIntroPhase('black'), 3500);
    const toTagline = setTimeout(() => setIntroPhase('tagline'), 4000);
    const toDone = setTimeout(() => setIntroPhase('done'), 8000);
    const toVideo = setTimeout(() => setShowVideo(true), 10000);
    return () => {
      clearTimeout(toBlack);
      clearTimeout(toTagline);
      clearTimeout(toDone);
      clearTimeout(toVideo);
    };
  }, []);

  useEffect(() => {
    if (showVideo && videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, [showVideo]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-[#0b1526]">
      <AnimatePresence>
        {introPhase !== 'done' && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          >
            <AnimatePresence>
              {introPhase === 'intro' && (
                <motion.h2
                  initial={{ opacity: 0, letterSpacing: "0.05em" }}
                  animate={{ opacity: 1, letterSpacing: "0.25em" }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="text-white font-serif uppercase text-4xl md:text-6xl font-bold tracking-[0.25em]"
                >
                  Brenscot
                </motion.h2>
              )}
              {introPhase === 'tagline' && (
                <div className="flex flex-wrap items-center justify-center gap-x-3 md:gap-x-4 px-6 overflow-hidden">
                  <motion.span
                    initial={{ x: "60vw", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
                    className="text-[#C8A24A] font-serif uppercase text-xl md:text-3xl font-normal tracking-[0.15em] whitespace-nowrap"
                  >
                    Lead from
                  </motion.span>
                  <motion.span
                    initial={{ x: "-60vw", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
                    className="text-[#C8A24A] font-serif uppercase text-xl md:text-3xl font-normal tracking-[0.15em] whitespace-nowrap"
                  >
                    the ground up
                  </motion.span>
                </div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Modern industrial warehouse development" 
          className="w-full h-full object-cover"
        />
        <motion.video
          ref={videoRef}
          src={heroVideo}
          muted
          loop
          playsInline
          preload="auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: showVideo ? 1 : 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
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
          <span className="flex pb-[0.08em] mt-1 md:mt-2 text-[0.55em] text-white font-normal">
            {"BUILDERS".split("").map((letter, i) => (
              <motion.span
                key={`u-${i}`}
                initial={{ x: "-100vw", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.9 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block"
              >
                {letter}
              </motion.span>
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
