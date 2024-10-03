import { IoReturnDownForward } from "react-icons/io5";
import { useState, useEffect } from "react";
import useStore from "../../../stores/useStore";
import ContentEditable from "react-contenteditable";
import { CardLeafInterface } from "~/interfaces/CardInterfaces";
import CardDetailsProgress from "./CardDetailsProgress";
import CardDetailsUntracked from "./CardDetailsUntracked";
import CreateTracking from "../../Tracking/CreateTracking";
import { v4 as uuidv4 } from "uuid";
import { useFetcher } from "@remix-run/react";

export function CardDetailsLeaf({
  leaf,
  nodeId,
  groupId,
  cardId,
}: {
  leaf: CardLeafInterface;
  nodeId: string;
  groupId: string;
  cardId: string;
}) {
  const [fields, setFields] = useState({
    name: leaf.name,
    spent: leaf.progress?.progressSpent,
    total: leaf.progress?.progressTotal,
    duration: leaf.progress?.duration,
  });

  const fetcher = useFetcher();
  const [isEditingTracking, setIsEditingTracking] = useState(false);
  const updateLeafName = useStore((state) => state.updateLeafName);
  const updateLeafTag = useStore((state) => state.updateLeafTag);
  const createLeafTracking = useStore((state) => state.createLeafTracking);
  const tags = useStore((state) => state.cardTags);

  const onAddTracking = (values: any) => {
    createLeafTracking(cardId, groupId, nodeId, leaf._id.toString(), {
      _id: uuidv4(),
      ...values,
    });
  };

  useEffect(() => {
    setFields({
      name: leaf.name,
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

  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      await e.target.blur();
    }
  };

  const handleBlur = async (e, field) => {
    if (e.target.innerText && e.target.innerText !== leaf[field]) {
      switch (field) {
        case "name":
          updateLeafName(
            cardId,
            groupId,
            nodeId,
            leaf._id.toString(),
            e.target.innerText
          );
          break;
      }
    }

    const formData = new FormData();
    formData.append(field, e.target.innerText);

    await fetcher.submit(formData, {
      method: "put",
      action: `/activities/${cardId}?update=leaf&groupId=${groupId}&nodeId=${nodeId}&leafId=${leaf._id.toString()}`,
    });
  };

  const onSelectTag = async (option: string) => {
    updateLeafTag(cardId, groupId, nodeId, leaf._id.toString(), option);

    const formData = new FormData();
    formData.append("tag", option);

    await fetcher.submit(formData, {
      method: "put",
      action: `/activities/${cardId}?update=tag&groupId=${groupId}&nodeId=${nodeId}&leafId=${leaf._id.toString()}`,
    });
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
            tag={leaf.tag.name}
            tags={tags.map((tag) => tag.name)}
            onSelect={onSelectTag}
            progress={leaf.progress}
            className="pl-0 mt-[-10px]"
          />
        ) : (
          <CardDetailsUntracked
            data={leaf}
            tags={tags.map((tag) => tag.name)}
            onSelectTag={onSelectTag}
            onEditTracking={() => setIsEditingTracking(!isEditingTracking)}
            tagStyle="text-xxxs text-gray-500 border-gainsboro-400 border-[0.8px] border-solid box-border py-1 px-1"
          />
        )}
      </div>
      {isEditingTracking && <CreateTracking onSubmit={onAddTracking} />}
    </>
  );
}
