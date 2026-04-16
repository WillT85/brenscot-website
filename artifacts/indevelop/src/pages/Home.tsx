import { Layout } from "@/components/layout/Layout";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";

import heroHome from "@/assets/images/hero-home.png";
import heroStory from "@/assets/images/hero-story.png";
import cardsBg from "@/assets/images/cards-bg-final.png";

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
          </motion.div>
        </div>
      </section>


      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              variants={fadeIn}
            >
              <h2 className="text-xs uppercase tracking-wider text-secondary font-semibold mb-3">Our Story</h2>
              <h3 className="text-3xl md:text-4xl font-serif text-primary leading-snug mb-6">
                Building Communities with <span className="text-secondary italic">Purpose</span>
              </h3>
              <p className="text-primary/60 leading-relaxed mb-6">
                Indevelop began with a singular vision: to create properties that speak for themselves. In an industry often defined by noise, we chose quiet authority. We believe that true luxury and premium quality are evident in the details — the materials chosen, the architectural rigor, and the foresight to understand what a community will need tomorrow.
              </p>
              <p className="text-primary/60 leading-relaxed mb-8">
                Over the years, our portfolio has grown to encompass landmark residential towers, state-of-the-art commercial hubs, and strategic industrial estates. But our core philosophy remains unchanged: to deliver enduring value.
              </p>
              <Link
                href="/our-story"
                className="inline-block border-2 border-secondary text-secondary text-sm font-semibold px-8 py-2.5 rounded-full hover:bg-secondary hover:text-white transition-colors"
              >
                Read More
              </Link>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              variants={fadeIn}
              className="relative"
            >
              <div className="rounded-lg overflow-hidden aspect-[4/5]">
                <img
                  src={heroStory}
                  alt="Our Story"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-0">
        <div className="absolute inset-0">
          <div
            className="h-1/2 bg-cover bg-center relative"
            style={{ backgroundImage: `url(${cardsBg})` }}
          >
            <div className="absolute inset-0 bg-black/20" />
          </div>
          <div className="h-1/2 bg-white" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                bg: "bg-[#3a3a3a]",
                textColor: "text-white",
                descColor: "text-white/70",
                btnClass: "border-secondary text-secondary hover:bg-secondary hover:text-white",
                title: "Invest",
                description: "Across everything we do, we always put our investors first. We constantly earn and retain investor's trust by providing exceptional experiences and returns.",
                href: "/our-story"
              },
              {
                bg: "bg-secondary",
                textColor: "text-white",
                descColor: "text-white/80",
                btnClass: "border-white text-white hover:bg-white hover:text-secondary",
                title: "Development",
                description: "Creating purpose-led developments focused on design excellence, environmental sustainability, social benefits and inspirational built environments.",
                href: "/portfolio"
              },
              {
                bg: "bg-[#0a4a4a]",
                textColor: "text-white",
                descColor: "text-white/70",
                btnClass: "border-secondary text-secondary hover:bg-secondary hover:text-white",
                title: "Assets",
                description: "We regenerate buildings for our tenants, bringing them to their full potential and turning them into high-performing assets for investors.",
                href: "/portfolio"
              }
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                variants={fadeIn}
                className={`${card.bg} p-10 rounded-lg flex flex-col`}
              >
                <div className="mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  <span className={`text-lg font-bold tracking-[0.12em] uppercase ${card.textColor}`}>INDEVELOP</span>
                  <span className={`block text-xs tracking-[0.15em] uppercase font-medium ${card.descColor}`}>{card.title}</span>
                </div>
                <p className={`${card.descColor} text-sm leading-relaxed mb-8 flex-1`}>
                  {card.description}
                </p>
                <div>
                  <Link
                    href={card.href}
                    className={`inline-block border-2 text-sm font-semibold px-8 py-2.5 rounded-full transition-colors ${card.btnClass}`}
                  >
                    Learn More
                  </Link>
                </div>
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
