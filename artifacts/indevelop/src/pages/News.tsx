import { Layout } from "@/components/layout/Layout";
import { news } from "@/lib/data";
import { motion } from "framer-motion";
import heroStory from "@/assets/images/hero-story.png";

export default function News() {
  return (
    <Layout>
      <section className="relative pt-48 pb-32 bg-primary text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-luminosity"
          style={{ backgroundImage: `url(${heroStory})` }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-8 z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif mb-6"
          >
            News & Insights
          </motion.h1>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-8">

          <div className="space-y-24">
            {news.map((article, i) => (
              <motion.article 
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center group cursor-pointer"
              >
                <div className="md:col-span-5 overflow-hidden">
                  <div className="aspect-video md:aspect-[4/3] bg-muted">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    />
                  </div>
                </div>
                <div className="md:col-span-7 md:pl-8">
                  <div className="text-xs uppercase tracking-widest text-secondary font-semibold mb-4">{article.date}</div>
                  <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6 group-hover:text-secondary transition-colors">{article.title}</h2>
                  <p className="text-foreground/70 text-lg mb-8 leading-relaxed">{article.excerpt}</p>
                  <span className="inline-flex items-center text-xs uppercase tracking-widest font-semibold text-primary border-b border-primary/20 pb-1 group-hover:border-secondary transition-colors">
                    Read Article
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
