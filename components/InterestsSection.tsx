const interests = [
  "art",
  "music",
  "mathematics",
  "nature",
  "hiking",
  "blockchain",
  "travel",
  "technology",
];

export function InterestsSection() {
  return (
    <section className="space-y-4">
      <h2 className="text-sm font-medium tracking-tight text-muted-foreground">
        # interests
      </h2>
      <div className="flex flex-wrap gap-2">
        {interests.map((interest) => (
          <span
            key={interest}
            className="border border-border px-2.5 py-1 text-sm
              text-muted-foreground hover:border-primary hover:text-primary
              transition-colors"
          >
            {interest}
          </span>
        ))}
      </div>
    </section>
  );
}
