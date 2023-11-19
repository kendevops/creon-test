type CPassType = {
  text: string;
};

export default function CPassLeftText({ text }: CPassType) {
  return (
    <div className="inline-flex border rounded-md px-[18px] pt-[12px] pb-[16px] border-GreyLine mb-[10px]">
      <p className="font-satoshi font-normal text-[18px] leading-[130%] text-white">{text}</p>
    </div>
  );
}
