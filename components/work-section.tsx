import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function WorkSection() {
  const projects = [
    {
      title: "AI-Powered Supply Chain SaaS (Vemio)",
      description: "Enterprise SaaS platform featuring generative AI copilots (built with LangChain and Generative UI), predictive demand forecasting, Revenue Growth Management models, and custom promotions. Note: Access to the production app is restricted, but the first-version mockup is publicly accessible.",
      image: "/vemio.png",
      technologies: ["Next.js", "TypeScript", "LangChain", "Generative UI", "Python", "Supabase"],
      liveUrl: "https://www.vemio.com.mx",
      liveUrlLabel: "Landing Page",
      secondaryUrl: "https://bi-comercial.vemio.com.mx/login",
      secondaryUrlLabel: "App Login (Restricted)",
      tertiaryUrl: "https://bi-comercial-vemio.vercel.app",
      tertiaryUrlLabel: "V1 Mockup (Accessible)",
    },
    {
      title: "Logistics & Delivery Dashboard (Grupo Femsa-Coca Cola)",
      description: "Semi-real-time operations dashboard for tracking delivery metrics, order fulfillment rates, and incident logging across Latin America. Note: Access restricted to authorized personnel only.",
      image: "/ruta-kof.png",
      technologies: ["React", "Phoenix (Elixir)", "Vite", "Webpack", "AWS", "SQL Server"],
      liveUrl: "https://noc.kof.com",
      liveUrlLabel: "Login Page (Restricted)",
    },
    {
      title: "Job Board Platform (UPQROO University)",
      description: "A robust full-stack employment board connecting students and alumni with employers, optimized for institutional server specifications.",
      image: "/upqroo-bolsa.png",
      technologies: ["Next.js", "Prisma", "MySQL", "Google OAuth", "Apache2"],
      liveUrl: "http://redtalento.upqroo.edu.mx",
      githubUrl: "https://github.com/upqroo-organization/upqroo-bolsa-empleo",
    },
    {
      title: "Insurance Quotation Flow (Clupp)",
      description: "A high-conversion responsive web app for vehicle and gadget insurance quotation featuring Stripe payments, user tracking, and an 80% database load reduction.",
      image: "/clupp.png",
      technologies: ["React", "Firebase", "Stripe", "Material-UI", "Express.js"],
      liveUrl: "https://clupp.com.mx",
      liveUrlLabel: "Landing Page",
      secondaryUrl: "https://cotizador-clupp.web.app/",
      secondaryUrlLabel: "Quotation App",
    },
    {
      title: "Where in the world",
      description: "Interactive country search application displaying geographical, demographic, and political data from a REST API.",
      image: "https://i.imgur.com/atHOy47.png",
      technologies: ["React", "REST API"],
      liveUrl: "https://nfsedg.github.io/restapi-countrys/",
      githubUrl: "https://github.com/Nfsedg/restapi-countrys/tree/master",
    },
    {
      title: "Social Media App",
      description: "Collaborative project management tool featuring real-time state updates and social interaction.",
      image: "https://i.imgur.com/B1dr3i2.png",
      technologies: ["React", "MongoDB", "Express.js", "Node.js"],
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
            A selection of projects that showcase my expertise in full-stack development and AI integration
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 flex flex-col justify-between">
              <div>
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
              </div>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.liveUrl && (
                    <Button asChild size="sm" variant="outline" className="flex items-center gap-2 bg-transparent">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        {project.liveUrlLabel || "Live Demo"}
                      </a>
                    </Button>
                  )}
                  {project.secondaryUrl && (
                    <Button asChild size="sm" variant="outline" className="flex items-center gap-2 bg-transparent">
                      <a href={project.secondaryUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        {project.secondaryUrlLabel}
                      </a>
                    </Button>
                  )}
                  {project.tertiaryUrl && (
                    <Button asChild size="sm" variant="outline" className="flex items-center gap-2 bg-transparent">
                      <a href={project.tertiaryUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        {project.tertiaryUrlLabel}
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button asChild size="sm" variant="outline" className="flex items-center gap-2 bg-transparent">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
