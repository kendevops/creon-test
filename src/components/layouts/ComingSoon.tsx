import Token from "../atoms/Token";

export default function ComingSoon() {
  return (
    <section className="px-[190px] pt-[156px] pb-[155px] flex gap-10">
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
  );
}
