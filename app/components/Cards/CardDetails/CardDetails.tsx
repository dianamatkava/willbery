import { FunctionComponent } from "react";
import { CardDetailsInfo } from "./CardDetailsInfo";
import { CardDetailsTabs } from "./CardDetailsTabs";
import { CardDetailsGroup } from "./CardDetailsGroup";
import { CardDetailsNode } from "./CardDetailsNode";
import { CardDetailsLeaf } from "./CardDetailsLeaf";
import { IoClose } from "react-icons/io5";
import useStore from "~/stores/useStore";

const CardDetails: FunctionComponent<{
  onClose: () => void;
  cardId: number;
}> = ({ onClose, cardId }) => {
  const cardDetails = useStore((state) =>
    state.cards.find((card) => card.id === cardId)
  );

  const getAllTags = () => {
    const tags = new Set<string>();
    const tagsList = cardDetails.groups.map((group) =>
      group.nodes.map((node) => node.tag)
    );
    tagsList.forEach((list) => list.forEach((tag) => tags.add(tag)));
    return Array.from(tags);
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
      {cardDetails.groups.map((group) => (
        <CardDetailsGroup key={group.id} group={group} cardId={cardId}>
          {group.nodes.map((node) => (
            <CardDetailsNode
              key={node.id}
              node={node}
              cardId={cardId}
              groupId={group.id}
            >
              {node.leafs &&
                node.leafs.map((leaf) => (
                  <CardDetailsLeaf
                    key={leaf.name}
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
    </div>
  );
};

export default CardDetails;
