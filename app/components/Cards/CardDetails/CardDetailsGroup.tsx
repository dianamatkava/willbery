import { IoMdMore } from "react-icons/io";
import ProgressBar from "../../ui-elements/ProgressBar";
import Accordion from "../../ui-elements/Accordion";
import { useState } from "react";
import ContentEditable from "react-contenteditable";
import AddItemComponent from "../../ui-elements/AddItemComponent";
import { v4 as uuidv4 } from "uuid";
import useStore from "../../../stores/useStore";
import { useRef, useEffect } from "react";
import { CardGroupInterface } from "~/interfaces/CardInterfaces";

export function CardDetailsGroup({
  children,
  group,
  cardId,
}: {
  children: React.ReactNode;
  group: CardGroupInterface;
  cardId: number;
}) {
  const [expanded, setExpanded] = useState(true);
  const [groupName, setGroupName] = useState(group.name);
  const updateGroupName = useStore((state) => state.updateGroupName);
  const createNode = useStore((state) => state.createNode);

  const currentFieldValue = useRef("");

  useEffect(() => {
    setGroupName(group.name);
  }, [group]);

  const handleChange = (e) => {
    const value = e.target.value;
    currentFieldValue.current = value;
    setGroupName(value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      e.target.blur();
    }
  };

  const handleBlur = () => {
    if (currentFieldValue.current && currentFieldValue.current !== groupName) {
      updateGroupName(cardId, group.id, currentFieldValue.current);
    }
  };

  const onAddItem = () => {
    createNode(cardId, group.id, {
      id: uuidv4(),
      name: "Untitled Item",
    });
  };

  return (
    <div className="flex w-full flex-col items-start justify-start">
      <div className="w-full flex flex-col items-start justify-start gap-4">
        <div className="w-full flex flex-row items-center justify-between text-darkgray-200">
          <div className="w-full flex flex-row items-center justify-start gap-1">
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
          <div className="w-full flex flex-col items-start justify-start gap-4">
            {children}
            <AddItemComponent
              onClick={onAddItem}
              displayText={`Add Item for ${groupName}`}
              className="pl-0"
            />
          </div>
        )}
      </div>
    </div>
  );
}
