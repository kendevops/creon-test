import Token from "../atoms/Token";

export default function ComingSoon() {
  return (
    <>
      <>
        <section className="hidden px-[190px] pt-[156px] pb-[155px] xl:flex gap-10">
          <Token
            title={"token"}
            subTitle={"The Gateway token to the world of AI"}
            imgSrc={"/Images/coming1.png"}
            description={
              "Set to debut in the latter half of 2024, the CREON token serves as the pioneering link between cutting-edge AI initiatives and blockchain technology. This innovative token provides NFT and token holders with unparalleled access to our Launchpad, AI tools, and exclusive pre-launch investment prospects."
            }
          />
          <Token
            title={"revenue"}
            subTitle={"Driving income and growth through decentralization"}
            imgSrc={"/Images/coming2.png"}
            description={
              "CREON NFT and token holders are integral participants in the profit-sharing from our launched AI-based enterprises. We support the development of AI tools, ensuring a steady revenue stream, all while allowing early investors to enjoy the benefits of their support."
            }
          />
          <Token
            title={"launchpad"}
            subTitle={"Driving the future of AI Innovation"}
            imgSrc={"/Images/coming3.png"}
            description={
              "The Creon AI Launchpad, an essential component of our initiative, represents a groundbreaking opportunity in the realm of AI and blockchain. It provides the first known platform for acquiring allocations in tokenized AI projects, offering our community of NFT and CREON token holders early access to innovative and promising AI endeavors."
            }
          />
        </section>
      </>
      <>
        <section className="pl-[15px] py-[80px] flex  gap-5 overflow-x-auto hide-scrollbar md:pl-[30px] lg:px-0 md:py-[204px] lg:py-[76px] lg:justify-center lg:items-center xl:hidden">
          <Token
            title={"token"}
            subTitle={"Empowering NFT Holders and Shaping AI Development"}
            imgSrc={"/Images/comingS1.png"}
            description={
              "Launching in the second half of 2024, the CREON token represents first bridge between AI tools and blockchain technology, giving NFT holders and token users unprecedented access and influence."
            }
          />
          <Token
            title={"income"}
            subTitle={"Harnessing AI for Profit Generation"}
            imgSrc={"/Images/comingS2.png"}
            description={
              "As an integral part of our project, AI Income offers the opportunity to benefit from a genuine, profit-generating AI-based business. This facet of our initiative leverages the power of selected exclusive AI tools to create a profit stream."
            }
          />
          <Token
            title={"launchpad"}
            subTitle={
              "Driving the future of AI InnovationUnlocking Tokenized AI Projects"
            }
            imgSrc={"/Images/comingS3.png"}
            description={
              "AI Launchpad, an essential component of our initiative, represents a groundbreaking opportunity in the realm of AI and blockchain. It provides the first known platform for acquiring allocations in tokenized AI projects, offering our community of NFT and CREON token holders early access to innovative and promising AI endeavors."
            }
          />
        </section>
      </>
    </>
  );
}
