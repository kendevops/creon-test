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
    <main className="px-[30px] md:px-8 relative  bg-black z-20">
      {/* Components for extra Large Screen 1920px and above */}
      <section className="hidden xl:block">
        <Hero />
        <CreonPass />
        <Profiting />
        <Mission />
        <ComingSoon />
        <Ai />
        <Footer />
      </section>

      {/* Components for Large Screen 1024px and below */}
      <section className="block xl:hidden">
        <Hero />
        <Mission />
        <Profiting />
        <Ai />
        <CreonPass />
        <ComingSoon />
        <Footer />
      </section>
    </main>
  );
}
