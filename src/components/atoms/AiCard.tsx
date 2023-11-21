import Image from "next/image";
import { CardType } from "./Token";

export default function AiCard({ title, description, imgSrc }: CardType) {
  return (
    <article className="flex flex-col-reverse md:flex-row xl:h-[302px] xl:w-[1440px]  rounded-md bg-CardColor">
      <div className="flex flex-col py-[24px] md:pl-[24px] md:pr-[30px]  xl:py-10 xl:px-10 w-[256px] md:w-auto">
        <h1 className="text-white font-monument text-[22px] md:text-[28px] xl:text-[38px] font-normal uppercase leading-[130%]">
          {title}
        </h1>
        <p className="text-white font-satoshi self-stretch text-base xl:text-lg font-normal text-ellipsis overflow-hidden">
          {description}
        </p>
      </div>
      <Image
        src={imgSrc}
        alt="Ai Image"
        width={453}
        height={302}
        className="flex-shrink-0 xl:block hidden"
      />
      <Image
        src={imgSrc}
        alt="Ai Image"
        width={308}
        height={260}
        className="flex-shrink-0 hidden md:block"
      />
      <Image
        src={imgSrc}
        alt="Ai Image"
        width={292}
        height={169}
        className="flex-shrink-0 md:hidden block"
      />
    </article>
  );
}
