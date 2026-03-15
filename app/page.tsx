import Image from "next/image";
import Link from "next/link";
import laptop from "@/public/img/laptop.png";
import { AboutSection } from "@/components/AboutSection";
import { InterestsSection } from "@/components/InterestsSection";
import { BlogSection } from "@/components/BlogSection";
import { Footer } from "@/components/Footer";
import { ChevronDown } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex flex-col justify-center">
        {/* Terminal Window Frame */}
        <div className="terminal-frame animate-fade-in">
          <div className="terminal-header">
            <div className="terminal-dot terminal-dot-red" />
            <div className="terminal-dot terminal-dot-yellow" />
            <div className="terminal-dot terminal-dot-green" />
            <div className="terminal-title">patrick@portfolio ~ bash</div>
          </div>
          <div className="p-6 md:p-8">
            {/* Status Line */}
            <div className="flex items-center gap-2 mb-6 font-mono text-sm">
              <span className="text-accent">➜</span>
              <span className="text-muted-foreground">~</span>
              <span className="text-primary">cat about.txt</span>
              <span className="animate-cursor-blink text-primary">_</span>
            </div>

            {/* Main Content */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 space-y-6">
                {/* Status Badge */}
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 border
                    border-primary/30 bg-primary/5 font-mono text-sm"
                >
                  <span className="relative flex h-2 w-2">
                    <span
                      className="animate-ping absolute inline-flex h-full w-full
                        rounded-full bg-primary opacity-50"
                    />
                    <span
                      className="relative inline-flex rounded-full h-2 w-2
                        bg-primary"
                    />
                  </span>
                  <span className="text-primary">AVAILABLE FOR WORK</span>
                </div>

                {/* Name */}
                <h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold
                    tracking-tight animate-slide-up"
                >
                  PATRICK<span className="text-primary">_</span>
                  <br />
                  <span className="text-muted-foreground">MWANGI</span>
                </h1>

                {/* Role */}
                <p
                  className="text-lg md:text-xl text-muted-foreground max-w-lg
                    animate-slide-up animation-delay-75 font-mono"
                >
                  <span className="text-accent">const</span> role ={" "}
                  <span className="text-primary">
                    &quot;Senior Software Engineer &amp; Head of
                    Engineering&quot;
                  </span>
                </p>

                {/* Skills */}
                <div
                  className="flex flex-wrap gap-2 animate-slide-up
                    animation-delay-150"
                >
                  {[
                    "Next.js",
                    "TypeScript",
                    "Cloud Architecture",
                    "Team Leadership",
                    "System Design",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 border border-border font-mono
                        text-sm hover:border-primary/50 hover:text-primary
                        transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Navigation Links */}
                <div
                  className="flex flex-wrap gap-4 pt-4 animate-slide-up
                    animation-delay-225"
                >
                  <Link
                    href="/experience"
                    className="px-4 py-2 border border-border font-mono text-sm
                      hover:border-primary/50 hover:text-primary
                      transition-colors"
                  >
                    → experience
                  </Link>
                  <Link
                    href="/projects"
                    className="px-4 py-2 border border-border font-mono text-sm
                      hover:border-primary/50 hover:text-primary
                      transition-colors"
                  >
                    → projects
                  </Link>
                  <Link
                    href="/blog"
                    className="px-4 py-2 border border-border font-mono text-sm
                      hover:border-primary/50 hover:text-primary
                      transition-colors"
                  >
                    → blog
                  </Link>
                </div>
              </div>

              {/* Image Terminal */}
              <div
                className="relative w-64 h-64 lg:w-80 lg:h-80 animate-slide-up
                  animation-delay-225"
              >
                <div
                  className="absolute inset-0 bg-gradient-to-br from-primary/20
                    to-accent/20"
                />
                <div
                  className="absolute inset-0 border border-border
                    overflow-hidden"
                >
                  <Image
                    src={laptop}
                    alt="Patrick Mwangi"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Decorative corner accents */}
                <div
                  className="absolute -top-1 -left-1 w-4 h-4 border-t-2
                    border-l-2 border-primary"
                />
                <div
                  className="absolute -top-1 -right-1 w-4 h-4 border-t-2
                    border-r-2 border-primary"
                />
                <div
                  className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2
                    border-l-2 border-primary"
                />
                <div
                  className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2
                    border-r-2 border-primary"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        </div>
      </section>

      <AboutSection />
      <InterestsSection />
      <BlogSection />
      <Footer />
    </div>
  );
}
