import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import project1 from '@/assets/images/project-1.png';
import project2 from '@/assets/images/project-2.png';
import project3 from '@/assets/images/project-3.png';
import project4 from '@/assets/images/project-4.png';

const projects = [
  {
    title: "The Horizon",
    category: "New Build",
    image: project1,
  },
  {
    title: "Lumina Residence",
    category: "Interior",
    image: project2,
  },
  {
    title: "Azure Point",
    category: "Exterior",
    image: project3,
  },
  {
    title: "Oakwood Estate",
    category: "Renovation",
    image: project4,
  }
];

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section id="projects" className="py-32 md:py-48 bg-white" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12 mb-20">
        <span className="text-black/50 font-sans uppercase tracking-[0.2em] text-xs mb-8 block">Collection</span>
        <h2 className="text-5xl md:text-7xl font-serif text-black leading-tight">Featured <br className="hidden md:block"/>Landmarks.</h2>
      </div>

      {/* Horizontal Scrolling Container */}
      <div className="w-full overflow-x-auto hide-scrollbar snap-x snap-mandatory flex gap-8 px-6 md:px-12 pb-12 cursor-grab active:cursor-grabbing">
        {projects.map((project, index) => (
          <motion.div 
            key={project.title}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="snap-center shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw] h-[60vh] md:h-[75vh] relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-black/20 z-10 transition-colors duration-700 group-hover:bg-black/40" />
            
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            />
            
            {/* Hover overlay 'View Project' */}
            <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="text-white text-xs font-bold uppercase tracking-[0.2em] border border-white/50 px-8 py-4 backdrop-blur-sm">
                View Project
              </span>
            </div>

            {/* Permanent Info Bottom Left */}
            <div className="absolute bottom-0 left-0 p-8 md:p-12 z-30 transition-transform duration-700 group-hover:-translate-y-4">
              <span className="text-white/80 text-[10px] uppercase tracking-[0.3em] mb-4 block">
                {project.category}
              </span>
              <h3 className="text-3xl md:text-4xl font-serif text-white">{project.title}</h3>
            </div>
          </motion.div>
        ))}
        {/* Spacer at the end so last item can be scrolled past slightly */}
        <div className="snap-center shrink-0 w-[10vw]" />
      </div>
    </section>
  );
}