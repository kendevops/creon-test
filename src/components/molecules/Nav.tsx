import Link from "next/link";
import Image from "next/image";
import NavList from "./NavList";

type NavType = {
  showMenu: boolean;
  toggle: () => void;
};

export default function Nav({ showMenu, toggle }: NavType) {
  return (
    <>
      <nav className="xl:flex hidden gap-10">
        <NavList />
      </nav>
      <section
        className={`${
          showMenu ? "translate-x-0" : "translate-x-full"
        } flex flex-col justify-between pt-5 pb-[30px] pl-[30px] pr-4 fixed top-0 right-0 h-full w-[60%] md:w-1/3 z-50 transform bg-black transition-transform ease-in-out duration-300`}
      >
        <div className="flex flex-col gap-[30px]">
          <div className="flex gap-[15px]">
            <Link
              href={"#"}
              className="flex font-satoshi font-bold text-base h-[38px] border-2 border-white px-[30px] justify-center items-center rounded-md"
            >
              Connect
            </Link>
            <Image
              alt="close icon"
              src="/Icons/closeIcon.svg"
              width={38}
              height={38}
              onClick={toggle}
              className="cursor-pointer"
            />
          </div>
          <nav className="flex flex-col">
            <NavList />
          </nav>
        </div>
        <div className="flex justify-center items-center gap-[10px]">
          <Link href="#" className="border-2 border-white rounded-full p-2">
            <Image alt="creon telegram" src="/Icons/telegram.svg" width={16} height={16} />
          </Link>
          <Link href="#" className="border-2 border-white rounded-full p-2">
            <Image alt="creon telegram" src="/Icons/discord.svg" width={16} height={16} />
          </Link>
          <Link href="#" className="border-2 border-white rounded-full p-2">
            <Image alt="creon telegram" src="/icons/twitter.svg" width={16} height={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
