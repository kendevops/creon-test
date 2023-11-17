import Link from "next/link";

type Navbtn = {
  title: string;
  commingSoon?: boolean;
};

export default function NavButton({ title, commingSoon }: Navbtn) {
  return (
    <Link
      href="#"
      className="px-[15px] border-2 border-[#13171D] xl:px-0 xl:border-none"
    >
      {title}{" "}
      {commingSoon && (
        <sup className="text-Purple font-satoshi font-bold  text-[10px] leading-[11px] bg-black px-[4px] pt-[2px] pb-[1px] rounded-[100px] flex justify-center items-center">
          SOON
        </sup>
      )}
    </Link>
  );
}
