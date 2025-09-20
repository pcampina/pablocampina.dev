"use client"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* ASCII Art Divider */}
          <div className="ascii-art text-xs text-center mb-6">
            {`
═══════════════════════════════════════════════════════════════
`}
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            {/* Copyright */}
            <div>
              <div className="font-retro text-xs mb-2">COPYRIGHT.TXT</div>
              <div className="font-mono text-sm">
                © {currentYear} Pablo Campina
                <br />
                All rights reserved
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <div className="font-retro text-xs mb-2">QUICK_LINKS.SH</div>
              <div className="font-mono text-sm space-y-2">
                <button
                  onClick={() => scrollToSection("about")}
                  className="block hover:underline transition-colors text-left w-full"
                >
                  • About
                </button>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="block hover:underline transition-colors text-left w-full"
                >
                  • Skills
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="block hover:underline transition-colors text-left w-full"
                >
                  • Projects
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block hover:underline transition-colors text-left w-full"
                >
                  • Contact
                </button>
              </div>
            </div>

            {/* System Info */}
            <div>
              <div className="font-retro text-xs mb-2">SYSTEM.INFO</div>
              <div className="font-mono text-sm">
                Built with React & Next.js
                <br />
                Hosted on Netlify
                <br />
                Made with ❤️ in Lisbon
              </div>
            </div>
          </div>

          {/* Terminal Footer */}
          <div className="mt-8 pt-4 border-t border-background">
            <div className="font-mono text-xs text-center">
              ~/PABLOCAMPINA.DEV&gt; THANK_YOU_FOR_VISITING.SH
              <span className="terminal-cursor ml-1"></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
