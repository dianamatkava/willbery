import { FunctionComponent } from "react";
import NumberInput from "./Inputs/NumberInput";
import DatePickerInput from "./Inputs/DatePickerInput";
import DurationInput from "./Inputs/DurationInput";
import FrequencyInput from "./Inputs/MultipleInput";

const Tracking: FunctionComponent = () => {
  return (
    <div className="w-full rounded-md flex flex-col items-center justify-center py-0 px-2 box-border text-xs text-grey-600">
      <div className="w-full rounded-md bg-white border-gainsboro border-[1px] border-solid">
        <div className="max-w-md m-auto self-stretch flex flex-col items-start justify-start p-3 gap-2">
          <div className="self-stretch flex flex-col items-start justify-center pt-0.5 px-0 pb-2.5 text-gray-500">
            <div className="self-stretch font-medium hover:text-gray-600">
              Click to add description for the item or item settings
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-2 gap-5 text-xxs">
            <div className="self-stretch flex flex-row items-start justify-between">
              <NumberInput label="Total Units" />
              <NumberInput label="Completed Units" />
              <DatePickerInput label="Start Date" />
            </div>
            <div className="w-fit h-[11px] flex flex-row items-center justify-start gap-2">
              <div className="leading-1 font-semibold w-full">Track Time</div>
              <div className="relative flex flex-col items-start justify-center py-0 pl-0 pr-4 gap-2.5">
                <div className="w-[21px] rounded-lg bg-gray-200 border-gray-300 border-[1px] border-solid box-border h-[12px] z-[0]" />
                <div className="w-[8px] absolute !m-[0] top-[2px] left-[2px] rounded-[50%] bg-gray-400 border-gray-500 border-[0.7px] border-solid box-border h-[8px] z-[1]" />
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-between">
              <DurationInput label="Duration" placeholder="2" />
              <FrequencyInput label="Frequency" />
              <DurationInput label="Total Duration" initialEmpty={true} />
            </div>
          </div>
          <div className="self-stretch text-xxs text-gray-500">
            <div className="leading-1.5 inline-block">
              <span className="font-medium">{`Starting from 11 Sep 2024 you commit to work on X 1 time a week for 3 h. Approximate completion date is `}</span>
              <span className="text-dodgerblue">
                <span className="font-semibold">3 May 2025</span>
              </span>
              <span className="font-medium">
                <span className="text-dodgerblue">.</span>
                <span>{` You can modify time commitment in future `}</span>
              </span>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-end justify-start text-xs">
            <div className="flex flex-row items-start justify-start gap-[5px]">
              <div className="w-20 rounded-md bg-grey-100 border-gainsboro border-[1px] border-solid box-border h-5 overflow-hidden flex flex-row items-center justify-center py-space-300 px-space-300 group hover:bg-red-100 hover:border-red-200 hover:text-red-200">
                <div className="leading-1 font-semibold w-full text-center text-gray-600 group-hover:text-red-500">
                  Discard
                </div>
              </div>
              <div className="w-20 rounded-md text-white bg-black border-slategray border-[1px] border-solid box-border h-5 overflow-hidden shrink-0 flex flex-row items-center justify-center py-space-300 px-space-300 hover:bg-blue-600">
                <div className="leading-1 font-semibold w-full text-center group-hover:text-white">
                  Save
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracking;
