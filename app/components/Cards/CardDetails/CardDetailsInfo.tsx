import { LuPlus } from "react-icons/lu";
import { LuSmilePlus } from "react-icons/lu";
import { LuTags } from "react-icons/lu";

export function CardDetailsInfo() {
  return (
    <div className="flex flex-col items-start justify-start gap-6">
      <div className="max-w-[355px] min-w-[100px] h-full flex flex-row items-center justify-start box-border gap-5">
        <div className="w-36 h-full rounded-md bg-gainsboro-100 flex flex-row items-center justify-center">
          <LuPlus size={34} className="cursor-pointer" />
        </div>
        <div className="flex flex-col items-start justify-center gap-1">
          <div className="flex items-center gap-1 h-[42px]">
            <span className="font-thin text-[28px] animate-blink flex items-center">
              |
            </span>
            <h2 className="text-[28px] font-semibold text-gainsboro-300">
              Untitled
            </h2>
          </div>

          <div className="flex flex-row items-center justify-center gap-1 text-sm">
            <div className="w-[26px] rounded-md bg-gainsboro-100 h-6 flex flex-row items-center justify-center">
              <LuSmilePlus size={18} className="cursor-pointer" />
            </div>
            <div className="w-[26px] rounded-md bg-gainsboro-100 h-6 flex flex-row items-center justify-center">
              <LuTags size={18} className="cursor-pointer" />
            </div>
            <div className="rounded-lg h-6 flex flex-row items-center justify-center px-2 box-border gap-1 cursor-pointer bg-black">
              <div className="leading-[100%] text-white text-xs">DevOps</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-fit text-sm text-darkgray-100">
        Click here to add description
      </div>
    </div>
  );
}
