"use client";

import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Github, Mail, Download } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const headshot = PlaceHolderImages.find((img) => img.id === 'headshot');
const fullName = "Sudarshan Shrivastava";

export function Hero() {
  const [typedName, setTypedName] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    // Reset on mount
    setTypedName('');
  }, []);

  useEffect(() => {
    if (typedName.length < fullName.length) {
      const timeoutId = setTimeout(() => {
        setTypedName(fullName.slice(0, typedName.length + 1));
      }, 100);
      return () => clearTimeout(timeoutId);
    } else {
      // Keep cursor blinking after typing is complete
      const cursorInterval = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 500);
      return () => clearInterval(cursorInterval);
    }
  }, [typedName]);

  return (
    <section className="relative overflow-hidden py-16 md:py-24" id="home">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <Avatar className="h-28 w-28 border-4 border-primary/50 mb-4 md:h-32 md:w-32">
            <AvatarImage
              src={headshot?.imageUrl}
              alt="Sudarshan Shrivastava"
              data-ai-hint={headshot?.imageHint}
            />
            <AvatarFallback>SS</AvatarFallback>
          </Avatar>
          <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl min-h-[40px] sm:min-h-[48px] md:min-h-[60px] lg:min-h-[72px]">
            {typedName}
            <span className={cn("border-l-2 sm:border-l-4 border-primary ml-1", showCursor ? "animate-pulse" : "opacity-0", typedName.length < fullName.length ? "" : "inline-block")}></span>
          </h1>
          <p className="mt-3 max-w-xl text-base text-foreground/80 md:mt-4 md:text-lg">
            I&apos;m an <span className="font-semibold text-primary">Application Developer</span> crafting seamless and innovative digital experiences.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row w-full max-w-xs sm:max-w-none sm:w-auto justify-center gap-3">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>
          <div className="mt-6 flex items-center justify-center gap-2">
            <Button asChild variant="ghost" size="icon">
              <a href="https://github.com/HelpingCoder7" target="_blank" rel="noopener noreferrer">
                <Github className="h-7 w-7 text-accent" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon">
              <a href="mailto:sudarshanshrivastava7@gmail.com">
                <Mail className="h-7 w-7 text-accent" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
