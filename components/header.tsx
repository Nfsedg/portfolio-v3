"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#work", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#about", label: "About" },
    { href: "#technologies", label: "Technologies" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-md border-b border-border" 
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 w-full">
        <div className="max-w-[1152px] mx-auto flex items-center justify-between h-16 w-full">
          {/* Logo / Brand Name */}
          <a
            href="#"
            className="text-small font-medium text-foreground tracking-tight hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm transition-colors duration-150"
            aria-label="Edgar Osvaldo Pech García Portfolio Home"
          >
            Edgar Pech
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-small font-medium text-secondary-text hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm transition-colors duration-150"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground hover:bg-card focus-visible:ring-2 focus-visible:ring-accent"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation Panel */}
        {isMobileMenuOpen && (
          <nav
            className="md:hidden py-4 border-t border-border bg-background flex flex-col space-y-4 max-w-[1152px] mx-auto"
            aria-label="Mobile Navigation"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-small font-medium text-secondary-text hover:text-foreground py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm transition-colors duration-150"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
