import { motion } from 'framer-motion';
import { useLocation } from 'wouter';
import project1 from '@assets/image_1776005185036.png';
import project2 from '@assets/13_02_extt_сс3_Post_Ps_1776005476200.jpg';
import project3 from '@/assets/images/project-3.png';
import project4 from '@/assets/images/project-4.png';

const projects = [
  {
    title: "15 King Court, North Lakes",
    image: project1,
  },
  {
    title: "59 Alta Road, Caboolture",
    image: project2,
  },
  {
    title: "24 Robertson St, Brendale",
    image: project3,
  },
  {
    title: "34-36 Bell-Are Ave, Northgate",
    image: project4,
  },
  {
    title: "Rode Rd, Chermside",
    image: project1,
  },
  {
    title: "440 Progress Rd, Wacol",
    image: project2,
  },
  {
    title: "535 Zillmere, Zillmere",
    image: project3,
  },
  {
    title: "34-40 Robson St Clontarf",
    image: project4,
  }
];

export function Projects() {
  const [, setLocation] = useLocation();

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
                <div className="absolute bottom-0 left-0 right-0 z-30 p-4 md:p-5">
                  <h3 className="inline-block text-xs font-serif font-semibold text-white tracking-wide uppercase">
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
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={() => { setLocation('/projects'); window.scrollTo({ top: 0 }); }}
            className="text-xs font-medium uppercase tracking-[0.2em] border border-[#0b1526] text-[#0b1526] bg-transparent px-10 py-4 hover:bg-[#0b1526] hover:text-[#C8A24A] transition-colors duration-300"
          >
            View more Developments
          </button>
        </div>
      </div>
    </section>
  );
}
