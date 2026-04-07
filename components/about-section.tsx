import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function AboutSection() {
  const interests = ["Clean Architecture", "Performance Optimization", "User Experience", "Continuous Learning", "Mobile First design", "Learn new technologies"]
  const languages = ["English (Conversational)", "Spanish (Native)"]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 font-[family-name:var(--font-work-sans)]">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating meaningful digital experiences
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="relative">
              <img
                src="/me.jpg"
                alt="Professional headshot"
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4 font-[family-name:var(--font-work-sans)]">
                My Philosophy
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I believe in writing code that not only works but is maintainable, scalable, and elegant. My approach
                combines technical excellence with user-centered design, ensuring that every solution serves both
                business objectives and user needs.
              </p>
            </div>

            <Card>
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-primary mb-3 font-[family-name:var(--font-work-sans)]">
                  Core Interests
                </h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {interests.map((interest) => (
                    <Badge key={interest} variant="secondary">
                      {interest}
                    </Badge>
                  ))}
                </div>

                <h4 className="text-lg font-semibold text-primary mb-3 font-[family-name:var(--font-work-sans)]">
                  Languages
                </h4>
                <div className="space-y-2">
                  {languages.map((language) => (
                    <div key={language} className="text-muted-foreground">
                      {language}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
