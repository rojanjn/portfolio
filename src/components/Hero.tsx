import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-3xl w-full">
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-muted-foreground">Hello, I'm</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight">
              Rojan
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Creative Developer & Photographer
            </p>
          </div>

          <p className="text-lg text-foreground/80 max-w-2xl leading-relaxed">
            I craft beautiful digital experiences that bring
            ideas to life. Specializing in web & app development
            and creative coding.
          </p>

          <div className="flex gap-4 pt-4">
            <a
              href="https://github.com/rojanjn/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-card border border-border hover:bg-secondary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/rojanj/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-card border border-border hover:bg-secondary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            {/* <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-card border border-border hover:bg-secondary transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a> */}
            <a
              href="mailto:rojanjafarnezhad@gmail.com"
              className="p-3 rounded-lg bg-card border border-border hover:bg-secondary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="pt-8">
            <a
              href="#projects"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}