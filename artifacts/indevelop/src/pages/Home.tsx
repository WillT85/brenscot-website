import { Layout } from "@/components/layout/Layout";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

import heroHome from "@/assets/images/hero-home.png";
import heroStory from "@/assets/images/hero-story.png";
import heroCommunity from "@/assets/images/hero-community.png";
import project7 from "@/assets/images/project-7.png";
import project3 from "@/assets/images/project-3.png";
import teamPhoto from "@/assets/images/team-1.png";
import cardsBg from "@/assets/images/cards-bg-final.png";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Home() {
  const featuredProjects = projects.slice(0, 3);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
    }, 1000);
  };

  return (
    <Layout>
      <section className="relative h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroHome})` }}
        />
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 max-w-4xl px-8 md:px-16 mt-20">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            variants={fadeIn}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.1] mb-6"
          >
            Proudly developing high quality residential, commercial & retail projects for <span className="text-secondary italic">20+ years.</span>
          </motion.h1>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            variants={fadeIn}
            className="flex flex-col sm:flex-row items-start gap-6 mt-10"
          >
            <Link
              href="/portfolio"
              className="bg-secondary text-white text-sm font-semibold px-8 py-3.5 rounded-full hover:bg-secondary/90 transition-colors"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </section>


      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              variants={fadeIn}
            >
              <h2 className="text-xs uppercase tracking-wider text-secondary font-semibold mb-3">Our Story</h2>
              <h3 className="text-3xl md:text-4xl font-serif text-primary leading-snug mb-6">
                Building Communities with <span className="text-secondary italic">Purpose</span>
              </h3>
              <p className="text-primary/60 leading-relaxed mb-6">
                Indevelop began with a singular vision: to create properties that speak for themselves. In an industry often defined by noise, we chose quiet authority. We believe that true luxury and premium quality are evident in the details — the materials chosen, the architectural rigor, and the foresight to understand what a community will need tomorrow.
              </p>
              <p className="text-primary/60 leading-relaxed mb-8">
                Over the years, our portfolio has grown to encompass landmark residential towers, state-of-the-art commercial hubs, and strategic industrial estates. But our core philosophy remains unchanged: to deliver enduring value.
              </p>
              <Link
                href="/our-story"
                className="inline-block border-2 border-secondary text-secondary text-sm font-semibold px-8 py-2.5 rounded-full hover:bg-secondary hover:text-white transition-colors"
              >
                Read More
              </Link>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              variants={fadeIn}
              className="relative"
            >
              <div className="rounded-lg overflow-hidden aspect-[4/5]">
                <img
                  src={heroStory}
                  alt="Our Story"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-xs uppercase tracking-wider text-secondary font-semibold mb-3">Featured Work</h2>
              <h3 className="text-3xl md:text-4xl font-serif text-primary">Signatures of the Skyline</h3>
            </div>
            <Link href="/portfolio" className="hidden md:inline-block text-sm font-semibold text-secondary hover:text-secondary/80 transition-colors">
              View All Projects &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                variants={fadeIn}
                className="group cursor-pointer"
              >
                <Link href={`/portfolio/${project.id}`}>
                  <div className="relative aspect-[3/4] overflow-hidden bg-muted mb-6 rounded-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-secondary text-white text-[10px] uppercase tracking-widest px-3 py-1.5 font-semibold rounded-full">
                      {project.category}
                    </div>
                  </div>
                  <h4 className="text-xl font-serif text-primary mb-2 group-hover:text-secondary transition-colors">{project.title}</h4>
                  <p className="text-primary/50 text-sm">{project.location}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-0">
        <div className="absolute inset-0">
          <div
            className="h-1/2 bg-cover bg-center relative"
            style={{ backgroundImage: `url(${cardsBg})` }}
          >
            <div className="absolute inset-0 bg-black/20" />
          </div>
          <div className="h-1/2 bg-white" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                bg: "bg-[#3a3a3a]",
                textColor: "text-white",
                descColor: "text-white/70",
                btnClass: "border-secondary text-secondary hover:bg-secondary hover:text-white",
                title: "Invest",
                description: "Across everything we do, we always put our investors first. We constantly earn and retain investor's trust by providing exceptional experiences and returns.",
                href: "/our-story"
              },
              {
                bg: "bg-secondary",
                textColor: "text-white",
                descColor: "text-white/80",
                btnClass: "border-white text-white hover:bg-white hover:text-secondary",
                title: "Development",
                description: "Creating purpose-led developments focused on design excellence, environmental sustainability, social benefits and inspirational built environments.",
                href: "/portfolio"
              },
              {
                bg: "bg-[#0a4a4a]",
                textColor: "text-white",
                descColor: "text-white/70",
                btnClass: "border-secondary text-secondary hover:bg-secondary hover:text-white",
                title: "Assets",
                description: "We regenerate buildings for our tenants, bringing them to their full potential and turning them into high-performing assets for investors.",
                href: "/portfolio"
              }
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                variants={fadeIn}
                className={`${card.bg} p-10 rounded-lg flex flex-col`}
              >
                <div className="mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  <span className={`text-lg font-bold tracking-[0.12em] uppercase ${card.textColor}`}>INDEVELOP</span>
                  <span className={`block text-xs tracking-[0.15em] uppercase font-medium ${card.descColor}`}>{card.title}</span>
                </div>
                <p className={`${card.descColor} text-sm leading-relaxed mb-8 flex-1`}>
                  {card.description}
                </p>
                <div>
                  <Link
                    href={card.href}
                    className={`inline-block border-2 text-sm font-semibold px-8 py-2.5 rounded-full transition-colors ${card.btnClass}`}
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-xs uppercase tracking-wider text-secondary font-semibold mb-3">Community & Partnerships</h2>
            <h3 className="text-3xl md:text-5xl font-serif text-primary leading-snug">
              Building <span className="text-secondary italic">More</span> Than Buildings
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              variants={fadeIn}
              className="bg-white rounded-lg overflow-hidden"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img src={project7} alt="Urban green spaces" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8">
                <h4 className="text-xl font-serif text-primary mb-3">In Partnership with Brenscot Builders Pty Ltd</h4>
                <p className="text-primary/60 text-sm leading-relaxed mb-6">
                  Delivering industrial developments with strength and precision. This collaboration brings together strategic development expertise and construction precision, strengthening our ability to deliver large-scale industrial warehouse projects with confidence and consistency.
                </p>
                <Link href="/community" className="text-secondary text-sm font-semibold hover:text-secondary/80 transition-colors">
                  Learn More &rarr;
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.25 }}
              variants={fadeIn}
              className="bg-white rounded-lg overflow-hidden"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img src={project3} alt="Local partnerships" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8">
                <h4 className="text-xl font-serif text-primary mb-3">Local Partnerships</h4>
                <p className="text-primary/60 text-sm leading-relaxed mb-6">
                  We partner with local charities, arts organizations, and educational institutions. Our annual Indevelop Foundation grants provide critical funding for youth education and urban sustainability.
                </p>
                <Link href="/community" className="text-secondary text-sm font-semibold hover:text-secondary/80 transition-colors">
                  Learn More &rarr;
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              variants={fadeIn}
            >
              <div className="rounded-lg overflow-hidden">
                <img
                  src={teamPhoto}
                  alt="The Indevelop team"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              variants={fadeIn}
            >
              <h2 className="text-xs uppercase tracking-wider text-secondary font-semibold mb-3">Careers</h2>
              <h3 className="text-3xl md:text-4xl font-serif text-primary leading-snug mb-6">
                Join the team <span className="text-secondary italic">today!</span>
              </h3>
              <p className="text-primary/60 leading-relaxed mb-8">
                Think boldly, deliver excellence, and uphold our shared purpose and values.
              </p>
              <Link
                href="/contact"
                className="bg-secondary text-white text-sm font-semibold px-8 py-3.5 rounded-full hover:bg-secondary/90 transition-colors inline-block"
              >
                Find Out More
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
            <motion.div
              className="lg:col-span-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              variants={fadeIn}
            >
              <h2 className="text-xs uppercase tracking-wider text-secondary font-semibold mb-3">Get In Touch</h2>
              <h3 className="text-3xl md:text-4xl font-serif text-primary mb-2">
                Send us a <span className="text-secondary italic">message</span>
              </h3>
              <p className="text-primary/60 mb-10 leading-relaxed">
                Whether you're looking to invest, develop, or explore partnership opportunities, our team is ready to help.
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

            <motion.div
              className="lg:col-span-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              variants={fadeIn}
            >
              {submitted ? (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mail size={28} className="text-secondary" />
                    </div>
                    <h4 className="text-2xl font-serif text-primary mb-2">Thank You</h4>
                    <p className="text-primary/60">We'll be in touch within one business day.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="home-firstName" className="block text-sm font-semibold text-primary mb-2">First Name</label>
                      <input required type="text" id="home-firstName" placeholder="e.g. John" className="w-full bg-transparent border-b border-border py-3 px-0 focus:outline-none focus:border-secondary transition-colors text-primary placeholder:text-primary/30 rounded-none" />
                    </div>
                    <div>
                      <label htmlFor="home-surname" className="block text-sm font-semibold text-primary mb-2">Surname</label>
                      <input type="text" id="home-surname" placeholder="e.g. Smith" className="w-full bg-transparent border-b border-border py-3 px-0 focus:outline-none focus:border-secondary transition-colors text-primary placeholder:text-primary/30 rounded-none" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="home-email" className="block text-sm font-semibold text-primary mb-2">Email</label>
                      <input required type="email" id="home-email" placeholder="e.g. john@company.com.au" className="w-full bg-transparent border-b border-border py-3 px-0 focus:outline-none focus:border-secondary transition-colors text-primary placeholder:text-primary/30 rounded-none" />
                    </div>
                    <div>
                      <label htmlFor="home-phone" className="block text-sm font-semibold text-primary mb-2">Phone</label>
                      <input type="tel" id="home-phone" placeholder="e.g. 0400 000 000" className="w-full bg-transparent border-b border-border py-3 px-0 focus:outline-none focus:border-secondary transition-colors text-primary placeholder:text-primary/30 rounded-none" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="home-reason" className="block text-sm font-semibold text-primary mb-2">How can we help?</label>
                      <select required id="home-reason" className="w-full bg-transparent border-b border-border py-3 px-0 focus:outline-none focus:border-secondary transition-colors text-primary appearance-none rounded-none">
                        <option value="">Select one...</option>
                        <option value="investment">Investment Opportunities</option>
                        <option value="sales">Sales & Leasing</option>
                        <option value="media">Media & PR</option>
                        <option value="general">General Enquiry</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="home-business" className="block text-sm font-semibold text-primary mb-2">Business Name</label>
                      <input type="text" id="home-business" placeholder="Business Name" className="w-full bg-transparent border-b border-border py-3 px-0 focus:outline-none focus:border-secondary transition-colors text-primary placeholder:text-primary/30 rounded-none" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="home-message" className="block text-sm font-semibold text-primary mb-2">Message</label>
                    <textarea required id="home-message" rows={4} placeholder="What's on your mind?" className="w-full bg-transparent border-b border-border py-3 px-0 focus:outline-none focus:border-secondary transition-colors text-primary resize-none placeholder:text-primary/30 rounded-none"></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-secondary text-white py-3.5 px-10 rounded-full text-sm font-semibold hover:bg-secondary/90 transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Submit Enquiry"}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
