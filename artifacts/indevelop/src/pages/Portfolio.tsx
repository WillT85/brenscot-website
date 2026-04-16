import { Layout } from "@/components/layout/Layout";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { useState } from "react";

const categories = ["All", "Residential", "Commercial", "Retail", "Industrial"];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All"
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <Layout>
      <section className="pt-40 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif text-primary mb-12"
          >
            Our Portfolio
          </motion.h1>

          <div className="flex flex-wrap gap-3 border-b border-border pb-6 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                aria-pressed={filter === cat}
                data-testid={`filter-${cat}`}
                className={`text-sm font-medium px-5 py-2 rounded-full transition-all ${
                  filter === cat
                    ? "bg-secondary text-white"
                    : "text-primary/60 hover:text-primary hover:bg-muted"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group"
              >
                <Link href={`/portfolio/${project.id}`} data-testid={`project-card-${project.id}`}>
                  <div className="relative aspect-[4/3] md:aspect-video overflow-hidden bg-muted mb-6 rounded-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-secondary text-white text-[10px] uppercase tracking-widest px-3 py-1.5 font-semibold rounded-full">
                      {project.category}
                    </div>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-serif text-primary mb-2 group-hover:text-secondary transition-colors">{project.title}</h3>
                      <p className="text-primary/50 text-sm">{project.status}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-primary/50 text-sm mb-1">{project.location}</p>
                      <div className="text-sm font-semibold text-secondary">{project.value}</div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="py-20 text-center text-primary/50">
              No projects found in this category.
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
