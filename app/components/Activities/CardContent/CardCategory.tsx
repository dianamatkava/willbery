import { ArrowDropDown } from "../../icons/ArrowDropDown";

// eslint-disable-next-line react/prop-types
export default function CardCategory({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col w-56 h-[45px] justify-end border-b-[0.5px] [border-bottom-style:solid] border-[#e9e9e9] items-center relative">
      <div className="relative w-56 h-[15px]">
        <div className="flex w-[87px] h-[15px] items-center gap-1 absolute top-0 left-0">
          <ArrowDropDown
            className="!relative !w-[13.29px] !h-[15px]"
            color="#5A5A5A"
          />
          <div className="relative w-[134.12px] h-[14.45px] mt-[-0.73px] mr-[-64.41px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[10px] tracking-[0] leading-[normal]">
            AWS SkillBuilder
          </div>
        </div>
        <div className="flex w-[127px] items-center justify-between absolute top-[3px] left-[97px]">
          <div className="inline-flex gap-px flex-[0_0_auto] items-center relative">
            <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
            <div className="relative w-[17px] h-[5px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[8px] tracking-[0] leading-[normal] whitespace-nowrap">
              23%
            </div>
            <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
            <div className="w-[15px] h-[5px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[8px] whitespace-nowrap relative tracking-[0] leading-[normal]">
              55%
            </div>
          </div>
          <div className="gap-1 inline-flex items-center relative flex-[0_0_auto]">
            <div className="w-[17px] h-[9px] mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#272727] text-[8px] whitespace-nowrap relative tracking-[0] leading-[normal]">
              78%
            </div>
            <div className="relative w-[50px] h-[5px] bg-[#e8ece8] rounded-[10px]" />
            <div className="absolute w-10 h-[5px] top-0.5 left-[21px] bg-[#09760773] rounded-[10px]" />
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
