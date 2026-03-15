import { ExperienceSection } from "@/components/ExperienceSection";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Experience - Patrick Mwangi",
  description:
    "Explore Patrick Mwangi's professional journey from Full-Stack Developer to Head of Engineering.",
};

export default function ExperiencePage() {
  return (
    <div className="space-y-24 pb-24">
      <ExperienceSection />
      <Footer />
    </div>
  );
}
