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
            <div className="flex flex-col items-start leading-none select-none mb-8">
              <span className="font-serif text-white text-3xl font-bold tracking-[0.05em]">BRENSCOT</span>
              <span className="text-white/60 text-[10px] tracking-[0.45em] font-light uppercase mt-1">BUILDERS</span>
            </div>
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