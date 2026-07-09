import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Front-End & AI Integration Engineer",
      company: "Exploration & Discovery Technologies (Vemio)",
      location: "Remote, México",
      period: "2024 - Present",
      description:
        "Partnered with Product Owners to design and architect Next.js web applications and mobile apps (React Native) from scratch. Collaborated with key stakeholders to align business requirements with clean, highly interactive user interfaces. Integrated AI agents with LangChain and Generative UI to build conversational copilot flows that guide users across data dashboards. Designed and implemented predictive analytics, AI-guided promotion modules, and interactive key performance indicators (KPI) charts for retail and supply chain analytics. Maintained code quality through documentation, custom coding standards, and rigorous code reviews.",
      technologies: ["Next.js", "TypeScript", "Supabase", "React Native", "Python", "LangChain", "Generative UI"],
    },
    {
      title: "Front-End Developer",
      company: "Exploration & Discovery Technologies (Grupo Femsa-Coca Cola)",
      location: "Remote, México",
      period: "2024",
      description:
        "Developed web dashboards for tracking metrics, incident reports, and real-time delivery logs utilized across Latin America. Diagnosed and resolved complex frontend bugs in React class and function components, while reviewing Elixir/Phoenix backend services. Migrated the legacy repository from Webpack to Vite, updating key dependencies and refactoring security and api client layers. Propositioned and delivered core web features, successfully rebranding the platform's user interface. Designed and deployed cloud-based MVPs leveraging AWS services (Cognito, IoT Core, S3, EC2, Lambda) and earned the AWS Certified Cloud Practitioner credential.",
      technologies: ["React", "Phoenix (Elixir)", "Vite", "Webpack", "AWS", "SQL Server"],
    },
    {
      title: "Front-End Developer",
      company: "Clupp",
      location: "Remote, México",
      period: "2022 - 2023",
      description:
        "Engineered new application modules for an on-demand insurance startup serving automobiles, motorcycles, and smartphones. Built custom maps using the Google Maps API to track and manage physical outdoor marketing campaigns. Optimized Firebase database queries and client-side caching to reduce load times and Firestore consumption costs by up to 80%. Developed a high-converting responsive insurance quotation flow integrated with Stripe payments and user attribution tracking. Created a document ingestion pipeline that utilized third-party PDF extraction APIs and custom regular expressions (Regex) to automate customer onboarding forms.",
      technologies: ["React", "Material-UI", "Firebase", "Express.js", "Stripe", "GCP"],
    },
    {
      title: "Intern Full-Stack Developer",
      company: "Universidad Politécnica de Quintana Roo",
      location: "Cancún, México",
      period: "2024",
      description:
        "Designed and implemented the university's official job board platform to connect students and alumni with employers. Selected the modern web stack to match institutional infrastructure limitations, configured the Apache2 production server, and managed database integrations.",
      technologies: ["Next.js", "TypeScript", "Prisma", "MySQL", "Apache2"],
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
