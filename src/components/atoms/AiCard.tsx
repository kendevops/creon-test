import Image from "next/image";
import { CardType } from "./Token";

export default function AiCard({ title, description, imgSrc }: CardType) {
  return (
    <article className="flex h-[302px] w-[1440px] rounded-md bg-CardColor">
      <div className="flex flex-col gap[15px] py-10 px-10 w-[907]">
        <h1 className="text-white font-monument text-[38px] font-normal uppercase leading-[130%]">
          {title}
        </h1>
        <p className="text-white font-satoshi text-[18px] font-normal">
          {description}
        </p>
      </div>
      <Image src={imgSrc} alt="Ai Image" width={453} height={302} className="flex-shrink-0" />
    </article>
  );
}
