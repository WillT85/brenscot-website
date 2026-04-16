import { Layout } from "@/components/layout/Layout";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { Play } from "lucide-react";
import heroHome from "@/assets/images/hero-home.png";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-primary overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
          style={{ backgroundImage: `url(${heroHome})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
        
        <div className="relative z-10 text-center max-w-5xl px-8 mt-20">
          <motion.h1 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            variants={fadeIn}
            className="text-5xl md:text-7xl font-serif mb-6 text-white leading-[1.1]"
          >
            Proudly developing high quality residential, commercial &amp; retail projects for 20+ years.
          </motion.h1>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            variants={fadeIn}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12"
          >
            <button
              className="inline-flex items-center gap-3 text-white/90 hover:text-white transition-colors group"
              data-testid="button-play-film"
              aria-label="Play film"
            >
              <span className="w-12 h-12 rounded-full border-2 border-white/60 flex items-center justify-center group-hover:border-white group-hover:bg-white/10 transition-all">
                <Play size={18} className="ml-0.5" />
              </span>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold">Play Film</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-background text-primary">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 divide-y md:divide-y-0 md:divide-x divide-primary/10">
            {[
              { value: "$1.8B", label: "Portfolio Value" },
              { value: "25+", label: "Years Experience" },
              { value: "40", label: "Projects Delivered" },
              { value: "100%", label: "Commitment to Excellence" }
            ].map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                variants={fadeIn}
                className="text-center pt-8 md:pt-0"
              >
                <div className="text-5xl font-serif text-secondary mb-2">{stat.value}</div>
                <div className="text-xs uppercase tracking-widest text-primary/60 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-32 bg-muted">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-xs uppercase tracking-widest text-secondary font-semibold mb-4">Featured Work</h2>
              <h3 className="text-4xl font-serif text-primary">Signatures of the Skyline</h3>
            </div>
            <Link href="/portfolio" className="hidden md:inline-block text-xs uppercase tracking-widest font-semibold text-primary hover:text-secondary transition-colors border-b border-primary/20 pb-1 hover:border-secondary">
              View All Projects
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, i) => (
              <motion.div 
                key={project.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                variants={fadeIn}
                className="group cursor-pointer"
              >
                <Link href={`/portfolio/${project.id}`}>
                  <div className="relative aspect-[3/4] overflow-hidden bg-primary mb-6">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-primary text-[10px] uppercase tracking-widest px-3 py-1 font-semibold">
                      {project.category}
                    </div>
                  </div>
                  <h4 className="text-xl font-serif text-primary mb-2 group-hover:text-secondary transition-colors">{project.title}</h4>
                  <p className="text-primary/60 text-sm">{project.location}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
