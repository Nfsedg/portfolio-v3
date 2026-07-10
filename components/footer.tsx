"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, MapPin } from "lucide-react"

export function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/edgaropechdev", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/edgaropechdev/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:contact@edgaropech.dev", label: "Email" },
  ]

  return (
    <footer id="contact" className="bg-background text-foreground py-24 border-t border-border">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 w-full">
        <div className="max-w-[1152px] mx-auto text-left space-y-12">

          {/* Main Footer Info */}
          <div className="max-w-2xl space-y-6">
            <h2 className="text-h2 font-bold tracking-tight text-foreground">
              Let's Work Together
            </h2>
            <p className="text-body text-secondary-text leading-relaxed">
              I am always interested in discussing new opportunities, full-time roles, or collaborating on high-impact projects.
              Let's connect and build something exceptional.
            </p>

            {/* Status Indicator */}
            <div className="flex items-center gap-2 text-small text-accent font-medium">
              <MapPin className="h-4 w-4" />
              <span>Available for remote contracts or full-time worldwide</span>
            </div>
          </div>

          {/* Social Links Row */}
          <div className="flex flex-wrap gap-4 pt-4 border-t border-border/50">
            {socialLinks.map((social) => (
              <Button
                key={social.label}
                variant="outline"
                size="sm"
                className="bg-card border-border text-secondary-text hover:border-foreground hover:text-foreground hover:bg-card/50 transition-colors rounded-[12px] h-10 px-4 focus-visible:ring-2 focus-visible:ring-accent"
                asChild
              >
                <a
                  href={social.href}
                  aria-label={`Open Edgar's ${social.label} profile in a new window`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <social.icon className="h-4 w-4" />
                  <span className="text-small font-medium">{social.label}</span>
                </a>
              </Button>
            ))}
          </div>

          {/* Copyright/Meta Info */}
          <div className="pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-caption text-secondary-text border-t border-border/20 font-mono">
            <p>{new Date().getFullYear()} Edgar Osvaldo Pech García</p>
            <p>Built with Next.js, Tailwind CSS & Geist Sans.</p>
          </div>

        </div>
      </div>
    </footer>
  )
}
