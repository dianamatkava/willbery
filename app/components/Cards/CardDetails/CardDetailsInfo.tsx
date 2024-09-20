import { LuPlus } from "react-icons/lu";
import { LuSmilePlus } from "react-icons/lu";
import { LuTags } from "react-icons/lu";
import { useState } from "react";

import ContentEditable from "react-contenteditable";

export function CardDetailsInfo({ cardDetails }: { cardDetails: object }) {
  const [fields, setFields] = useState({
    name: cardDetails.name,
    description: cardDetails.description,
  });

  const handleChange = (evt, field) => {
    setFields({
      ...fields,
      [field]: evt.target.value,
    });
  };

  return (
    <div className="flex flex-col items-start justify-start gap-6 max-w-[455px]">
      <div className="h-full flex flex-row items-center justify-start box-border gap-5">
        <div className="w-[200px] h-full rounded-md bg-gainsboro-100 hover:bg-grey-700 flex flex-row items-center justify-center">
          <LuPlus
            size={34}
            className="cursor-pointer text-grey-100 group-hover:text-grey-300"
            color="#808080"
          />
        </div>

        <div className="flex flex-col items-start justify-center gap-1 w-full">
          <div className="flex items-center gap-1 h-[42px]">
            <h2
              id="card-name"
              className="text-xlg w-full font-semibold text-gainsboro-500 leading-[1]"
            >
              <ContentEditable
                html={fields.name}
                onChange={(evt) => handleChange(evt, "name")}
                className="editable-content"
              />
            </h2>
          </div>

          <div className="flex flex-row items-center justify-center gap-1 text-sm">
            <div className="w-[26px] rounded-md bg-gainsboro-100 h-6 flex flex-row items-center justify-center">
              <LuSmilePlus size={18} className="cursor-pointer" />
            </div>
            <div className="w-[26px] rounded-md bg-gainsboro-100 h-6 flex flex-row items-center justify-center">
              <LuTags size={18} className="cursor-pointer" />
            </div>
            <div className="rounded-lg h-6 flex flex-row items-center justify-center px-2 box-border gap-1 cursor-pointer bg-black">
              <div className="leading-[100%] text-white text-xs">
                {cardDetails.tag}
              </div>
            </div>
          </div>
        </div>
      </div>
      {cardDetails.description ? (
        <div className="w-full h-fit text-sm cursor-pointer text-grey-800">
          {cardDetails.description}
        </div>
      ) : (
        <div className="w-full h-fit text-sm text-darkgray-100">
          Click here to add description
        </div>
      )}
    </div>
  );
}
