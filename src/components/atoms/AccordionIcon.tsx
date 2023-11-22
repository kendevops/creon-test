import Image from "next/image";

type IconType = {
  active: boolean;
  imgSrc: string;
  show: boolean;
};

const AccordionIcon = ({ active, imgSrc, show }: IconType) => {
  return (
    <div className="relative group w-[100px] h-[114px] flex justify-center items-center flex-shrink-0">
      <Image
        src={imgSrc}
        alt="Icon"
        width={26}
        height={26}
        className={`${!show && "hidden"} block z-20 absolute w-[26px] h-[26px] flex-shrink-0`}
      />

      <Image
        src="/Icons/rNWhite.svg"
        alt="Arrow"
        width={56}
        height={62}
        className={`${
          active ? "opacity-0" : "opacity-1"
        } z-[11] absolute w-[56px] h-[62px] transition-opacity duration-300 flex-shrink-0`}
      />

      <Image
        src="/Icons/rGrey.svg"
        alt="Arrow"
        width={56}
        height={62}
        className={`${
          active ? "opacity-1" : "opacity-0"
        } z-10 absolute w-[56px] h-[62px] transition-opacity duration-300 flex-shrink-0`}
      />

      <Image
        src="/Icons/rAWhite.svg"
        alt="Arrow"
        width={68}
        height={76}
        className={`${
          active ? "opacity-1" : "opacity-0"
        } absolute w-[68px] h-[72px] transition-opacity duration-300 flex-shrink-0`}
      />

      <Image
        src="/Icons/rNGrey.svg"
        alt="Arrow"
        width={68}
        height={76}
        className={`${
          active ? "opacity-0" : "opacity-1"
        } z-10 absolute w-[68px] h-[72px] transition-opacity duration-300 flex-shrink-0`}
      />

      <Image
        src="/Icons/rLinear.svg"
        alt="Arrow"
        width={100}
        height={114}
        className="absolute w-[100px] h-[114px] transition-opacity duration-300 flex-shrink-0"
      />
    </div>
  );
};

export default AccordionIcon;
