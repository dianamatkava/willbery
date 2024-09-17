import { ArrowDropDown } from "../../icons/ArrowDropDown";

export default function CardSubCategory() {
  return (
    <div className="flex w-full items-center justify-between relative flex-[0_0_auto]">
      <div className="w-full m-2 items-center gap-1 flex relative">
        <ArrowDropDown className="relative" color="#5A5A5A" />
        <div className="relative [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[9px] tracking-[0] leading-[normal]">
          Course
        </div>
      </div>
      <div className="inline-flex items-center justify-end relative flex-[0_0_auto]">
        <div className="gap-1 inline-flex items-center relative flex-[0_0_auto]">
          <div className="[font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#272727] text-[8px] whitespace-nowrap relative tracking-[0] leading-[normal]">
            78%
          </div>
          <div className="relative w-[50px] h-[5px] bg-[#e8ece8] rounded-[10px]" />
          <div className="absolute w-10 h-[5px] top-0.5 left-[21px] bg-[#09760773] rounded-[10px]" />
        </div>
      </div>
    </div>
  );
}
