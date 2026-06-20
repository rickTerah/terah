import { Download, FileText } from "lucide-react";

export function AboutSection() {
  return (
    <section className="space-y-4">
      <h2 className="text-sm font-medium tracking-tight text-muted-foreground">
        # about
      </h2>
      <p className="leading-relaxed text-foreground/90">
        I enjoy tackling complex challenges rooted in real-world
        problem-solving. My work spans cloud architecture, system design, and
        engineering leadership &mdash; mentoring teams and shipping reliable
        software at scale.
      </p>
      <div className="flex flex-wrap gap-3 pt-1">
        <a
          href="/resume.pdf"
          download="patrick-mwangi-resume.pdf"
          className="inline-flex items-center gap-2 border border-border px-3
            py-1.5 text-sm hover:border-primary hover:text-primary
            transition-colors"
        >
          <Download className="h-3.5 w-3.5" />
          resume.pdf
        </a>
        <a
          href="/resume.docx"
          download="patrick-mwangi-resume.docx"
          className="inline-flex items-center gap-2 border border-border px-3
            py-1.5 text-sm hover:border-primary hover:text-primary
            transition-colors"
        >
          <FileText className="h-3.5 w-3.5" />
          resume.docx
        </a>
      </div>
    </section>
  );
}
