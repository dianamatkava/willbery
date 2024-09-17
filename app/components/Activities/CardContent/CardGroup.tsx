import { ArrowDropDown } from "../../icons/ArrowDropDown";
import ProgressBar from "../../ui-elements/ProgressBar";

export default function CardGroup({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full pb-1">
      <div className="flex w-full items-center justify-between p-1 pb-1">
        <div className="flex items-center w-full">
          <ArrowDropDown color="#5A5A5A" className="cursor-pointer" />
          <div className="font-semibold text-[#777777] text-[8px] cursor-pointer">
            AWS
          </div>
          <div className="border-b-[0.4px] border-solid border-[#eaeaea] w-full"></div>
        </div>
        <ProgressBar
          progress={60}
          color="bg-green-500"
          height="h-2"
          className="w-[60px]"
        />
      </div>
      {children}
    </div>
  );
}
