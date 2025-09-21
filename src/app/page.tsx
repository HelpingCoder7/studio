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
import { useEffect, useState } from 'react';

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (position / scrollHeight) * 100;
    setScrollPosition(scrollPercentage);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className="flex min-h-screen flex-col bg-background/80 backdrop-blur-sm scroll-gradient"
      style={{ backgroundPosition: `50% ${scrollPosition}%` }}
    >
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
