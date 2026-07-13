import { motion } from 'framer-motion';
import { NavBar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

const sections: { heading: string; body: (string | { items: string[] })[] }[] = [
  {
    heading: '1. About Us',
    body: [
      'Brenscot is a Queensland-based industrial warehouse developer and builder, delivering large-scale industrial and commercial projects across South-East Queensland and beyond. Brenscot designs, develops, constructs, and partners on premium industrial assets for owner-occupiers, tenants, and institutional clients.',
    ],
  },
  {
    heading: '2. No Professional Advice',
    body: [
      'All content provided on this Site is general information only. The information on this Site does not take into account your specific objectives, requirements, or circumstances and does not constitute legal, financial, investment, taxation, planning, engineering, construction, or other professional advice. You should obtain your own independent professional advice before relying on any information on this Site or making any decision in connection with Brenscot or its projects.',
    ],
  },
  {
    heading: '3. Project Information',
    body: [
      'Information on this Site relating to Brenscot\u2019s current, past, or proposed projects (including artist impressions, renders, plans, areas, completion dates, costings, and tenancy details) is indicative only and may change without notice. Past project performance, programmes, or outcomes are not an indication of future projects. Nothing on this Site constitutes an offer, contract, representation, or warranty in respect of any project, lease, sale, or service.',
    ],
  },
  {
    heading: '4. Intellectual Property',
    body: [
      'All content, branding, logos, images, renders, videos, drawings, plans, and other materials on the Site are the intellectual property of Brenscot or its licensors. You must not copy, reproduce, modify, publish, distribute, or otherwise use any part of this Site without the prior written permission of Brenscot, except as permitted under applicable copyright law.',
    ],
  },
  {
    heading: '5. Use of the Site',
    body: [
      'You agree to use this Site for lawful purposes only. You must not:',
      { items: [
        'engage in any activity that disrupts or interferes with the Site or its users;',
        'attempt to gain unauthorised access to any part of the Site, the server on which it is hosted, or any connected database;',
        'use the Site to transmit any harmful, misleading, defamatory, or unlawful material; or',
        'use any automated means (including bots, scrapers, or crawlers) to access or collect data from the Site without our prior written consent.',
      ]},
    ],
  },
  {
    heading: '6. Third-Party Links',
    body: [
      'The Site may contain links to other websites for your convenience. These links do not imply endorsement, and Brenscot is not responsible for the content, accuracy, or availability of third-party websites. No representation is given, warranty made, or responsibility taken about the accuracy, timeliness, or completeness of information sourced from third parties. We recommend you consider, with or without the assistance of an appropriate adviser, whether the information is appropriate having regard to your particular circumstances.',
    ],
  },
  {
    heading: '7. Privacy',
    body: [
      'We collect and use your personal information in accordance with our Privacy Policy. By using this Site, you consent to such collection and use as described in that policy.',
    ],
  },
  {
    heading: '8. Liability Disclaimer',
    body: [
      'To the extent permitted by law, neither Brenscot nor any of its directors, officers, employees, contractors, or agents will be liable in any way for any loss or damage (including indirect or consequential loss) suffered by you through your use of this Site, any content on this Site, any errors or inaccuracies on this Site, or any unavailability of the Site.',
    ],
  },
  {
    heading: '9. Changes to These Terms',
    body: [
      'Brenscot may update these Terms at any time without notice. The most current version will always be posted on this Site. Your continued use of the Site after changes are made constitutes your acceptance of those changes.',
    ],
  },
  {
    heading: '10. Governing Law',
    body: [
      'These Terms are governed by the laws of Queensland, Australia. Any disputes arising in connection with these Terms or your use of the Site will be subject to the exclusive jurisdiction of the courts of Queensland.',
    ],
  },
  {
    heading: '11. Contact',
    body: [
      'If you have any questions about these Terms, please contact us at:',
      { items: [
        'Brenscot Builders Pty Ltd',
        'Email: enquiries@brenscot.com.au',
        'Phone: 0480 800 077',
        'Meetings by appointment',
      ]},
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <NavBar lightBackground />

      <section className="relative pt-40 pb-16 md:pt-48 md:pb-20 overflow-hidden bg-[#0b1526]">
        <div
          className="absolute inset-0 opacity-90"
          style={{
            background:
              'linear-gradient(120deg, #0b1526 0%, #1a2740 15%, #C8A24A 35%, #ffffff 50%, #C8A24A 65%, #1a2740 85%, #0b1526 100%)',
            backgroundSize: '300% 300%',
            animation: 'iridescent-shift 14s ease-in-out infinite',
            mixBlendMode: 'screen',
          }}
        />
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              'conic-gradient(from 90deg at 50% 50%, rgba(200,162,74,0.55), rgba(255,255,255,0.4), rgba(11,21,38,0.6), rgba(200,162,74,0.5), rgba(255,255,255,0.35), rgba(200,162,74,0.55))',
            filter: 'blur(60px)',
            animation: 'iridescent-spin 22s linear infinite',
          }}
        />
        <style>{`
          @keyframes iridescent-shift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          @keyframes iridescent-spin {
            0% { transform: rotate(0deg) scale(1.2); }
            100% { transform: rotate(360deg) scale(1.2); }
          }
        `}</style>
        <div className="relative container mx-auto px-6 md:px-12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans font-light text-white text-[40px] leading-[1.15] md:text-[60px] md:leading-[80px]"
          >
            Terms &amp; Conditions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-white/60 text-sm md:text-base font-light mt-6 tracking-wide"
          >
            Last updated: 11 May 2026
          </motion.p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6 text-[#0b1526]/80 text-[15px] font-light leading-[1.85]"
            >
              <p>
                Welcome to the Brenscot Builders website (the <em>Site</em>). All references to Brenscot on this Site are a reference to Brenscot Builders Pty Ltd and, where the context allows, any other company that is linked to Brenscot or part of the same group, including its related entities and authorised representatives.
              </p>
              <p>
                By accessing or using this Site, you agree to be bound by these terms and conditions (the <em>Terms</em>). If you do not agree to these Terms, you must not access or use this Site.
              </p>
            </motion.div>

            <div className="mt-16 space-y-14">
              {sections.map((section, idx) => (
                <motion.div
                  key={section.heading}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.7, delay: Math.min(idx * 0.04, 0.2), ease: [0.16, 1, 0.3, 1] }}
                >
                  <h2 className="font-sans font-normal text-[#0b1526] text-xl md:text-2xl mb-5 leading-snug">
                    {section.heading}
                  </h2>
                  <div className="space-y-4 text-[#0b1526]/75 text-[15px] font-light leading-[1.85]">
                    {section.body.map((item, i) => {
                      if (typeof item === 'string') {
                        return <p key={i}>{item}</p>;
                      }
                      return (
                        <ul key={i} className="space-y-2 pl-2">
                          {item.items.map((li, j) => (
                            <li key={j} className="text-[#0b1526]/75">
                              {li}
                            </li>
                          ))}
                        </ul>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
