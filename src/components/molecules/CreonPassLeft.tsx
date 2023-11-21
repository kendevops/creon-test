import CPassLeftText from "../atoms/CPassLeftText";

export default function CreonPassLeft() {
  const texts = [
    "Pre-launch investment opportunities for upcoming AI projects",
    "Free and early access to Creon built AI projects",
    "Higher allocation limits on the Creon AI Launchpad",
    "Revenue share distribution from Creon built AI projects",
  ];

  return (
    <>
      <>
        <aside className="hidden flex-col w-1/2 my-[136px] mr-[10px] xl:flex">
          <h1 className="text-white font-monument text-[44px] xl:text-[68px] font-normal uppercase leading-[110% mb-[20px] pb-[20px] xl:mb-[30px] xl:pb-[30px] border-b border-GreyLine">
            creon pass nft
          </h1>
          <p className="bg-linear bg-clip-text text-transparent font-bold font-satoshi text-[22px] leading-[130%] mb-10">
            The Creon NFT pass unlocks access to AI projects, the Creon
            launchpad, and a ticket to generate passive income through AI-driven
            tools
          </p>
          <article>
            {texts.map((text) => {
              return <CPassLeftText key={text} text={text} />;
            })}
          </article>
          <button className="w-[70%] inline-flex justify-center items-center rounded-md bg-linear text-white font-satoshi text-[18px] font-bold px-5 py-4 mt-16">
            Buy Creon Pass
          </button>
        </aside>
      </>
      <>
        <aside className="flex flex-col w-full lg:w-1/2 my-[113px] mr-[10px] xl:hidden">
          <h1 className="text-white font-monument text-[44px] font-normal uppercase leading-[110% mb-[20px] pb-[20px] border-b border-GreyLine">
            creon pass nft
          </h1>
          <p className="bg-linear bg-clip-text text-transparent font-bold font-satoshi text-lg leading-[130%] lg:mb-[30px] mb-[55px]">
            Access to confidential AI tools enabling business optimization and
            development. Only NFT holders will have the ability to use a given
            tool.
          </p>
          <article className="lg:w-full w-1/3">
            <div className="inline-flex justify-center items-center border rounded-md px-4 pt-[10px] pb-4 border-GreyLine mb-[10px]">
              <p className="font-satoshi font-normal text-base leading-[130%] text-white">
                {
                  "Prospect to derive financial benefits through the redistributed profit generated from AI tools, but only when the majority of NFT holders decide to release the tool publicly."
                }
              </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-[10px]">
              <div className="inline-flex border rounded-md px-4 pt-[10px] pb-4 border-GreyLine">
                <p className="font-satoshi font-normal text-base leading-[130%] text-white">
                  {
                    "The possibility of allocating investments into new, exceptional tokenized AI tools through Creon Launchpad."
                  }
                </p>
              </div>
              <div className="inline-flex border rounded-md px-4 pt-[10px] pb-4 border-GreyLine">
                <p className="font-satoshi font-normal text-base leading-[130%] text-white">
                  {
                    "Early access to allocations in inspiring tokenized projects, real businesses based on AI."
                  }
                </p>
              </div>
            </div>
          </article>
          <button className="w-1/3 lg:w-[50%] flex justify-center items-center rounded-md bg-linear text-white font-satoshi text-base font-bold pl-[58px] pr-[56px] pt-3 mt-[30px] pb-[22px] flex-shrink-0">
            Buy Creon Pass
          </button>
        </aside>
      </>
    </>
  );
}
