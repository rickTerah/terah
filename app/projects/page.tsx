import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Projects - Patrick Mwangi",
  description:
    "Explore projects by Patrick Mwangi, including the Pariti Talent Platform, Kwikbasket E-commerce, and more.",
};

export default function ProjectsPage() {
  return (
    <div className="space-y-24 pb-24">
      <Projects />
      <Footer />
    </div>
  );
}
