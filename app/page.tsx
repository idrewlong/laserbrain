import Hero from "@/components/Hero";
import Director from "@/components/Director";
import Image from "next/image";
import Brands from "@/components/Brands";
import Recent from "@/components/Recent";
import Cta from "@/components/Cta";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Recent />
      <Director />
      <Services />
      <Brands />
      <Cta />
    </main>
  );
}
