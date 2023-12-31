import Image from "next/image";

export default function Profiting() {
  return (
    <section className="py-[80px] px-[15px] md:px-[30px] lg:px-0 md:py-[145px] lg:pt-[72px] lg:pb-[71px] xl:pt-[120px] xl:pb-[141px] xl:px-[190px]">
      <h1 className="text-white font-monument text-[32px] xl:text-[68px] md:text-[44px] font-normal uppercase leading-[110%]">
        Profiting Through
      </h1>
      <h2 className="bg-linear bg-clip-text text-transparent font-normal font-monument text-right text-[22px] xl:text-[38px] md:text-[28px] leading-[120%] uppercase mb-10 xl:mb-[83px] ">
        AI Innovation & Decentralization
      </h2>
      {/* Xtra Large Screen */}
      <div className="hidden relative xl:gap-[71px] xl:flex">
        <Image
          src="/Images/Normal_bitrate.png"
          alt="Creon Moon Image"
          className="flex-shrink-0"
          width={947}
          height={485}
          priority
        />

        <div className="absolute w-[947px] h-[485px] rounded-md inset-0 bg-image-pattern mix-blend-soft-light"></div>

        <div className="flex flex-col justify-center items-center border-x border-GreyLine px-[30px]">
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
      <div className="flex flex-col items-center lg:flex-row relative gap-[30px] mt-10 lg:mt-0 lg:gap-[45px] xl:hidden">

        {/* Large Screen and Medium */}
        <video
          width="636"
          height="493"
          autoPlay
          loop
          muted
          className="hidden md:block w-[636px] h-[493px] object-cover flex-shrink-0"
        >
          <source
            src="https://s3-figma-videos-production-sig.figma.com/video/935630556139161368/TEAM/731b/68f0/-ed68-4d8b-a340-d47af6466744?Expires=1701648000&Signature=RkhGQ~qWw8Si48lawxJLUmgzsBOjbYskWumHfBZdPPFGKBPuDhgizmKoRoERh-v6hho0kJKs-wUMxanB8fzFXqGp7q3XaKz8ptELZVFrOtGBFMFfNQubcI7O4yBAHnPlFHdJbnx7OzV-YmFFSJAxUHVGjTXLAXwq3~Zs8D-Wo~DC1thHGorauUIgY0uc7WWS1kemblDiTvBKnWE1R1xFbYVt2s3MVT4tgX0mOU7XyHW~drbdMCY6zJn0ZrlMwHN3nrwePAJ-DqdaayGNb6Q8AYxhWrfxKshO1oAQE3zHEnPBvzB0mROVZiZoGqsbEoq5C~jOEQUZt~x1iichx6NcdA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            type="video/mp4"
          />
        </video>
        <div className="hidden md:block absolute w-[636px] h-[493px] rounded-md inset-0 bg-video-pattern mix-blend-soft-light"></div>

      {/* Small Screen */}

        <video
          width="345"
          height="179"
          autoPlay
          loop
          muted
          className="md:hidden w-[345px] h-[179px] object-cover flex-shrink-0"
        >
          <source
            src="https://s3-figma-videos-production-sig.figma.com/video/935630556139161368/TEAM/731b/68f0/-ed68-4d8b-a340-d47af6466744?Expires=1701648000&Signature=RkhGQ~qWw8Si48lawxJLUmgzsBOjbYskWumHfBZdPPFGKBPuDhgizmKoRoERh-v6hho0kJKs-wUMxanB8fzFXqGp7q3XaKz8ptELZVFrOtGBFMFfNQubcI7O4yBAHnPlFHdJbnx7OzV-YmFFSJAxUHVGjTXLAXwq3~Zs8D-Wo~DC1thHGorauUIgY0uc7WWS1kemblDiTvBKnWE1R1xFbYVt2s3MVT4tgX0mOU7XyHW~drbdMCY6zJn0ZrlMwHN3nrwePAJ-DqdaayGNb6Q8AYxhWrfxKshO1oAQE3zHEnPBvzB0mROVZiZoGqsbEoq5C~jOEQUZt~x1iichx6NcdA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            type="video/mp4"
          />
        </video>
        <div className="md:hidden absolute w-[345px] h-[179px] rounded-md inset-0 bg-video-pattern mix-blend-soft-light"></div>

        <div className="flex flex-col justify-center items-center border-y border-x-0 lg:border-y-0 lg:border-x border-GreyLine px-[20px]">
          <h4 className="mb-[20px] text-white font-satoshi font-bold text-lg leading-[130%]">
            A Dynamic Business Model for Sustainable Growth and Community
            Engagement.
          </h4>
          <p className="text-white font-satoshi font-normal text-base leading-[130%]">
            At Creon, we merge AI tools with the crypto and NFT markets,
            leveraging a dynamic business model to generate profits. Our
            commitment to innovation and decentralization allows us to
            strengthen our market position and foster a sustainable ecosystem.
            We empower our community, ensuring transparency and actively
            involving NFT holders in our success.
          </p>
        </div>
      </div>
      
    </section>
  );
}
