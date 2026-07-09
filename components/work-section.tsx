"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
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
      secondaryUrlLabel: "App Login",
      tertiaryUrl: "https://bi-comercial-vemio.vercel.app",
      tertiaryUrlLabel: "V1 Mockup",
    },
    {
      title: "Logistics & Delivery Dashboard (Grupo Femsa-Coca Cola)",
      description: "Semi-real-time operations dashboard for tracking delivery metrics, order fulfillment rates, and incident logging across Latin America. Note: Access restricted to authorized personnel only.",
      image: "/ruta-kof.png",
      technologies: ["React", "Phoenix (Elixir)", "Vite", "Webpack", "AWS", "SQL Server"],
      liveUrl: "https://noc.kof.com",
      liveUrlLabel: "Login Page",
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
    <section id="work" className="py-24 bg-background">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 w-full">
        <div className="max-w-[1152px] mx-auto">
          {/* Header */}
          <div className="text-left mb-16">
            <h2 className="text-h2 font-bold text-foreground tracking-tight mb-4">
              Featured Work
            </h2>
            <p className="text-body text-secondary-text max-w-2xl">
              A curated selection of software projects showcasing full-stack development, AI integrations, and cloud architectures.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <article
                key={index}
                className="bg-card border border-border rounded-[20px] overflow-hidden flex flex-col justify-between shadow-none transition-colors duration-150"
              >
                <div>
                  {/* Project Image Container */}
                  <div className="relative aspect-video w-full overflow-hidden border-b border-border bg-background">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={`Interface screenshot of ${project.title}`}
                      className="w-full h-full object-cover transition-transform duration-200 hover:scale-[1.01]"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Text Details */}
                  <div className="p-6">
                    <h3 className="text-h3 font-bold text-foreground tracking-tight mb-2">
                      {project.title}
                    </h3>
                    <p className="text-small text-secondary-text leading-relaxed mb-6">
                      {project.description}
                    </p>
                    
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="bg-background text-secondary-text text-caption border-border rounded-[12px] px-3 py-1 font-medium font-mono"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions Footer */}
                <div className="p-6 pt-0 flex flex-wrap gap-3">
                  {project.liveUrl && (
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="border-border hover:border-foreground hover:text-foreground text-caption font-medium transition-colors bg-transparent text-secondary-text rounded-[12px] h-9 px-4"
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit Live Demo for ${project.title}`}
                        className="flex items-center gap-1.5"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        {project.liveUrlLabel || "Live Demo"}
                      </a>
                    </Button>
                  )}
                  {project.secondaryUrl && (
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="border-border hover:border-foreground hover:text-foreground text-caption font-medium transition-colors bg-transparent text-secondary-text rounded-[12px] h-9 px-4"
                    >
                      <a
                        href={project.secondaryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${project.secondaryUrlLabel} for ${project.title}`}
                        className="flex items-center gap-1.5"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        {project.secondaryUrlLabel}
                      </a>
                    </Button>
                  )}
                  {project.tertiaryUrl && (
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="border-border hover:border-foreground hover:text-foreground text-caption font-medium transition-colors bg-transparent text-secondary-text rounded-[12px] h-9 px-4"
                    >
                      <a
                        href={project.tertiaryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${project.tertiaryUrlLabel} for ${project.title}`}
                        className="flex items-center gap-1.5"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        {project.tertiaryUrlLabel}
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="border-border hover:border-foreground hover:text-foreground text-caption font-medium transition-colors bg-transparent text-secondary-text rounded-[12px] h-9 px-4"
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit GitHub repository code for ${project.title}`}
                        className="flex items-center gap-1.5"
                      >
                        <Github className="h-3.5 w-3.5" />
                        Code
                      </a>
                    </Button>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
