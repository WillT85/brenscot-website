import { Home, Wrench, Building2, ClipboardCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "New Home Construction",
    description: "From concept to keys in hand, we build custom homes tailored to your lifestyle with uncompromising attention to detail.",
    icon: Home
  },
  {
    title: "Renovations & Extensions",
    description: "Breathe new life into your existing space. We seamlessly blend new additions with your home's original character.",
    icon: Wrench
  },
  {
    title: "Commercial Projects",
    description: "Functional, striking commercial spaces built on time and on budget to help your business thrive.",
    icon: Building2
  },
  {
    title: "Project Management",
    description: "Complete oversight of your build. We handle the trades, schedules, and materials so you don't have to.",
    icon: ClipboardCheck
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">What we build.</h2>
          <p className="text-secondary-foreground/70 text-lg leading-relaxed">
            Whether we're pouring the foundation for a commercial complex or framing your family's forever home, our approach remains the same: honest work, done right the first time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background/5 border border-border/10 p-8 hover:bg-background/10 transition-colors group"
            >
              <div className="w-14 h-14 bg-primary/10 text-primary flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-4">{service.title}</h3>
              <p className="text-secondary-foreground/70 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
