import Image from "next/image";
import Link from "next/link";


export default function Footer() {
    return (
      <footer className="px-[190px] pt-[22px] pb-[41px] flex justify-between items-center">
        <aside className="flex gap-[90px] flex-start">
          <p className="text-white text-base font-normal font-satoshi leading-[130%]">© Creon 2023. All rights reserved.</p>
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
      </footer>
    );
}
