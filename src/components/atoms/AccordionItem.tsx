"use client";

import { useState } from "react";
import Image from "next/image";
import AccordionIcon from "./AccordionIcon";
type AccordionItemType = {
  title: string;
  titleBrk?: string;
  description: string;
  iconSrc: string;
  className?: string;
  showIcon: boolean;
};

export default function AccordionItem({
  title,
  titleBrk,
  description,
  iconSrc,
  className,
  showIcon,
}: AccordionItemType) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className={`justify-start items-start inline-flex flex-col gap-[30px] pb-[30px] border-b border-GreyLine ${className}`}
    >
      <div className="flex gap-[30px]">
        <AccordionIcon active={isOpen} imgSrc={iconSrc} show={showIcon} />
        <div className="flex-col flex">
          <div className="flex py-[28px]">
            <h1 className="xl:w-[366px] w-[323px] text-white font-satoshi text-lg xl:text-[22px] font-bold leading-[130%]">
              {title} <br /> {titleBrk}
            </h1>
            <Image
              src="/Icons/arrow.svg"
              alt="Arrow"
              width={16}
              height={16}
              onClick={toggleAccordion}
              className={`transition-transform transform cursor-pointer ${
                isOpen ? "rotate-180" : "rotate-0"
              } flex-shrink-0`}
            />
          </div>
          {isOpen && (
            <p className="text-white font-satoshi text-base xl:text-lg font-normal leading-6 self-stretch">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
