"use client"

import { Badge } from "@/components/ui/badge"

export function AboutSection() {
  const interests = [
    "Clean Architecture", 
    "Performance Optimization", 
    "User Experience", 
    "Continuous Learning", 
    "Mobile First Design", 
    "Systems Scaling"
  ]
  const languages = [
    { name: "English", level: "Conversational" },
    { name: "Spanish", level: "Native" }
  ]

  return (
    <section id="about" className="py-24 bg-background border-t border-border">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 w-full">
        <div className="max-w-[1152px] mx-auto">
          {/* Section Title */}
          <div className="text-left mb-16">
            <h2 className="text-h2 font-bold text-foreground tracking-tight mb-4">
              About Me
            </h2>
            <p className="text-body text-secondary-text max-w-2xl">
              A glimpse into my background, core engineering philosophy, and communication skills.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Image Column */}
            <div className="lg:col-span-5">
              <div className="relative aspect-square w-full max-w-md mx-auto overflow-hidden border border-border rounded-[20px] bg-card">
                <img
                  src="/me.jpg"
                  alt="Edgar Osvaldo Pech García professional portrait"
                  className="w-full h-full object-cover transition-transform duration-200 hover:scale-[1.01]"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Info Column */}
            <div className="lg:col-span-7 space-y-10">
              
              {/* Philosophy */}
              <div className="space-y-4">
                <h3 className="text-h3 font-bold text-foreground tracking-tight">
                  My Philosophy
                </h3>
                <p className="text-small text-secondary-text leading-relaxed">
                  I believe in writing code that is not only functional, but maintainable, scale-friendly, and elegant. 
                  My engineering approach unifies rigorous technical design with a user-first visual paradigm, ensuring that 
                  every deployment satisfies business objectives while delivering high-clarity user experiences.
                </p>
              </div>

              {/* Core Interests & Competencies */}
              <div className="space-y-4">
                <h4 className="text-small font-semibold text-foreground uppercase tracking-wider font-mono">
                  Core Interests
                </h4>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest) => (
                    <Badge
                      key={interest}
                      variant="outline"
                      className="bg-card text-secondary-text text-caption border-border rounded-[12px] px-3 py-1 font-medium font-mono"
                    >
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div className="space-y-4">
                <h4 className="text-small font-semibold text-foreground uppercase tracking-wider font-mono">
                  Languages
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {languages.map((language) => (
                    <div 
                      key={language.name} 
                      className="bg-card border border-border rounded-[12px] p-4 flex justify-between items-center"
                    >
                      <span className="text-small font-medium text-foreground">{language.name}</span>
                      <span className="text-caption font-mono text-secondary-text">{language.level}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
