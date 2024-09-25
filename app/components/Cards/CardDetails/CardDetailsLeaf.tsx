import { IoReturnDownForward } from "react-icons/io5";
import { useState, useEffect } from "react";
import useStore from "../../../stores/useStore";
import ContentEditable from "react-contenteditable";
import { CardLeafInterface } from "~/interfaces/CardInterfaces";
import CardDetailsProgress from "./CardDetailsProgress";
import CardDetailsUntracked from "./CardDetailsUntracked";
import Tracking from "../../Tracking/Tracking";

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
  const [isEditingTracking, setIsEditingTracking] = useState(false);
  const updateLeafName = useStore((state) => state.updateLeafName);
  const updateLeafTag = useStore((state) => state.updateLeafTag);
  const updateTags = useStore((state) => state.updateTags);
  const tags = useStore((state) => state.tags);

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
    setFields((prevFields) => ({
      ...prevFields,
      [field]: value,
    }));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      e.target.blur();
    }
  };

  const handleBlur = (e, field) => {
    if (e.target.innerText && e.target.innerText !== leaf[field]) {
      switch (field) {
        case "name":
          updateLeafName(cardId, groupId, nodeId, leaf.id, e.target.innerText);
          break;
      }
    }
  };

  const onSelectTag = (option: string) => {
    updateLeafTag(cardId, groupId, nodeId, leaf.id, option);
    updateTags(option);
  };

  return (
    <>
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
        {leaf.progress ? (
          <CardDetailsProgress
            tag={leaf.tag}
            tags={tags}
            onSelect={onSelectTag}
            progress={leaf.progress}
            className="pl-0 mt-[-10px]"
          />
        ) : (
          <CardDetailsUntracked
            data={leaf}
            tags={tags}
            onSelectTag={onSelectTag}
            onEditTracking={() => setIsEditingTracking(!isEditingTracking)}
            tagStyle="text-xxxs text-gray-500 border-gainsboro-400 border-[0.8px] border-solid box-border py-1 px-1"
          />
        )}
      </div>
      {isEditingTracking && <Tracking />}
    </>
  );
}
