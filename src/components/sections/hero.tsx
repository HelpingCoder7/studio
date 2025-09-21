import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Github, Mail, Download } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const headshot = PlaceHolderImages.find((img) => img.id === 'headshot');

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-32" id="home">
        <div
          aria-hidden="true"
          className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-20"
        >
          <div className="h-56 bg-gradient-to-br from-primary to-pink-400 blur-[106px] dark:from-blue-700"></div>
          <div className="h-32 bg-gradient-to-r from-accent to-pink-400 blur-[106px] dark:to-indigo-600"></div>
        </div>
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
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Sudarshan Shrivastava
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
