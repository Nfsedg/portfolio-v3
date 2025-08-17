import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function TechnologiesSection() {
  const techCategories = [
    {
      title: "Frontend",
      technologies: [
        { name: "React", level: "Expert" },
        { name: "Next.js", level: "Advanced" },
        { name: "TypeScript", level: "Advanced" },
        { name: "Sass", level: "Advanced" },
        { name: "Tailwind CSS", level: "Advanced" },
      ],
    },
    {
      title: "Backend",
      technologies: [
        { name: "ASP.NET", level: "Intermediate" },
        { name: "Python", level: "Intermediate" },
        { name: "Express.js", level: "Intermediate" },
        { name: "FastAPI", level: "Intermediate" },
        { name: "Phoenix Framework", level: "Intermediate" },
      ],
    },
    {
      title: "Database",
      technologies: [
        { name: "MySQL", level: "Intermediate" },
        { name: "MongoDB", level: "Intermediate" },
        { name: "Redis", level: "Intermediate" },
        { name: "Prisma", level: "Intermediate" },
        { name: "Firebase", level: "Advanced" },
      ],
    },
    {
      title: "DevOps & Tools",
      technologies: [
        { name: "Docker", level: "Intermediate" },
        { name: "AWS", level: "Intermediate" },
        { name: "Azure", level: "Intermediate" },
        { name: "Git", level: "Expert" },
        { name: "CI/CD", level: "Intermediate" },
      ],
    },
  ]

  const getSkillIndicator = (level: string) => {
    const indicators = {
      Expert: { dots: 4, color: "bg-accent" },
      Advanced: { dots: 3, color: "bg-accent" },
      Intermediate: { dots: 2, color: "bg-accent" },
      Beginner: { dots: 1, color: "bg-accent" },
    }
    return indicators[level as keyof typeof indicators] || indicators["Beginner"]
  }

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
                    const skillIndicator = getSkillIndicator(tech.level)
                    return (
                      <div key={tech.name} className="flex justify-between items-center">
                        <span className="text-foreground font-medium">{tech.name}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-muted-foreground min-w-[80px] text-right">{tech.level}</span>
                          <div className="flex gap-1">
                            {Array.from({ length: 4 }, (_, i) => (
                              <div
                                key={i}
                                className={`w-2 h-2 rounded-full ${
                                  i < skillIndicator.dots ? skillIndicator.color : "bg-muted"
                                }`}
                              />
                            ))}
                          </div>
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
