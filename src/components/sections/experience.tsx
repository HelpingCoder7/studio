import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const experiences = [
    {
        company: "Dinfinity Educenge LLP",
        role: "Flutter Developer Intern",
        period: "Internship",
        description: [
            "Developed and maintained cross-platform mobile applications using Flutter and Dart.",
            "Collaborated with the design team to implement user-friendly interfaces.",
            "Integrated REST APIs to connect applications to back-end services.",
            "Participated in code reviews and contributed to improving code quality.",
        ]
    }
]

export function Experience() {
  return (
    <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
                Work Experience
            </h2>
            <p className="mt-4 max-w-2xl text-base text-foreground/80 md:text-lg">
                My professional journey and contributions.
            </p>
        </div>
        <div className="relative md:pl-8">
             <div className="absolute left-4 top-0 h-full w-0.5 -translate-x-1/2 bg-border md:left-1/2"></div>
            {experiences.map((exp, index) => (
                <div key={index} className="relative mb-8 pl-12 md:pl-0 md:mb-8">
                    <div className="absolute left-4 top-4 h-4 w-4 -translate-x-1/2 rounded-full bg-primary ring-4 ring-background md:left-1/2"></div>
                    <Card className={`md:w-5/12 ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
                        <CardHeader>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                                <CardTitle className="text-primary">{exp.role}</CardTitle>
                                <span className="text-sm font-medium text-primary whitespace-nowrap bg-primary/10 px-2 py-0.5 rounded-md">{exp.period}</span>
                            </div>
                            <CardDescription>{exp.company}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-sm text-foreground/80 list-disc pl-4">
                                {exp.description.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            ))}
        </div>
    </div>
  );
}
