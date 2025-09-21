import {
  Smartphone,
  TabletSmartphone,
  ServerCog,
  Server,
  Package,
  ShipWheel,
  Database,
  DatabaseZap,
  Github,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skills = [
  { name: "Flutter", icon: Smartphone },
  { name: "React Native", icon: TabletSmartphone },
  { name: "Django", icon: ServerCog },
  { name: "Node.js", icon: Server },
  { name: "React.js", icon: TabletSmartphone },
  { name: "Docker", icon: Package },
  { name: "Kubernetes", icon: ShipWheel },
  { name: "MySQL", icon: Database },
  { name: "MongoDB", icon: Database },
  { name: "Redis", icon: DatabaseZap },
  { name: "GitHub", icon: Github },
];

export function Skills() {
  return (
    <div className="bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
            My Tech Stack
          </h2>
          <p className="mt-4 max-w-2xl text-foreground/80 md:text-lg">
            A collection of tools and technologies I use to build modern, robust applications.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {skills.map((skill) => (
            <Card key={skill.name} className="group flex flex-col items-center justify-center p-4 text-center transition-all duration-300 hover:bg-primary/5 hover:-translate-y-1">
              <skill.icon className="h-10 w-10 mb-2 text-primary transition-transform duration-300 group-hover:scale-110" />
              <p className="text-sm font-medium">{skill.name}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
