import { ArrowDropDown } from "../../icons/ArrowDropDown";
import ProgressBar from "../../ui-elements/ProgressBar";

// eslint-disable-next-line react/prop-types
export default function CardCategory({
  categoryName,
  children = null,
}: {
  children?: React.ReactNode;
  categoryName: string;
}) {
  return (
    <div className="w-full pb-2">
      <div className="flex w-full justify-between items-center px-1 pl-2">
        <div className="flex items-center gap-1">
          <ArrowDropDown color="#5A5A5A" className="cursor-pointer" />
          <div className="[font-family:'Roboto-Medium',Helvetica] font-semibold text-black text-[10px] tracking-[0] leading-[normal] cursor-pointer">
            {categoryName}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <ProgressBar
            progress={60}
            color="bg-green-500"
            height="h-2"
            className="w-[60px]"
          />
        </div>
      </div>
      {children}
    </div>
  );
}
