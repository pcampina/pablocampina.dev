"use client"

import { useEffect, useState } from "react"

export function LoadingScreen({ onLoadComplete }: { onLoadComplete: () => void }) {
  const [progress, setProgress] = useState(0)
  const [showLogo, setShowLogo] = useState(false)

  useEffect(() => {
    // Show logo after brief delay
    const logoTimer = setTimeout(() => setShowLogo(true), 500)

    // Simulate loading progress
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer)
          setTimeout(onLoadComplete, 800) // Brief delay before showing main content
          return 100
        }
        return prev + Math.random() * 15 + 5 // Random progress increments
      })
    }, 200)

    return () => {
      clearTimeout(logoTimer)
      clearInterval(progressTimer)
    }
  }, [onLoadComplete])

  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
      {/* 8-bit Apple Logo */}
      <div className={`transition-opacity duration-1000 ${showLogo ? "opacity-100" : "opacity-0"}`}>
        <div className="font-mono text-black leading-none text-center">
          <div className="transform scale-50">
            <pre className="text-xs inline-block whitespace-pre">
              {`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⡿⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⠟⠁⠀⠀⠀⠀⠀⠀
⠀⠀⠀⢀⣠⣤⣤⣤⣀⣀⠈⠋⠉⣁⣠⣤⣤⣤⣀⡀⠀⠀
⠀⢠⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡀
⣠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠋⠀
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀⠀⠀
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀
⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣤⣀
⠀⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠁
⠀⠀⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠁⠀
⠀⠀⠀⠈⠙⢿⣿⣿⣿⠿⠟⠛⠻⠿⣿⣿⣿⡿⠋⠀⠀⠀`}</pre>
          </div>
        </div>
      </div>

      {/* Loading text and progress */}
      <div className="text-center font-mono">
        <div className="text-black text-sm mb-2">System 7.5.3 Loading...</div>

        {/* Progress bar */}
        <div className="w-64 h-2 border-2 border-black bg-white">
          <div className="h-full bg-black transition-all duration-200" style={{ width: `${progress}%` }} />
        </div>

        <div className="text-black text-xs mt-2">{Math.round(progress)}%</div>
      </div>
    </div>
  )
}
