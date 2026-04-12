import { Hammer } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border/10 text-secondary-foreground py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-border/10 pb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6 text-secondary-foreground">
              <div className="w-8 h-8 bg-primary text-primary-foreground flex items-center justify-center">
                <Hammer className="w-4 h-4" />
              </div>
              <span className="font-serif font-bold text-xl tracking-tight">Brenscot Builder</span>
            </div>
            <p className="text-secondary-foreground/60 text-sm max-w-sm leading-relaxed">
              Quality craftsmanship, solid foundations, and personal service for residential and commercial projects. Building legacies from the ground up since 2008.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-secondary-foreground/60">
              <li><button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-primary transition-colors">Services</button></li>
              <li><button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-primary transition-colors">Projects</button></li>
              <li><button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-primary transition-colors">About Us</button></li>
              <li><button onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-primary transition-colors">Our Process</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-secondary-foreground/60">
              <li>New Construction</li>
              <li>Renovations</li>
              <li>Commercial Projects</li>
              <li>Project Management</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-secondary-foreground/40 gap-4">
          <div>&copy; {new Date().getFullYear()} Brenscot Builder. All rights reserved.</div>
          <div className="flex gap-6">
            <span className="hover:text-secondary-foreground/80 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-secondary-foreground/80 cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
