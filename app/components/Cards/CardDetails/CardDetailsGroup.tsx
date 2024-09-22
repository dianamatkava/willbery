import { IoMdMore } from "react-icons/io";
import ProgressBar from "../../ui-elements/ProgressBar";
import Accordion from "../../ui-elements/Accordion";
import { useState } from "react";
import ContentEditable from "react-contenteditable";
import AddItemComponent from "../../ui-elements/AddItemComponent";

import useStore from "../../../stores/useStore";
import { useRef, useEffect } from "react";

export function CardDetailsGroup({
  children,
  group,
  cardId,
}: {
  children: React.ReactNode;
  group: object;
  cardId: number;
}) {
  const [expanded, setExpanded] = useState(true);
  const [groupName, setGroupName] = useState(group.name);
  const updateGroupName = useStore((state) => state.updateGroupName);

  const currentFieldValue = useRef(""); // Ref to keep track of the current field value

  useEffect(() => {
    setGroupName(group.name);
  }, [group]);

  // Handle change for ContentEditable
  const handleChange = (e) => {
    const value = e.target.value; // Extract innerText from ContentEditable
    currentFieldValue.current = value; // Update ref
    setGroupName(value);
  };

  // Handle Enter key to unfocus
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      e.target.blur();
    }
  };

  // Handle blur event to save changes
  const handleBlur = () => {
    if (currentFieldValue.current && currentFieldValue.current !== groupName) {
      updateGroupName(cardId, group.id, currentFieldValue.current);
    }
  };

  return (
    <div className="flex w-full flex-col items-start justify-start">
      <div className="w-full flex flex-col items-start justify-start gap-4">
        <div className="w-full flex flex-row items-center justify-between text-darkgray-200">
          <Accordion expanded={expanded} setExpanded={setExpanded} />
          <div className="font-semibold text-[#777777] text-xxxs cursor-pointer">
            <h1 className="font-semibold whitespace-pre-wrap text-xsm">
              <ContentEditable
                html={groupName || ""}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                onBlur={handleBlur}
                className="editable-content"
              />
            </h1>
          </div>
          <div className="w-full flex flex-row items-center justify-end gap-1">
            <div className="w-full flex-1 flex flex-row items-center justify-end gap-1">
              <ProgressBar
                progress={group.progress}
                height={"h-2"}
                className={"w-[60px] font-semibold text-xxs"}
              />
            </div>
            <div className="flex items-center justify-center gap-0 text-gray-300 hover:text-gray-500">
              <IoMdMore size={18} className="cursor-pointer" />
            </div>
          </div>
        </div>
        {expanded && (
          <>
            {children}
            <AddItemComponent
              onClick={() => {}}
              displayText={`Add Item for ${groupName}`}
              className="pl-0"
            />
          </>
        )}
      </div>
    </div>
  );
}
