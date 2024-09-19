// import { TiMediaPauseOutline } from "react-icons/ti";
import { IoAdd } from "react-icons/io5";
import { IoMdMore } from "react-icons/io";
// import { FaLink } from "react-icons/fa6";
import ProgressBar from "../../ui-elements/ProgressBar";

export function CardDetailsNode({ children }: { children: React.ReactNode }) {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-3 text-sm">
      <div className="w-full flex flex-row items-center justify-between py-0 pl-4 pr-0 box-border text-sm">
        <div className="w-full flex flex-row items-center justify-start gap-2">
          <img
            className="w-5 h-5 rounded-md max-w-full overflow-hidden max-h-full"
            alt=""
            src="aws-logo.svg"
          />
          <div className="w-fit font-medium flex items-center shrink-0">
            AWS SkillBuilder
          </div>
        </div>
        <div className="w-full flex flex-row items-start justify-end gap-1 text-xxs">
          <div className="flex flex-row items-center justify-start gap-1">
            {/* <div className="rounded-sm bg-gainsboro-100 flex flex-row items-center justify-start p-1">
              <FaLink size={14} />
            </div> */}
            <div className="rounded-md text-gainsboro-400 border-gainsboro-400 border-[0.8px] border-solid box-border flex flex-row items-center justify-center py-1 px-2">
              <div className="leading-[100%] font-medium">Course</div>
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
      {children}
    </div>
  );
}
