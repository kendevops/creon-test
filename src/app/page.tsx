import Image from "next/image";

import ComingSoon from "@/components/layouts/ComingSoon";
import Ai from "@/components/layouts/Ai";
import CreonPass from "@/components/layouts/CreonPass";
import Footer from "@/components/layouts/Footer";
import Hero from "@/components/layouts/Hero";
import Mission from "@/components/layouts/Mission";
import Profiting from "@/components/layouts/Profiting";

export default function Home() {
  return (
    <main className="px-4 md:px-8 relative  bg-black z-20">
      <Hero />
      <CreonPass />
      <Profiting />
      <Mission />
      <ComingSoon />
      <Ai />
      <Footer />
    </main>
  );
}
