import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

// This function allows you to provide custom components for MDX content
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Override default components
    h1: ({ children }) => (
      <h1
        className="text-3xl font-bold text-gruvbox-light-fg
          dark:text-gruvbox-dark-fg mb-6 mt-8"
      >
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2
        className="text-2xl font-semibold text-gruvbox-light-fg
          dark:text-gruvbox-dark-fg mb-4 mt-6"
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        className="text-xl font-semibold text-gruvbox-light-fg
          dark:text-gruvbox-dark-fg mb-3 mt-4"
      >
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p
        className="text-gruvbox-light-fg dark:text-gruvbox-dark-fg mb-4
          leading-relaxed"
      >
        {children}
      </p>
    ),
    a: ({ href, children }) => (
      <Link
        href={href as string}
        className="text-gruvbox-light-accent dark:text-gruvbox-dark-accent
          hover:underline flex items-center gap-1"
        target={href?.startsWith("http") ? "_blank" : "_self"}
        rel={href?.startsWith("http") ? "noopener noreferrer" : ""}
      >
        {children}
        {href?.startsWith("http") && <ExternalLink className="w-3 h-3" />}
      </Link>
    ),
    ul: ({ children }) => (
      <ul
        className="list-disc list-inside space-y-2 mb-4 text-gruvbox-light-fg
          dark:text-gruvbox-dark-fg"
      >
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol
        className="list-decimal list-inside space-y-2 mb-4 text-gruvbox-light-fg
          dark:text-gruvbox-dark-fg"
      >
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="ml-4">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote
        className="border-l-4 border-gruvbox-light-accent
          dark:border-gruvbox-dark-accent pl-4 py-2 mb-4 bg-gruvbox-light-bg/30
          dark:bg-gruvbox-dark-bg/30 rounded-r"
      >
        <p className="text-gruvbox-light-fg dark:text-gruvbox-dark-fg italic">
          {children}
        </p>
      </blockquote>
    ),
    pre: ({ children }) => (
      <pre
        className="mb-4 rounded-lg overflow-x-auto bg-gruvbox-light-bg
          dark:bg-gruvbox-dark-bg border border-gruvbox-light-border
          dark:border-gruvbox-dark-border"
      >
        <code
          className="block p-4 text-sm text-gruvbox-light-fg
            dark:text-gruvbox-dark-fg"
        >
          {children}
        </code>
      </pre>
    ),
    code: ({ children, className }) => {
      const isInline = !className;
      if (isInline) {
        return (
          <code
            className="bg-gruvbox-light-fg/10 dark:bg-gruvbox-dark-fg/10 px-1
              py-0.5 rounded text-sm text-gruvbox-light-fg
              dark:text-gruvbox-dark-fg"
          >
            {children}
          </code>
        );
      }
      return (
        <code
          className={`block p-4 text-sm text-gruvbox-light-fg
            dark:text-gruvbox-dark-fg ${className}`}
        >
          {children}
        </code>
      );
    },
    img: ({ src, alt }) => (
      <Image
        src={src as string}
        alt={alt as string}
        width={800}
        height={400}
        className="rounded-lg mb-4 w-full object-cover"
      />
    ),
    table: ({ children }) => (
      <div className="overflow-x-auto mb-4">
        <table
          className="min-w-full border border-gruvbox-light-border
            dark:border-gruvbox-dark-border rounded-lg overflow-hidden"
        >
          {children}
        </table>
      </div>
    ),
    th: ({ children }) => (
      <th
        className="px-4 py-2 bg-gruvbox-light-fg/10 dark:bg-gruvbox-dark-fg/10
          text-left font-semibold text-gruvbox-light-fg
          dark:text-gruvbox-dark-fg"
      >
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td
        className="px-4 py-2 border-t border-gruvbox-light-border
          dark:border-gruvbox-dark-border text-gruvbox-light-fg
          dark:text-gruvbox-dark-fg"
      >
        {children}
      </td>
    ),
    ...components,
  };
}
