import { IoReturnDownForward } from "react-icons/io5";
import { useState, useEffect } from "react";
import useStore from "../../../stores/useStore";
import ContentEditable from "react-contenteditable";
import { CardLeafInterface } from "~/interfaces/CardInterfaces";
import CardDetailsLeafProgress from "./CardDetailsLeafProgress";

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
  const [fields, setFields] = useState({
    name: leaf.name,
    tag: leaf.tag,
    spent: leaf.progress?.progressSpent,
    total: leaf.progress?.progressTotal,
    duration: leaf.progress?.duration,
  });
  const updateLeafName = useStore((state) => state.updateLeafName);

  useEffect(() => {
    setFields({
      name: leaf.name,
      tag: leaf.tag,
      spent: leaf.progress?.progressSpent,
      total: leaf.progress?.progressTotal,
      duration: leaf.progress?.duration,
    });
  }, [leaf]);

  const handleChange = (e, field) => {
    const value = e.target.value;
    console.log("handleChange", value);
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
    if (e.target.innerText && e.target.innerText !== leaf[field]) {
      switch (field) {
        case "name":
          updateLeafName(cardId, nodeId, groupId, leaf.id, e.target.innerText);
          break;
      }
    }
  };
  return (
    <div className="w-full w-fit flex flex-row items-center justify-between py-0 pl-2 pr-0 box-border gap-2">
      <div className="w-full w-fit flex flex-row items-center justify-start gap-1">
        <IoReturnDownForward size={18} className="text-gray-400" />
        <span className="w-fit font-medium flex items-center text-xs">
          <ContentEditable
            html={fields.name || ""}
            onChange={(e) => handleChange(e, "name")}
            onKeyDown={handleKeyDown}
            onBlur={(e) => handleBlur(e, "name")}
            className="editable-content editable-lined"
          />
        </span>
      </div>
      <CardDetailsLeafProgress
        tag={leaf.tag}
        progress={leaf.progress}
        className="pl-0 mt-[-10px]"
      />
    </div>
  );
}
