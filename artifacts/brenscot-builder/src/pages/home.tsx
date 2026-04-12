import { NavBar } from '@/components/layout/navbar';
import { Hero } from '@/components/sections/hero';
import { Services } from '@/components/sections/services';
import { Projects } from '@/components/sections/projects';
import { About } from '@/components/sections/about';
import { Process } from '@/components/sections/process';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/layout/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <NavBar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <About />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
