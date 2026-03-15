import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, getAllSlugs } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Badge } from "@/components/ui/badge";
import { codeToHtml } from "shiki";

interface BlogPostProps {
  params: Promise<{
    slug: string;
  }>;
}

async function CodeBlock({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  const lang = className?.replace("language-", "") || "javascript";
  const html = await codeToHtml(children, {
    lang: lang === "jsx" ? "typescript" : lang,
    theme: "github-dark",
  });

  return (
    <div
      className="relative rounded-lg overflow-hidden mb-6"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

const components = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="text-2xl font-semibold mt-8 mb-4" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-xl font-semibold mt-6 mb-3" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="mb-4 leading-relaxed text-muted-foreground" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc list-inside mb-4 space-y-2" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal list-inside mb-4 space-y-2" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="text-muted-foreground" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="border-l-4 border-primary pl-4 py-2 my-4 italic"
      {...props}
    />
  ),
  code: ({
    className,
    children,
    ...props
  }: React.HTMLAttributes<HTMLElement> & { children: React.ReactNode }) => {
    const isInline = !className;

    if (isInline) {
      return (
        <code
          className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono
            text-primary"
          {...props}
        >
          {children}
        </code>
      );
    }

    return (
      <CodeBlock className={className}>
        {String(children).replace(/\n$/, "")}
      </CodeBlock>
    );
  },
  pre: ({ children }: React.HTMLAttributes<HTMLPreElement>) => <>{children}</>,
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold" {...props} />
  ),
  table: (props: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="overflow-x-auto mb-6">
      <table
        className="w-full border-collapse border border-border"
        {...props}
      />
    </div>
  ),
  thead: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <thead className="bg-muted" {...props} />
  ),
  th: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className="border border-border px-4 py-2 text-left font-semibold"
      {...props}
    />
  ),
  td: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td className="border border-border px-4 py-2" {...props} />
  ),
};

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

        <div
          className="flex items-center gap-4 text-sm text-muted-foreground mb-6"
        >
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span>•</span>
          <Badge variant="outline" className="font-mono">
            {post.category}
          </Badge>
        </div>

        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 bg-primary/10 text-primary rounded"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <div className="prose max-w-none">
        <p className="text-lg mb-8 leading-relaxed">{post.description}</p>
        <MDXRemote source={post.content} components={components} />
      </div>

      <footer className="mt-12 pt-8 border-t border-border">
        <div
          className="flex flex-col sm:flex-row justify-between items-center
            gap-4"
        >
          <div className="text-sm text-muted-foreground">
            Written by Patrick Mwangi
          </div>

          <div className="flex gap-4">
            <Link href="/blog" className="text-sm text-primary hover:underline">
              ← Back to Blog
            </Link>
          </div>
        </div>
      </footer>
    </article>
  );
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post not found",
    };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: ["Patrick Mwangi"],
    },
  };
}
