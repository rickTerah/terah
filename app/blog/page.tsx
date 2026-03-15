import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { TerminalFrame } from "@/components/TerminalFrame";
import { getAllPosts } from "@/lib/mdx";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="space-y-16 pb-16">
      {/* Header */}
      <TerminalFrame title="blog.sh" animate>
        <div className="p-6 md:p-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-mono text-sm">
              <span className="section-tag">BLOG</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              TECHNICAL WRITINGS
            </h1>
            <p className="text-muted-foreground max-w-2xl">
              INSIGHTS, EXPERIENCES, AND LESSONS LEARNED FROM MY JOURNEY AS A
              SENIOR SOFTWARE ENGINEER AND HEAD OF ENGINEERING.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {["ARCHITECTURE", "LEADERSHIP", "WEB DEVELOPMENT", "DEVOPS"].map(
                (category) => (
                  <Badge
                    key={category}
                    variant="outline"
                    className="font-mono text-xs border-border"
                  >
                    {category}
                  </Badge>
                ),
              )}
            </div>
          </div>
        </div>
      </TerminalFrame>

      {/* Posts */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <span className="font-mono text-accent">➜</span>
          <h2 className="text-xl font-bold tracking-tight">ALL POSTS</h2>
        </div>

        <div className="space-y-4">
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
                  className="flex items-center gap-3 text-sm
                    text-muted-foreground mb-3 font-mono"
                >
                  <Badge
                    variant="outline"
                    className="text-xs font-mono border-border"
                  >
                    {post.category.toUpperCase()}
                  </Badge>
                  <span>/</span>
                  <span>{new Date(post.date).getFullYear()}</span>
                  <span>/</span>
                  <span>{post.readTime.toUpperCase()}</span>
                </div>

                <h3
                  className="text-xl font-semibold mb-2 group-hover:text-primary
                    transition-colors"
                >
                  {post.title.toUpperCase()}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {post.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <TerminalFrame>
        <div className="p-6 md:p-8">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold mb-1">STAY UPDATED</h3>
              <p className="text-sm text-muted-foreground">
                NEW ARTICLES PUBLISHED REGULARLY.
              </p>
            </div>
            <span className="font-mono text-accent">↳</span>
          </div>
        </div>
      </TerminalFrame>
    </div>
  );
}
