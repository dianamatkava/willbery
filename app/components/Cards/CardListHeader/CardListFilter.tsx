import {PiLineVerticalBold, PiSquaresFour} from "react-icons/pi";
import {IoIosList} from "react-icons/io";
import {LuFolderEdit, LuGanttChart, LuListFilter} from "react-icons/lu";
import {AiOutlineNodeIndex} from "react-icons/ai";

export default function CardListFilter({
  createCard,
}: {
  createCard: () => void;
}) {
  return (
    <div className="bg-white flex flex-row items-center justify-start py-1 py-1 gap-1 text-left">
      <div className="rounded-md bg-gainsboro-100 flex flex-row items-center justify-start p-1 gap-3">
        <div className="shadow-[1px_2px_4px_rgba(0,_0,_0,_0.25)] rounded-md bg-white flex flex-row items-center justify-start p-1 cursor-pointer">
          <PiSquaresFour size={15} />
        </div>
        <IoIosList size={20} className="cursor-pointer hover:text-gray-500" />
        <LuGanttChart
          size={20}
          className="cursor-pointer hover:text-gray-500"
        />
        <AiOutlineNodeIndex
          size={20}
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
        <div className="rounded-md border border-black box-border overflow-hidden flex flex-row items-center justify-center p-2 gap-2 hover:text-gray-500 hover:border-gray-500">
          <button
            className="leading-[100%] text-xs font-medium cursor-pointer"
            onClick={createCard}
          >
            Add Card
          </button>
        </div>
      </div>
      <img className="w-1 h-1" alt="" src="more_vert.svg" />
    </div>
  );
}
