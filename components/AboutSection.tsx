import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

export function AboutSection() {
  return (
    <section className="space-y-8">
      <div className="terminal-frame">
        <div className="terminal-header">
          <div className="terminal-dot terminal-dot-red" />
          <div className="terminal-dot terminal-dot-yellow" />
          <div className="terminal-dot terminal-dot-green" />
          <div className="terminal-title">about.md</div>
        </div>
        <div className="p-6 md:p-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-mono text-sm">
              <span className="section-tag">ABOUT</span>
            </div>
            <p
              className="text-lg text-muted-foreground leading-relaxed
                max-w-3xl"
            >
              I&apos;m a software engineer with over six years of experience,
              passionate about building impactful digital solutions. I enjoy
              tackling complex challenges, especially those rooted in real-world
              problem-solving. From ideation to deployment, I&apos;ve developed
              applications used across the country, helping shape how people
              live, work, and connect.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              <Button asChild size="sm" className="font-mono">
                <a href="/resume.pdf" download="patrick-mwangi-resume.pdf">
                  <Download className="mr-2 h-3 w-3" />
                  RESUME.PDF
                </a>
              </Button>
              <Button asChild size="sm" variant="outline" className="font-mono">
                <a href="/resume.docx" download="patrick-mwangi-resume.docx">
                  <FileText className="mr-2 h-3 w-3" />
                  RESUME.DOCX
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
