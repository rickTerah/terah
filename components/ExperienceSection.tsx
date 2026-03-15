import { Badge } from "@/components/ui/badge";

const timeline = [
  {
    year: "2025",
    title: "Digital Transformation Lead",
    company: "Pariti",
    description:
      "Leading digital transformation initiatives and mentoring next-generation engineering leaders.",
  },
  {
    year: "2024",
    title: "AI Integration",
    company: "Pariti",
    description:
      "Spearheaded AI integration initiatives and established engineering best practices across the organization.",
  },
  {
    year: "2023",
    title: "System Architecture",
    company: "Pariti",
    description:
      "Architected and deployed microservices infrastructure improving system reliability by 99.9%.",
  },
  {
    year: "2022",
    title: "Team Expansion",
    company: "Pariti",
    description:
      "Led engineering team expansion from 5 to 15+ engineers while maintaining code quality.",
  },
  {
    year: "2021",
    title: "Head of Engineering",
    company: "Pariti",
    description:
      "Joined as Head of Engineering at a talent management platform.",
  },
  {
    year: "2021",
    title: "Senior Software Engineer",
    company: "Kwikbasket",
    description: "Worked at agritech startup under TechnoBrain Group Ltd.",
  },
  {
    year: "2020",
    title: "Software Engineer",
    company: "Tospay Limited",
    description: "Joined fintech startup as Software Engineer.",
  },
  {
    year: "2019",
    title: "Education",
    company: "Kenyatta University",
    description: "Completed BSc in Mathematics and Computer Science.",
  },
  {
    year: "2018",
    title: "Full-Stack Developer",
    company: "Made by People",
    description: "Started career as full-stack developer.",
  },
];

export function ExperienceSection() {
  return (
    <section className="space-y-8">
      <div className="flex items-center gap-3">
        <span className="font-mono text-accent">➜</span>
        <h2 className="text-2xl font-bold tracking-tight">EXPERIENCE</h2>
      </div>

      <div className="space-y-0">
        {timeline.map((item, index) => (
          <div
            key={item.year}
            className="group relative pl-8 py-4 border-l border-border
              hover:border-primary/50 transition-colors animate-slide-up"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div
              className="absolute left-0 top-1/2 -translate-y-1/2
                -translate-x-1/2 w-2 h-2 bg-background border border-border
                group-hover:border-primary group-hover:bg-primary
                transition-colors"
            />

            <div
              className="flex flex-col sm:flex-row sm:items-start gap-2
                sm:gap-6"
            >
              <Badge
                variant="outline"
                className="w-16 justify-center font-mono text-xs border-border
                  group-hover:border-primary/50"
              >
                {item.year}
              </Badge>
              <div className="flex-1">
                <h3
                  className="font-semibold text-foreground
                    group-hover:text-primary transition-colors"
                >
                  {item.title}
                  <span className="text-muted-foreground"> @ </span>
                  <span className="text-accent">{item.company}</span>
                </h3>
                <p className="text-muted-foreground text-sm mt-1">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
