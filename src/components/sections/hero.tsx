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
    <section className="relative overflow-hidden py-24 md:py-32" id="home">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <Avatar className="h-32 w-32 border-4 border-primary/50 mb-6">
            <AvatarImage
              src={headshot?.imageUrl}
              alt="Sudarshan Shrivastava"
              data-ai-hint={headshot?.imageHint}
            />
            <AvatarFallback>SS</AvatarFallback>
          </Avatar>
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl min-h-[84px] md:min-h-[100px] lg:min-h-[128px]">
            {typedName}
            <span className={cn("border-l-4 border-primary ml-1", showCursor ? "animate-pulse" : "opacity-0", typedName.length < fullName.length ? "" : "inline-block")}></span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-foreground/80 md:text-xl">
            I&apos;m an <span className="font-semibold text-primary">Application Developer</span> crafting seamless and innovative digital experiences.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Button asChild variant="ghost" size="icon">
              <a href="https://github.com/HelpingCoder7" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon">
              <a href="mailto:sudarshanshrivastava7@gmail.com">
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
