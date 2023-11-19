import Image from "next/image";
import AccordionIcon from "./AccordionIcon";
type AccordionItemType = {
  title?: string;
  description?: string;
  iconSrc?: string;
};

export default function AccordionItem({
  title,
  description,
  iconSrc,
}: AccordionItemType) {
  return (
    <div className="flex gap-[30px]">
        <AccordionIcon />
      <div className="flex flex-col">
        <div className="flex py-[28px]">
          <h1 className="w-[366px] text-white font-satoshi text-[22px] font-bold leading-[130%]">
            Profitability and Growth
          </h1>
          <Image
            src="/Icons/arrow.svg"
            alt="Arrow"
            width={16}
            height={16}
            className="flex-shrink-0"
          />
              </div>
              <p className="text-white font-satoshi text-[18px] font-normal leading-[130%]">
          At Creon, we handpick cutting-edge AI projects and offer our community
          and token holders early access and investment opportunities. Our
          community actively contributes to the growth and profitability of
          these projects, creating a dynamic ecosystem of innovation and shared
          success.
        </p>
      </div>
    </div>
  );
}
