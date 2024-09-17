import { Circle } from "../../icons/Circle";
import ProgressBar from "../../ui-elements/ProgressBar";

export default function CardSubCategory({
  subCategoryName,
}: {
  subCategoryName: string;
}) {
  return (
    <div className="flex w-full justify-between items-center px-1 pl-6 py-1">
      <div className="flex items-center gap-1">
        <Circle color="#5A5A5A" className="cursor-pointer" />
        <div className="[font-family:'Roboto-Medium',Helvetica] text-black text-[10px] tracking-[0] leading-[normal] cursor-pointer">
          {subCategoryName}
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
  );
}
