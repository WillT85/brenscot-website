import { motion } from 'framer-motion';
import { HardHat, ShieldCheck, Ruler } from 'lucide-react';

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "120+", label: "Projects Completed" },
  { value: "100%", label: "Client Satisfaction" }
];

export function About() {
  return (
    <section id="about" className="py-24 bg-muted">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">A builder you can actually shake hands with.</h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed mb-10">
              <p>
                Founded on the principle that good work speaks for itself, Brenscot Builder isn't a faceless corporation. We are local builders who live in the communities we help build.
              </p>
              <p>
                We don't cut corners, we don't hide behind jargon, and we don't leave a job until you're proud to call it yours. Our reputation is built into every foundation we pour and every beam we raise.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-serif text-foreground mb-2">{stat.value}</div>
                  <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid gap-6"
          >
            <div className="bg-background p-8 shadow-sm flex gap-6 items-start">
              <div className="mt-1 bg-primary/10 p-3 text-primary">
                <HardHat className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold mb-3">Hands-On Approach</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">Our site supervisors aren't just managers; they are master craftsmen who know every inch of your build.</p>
              </div>
            </div>
            <div className="bg-background p-8 shadow-sm flex gap-6 items-start ml-0 md:ml-8">
              <div className="mt-1 bg-primary/10 p-3 text-primary">
                <Ruler className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold mb-3">Uncompromising Quality</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">We source premium materials and work only with trusted, specialized tradespeople who share our standards.</p>
              </div>
            </div>
            <div className="bg-background p-8 shadow-sm flex gap-6 items-start">
              <div className="mt-1 bg-primary/10 p-3 text-primary">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold mb-3">Transparent Communication</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">No surprises on your invoice. We keep you informed at every stage of the construction process.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
