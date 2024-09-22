import { useState } from "react";
import { PiDotsSixVertical } from "react-icons/pi";

export default function SelectInput() {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <>
      {!isSelected ? (
        <div
          role="button"
          tabIndex={0}
          className={`rounded-md flex flex-row items-center justify-center`}
          onClick={() => setIsSelected(!isSelected)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setIsSelected(!isSelected);
            }
          }}
        >
          <div className="leading-[100%] font-medium cursor-pointer">Name</div>
        </div>
      ) : (
        <div
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setIsSelected(!isSelected);
            }
          }}
          onBlur={() => setIsSelected(false)}
          className={`absolute right-11 top-[-3px] w-full rounded-md z-10 
            shadow-[1px_2px_4px_rgba(0,_0,_0,_0.1)] bg-white 
            border-gainsboro border-[0.8px] border-solid box-border 
            flex flex-col items-start justify-start gap-1.5 text-left text-xsxs ${
              isSelected ? "flex flex-col" : "hidden"
            }`}
        >
          <SelectHeader />
          <SelectComponent />
        </div>
      )}
    </>
  );
}

export function SelectComponent() {
  return (
    <div className="flex flex-col items-start justify-start py-1 pb-1 px-2 gap-1.5 text-xxs text-gray-600">
      <div className="leading-[100%] font-medium">
        Select an option or create one
      </div>
      <div className="flex flex-col items-start justify-start gap-0 text-xxs">
        <div className="flex flex-row items-center justify-start py-1 px-0 box-border gap-2 font-medium">
          <PiDotsSixVertical size={12} />
          <div className="flex flex-col items-start justify-start">
            <div className="rounded bg-gray-200 border-gray-300 border-[0.5px] border-solid box-border h-3.5 flex flex-row items-center justify-center py-1 px-1.5">
              <div className="relative leading-[100%] font-medium">Course</div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start py-1 px-0 box-border gap-2 font-medium">
          <PiDotsSixVertical size={12} />
          <div className="flex flex-col items-start justify-start">
            <div className="rounded bg-gray-200 border-gray-300 border-[0.5px] border-solid box-border h-3.5 flex flex-row items-center justify-center py-1 px-1.5">
              <div className="relative leading-[100%] font-medium">Books</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SelectHeader() {
  return (
    <div className="self-stretch rounded-md rounded-b-none bg-gray-100 border-gray-300 border-b-[0.5px] border-solid box-border flex flex-row items-center justify-start py-1 px-2 gap-1">
      <div className="rounded bg-white border-darkslategray border-[1px] border-solid box-border h-[17px] flex flex-row items-center justify-center py-1 px-1.5 gap-1">
        <div className="leading-[100%] font-medium">Course</div>
        <img className="" alt="" src="close.svg" />
      </div>
      <div className="leading-[100%] font-medium text-xxs text-black">
        <span>
          <span>|</span>
        </span>
        <span className="text-xxs">
          <span>{` `}</span>
          <span>Sele</span>
        </span>
      </div>
    </div>
  );
}
