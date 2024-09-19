import { PiSquaresFour } from "react-icons/pi";
import { IoIosList } from "react-icons/io";
import { LuGanttChart } from "react-icons/lu";
import { AiOutlineNodeIndex } from "react-icons/ai";
import { LuListFilter } from "react-icons/lu";
import { LuFolderEdit } from "react-icons/lu";
import { PiLineVerticalBold } from "react-icons/pi";

export default function CardListFilter() {
  return (
    <div className="bg-white flex flex-row items-center justify-start py-1 py-1 gap-1 text-left text-text-brand-secondary">
      <div className="rounded-md bg-gainsboro flex flex-row items-center justify-start p-1 gap-2">
        <div className="shadow-[1px_2px_4px_rgba(0,_0,_0,_0.25)] rounded-8xs bg-white flex flex-row items-center justify-start p-1 cursor-pointer">
          <PiSquaresFour size={14} />
        </div>
        <IoIosList size={18} className="cursor-pointer hover:text-gray-500" />
        <LuGanttChart
          size={17}
          className="cursor-pointer hover:text-gray-500"
        />
        <AiOutlineNodeIndex
          size={17}
          className="cursor-pointer hover:text-gray-500"
        />
      </div>
      <div className="flex flex-row items-center justify-start gap-1 text-grey-300">
        <PiLineVerticalBold
          size={16}
          className="text-gray-300 hover:text-gray-500"
        />
      </div>

      <div className="flex flex-row items-center justify-start gap-2">
        <LuListFilter
          size={16}
          className="cursor-pointer hover:text-gray-500"
        />
        <LuFolderEdit
          size={16}
          className="cursor-pointer hover:text-gray-500"
        />
      </div>
      <div className="flex flex-row items-center justify-start gap-1">
        <PiLineVerticalBold
          size={16}
          className="text-gray-300 cursor-pointer"
        />
      </div>
      <div className="flex flex-row items-center justify-start gap-1">
        <div className="rounded-md bg-white border-border-brand-default border-1 border-solid box-border h-1 overflow-hidden flex flex-row items-center justify-center p-3 gap-space-200 hover:text-gray-500 hover:border-gray-500">
          <div className="leading-[100%] text-xs font-medium cursor-pointer">
            Add Card
          </div>
        </div>
      </div>
      <img className="w-1 h-1" alt="" src="more_vert.svg" />
    </div>
  );
}
