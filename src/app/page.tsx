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
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header />
      <main className="flex flex-1 flex-col gap-y-12 px-4 sm:px-6 md:gap-y-24 lg:px-8">
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
        <div id="projects">
          <Projects />
        </div>
        <AnimateOnScroll id="contact">
          <Contact />
        </AnimateOnScroll>
      </main>
      <Footer />
    </div>
  );
}
