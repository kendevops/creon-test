import CPassLeftText from "../atoms/CPassLeftText";

export default function CreonPassLeft() {
  const texts = [
    "Pre-launch investment opportunities for upcoming AI projects",
    "Free and early access to Creon built AI projects",
    "Higher allocation limits on the Creon AI Launchpad",
    "Revenue share distribution from Creon built AI projects",
  ];

  return (
    <aside className="flex flex-col w-1/2 my-[136px] mr-[10px]">
      <h1 className="text-white font-monument text-[68px] font-normal uppercase leading-[110%] mb-[30px]">
        creon pass nft
      </h1>
      <div className="flex-shrink-0 bg-GreyLine mb-[30px]"></div>
      <p className="bg-linear bg-clip-text text-transparent font-bold font-satoshi text-[22px] leading-[130%] mb-10">
        The Creon NFT pass unlocks access to AI projects, the Creon launchpad,
        and a ticket to generate passive income through AI-driven tools
      </p>
      <article>
        {texts.map((text) => {
          return <CPassLeftText key={text} text={text} />;
        })}
      </article>
      <button className="w-[70%] inline-flex justify-center items-center rounded-md bg-linear text-white font-satoshi text-[18px] font-bold px-5 py-4 mt-16">Buy Creon Pass</button>
    </aside>
  );
}
