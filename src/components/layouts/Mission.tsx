import Image from "next/image";
import AccordionItem from "../atoms/AccordionItem";

export default function Mission() {
  return (
    <section className="px-[190px] pt-[115px] relative flex">
      <aside className="w-1/2">
        <h1 className="text-white font-monument text-[38px] uppercase leading-[120%]">
          Our vision is to support the innovation of AI blockchain projects{" "}
          <span className="bg-linear bg-clip-text text-transparent">
            while prioritizing communities and democratizing profits
          </span>
        </h1>
        <Image
          src="/Images/Creon2.png"
          alt="Creon Moon Image"
          className="flex-shrink-0"
          width={836}
          height={502}
          priority
        />
      </aside>
      <aside className="w-1/2">
        <AccordionItem />
      </aside>
    </section>
  );
}
