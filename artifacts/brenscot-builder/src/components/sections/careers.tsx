import { motion } from 'framer-motion';
import { Briefcase, ArrowRight } from 'lucide-react';

const openRoles = [
  {
    title: "Site Supervisor",
    type: "Full-time",
    location: "On-site",
    description: "Lead and coordinate daily site operations, manage subcontractors, and ensure projects are delivered safely and on schedule.",
  },
  {
    title: "Estimator / Quantity Surveyor",
    type: "Full-time",
    location: "Office / Hybrid",
    description: "Prepare accurate cost estimates and tender submissions for residential and commercial construction projects.",
  },
  {
    title: "Carpenter & Joiner",
    type: "Full-time",
    location: "On-site",
    description: "Skilled tradesperson to work across new builds and renovation projects. Experience with framing, formwork, and finishing preferred.",
  },
];

export function Careers() {
  return (
    <section id="careers" className="py-24 bg-muted">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Join Our Team</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Build your career with us.</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We're always looking for skilled, motivated people to join the Brenscot Builders family. We invest in our people and value hard work, integrity, and a passion for quality.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {openRoles.map((role, index) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background border border-border p-8 group hover:border-primary transition-colors"
            >
              <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center mb-6">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">{role.title}</h3>
              <div className="flex gap-3 mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-primary border border-primary/30 bg-primary/5 px-2 py-1">{role.type}</span>
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground border border-border px-2 py-1">{role.location}</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{role.description}</p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary hover:gap-3 transition-all"
                data-testid={`button-apply-${index}`}
              >
                Apply Now <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-sm"
        >
          Don't see a role that suits you?{' '}
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-primary font-bold hover:underline"
          >
            Send us your resume anyway
          </button>{' '}
          — we're always keen to meet good people.
        </motion.p>
      </div>
    </section>
  );
}
