import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technical Blog - Patrick Mwangi",
  description:
    "Technical articles on software architecture, engineering leadership, web development, and emerging technologies by Patrick Mwangi.",
  openGraph: {
    title: "Technical Blog - Patrick Mwangi",
    description:
      "Technical articles on software architecture, engineering leadership, and modern web development.",
    url: "https://terah.dev/blog",
    type: "website",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <article className="prose prose-gruvbox max-w-none">
      <div className="min-h-screen">{children}</div>
    </article>
  );
}
