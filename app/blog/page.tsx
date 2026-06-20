import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="space-y-8 pb-16">
      <div className="space-y-2">
        <p className="section-tag">~/writing</p>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          Writing
        </h1>
        <p className="text-muted-foreground">
          Notes on software architecture, engineering leadership, and building
          for the web.
        </p>
      </div>

      <ul className="divide-y divide-border border-y border-border">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group block py-4 space-y-1"
            >
              <div className="flex items-baseline gap-4">
                <span
                  className="shrink-0 text-sm text-muted-foreground
                    tabular-nums"
                >
                  {new Date(post.date).getFullYear()}
                </span>
                <h2
                  className="flex-1 font-medium group-hover:text-primary
                    group-hover:underline underline-offset-4 transition-colors"
                >
                  {post.title}
                </h2>
              </div>
              <p className="text-sm text-muted-foreground pl-[3.25rem]">
                {post.description}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
