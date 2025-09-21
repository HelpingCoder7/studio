import { Card, CardContent } from "@/components/ui/card";
import { Award, Zap } from "lucide-react";
import { AIContentRefiner } from "@/components/ai-content-refiner";

const aboutText = `A passionate Full Stack Developer with a knack for building elegant and efficient applications. I have experience in hackathons and was awarded the 'Best Project Award' in college for my innovative work. I thrive on solving complex problems and continuously learning new technologies.`;

export function About() {
  return (
    <div className="container mx-auto max-w-7xl px-4 md:px-6">
      <div className="grid gap-12 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
            About Me
          </h2>
          <p className="text-foreground/80">
            {aboutText}
          </p>
        </div>
        <div className="space-y-6">
          <Card className="bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-md bg-primary/10 p-2 text-primary">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary">Best Project Award</h3>
                  <p className="text-sm text-foreground/70">
                    Recognized for excellence and innovation in my college project.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-md bg-accent/10 p-2 text-accent">
                  <Zap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary">Hackathon Enthusiast</h3>
                  <p className="text-sm text-foreground/70">
                    Actively participated in multiple hackathons, honing my rapid development and problem-solving skills.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
