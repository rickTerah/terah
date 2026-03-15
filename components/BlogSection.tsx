import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const posts = [
  {
    slug: "leading-engineering-teams-lessons",
    title: "LEADING ENGINEERING TEAMS: LESSONS FROM 6+ YEARS",
    description:
      "Key insights and strategies for building and leading high-performing engineering teams in fast-growing startups.",
    date: "2024",
    readTime: "8 MIN",
  },
  {
    slug: "building-scalable-microservices-architecture",
    title: "BUILDING SCALABLE MICROSERVICES ARCHITECTURE",
    description:
      "A comprehensive guide to designing and implementing microservices architecture that scales with your business.",
    date: "2024",
    readTime: "12 MIN",
  },
];

export function BlogSection() {
  return (
    <section className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-mono text-accent">➜</span>
          <h2 className="text-2xl font-bold tracking-tight">LATEST POSTS</h2>
        </div>
        <Link
          href="/blog"
          className="font-mono text-sm text-muted-foreground hover:text-primary
            transition-colors"
        >
          VIEW ALL →
        </Link>
      </div>

      <div className="grid gap-4">
        {posts.map((post, index) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="terminal-frame group hover:border-primary/50
              transition-all duration-300 animate-slide-up block"
            style={{ animationDelay: `${index * 75}ms` }}
          >
            <div className="p-5 md:p-6">
              <div
                className="flex items-center gap-3 text-sm text-muted-foreground
                  mb-3 font-mono"
              >
                <Badge
                  variant="outline"
                  className="text-xs font-mono border-border"
                >
                  {post.date}
                </Badge>
                <span>/</span>
                <span>{post.readTime}</span>
              </div>

              <h3
                className="text-lg font-semibold mb-2 group-hover:text-primary
                  transition-colors"
              >
                {post.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {post.description}
              </p>

              <div
                className="mt-4 flex items-center gap-2 text-sm font-mono
                  text-primary opacity-0 group-hover:opacity-100
                  transition-opacity"
              >
                <span>READ</span>
                <span>→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
