import { motion } from 'framer-motion';
import { useParams, Link } from 'wouter';
import { ArrowLeft, MapPin, LandPlot, Ruler, Car, Building2, Flag, CalendarDays } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { NavBar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { getProjectBySlug } from '@/data/projects';
import NotFound from '@/pages/not-found';

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug ?? '';
  const project = getProjectBySlug(slug);

  if (!project) {
    return <NotFound />;
  }

  const galleryMedia = project.gallery ?? (project.image ? [project.image] : []);

  const info = project.keyInfo;
  const infoItems: { icon: LucideIcon; label: string; value?: string }[] = info
    ? [
        { icon: LandPlot, label: 'Land area', value: info.landArea },
        { icon: Ruler, label: 'Floor area', value: info.floorArea },
        { icon: Car, label: 'Car spaces', value: info.carSpaces },
        { icon: Building2, label: 'Property extent', value: info.propertyExtent },
        { icon: Flag, label: 'Tenure type', value: info.tenureType },
        { icon: CalendarDays, label: 'Sold on', value: info.soldOn },
      ].filter((it) => it.value)
    : [];

  return (
    <div className="min-h-screen bg-white font-sans">
      <NavBar />

      <section className="relative h-[70vh] md:h-[85vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10" />
        {project.video ? (
          <video
            src={project.video}
            autoPlay
            loop
            muted
            playsInline
            ref={(el) => { if (el) { el.muted = true; el.playbackRate = project.playbackRate ?? 0.5; } }}
            className="w-full h-full object-cover brightness-110 contrast-105"
          />
        ) : project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover brightness-110 contrast-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#0b1526] to-[#16243d]" />
        )}
        <div className="absolute inset-0 z-20 flex items-end">
          <div className="container mx-auto px-6 md:px-12 pb-12 md:pb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-2 text-[#C8A24A] text-sm uppercase tracking-[0.2em] mb-4">
                <MapPin className="w-4 h-4" />
                {project.location}
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight max-w-4xl">
                {project.title}
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-28 bg-white">
        <div className="container mx-auto pr-6 md:pr-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-black/50 hover:text-[#0b1526] transition-colors duration-300 mb-12 ml-4 md:ml-0"
          >
            <ArrowLeft className="w-4 h-4" />
            All Developments
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
            <div className="lg:col-span-3">
              <div className="space-y-6">
                {galleryMedia.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`${project.title} — view ${i + 1}`}
                    className="w-full object-cover brightness-110 contrast-105"
                  />
                ))}
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="lg:sticky lg:top-28">
                <h2 className="text-2xl md:text-3xl font-serif text-black leading-tight mb-6">{project.title}</h2>
                <p className="text-black/60 text-sm md:text-base font-serif font-light leading-relaxed mb-10">
                  {project.description}
                </p>
                {infoItems.length > 0 ? (
                  <div>
                    <h3 className="text-lg md:text-xl font-serif text-black mb-8">Key property information</h3>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-8">
                      {infoItems.map(({ icon: Icon, label, value }) => (
                        <div key={label} className="flex gap-3">
                          <Icon className="w-4 h-4 text-[#C8A24A] mt-0.5 shrink-0" strokeWidth={1.5} />
                          <div>
                            <span className="block text-[9px] uppercase tracking-[0.2em] text-black/40 mb-1.5">{label}</span>
                            <span className="text-sm font-serif text-black">{value}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="space-y-8">
                    <div>
                      <span className="block text-[9px] uppercase tracking-[0.2em] text-black/40 mb-2">Location</span>
                      <span className="text-sm font-serif text-black">{project.location}</span>
                    </div>
                    <div>
                      <span className="block text-[9px] uppercase tracking-[0.2em] text-black/40 mb-2">Developer</span>
                      <span className="text-sm font-serif text-black">Brenscot Builders</span>
                    </div>
                    <div>
                      <span className="block text-[9px] uppercase tracking-[0.2em] text-black/40 mb-2">Status</span>
                      <span className="text-sm font-serif text-black capitalize">{project.status === 'ongoing' ? 'On going' : 'Completed'}</span>
                    </div>
                    <div>
                      <span className="block text-[9px] uppercase tracking-[0.2em] text-black/40 mb-2">Sector</span>
                      <span className="text-sm font-serif text-black">Industrial &amp; Commercial</span>
                    </div>
                  </div>
                )}
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#0b1526] text-white text-xs font-bold uppercase tracking-[0.2em] px-8 py-4 mt-10 transition-colors duration-300 hover:bg-[#C8A24A]"
                >
                  Enquire
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
