import Link from "next/link";

type Navbtn = {
  title: string;
  commingSoon?: boolean;
};

export default function NavButton({ title, commingSoon }: Navbtn) {
  return (
    <Link
      href="#"
      className="font-satoshi font-bold text-base py-[15px] border-t-2 last:border-b-2 border-[#13171D] xl:py-0 xl:border-none xl:text-center xl:text-lg"
    >
      {title}{" "}
      {commingSoon && (
        <sup className="text-Purple inline-flex justify-center items-center align-super text-[10px] leading-[11px] bg-black px-[4px] pt-[2px] pb-[1px] rounded-[100px] ">
          SOON
        </sup>
      )}
    </Link>
  );
}
