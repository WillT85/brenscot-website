import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/images/hero.png';

export function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-background">
      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <div className="inline-block px-4 py-1.5 mb-6 border border-primary/30 bg-primary/5 text-primary text-xs font-bold uppercase tracking-[0.2em]">
            Est. 2008 • Local & Trusted
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-foreground leading-[1.1] mb-6">
            Building legacies from the <span className="text-primary italic">ground up.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
            We are Brenscot Builder. Quality craftsmanship, solid foundations, and personal service for residential and commercial projects.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="rounded-none h-14 px-8 text-sm font-bold uppercase tracking-widest flex items-center gap-2 group"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="rounded-none h-14 px-8 text-sm font-bold uppercase tracking-widest border-border hover:bg-secondary hover:text-secondary-foreground"
            >
              View Our Work
            </Button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[500px] lg:h-[700px] w-full"
        >
          <div className="absolute inset-0 bg-secondary translate-x-4 translate-y-4 lg:translate-x-8 lg:translate-y-8" />
          <img 
            src={heroImage} 
            alt="Modern home construction site" 
            className="absolute inset-0 w-full h-full object-cover shadow-2xl grayscale-[20%] hover:grayscale-0 transition-all duration-700"
          />
        </motion.div>
      </div>
      
      {/* Decorative architectural line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-border">
        <div className="absolute top-0 left-12 w-px h-24 bg-border -translate-y-full" />
      </div>
    </section>
  );
}
