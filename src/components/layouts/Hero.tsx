import Header from "./Header";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col px-[15px] md:px-[30px] lg:px-0">
      <video
        src={require("/Video/video.mov")}
        autoPlay
        loop
        muted
        className="absolute inset-0 -z-20 object-cover h-screen flex-shrink-0"
      />
      <Header />
      <div className="absolute inset-0 -z-10 bg-hero-pattern mix-blend-soft-light"></div>

      <div className="xl:flex hidden flex-col mb-[102px] mt-auto px-[190px]">
        <h1 className="font-monument text-white font-normal uppercase text-[68px] leading-[110%] mb-10">
          {"The world's first platform for Tokenizing AI blockchain projects"}
        </h1>
        <div className="w-[656px] border-y bg-linear bg-clip-border border-transparent">
          <div className="bg-black pt-[7px] pb-[12px]">
            <p className="bg-linear bg-clip-text text-transparent font-bold font-satoshi text-[22px] leading-[130%]">
              Hold the Creon Pass NFT and earn passive income from AI Tools
            </p>
          </div>
        </div>
      </div>
      <div className="xl:hidden flex flex-col mb-[70px] md:mb-[100px] mt-auto lg:mb-[70px]">
        <h1 className="w-[345px] md:w-[465px] font-monument text-white font-normal uppercase text-[32px] md:text-[44px] leading-[110%] mb-[26px] lg:w-full">
          Empowering AI-Crypto Innovations and Integrating AI Tools into crypto.
        </h1>
        <div className="w-[345px] md:w-[465px] border-y bg-linear bg-clip-border border-transparent lg:w-[656px]">
          <div className="bg-black pt-[7px] pb-[12px]">
            <p className="bg-linear bg-clip-text text-transparent font-bold font-satoshi text-[18px] leading-[130%]">
              Creon «Create On» confidential AI Tools for granting access
              through NFTs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
