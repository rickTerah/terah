import { notFound } from "next/navigation";
import Link from "next/link";

interface BlogPostProps {
  params: Promise<{
    slug: string;
  }>;
}

async function getBlogPost(slug: string) {
  const posts = [
    {
      slug: "building-scalable-microservices-architecture",
      title:
        "Building Scalable Microservices Architecture: Lessons from Production",
      date: "2025-01-15",
      excerpt:
        "A comprehensive guide to designing, implementing, and maintaining microservices architecture based on real-world experience managing systems at scale.",
      category: "Architecture",
      tags: ["microservices", "architecture", "scalability", "production"],
    },
    {
      slug: "leading-engineering-teams-lessons",
      title:
        "Leading Engineering Teams: Lessons from 6+ Years as a Head of Engineering",
      date: "2025-01-10",
      excerpt:
        "Practical insights on engineering leadership, team building, and technical management from experience scaling teams from 5 to 15+ engineers.",
      category: "Leadership",
      tags: ["leadership", "team-management", "engineering", "career-growth"],
    },
  ];

  const post = posts.find((p) => p.slug === slug);
  return post || null;
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1
          className="text-4xl font-bold text-gruvbox-light-fg
            dark:text-gruvbox-dark-fg mb-4"
        >
          {post.title}
        </h1>

        <div
          className="flex items-center gap-4 text-sm text-gruvbox-light-fg/70
            dark:text-gruvbox-dark-fg/70 mb-6"
        >
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span>•</span>
          <span
            className="px-2 py-1 bg-gruvbox-light-fg/10
              dark:bg-gruvbox-dark-fg/10 rounded"
          >
            {post.category}
          </span>
        </div>

        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 bg-gruvbox-light-accent/20
                  dark:bg-gruvbox-dark-accent/20 text-gruvbox-light-accent
                  dark:text-gruvbox-dark-accent rounded"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <div className="prose prose-gruvbox max-w-none">
        <p
          className="text-lg text-gruvbox-light-fg/80
            dark:text-gruvbox-dark-fg/80 mb-8 leading-relaxed"
        >
          {post.excerpt}
        </p>

        <div
          className="bg-gruvbox-light-bg/50 dark:bg-gruvbox-dark-bg/50 border
            border-gruvbox-light-border dark:border-gruvbox-dark-border
            rounded-lg p-6"
        >
          <p className="text-gruvbox-light-fg dark:text-gruvbox-dark-fg">
            This blog post is currently being loaded. The full content will be
            available shortly. Thank you for your patience as we set up the
            complete blog system.
          </p>
        </div>
      </div>

      <footer
        className="mt-12 pt-8 border-t border-gruvbox-light-border
          dark:border-gruvbox-dark-border"
      >
        <div
          className="flex flex-col sm:flex-row justify-between items-center
            gap-4"
        >
          <div
            className="text-sm text-gruvbox-light-fg/70
              dark:text-gruvbox-dark-fg/70"
          >
            Written by Patrick Mwangi
          </div>

          <div className="flex gap-4">
            <Link
              href="/blog"
              className="text-sm text-gruvbox-light-accent
                dark:text-gruvbox-dark-accent hover:underline"
            >
              ← Back to Blog
            </Link>
          </div>
        </div>
      </footer>
    </article>
  );
}

export async function generateStaticParams() {
  return [
    { slug: "building-scalable-microservices-architecture" },
    { slug: "leading-engineering-teams-lessons" },
  ];
}

export async function generateMetadata({ params }: BlogPostProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return {
      title: "Post not found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: ["Patrick Mwangi"],
    },
  };
}
