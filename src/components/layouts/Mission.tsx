import Image from "next/image";
import AccordionItem from "../atoms/AccordionItem";

export default function Mission() {
  return (
    <section className="pt-[80] xl:px-[190px] xl:pt-[115px] md:pt-[118px] lg:pt-[95px] relative flex flex-col lg:flex-row lg:gap-[127px] xl:gap-0 overflow-hidden">
      <aside className="lg:w-1/2 w-full mb-[150px] md:mb-[30px] lg:mb-0">
        <h1 className="hidden xl:block xl:w-[699px] text-white font-monument font-normal text-[38px] uppercase leading-[120%]">
          Our vision is to support the innovation of AI blockchain projects{" "}
          <span className="bg-linear bg-clip-text text-transparent">
            while prioritizing communities and democratizing profits
          </span>
        </h1>
        <h1 className="xl:hidden lg:w-[365px] text-white font-monument font-normal text-[28px] uppercase leading-[120%]">
          our mission is to provide unique, confidential AI-based tools, to
          which you will gain{" "}
          <span className="bg-linear bg-clip-text text-transparent">
            lifetime access through NFT tokens and our CREON token.
          </span>
        </h1>
        <Image
          src="/Images/Creon2.png"
          alt="Creon Moon Image"
          className="flex-shrink-0 absolute xl:left-80 lg:left-0 lg:right-0 xl:-bottom-28 -bottom-16 -z-10 right-[-15rem]"
          width={836}
          height={502}
          priority
        />
      </aside>
      <aside className="lg:w-1/2 w-full flex flex-col gap-[30px] md:mb-[98px] lg:mb-0">
        <AccordionItem
          title="Profitability and"
          titleBrk="Growth"
          description="At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success."
          iconSrc="/Icons/1.svg"
          showIcon={true}
        />
        <AccordionItem
          title="Transparent & Fair Decentralized"
          titleBrk="Earnings"
          description="At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success."
          iconSrc="/Icons/2.svg"
          showIcon={true}
        />
        <AccordionItem
          title="Lunching the"
          titleBrk="future"
          description="At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success."
          iconSrc="/Icons/3.svg"
          showIcon={true}
          className="xl:block hidden"
        />
        <AccordionItem
          title="Early Engagement in Tokenized"
          titleBrk="AI Projects"
          description="At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success."
          iconSrc="/Icons/3.svg"
          showIcon={false}
          className="block xl:hidden"
        />
        <AccordionItem
          title="Limitless Posibilities of Ai"
          titleBrk="& Crypto"
          description="At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success."
          iconSrc="/Icons/4.svg"
          showIcon={true}
        />
      </aside>
    </section>
  );
}
