import { ExternalLink, Github } from "lucide-react";

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
    <section className="space-y-6">
      <div className="space-y-2">
        <p className="section-tag">~/projects</p>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          Projects
        </h1>
      </div>

      <div className="divide-y divide-border border-y border-border">
        {projects.map((project) => (
          <article key={project.title} className="py-5 space-y-3">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <h3 className="font-medium">{project.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {project.date}
                  <span className="mx-2 text-border">·</span>
                  {project.status}
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0 pt-1">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary
                      transition-colors"
                    title="View live demo"
                    aria-label={`${project.title} live demo`}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary
                      transition-colors"
                    title="View source"
                    aria-label={`${project.title} source`}
                  >
                    <Github className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>

            <p className="text-sm leading-relaxed text-foreground/90">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="border border-border px-2 py-0.5 text-xs
                    text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
