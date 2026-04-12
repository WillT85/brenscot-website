import { motion } from 'framer-motion';

const steps = [
  {
    num: "01",
    title: "Consultation & Quote",
    desc: "We meet on-site to understand your vision, discuss feasibility, and provide a clear, honest estimate."
  },
  {
    num: "02",
    title: "Planning & Permits",
    desc: "We handle the bureaucratic heavy lifting, ensuring all architectural plans meet code and securing necessary permits."
  },
  {
    num: "03",
    title: "Construction Phase",
    desc: "Ground breaks. You receive regular updates and site walkthroughs as we build with precision."
  },
  {
    num: "04",
    title: "Handover",
    desc: "A final meticulous inspection. We hand over the keys only when the work meets our exacting standards."
  }
];

export function Process() {
  return (
    <section id="process" className="py-24 bg-background overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4 block">How We Work</span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">Built on a solid process.</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="text-6xl font-serif font-bold text-muted/60 absolute -top-8 -left-4 z-0 pointer-events-none select-none">
                {step.num}
              </div>
              <div className="relative z-10 pt-6">
                <div className="w-12 h-1 bg-primary mb-6" />
                <h3 className="text-xl font-serif font-bold mb-4">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background architectural elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full border-l border-border/50 hidden lg:block" />
      <div className="absolute top-1/2 left-0 w-full h-px border-t border-border/50 hidden lg:block" />
    </section>
  );
}
