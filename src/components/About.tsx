export function About() {
  const skills = [
    "HTML/CSS",
    "JavaScript/TypeScript",
    "Python",
    "C#",
    "MySQL/PostgreSQL",
    "PHP",
    "Java",
    "Bash",
    "Figma",
    "Responsive Design",
    "Accessibility",
  ];

  return (
    <section id="about" className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl">About Me</h2>
        </div>

        <div className="space-y-6 text-lg leading-relaxed text-foreground/80">
          <p>
            I'm a creative developer passionate about building
            unique, user-friendly web and app experiences. With
            a keen eye for design and a love for clean code, I
            bridge the gap between aesthetics and functionality.
          </p>

          <p>
            When I'm not coding, you'll find me either with my
            camera, taking photos of everything I find
            <i> aesthetic</i>, or experimenting with creative
            coding and taking notes from open-source projects. I
            believe in continuous learning and staying curious.
          </p>

          <div className="pt-8">
            <h3 className="text-xl mb-6">
              Skills & Technologies
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-card border border-border rounded-lg text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}