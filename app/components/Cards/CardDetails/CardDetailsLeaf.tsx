import { IoReturnDownForward } from "react-icons/io5";
import { useState, useEffect } from "react";
import useStore from "../../../stores/useStore";
import ContentEditable from "react-contenteditable";
import { CardLeafInterface } from "~/interfaces/CardInterfaces";
import CardDetailsLeafProgress from "./CardDetailsProgress";
import { IoMdMore } from "react-icons/io";
import { CgTrack } from "react-icons/cg";
import { IoIosPlay } from "react-icons/io";

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
      {leaf.progress ? (
        <CardDetailsLeafProgress
          tag={leaf.tag}
          progress={leaf.progress}
          className="pl-0 mt-[-10px]"
        />
      ) : (
        <div className="w-full flex flex-row items-center justify-end gap-1 text-xxs">
          <div className="flex flex-row items-center justify-start gap-2">
            <div className="flex flex-row items-center justify-start gap-2">
              <div className="text-xxxs rounded-md text-gray-500 border-gainsboro-400 border-[0.8px] border-solid box-border flex flex-row items-center justify-center py-1 px-1">
                <div className="leading-[100%] font-medium cursor-pointer">
                  {leaf.tag}
                </div>
              </div>
            </div>
            <div className="rounded-md bg-black flex flex-row items-center justify-center text-xxs px-1 py-[0.5px] text-white">
              <div className="leading-[100%] font-medium">Track</div>
              <IoIosPlay size={14} />
            </div>
          </div>
          <div className="flex items-center justify-center gap-0 text-gray-300 hover:text-gray-500">
            <IoMdMore size={18} className="cursor-pointer" />
          </div>
        </div>
      )}
    </div>
  );
}
