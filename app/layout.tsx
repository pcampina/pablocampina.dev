import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Pablo Campina - Full Stack Developer | pablocampina.dev",
  description:
    "Pablo Campina - 34-year-old Brazilian full-stack developer based in Lisbon, working at CriticalTechworks (BMW Group). Expert in Node.js, React, Angular, PHP, and more.",
  keywords:
    "Pablo Campina, Full Stack Developer, React, Angular, Node.js, PHP, Laravel, BMW Group, CriticalTechworks, Lisbon, Brazil",
  authors: [{ name: "Pablo Campina" }],
  creator: "Pablo Campina",
  publisher: "Pablo Campina",
  robots: "index, follow",
  openGraph: {
    title: "Pablo Campina - Full Stack Developer",
    description: "Full-stack developer at CriticalTechworks (BMW Group) specializing in modern web technologies",
    url: "https://pablocampina.dev",
    siteName: "Pablo Campina Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pablo Campina - Full Stack Developer",
    description: "Full-stack developer at CriticalTechworks (BMW Group) specializing in modern web technologies",
  },
  alternates: {
    canonical: "https://pablocampina.dev",
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-mono ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      </body>
    </html>
  )
}
