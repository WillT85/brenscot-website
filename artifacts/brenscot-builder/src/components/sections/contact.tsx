import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';

export function Contact() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inquiry Received",
      description: "Our team will be in touch shortly.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-32 md:py-48 bg-white text-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-24 lg:gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-5xl md:text-7xl font-serif mb-12 leading-tight">Let's discuss <br/>your project.</h2>
            
            <div className="space-y-12">
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/50 mb-4">Head Office</h4>
                <p className="text-lg font-light leading-relaxed">
                  Level 5, 320 Industrial Drive<br/>
                  Altona North, VIC 3025
                </p>
              </div>
              
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/50 mb-4">Contact</h4>
                <p className="text-lg font-light mb-2 hover:opacity-70 transition-opacity cursor-pointer">enquiries@brenscotbuilders.com.au</p>
                <p className="text-lg font-light hover:opacity-70 transition-opacity cursor-pointer">+61 3 9000 1234</p>
              </div>

              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/50 mb-4">We Deliver Across</h4>
                <p className="text-lg font-light leading-relaxed text-black/60">
                  Victoria · New South Wales · Queensland<br/>
                  South Australia · Western Australia
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <form onSubmit={handleSubmit} className="space-y-12">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="relative">
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    placeholder="Full Name *"
                    className="w-full bg-transparent border-b border-black/20 pb-4 text-lg font-light focus:outline-none focus:border-black transition-colors placeholder:text-black/30 rounded-none" 
                  />
                </div>
                <div className="relative">
                  <input 
                    type="tel" 
                    id="phone" 
                    required 
                    placeholder="Phone Number *"
                    className="w-full bg-transparent border-b border-black/20 pb-4 text-lg font-light focus:outline-none focus:border-black transition-colors placeholder:text-black/30 rounded-none" 
                  />
                </div>
              </div>
              <div className="relative">
                <input 
                  type="email" 
                  id="email" 
                  required 
                  placeholder="Email Address *"
                  className="w-full bg-transparent border-b border-black/20 pb-4 text-lg font-light focus:outline-none focus:border-black transition-colors placeholder:text-black/30 rounded-none" 
                />
              </div>
              <div className="relative">
                <input 
                  type="text" 
                  id="project-type" 
                  placeholder="Project Type (e.g. Distribution Centre, Cold Storage)"
                  className="w-full bg-transparent border-b border-black/20 pb-4 text-lg font-light focus:outline-none focus:border-black transition-colors placeholder:text-black/30 rounded-none" 
                />
              </div>
              <div className="relative">
                <textarea 
                  id="message" 
                  required 
                  rows={4} 
                  placeholder="Project Details *"
                  className="w-full bg-transparent border-b border-black/20 pb-4 text-lg font-light resize-none focus:outline-none focus:border-black transition-colors placeholder:text-black/30 rounded-none" 
                />
              </div>
              <button 
                type="submit" 
                className="bg-black text-white px-12 py-5 text-xs font-bold uppercase tracking-[0.2em] hover:bg-black/80 transition-colors w-full sm:w-auto"
              >
                Submit Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
