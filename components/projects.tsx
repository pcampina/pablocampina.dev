"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

interface Project {
  title: string
  description: string
  tech: string[]
  html_url: string
}

export function Projects() {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch("https://api.github.com/users/pcampina/repos?sort=pushed&per_page=4")
        if (response.ok) {
          const repos = await response.json()
          const formattedProjects = repos.map((repo: any) => ({
            title: repo.name,
            description: repo.description || "No description available.",
            tech: [repo.language, ...repo.topics].filter(Boolean),
            html_url: repo.html_url,
          }))
          setProjects(formattedProjects)
        } else {
          console.error("Failed to fetch projects")
        }
      } catch (error) {
        console.error("Error fetching projects:", error)
      }
    }

    fetchProjects()
  }, [])

  return (
    <section id="projects" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-retro text-xl mb-8 text-center">PROJECTS.COM</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="retro-border bg-background p-6 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-retro text-sm">{project.title}</h3>
                </div>

                <p className="font-mono text-sm mb-4 leading-relaxed text-pretty flex-grow">{project.description}</p>

                <div className="mb-4">
                  <div className="font-mono text-xs text-muted mb-2">TECH_STACK:</div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="font-mono text-xs bg-muted text-muted-foreground px-2 py-1">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end items-center mt-auto">
                  <Button asChild className="retro-button text-xs">
                    <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                      VIEW_DETAILS
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* GitHub CTA */}
          <div className="mt-12 text-center">
            <div className="retro-border bg-background p-6 inline-block">
              <div className="font-retro text-sm mb-4">MORE_PROJECTS.GIT</div>
              <p className="font-mono text-sm mb-4">Explore more of my work on GitHub</p>
              <Button asChild className="retro-button">
                <a href="https://github.com/pcampina" target="_blank" rel="noopener noreferrer">
                  GITHUB.COM/PABLO
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
