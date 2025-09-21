import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "Women Safety App",
    description: "A mobile application designed to enhance personal safety for women with features like location sharing, emergency alerts, and a network of trusted contacts.",
    image: PlaceHolderImages.find((img) => img.id === "women-safety"),
    tags: ["Flutter", "Mobile"],
    github: "https://github.com/HelpingCoder7/Women-safety-app-frontend",
    live: null,
  },
  {
    title: "Traffic Intelligence Detection System",
    description: "A system that uses computer vision to analyze traffic flow, detect congestion, and provide real-time data for smarter traffic management.",
    image: PlaceHolderImages.find((img) => img.id === "traffic-system"),
    tags: ["Python", "Computer Vision"],
    github: "https://github.com/HelpingCoder7/Traffic-Intelligence-Detection-System",
    live: null,
  },
  {
    title: "Music App",
    description: "A sleek and intuitive music player application with playlist management, online streaming, and a personalized user experience.",
    image: PlaceHolderImages.find((img) => img.id === "music-app"),
    tags: ["Flutter", "UI/UX"],
    github: "https://github.com/HelpingCoder7",
    live: null,
  },
  {
    title: "Weather App",
    description: "A clean and simple weather forecasting application providing real-time weather updates, hourly and daily forecasts, and a beautiful user interface.",
    image: PlaceHolderImages.find((img) => img.id === "weather-app"),
    tags: ["Web", "API"],
    github: "https://github.com/HelpingCoder7/my",
    live: "https://helpingcoder7.github.io/myweather.com/",
  },
];

export function Projects() {
  return (
    <div className="bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 max-w-2xl text-foreground/80 md:text-lg">
            Here are some of the projects I&apos;m proud of.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.title} className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-card/60 backdrop-blur-lg border-border shadow-lg">
              {project.image && (
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={project.image.imageUrl}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={project.image.imageHint}
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/80">{project.description}</p>
              </CardContent>
              <CardFooter className="gap-2">
                {project.github && (
                  <Button asChild variant="outline" className="flex-1">
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-5 w-5 text-accent" />
                      GitHub
                    </Link>
                  </Button>
                )}
                {project.live && (
                  <Button asChild className="flex-1">
                    <Link href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-5 w-5 text-accent" />
                      Live Demo
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
