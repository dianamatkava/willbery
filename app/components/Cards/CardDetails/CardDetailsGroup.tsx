import { FaChevronDown } from "react-icons/fa";

import { IoAdd } from "react-icons/io5";
import { IoMdMore } from "react-icons/io";
import ProgressBar from "../../ui-elements/ProgressBar";
export function CardDetailsGroup({
  children,
  data,
}: {
  children: React.ReactNode;
  data: object;
}) {
  console.log("data", data);
  return (
    <div className="flex w-full flex-col items-start justify-start">
      <div className="w-full flex flex-col items-start justify-start gap-2">
        <div className="w-full flex flex-row items-center justify-between text-darkgray-200">
          <div className="w-full flex flex-row items-center justify-start gap-2 ml-1">
            <FaChevronDown size={10} className="cursor-pointer" />
            <div className="font-semibold whitespace-pre-wrap text-xsm">
              {data.name}
            </div>
          </div>
          <div className="w-full flex flex-row items-center justify-end gap-1">
            <div className="w-full flex-1 flex flex-row items-center justify-end gap-1">
              <ProgressBar
                progress={data.progress}
                height={"h-2"}
                className={"w-[60px] font-semibold text-xxs"}
              />
            </div>
            <div className="flex items-center justify-center gap-0">
              <IoAdd size={18} className="cursor-pointer" />
              <IoMdMore size={18} className="cursor-pointer" />
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
