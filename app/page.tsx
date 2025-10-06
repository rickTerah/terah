import InfoCard from "@/components/InfoCard";
import Image from "next/image";
import laptop from "@/public/img/laptop.png";
import { Divider } from "@/components/Divider";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Image
        src={laptop}
        alt="Logo"
        className="mx-auto max-w-full h-64 object-cover"
      />

      <Divider />

      <InfoCard />

      <Divider />

      <Footer />
    </>
  );
}
