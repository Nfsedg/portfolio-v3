import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function WorkSection() {
  const projects = [
    {
      title: "Job Board (UPQROO University)",
      description: "Full-stack Job board solution for my university to connect talents with jobs",
      image: "/upqroo-bolsa.png",
      technologies: ["NextJS", "Prisma", "MySQL", "Google OAuth", "Apache2"],
      liveUrl: "http://redtalento.upqroo.edu.mx",
      githubUrl: "https://github.com/upqroo-organization/upqroo-bolsa-empleo",
    },
    {
      title: "Insurance Quotation App (Clupp)",
      description: "Application for one of my job to quote insurance subscription.",
      image: "/clupp.png",
      technologies: ["ReactJS", "Firebase", "Stripe", "Mobile Design"],
      liveUrl: "https://cotizador-clupp.web.app/",
    },
    {
      title: "Where in the world",
      description: "Country data search",
      image: "https://i.imgur.com/atHOy47.png",
      technologies: ["ReactJS"],
      liveUrl: "https://nfsedg.github.io/restapi-countrys/",
      githubUrl: "https://github.com/Nfsedg/restapi-countrys/tree/master",
    },
    {
      title: "Social Media App",
      description: "Collaborative project management tool with real-time updates",
      image: "https://i.imgur.com/B1dr3i2.png",
      technologies: ["ReactJS", "MongoDB", "ExpressJS", "NodeJS"],
      liveUrl: "https://the-new-social-media-app.vercel.app/",
      githubUrl: "https://github.com/Nfsedg/TheNewSocialMedia-app",
    },
  ]

  return (
    <section id="work" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 font-[family-name:var(--font-work-sans)]">
            Featured Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my expertise in full-stack development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-[family-name:var(--font-work-sans)]">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button size="sm" variant="outline" className="flex items-center gap-2 bg-transparent">
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline" className="flex items-center gap-2 bg-transparent">
                    <Github className="h-4 w-4" />
                    Code
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
