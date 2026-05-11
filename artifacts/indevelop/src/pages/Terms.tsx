import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";

const sections: { heading: string; body: (string | { items: string[] })[] }[] = [
  {
    heading: '1. About Us',
    body: [
      'Indevelop is an Australian property development business based in Brisbane, Queensland. Indevelop designs, develops, delivers, and manages residential, commercial, retail, and industrial property projects, and partners with investors, tenants, and communities across South-East Queensland and beyond.',
    ],
  },
  {
    heading: '2. No Professional Advice',
    body: [
      'All content provided on this Site is general information only. The information on this Site does not take into account your specific objectives, requirements, or circumstances and does not constitute legal, financial, investment, taxation, planning, engineering, construction, or other professional advice. You should obtain your own independent professional advice before relying on any information on this Site or making any decision in connection with Indevelop or its projects.',
    ],
  },
  {
    heading: '3. Project Information',
    body: [
      'Information on this Site relating to Indevelop\u2019s current, past, or proposed projects (including artist impressions, renders, plans, areas, completion dates, costings, valuations, and tenancy details) is indicative only and may change without notice. Past project performance, programmes, or outcomes are not an indication of future projects. Nothing on this Site constitutes an offer, contract, representation, or warranty in respect of any project, lease, sale, investment, or service.',
    ],
  },
  {
    heading: '4. Intellectual Property',
    body: [
      'All content, branding, logos, images, renders, videos, drawings, plans, and other materials on the Site are the intellectual property of Indevelop or its licensors. You must not copy, reproduce, modify, publish, distribute, or otherwise use any part of this Site without the prior written permission of Indevelop, except as permitted under applicable copyright law.',
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
      'The Site may contain links to other websites for your convenience. These links do not imply endorsement, and Indevelop is not responsible for the content, accuracy, or availability of third-party websites. No representation is given, warranty made, or responsibility taken about the accuracy, timeliness, or completeness of information sourced from third parties. We recommend you consider, with or without the assistance of an appropriate adviser, whether the information is appropriate having regard to your particular circumstances.',
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
      'To the extent permitted by law, neither Indevelop nor any of its directors, officers, employees, contractors, or agents will be liable in any way for any loss or damage (including indirect or consequential loss) suffered by you through your use of this Site, any content on this Site, any errors or inaccuracies on this Site, or any unavailability of the Site.',
    ],
  },
  {
    heading: '9. Changes to These Terms',
    body: [
      'Indevelop may update these Terms at any time without notice. The most current version will always be posted on this Site. Your continued use of the Site after changes are made constitutes your acceptance of those changes.',
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
        'Indevelop Pty Ltd',
        'Level 45, The Aurora Tower, 1 Queen Street, Brisbane QLD 4000',
        'Phone: +61 (0)7 3000 0000',
        'Email: enquiries@indevelop.com.au',
      ]},
    ],
  },
];

export default function Terms() {
  return (
    <Layout>
      <section className="relative h-[50vh] min-h-[350px] flex items-end overflow-hidden bg-[#2F455C]">
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, #2F455C 0%, #3a5573 35%, #E8601C 100%)',
          }}
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-8 pb-12 w-full z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-serif text-white"
          >
            Terms &amp; <span className="text-secondary italic">Conditions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }}
            className="text-white/70 text-sm md:text-base font-light mt-4 tracking-wide"
          >
            Last updated: 11 May 2026
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-5 text-primary/80 text-base font-light leading-[1.8]"
          >
            <p>
              Welcome to the Indevelop website (the <em>Site</em>). All references to Indevelop on this Site are a reference to Indevelop Pty Ltd and, where the context allows, any other company that is linked to Indevelop or part of the same group, including its related entities and authorised representatives.
            </p>
            <p>
              By accessing or using this Site, you agree to be bound by these terms and conditions (the <em>Terms</em>). If you do not agree to these Terms, you must not access or use this Site.
            </p>
          </motion.div>

          <div className="mt-14 space-y-12">
            {sections.map((section, idx) => (
              <motion.div
                key={section.heading}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: Math.min(idx * 0.04, 0.2) }}
              >
                <h2 className="font-serif text-2xl md:text-3xl text-primary mb-5 leading-snug">
                  {section.heading}
                </h2>
                <div className="space-y-4 text-primary/75 text-base font-light leading-[1.8]">
                  {section.body.map((item, i) => {
                    if (typeof item === 'string') {
                      return <p key={i}>{item}</p>;
                    }
                    return (
                      <ul key={i} className="space-y-2 pl-2">
                        {item.items.map((li, j) => (
                          <li key={j} className="text-primary/75">{li}</li>
                        ))}
                      </ul>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
