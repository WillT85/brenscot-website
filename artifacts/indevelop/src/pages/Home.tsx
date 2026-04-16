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
      <section className="relative h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroHome})` }}
        />
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 max-w-4xl px-8 md:px-16 mt-20">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            variants={fadeIn}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.1] mb-6"
          >
            Proudly developing high quality residential, commercial & retail projects for <span className="text-secondary italic">20+ years.</span>
          </motion.h1>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            variants={fadeIn}
            className="flex flex-col sm:flex-row items-start gap-6 mt-10"
          >
            <Link
              href="/portfolio"
              className="bg-secondary text-white text-sm font-semibold px-8 py-3.5 rounded-full hover:bg-secondary/90 transition-colors"
            >
              Learn More
            </Link>
            <button
              className="inline-flex items-center gap-3 text-white/90 hover:text-white transition-colors group"
              data-testid="button-play-film"
              aria-label="Play film"
            >
              <span className="w-12 h-12 rounded-full border-2 border-white/60 flex items-center justify-center group-hover:border-white group-hover:bg-white/10 transition-all">
                <Play size={18} className="ml-0.5" />
              </span>
              <span className="text-sm font-medium">Play Film</span>
            </button>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
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
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-serif text-secondary mb-2">{stat.value}</div>
                <div className="text-xs uppercase tracking-wider text-primary/50 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-xs uppercase tracking-wider text-secondary font-semibold mb-3">Featured Work</h2>
              <h3 className="text-3xl md:text-4xl font-serif text-primary">Signatures of the Skyline</h3>
            </div>
            <Link href="/portfolio" className="hidden md:inline-block text-sm font-semibold text-secondary hover:text-secondary/80 transition-colors">
              View All Projects &rarr;
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
                  <div className="relative aspect-[3/4] overflow-hidden bg-muted mb-6 rounded-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-secondary text-white text-[10px] uppercase tracking-widest px-3 py-1.5 font-semibold rounded-full">
                      {project.category}
                    </div>
                  </div>
                  <h4 className="text-xl font-serif text-primary mb-2 group-hover:text-secondary transition-colors">{project.title}</h4>
                  <p className="text-primary/50 text-sm">{project.location}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
