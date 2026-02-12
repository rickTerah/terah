import InfoCard from "@/components/InfoCard";
import Projects from "@/components/Projects";
import Image from "next/image";
import laptop from "@/public/img/laptop.png";
import { Divider } from "@/components/Divider";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Image
        src={laptop}
        alt="Patrick Mwangi - Senior Software Engineer working on laptop"
        className="mx-auto max-w-full h-64 object-cover rounded-lg"
      />

      <Divider />

      <InfoCard />

      <Divider />

      <Projects />

      <Divider />

      <Footer />
    </>
  );
}
