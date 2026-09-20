import { motion } from 'framer-motion';
import { EnquiryForm } from '@/components/enquiry/enquiry-form';

export function Contact() {
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
            <EnquiryForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
