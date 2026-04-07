import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Front-end Developer",
      company: "Exploration & Discovery Technologies",
      location: "Remote, México",
      period: "2024 - Present",
      description:
        "Mantaining legacy project with old technologies, and do migration to new frameworks to get better performance on client side, splitting the backend and frontend code. Review code and collaborating with differents teams. Propouse new features or necesities from the UX/UI views to the actual implementation. Create new projects proposing the better front end stack and best infraestructure requirements to reduce costs according of the project type. Verify bugs on DB, backend or frontend code if was necessary.",
      technologies: ["NextJS", "AWS", "Docker", "SQL Server", "Webpack", "Phoenix Framework", "TypeScript", "Langchain"],
    },
    {
      title: "Front-end Developer",
      company: "Clupp",
      location: "Remote, México",
      period: "2022 - 2023",
      description:
        "Developed and maintained multiple client projects using modern web technologies. Create and implement new features for existing projects and new web apps, highly focused on mobile experience, and opened to do quick changes according of users necesities. Improve web performance and Firebase request calls to reduce time and cost",
      technologies: ["ReactJS", "Firebase", "MaterialUI", "Stripe", "NodeJS"],
    },
    {
      title: "Intern Full-Stack",
      company: "Universidad Politécnica de Quintana Roo",
      location: "Cancún, México",
      period: "2024 - 2024",
      description:
        "Build a complete web application for job searching focused for students and graduates of university. I propuse all the stack technologies, adapted for the server capabilities and which type of DB are more used on the server.",
      technologies: ["NextJS", "TypeScript", "Prisma", "Tailwind", "Apache2"],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 font-[family-name:var(--font-work-sans)]">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey in software development across different companies and technologies
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border"></div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-3 h-3 bg-accent rounded-full border-2 border-background z-10"></div>

                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"} ml-12 md:ml-0`}>
                  <Card className="hover:shadow-md transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="text-xl font-[family-name:var(--font-work-sans)]">{exp.title}</CardTitle>
                      <CardDescription className="text-accent font-medium">{exp.company}</CardDescription>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
