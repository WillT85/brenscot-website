import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavBar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import project1 from '@assets/image_1776005185036.png';
import project2 from '@assets/13_02_extt_сс3_Post_Ps_1776005476200.jpg';
import project3 from '@/assets/images/project-3.png';
import project4 from '@/assets/images/project-4.png';

const projects = [
  {
    title: "CHERMSIDE",
    description: "566 Rode Rd, Chermside — Premiere commercial 4,895 m² development with 13 versatile warehouse units.",
    image: project1,
    status: "current" as const,
  },
  {
    title: "CLONTARF",
    description: "34-40 Robson St, Clontarf — Large-scale industrial development spanning 62,000 m².",
    image: project2,
    status: "current" as const,
  },
  {
    title: "ZILLMERE",
    description: "Industrial logistics facility delivering 41,200 m² of high-performance warehouse space.",
    image: project3,
    status: "current" as const,
  },
  {
    title: "WACOL",
    description: "Specialised industrial facility comprising 19,800 m² of purpose-built warehouse infrastructure.",
    image: project4,
    status: "current" as const,
  },
  {
    title: "LOT 80 CABOOLTURE",
    description: "Industrial development delivering 35,600 m² across a master-planned estate.",
    image: project1,
    status: "completed" as const,
  },
  {
    title: "LOT 74 CABOOLTURE",
    description: "Logistics facility with 52,400 m² of distribution and warehousing capacity.",
    image: project2,
    status: "completed" as const,
  },
  {
    title: "LOT 82 CABOOLTURE",
    description: "Design & construct project spanning 27,300 m² of commercial warehouse space.",
    image: project3,
    status: "completed" as const,
  },
  {
    title: "LOT 84 CABOOLTURE",
    description: "Premiere commercial development with 18,500 m² of industrial warehouse units.",
    image: project4,
    status: "completed" as const,
  }
];

type Filter = "all" | "current" | "completed";

export default function ProjectsPage() {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = filter === "all" ? projects : projects.filter(p => p.status === filter);

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
            className="text-white/40 text-lg font-light mt-8 max-w-xl"
          >
            A selection of industrial warehouse and commercial developments delivered across South-East Queensland.
          </motion.p>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex items-center gap-4 mb-16">
            {([
              { label: "All", value: "all" },
              { label: "Current", value: "current" },
              { label: "Completed", value: "completed" },
            ] as { label: string; value: Filter }[]).map((btn) => (
              <button
                key={btn.value}
                onClick={() => setFilter(btn.value)}
                className={`text-xs font-medium uppercase tracking-[0.2em] px-8 py-3.5 transition-colors duration-300 ${
                  filter === btn.value
                    ? "bg-[#C8A24A] text-white"
                    : "border border-black/20 text-black hover:bg-black hover:text-white"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-16 md:gap-20">
            <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden h-[50vh] md:h-[70vh]">
                  <div className="absolute inset-0 bg-black/5 z-10 transition-colors duration-700 group-hover:bg-black/20" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 brightness-110 contrast-105"
                  />
                  <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-white text-xs font-bold uppercase tracking-[0.2em] border border-white/50 px-8 py-4 backdrop-blur-sm">
                      View Project
                    </span>
                  </div>
                </div>

                <div className="pt-6 md:pt-8 flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl md:text-4xl font-serif text-black mb-3 uppercase tracking-wide">{project.title}</h3>
                    <p className="text-black/50 text-sm md:text-base font-light leading-relaxed max-w-2xl">{project.description}</p>
                  </div>
                  <span className={`text-[10px] uppercase tracking-[0.2em] font-medium px-4 py-1.5 shrink-0 mt-2 ${
                    project.status === "current" ? "bg-[#C8A24A]/10 text-[#C8A24A]" : "bg-black/5 text-black/40"
                  }`}>
                    {project.status}
                  </span>
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
