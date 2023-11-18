'use client'

import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import Nav from "../molecules/Nav";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <header className="flex pt-5 justify-between">
      <Image
        src="/logo.svg"
        alt="Creon Logo"
        className="flex-shrink-0"
        width={100}
        height={24}
        priority
      />
      <section className="text-white flex gap-3 md:gap-6">
        <Nav showMenu={showMenu} toggle={toggleMenu} />
        <Link
          href={"#"}
          className="flex font-satoshi font-bold text-lg h-[38px] border-2 border-white px-[30px] justify-center items-center rounded-md"
        >
          Connect
        </Link>
        <Image
          alt="menu"
          src="/Icons/menu.svg"
          width={38}
          height={38}
          onClick={toggleMenu}
          className="cursor-pointer xl:hidden block"
        />
      </section>
    </header>
  );
}
