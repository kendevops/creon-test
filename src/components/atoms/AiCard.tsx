import Image from "next/image";
import { CardType } from "./Token";

export default function AiCard({ title, description, imgSrc }: CardType) {
  return (
    <>
    <>
      <article className="hidden md:flex xl:h-[302px] xl:w-[1440px]  rounded-md bg-CardColor">
        <div className="flex flex-col py-[24px] pl-[24px] pr-[30px]  xl:py-10 xl:px-10 w-[256px] md:w-auto">
          <h1 className="text-white font-monument text-[28px] xl:text-[38px] font-normal uppercase leading-[130%]">
            {title}
          </h1>
          <p className="text-white font-satoshi text-base xl:text-lg font-normal">
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
          className="flex-shrink-0 hidden md:block xl:hidden"
        />
      </article>
      </>
      <>
      <article className="flex flex-col rounded-md bg-CardColor md:hidden">
        <Image
          src={imgSrc}
          alt="Ai Image"
          width={292}
          height={169}
          className="flex-shrink-0 md:hidden block"
        />
        <div className="flex flex-col py-[24px] w-[256px]">
          <h1 className="text-white font-monument text-[22px] font-normal uppercase leading-[130%]">
            {title}
          </h1>
          <p className="text-white font-satoshi self-stretch text-base font-normal">
            {description}
          </p>
        </div>
      </article>
    </>
    </>
  );
}
