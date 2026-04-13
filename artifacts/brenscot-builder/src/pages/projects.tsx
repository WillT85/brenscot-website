import { motion } from 'framer-motion';
import { NavBar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
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

export default function ProjectsPage() {
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden h-[50vh] md:h-[60vh]">
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

                <div className="pt-6">
                  <span className="text-black/40 text-[10px] uppercase tracking-[0.3em] mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-serif text-black mb-2 leading-snug">{project.title}</h3>
                  <span className="text-black/50 text-[10px] uppercase tracking-[0.2em]">
                    {project.area} {project.description && `· ${project.description}`}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
