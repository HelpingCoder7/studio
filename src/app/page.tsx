import { Header } from '@/components/header';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Skills } from '@/components/sections/skills';
import { Projects } from '@/components/sections/projects';
import { Experience } from '@/components/sections/experience';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/footer';
import { AnimateOnScroll } from '@/components/animate-on-scroll';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background/80 backdrop-blur-sm">
      <Header />
      <main className="flex-1">
        <Hero />
        <AnimateOnScroll id="about">
          <About />
        </AnimateOnScroll>
        <AnimateOnScroll id="skills">
          <Skills />
        </AnimateOnScroll>
        <AnimateOnScroll id="experience">
          <Experience />
        </AnimateOnScroll>
        <AnimateOnScroll id="projects">
          <Projects />
        </AnimateOnScroll>
        <AnimateOnScroll id="contact">
          <Contact />
        </AnimateOnScroll>
      </main>
      <Footer />
    </div>
  );
}
