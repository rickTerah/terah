import { Button } from "@/components/ui/button";
import { Github, Play } from "lucide-react";

// Custom components for blog posts
export const BlogComponents = {
  Callout: ({
    children,
    type = "info",
  }: {
    children: React.ReactNode;
    type?: "info" | "warning" | "success";
  }) => {
    const styles = {
      info: "bg-blue-100 dark:bg-blue-900 border-blue-300 dark:border-blue-700 text-blue-800 dark:text-blue-200",
      warning:
        "bg-yellow-100 dark:bg-yellow-900 border-yellow-300 dark:border-yellow-700 text-yellow-800 dark:text-yellow-200",
      success:
        "bg-green-100 dark:bg-green-900 border-green-300 dark:border-green-700 text-green-800 dark:text-green-200",
    };

    return (
      <div className={`border-l-4 p-4 mb-4 rounded-r ${styles[type]}`}>
        {children}
      </div>
    );
  },

  DemoLink: ({ href, title }: { href: string; title: string }) => (
    <Button asChild className="mb-4">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2"
      >
        <Play className="w-4 h-4" />
        View Demo: {title}
      </a>
    </Button>
  ),

  GithubLink: ({ href, title }: { href: string; title: string }) => (
    <Button variant="outline" asChild className="mb-4">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2"
      >
        <Github className="w-4 h-4" />
        View Code: {title}
      </a>
    </Button>
  ),

  CodeBlock: ({
    children,
    language,
  }: {
    children: string;
    language?: string;
  }) => (
    <pre
      className="mb-4 rounded-lg overflow-x-auto bg-gruvbox-light-bg
        dark:bg-gruvbox-dark-bg border border-gruvbox-light-border
        dark:border-gruvbox-dark-border"
    >
      <code
        className={`block p-4 text-sm ${language ? `language-${language}` : ""}`}
      >
        {children}
      </code>
    </pre>
  ),
};
