import CreonPass from "@/components/layouts/CreonPass";
import Header from "@/components/layouts/Header";
import Hero from "@/components/layouts/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="px-4 md:px-8 relative  bg-black z-20">
      <Hero />
      <CreonPass />
    </main>
  );
}
