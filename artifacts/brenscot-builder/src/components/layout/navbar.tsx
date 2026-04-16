import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation } from 'wouter';

export function NavBar({ lightBackground = false }: { lightBackground?: boolean }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();
  const useDark = isScrolled || lightBackground;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = (link: { name: string; id: string; href?: string }) => {
    setMobileMenuOpen(false);
    if (link.href) {
      setLocation(link.href);
      window.scrollTo({ top: 0 });
      return;
    }
    if (location !== '/') {
      setLocation('/');
      setTimeout(() => {
        if (link.id === 'top') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const element = document.getElementById(link.id);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }
    if (link.id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(link.id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', id: 'top' },
    { name: 'Projects', id: 'projects', href: '/projects' },
    { name: 'About', id: 'about', href: '/about' },
    { name: 'Careers', id: 'careers' },
    { name: 'Partners', id: 'partners', href: '/partners' },
    { name: 'Contact Us', id: 'contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? 'bg-white shadow-md border-b border-black/5 py-4'
          : lightBackground
            ? 'bg-transparent py-8 border-b border-black/5'
            : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <div
          className="cursor-pointer flex-shrink-0"
          onClick={() => navigate({ name: 'Home', id: 'top' })}
          data-testid="logo-home"
        >
          <div className="flex flex-col items-center leading-none select-none">
            <span className={`font-serif text-2xl md:text-3xl font-bold tracking-[0.05em] transition-colors duration-500 ${useDark ? 'text-[#0b1526]' : 'text-white'}`}>BRENSCOT</span>
            <span className={`text-[9px] md:text-[10px] tracking-[0.45em] font-light uppercase mt-0.5 transition-colors duration-500 ${useDark ? 'text-[#0b1526]/60' : 'text-white/80'}`}>BUILDERS</span>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-12">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => navigate(link)}
              data-testid={`nav-${link.id}`}
              className={`text-xs font-medium uppercase tracking-[0.2em] transition-colors whitespace-nowrap ${
                link.name === 'Contact Us'
                  ? 'bg-[#C8A24A] text-white px-6 py-3 hover:bg-[#C8A24A]/85'
                  : useDark
                    ? 'text-[#0b1526] hover:text-[#C8A24A]'
                    : 'text-[#C8A24A] hover:text-[#C8A24A]/60'
              }`}
            >
              {link.name}
            </button>
          ))}
        </nav>

        <button
          className={`lg:hidden p-2 transition-colors duration-500 ${useDark ? 'text-[#0b1526]' : 'text-white'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className={`lg:hidden absolute top-full left-0 right-0 border-b py-6 px-6 flex flex-col gap-2 shadow-2xl ${
          useDark ? 'bg-white border-black/10' : 'bg-[#0a0a0a] border-white/10'
        }`}>
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => navigate(link)}
              data-testid={`mobile-nav-${link.id}`}
              className={`text-left py-4 text-xs font-medium transition-colors uppercase tracking-[0.2em] border-b last:border-none ${
                useDark
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
