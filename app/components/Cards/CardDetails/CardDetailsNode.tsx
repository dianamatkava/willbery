import { useEffect, useState } from "react";
import useStore from "../../../stores/useStore";
import ContentEditable from "react-contenteditable";
import { CardNodeInterface } from "~/interfaces/CardInterfaces";
import AddItemComponent from "../../ui-elements/AddItemComponent";
import CardDetailsProgress from "./CardDetailsProgress";
import { v4 as uuidv4 } from "uuid";
import { AiOutlineLink } from "react-icons/ai";
import CardDetailsUntracked from "./CardDetailsUntracked";

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
  const updateNodeName = useStore((state) => state.updateNodeName);
  const updateNodeTag = useStore((state) => state.updateNodeTag);
  const updateTags = useStore((state) => state.updateTags);
  const createLeaf = useStore((state) => state.createLeaf);
  const tags = useStore((state) => state.tags);

  const [fields, setFields] = useState({
    name: node.name,
    tag: node.tag,
  });

  const onAddItem = () => {
    createLeaf(cardId, groupId, node.id, {
      id: uuidv4(),
      name: "Untitled item",
      tag: node.tag,
    });
  };

  useEffect(() => {
    setFields({ name: node.name, tag: node.tag });
  }, [node]);

  const handleChange = (e, field: string) => {
    const value = e.target.value;
    setFields({ ...fields, [field]: value });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      e.target.blur();
    }
  };

  const handleBlur = (e, field) => {
    if (e.target.innerText && e.target.innerText !== node[field]) {
      switch (field) {
        case "name":
          updateNodeName(cardId, groupId, node.id, e.target.innerText);
          break;
      }
    }
  };

  const onSelectTag = (option: string) => {
    updateNodeTag(cardId, groupId, node.id, option);
    updateTags(option);
  };

  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-3 text-sm">
      <div className="w-full flex frex-wrap flex-row items-center justify-between box-border text-sm">
        <div className="w-full max-w-[180px] flex flex-row items-center justify-start gap-2">
          {node.link ? (
            <a href={node.link.url}>
              <img
                className="w-5 h-5 rounded-md max-w-full max-h-full cursor-pointer"
                alt={node.name}
                src={node.link.icon}
              />
            </a>
          ) : (
            <div className="bg-gainsboro-100 w-4 h-4 flex items-center justify-center rounded-md shadow-[1px_1px_1px_rgba(0,_0,_0,_0.15)]">
              <AiOutlineLink size={12} />
            </div>
          )}
          <div className="w-fit font-medium flex items-center text-xsm leading-tight">
            <ContentEditable
              html={fields.name || ""}
              onChange={(e) => handleChange(e, "name")}
              onKeyDown={handleKeyDown}
              onBlur={(e) => handleBlur(e, "name")}
              className="editable-content editable-lined"
            />
          </div>
        </div>
        {node.progress ? (
          <CardDetailsProgress
            tag={node.tag}
            tags={tags}
            progress={node.progress}
            onSelect={onSelectTag}
            className="w-full"
            tagStyle="text-xxxs font-medium text-black border-black border-[1px]  border-solid box-border py-1 px-1.5"
          />
        ) : (
          <CardDetailsUntracked
            data={node}
            tags={tags}
            onSelectTag={onSelectTag}
            tagStyle="text-xxxs font-medium text-black border-black border-[1px] border-solid box-border py-1 px-1.5"
          />
        )}
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
