import { motion } from 'framer-motion';
import { NavBar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

const sections: { heading: string; body: (string | { sub: string; items: string[] })[] }[] = [
  {
    heading: '1. What is "Personal Information"?',
    body: [
      '"Personal Information" is information or an opinion about an identified individual, or an individual who is reasonably identifiable, whether the information is true or not, and whether recorded in a material form or not.',
    ],
  },
  {
    heading: '2. What Personal Information do we collect and hold?',
    body: [
      'Brenscot may collect and hold Personal Information such as your name, contact details (including your address, phone numbers, and emails, whether personal or for work), business and project information, ABN/ACN, financial and payment details where relevant, and product, service, and project preferences.',
    ],
  },
  {
    heading: '3. Why do we collect Personal Information?',
    body: [
      '3.1 Brenscot collects Personal Information from clients, tenants, employees, contractors, suppliers, and other individuals where reasonably necessary for one or more of our functions or activities, including to deliver our development and construction projects, manage tenancies and partner relationships, and to keep you informed of relevant developments and opportunities.',
      '3.2 You have the option to deal with us anonymously or by using a pseudonym. However, you acknowledge that where this is impractical (for example, when you contract with us) or where the law or a court order provides otherwise, we are not required to provide these options to you.',
      '3.3 If you choose not to provide your Personal Information to Brenscot, we may not be able to process your enquiry, deliver our services, or undertake certain activities for you such as providing requested information, products, or services.',
    ],
  },
  {
    heading: '4. When and how do we collect Personal Information?',
    body: [
      '4.1 Brenscot collects Personal Information about you when you (or a representative authorised by you) submit an enquiry form, visit our Website, request information about us or our projects, provide feedback, respond to a survey, contract with us, fill in a form on our Website, or contact us by telephone, email, post, or in person.',
      '4.2 Brenscot may also collect Personal Information about you via third parties, including from our business partners and other service providers who assist us in our business operations. Those third parties must ensure that they have informed you that they are providing your Personal Information to Brenscot, obtained your consent to do so, and advised you of this Privacy Policy.',
      '4.3 In some circumstances, we may receive Personal Information that we have not requested. If this occurs, we will comply with our obligations under the Privacy Act. You acknowledge that we may de-identify and/or destroy this information unless we are required to keep it by law.',
    ],
  },
  {
    heading: '5. Information collected via our website',
    body: [
      '5.1 Brenscot will not collect any Personal Information about users of our website except when they knowingly provide it or as otherwise described below. For example, Brenscot may collect Personal Information from users of the Website when they:',
      { sub: '', items: [
        '(a) complete an online form, including registering to receive updates, promotional material, or other information; and/or',
        '(b) otherwise correspond with Brenscot.',
      ]},
      'Click Stream Data',
      '5.2 When you visit and browse our website, our website host may collect Personal Information for statistical, reporting, and maintenance purposes. Subject to clause 7.5, the Personal Information collected by our website host will not be used to identify you. The information may include:',
      { sub: '', items: [
        '(a) the number of users visiting our website and the number of pages viewed;',
        '(b) the date, time, and duration of a visit;',
        '(c) the IP address of your computer; or',
        '(d) the path taken through our website.',
      ]},
      '5.3 Brenscot\u2019s website host uses this information to administer and improve the performance of our website, including to assist with the diagnosis of and to provide support for any issues with our website or services.',
      'Cookies',
      '5.4 Cookies are small text files that are transferred to a user\u2019s computer hard drive by a website for the purpose of storing information about a user\u2019s identity, browser type, or website visiting patterns.',
      '5.5 If you access our Website, a cookie may be downloaded onto your computer\u2019s hard drive when you first visit our Website. You can adjust your internet browser to disable cookies; however, Brenscot may not be able to provide you with all the service or functionality you require on our website if you choose to do so.',
      'Web Beacons',
      '5.6 Web beacons are images that originate from a third-party site to track visitor activities. Brenscot may use web beacons to collect aggregate data and provide this information to our website host to administer and improve the performance of our website.',
      'Links to external websites',
      '5.7 If you follow any links to external websites from our Website, this Privacy Policy will not apply to those websites, which may have their own policies relating to privacy and data collection and website usage. If you choose to access any linked website or provide any Personal Information on such websites, you should review their policies and terms of use to learn more about how they may use your Personal Information. Brenscot is not responsible for and will not be liable for the operations or policies of any external website.',
    ],
  },
  {
    heading: '6. How Brenscot uses the Personal Information it collects about you',
    body: [
      '6.1 Brenscot uses the Personal Information it collects about you for our business functions and activities, which may include the following:',
      { sub: '', items: [
        '(a) to provide you with information, products, or services you have requested;',
        '(b) to manage and deliver our development, construction, and tenancy services;',
        '(c) to promote and market our projects and services to you;',
        '(d) to personalise and customise your experiences on our Website;',
        '(e) to help Brenscot research the needs of its clients and partners;',
        '(f) to conduct research for the purposes of improving existing products or services or creating new ones;',
        '(g) to provide you with ongoing information about Brenscot and its activities;',
        '(h) to allow us to provide third-party information and offers in which we believe you may be interested;',
        '(i) to use aggregated or de-identified information for the purposes of data analysis, research, and reporting;',
        '(j) to comply with regulatory or other legal requirements;',
        '(k) for purposes related to the employment of our personnel and providing internal services to our staff; and',
        '(l) for any other use required or permitted by law or purpose communicated to you at the time the Personal Information was collected or for which you provided your consent.',
      ]},
      '6.2 Brenscot may use your Personal Information for a secondary purpose if that secondary purpose is related to those purposes listed in clause 6.1, if we have your consent, or if otherwise provided for under the Privacy Act.',
      '6.3 Brenscot may use your Personal Information to provide you with direct marketing materials if you would reasonably expect us to or if you consent to receive direct marketing materials. Direct marketing material may include promotional material about Brenscot or the products or services offered by Brenscot.',
      '6.4 You may opt out of receiving direct marketing material by contacting us in any of the ways specified in the direct marketing materials or as set out in clause 13.',
      '6.5 Generally, we will only collect and use your Personal Information in accordance with this Privacy Policy. If we collect or use Personal Information in ways other than as stated in this Privacy Policy, we will ensure that we do so in accordance with the Privacy Act.',
    ],
  },
  {
    heading: '7. Who do we disclose your Personal Information to?',
    body: [
      '7.1 Depending on the nature of your relationship with Brenscot, we may disclose your Personal Information to officers and employees of Brenscot, other businesses within our group of companies, service providers and contractors who assist us in our business operations when necessary to perform their services, government bodies, regulatory authorities and law enforcement bodies, and third parties, or otherwise as required by law.',
      '7.2 Brenscot may also disclose your Personal Information to our website host or service providers in certain limited circumstances, for example, when our website experiences a technical problem or to ensure that it operates in an effective and secure manner. Where we do share your Personal Information with a service provider, we would only do so if that party has agreed to comply with our privacy standards as described in this Privacy Policy.',
      '7.3 We may also share non-personal, de-identified, and aggregated information for research or promotional purposes in connection with providing requested information or services to you, or for the purposes of improving our services. We will not sell your Personal Information to third parties for marketing purposes.',
      '7.4 You may authorise Brenscot to disclose Personal Information that it holds about you to your adviser, administrator, or another person nominated by you.',
      '7.5 Unless otherwise specified in this Privacy Policy, Brenscot or Brenscot\u2019s website host will not disclose any of your Personal Information to any other organisation unless the disclosure is required by law or is otherwise permitted by the Privacy Act or is with your consent.',
    ],
  },
  {
    heading: '8. Disclosure of your Personal Information overseas',
    body: [
      '8.1 We do not currently disclose your Personal Information outside of Australia. In the future, we may choose to disclose your Personal Information outside of Australia to an entity in a foreign country and, if practical, will provide you with details of these countries when this occurs. It is possible that such an entity may be subject to foreign laws that do not provide the same level of protection of Personal Information as in Australia. We will take steps to ensure that these overseas entities are obliged to protect the privacy and security of your Personal Information and use it only for the purpose for which it is disclosed.',
    ],
  },
  {
    heading: '9. Storage and security of Personal Information held by Brenscot',
    body: [
      '9.1 Brenscot will take reasonable steps to protect your Personal Information from misuse, interference, and loss, and from unauthorised access, modification, or disclosure.',
      '9.2 Brenscot aims to keep your Personal Information secure and up to date. We will comply with our obligations under the Privacy Act in relation to any Personal Information that we handle, including information held on Brenscot\u2019s computer systems.',
      '9.3 Personal Information that is held by Brenscot in hard copy is stored securely on its premises and is only disclosed or used for the purposes described in this Privacy Policy.',
    ],
  },
  {
    heading: '10. Updating and correcting your Personal Information',
    body: [
      'We will take reasonable steps to ensure that the Personal Information we hold is accurate, up to date, and complete. You can update your Personal Information at any time by contacting Brenscot in any of the ways specified in clause 13. Brenscot welcomes any changes to your Personal Information to keep our records up to date.',
    ],
  },
  {
    heading: '11. How long will Brenscot keep your Personal Information?',
    body: [
      '11.1 We will keep your Personal Information only for as long as required for our business purposes and otherwise as required by Australian law.',
      '11.2 Where we no longer need to keep your Personal Information in accordance with clause 11.1, we will take reasonable steps to destroy or de-identify your Personal Information.',
      '11.3 If you wish to have your Personal Information destroyed or de-identified, please let us know, and we will take reasonable steps to do so (unless we need to keep it for legal, auditing, or internal risk management reasons).',
    ],
  },
  {
    heading: '12. Finding out what Personal Information Brenscot holds about you',
    body: [
      '12.1 You are entitled to access Personal Information that Brenscot holds about you. If you request access to your Personal Information, we will grant your request unless providing you with access would unreasonably impact upon the privacy of others or is not otherwise permitted under the Australian Privacy Principles or at law. If we refuse your request to access your Personal Information, we will provide you with written reasons for the refusal.',
      '12.2 A request for access can be made by contacting Brenscot in any of the ways specified in clause 13.',
    ],
  },
  {
    heading: '13. How to contact us and more information',
    body: [
      '13.1 If you feel that your privacy has not been respected or that Brenscot has conducted itself inconsistently with this Privacy Policy, the Australian Privacy Principles, a registered APP Code, and/or the Privacy Act in respect of your Personal Information, or for any other queries, problems, complaints, or communication in relation to this Privacy Policy, please contact us in any of the following ways:',
      { sub: '', items: [
        'Email: enquiries@brenscot.com.au',
        'Phone: +61 (0)7 3000 1234',
        'Post: Attn: Privacy Officer, Brenscot Builders, Clarke St, Hendra, Brisbane QLD 4011',
      ]},
      '13.2 You can find out more information about the Privacy Act and the Australian Privacy Principles from the Office of the Australian Information Commissioner at www.oaic.gov.au (email: enquiries@oaic.gov.au).',
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <NavBar />

      <section className="relative pt-40 pb-16 md:pt-48 md:pb-20 overflow-hidden bg-[#0b1526]">
        <div
          className="absolute left-0 right-0 bottom-0 top-28 md:top-32 opacity-90"
          style={{
            background:
              'linear-gradient(120deg, #0b1526 0%, #1e3a8a 18%, #2563eb 35%, #0ea5e9 52%, #38bdf8 70%, #1e40af 85%, #0b1526 100%)',
            backgroundSize: '300% 300%',
            animation: 'iridescent-shift 14s ease-in-out infinite',
            mixBlendMode: 'screen',
          }}
        />
        <div
          className="absolute left-0 right-0 bottom-0 top-28 md:top-32 opacity-60"
          style={{
            background:
              'conic-gradient(from 90deg at 50% 50%, rgba(56,189,248,0.55), rgba(37,99,235,0.5), rgba(14,165,233,0.55), rgba(30,64,175,0.45), rgba(125,211,252,0.45), rgba(56,189,248,0.55))',
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
            Privacy Policy
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
                Brenscot Builders Pty Ltd and its related entities (referred to as Brenscot, we, us, or our) are committed to the protection of your Personal Information in accordance with the Australian Privacy Principles set out in the <em>Privacy Act 1988</em>{' '}(Cth) as amended by the <em>Privacy Amendment (Enhancing Privacy Protection) Act 2012</em>{' '}(Cth) (the Privacy Act).
              </p>
              <p>
                This Privacy Policy describes the way Brenscot collects, holds, and uses Personal Information that is covered by the Privacy Act. It is not intended to cover categories of Personal Information that are not covered by the Privacy Act. If you wish to make any inquiries about this Privacy Policy, you should contact Brenscot in any of the ways specified in clause 13.
              </p>
              <p>
                Brenscot may, from time to time, review and update this Privacy Policy, including to consider new laws, regulations, and technology. All Personal Information held by Brenscot will be governed by our most recent Privacy Policy, posted on our website. Our most recent Privacy Policy will apply to our collection, use, and disclosure of Personal Information.
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
                        const isSubheading = !item.includes('.') && item.length < 40;
                        if (isSubheading) {
                          return (
                            <h3 key={i} className="font-sans font-medium text-base text-[#0b1526] pt-4">
                              {item}
                            </h3>
                          );
                        }
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
