import { Circle } from "../../icons/Circle";
import ProgressBar from "../../ui-elements/ProgressBar";

export default function CardSubCategory({
  name,
  progress,
}: {
  name: string;
  progress: number;
}) {
  return (
    <div className="flex w-full justify-between items-center px-1 pl-6 py-1">
      <div className="flex items-center gap-1">
        <Circle color="#9ca3af" className="cursor-pointer p-1" />
        <div className="[font-family:'Roboto-Medium',Helvetica] text-black text-[10px] tracking-[0] leading-[normal] cursor-pointer flex-1">
          {name}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <ProgressBar
          progress={progress}
          color="bg-green-500"
          height="h-2"
          className="w-[60px]"
        />
      </div>
    </div>
  );
}
