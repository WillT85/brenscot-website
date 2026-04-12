import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoImg from '@assets/1000x1000_White_and_blue._1775998200073.jpg';

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
          ? 'bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/5 py-4'
          : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <div
          className="cursor-pointer flex-shrink-0"
          onClick={() => scrollTo('top')}
          data-testid="logo-home"
        >
          <img 
            src={logoImg} 
            alt="Brenscot Builders" 
            className="h-14 md:h-18 w-auto object-contain transition-all duration-500 bg-white/10 p-1 rounded-sm"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-12">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.id)}
              data-testid={`nav-${link.id}`}
              className={`text-xs font-medium uppercase tracking-[0.2em] transition-colors whitespace-nowrap ${
                link.name === 'Contact Us'
                  ? 'bg-white text-black px-6 py-3 hover:bg-white/90'
                  : 'text-white hover:text-white/60'
              }`}
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0a0a0a] border-b border-white/10 py-6 px-6 flex flex-col gap-2 shadow-2xl">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.id)}
              data-testid={`mobile-nav-${link.id}`}
              className="text-left py-4 text-xs font-medium text-white hover:text-white/60 transition-colors uppercase tracking-[0.2em] border-b border-white/5 last:border-none"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}