import { useEffect, useState } from "react";
import useStore from "../../../stores/useStore";
import ContentEditable from "react-contenteditable";
import { CardNodeInterface } from "~/interfaces/CardInterfaces";
import AddItemComponent from "../../ui-elements/AddItemComponent";
import CardDetailsProgress from "./CardDetailsProgress";
import { v4 as uuidv4 } from "uuid";
import { AiOutlineLink } from "react-icons/ai";
import CardDetailsUntracked from "./CardDetailsUntracked";
import CreateTracking from "../../Tracking/CreateTracking";
import { useFetcher } from "@remix-run/react";

export function CardDetailsNode({
  children,
  node,
  cardId,
  groupId,
}: {
  children: React.ReactNode;
  node: CardNodeInterface;
  cardId: string;
  groupId: string;
}) {
  const fetcher = useFetcher();
  const [isEditingTracking, setIsEditingTracking] = useState(false);
  const updateNodeName = useStore((state) => state.updateNodeName);
  const createNodeTracking = useStore((state) => state.createNodeTracking);
  const updateNodeTag = useStore((state) => state.updateNodeTag);
  const tags = useStore((state) => state.cardTags);

  const [fields, setFields] = useState({
    name: node.name,
    tag: node?.tag?.name,
  });

  const onAddItem = async () => {
    const formData = new FormData();

    formData.append("name", "Untitled item");
    if (node.tag) {
      formData.append("tag", node.tag.name);
    }

    await fetcher.submit(formData, {
      method: "post",
      action: `/activities/${cardId}?create=leaf&groupId=${groupId}&nodeId=${node._id.toString()}`,
    });
  };

  const onAddTracking = (values: any) => {
    createNodeTracking(cardId, groupId, node._id.toString(), {
      id: uuidv4(),
      ...values,
    });
  };

  useEffect(() => {
    setFields({ name: node.name, tag: node.tag?.name });
  }, [node]);

  const handleChange = async (e, field: string) => {
    const value = e.target.value;
    setFields({ ...fields, [field]: value });
  };

  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      await e.target.blur();
    }
  };

  const handleBlur = async (e, field) => {
    if (e.target.innerText && e.target.innerText !== node[field]) {
      switch (field) {
        case "name":
          updateNodeName(
            cardId,
            groupId,
            node._id.toString(),
            e.target.innerText
          );
          break;
      }
    }

    const formData = new FormData();
    formData.append(field, e.target.innerText);

    await fetcher.submit(formData, {
      method: "put",
      action: `/activities/${cardId}?update=node&groupId=${groupId}&nodeId=${node._id.toString()}`,
    });
  };

  const onSelectTag = async (option: string) => {
    updateNodeTag(cardId, groupId, node._id.toString(), option);

    const formData = new FormData();
    formData.append("tag", option);

    await fetcher.submit(formData, {
      method: "put",
      action: `/activities/${cardId}?update=tag&groupId=${groupId}&nodeId=${node._id.toString()}`,
    });
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
                src={`/${node.link.icon}`}
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
            tag={node.tag.name}
            tags={tags.map((tag) => tag.name)}
            progress={node.progress}
            onSelect={onSelectTag}
            className="w-full"
            tagStyle="text-xxxs font-medium text-black border-black border-[1px]  border-solid box-border py-1 px-1.5"
          />
        ) : (
          <CardDetailsUntracked
            data={node}
            tags={tags.map((tag) => tag.name)}
            onSelectTag={onSelectTag}
            onEditTracking={() => setIsEditingTracking(!isEditingTracking)}
            tagStyle="text-xxxs font-medium text-black border-black border-[1px] border-solid box-border py-1 px-1.5"
          />
        )}
      </div>
      {isEditingTracking && <CreateTracking onSubmit={onAddTracking} />}
      {children}
      <AddItemComponent
        onClick={onAddItem}
        displayText={`Add Item`}
        className="pl-2"
      />
    </div>
  );
}
