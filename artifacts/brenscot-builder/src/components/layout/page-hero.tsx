import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function PageHero({
  title,
  children,
  eyebrow,
}: {
  title: ReactNode;
  children?: ReactNode;
  eyebrow?: string;
}) {
  return (
    <section className="pt-40 pb-20 md:pt-48 md:pb-32 bg-[#0b1526]">
      <div className="container mx-auto px-6 md:px-12">
        {eyebrow ? (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#C8A24A] text-[10px] uppercase tracking-[0.3em] mb-6"
          >
            {eyebrow}
          </motion.p>
        ) : null}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-tight"
        >
          {title}
        </motion.h1>
        {children ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-white/40 text-lg font-light mt-8 max-w-2xl leading-relaxed"
          >
            {children}
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}
