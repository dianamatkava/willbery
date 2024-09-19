import ProgressBar from "../../ui-elements/ProgressBar";
import { IoReturnDownForward } from "react-icons/io5";

export default function CardSubCategory({
  name,
  progress,
}: {
  name: string;
  progress: number;
}) {
  return (
    <div className="flex w-full justify-between items-center px-1 pl-4 py-1">
      <div className="flex items-center gap-1">
        <IoReturnDownForward size={16} color="#868686" />

        <div className="text-gery-600 font-medium text-xxs tracking-[0] leading-[normal] cursor-pointer flex-1">
          {name}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <ProgressBar
          progress={progress}
          color="bg-green-500"
          height="h-2"
          className="w-[50px]"
        />
      </div>
    </div>
  );
}
