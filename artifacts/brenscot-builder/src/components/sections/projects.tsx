import { motion } from 'framer-motion';
import project1 from '@/assets/images/project-1.png';
import project2 from '@/assets/images/project-2.png';
import project3 from '@/assets/images/project-3.png';

const projects = [
  {
    title: "Oakwood Residence",
    category: "New Construction",
    image: project1,
    description: "A luxury custom home featuring expansive timber framing and modern concrete finishes."
  },
  {
    title: "Meridian Offices",
    category: "Commercial",
    image: project2,
    description: "Boutique commercial space blending raw industrial materials with contemporary design."
  },
  {
    title: "Heritage Restoration",
    category: "Renovation",
    image: project3,
    description: "Meticulous restoration of precise timber joints, preserving history while modernizing utility."
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Showcase</span>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground">Featured Projects.</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden mb-6 aspect-[4/3] bg-muted">
                <div className="absolute inset-0 bg-secondary/20 group-hover:bg-transparent transition-colors z-10 duration-500" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out grayscale-[20%] group-hover:grayscale-0"
                />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">
                {project.category}
              </span>
              <h3 className="text-2xl font-serif text-foreground mb-3">{project.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
