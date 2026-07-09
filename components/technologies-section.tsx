import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function TechnologiesSection() {
  const techCategories = [
    {
      title: "Frontend",
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
      title: "Backend & Services",
      technologies: [
        { name: "Python", level: "Intermediate" },
        { name: "Phoenix (Elixir)", level: "Intermediate" },
        { name: "Express.js", level: "Intermediate" },
        { name: "Supabase", level: "Advanced" },
        { name: "Firebase", level: "Advanced" },
      ],
    },
    {
      title: "Cloud & Infrastructure",
      technologies: [
        { name: "AWS", level: "Advanced" },
        { name: "Google Cloud (GCP)", level: "Intermediate" },
        { name: "Docker", level: "Intermediate" },
        { name: "Git", level: "Expert" },
      ],
    },
    {
      title: "AI & Integrations",
      technologies: [
        { name: "LangChain", level: "Advanced" },
        { name: "Generative UI", level: "Advanced" },
        { name: "Stripe", level: "Advanced" },
        { name: "REST & GraphQL APIs", level: "Advanced" },
      ],
    },
  ]

  // Removed getSkillIndicator since we won't show dots

  return (
    <section id="technologies" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 font-[family-name:var(--font-work-sans)]">
            Technologies & Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {techCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-accent font-[family-name:var(--font-work-sans)]">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.technologies.map((tech) => {
                    return (
                      <div key={tech.name} className="flex justify-between items-center">
                        <span className="text-foreground font-medium">{tech.name}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-muted-foreground min-w-[80px] text-right">
                            {tech.level}
                          </span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
