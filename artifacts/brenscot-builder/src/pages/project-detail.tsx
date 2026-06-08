import { motion } from 'framer-motion';
import { useParams, Link } from 'wouter';
import { ArrowLeft, MapPin, LandPlot, Ruler, Car, Building2, Layers, Hammer, DollarSign, Info } from 'lucide-react';
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

  const iconForLabel = (label: string): LucideIcon => {
    const l = label.toLowerCase();
    if (l.includes('site area') || l.includes('land area')) return LandPlot;
    if (l.includes('gfa') || l.includes('building area') || l.includes('floor')) return Ruler;
    if (l.includes('car')) return Car;
    if (l.includes('unit') || l.includes('building') || l.includes('tenanc')) return Layers;
    if (l.includes('value')) return DollarSign;
    if (l.includes('office') || l.includes('construction') || l.includes('facade')) return Building2;
    return Info;
  };

  const infoItems: { icon: LucideIcon; label: string; value: string }[] = [
    ...(project.keyInfo ?? []).map((item) => ({
      icon: iconForLabel(item.label),
      label: item.label,
      value: item.value,
    })),
    { icon: Hammer, label: 'Construction status', value: project.status === 'ongoing' ? 'On going' : 'Completed' },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      <NavBar />

      <section className="relative h-[70vh] md:h-[85vh] overflow-hidden">
        {project.heroVideo || project.video ? (
          <video
            src={project.heroVideo ?? project.video}
            autoPlay
            loop
            muted
            playsInline
            ref={(el) => { if (el) { el.muted = true; el.playbackRate = project.playbackRate ?? 0.5; } }}
            className="w-full h-full object-cover"
          />
        ) : project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
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
        <div className="container mx-auto px-6 md:px-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-black/50 hover:text-[#0b1526] transition-colors duration-300 mb-12"
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
              <div>
                <h2 className="text-2xl md:text-3xl font-serif text-black leading-tight mb-6">{project.title}</h2>
                <div className="mb-10 space-y-4">
                  {project.description.split('\n\n').map((para, i) => (
                    <p key={i} className="text-black text-xs md:text-sm font-serif font-normal leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
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
