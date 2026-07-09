"use client"

import { Badge } from "@/components/ui/badge"

export function TechnologiesSection() {
  const techCategories = [
    {
      title: "Frontend Stack",
      technologies: [
        { name: "React", level: "Expert" },
        { name: "Next.js", level: "Advanced" },
        { name: "TypeScript", level: "Advanced" },
        { name: "React Native", level: "Advanced" },
        { name: "Tailwind CSS", level: "Advanced" },
        { name: "Material-UI", level: "Advanced" },
      ],
    },
    {
      title: "Backend & Storage",
      technologies: [
        { name: "Python", level: "Intermediate" },
        { name: "Phoenix (Elixir)", level: "Intermediate" },
        { name: "Express.js", level: "Intermediate" },
        { name: "Supabase", level: "Advanced" },
        { name: "Firebase", level: "Advanced" },
      ],
    },
    {
      title: "Cloud & Platform",
      technologies: [
        { name: "AWS", level: "Advanced" },
        { name: "Google Cloud (GCP)", level: "Intermediate" },
        { name: "Docker", level: "Intermediate" },
        { name: "Git", level: "Expert" },
      ],
    },
    {
      title: "AI & APIs",
      technologies: [
        { name: "LangChain", level: "Advanced" },
        { name: "Generative UI", level: "Advanced" },
        { name: "Stripe Payments", level: "Advanced" },
        { name: "REST & GraphQL", level: "Advanced" },
      ],
    },
  ]

  return (
    <section id="technologies" className="py-24 bg-background border-t border-border">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 w-full">
        <div className="max-w-[1152px] mx-auto">
          {/* Header */}
          <div className="text-left mb-16">
            <h2 className="text-h2 font-bold text-foreground tracking-tight mb-4">
              Technologies & Skills
            </h2>
            <p className="text-body text-secondary-text max-w-2xl">
              An inventory of core technologies, tools, and platforms I employ to build high-performance products.
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techCategories.map((category, index) => (
              <div 
                key={index} 
                className="bg-card border border-border rounded-[20px] p-6 sm:p-8 flex flex-col justify-between shadow-none"
              >
                <div>
                  <h3 className="text-h3 font-bold text-foreground tracking-tight mb-6">
                    {category.title}
                  </h3>
                  
                  <div className="divide-y divide-border/40">
                    {category.technologies.map((tech) => (
                      <div 
                        key={tech.name} 
                        className="flex justify-between items-center py-3 first:pt-0 last:pb-0"
                      >
                        <span className="text-small font-medium text-foreground">
                          {tech.name}
                        </span>
                        <Badge 
                          variant="outline" 
                          className="bg-background text-secondary-text border-border/80 font-mono text-caption rounded-[12px] px-2.5 py-0.5"
                        >
                          {tech.level}
                        </Badge>
                      </div>
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
