import InfoCard from "@/components/InfoCard";
import { Nav } from "@/components/Nav";
import Image from "next/image";
import laptop from "@/public/img/laptop.svg";
import { Divider } from "@/components/Divider";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative flex flex-col justify-center mx-auto max-w-4xl min-h-screen overflow-hidden">
      <Nav />

      <Image src={laptop} alt="Logo" className="mx-auto max-w-full h-64" />

      <Divider />

      <InfoCard />

      <Divider />

      <Footer />
    </main>
  );
}
