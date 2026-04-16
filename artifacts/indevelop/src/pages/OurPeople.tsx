import { Layout } from "@/components/layout/Layout";
import { team } from "@/lib/data";
import { motion } from "framer-motion";
import heroImage from "@/assets/images/hero-home.png";

export default function OurPeople() {
  return (
    <Layout>
      <section className="relative h-[70vh] min-h-[500px] flex items-end bg-primary overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-primary/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-8 pb-16 w-full">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif text-white mb-4"
          >
            Our People Are{" "}
            <span className="italic text-secondary">Our Greatest Asset</span>
          </motion.h1>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 max-w-3xl"
          >
            <h2 className="text-xs uppercase tracking-widest text-secondary font-semibold mb-4">Leadership</h2>
            <p className="text-lg text-primary/70">
              The visionaries behind our $1.8 billion portfolio. A team defined by experience, rigor, and an uncompromising standard of quality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {team.map((member, i) => (
              <motion.div 
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group"
              >
                <div className="aspect-[3/4] bg-primary mb-6 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <h3 className="text-2xl font-serif text-primary mb-1">{member.name}</h3>
                <div className="text-xs uppercase tracking-widest text-secondary font-semibold">{member.title}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
