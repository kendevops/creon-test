import Image from "next/image";

export default function Profiting() {
  return (
    <section className="pt-[120px] pb-[141px] px-[190px]">
      <h1 className="text-white font-monument text-[68px] font-normal uppercase leading-[110%]">
        Profiting Through
      </h1>
      <h2 className="bg-linear bg-clip-text text-transparent font-normal font-monument text-right text-[38px] leading-[120%] uppercase mb-[83px]">
        AI Innovation & Decentralization
      </h2>
      <div className="flex gap-[71px]  relative">
        <Image
          src="/Images/Normal_bitrate.png"
          alt="Creon Moon Image"
          className="flex-shrink-0"
          width={947}
          height={485}
          priority
        />
        <div className="absolute w-[947px] h-[485px] rounded-md inset-0 bg-image-pattern mix-blend-soft-light">
        </div>
        <div className="flex flex-col justify-center items-center">
          <h4 className="mb-[28px] text-white font-satoshi font-bold text-[22px] leading-[130%]">
            The dynamic community driven business model of the future.
          </h4>
          <p className="text-white font-satoshi font-normal text-[18px] leading-[130%]">
            At Creon, we blend the power of AI tools with the dynamic crypto and
            NFT markets, utilizing an innovative business model to drive
            profitability. This approach empowers our community, as our NFT and
            token holders directly benefit from the growth and prosperity of the
            Creon network, creating a win-win scenario for both our community
            and for the projects we launch.
          </p>
        </div>
      </div>
    </section>
  );
}
