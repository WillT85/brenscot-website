import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
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
      <section className="relative h-[50vh] min-h-[350px] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroContact})` }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-7xl mx-auto px-8 pb-12 w-full z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-serif text-white"
          >
            Contact Us
          </motion.h1>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">

            <motion.div className="lg:col-span-4" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <h2 className="text-3xl font-serif text-primary mb-2">
                Send us a <span className="text-secondary italic">message</span>
              </h2>
              <p className="text-primary/60 mb-10 leading-relaxed">
                Send us a message and we will reply by the next business day.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin size={20} className="text-secondary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-primary">Level 45, The Aurora Tower</p>
                    <p className="text-primary/70">1 Queen Street, Brisbane QLD 4000</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone size={20} className="text-secondary mt-0.5 flex-shrink-0" />
                  <a href="tel:+61730000000" className="text-primary hover:text-secondary transition-colors">+61 (0)7 3000 0000</a>
                </div>
                <div className="flex items-start gap-4">
                  <Mail size={20} className="text-secondary mt-0.5 flex-shrink-0" />
                  <a href="mailto:enquiries@indevelop.com.au" className="text-primary hover:text-secondary transition-colors">enquiries@indevelop.com.au</a>
                </div>
              </div>
            </motion.div>

            <motion.div className="lg:col-span-8" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
              <form onSubmit={handleSubmit} className="space-y-8" data-testid="form-contact">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-primary mb-2">First Name</label>
                    <input required type="text" id="firstName" placeholder="e.g. John" className="w-full bg-transparent border-b border-border py-3 px-0 focus:outline-none focus:border-secondary transition-colors text-primary placeholder:text-primary/30 rounded-none" data-testid="input-name" />
                  </div>
                  <div>
                    <label htmlFor="surname" className="block text-sm font-semibold text-primary mb-2">Surname</label>
                    <input type="text" id="surname" placeholder="e.g. Smith" className="w-full bg-transparent border-b border-border py-3 px-0 focus:outline-none focus:border-secondary transition-colors text-primary placeholder:text-primary/30 rounded-none" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">Email</label>
                    <input required type="email" id="email" placeholder="e.g. john@company.com.au" className="w-full bg-transparent border-b border-border py-3 px-0 focus:outline-none focus:border-secondary transition-colors text-primary placeholder:text-primary/30 rounded-none" data-testid="input-email" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-primary mb-2">Phone</label>
                    <input type="tel" id="phone" placeholder="e.g. 0400 000 000" className="w-full bg-transparent border-b border-border py-3 px-0 focus:outline-none focus:border-secondary transition-colors text-primary placeholder:text-primary/30 rounded-none" data-testid="input-phone" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="reason" className="block text-sm font-semibold text-primary mb-2">How can we help?</label>
                    <select required id="reason" className="w-full bg-transparent border-b border-border py-3 px-0 focus:outline-none focus:border-secondary transition-colors text-primary appearance-none rounded-none" data-testid="select-reason">
                      <option value="">Select one...</option>
                      <option value="investment">Investment Opportunities</option>
                      <option value="sales">Sales & Leasing</option>
                      <option value="media">Media & PR</option>
                      <option value="general">General Enquiry</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="business" className="block text-sm font-semibold text-primary mb-2">Business Name</label>
                    <input type="text" id="business" placeholder="Business Name*" className="w-full bg-transparent border-b border-border py-3 px-0 focus:outline-none focus:border-secondary transition-colors text-primary placeholder:text-primary/30 rounded-none" />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">Message</label>
                  <textarea required id="message" rows={4} placeholder="What's on your mind?*" className="w-full bg-transparent border-b border-border py-3 px-0 focus:outline-none focus:border-secondary transition-colors text-primary resize-none placeholder:text-primary/30 rounded-none" data-testid="input-message"></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-secondary text-white py-3.5 px-10 rounded-full text-sm font-semibold hover:bg-secondary/90 transition-colors disabled:opacity-50"
                  data-testid="button-submit-contact"
                >
                  {isSubmitting ? "Sending..." : "Submit Enquiry"}
                </button>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 bg-secondary/10 border border-secondary/30 text-primary rounded-lg"
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
