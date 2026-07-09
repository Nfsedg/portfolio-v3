"use client"

import { Calendar, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"

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
    <section id="experience" className="py-24 bg-background border-t border-border">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 w-full">
        <div className="max-w-[1152px] mx-auto">
          {/* Section Header */}
          <div className="text-left mb-20">
            <h2 className="text-h2 font-bold text-foreground tracking-tight mb-4">
              Professional Experience
            </h2>
            <p className="text-body text-secondary-text max-w-2xl">
              My engineering trajectory across SaaS, enterprise platforms, startups, and academic projects.
            </p>
          </div>

          {/* Clean Chronological List */}
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 pt-12 first:pt-0 border-t border-border/50 first:border-t-0"
              >
                {/* Time & Location Column */}
                <div className="md:col-span-1 space-y-2">
                  <span className="text-caption font-mono text-accent uppercase tracking-wider block font-semibold">
                    {exp.period}
                  </span>
                  <div className="flex items-center gap-1.5 text-caption text-secondary-text">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Content Column */}
                <div className="md:col-span-3 space-y-4">
                  <div>
                    <h3 className="text-h3 font-bold text-foreground tracking-tight">
                      {exp.title}
                    </h3>
                    <span className="text-small font-medium text-secondary-text block mt-1">
                      {exp.company}
                    </span>
                  </div>
                  
                  <p className="text-small text-secondary-text leading-relaxed max-w-3xl">
                    {exp.description}
                  </p>

                  {/* Technologies Badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="bg-card text-secondary-text text-caption border-border rounded-[12px] px-3 py-1 font-medium font-mono"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
