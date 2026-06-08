import { useState } from 'react';
import { motion } from 'framer-motion';
import { NavBar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { useToast } from '@/hooks/use-toast';

export default function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    reason: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inquiry Received",
      description: "Our team will be in touch shortly.",
    });
    setFormData({ name: '', phone: '', email: '', reason: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      <NavBar lightBackground />

      <main className="pt-32 md:pt-44 pb-32 md:pb-48">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-5xl md:text-7xl text-[#0b1526] mb-10 leading-tight"
            >
              Get In Touch
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[#0b1526]/60 text-lg font-light leading-relaxed mb-16 max-w-md"
            >
              Brenscot Builders is headquartered in Brisbane, with operations across South-East Queensland.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mb-16"
            >
              <h3 className="font-serif text-xl text-[#0b1526] mb-4">Contact Us</h3>
              <a
                href="mailto:enquiries@brenscot.com.au"
                className="text-[#0b1526]/70 text-[15px] font-light leading-relaxed hover:text-[#0b1526] transition-colors block"
              >
                enquiries@brenscot.com.au
              </a>
              <a
                href="tel:0480800077"
                className="text-[#0b1526]/70 text-[15px] font-light leading-relaxed hover:text-[#0b1526] transition-colors block mt-1"
              >
                0480 800 077
              </a>

              <p className="text-[#0b1526]/70 text-[15px] font-light mt-6">
                Meetings by appointment
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0b1526]/50 mb-8">Contact Us</h3>

              <form onSubmit={handleSubmit} className="space-y-0">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Name"
                    className="w-full bg-transparent border-b border-[#0b1526]/15 py-4 text-[15px] font-light text-[#0b1526] focus:outline-none focus:border-[#0b1526]/40 transition-colors placeholder:text-[#0b1526]/35 rounded-none"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    className="w-full bg-transparent border-b border-[#0b1526]/15 py-4 text-[15px] font-light text-[#0b1526] focus:outline-none focus:border-[#0b1526]/40 transition-colors placeholder:text-[#0b1526]/35 rounded-none"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Email"
                    className="w-full bg-transparent border-b border-[#0b1526]/15 py-4 text-[15px] font-light text-[#0b1526] focus:outline-none focus:border-[#0b1526]/40 transition-colors placeholder:text-[#0b1526]/35 rounded-none"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    placeholder="Reason for contact"
                    className="w-full bg-transparent border-b border-[#0b1526]/15 py-4 text-[15px] font-light text-[#0b1526] focus:outline-none focus:border-[#0b1526]/40 transition-colors placeholder:text-[#0b1526]/35 rounded-none"
                  />
                </div>

                <div className="pt-8">
                  <button
                    type="submit"
                    className="text-xs font-medium uppercase tracking-[0.2em] text-[#0b1526] underline underline-offset-4 hover:text-[#0b1526]/60 transition-colors"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
