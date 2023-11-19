import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-[190px] pt-[22px] pb-[41px] flex justify-between items-center">
      <aside className="flex gap-[90px] flex-start">
        <p className="text-white text-base font-normal font-satoshi leading-[130%]">
          © Creon 2023. All rights reserved.
        </p>
        <div className="flex gap-[10px]">
          <Link
            href="#"
            className="border-2 border-white rounded-full p-2 flex-shrink-0"
          >
            <Image
              alt="creon telegram"
              src="/Icons/telegram.svg"
              width={16}
              height={16}
            />
          </Link>
          <Link
            href="#"
            className="border-2 border-white rounded-full p-2 flex-shrink-0"
          >
            <Image
              alt="creon telegram"
              src="/Icons/discord.svg"
              width={16}
              height={16}
            />
          </Link>
          <Link
            href="#"
            className="border-2 border-white rounded-full p-2 flex-shrink-0"
          >
            <Image
              alt="creon telegram"
              src="/icons/twitter.svg"
              width={16}
              height={16}
            />
          </Link>
        </div>
      </aside>
      <Image
        src="/Images/Niftables-logo.png"
        alt="Powered by Niftables"
        width={190}
        height={21}
        className="flex-shrink-0"
      />
      {/* <video
        src={require("../../../public/video.mov")}
        autoPlay
        loop
        muted
        className="absolute left-0 bottom-0 -z-20 object-cover flex-shrink-0"
          /> */}
      <video
        width={1920}
        height={970}
        autoPlay
        loop
        muted
        className="absolute left-0 bottom-0 -z-20 object-cover flex-shrink-0"
      >
        <source
          src="https://s3-figma-videos-production-sig.figma.com/video/935630556139161368/TEAM/6933/bb19/-1660-42f2-938f-1a29fa41ccd1?Expires=1701043200&Signature=otwiG9DjxZqUBaPRrQ8m7wSWJTtvNJlGPaZn~m~w5bdgrScYHqlm7TA9Z8Z7SrtqL-gq1lyx5WbD~xPOpo1DnDddwJqFgov9s2lSC9wZ0kwTD92JKlUTWVTMe0oFeTbWhXkSEHVooKP056SlPvjTNmRs8ck0e02FOIvkMFW6~0BHAI0Fo~HtjKx9KAdBdyTyWJSBksRy3tH7n8g9RxUrgSV~8S~R4fXkZUR1aKcYWCrzlzPJfmdBnBsm-FolNDaG2D3AIMDIad3o~asOFzEWL6~1i~Lp~64P6b0gFXWY4uysBySTMagwsXnugz0uZsAEjqdPDqjxXwcO-xCJZQhQZA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          type="video/mp4"
        />
      </video>
      <div className="absolute w-[1920px] h-full left-0 bottom-0 bg-gradient-to-r from-black via-transparent to-black mix-blend-soft-light"></div>
    </footer>
  );
}
