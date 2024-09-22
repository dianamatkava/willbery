import { useState, useEffect, useRef } from "react";
import useStore from "../../../stores/useStore";
import ContentEditable from "react-contenteditable";
import { CardNodeInterface } from "~/interfaces/CardInterfaces";
import AddItemComponent from "../../ui-elements/AddItemComponent";
import CardDetailsLeafProgress from "./CardDetailsLeafProgress";
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

  const currentFieldValue = useRef(""); // Ref to keep track of the current field value

  useEffect(() => {
    setGroupName(node.name);
  }, [node]);

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
        />
      </div>
      {children}
      <AddItemComponent
        onClick={() => {}}
        displayText={`Add Item`}
        className="pl-2"
      />
    </div>
  );
}
