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
          className="flex-shrink-0 absolute left-80 -bottom-28 -z-[5]"
          width={836}
          height={502}
          priority
        />
      </aside>
      <aside className="w-1/2 flex flex-col gap-[30px]">
        <AccordionItem
          title="Profitability and
Growth"
          description="At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success."
          iconSrc="/Icons/1.svg"
        />
        <AccordionItem
          title="Transparent & Fair Decentralized Earnings"
          description="At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success."
          iconSrc="/Icons/2.svg"
        />
        <AccordionItem
          title="Lunching the future"
          description="At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success."
          iconSrc="/Icons/3.svg"
        />
        <AccordionItem
          title="Limitless Posibilities of Ai and
Crypto"
          description="At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success."
          iconSrc="/Icons/4.svg"
        />
      </aside>
    </section>
  );
}
