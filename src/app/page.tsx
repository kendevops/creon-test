import ComingSoon from "@/components/layouts/ComingSoon";
import CreonPass from "@/components/layouts/CreonPass";
import Header from "@/components/layouts/Header";
import Hero from "@/components/layouts/Hero";
import Mission from "@/components/layouts/Mission";
import Profiting from "@/components/layouts/Profiting";
import Image from "next/image";

export default function Home() {
  return (
    <main className="px-4 md:px-8 relative  bg-black z-20">
      <Hero />
      <CreonPass />
      <Profiting />
      <Mission />
      <ComingSoon />
    </main>
  );
}
