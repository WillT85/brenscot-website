import { NavBar } from '@/components/layout/navbar';
import { Hero } from '@/components/sections/hero';
import { Services } from '@/components/sections/services';
import { Video } from '@/components/sections/video';
import { Projects } from '@/components/sections/projects';
import { About } from '@/components/sections/about';
import { Careers } from '@/components/sections/careers';
import { Partners } from '@/components/sections/partners';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/layout/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <NavBar />
      <main>
        <Hero />
        <Video />
        <Services />
        <Projects />
        <About />
        <Careers />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
