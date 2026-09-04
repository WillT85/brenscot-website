import { NavBar } from '@/components/layout/navbar';
import { Hero } from '@/components/sections/hero';
import { Services } from '@/components/sections/services';
import { Projects } from '@/components/sections/projects';
import { About } from '@/components/sections/about';
import { Careers } from '@/components/sections/careers';
import { Partners } from '@/components/sections/partners';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/layout/footer';
import { SeoHead } from '@/seo/SeoHead';
import { getStaticPage } from '@/seo/config';

const homeSeo = getStaticPage('/')!;

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <SeoHead {...homeSeo} />
      <NavBar />
      <main>
        <Hero />
        <Projects />
        <Services />
        <About />
        <Partners />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
