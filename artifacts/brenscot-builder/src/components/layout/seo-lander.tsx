import { motion } from "framer-motion";
import { Link } from "wouter";
import { NavBar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/layout/page-hero";
import { TrustStrip } from "@/components/layout/trust-strip";
import { LanderFaq } from "@/components/layout/lander-faq";
import { LanderCtas, goldOutlineCtaClass, navyOutlineCtaClass } from "@/components/layout/lander-ctas";
import { SeoHead } from "@/seo/SeoHead";
import { getStaticPage } from "@/seo/config";
import { getLander, type LanderSpec } from "@/seo/lander-copy";
import { getProjectBySlug } from "@/data/projects";

function SectionView({
  section,
  index,
}: {
  section: LanderSpec["sections"][number];
  index: number;
}) {
  const tone = section.tone ?? (index % 2 === 1 ? "sand" : "light");
  const bg = tone === "dark" ? "bg-[#0d1a2d] text-white" : tone === "sand" ? "bg-[#f8f6f1]" : "bg-white";
  const eyebrow = tone === "dark" ? "text-white/40" : "text-black/50";
  const heading = tone === "dark" ? "text-white" : "text-black";
  const body = tone === "dark" ? "text-white/55" : "text-black/60";
  const rule = tone === "dark" ? "border-white/15" : "border-black/10";
  const projects = (section.projectSlugs ?? [])
    .map((slug) => getProjectBySlug(slug))
    .filter((project): project is NonNullable<typeof project> => Boolean(project));

  return (
    <section className={`py-20 md:py-32 ${bg}`}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          {section.eyebrow ? (
            <span className={`${eyebrow} font-sans uppercase tracking-[0.2em] text-xs mb-8 block`}>
              {section.eyebrow}
            </span>
          ) : null}
          <h2 className={`text-4xl md:text-5xl font-serif leading-tight ${heading}`}>{section.heading}</h2>
          {section.paragraphs?.map((paragraph) => (
            <p key={paragraph.slice(0, 48)} className={`${body} text-lg font-light leading-relaxed mt-6`}>
              {paragraph.split(/(\/industrial-builders-brisbane|industrial builders Brisbane)/).map((part, i) =>
                part === "industrial builders Brisbane" || part === "/industrial-builders-brisbane" ? (
                  <Link key={i} href="/industrial-builders-brisbane" className="text-[#C8A24A] hover:underline">
                    industrial builders Brisbane
                  </Link>
                ) : (
                  part
                ),
              )}
            </p>
          ))}
        </div>

        {section.cards ? (
          <div
            className={`grid gap-x-8 gap-y-12 ${
              section.cards.length >= 3 ? "md:grid-cols-3" : section.cards.length === 2 ? "md:grid-cols-2" : ""
            }`}
          >
            {section.cards.map((card, cardIndex) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: cardIndex * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`pt-8 border-t ${rule}`}
              >
                <h3 className={`text-2xl font-serif mb-4 ${heading}`}>{card.title}</h3>
                <p className={`${body} font-light leading-relaxed mb-6`}>{card.body}</p>
                {card.href ? (
                  <Link href={card.href} className={tone === "dark" ? goldOutlineCtaClass : navyOutlineCtaClass}>
                    {card.cta ?? "Read more"}
                  </Link>
                ) : null}
              </motion.div>
            ))}
          </div>
        ) : null}

        {section.precincts ? (
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6">
            {section.precincts.map((precinct) => (
              <li key={precinct} className={`pt-6 border-t ${rule} text-2xl font-serif ${heading}`}>
                {precinct}
              </li>
            ))}
          </ul>
        ) : null}

        {projects.length ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, projectIndex) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: (projectIndex % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link href={`/projects/${project.slug}`} className="group block h-full">
                  <div className="relative overflow-hidden h-[28vh] mb-5 bg-[#0b1526]">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        style={{ objectPosition: project.imagePosition }}
                        className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                      />
                    ) : null}
                  </div>
                  <p className="text-[#C8A24A] text-[10px] uppercase tracking-[0.2em] mb-2">{project.location}</p>
                  <h3 className={`text-xl font-serif transition-colors group-hover:text-[#C8A24A] ${heading}`}>
                    {project.title}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}

export function SeoLander({ path }: { path: string }) {
  const lander = getLander(path);
  const seo = getStaticPage(path)!;

  return (
    <div className="min-h-screen bg-white font-sans">
      <SeoHead {...seo} />
      <NavBar />
      <PageHero
        eyebrow={lander.eyebrow}
        title={lander.h1}
        actions={<LanderCtas ctas={lander.heroCtas} />}
      >
        {lander.lead}
      </PageHero>
      <TrustStrip />
      {lander.sections.map((section, index) => (
        <SectionView key={section.heading} section={section} index={index} />
      ))}
      <LanderFaq faqs={lander.faqs} />
      <section className="py-20 md:py-32 bg-[#0b1526]">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight mb-8 max-w-3xl">
            {lander.finalHeading}
          </h2>
          <p className="text-white/50 text-lg font-light leading-relaxed max-w-2xl mb-12">{lander.finalLead}</p>
          <LanderCtas ctas={lander.finalCtas} />
        </div>
      </section>
      <Footer />
    </div>
  );
}
