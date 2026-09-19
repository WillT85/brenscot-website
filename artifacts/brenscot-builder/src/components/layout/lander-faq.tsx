import { motion } from "framer-motion";
import type { FaqItem } from "@/seo/config";

export function LanderFaq({ faqs }: { faqs: FaqItem[] }) {
  if (!faqs.length) {
    return null;
  }

  return (
    <section className="py-20 md:py-32 bg-white border-t border-black/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <span className="text-black/50 font-sans uppercase tracking-[0.2em] text-xs mb-8 block">
            Frequently asked
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-black leading-tight">
            Questions we are asked first.
          </h2>
        </div>
        <div className="max-w-3xl space-y-10">
          {faqs.map((item, index) => (
            <motion.div
              key={item.question}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="pt-8 border-t border-black/10"
            >
              <h3 className="text-2xl font-serif text-black mb-4">{item.question}</h3>
              <p className="text-black/60 font-light leading-relaxed">{item.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
