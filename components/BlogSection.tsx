import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";

export function BlogSection() {
  const posts = getAllPosts().slice(0, 3);
  return (
    <section className="space-y-4">
      <div className="flex items-baseline justify-between">
        <h2 className="text-sm font-medium tracking-tight text-muted-foreground">
          # writing
        </h2>
        <Link
          href="/blog"
          className="text-sm text-muted-foreground hover:text-primary
            transition-colors"
        >
          view all →
        </Link>
      </div>

      <ul className="divide-y divide-border border-y border-border">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group flex items-baseline gap-4 py-3 hover:text-primary
                transition-colors"
            >
              <span
                className="shrink-0 text-sm text-muted-foreground tabular-nums"
              >
                {new Date(post.date).getFullYear()}
              </span>
              <span className="flex-1 group-hover:underline underline-offset-4">
                {post.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
