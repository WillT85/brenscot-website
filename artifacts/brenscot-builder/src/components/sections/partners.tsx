import { motion } from 'framer-motion';
import { Handshake } from 'lucide-react';

const partners = [
  { name: "Austral Bricks", category: "Materials" },
  { name: "James Hardie", category: "Cladding" },
  { name: "Colorbond Steel", category: "Roofing" },
  { name: "Caroma", category: "Plumbing" },
  { name: "Dulux", category: "Coatings" },
  { name: "CSR Gyprock", category: "Interiors" },
];

export function Partners() {
  return (
    <section id="partners" className="py-24 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Trusted Partners</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Built on strong relationships.</h2>
          <p className="text-secondary-foreground/70 text-lg leading-relaxed">
            We work with Australia's most trusted suppliers and manufacturers to ensure every Brenscot project uses materials that stand the test of time. Our partnerships mean better pricing, faster supply, and guaranteed quality for our clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              className="bg-secondary-foreground/5 border border-secondary-foreground/10 p-6 flex flex-col items-center justify-center text-center hover:bg-secondary-foreground/10 transition-colors group"
              data-testid={`partner-card-${index}`}
            >
              <div className="w-10 h-10 bg-primary/20 text-primary flex items-center justify-center mb-3 group-hover:bg-primary/30 transition-colors">
                <Handshake className="w-5 h-5" />
              </div>
              <p className="font-serif font-bold text-sm mb-1">{partner.name}</p>
              <p className="text-xs text-secondary-foreground/50 uppercase tracking-widest">{partner.category}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-secondary-foreground/10 p-10 bg-secondary-foreground/5"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-2">Become a partner.</h3>
              <p className="text-secondary-foreground/60 text-sm max-w-lg">
                Are you a supplier, tradesperson, or industry professional interested in working with Brenscot Builders? We'd love to hear from you.
              </p>
            </div>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex-shrink-0 bg-primary text-primary-foreground px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors"
              data-testid="button-become-partner"
            >
              Get in Touch
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
