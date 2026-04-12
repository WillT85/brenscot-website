import { motion } from 'framer-motion';

export function Video() {
  return (
    <section className="relative bg-black">
      <div className="w-full h-[60vh] md:h-[80vh] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full h-full flex items-center justify-center border border-white/10"
        >
          <div className="text-center">
            <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center mx-auto mb-6">
              <svg className="w-6 h-6 text-white/50 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <span className="text-white/30 font-sans uppercase tracking-[0.3em] text-[10px]">Construction Video</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
