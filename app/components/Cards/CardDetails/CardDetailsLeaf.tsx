import { IoReturnDownForward } from "react-icons/io5";
import ProgressBar from "../../ui-elements/ProgressBar";
import { IoAdd } from "react-icons/io5";
import { IoMdMore } from "react-icons/io";

export function CardDetailsLeaf() {
  return (
    <div className="w-full w-fit flex flex-row items-center justify-between py-0 pl-6 pr-0 box-border gap-2">
      <div className="w-full w-fit flex flex-row items-center justify-start gap-1">
        <IoReturnDownForward size={18} />
        <div className="w-fit font-medium flex items-center shrink-0">
          Practice
        </div>
      </div>
      <div className="w-full flex flex-row items-start justify-end gap-1 text-xxs">
        <div className="flex flex-row items-center justify-start gap-1">
          {/* <div className="rounded-sm bg-gainsboro-100 flex flex-row items-center justify-start p-1">
              <FaLink size={14} />
            </div> */}
          <div className="rounded-md text-gray-500 border-gainsboro-400 border-[0.8px] border-solid box-border flex flex-row items-center justify-center py-1 px-2">
            <div className="leading-[100%] font-medium">Practice</div>
          </div>
          <div className="w-fell flex flex-row items-center justify-end text-right text-xs  gap-1">
            <div className="w-full flex-1 flex flex-row items-center justify-center">
              <ProgressBar
                progress={55}
                height={"h-2"}
                className={"w-[60px] font-semibold text-xxs"}
              />
            </div>
          </div>
          <div className="text-xxxs rounded-md bg-gainsboro-100 flex flex-row items-center justify-start px-1 py-0.5">
            23/1224
          </div>
          <div className="text-xxxs rounded-md bg-gainsboro-100 flex flex-row items-center justify-start px-1 py-0.5">
            145/232
          </div>
        </div>
        <IoAdd size={20} />
        <IoMdMore size={20} />
      </div>
    </div>
  );
}
