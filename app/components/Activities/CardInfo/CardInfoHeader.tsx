export default function CardInfoHeader() {
  return (
    <div className="flex w-full place-items-start justify-between p-1">
      <div className="inline-flex items-center gap-0.5 relative flex-[0_0_auto]">
        <div className="relative w-[6px] h-[6px] bg-white rounded border border-solid border-[#55cc6f] shadow-[0px_0px_3px_#20450f40]" />
        <div className="relative [font-family:'Roboto-Medium',Helvetica] font-medium text-[#59a18c] text-[10px] tracking-[0] leading-[normal] whitespace-nowrap">
          active
        </div>
      </div>
      <div className="inline-flex items-center relative flex-[0_0_auto] bg-[#3E76FF] rounded-[5px]">
        <div className="relative pr-1 pl-1 p-[0.5px] [font-family:'Roboto-SemiBold',Helvetica] text-[#D9E3FF] font-semibold text-[9px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
          DevOps
        </div>
      </div>
    </div>
  );
}
