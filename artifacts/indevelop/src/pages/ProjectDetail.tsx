import { Layout } from "@/components/layout/Layout";
import { projects } from "@/lib/data";
import { Link, useParams } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import NotFound from "./not-found";

export default function ProjectDetail() {
  const params = useParams();
  const project = projects.find(p => p.id === params.id);
  const [activeImage, setActiveImage] = useState(0);

  if (!project) return <NotFound />;

  const gallery = project.gallery || [project.image];

  return (
    <Layout>
      <section className="pt-32 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm font-medium text-primary/60 hover:text-secondary transition-colors mb-12" data-testid="link-back-portfolio">
            <ArrowLeft size={14} /> Back to Portfolio
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4 flex flex-col justify-end pb-8">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                <div className="text-sm text-secondary font-semibold mb-4">{project.category}</div>
                <h1 className="text-4xl md:text-5xl font-serif text-primary mb-8 leading-tight">{project.title}</h1>

                <div className="space-y-6 pt-8 border-t border-border">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-primary/40 font-semibold mb-1">Location</div>
                    <div className="text-primary">{project.location}</div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-primary/40 font-semibold mb-1">Status</div>
                    <div className="text-primary">{project.status}</div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-primary/40 font-semibold mb-1">Project Value</div>
                    <div className="text-primary">{project.value}</div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-primary/40 font-semibold mb-1">Completion</div>
                    <div className="text-primary">{project.completion}</div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="aspect-video w-full bg-muted overflow-hidden rounded-lg">
                  <img src={gallery[activeImage]} alt={`${project.title} - Image ${activeImage + 1}`} className="w-full h-full object-cover" />
                </div>

                {gallery.length > 1 && (
                  <>
                    <button
                      onClick={() => setActiveImage(prev => prev === 0 ? gallery.length - 1 : prev - 1)}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur p-2 rounded-full hover:bg-white transition-colors shadow-sm"
                      aria-label="Previous image"
                      data-testid="button-gallery-prev"
                    >
                      <ChevronLeft size={20} className="text-primary" />
                    </button>
                    <button
                      onClick={() => setActiveImage(prev => prev === gallery.length - 1 ? 0 : prev + 1)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur p-2 rounded-full hover:bg-white transition-colors shadow-sm"
                      aria-label="Next image"
                      data-testid="button-gallery-next"
                    >
                      <ChevronRight size={20} className="text-primary" />
                    </button>
                  </>
                )}
              </motion.div>

              {gallery.length > 1 && (
                <div className="flex gap-3 mt-4">
                  {gallery.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(i)}
                      className={`w-24 h-16 overflow-hidden rounded-md border-2 transition-all ${
                        activeImage === i ? "border-secondary opacity-100" : "border-transparent opacity-60 hover:opacity-80"
                      }`}
                      aria-label={`View image ${i + 1}`}
                      data-testid={`button-gallery-thumb-${i}`}
                    >
                      <img src={img} alt={`${project.title} thumbnail ${i + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
                className="prose prose-lg text-foreground/70 max-w-none mt-12"
              >
                <p className="text-xl leading-relaxed">{project.description}</p>
                <p>
                  At Indevelop, we approach every project as a unique opportunity to enhance the urban fabric. {project.title} represents the pinnacle of {project.category.toLowerCase()} development, integrating cutting-edge design with sustainable practices.
                </p>
                <p>
                  Every material was carefully selected to ensure longevity and aesthetic timelessness, reflecting our commitment to creating spaces that hold their value for generations.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
