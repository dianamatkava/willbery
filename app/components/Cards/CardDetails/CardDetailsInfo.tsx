import {LuPlus, LuSmilePlus, LuTags} from "react-icons/lu";
import {useEffect, useState} from "react";
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
    tag: cardDetails.tag || "",
  });

  useEffect(() => {
    setFields({
      name: cardDetails.name || "",
      description: cardDetails.description || "",
      tag: cardDetails.tag || "",
    });
  }, [cardDetails]);

  const handleChange = (e, field) => {
    const value = e.target.value;
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
  const handleBlur = (e, field) => {
    if (e.target.innerText && e.target.innerText !== cardDetails[field]) {
      switch (field) {
        case "name":
          updateCardName(cardDetails.id, e.target.innerText);
          break;
        case "description":
          updateCardDescription(cardDetails.id, e.target.innerText);
          break;
      }
    }
  };

  return (
    <div className="flex flex-col items-start justify-start gap-6 max-w-[455px]">
      <div className="h-full flex flex-row items-center justify-start box-border gap-5">
        {cardDetails.image ? (
          <div className="w-[100px] h-full rounded-[100%] flex flex-row items-center justify-center shadow-[1px_1px_1px_rgba(0,_0,_0,_0.05)]">
            <img
              src={cardDetails.image}
              alt="icon"
              className="w-full h-full object-cover rounded-[100%]"
            />
          </div>
        ) : (
          <div className="w-[100px] h-full rounded-[100%] bg-gainsboro-100 hover:bg-grey-700 flex flex-row items-center justify-center">
            <LuPlus
              size={34}
              className="cursor-pointer text-grey-100 group-hover:text-grey-300"
              color="#808080"
            />
          </div>
        )}

        <div className="flex flex-col items-start justify-center gap-1 w-full">
          <div className="flex items-center gap-1 h-[42px]">
            <h2 className="text-xlg w-full min-w-[200px] font-semibold text-gainsboro-500 leading-[1]">
              <ContentEditable
                html={fields.name || ""}
                onChange={(e) => handleChange(e, "name")}
                onKeyDown={handleKeyDown}
                onBlur={(e) => handleBlur(e, "name")}
                className="editable-content"
              />
            </h2>
          </div>

          <div className="flex flex-row items-center justify-center gap-1 text-sm">
            {cardDetails.icon ? (
              <p className="text-gainsboro-500">{cardDetails.icon}</p>
            ) : (
              <div className="w-[26px] rounded-md bg-gainsboro-100 h-6 flex flex-row items-center justify-center">
                <LuSmilePlus size={18} className="cursor-pointer" />
              </div>
            )}
            {fields.tag ? (
              <div className="rounded-lg h-6 flex flex-row items-center justify-center px-2 box-border gap-1 cursor-pointer bg-black">
                <div className="leading-[100%] text-white text-xs">
                  {fields.tag}
                </div>
              </div>
            ) : (
              <div className="w-[26px] rounded-md bg-gainsboro-100 h-6 flex flex-row items-center justify-center">
                <LuTags size={18} className="cursor-pointer" />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="w-full h-fit text-sm cursor-pointer text-grey-800">
        <ContentEditable
          html={fields.description || ""}
          onChange={(e) => handleChange(e, "description")}
          onBlur={(e) => handleBlur(e, "description")}
          className="editable-content editable-text-area"
        />
      </div>
    </div>
  );
}
