import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { useState } from "react";
import heroContact from "@/assets/images/hero-contact.png";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <Layout>
      <section className="relative pt-48 pb-32 bg-primary text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-luminosity"
          style={{ backgroundImage: `url(${heroContact})` }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-8 z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif mb-6"
          >
            Get In Touch
          </motion.h1>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <h2 className="text-3xl font-serif text-primary mb-8">Head Office</h2>
              <div className="space-y-8 text-foreground/80">
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-secondary font-semibold mb-2">Address</h3>
                  <p className="text-lg">
                    Level 45, The Aurora Tower<br />
                    1 Queen Street<br />
                    Brisbane QLD 4000<br />
                    Australia
                  </p>
                  <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="inline-block mt-4 text-xs uppercase tracking-widest font-semibold text-primary border-b border-primary/20 pb-1 hover:text-secondary hover:border-secondary transition-colors" data-testid="link-directions">
                    Get Directions
                  </a>
                </div>
                
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-secondary font-semibold mb-2">Contact Details</h3>
                  <p className="text-lg">
                    <a href="tel:+61730000000" className="hover:text-secondary transition-colors">+61 (0)7 3000 0000</a><br />
                    <a href="mailto:enquiries@indevelop.com.au" className="hover:text-secondary transition-colors">enquiries@indevelop.com.au</a>
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
              <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 md:p-12 shadow-xl border border-border" data-testid="form-contact">
                <h3 className="text-2xl font-serif text-primary mb-8">Direct Enquiry</h3>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-xs uppercase tracking-widest text-primary/70 font-semibold mb-2">Full Name</label>
                    <input required type="text" id="name" className="w-full bg-transparent border-b border-border py-3 px-0 focus:outline-none focus:border-secondary transition-colors text-primary" data-testid="input-name" />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-xs uppercase tracking-widest text-primary/70 font-semibold mb-2">Email</label>
                      <input required type="email" id="email" className="w-full bg-transparent border-b border-border py-3 px-0 focus:outline-none focus:border-secondary transition-colors text-primary" data-testid="input-email" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs uppercase tracking-widest text-primary/70 font-semibold mb-2">Phone</label>
                      <input type="tel" id="phone" className="w-full bg-transparent border-b border-border py-3 px-0 focus:outline-none focus:border-secondary transition-colors text-primary" data-testid="input-phone" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="reason" className="block text-xs uppercase tracking-widest text-primary/70 font-semibold mb-2">Reason for Contact</label>
                    <select required id="reason" className="w-full bg-transparent border-b border-border py-3 px-0 focus:outline-none focus:border-secondary transition-colors text-primary appearance-none rounded-none" data-testid="select-reason">
                      <option value="">Select an option</option>
                      <option value="investment">Investment Opportunities</option>
                      <option value="sales">Sales & Leasing</option>
                      <option value="media">Media & PR</option>
                      <option value="general">General Enquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs uppercase tracking-widest text-primary/70 font-semibold mb-2">Message</label>
                    <textarea required id="message" rows={4} className="w-full bg-transparent border-b border-border py-3 px-0 focus:outline-none focus:border-secondary transition-colors text-primary resize-none" data-testid="input-message"></textarea>
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white py-4 tracking-widest uppercase text-xs font-semibold hover:bg-secondary transition-colors disabled:opacity-50 mt-8"
                  data-testid="button-submit-contact"
                >
                  {isSubmitting ? "Sending..." : "Submit Enquiry"}
                </button>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 p-4 bg-secondary/10 border border-secondary/30 text-primary text-center"
                    data-testid="text-form-success"
                  >
                    <p className="font-serif text-lg">Message Received</p>
                    <p className="text-sm text-primary/70 mt-1">An Indevelop representative will be in touch shortly.</p>
                  </motion.div>
                )}
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
