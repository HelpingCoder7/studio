"use client";

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
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      <Header />
      <main className="flex-1 flex flex-col gap-y-12 sm:gap-y-16 md:gap-y-24 px-4 sm:px-6 lg:px-8">
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
