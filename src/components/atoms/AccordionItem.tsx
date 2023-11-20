"use client";

import { useState } from "react";
import Image from "next/image";
import AccordionIcon from "./AccordionIcon";
type AccordionItemType = {
  title: string;
  description: string;
  iconSrc: string;
};

export default function AccordionItem({
  title,
  description,
  iconSrc,
}: AccordionItemType) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="justify-start items-start inline-flex flex-col gap-[30px] pb-[30px] border-b border-GreyLine">
      <div className="flex gap-[30px]">
        <AccordionIcon active={isOpen} imgSrc={iconSrc} />
        <div className="flex-col flex">
          <div className="flex py-[28px]">
            <h1 className="w-[366px] text-white font-satoshi text-[22px] font-bold leading-[130%]">
              {title}
            </h1>
            <Image
              src="/Icons/arrow.svg"
              alt="Arrow"
              width={16}
              height={16}
              onClick={toggleAccordion}
              className={`transition-transform transform ${
                isOpen ? "rotate-180" : "rotate-0"
              } flex-shrink-0`}
            />
          </div>
          {isOpen && (
            <p className="text-white font-satoshi text-[18px] font-normal leading-6">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
