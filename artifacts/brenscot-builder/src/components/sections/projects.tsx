import { motion } from 'framer-motion';
import project1 from '@assets/image_1776005185036.png';
import project2 from '@assets/13_02_extt_сс3_Post_Ps_1776005476200.jpg';
import project3 from '@/assets/images/project-3.png';
import project4 from '@/assets/images/project-4.png';

const projects = [
  {
    title: "566 Rode Rd, Chermside",
    category: "Premiere Commercial",
    area: "4,895 m²",
    description: "13 versatile warehouse units",
    image: project1,
  },
  {
    title: "34-40 Robson St, Clontarf",
    category: "Industrial Development",
    area: "62,000 m²",
    description: "",
    image: project2,
  },
  {
    title: "Apex Logistics Hub",
    category: "Logistics Facility",
    area: "41,200 m²",
    description: "",
    image: project3,
  },
  {
    title: "ColdChain Processing Facility",
    category: "Specialised Industrial",
    area: "19,800 m²",
    description: "",
    image: project4,
  },
  {
    title: "Northgate Industrial Park",
    category: "Industrial Development",
    area: "35,600 m²",
    description: "",
    image: project1,
  },
  {
    title: "Eagle Farm Distribution Centre",
    category: "Logistics Facility",
    area: "52,400 m²",
    description: "",
    image: project2,
  },
  {
    title: "Brendale Commercial Estate",
    category: "Design & Construct",
    area: "27,300 m²",
    description: "",
    image: project3,
  },
  {
    title: "Hemmant Warehouse Complex",
    category: "Premiere Commercial",
    area: "18,500 m²",
    description: "",
    image: project4,
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12 mb-16">
        <h2 className="text-5xl md:text-7xl font-serif text-black leading-tight">Projects and<br /> Developments.</h2>
      </div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: (index % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden h-[35vh] md:h-[40vh]">
                <div className="absolute inset-0 bg-black/10 z-10 transition-colors duration-700 group-hover:bg-black/30" />
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
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-30 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                  <span className="text-white/70 text-[9px] uppercase tracking-[0.3em] mb-1 block">
                    {project.category}
                  </span>
                  <h3 className="text-lg md:text-xl font-serif text-white leading-snug">{project.title}</h3>
                  <span className="text-white/50 text-[9px] uppercase tracking-[0.2em]">
                    {project.area} {project.description && `· ${project.description}`}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
