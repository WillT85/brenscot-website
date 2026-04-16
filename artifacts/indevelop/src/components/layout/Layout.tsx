import { ReactNode, useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/our-story", label: "Our Story" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/community", label: "Community" },
  { href: "/our-people", label: "Our People" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

export function Layout({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  const isTransparentHero = ["/", "/our-story", "/community", "/contact", "/news"].includes(location);
  const navBg = scrolled || mobileMenuOpen ? "bg-primary text-white shadow-md" : isTransparentHero ? "bg-transparent text-white" : "bg-primary text-white";

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 px-6 md:px-8 py-6 flex items-center justify-between border-b ${
          scrolled ? "border-primary-foreground/10 py-4" : "border-transparent"
        } ${navBg}`}
      >
        <Link href="/" className="text-2xl font-serif tracking-[0.2em] font-bold hover:text-secondary transition-colors z-10" data-testid="link-logo">
          INDEVELOP
        </Link>
        
        <div className="hidden lg:flex gap-8 text-xs tracking-widest uppercase font-medium">
          {NAV_LINKS.map((link) => {
            const isActive = link.href === "/" ? location === "/" : location.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors ${isActive ? "text-secondary" : "hover:text-secondary"}`}
                data-testid={`link-nav-${link.label.toLowerCase().replace(" ", "-")}`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <button
          className="lg:hidden z-10 p-2 -mr-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          data-testid="button-mobile-menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-primary flex flex-col items-center justify-center lg:hidden"
          >
            <div className="flex flex-col items-center gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    className={`text-lg tracking-widest uppercase font-medium transition-colors ${
                      location === link.href ? "text-secondary" : "text-white hover:text-secondary"
                    }`}
                    data-testid={`link-mobile-nav-${link.label.toLowerCase().replace(" ", "-")}`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={location}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="bg-primary text-white py-20 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h3 className="font-serif text-2xl mb-6 tracking-widest text-secondary">INDEVELOP</h3>
            <p className="text-white/70 leading-relaxed max-w-sm">
              Premium Australian property development. Shaping the skyline of tomorrow with quiet authority and uncompromised quality.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase mb-6 text-secondary">Contact</h4>
            <p className="text-white/70 leading-loose text-sm">
              Head Office<br />
              Brisbane QLD 4000<br />
              +61 (0)7 3000 0000<br />
              enquiries@indevelop.com.au
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase mb-6 text-secondary">Navigation</h4>
            <ul className="flex flex-col gap-3 text-sm text-white/70">
              <li><Link href="/our-story" className="hover:text-secondary transition-colors">Our Story</Link></li>
              <li><Link href="/portfolio" className="hover:text-secondary transition-colors">Portfolio</Link></li>
              <li><Link href="/our-people" className="hover:text-secondary transition-colors">Our People</Link></li>
              <li><Link href="/news" className="hover:text-secondary transition-colors">News</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 text-xs text-white/50 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Indevelop Pty Ltd. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
