import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoImg from '@assets/1000x1000_White_and_blue._1775998200073.jpg';

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md border-border shadow-sm'
          : 'bg-background border-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <div
          className="cursor-pointer flex-shrink-0"
          onClick={() => scrollTo('top')}
          data-testid="logo-home"
        >
          <img src={logoImg} alt="Brenscot Builders" className="h-24 w-auto object-contain" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.id)}
              data-testid={`nav-${link.id}`}
              className={`text-xs font-bold uppercase tracking-widest transition-colors whitespace-nowrap ${
                link.name === 'Contact Us'
                  ? 'bg-primary text-primary-foreground px-5 py-3 hover:bg-primary/90'
                  : 'text-foreground/80 hover:text-primary'
              }`}
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg py-4 px-6 flex flex-col gap-2">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.id)}
              data-testid={`mobile-nav-${link.id}`}
              className="text-left py-3 text-sm font-bold text-foreground/80 hover:text-primary transition-colors uppercase tracking-widest border-b border-border/50"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
