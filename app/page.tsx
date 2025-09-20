"use client"

import { useState } from "react"
import { LoadingScreen } from "@/components/loading-screen"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadComplete = () => {
    setIsLoading(false)
  }

  if (isLoading) {
    return <LoadingScreen onLoadComplete={handleLoadComplete} />
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
