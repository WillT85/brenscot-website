import { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';

const SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY as string;

export function Contact() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const projectType = String(formData.get('projectType') ?? '').trim();

    const recaptchaToken = recaptchaRef.current?.getValue();
    if (!recaptchaToken) {
      toast({
        title: "Please complete the reCAPTCHA",
        description: "Tick the 'I'm not a robot' box before submitting.",
        variant: "destructive",
      });
      return;
    }

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
          recaptchaToken,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? 'Something went wrong.');
      }

      form.reset();
      recaptchaRef.current?.reset();
      setSubmitted(true);
    } catch (err) {
      recaptchaRef.current?.reset();
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
                <h4 className="text-base font-bold uppercase tracking-[0.2em] text-[#C8A24A] mb-4">Contact Us</h4>
                <p className="text-lg font-light mb-2"><span className="text-[#C8A24A]">Email :</span> <a href="mailto:enquiries@brenscot.com.au" className="hover:opacity-70 transition-opacity">enquiries@brenscot.com.au</a></p>
                <p className="text-lg font-light"><span className="text-[#C8A24A]">Phone number :</span> <a href="tel:0480800077" className="hover:opacity-70 transition-opacity">0480 800 077</a></p>
                <p className="text-lg font-light text-[#C8A24A] mt-2">Meetings by appointment</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
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
                <ReCAPTCHA ref={recaptchaRef} sitekey={SITE_KEY} />
                <button
                  type="submit"
                  disabled={submitting}
                  className="bg-black text-white px-12 py-5 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#C8A24A] hover:text-[#0b1526] transition-colors w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? "Sending..." : "Submit Enquiry"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
