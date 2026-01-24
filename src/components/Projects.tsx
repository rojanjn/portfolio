import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import ball8 from "../assets/img/ball8.png";
import hangsman from "../assets/img/hangsman.png";
import bookcollection from "../assets/img/bookcollection.png";
import nguessing from "../assets/img/nguessing.png";
import stutracker from "../assets/img/stutracker.png";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Decision Maker",
    description: "A fun little 8-Ball app that answers your Yes/No questions with style.",
    image: ball8,
    tags: ["Javascript", "HTML", "Css"],
    liveUrl: "https://rojanjn.github.io/decision-maker/",
    githubUrl: "https://github.com/rojanjn/decision-maker",
  },
  {
    id: 2,
    title: "Hangsman",
    description: "A simple Hangman game built with Python for the terminal.",
    image: hangsman,
    tags: ["Python", "ASCII"],
    githubUrl: "https://github.com/rojanjn/python-practices/tree/main/hangsman",
  },
  {
    id: 3,
    title: "Book Collection",
    description: "Personalized web app for showcasing a small collection of books I love",
    image: bookcollection,
    tags: ["Javascript", "JSON", "HTML", "Css"],
    liveUrl: "https://rojanjn.github.io/rojan-book-collection/",
    githubUrl: "https://github.com/rojanjn/rojan-book-collection",
  },
  {
    id: 4,
    title: "Number Guessing Game",
    description: "A simple Guessing game built with Python for the terminal.",
    image: nguessing,
    tags: ["Python"],
    githubUrl: "https://github.com/rojanjn/python-practices/tree/main/number-guessing",
  },
  {
    id: 5,
    title: "Strudent Tracker",
    description: "A Java console application that manages undergraduate and graduate students with OOP concepts like inheritance and aggregation.",
    image: stutracker,
    tags: ["Java"],
    githubUrl: "https://github.com/rojanjn/Java-Student-Tracker",
  },
];

  //     {
  //         id: 6,
  //         title: 'Strudent Tracker',
  //         description: 'A Java console application that manages undergraduate and graduate students with OOP concepts like inheritance and aggregation.',
  //         image: './assets/img/stutracker.png',
  //         tags: ['Java'],
  //         githubUrl: 'https://github.com/rojanjn/Java-Student-Tracker',
  //     },
// ];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl">
            Selected Work
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A collection of projects that showcase my skills in
            web and app development and design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video overflow-hidden bg-muted">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl">{project.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}