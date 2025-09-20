"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString('pt-PT'))

  // Update time every second
  useState(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString('pt-PT'))
    }, 1000)
    return () => clearInterval(interval)
  })

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="sticky top-0 z-50 bg-background border-b-2 border-foreground">
      <div className="container mx-auto px-4">
        {/* Terminal-style header bar */}
        <div className="flex items-center justify-between py-2 border-b border-foreground">
          <div className="font-retro text-xs">PABLOCAMPINA.DEV</div>
          <div className="font-mono text-xs">{currentTime} 🇵🇹</div>
        </div>

        {/* Navigation menu */}
        <nav className="py-4">
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            <Button variant="ghost" className="retro-button" onClick={() => scrollToSection("about")}>
              About Me
            </Button>
            <Button variant="ghost" className="retro-button" onClick={() => scrollToSection("skills")}>
              Skills
            </Button>
            <Button variant="ghost" className="retro-button" onClick={() => scrollToSection("projects")}>
              Projects
            </Button>
            <Button variant="ghost" className="retro-button" onClick={() => scrollToSection("contact")}>
              Contact
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
