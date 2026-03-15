const interests = [
  "ART",
  "MUSIC",
  "MATHEMATICS",
  "NATURE",
  "HIKING",
  "BLOCKCHAIN",
  "TRAVEL",
  "TECHNOLOGY",
];

export function InterestsSection() {
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-3">
        <span className="font-mono text-accent">➜</span>
        <h2 className="text-2xl font-bold tracking-tight">INTERESTS</h2>
      </div>

      <div className="terminal-frame">
        <div className="p-6">
          <div className="flex flex-wrap gap-2">
            {interests.map((interest, index) => (
              <span
                key={interest}
                className="px-3 py-1.5 border border-border font-mono text-sm
                  hover:border-primary/50 hover:text-primary transition-all
                  cursor-default animate-slide-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
