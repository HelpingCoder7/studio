import Link from "next/link";
import { Github, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    href: "https://github.com/HelpingCoder7",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "mailto:sudarshanshrivastava7@gmail.com",
    icon: Mail,
    label: "Email",
  },
  {
    href: "tel:9827763713",
    icon: Phone,
    label: "Phone",
  },
];

export function Footer() {
  return (
    <footer className="bg-muted py-8">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Sudarshan Shrivastava. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            {socialLinks.map((link) => (
              <Button asChild variant="ghost" size="icon" key={link.label}>
                <Link href={link.href} target="_blank" rel="noopener noreferrer">
                  <link.icon className="h-5 w-5 text-accent" />
                  <span className="sr-only">{link.label}</span>
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
