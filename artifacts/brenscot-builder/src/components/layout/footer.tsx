import { Link } from 'wouter';

const footerLinks = [
  { name: 'Projects', href: '/projects' },
  { name: 'Process', href: '/process' },
  { name: 'Warehouse builders', href: '/warehouse-builders-brisbane' },
  { name: 'Design and construct', href: '/design-and-construct-warehouse-brisbane' },
  { name: 'About', href: '/about' },
  { name: 'Careers', href: '/#careers' },
  { name: 'Partners', href: '/partners' },
  { name: 'Contact Us', href: '/contact' },
];

export function Footer() {
  return (
    <footer className="bg-[#081220] text-white pt-24 pb-12 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-white/10 pb-16 mb-12 gap-12">
          <div>
            <Link href="/" className="inline-flex items-baseline gap-3 leading-none select-none mb-8">
              <span className="font-serif text-white text-3xl font-bold tracking-[0.05em]">BRENSCOT</span>
              <span className="text-white/60 text-[10px] tracking-[0.45em] font-light uppercase">BUILDERS</span>
            </Link>
            <p className="text-white/40 text-sm font-light leading-relaxed md:whitespace-nowrap">
              Industrial warehouses that lead the market — freestanding or multi-unit, built from the ground up.
            </p>
          </div>
          
          <nav className="flex flex-wrap gap-8 md:gap-12">
            {footerLinks.map((link) =>
              link.href.startsWith('/#') ? (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[10px] uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[10px] uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              )
            )}
          </nav>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] text-white/30 gap-6">
          <div>&copy; {new Date().getFullYear()} Brenscot Builders.</div>
          <div className="flex gap-8">
            <Link href="/privacy-policy" className="hover:text-white transition-colors cursor-pointer">Privacy</Link>
            <Link href="/terms-conditions" className="hover:text-white transition-colors cursor-pointer">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
