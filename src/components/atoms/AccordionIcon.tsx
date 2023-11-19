import Image from "next/image";

const AccordionIcon = () => {
  return (
    <div className="relative inline-block group w-[100px] h-[114px]">
      <Image
        src="/Icons/rGrey.svg"
        alt="Arrow"
        width={68}
        height={76}
        className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0"
      />
      <Image
        src="/Icons/rNWhite.svg"
        alt="Arrow"
        width={56}
        height={62}
        className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0"
      />
      <Image
        src="/Icons/rNWhite.svg"
        alt="Arrow"
        width={56}
        height={62}
        className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0"
      />
      <Image
        src="/Icons/rLinear.svg"
        alt="Arrow"
        width={100}
        height={114}
        className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0"
      />
      <Image
        src="/Icons/1.svg"
        alt="Arrow"
        width={26}
        height={26}
        className="z-10"
      />
    </div>
  );
};

export default AccordionIcon;
