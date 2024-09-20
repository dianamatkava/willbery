// import { TiMediaPauseOutline } from "react-icons/ti";
import { IoAdd } from "react-icons/io5";
import { IoMdMore } from "react-icons/io";
// import { FaLink } from "react-icons/fa6";
import ProgressBar from "../../ui-elements/ProgressBar";

export function CardDetailsNode({
  children,
  data,
}: {
  children: React.ReactNode;
  data: object;
}) {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-3 text-sm">
      <div className="w-full flex frex-wrap flex-row items-center justify-between box-border text-sm">
        <div className="w-full flex flex-row items-center justify-start gap-2">
          <img
            className="w-5 h-5 rounded-md max-w-full max-h-full cursor-pointer"
            alt=""
            src="aws-logo.svg"
          />
          <div className="w-fit font-medium flex items-center text-xsm leading-tight">
            {data.name}
          </div>
        </div>
        <div className="w-full flex flex-row items-start justify-end gap-1 text-xxs">
          <div className="flex flex-row items-center justify-start gap-1">
            {/* <div className="rounded-sm bg-gainsboro-100 flex flex-row items-center justify-start p-1">
              <FaLink size={14} />
            </div> */}
            <div className="rounded-md text-gainsboro-400 border-gainsboro-400 border-[0.8px] border-solid box-border flex flex-row items-center justify-center py-1 px-1">
              <div className="leading-[100%] font-medium text-xxs cursor-pointer">
                {data.tag}
              </div>
            </div>
            <div className="w-fell flex flex-row items-center justify-end text-right text-xs  gap-1">
              <div className="w-full flex-1 flex flex-row items-center justify-center">
                <ProgressBar
                  progress={data.progress}
                  height={"h-2"}
                  className={"w-[50px] font-semibold text-xxs"}
                />
              </div>
            </div>
            <div className="shadow-[1px_1px_1px_rgba(0,_0,_0,_0.15)] text-xxxs font-medium rounded-md bg-gainsboro-100 flex flex-row items-center justify-center px-1 py-0.5 w-[50px] cursor-pointer">
              23/122
            </div>
            <div className="shadow-[1px_1px_1px_rgba(0,_0,_0,_0.15)] text-xxxs font-medium rounded-md bg-gainsboro-100 flex flex-row items-center justify-center px-1 py-0.5 w-[30px] cursor-pointer">
              4h/w
            </div>
          </div>
          <div className="flex items-center justify-center gap-0">
            <IoAdd size={18} className="cursor-pointer" />
            <IoMdMore size={18} className="cursor-pointer" />
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
