import { ExternalLink, Github, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

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

const statusBadge = (status: Project["status"]) => (
  <span
    className={`text-xs px-2 py-1 rounded-full font-medium ${
      status === "completed"
        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
        : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
      }`}
  >
    {status === "completed" ? "Completed" : "Ongoing"}
  </span>
);

export default function Projects() {
  return (
    <div className="mb-8">
      <h1
        className="mb-6 font-bold text-gruvbox-light-fg
          dark:text-gruvbox-dark-fg text-xl"
      >
        {"> Featured Projects 🚀"}
      </h1>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-gruvbox-light-border
              dark:border-gruvbox-dark-border rounded-lg p-6
              bg-gruvbox-light-bg/50 dark:bg-gruvbox-dark-bg/50 hover:shadow-lg
              transition-shadow duration-300"
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex-1">
                <h2
                  className="text-lg font-semibold text-gruvbox-light-fg
                    dark:text-gruvbox-dark-fg mb-1"
                >
                  {project.title}
                </h2>
                <div
                  className="flex items-center gap-3 text-sm
                    text-gruvbox-light-fg/70 dark:text-gruvbox-dark-fg/70"
                >
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{project.date}</span>
                  </div>
                  {statusBadge(project.status)}
                </div>
              </div>
            </div>

            <p
              className="text-gruvbox-light-fg dark:text-gruvbox-dark-fg mb-4
                leading-relaxed"
            >
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="text-xs px-2 py-1 bg-gruvbox-light-fg/10
                    dark:bg-gruvbox-dark-fg/10 text-gruvbox-light-fg
                    dark:text-gruvbox-dark-fg rounded"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-2">
              {project.link && (
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Live Demo
                  </a>
                </Button>
              )}
              {project.github && (
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="w-3 h-3" />
                    GitHub
                  </a>
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
