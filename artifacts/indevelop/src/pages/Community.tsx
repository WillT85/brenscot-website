import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import heroCommunity from "@/assets/images/hero-community.png";
import project7 from "@/assets/images/project-7.png";
import project3 from "@/assets/images/project-3.png";

export default function Community() {
  return (
    <Layout>
      <section className="relative pt-48 pb-32 bg-primary text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-luminosity"
          style={{ backgroundImage: `url(${heroCommunity})` }}
        ></div>
        <div className="relative max-w-4xl mx-auto px-8 text-center z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif mb-6"
          >
            Building <span className="text-secondary italic">More</span> Than Buildings
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-white/80 leading-relaxed font-light max-w-2xl mx-auto"
          >
            We believe that our responsibility extends beyond the property line. We are committed to enriching the communities in which we operate.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="aspect-[4/3] bg-muted mb-8 overflow-hidden">
                <img src={project7} alt="Urban green space" className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 transition-all duration-700" />
              </div>
              <h3 className="text-3xl font-serif text-primary mb-4">Urban Renewal & Green Spaces</h3>
              <p className="text-foreground/70 leading-relaxed">
                Every Indevelop project incorporates significant public realm improvements. We dedicate resources to creating accessible green spaces, art installations, and pedestrian-friendly zones that invite connection and interaction.
              </p>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <div className="aspect-[4/3] bg-muted mb-8 overflow-hidden">
                <img src={project3} alt="Community support" className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 transition-all duration-700" />
              </div>
              <h3 className="text-3xl font-serif text-primary mb-4">Local Partnerships</h3>
              <p className="text-foreground/70 leading-relaxed">
                We partner with local charities, arts organizations, and educational institutions in Brisbane. Our annual Indevelop Foundation grants provide critical funding to initiatives that support youth education and urban sustainability.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
