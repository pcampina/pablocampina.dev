"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Clock, Github, Linkedin, Mail, MapPin } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setIsSuccess(false)
    setIsError(false)

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSuccess(true)
        setFormData({ name: "", email: "", message: "" })
      } else {
        setIsError(true)
      }
    } catch (error) {
      setIsError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-retro text-xl mb-8 text-center">CONTACT.SYS</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="retro-border bg-card p-6">
              <h3 className="font-retro text-sm mb-4 text-card-foreground">CONNECTION_INFO.TXT</h3>
              <div className="font-mono text-sm space-y-4 text-card-foreground">
                <a
                  href="mailto:pablo@pablocampina.dev"
                  className="flex items-center hover:text-primary transition-colors"
                  aria-label="Email Pablo at pablo@pablocampina.dev"
                >
                  <Mail className="w-4 h-4 mr-3 flex-shrink-0" />
                  <span>pablo@pablocampina.dev</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/pablocampina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-primary transition-colors"
                  aria-label="View Pablo Campina's LinkedIn profile"
                >
                  <Linkedin className="w-4 h-4 mr-3 flex-shrink-0" />
                  <span>/in/pablocampina</span>
                </a>
                <a
                  href="https://github.com/pcampina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-primary transition-colors"
                  aria-label="View Pablo Campina's GitHub profile"
                >
                  <Github className="w-4 h-4 mr-3 flex-shrink-0" />
                  <span>/pcampina</span>
                </a>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-3 flex-shrink-0" />
                  <span>LISBON, PORTUGAL</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-3 flex-shrink-0" />
                  <span>GMT+1 (WEST)</span>
                </div>
              </div>
            </div>

            {/* Availability 
            <div className="retro-border bg-card p-6">
              <div className="mt-6">
                <h4 className="font-retro text-xs mb-3 text-card-foreground">AVAILABILITY.STATUS</h4>
                <div className="font-mono text-sm text-card-foreground">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-primary mr-2"></div>
                    <span>OPEN FOR OPPORTUNITIES</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary mr-2"></div>
                    <span>FREELANCE PROJECTS WELCOME</span>
                  </div>
                </div>
              </div>
            </div>
            */}

            {/* Contact Form */}
            <div className="retro-border bg-card p-6">
              <h3 className="font-retro text-sm mb-4 text-card-foreground">SEND_MESSAGE.FORM</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="font-mono text-xs text-card-foreground block mb-1">NAME:</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="font-mono text-sm bg-background border-2 border-foreground"
                    placeholder="Enter your name"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="font-mono text-xs text-card-foreground block mb-1">EMAIL:</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="font-mono text-sm bg-background border-2 border-foreground"
                    placeholder="your.email@domain.com"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="font-mono text-xs text-card-foreground block mb-1">MESSAGE:</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="font-mono text-sm bg-background border-2 border-foreground min-h-[120px]"
                    placeholder="Type your message here..."
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <Button type="submit" className="retro-button w-full" disabled={isSubmitting}>
                  {isSubmitting ? "SENDING..." : "SEND_MESSAGE.APP"}
                </Button>

                {isSuccess && (
                  <p className="font-mono text-sm text-primary mt-2">Message sent successfully!</p>
                )}
                {isError && (
                  <p className="font-mono text-sm text-destructive mt-2">
                    Error sending message. Please try again later.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
