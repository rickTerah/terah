import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  date: string;
  status: "completed" | "ongoing";
}

const projects: Project[] = [
  {
    title: "Pariti Talent Platform",
    description:
      "Leading the engineering of a comprehensive talent management platform serving 50,000+ users with AI-powered matching algorithms, real-time analytics dashboard, and scalable microservices architecture.",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "AWS",
      "Redis",
      "Docker",
    ],
    link: "https://pariti.com",
    date: "2021 - Present",
    status: "ongoing",
  },
  {
    title: "Kwikbasket E-commerce Platform",
    description:
      "Architected and developed a full-stack agritech e-commerce solution with real-time inventory management, payment integration, and logistics optimization serving small-scale farmers across Kenya.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API", "Google Maps"],
    date: "2021",
    status: "completed",
  },
  {
    title: "Tospay Fintech Application",
    description:
      "Built a secure fintech mobile-first application with multi-currency support, peer-to-peer payments, and blockchain integration for transaction transparency.",
    technologies: [
      "React Native",
      "Python",
      "PostgreSQL",
      "Blockchain",
      "Razorpay",
    ],
    date: "2020 - 2021",
    status: "completed",
  },
  {
    title: "Open Source Contributions",
    description:
      "Active contributor to various open source projects including performance optimizations for Next.js, TypeScript utility libraries, and developer tooling with 500+ GitHub stars.",
    technologies: ["TypeScript", "React", "Node.js", "Testing"],
    github: "https://github.com/patrickmwangi",
    date: "2019 - Present",
    status: "ongoing",
  },
];

export function Projects() {
  return (
    <section className="space-y-10">
      <div className="flex items-center gap-3">
        <span className="font-mono text-accent">➜</span>
        <h2 className="text-2xl font-bold tracking-tight">PROJECTS</h2>
      </div>

      <div className="space-y-4">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className="terminal-frame group hover:border-primary/50
              transition-all duration-300 animate-slide-up"
            style={{ animationDelay: `${index * 75}ms` }}
          >
            <div className="p-5 md:p-6">
              {/* Header */}
              <div
                className="flex flex-col sm:flex-row sm:items-start
                  justify-between gap-4 mb-4"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-muted-foreground text-sm">
                      {index + 1}.
                    </span>
                    <h3
                      className="text-lg font-semibold group-hover:text-primary
                        transition-colors"
                    >
                      {project.title}
                    </h3>
                    <Badge
                      variant="outline"
                      className="text-xs font-mono border-border"
                    >
                      {project.status.toUpperCase()}
                    </Badge>
                  </div>
                  <div
                    className="flex items-center gap-2 text-sm
                      text-muted-foreground font-mono"
                  >
                    <span>{project.date}</span>
                  </div>
                </div>

                {/* Links */}
                <div className="flex items-center gap-1">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 border border-border hover:border-primary
                        hover:text-primary transition-all"
                      title="View live demo"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 border border-border hover:border-primary
                        hover:text-primary transition-all"
                      title="View source"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 border border-border text-xs font-mono
                      hover:border-primary/50 hover:text-primary
                      transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
