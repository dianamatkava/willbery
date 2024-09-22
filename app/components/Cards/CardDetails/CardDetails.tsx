import { FunctionComponent } from "react";
import { CardDetailsInfo } from "./CardDetailsInfo";
import { CardDetailsTabs } from "./CardDetailsTabs";
import { CardDetailsGroup } from "./CardDetailsGroup";
import { CardDetailsNode } from "./CardDetailsNode";
import { CardDetailsLeaf } from "./CardDetailsLeaf";
import { IoClose } from "react-icons/io5";
import useStore from "~/stores/useStore";
import AddItemComponent from "~/components/ui-elements/AddItemComponent";
import { v4 as uuidv4 } from "uuid";
const CardDetails: FunctionComponent<{
  onClose: () => void;
  cardId: number;
}> = ({ onClose, cardId }) => {
  const cardDetails = useStore((state) =>
    state.cards.find((card) => card.id === cardId)
  );

  const createGroup = useStore((state) => state.createGroup);

  const getAllTags = () => {
    const tags = new Set<string>();
    const tagsList = cardDetails?.groups?.map((group) =>
      group.nodes?.map((node) => node.tag)
    );
    console.log(tagsList);
    tagsList
      ? tagsList.forEach((list) => list.forEach((tag) => tag && tags.add(tag)))
      : null;
    return Array.from(tags);
  };

  const onAddSection = () => {
    createGroup(cardId, {
      id: uuidv4(),
      name: "Untitled Section",
      nodes: [],
    });
  };

  return (
    <div
      className="relative h-full flex-1 w-full rounded-sm rounded-tr-none rounded-b-none 
    border-[#d1d1d1] border-[0.5px] border-solid box-border flex flex-col items-start 
    justify-start p-4 mx-2 gap-5 text-left text-smi text-miscellaneous-floating-tab-text-unselected"
    >
      <div className="absolute top-3 right-2 text-gray-300 hover:text-gray-500">
        <IoClose size={20} className="cursor-pointer" onClick={onClose} />
      </div>
      <CardDetailsInfo cardDetails={cardDetails} />
      <CardDetailsTabs cardTabs={() => getAllTags()} />
      {cardDetails.groups &&
        cardDetails.groups.map((group) => (
          <CardDetailsGroup key={group.id} group={group} cardId={cardId}>
            {group.nodes &&
              group.nodes.map((node) => (
                <CardDetailsNode
                  key={node.id}
                  node={node}
                  cardId={cardId}
                  groupId={group.id}
                >
                  {node.leafs &&
                    node.leafs.map((leaf) => (
                      <CardDetailsLeaf
                        key={leaf.id}
                        leaf={leaf}
                        nodeId={node.id}
                        groupId={group.id}
                        cardId={cardId}
                      />
                    ))}
                </CardDetailsNode>
              ))}
          </CardDetailsGroup>
        ))}
      <AddItemComponent
        onClick={onAddSection}
        displayText={`Add Section`}
        className="pl-0 mt-4"
      />
    </div>
  );
};

export default CardDetails;
