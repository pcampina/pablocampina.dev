const journeyLog = [
  {
    date: "2023 - PRESENT",
    company: "CriticalTechworks (BMW Group)",
    description: "Building next-gen automotive solutions",
  },
  {
    date: "2021 - 2023",
    company: "Capgemini Engineering",
    description:
      "Specialized in developing custom JavaScript components for enterprise low-code platforms, empowering developers with enhanced functionality and seamless integration capabilities.",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-retro text-xl mb-8 text-center">ABOUT.APP</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Personal Info */}
            <div className="retro-border bg-background p-6">
              <h3 className="font-retro text-sm mb-4">PERSONAL_DATA.TXT</h3>
              <div className="font-mono text-sm space-y-2">
                <div>├── Name: Pablo Campina</div>
                <div>├── Age: 34 years old</div>
                <div>├── Origin: Brazil 🇧🇷</div>
                <div>├── Current Location: Lisbon, Portugal 🇵🇹</div>
                <div>├── Company: CriticalTechworks</div>
                <div>├── Division: BMW Group</div>
                <div>├── Position: Full Stack Developer</div>
                <div>└── Experience: 14+ years</div>
              </div>
            </div>

            {/* Journey */}
            <div className="retro-border bg-background p-6">
              <h3 className="font-retro text-sm mb-4">JOURNEY.LOG</h3>
              <div className="font-mono text-sm space-y-3">
                {journeyLog.map((item, index) => (
                  <div key={index}>
                    <div className="text-foreground opacity-75">{item.date}</div>
                    <div>{item.company}</div>
                    <div>{item.description}</div>
                  </div>
                ))}

                <div className="font-mono text-sm leading-relaxed mt-4">
                  <a
                    href="https://www.linkedin.com/in/pablocampina/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:underline"
                  >
                    Continue on LinkedIn...
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Philosophy */}
          <div className="mt-8 retro-border bg-background p-6">
            <h3 className="font-retro text-sm mb-4">PHILOSOPHY.MD</h3>
            <div className="font-mono text-sm leading-relaxed">
              <p className="mb-4"># Clean Code Advocate</p>
              <p className="mb-4">
                I believe in writing code that is not just functional, but elegant, maintainable, and scalable. Every
                line should tell a story, and every function should have a purpose.
              </p>
              <p className="mb-4"># Continuous Learning</p>
              <p>
                Technology evolves rapidly, and so do I. From Brazil to Portugal, from junior to senior, the journey
                never stops. Always curious, always growing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
