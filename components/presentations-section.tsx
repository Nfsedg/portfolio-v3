import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Calendar, Users } from "lucide-react"

export function PresentationsSection() {
  const presentations = [
    {
      title: "Modern React Patterns",
      event: "React Tokyo Meetup",
      date: "March 2024",
      audience: "150+ developers",
      description:
        "Deep dive into advanced React patterns including compound components, render props, and custom hooks for scalable applications.",
      topics: ["React", "Design Patterns", "Performance"],
      slideUrl: "#",
      videoUrl: "#",
    },
    {
      title: "Microservices Architecture",
      event: "Tech Conference 2023",
      date: "November 2023",
      audience: "300+ attendees",
      description: "Best practices for designing and implementing microservices architecture with Node.js and Docker.",
      topics: ["Microservices", "Node.js", "Docker", "Architecture"],
      slideUrl: "#",
      videoUrl: "#",
    },
    {
      title: "Full-Stack TypeScript",
      event: "JavaScript Summit",
      date: "August 2023",
      audience: "200+ developers",
      description: "Building type-safe applications from frontend to backend using TypeScript, Prisma, and tRPC.",
      topics: ["TypeScript", "Full-Stack", "Type Safety"],
      slideUrl: "#",
      videoUrl: "#",
    },
    {
      title: "Performance Optimization",
      event: "Web Performance Meetup",
      date: "May 2023",
      audience: "100+ developers",
      description:
        "Techniques for optimizing web application performance including code splitting, lazy loading, and caching strategies.",
      topics: ["Performance", "Optimization", "Web Vitals"],
      slideUrl: "#",
      videoUrl: "#",
    },
  ]

  return (
    <section id="presentations" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 font-[family-name:var(--font-work-sans)]">
            Presentations & Talks
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sharing knowledge and insights with the developer community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {presentations.map((presentation, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 border-border/50">
              <CardHeader>
                <CardTitle className="text-xl font-[family-name:var(--font-work-sans)]">{presentation.title}</CardTitle>
                <CardDescription className="text-accent font-medium">{presentation.event}</CardDescription>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {presentation.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {presentation.audience}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">{presentation.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {presentation.topics.map((topic) => (
                    <Badge key={topic} variant="outline" className="text-xs">
                      {topic}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button size="sm" variant="outline" className="flex items-center gap-2 bg-transparent">
                    <ExternalLink className="h-4 w-4" />
                    Slides
                  </Button>
                  <Button size="sm" variant="outline" className="flex items-center gap-2 bg-transparent">
                    <ExternalLink className="h-4 w-4" />
                    Video
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
