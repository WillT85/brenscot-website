import { Layout } from "@/components/layout/Layout";
import { news } from "@/lib/data";
import { motion } from "framer-motion";
import heroStory from "@/assets/images/hero-story.png";

export default function News() {
  return (
    <Layout>
      <section className="relative h-[50vh] min-h-[350px] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroStory})` }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-7xl mx-auto px-8 pb-12 w-full z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-serif text-white"
          >
            News & Insights
          </motion.h1>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="space-y-20">
            {news.map((article) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center group cursor-pointer"
              >
                <div className="md:col-span-5 overflow-hidden rounded-lg">
                  <div className="aspect-video md:aspect-[4/3] bg-muted">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
                <div className="md:col-span-7 md:pl-8">
                  <div className="text-sm text-secondary font-semibold mb-3">{article.date}</div>
                  <h2 className="text-2xl md:text-3xl font-serif text-primary mb-4 group-hover:text-secondary transition-colors">{article.title}</h2>
                  <p className="text-foreground/60 text-lg mb-6 leading-relaxed">{article.excerpt}</p>
                  <span className="inline-flex items-center text-sm font-semibold text-secondary hover:text-secondary/80 transition-colors">
                    Read Article &rarr;
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
