import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import heroStory from "@/assets/images/hero-story.png";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function OurStory() {
  return (
    <Layout>
      <section className="relative pt-48 pb-32 bg-primary text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-luminosity"
          style={{ backgroundImage: `url(${heroStory})` }}
        ></div>
        <div className="relative max-w-4xl mx-auto px-8 text-center z-10">
          <motion.h1 
            initial="hidden" animate="visible" variants={fadeIn} transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif mb-6"
          >
            A Legacy of <span className="text-secondary italic">Excellence</span>
          </motion.h1>
          <motion.p 
            initial="hidden" animate="visible" variants={fadeIn} transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-white/80 leading-relaxed font-light"
          >
            Founded in Brisbane, Indevelop has spent over two decades shaping the urban landscape of South East Queensland. We build spaces that inspire, endure, and elevate the standard of living and working.
          </motion.p>
        </div>
      </section>

      <section className="py-32 bg-background">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            className="prose prose-lg prose-headings:font-serif prose-headings:font-normal prose-headings:text-primary text-foreground/80 mx-auto"
          >
            <h2 className="text-3xl text-center mb-12">The Foundation</h2>
            <p className="drop-cap">
              Indevelop began with a singular vision: to create properties that speak for themselves. In an industry often defined by noise, we chose quiet authority. We believe that true luxury and premium quality are evident in the details—the materials chosen, the architectural rigor, and the foresight to understand what a community will need tomorrow.
            </p>
            <p>
              Over the years, our portfolio has grown to $1.8 billion, encompassing landmark residential towers, state-of-the-art commercial hubs, and strategic industrial estates. But our core philosophy remains unchanged: to deliver enduring value.
            </p>
            
            <h3 className="text-2xl mt-16 mb-8 text-center text-secondary">Milestones</h3>
            
            <div className="space-y-12">
              {[
                { year: "1998", text: "Founded in Brisbane with a focus on boutique residential developments." },
                { year: "2005", text: "Expanded into commercial property, delivering our first A-grade office space." },
                { year: "2012", text: "Portfolio surpasses $500M with key acquisitions in the CBD." },
                { year: "2020", text: "Launched the $800M Eagle Street precinct project, a transformative urban renewal initiative." },
                { year: "2024", text: "Current portfolio valuation reaches $1.8 billion across 40 completed projects." }
              ].map((m) => (
                <div key={m.year} className="flex flex-col md:flex-row gap-6 items-baseline border-b border-border pb-6">
                  <div className="text-4xl font-serif text-secondary md:w-32 flex-shrink-0">{m.year}</div>
                  <div className="text-lg">{m.text}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
