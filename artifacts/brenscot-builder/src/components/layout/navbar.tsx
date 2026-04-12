import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', id: 'top' },
    { name: 'Projects', id: 'projects' },
    { name: 'About', id: 'about' },
    { name: 'Careers', id: 'careers' },
    { name: 'Partners', id: 'partners' },
    { name: 'Contact Us', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? 'bg-white shadow-md border-b border-black/5 py-4'
          : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <div
          className="cursor-pointer flex-shrink-0"
          onClick={() => scrollTo('top')}
          data-testid="logo-home"
        >
          <div className="flex flex-col items-center leading-none select-none">
            <span className={`font-serif text-2xl md:text-3xl font-bold tracking-[0.05em] transition-colors duration-500 ${isScrolled ? 'text-[#0b1526]' : 'text-white'}`}>BRENSCOT</span>
            <span className={`text-[9px] md:text-[10px] tracking-[0.45em] font-light uppercase mt-0.5 transition-colors duration-500 ${isScrolled ? 'text-[#0b1526]/60' : 'text-white/80'}`}>BUILDERS</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 lg:gap-12">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.id)}
              data-testid={`nav-${link.id}`}
              className={`text-xs font-medium uppercase tracking-[0.2em] transition-colors whitespace-nowrap ${
                link.name === 'Contact Us'
                  ? 'bg-[#C8A24A] text-white px-6 py-3 hover:bg-[#C8A24A]/85'
                  : isScrolled
                    ? 'text-[#0b1526] hover:text-[#C8A24A]'
                    : 'text-[#C8A24A] hover:text-[#C8A24A]/60'
              }`}
            >
              {link.name}
            </button>
          ))}
        </nav>

        <button
          className={`md:hidden p-2 transition-colors duration-500 ${isScrolled ? 'text-[#0b1526]' : 'text-white'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className={`md:hidden absolute top-full left-0 right-0 border-b py-6 px-6 flex flex-col gap-2 shadow-2xl ${
          isScrolled ? 'bg-white border-black/10' : 'bg-[#0a0a0a] border-white/10'
        }`}>
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.id)}
              data-testid={`mobile-nav-${link.id}`}
              className={`text-left py-4 text-xs font-medium transition-colors uppercase tracking-[0.2em] border-b last:border-none ${
                isScrolled
                  ? 'text-[#0b1526] hover:text-[#C8A24A] border-black/5'
                  : 'text-[#C8A24A] hover:text-[#C8A24A]/60 border-white/5'
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
