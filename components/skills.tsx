export function Skills() {
  const skillCategories = [
    {
      title: "FRONTEND.JS",
      skills: ["React", "React Native", "Angular", "HTML5", "CSS3", "SCSS", "TypeScript", "JavaScript"],
    },
    {
      title: "BACKEND.PHP",
      skills: ["Node.js", "PHP", "Laravel", "Express.js", "REST APIs", "GraphQL", "Microservices"],
    },
    {
      title: "DATABASE.SQL",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Database Design", "Query Optimization"],
    },
    {
      title: "DEVOPS.SH",
      skills: ["Docker", "AWS", "CI/CD", "Git", "Linux", "Nginx", "Performance Optimization"],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-retro text-xl mb-8 text-center">SKILLS.SH</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <div key={index} className="retro-border bg-card p-4">
                <h3 className="font-retro text-xs mb-4 text-card-foreground">{category.title}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="font-mono text-sm flex items-center text-card-foreground">
                      <span className="text-black mr-2">&gt;</span>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Experience Level */}
          <div className="mt-12 retro-border bg-card p-6">
            <h3 className="font-retro text-sm mb-6 text-center text-card-foreground">EXPERIENCE_LEVEL.APP</h3>
            <div className="grid md:grid-cols-3 gap-6 font-mono text-sm">
              <div className="text-center text-card-foreground">
                <div className="text-2xl mb-2">14+</div>
                <div>Years of Experience</div>
              </div>
              <div className="text-center text-card-foreground">
                <div className="text-2xl mb-2">350+</div>
                <div>Projects Completed</div>
              </div>
              <div className="text-center text-card-foreground">
                <div className="text-2xl mb-2">15+</div>
                <div>Technologies Mastered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
