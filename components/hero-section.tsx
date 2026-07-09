"use client"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background py-20">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 w-full">
        <div className="max-w-[1152px] mx-auto text-left">
          {/* Tag/Detail */}
          <span className="text-caption sm:text-small font-mono text-accent uppercase tracking-widest block mb-4">
            Available for remote opportunities
          </span>

          {/* Main Name */}
          <h1 className="text-h1 sm:text-hero md:text-display font-bold text-foreground tracking-tighter leading-tight mb-4">
            Edgar Osvaldo Pech García
          </h1>

          {/* Subtitle / Role */}
          <h2 className="text-h3 sm:text-h2 font-semibold text-secondary-text tracking-tight mb-8">
            Software Engineer specialized in React, Next.js & AI Integrations.
          </h2>

          {/* Brief Intro */}
          <p className="text-body text-secondary-text max-w-2xl mb-12 leading-relaxed">
            I design and architect scalable web applications from scratch, bringing high-clarity user interfaces
            and conversational AI flows together. Earning trust through clean code, performant systems, and rigorous design standards.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <Button
              size="lg"
              className="bg-[#FAFAFA] rounded-md text-small font-medium transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
              onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
            >
              <span className="text-[#09090B] hover:bg-[#FAFAFA]/90">
                View Projects
              </span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-border hover:border-foreground hover:text-foreground rounded-md text-small font-medium transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none bg-transparent text-secondary-text"
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            >
              About Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
