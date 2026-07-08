import { useState } from 'react';
import { motion } from 'framer-motion';
import { NavBar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { useToast } from '@/hooks/use-toast';

export default function ContactPage() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const projectType = String(formData.get('projectType') ?? '').trim();

    setSubmitting(true);
    try {
      const res = await fetch(`${import.meta.env.BASE_URL}api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: String(formData.get('name') ?? '').trim(),
          phone: String(formData.get('phone') ?? '').trim(),
          email: String(formData.get('email') ?? '').trim(),
          ...(projectType ? { projectType } : {}),
          message: String(formData.get('message') ?? '').trim(),
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? 'Something went wrong.');
      }

      form.reset();
      setSubmitted(true);
    } catch (err) {
      toast({
        title: "Unable to send enquiry",
        description:
          err instanceof Error
            ? err.message
            : "Please try again or email us directly at enquiries@brenscot.com.au.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
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
              <h3 className="font-serif text-xl font-bold text-[#C8A24A] mb-4">Contact Us</h3>
              <p className="text-[#0b1526]/70 text-[15px] font-light leading-relaxed">
                <span className="text-[#C8A24A]">Email :</span>{' '}
                <a
                  href="mailto:enquiries@brenscot.com.au"
                  className="hover:text-[#0b1526] transition-colors"
                >
                  enquiries@brenscot.com.au
                </a>
              </p>
              <p className="text-[#0b1526]/70 text-[15px] font-light leading-relaxed mt-1">
                <span className="text-[#C8A24A]">Phone number :</span>{' '}
                <a
                  href="tel:0480800077"
                  className="hover:text-[#0b1526] transition-colors"
                >
                  0480 800 077
                </a>
              </p>

              <p className="text-[#C8A24A] text-[15px] font-light mt-1">
                Meetings by appointment
              </p>
            </motion.div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="border border-black/10 bg-[#f8f6f1] px-8 py-12 md:px-12 md:py-16"
              >
                <h2 className="font-serif text-3xl md:text-4xl text-[#0b1526] mb-4">
                  Thank You
                </h2>
                <p className="text-[#0b1526]/70 text-lg font-light leading-relaxed mb-2">
                  Your enquiry has been received.
                </p>
                <p className="text-[#0b1526]/60 text-[15px] font-light leading-relaxed mb-10 max-w-md">
                  Our team will review your project details and be in touch shortly. For urgent
                  matters, call us on{' '}
                  <a href="tel:0480800077" className="text-[#C8A24A] hover:text-[#0b1526] transition-colors">
                    0480 800 077
                  </a>.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="bg-black text-white px-12 py-5 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#C8A24A] hover:text-[#0b1526] transition-colors w-full sm:w-auto"
                >
                  Send Another Enquiry
                </button>
              </motion.div>
            ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <form onSubmit={handleSubmit} className="space-y-12">
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Full Name *"
                      className="w-full bg-transparent border-b border-black/20 pb-4 text-lg font-light focus:outline-none focus:border-black transition-colors placeholder:text-black/30 rounded-none"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
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
                    name="email"
                    required
                    placeholder="Email Address *"
                    className="w-full bg-transparent border-b border-black/20 pb-4 text-lg font-light focus:outline-none focus:border-black transition-colors placeholder:text-black/30 rounded-none"
                  />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    id="project-type"
                    name="projectType"
                    placeholder="Project Type (e.g. Distribution Centre, Cold Storage)"
                    className="w-full bg-transparent border-b border-black/20 pb-4 text-lg font-light focus:outline-none focus:border-black transition-colors placeholder:text-black/30 rounded-none"
                  />
                </div>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Project Details *"
                    className="w-full bg-transparent border-b border-black/20 pb-4 text-lg font-light resize-none focus:outline-none focus:border-black transition-colors placeholder:text-black/30 rounded-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="bg-black text-white px-12 py-5 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#C8A24A] hover:text-[#0b1526] transition-colors w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? "Sending..." : "Submit Enquiry"}
                </button>
              </form>
            </motion.div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
