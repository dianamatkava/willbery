import { LuPlus } from "react-icons/lu";
import { LuSmilePlus } from "react-icons/lu";
import { LuTags } from "react-icons/lu";
import { useState, useEffect, useRef } from "react";
import useStore from "../../../stores/useStore";
import ContentEditable from "react-contenteditable";

export function CardDetailsInfo({ cardDetails }) {
  const updateCardName = useStore((state) => state.updateCardName);
  const updateCardDescription = useStore(
    (state) => state.updateCardDescription
  );

  const [fields, setFields] = useState({
    name: cardDetails.name || "",
    description: cardDetails.description || "",
  });

  const currentFieldValue = useRef(""); // Ref to keep track of the current field value

  useEffect(() => {
    setFields({
      name: cardDetails.name || "",
      description: cardDetails.description || "",
    });
  }, [cardDetails]);

  // Handle change for ContentEditable
  const handleChange = (e, field) => {
    const value = e.target.value; // Extract innerText from ContentEditable
    currentFieldValue.current = value; // Update ref
    setFields((prevFields) => ({
      ...prevFields,
      [field]: value,
    }));
  };

  // Handle Enter key to unfocus
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      e.target.blur();
    }
  };

  // Handle blur event to save changes
  const handleBlur = (field) => {
    if (
      currentFieldValue.current &&
      currentFieldValue.current !== cardDetails[field]
    ) {
      switch (field) {
        case "name":
          updateCardName(cardDetails.id, currentFieldValue.current);
          break;
        case "description":
          updateCardDescription(cardDetails.id, currentFieldValue.current);
          break;
      }
    }
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
            <h2 className="text-xlg w-full min-w-[200px] font-semibold text-gainsboro-500 leading-[1]">
              <ContentEditable
                html={fields.name || ""}
                onChange={(e) => handleChange(e, "name")}
                onKeyDown={handleKeyDown}
                onBlur={() => handleBlur("name")}
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
      <div className="w-full h-fit text-sm cursor-pointer text-grey-800">
        <ContentEditable
          html={fields.description || ""}
          onChange={(e) => handleChange(e, "description")}
          onBlur={() => handleBlur("description")}
          className="editable-content editable-text-area"
        />
      </div>
    </div>
  );
}
