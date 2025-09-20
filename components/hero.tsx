"use client"

import { useEffect, useState } from "react"

export function Hero() {
  const [displayText, setDisplayText] = useState("")
  const fullText = "Macintosh HD:> Let me introduce myself_"

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center bg-background overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        {/* ASCII Art Logo */}
        <div className="hidden min-[660px]:block">
          <div className="ascii-art text-xs md:text-sm mb-8 text-foreground">
            {`
  ██╗  ██╗██╗    ██╗███╗   ███╗    ██████╗  █████╗ ██████╗ ██╗      ██████╗ 
  ██║  ██║██║    ██║████╗ ████║    ██╔══██╗██╔══██╗██╔══██╗██║     ██╔═══██╗
  ███████║██║    ██║██╔████╔██║    ██████╔╝███████║██████╔╝██║     ██║   ██║
  ██╔══██║██║    ██║██║╚██╔╝██║    ██╔═══╝ ██╔══██║██╔══██╗██║     ██║   ██║
  ██║  ██║██║    ██║██║ ╚═╝ ██║    ██║     ██║  ██║██████╔╝███████╗╚██████╔╝
  ╚═╝  ╚═╝╚═╝    ╚═╝╚═╝     ╚═╝    ╚═╝     ╚═╝  ╚═╝╚═════╝ ╚══════╝ ╚═════╝ 
  `}
          </div>
        </div>

        <div className="min-[660px]:hidden">
          <div className="ascii-art text-sm mb-8 text-foreground">
            <div className="transform scale-60">
              <pre className="text-center">
                {`
    ██╗  ██╗██╗    ██╗███╗   ███╗
    ██║  ██║██║    ██║████╗ ████║
    ███████║██║    ██║██╔████╔██║
    ██╔══██║██║    ██║██║╚██╔╝██║
    ██║  ██║██║    ██║██║ ╚═╝ ██║
    ╚═╝  ╚═╝╚═╝    ╚═╝╚═╝     ╚═╝

    ██████╗  █████╗ ██████╗ ██╗      ██████╗ 
    ██╔══██╗██╔══██╗██╔══██╗██║     ██╔═══██╗
    ██████╔╝███████║██████╔╝██║     ██║   ██║
    ██╔═══╝ ██╔══██║██╔══██╗██║     ██║   ██║
    ██║     ██║  ██║██████╔╝███████╗╚██████╔╝
    ╚═╝     ╚═╝  ╚═╝╚═════╝ ╚══════╝ ╚═════╝
    `}
              </pre>
            </div>
          </div>
        </div>

        {/* Terminal-style introduction */}
        <div className="retro-border bg-card text-card-foreground p-6 max-w-2xl mx-auto mb-8">
          <div className="font-mono text-left">
            <div className="text-foreground mb-2">Welcome to Macintosh</div>
            <div className="text-foreground mb-2">System 7.5.3 Loading...</div>
            <div className="mb-4">
              <span className="terminal-cursor">{displayText}</span>
            </div>
            <div className="space-y-1 text-sm">
              <div>User: Pablo Campina</div>
              <div>Age: 34 years</div>
              <div>From: Brazil</div>
              <div>Current Location: Lisbon, Portugal</div>
              <div>Workplace: CriticalTechworks (BMW Group)</div>
              <div>Occupation: Full Stack Developer</div>
              <div>Status: Ready for Innovation</div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="space-y-4">
          <h1 className="font-retro text-lg md:text-xl text-balance text-foreground">
            THINK DIFFERENT. CODE DIFFERENT.
          </h1>
          <p className="font-mono text-sm text-foreground max-w-lg mx-auto text-pretty opacity-80">
            Experienced full-stack developer passionate about creating innovative solutions with modern technologies and
            clean architecture.
          </p>
        </div>
      </div>
    </section>
  )
}
