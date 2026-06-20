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
    <section className="space-y-6">
      <div className="space-y-2">
        <p className="section-tag">~/experience</p>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          Experience
        </h1>
      </div>

      <div className="border-l border-border">
        {timeline.map((item) => (
          <div
            key={`${item.year}-${item.title}`}
            className="group relative pl-6 py-4"
          >
            <span
              className="absolute left-0 top-[1.4rem] -translate-x-1/2 h-2 w-2
                bg-background border border-border group-hover:border-primary
                group-hover:bg-primary transition-colors"
              aria-hidden="true"
            />
            <div className="flex flex-col sm:flex-row sm:gap-6">
              <span
                className="shrink-0 w-16 text-sm text-muted-foreground
                  tabular-nums"
              >
                {item.year}
              </span>
              <div className="flex-1">
                <h3 className="font-medium">
                  {item.title}
                  <span className="text-muted-foreground"> @ </span>
                  <span className="text-primary">{item.company}</span>
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
