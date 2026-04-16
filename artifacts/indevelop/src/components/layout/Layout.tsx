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

  const isHeroPage = ["/", "/our-story", "/community", "/contact", "/news", "/our-people"].includes(location);
  const useWhiteText = isHeroPage && !scrolled;

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-sm py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
          <Link href="/" className={`flex flex-col items-start leading-none z-10 transition-colors ${useWhiteText ? "text-white" : "text-primary"}`} data-testid="link-logo">
            <span className="text-xl font-sans font-bold tracking-[0.15em] uppercase">INDEVELOP</span>
            <span className={`text-[8px] tracking-[0.3em] uppercase font-medium mt-0.5 ${useWhiteText ? "text-white/70" : "text-primary/50"}`}>Property Developers</span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.filter(l => l.label !== "Contact").map((link) => {
              const isActive = link.href === "/" ? location === "/" : location.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[13px] font-medium transition-colors ${
                    isActive
                      ? "text-secondary"
                      : useWhiteText
                        ? "text-white/90 hover:text-white"
                        : "text-primary/70 hover:text-primary"
                  }`}
                  data-testid={`link-nav-${link.label.toLowerCase().replace(" ", "-")}`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="bg-secondary text-white text-[13px] font-semibold px-6 py-2.5 rounded-full hover:bg-secondary/90 transition-colors"
              data-testid="link-nav-contact"
            >
              Contact Us
            </Link>
          </div>

          <button
            className={`lg:hidden z-10 p-2 -mr-2 ${useWhiteText ? "text-white" : "text-primary"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center lg:hidden"
          >
            <div className="flex flex-col items-center gap-6">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    className={`text-lg font-medium transition-colors ${
                      location === link.href ? "text-secondary" : "text-primary hover:text-secondary"
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

      <footer className="bg-[#1a1a2e] text-white py-20 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="mb-6">
              <h3 className="font-sans text-xl font-bold tracking-[0.15em] uppercase leading-none">INDEVELOP</h3>
              <span className="text-[8px] tracking-[0.3em] uppercase font-medium text-white/50 mt-0.5 block">Property Developers</span>
            </div>
            <p className="text-white/60 leading-relaxed max-w-sm text-sm">
              Premium Australian property development. Shaping the skyline of tomorrow with quiet authority and uncompromised quality.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-6 text-secondary">Contact</h4>
            <p className="text-white/60 leading-loose text-sm">
              Head Office<br />
              Brisbane QLD 4000<br />
              +61 (0)7 3000 0000<br />
              enquiries@indevelop.com.au
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-6 text-secondary">Navigation</h4>
            <ul className="flex flex-col gap-3 text-sm text-white/60">
              <li><Link href="/our-story" className="hover:text-secondary transition-colors">Our Story</Link></li>
              <li><Link href="/portfolio" className="hover:text-secondary transition-colors">Portfolio</Link></li>
              <li><Link href="/our-people" className="hover:text-secondary transition-colors">Our People</Link></li>
              <li><Link href="/news" className="hover:text-secondary transition-colors">News</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 text-xs text-white/40 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Indevelop Pty Ltd. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
