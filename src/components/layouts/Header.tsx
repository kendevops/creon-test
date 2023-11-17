import Image from "next/image";
import Link from "next/link";


export default function Header() {
  return (
    <header>
      <Image
        src="/logo.svg"
        alt="Creon Logo"
        className="dark:invert"
        width={100}
        height={24}
        priority
      />
      <section className="text-white">
        <Link href={"#"} className="border-2 border-white px-[30px] py-[11px]">
          Connect
        </Link>
      </section>
    </header>
  );
}
