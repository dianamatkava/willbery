import { FaChevronDown } from "react-icons/fa";

import { IoAdd } from "react-icons/io5";
import { IoMdMore } from "react-icons/io";
import ProgressBar from "../../ui-elements/ProgressBar";
export function CardDetailsGroup({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full flex-col items-start justify-start">
      <div className="w-full flex flex-col items-start justify-start gap-2">
        <div className="w-full flex flex-row items-center justify-between text-darkgray-200">
          <div className="w-full flex flex-row items-center justify-start gap-2">
            <FaChevronDown size={10} />
            <div className="font-semibold whitespace-pre-wrap text-sm">
              Untitled list
            </div>
          </div>
          <div className="w-full flex flex-row items-center justify-end gap-1">
            <div className="w-full flex-1 flex flex-row items-center justify-end gap-1">
              <ProgressBar
                progress={55}
                height={"h-2"}
                className={"w-[60px] font-semibold text-xxs"}
              />
            </div>
            <IoAdd size={20} />
            <IoMdMore size={20} />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
