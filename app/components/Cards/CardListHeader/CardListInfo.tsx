import {HiOutlineRocketLaunch} from "react-icons/hi2";
import {FaChevronRight} from "react-icons/fa6";
import {LuLayers} from "react-icons/lu";

export default function CardListInfo() {
  return (
    <div className="flex flex-row items-center justify-start gap-1">
      <div className="flex flex-row items-center justify-start gap-1 text-dimgray-100">
        <div className="flex p-1 items-center bg-gray-200 rounded-md hover:text-black">
          <HiOutlineRocketLaunch size={20} />
        </div>
        <div className="font-regular text-sm text-gray-600 hover:text-black">
          Willbery Learnings
        </div>
      </div>

      <div className="flex flex-row flex-nowrap items-center justify-start hidden md:flex md:flex-row">
        <div className="flex items-center justify-center pt-[0.7px] text-gray-300">
          <FaChevronRight size={10} />
        </div>
        <div className="flex flex-row items-center justify-start gap-1 mr-1">
          <div className="flex items-center justify-center p-1 text-color-black rounded-md hover:text-gray-600 cursor-pointer">
            <LuLayers size={16} />
          </div>

          <div className="tracking-1 leading-1 text-sm text-gray-600 font-medium">
            Cards
          </div>
          <div className="rounded-md bg-border-brand-default h-1 flex flex-row items-center justify-center p-2 box-border text-left text-1 text-text-brand-on-brand">
            <div className="leading-[100%] text-xs font-medium cursor-pointer">
              41
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center pt-[0.7px] text-gray-300">
          <FaChevronRight size={10} />
        </div>
        <div className="flex flex-row items-center justify-start gap-2">
          <div className="flex flex-row items-center justify-start gap-1 text-1">
            <div className="tracking-1 leading-1 font-medium text-xs text-gray-600">
              Active
            </div>
            <div className="rounded-md bg-dimgray-200 h-1 flex flex-row items-center justify-center py-2 px-2 box-border text-left text-sm text-text-brand-on-brand">
              <div className="leading-[100%] text-xxs font-medium cursor-pointer">
                22
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-1 text-1">
            <div className="tracking-1 leading-1 text-xs font-medium text-gray-600">
              Pending
            </div>
            <div className="rounded-md bg-dimgray-200 h-1 flex flex-row items-center justify-center py-2 px-2 box-border text-left text-sm text-text-brand-on-brand">
              <div className="leading-[100%] text-xxs font-medium cursor-pointer">
                4
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
