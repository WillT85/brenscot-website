import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'wouter';
import { NavBar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { allProjects } from '@/data/projects';

type Filter = "all" | "completed" | "ongoing";

export default function ProjectsPage() {
  const [, setLocation] = useLocation();
  const [filter, setFilter] = useState<Filter>("completed");

  const filtered = filter === "all" ? allProjects : allProjects.filter((p) => p.status === filter);

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
            Projects and<br />Developments.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-white/40 text-lg font-serif font-light mt-8 max-w-xl"
          >
            A selection of industrial warehouse and commercial developments delivered across South-East Queensland.
          </motion.p>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex items-center gap-8 mb-16">
            {([
              { label: "Completed", value: "completed" },
              { label: "On going", value: "ongoing" },
            ] as { label: string; value: Filter }[]).map((btn) => (
              <button
                key={btn.value}
                onClick={() => setFilter(btn.value)}
                className={`text-[11px] uppercase tracking-[0.15em] transition-colors duration-300 ${
                  filter === btn.value
                    ? "bg-[#C8A24A] text-[#0b1526] font-bold px-4 py-1.5"
                    : "text-black hover:text-black/60"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, delay: (index % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => { setLocation(`/projects/${project.slug}`); window.scrollTo({ top: 0 }); }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden h-[35vh] md:h-[40vh]">
                  <div className="absolute inset-0 bg-black/10 z-10 transition-colors duration-700 group-hover:bg-black/30" />
                  {project.homeVideo ?? project.video ? (
                    <video
                      src={project.homeVideo ?? project.video}
                      poster={project.image}
                      autoPlay
                      loop
                      muted
                      playsInline
                      ref={(el) => { if (el) { el.muted = true; el.playbackRate = project.playbackRate ?? 0.5; el.play().catch(() => {}); } }}
                      className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 brightness-110 contrast-105"
                    />
                  ) : project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      style={{ objectPosition: project.imagePosition, transform: project.imageScale ? `scale(${project.imageScale})` : undefined }}
                      className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 brightness-110 contrast-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#0b1526] to-[#16243d] transition-transform duration-1000 ease-out group-hover:scale-105">
                      <span className="text-[#C8A24A] text-[10px] uppercase tracking-[0.3em]">Coming Soon</span>
                    </div>
                  )}
                  <div className="absolute inset-0 z-20 flex flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[#0b1526]/15 backdrop-blur-sm">
                    <div className="flex-1 flex items-center justify-center">
                      <span className="text-white text-lg md:text-2xl font-serif uppercase tracking-[0.3em] drop-shadow">Brenscot</span>
                    </div>
                    <div className="bg-[#0b1526] text-white text-center text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] py-4">
                      View Project
                    </div>
                  </div>
                  <div className="absolute bottom-0 right-0 z-30 px-4 md:px-5 pb-3 md:pb-4 text-right transition-opacity duration-300 group-hover:opacity-0">
                    <h3 className="inline-block text-[10px] font-serif font-semibold text-white tracking-wide uppercase">
                      {project.title.split(/(\d+(?:-\d+)?)/g).map((part, i) =>
                        /\d/.test(part) ? (
                          <span key={i} className="font-sans font-medium tracking-normal tabular-nums">{part}</span>
                        ) : (
                          part
                        )
                      )}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
