import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { WorkSection } from "@/components/work-section"
import { ExperienceSection } from "@/components/experience-section"
import { AboutSection } from "@/components/about-section"
import { TechnologiesSection } from "@/components/technologies-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <WorkSection />
      <ExperienceSection />
      <AboutSection />
      <TechnologiesSection />
      <Footer />
    </main>
  )
}
