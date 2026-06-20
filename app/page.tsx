import Link from "next/link";
import { AboutSection } from "@/components/AboutSection";
import { InterestsSection } from "@/components/InterestsSection";
import { BlogSection } from "@/components/BlogSection";
import { Footer } from "@/components/Footer";

const pages = [
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Writing" },
  { href: "/contact", label: "Contact" },
];

export default function Home() {
  return (
    <div className="space-y-16 pb-20">
      {/* Intro */}
      <section className="animate-fade-in space-y-5">
        <p className="section-tag">~/terah</p>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Patrick Mwangi
        </h1>
        <p className="text-muted-foreground">
          Senior Software Engineer &amp; Head of Engineering
        </p>
        <p className="max-w-2xl leading-relaxed text-foreground/90">
          I&apos;m a software engineer with over six years of experience
          building scalable applications and leading teams. From ideation to
          deployment, I&apos;ve shipped products used across the country,
          helping shape how people live, work, and connect.
        </p>
        <p className="inline-flex items-center gap-2 text-sm text-primary">
          <span
            className="inline-block h-2 w-2 bg-primary"
            aria-hidden="true"
          />
          Available for work
        </p>
      </section>

      {/* Section navigation */}
      <nav
        className="flex flex-wrap gap-x-6 gap-y-2 border-y border-border py-3
          text-sm"
      >
        {pages.map((page) => (
          <Link
            key={page.href}
            href={page.href}
            className="text-muted-foreground hover:text-primary
              transition-colors"
          >
            → {page.label}
          </Link>
        ))}
      </nav>

      <AboutSection />
      <InterestsSection />
      <BlogSection />
      <Footer />
    </div>
  );
}
