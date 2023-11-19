import Image from "next/image";

type TokenType = {
  title: string;
  subTitle: string;
  imgSrc: string;
  description: string;
};

export default function Token({
  title,
  subTitle,
  imgSrc,
  description,
}: TokenType) {
  return (
    <div className="py-[30px] w-[453px] h-[659px] rounded-md bg-CardColor flex-shrink-0 relative">
      <p className="absolute inline-flex py-[3px] px-[6px] justify-center items-center font-satoshi bg-white text-black text-[12px] font-bold leading-[110%] duration-300 transform -translate-y-4 scale-100 top-2 z-10 origin-[0] right-8 rounded-[100px]">
        COMING SOON
      </p>
      <div className="mx-[30px] mb-[30px] h-[119px]">
      <h1 className="text-white font-monument text-[38px] font-normal uppercase leading-[120%]">
        {title}
      </h1>
      <h6 className="bg-linear bg-clip-text text-transparent font-satoshi font-bold text-[22px]">
        {subTitle}
      </h6>
      </div>
      <Image
        src={imgSrc}
        alt="Comming Soon"
        width={423}
        height={234}
        className="flex-shrink-0 my-[3n0px] ml-0 mr-[30px] mb-[30px]"
      />
      <p className="text-white text-[18px] font-satoshi font-normal leading-[130%] px-[30px]">
        {description}
      </p>
    </div>
  );
}
