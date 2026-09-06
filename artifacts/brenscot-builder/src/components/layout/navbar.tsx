import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'wouter';

const navLinks: { name: string; href: string; id: string }[] = [
  { name: 'Home', href: '/', id: 'top' },
  { name: 'Projects', href: '/projects', id: 'projects' },
  { name: 'Process', href: '/process', id: 'process' },
  { name: 'About', href: '/about', id: 'about' },
  { name: 'Careers', href: '/#careers', id: 'careers' },
  { name: 'Partners', href: '/partners', id: 'partners' },
  { name: 'Contact Us', href: '/contact', id: 'contact' },
];

function navClassName(name: string, useDark: boolean) {
  return `text-xs font-medium uppercase tracking-[0.2em] transition-colors whitespace-nowrap ${
    name === 'Contact Us'
      ? 'bg-[#C8A24A] text-white px-6 py-3 hover:bg-[#C8A24A]/85'
      : useDark
        ? 'text-[#0b1526] hover:text-[#C8A24A]'
        : 'text-[#C8A24A] hover:text-[#C8A24A]/60'
  }`;
}

export function NavBar({ lightBackground = false }: { lightBackground?: boolean }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const useDark = isScrolled || lightBackground;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  const handleHomeClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    closeMenu();
    if (location === '/') {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleCareersClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    closeMenu();
    if (location === '/') {
      event.preventDefault();
      document.getElementById('careers')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
        <Link
          href="/"
          onClick={handleHomeClick}
          className="flex-shrink-0"
          data-testid="logo-home"
          aria-label="Brenscot Builders home"
        >
          <div className="flex flex-col items-center leading-none select-none">
            <span className={`font-serif text-2xl md:text-3xl font-bold tracking-[0.05em] transition-colors duration-500 ${useDark ? 'text-[#0b1526]' : 'text-white'}`}>BRENSCOT</span>
            <span className={`text-[9px] md:text-[10px] tracking-[0.45em] font-light uppercase mt-0.5 transition-colors duration-500 ${useDark ? 'text-[#0b1526]/60' : 'text-white/80'}`}>BUILDERS</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-5 xl:gap-10">
          {navLinks.map((link) =>
            link.id === 'careers' ? (
              <a
                key={link.name}
                href={link.href}
                onClick={handleCareersClick}
                data-testid={`nav-${link.id}`}
                className={navClassName(link.name, useDark)}
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                onClick={link.href === '/' ? handleHomeClick : closeMenu}
                data-testid={`nav-${link.id}`}
                className={navClassName(link.name, useDark)}
              >
                {link.name}
              </Link>
            )
          )}
        </nav>

        <button
          type="button"
          className={`lg:hidden p-2 transition-colors duration-500 ${useDark ? 'text-[#0b1526]' : 'text-white'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="button-mobile-menu"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className={`lg:hidden absolute top-full left-0 right-0 border-b py-6 px-6 flex flex-col gap-2 shadow-2xl ${
          useDark ? 'bg-white border-black/10' : 'bg-[#0a0a0a] border-white/10'
        }`}>
          {navLinks.map((link) => {
            const className = `text-left py-4 text-xs font-medium transition-colors uppercase tracking-[0.2em] border-b last:border-none ${
              useDark
                ? 'text-[#0b1526] hover:text-[#C8A24A] border-black/5'
                : 'text-[#C8A24A] hover:text-[#C8A24A]/60 border-white/5'
            }`;
            return link.id === 'careers' ? (
              <a
                key={link.name}
                href={link.href}
                onClick={handleCareersClick}
                data-testid={`mobile-nav-${link.id}`}
                className={className}
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                onClick={link.href === '/' ? handleHomeClick : closeMenu}
                data-testid={`mobile-nav-${link.id}`}
                className={className}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
