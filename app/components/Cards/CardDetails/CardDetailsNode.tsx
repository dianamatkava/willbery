import { useState, useEffect, useRef } from "react";
import useStore from "../../../stores/useStore";
import ContentEditable from "react-contenteditable";
import { CardNodeInterface } from "~/interfaces/CardInterfaces";
import AddItemComponent from "../../ui-elements/AddItemComponent";
import CardDetailsLeafProgress from "./CardDetailsProgress";
import { v4 as uuidv4 } from "uuid";

export function CardDetailsNode({
  children,
  node,
  cardId,
  groupId,
}: {
  children: React.ReactNode;
  node: CardNodeInterface;
  cardId: number;
  groupId: number;
}) {
  const [nodeName, setGroupName] = useState(node.name);
  const updateNodeName = useStore((state) => state.updateNodeName);
  const createLeaf = useStore((state) => state.createLeaf);

  const currentFieldValue = useRef("");

  const onAddItem = () => {
    console.log("onAddItem");
    createLeaf(cardId, groupId, node.id, {
      id: uuidv4(),
      name: "Untitled item",
      tag: node.tag,
    });
  };

  useEffect(() => {
    setGroupName(node.name);
  }, [node]);

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
    if (currentFieldValue.current && currentFieldValue.current !== nodeName) {
      updateNodeName(cardId, groupId, node.id, currentFieldValue.current);
    }
  };
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-3 text-sm">
      <div className="w-full flex frex-wrap flex-row items-center justify-between box-border text-sm">
        <div className="w-full max-w-[180px] flex flex-row items-center justify-start gap-2">
          <img
            className="w-5 h-5 rounded-md max-w-full max-h-full cursor-pointer"
            alt=""
            src="aws-logo.svg"
          />
          <div className="w-fit font-medium flex items-center text-xsm leading-tight">
            <ContentEditable
              html={nodeName || ""}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              onBlur={handleBlur}
              className="editable-content editable-lined"
            />
          </div>
        </div>
        <CardDetailsLeafProgress
          tag={node.tag}
          progress={node.progress}
          className="w-full"
          tagStyle="text-xxxs font-medium text-black border-black border-[1px] border-solid box-border py-1 px-1.5"
        />
      </div>
      {children}
      <AddItemComponent
        onClick={onAddItem}
        displayText={`Add Item`}
        className="pl-2"
      />
    </div>
  );
}
