import { ArrowDropDown } from "../../icons/ArrowDropDown";

export default function CardGroup({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-start justify-around">
      <div className="inline-flex flex-col items-start gap-2">
        <div className="flex items-center gap-2">
          <ArrowDropDown color="#B2B2B2" />
          <div className=" w-fit [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#d9d9d9] text-[8px] tracking-[0] leading-[normal] whitespace-nowrap">
            AWS
          </div>
          <div className="flex w-full items-center gap-2">
            <div className="w-fit [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#777777] text-[8px] whitespace-nowrap relative tracking-[0] leading-[normal]">
              55%
            </div>
            <div className="flex flex-col items-start flex-1 grow">
              <img
                className="self-stretch w-full h-px object-cover"
                alt="Line"
                src="line-72.svg"
              />
              <img className="h-px object-cover" alt="Line" src="line-80.svg" />
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
