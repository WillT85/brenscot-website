import logoImg from '@assets/V3_Grey_and_Blue_(5000_x_5000_px)_(400_x_200_px)_(4000_x_2000__1775998854478.jpg';

export function Footer() {
  const scrollTo = (id: string) => {
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0a0a0a] text-white pt-24 pb-12 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-white/10 pb-16 mb-12 gap-12">
          <div>
            <img src={logoImg} alt="Brenscot Builders" className="h-16 md:h-20 w-auto object-contain brightness-0 invert mb-8" />
            <p className="text-white/40 text-sm max-w-sm font-light leading-relaxed">
              Crafting architectural landmarks and luxury residences. Excellence built into every detail since 2008.
            </p>
          </div>
          
          <nav className="flex flex-wrap gap-8 md:gap-12">
            <button onClick={() => scrollTo('projects')} className="text-[10px] uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors">Projects</button>
            <button onClick={() => scrollTo('about')} className="text-[10px] uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors">About</button>
            <button onClick={() => scrollTo('careers')} className="text-[10px] uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors">Careers</button>
            <button onClick={() => scrollTo('contact')} className="text-[10px] uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors">Contact</button>
          </nav>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] text-white/30 gap-6">
          <div>&copy; {new Date().getFullYear()} Brenscot Builder.</div>
          <div className="flex gap-8">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}