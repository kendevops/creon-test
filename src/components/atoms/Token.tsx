import Image from "next/image";

export type CardType = {
  title: string;
  subTitle?: string;
  imgSrc: string;
  description: string;
};

export default function Token({
  title,
  subTitle,
  imgSrc,
  description,
}: CardType) {
  return (
    <div className="xl:py-[30px] py-[20px] w-[308px] h-[616px] xl:w-[453px] xl:h-[659px] rounded-md bg-CardColor flex-shrink-0 relative">
      <p className="absolute inline-flex py-[3px] px-[6px] justify-center items-center font-satoshi bg-white text-black text-xs font-bold leading-[110%] duration-300 transform -translate-y-4 scale-100 top-2 z-10 origin-[0] right-8 rounded-[100px]">
        COMING SOON
      </p>
      <div className="xl:mx-[30px] xl:mb-[30px] mx-[20px] mb-[20px] xl:max-h-[119px] max-h-[90px]">
        <h1 className="text-white font-monument text-[28px] xl:text-[38px] font-normal uppercase leading-[120%]">
          {title}
        </h1>
        <h6 className="bg-linear bg-clip-text text-transparent font-satoshi font-bold text-lg xl:text-[22px]">
          {subTitle}
        </h6>
      </div>
      <div className="w-[423px] h-[234px]  ml-0 mr-[30px] mb-[30px] overflow-hidden xl:block hidden">
        <Image
          src={imgSrc}
          alt="Comming Soon"
          width={423}
          height={234}
          className="flex-shrink-0 transform transition-transform hover:scale-110 "
        />
      </div>
      <div className="w-[288px] h-[234px]  ml-0 mr-[20px] mb-[20px] overflow-hidden xl:hidden">
        <Image
          src={imgSrc}
          alt="Comming Soon"
          width={288}
          height={234}
          className="flex-shrink-0 transform transition-transform hover:scale-110 duration-300 xl:hidden"
        />
      </div>

      <p className="text-white text-base xl:text-lg font-satoshi font-normal leading-[130%] px-[20px] xl:px-[30px]">
        {description}
      </p>
    </div>
  );
}
