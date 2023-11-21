import AiCard from "../atoms/AiCard";

export default function ComingSoon() {
  return (
    <section className="flex gap-5 pl-[15px] py-[30px] overflow-x-auto hide-scrollbar md:flex-col lg:gap-10 md:px-[30px] lg:px-0 md:py-10 lg:py-20 xl:px-[190px]">
      <AiCard
        title={"AI Prospects, Market Size, and Development Pace"}
        imgSrc={"/Images/ai3.png"}
        description={
          "The AI market is one of the most dynamically growing areas of technology. According to reports, the global AI market is expected to reach $190.61 billion by 2025, with a CAGR (Compound Annual Growth Rate) of 36.6%. The key drivers behind this growth include advancements in machine learning, increasing demand for big data analytics, and growing adoption of AI technology across various sectors such as healthcare, finance, and transportation."
        }
      />
      <AiCard
        title={"AI Tools and Market"}
        imgSrc={"/Images/ai2.png"}
        description={
          "AI tools refer to the technologies and software that enable computer systems to perform tasks usually requiring human intellect. The market for these tools is dynamic and diverse, encompassing areas such as Natural Language Processing (NLP), machine learning, computer vision, and robotics. With a wide range of applications, AI tools are becoming increasingly indispensable in many sectors, from healthcare to finance, retail, manufacturing, and many others."
        }
      />
      <AiCard
        title={"AI, Crypto, and NFT Market"}
        imgSrc={"/Images/ai1.png"}
        description={
          "Artificial Intelligence and blockchain technology are two groundbreaking areas leading new technological innovations. The combination of these two technologies creates intriguing possibilities. For instance, Non-Fungible Tokens (NFTs) can leverage AI to create unique digital artworks or to provide exclusive AI-based services. Meanwhile, cryptocurrencies can benefit from AI by improving security mechanisms, transaction efficiency, and service personalization. Such combination brings substantial benefits for both developers and users, paving the way for unprecedented possibilities."
        }
      />
    </section>
  );
}
