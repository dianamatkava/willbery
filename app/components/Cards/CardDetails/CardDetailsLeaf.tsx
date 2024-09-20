import { IoReturnDownForward } from "react-icons/io5";
import ProgressBar from "../../ui-elements/ProgressBar";
import { IoAdd } from "react-icons/io5";
import { IoMdMore } from "react-icons/io";
import { useState, useEffect, useRef } from "react";
import useStore from "../../../stores/useStore";
import ContentEditable from "react-contenteditable";
import { CardLeafInterface } from "~/interfaces/CardInterfaces";

export function CardDetailsLeaf({
  leaf,
  nodeId,
  groupId,
  cardId,
}: {
  leaf: CardLeafInterface;
  nodeId: number;
  groupId: number;
  cardId: number;
}) {
  console.log(leaf);
  const [fields, setFields] = useState({
    spent: leaf.progress?.progressSpent,
    total: leaf.progress?.progressTotal,
    name: leaf.name,
    hours: leaf.hours,
    tag: leaf.tag,
  });
  const updateLeafName = useStore((state) => state.updateLeafName);

  const currentFieldValue = useRef(""); // Ref to keep track of the current field value

  useEffect(() => {
    setFields(leaf.name);
  }, [leaf]);

  // Handle change for ContentEditable
  const handleChange = (e) => {
    const value = e.target.value; // Extract innerText from ContentEditable
    currentFieldValue.current = value; // Update ref
    setFields(value);
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
    if (currentFieldValue.current && currentFieldValue.current !== leafName) {
      updateLeafName(
        cardId,
        groupId,
        nodeId,
        leaf.id,
        currentFieldValue.current
      );
    }
  };
  return (
    <div className="w-full w-fit flex flex-row items-center justify-between py-0 pl-2 pr-0 box-border gap-2">
      <div className="w-full w-fit flex flex-row items-center justify-start gap-1">
        <IoReturnDownForward size={18} />
        <div className="w-fit font-medium flex items-center text-xs">
          <ContentEditable
            html={leafName || ""}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
            className="editable-content editable-lined"
          />
        </div>
      </div>
      <div className="w-full flex flex-row items-start justify-end gap-1 text-xxs">
        <div className="flex flex-row items-center justify-start gap-1">
          {/* <div className="rounded-sm bg-gainsboro-100 flex flex-row items-center justify-start p-1">
              <FaLink size={14} />
            </div> */}
          <div className="text-xxxs rounded-md text-gray-500 border-gainsboro-400 border-[0.8px] border-solid box-border flex flex-row items-center justify-center py-1 px-1">
            <div className="leading-[100%] font-medium cursor-pointer">
              {leaf.tag}
            </div>
          </div>
          <div className="w-fell flex flex-row items-center justify-end text-right text-xs  gap-1">
            <div className="w-full flex-1 flex flex-row items-center justify-center">
              <ProgressBar
                progress={leaf.progress?.progressPercent}
                height={"h-2"}
                className={"w-[50px] font-semibold text-xxs"}
              />
            </div>
          </div>
          <div className="text-xxs gap-1 font-medium flex flex-row items-center px-1 py-0.5 justify-center w-[60px] cursor-pointer">
            {leaf.progress?.progressSpent} / {leaf.progress?.progressTotal}
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
  );
}
