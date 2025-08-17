import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Mail, MapPin } from "lucide-react"

export function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/Nfsedg", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/nfsedg/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:edgaropech@hotmail.com", label: "Email" },
  ]

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-[family-name:var(--font-work-sans)]">
            Let's Work Together
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. Let's discuss how we can create something
            amazing together.
          </p>

          <div className="flex items-center justify-center gap-1 text-primary-foreground/80 mb-8">
            <MapPin className="h-4 w-4" />
            <span>Available for remote work worldwide</span>
          </div>

          <div className="flex justify-center gap-4 mb-12">
            {socialLinks.map((social) => (
              <Button
                key={social.label}
                variant="outline"
                size="icon"
                className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <a href={social.href} aria-label={social.label}>
                  <social.icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </div>

          <div className="border-t border-primary-foreground/20 pt-8">
            <p className="text-primary-foreground/60 text-sm">
              Full-Stack Engineer Portfolio. Built with Next.js and Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
