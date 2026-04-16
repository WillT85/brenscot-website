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
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between">
          <Link href="/" className={`flex flex-col items-start leading-none z-10 transition-colors shrink-0 ${useWhiteText ? "text-white" : "text-primary"}`} data-testid="link-logo" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            <span className="text-xl sm:text-2xl font-bold tracking-[0.12em] uppercase">INDEVELOP</span>
            <span className={`text-[8px] sm:text-[9px] tracking-[0.25em] uppercase font-medium mt-0.5 ${useWhiteText ? "text-white/70" : "text-primary/50"}`}>Property Developers</span>
          </Link>

          <div className="hidden lg:flex items-center gap-4 xl:gap-8">
            {NAV_LINKS.filter(l => l.label !== "Contact").map((link) => {
              const isActive = link.href === "/" ? location === "/" : location.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[12px] xl:text-[13px] font-medium transition-colors whitespace-nowrap ${
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
              className="bg-secondary text-white text-[12px] xl:text-[13px] font-semibold px-5 xl:px-6 py-2.5 rounded-full hover:bg-secondary/90 transition-colors whitespace-nowrap"
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

      <footer className="bg-white text-primary py-20 px-8 border-t border-primary/10">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <Link href="/" className="flex flex-col items-center leading-none text-primary mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            <span className="text-2xl font-bold tracking-[0.12em] uppercase">INDEVELOP</span>
            <span className="text-[9px] tracking-[0.25em] uppercase font-medium text-primary/50 mt-0.5">Property Developers</span>
          </Link>
          <p className="text-primary/60 leading-relaxed max-w-md text-sm">
            Premium Australian property development. Shaping the skyline of tomorrow with quiet authority and uncompromised quality.
          </p>
        </div>
      </footer>
      <div className="bg-[#1a1a2e] py-6 px-8">
        <div className="max-w-7xl mx-auto text-xs text-white/40 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Indevelop Pty Ltd. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </div>
  );
}
