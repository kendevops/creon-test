import Link from "next/link";
import Image from "next/image";
import NavButton from "../atoms/NavButton";
import { title } from "process";

const menuItems = [
  {
    name: "Creon Pass",
    comingSoon: false,
  },
  {
    name: "Token",
    comingSoon: true,
  },
  {
    name: "AI Revenue",
    comingSoon: true,
  },
  {
    name: "AI Launchpad",
    comingSoon: true,
  },
];

export default function Nav() {
  return (
    <nav className="flex gap-10">
      <div className="xl:hidden flex ">
        <Link href={"#"} className="border-2 border-white px-[30px] py-[11px]">
          Connect
        </Link>
        <Image alt="close icon" src="/closeicon.svg" width={20} height={20} />
      </div>
      {menuItems.map((item) => {
        return (
          <NavButton
            key={item.name}
            title={item.name}
            commingSoon={item.comingSoon}
          />
        );
      })}
      <div className="xl:hidden flex justify-center items-center">
        <div>
          <Image alt="creon telegram" src="/telegram.svg" />
        </div>
        <div>
          <Image alt="creon telegram" src="/telegram.svg" />
        </div>
        <div>
          <Image alt="creon telegram" src="/telegram.svg" />
        </div>
      </div>
    </nav>
  );
}
