import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { projects } from '@/data/projects';

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
              key={`${project.title}-${index}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: (index % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href={`/projects/${project.slug}`} className="group block cursor-pointer">
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
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{ objectPosition: project.imagePosition, transform: project.imageScale ? `scale(${project.imageScale})` : undefined }}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 brightness-110 contrast-105"
                  />
                )}
                <div className="absolute inset-0 z-20 flex flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[#0b1526]/15 backdrop-blur-sm">
                  <div className="flex-1 flex items-center justify-center">
                    <span className="text-white text-lg md:text-2xl font-serif uppercase tracking-[0.3em] drop-shadow">Brenscot</span>
                  </div>
                  <div className="bg-[#0b1526] text-white text-center py-2 md:py-3">
                    <span className="block text-[9px] md:text-[10px] font-bold uppercase tracking-[0.18em]">
                      View Project
                    </span>
                    <span className="block mt-0.5 text-[8px] md:text-[9px] font-normal normal-case tracking-[0.06em] text-white/65">
                      {project.title}
                    </span>
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
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/projects"
            className="inline-block text-xs font-medium uppercase tracking-[0.2em] border border-[#0b1526] text-[#0b1526] bg-transparent px-10 py-4 hover:bg-[#0b1526] hover:text-[#C8A24A] transition-colors duration-300"
          >
            View more Developments
          </Link>
        </div>
      </div>
    </section>
  );
}
