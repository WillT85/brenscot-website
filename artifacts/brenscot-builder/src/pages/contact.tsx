import { motion } from 'framer-motion';
import { NavBar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { EnquiryForm } from '@/components/enquiry/enquiry-form';
import { SeoHead } from '@/seo/SeoHead';
import { getStaticPage } from '@/seo/config';

const contactSeo = getStaticPage('/contact')!;

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <SeoHead {...contactSeo} />
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
                <a href="mailto:enquiries@brenscot.com.au" className="hover:text-[#0b1526] transition-colors">
                  enquiries@brenscot.com.au
                </a>
              </p>
              <p className="text-[#0b1526]/70 text-[15px] font-light leading-relaxed mt-1">
                <span className="text-[#C8A24A]">Phone number :</span>{' '}
                <a href="tel:0480800077" className="hover:text-[#0b1526] transition-colors">
                  0480 800 077
                </a>
              </p>
              <p className="text-[#C8A24A] text-[15px] font-light mt-1">
                Meetings by appointment
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <EnquiryForm />
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
