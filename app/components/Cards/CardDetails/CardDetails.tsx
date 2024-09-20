import { FunctionComponent } from "react";
import { CardDetailsInfo } from "./CardDetailsInfo";
import { CardDetailsTabs } from "./CardDetailsTabs";
import { CardDetailsGroup } from "./CardDetailsGroup";
import { CardDetailsNode } from "./CardDetailsNode";
import { CardDetailsLeaf } from "./CardDetailsLeaf";
import { IoClose } from "react-icons/io5";

interface CardLeafs {
  name: string;
  progress: number;
  tag: string;
  status: string;
}

interface CardNodes {
  tag: string;
  leafs: CardLeafs[];
}

interface CardGroups {
  tag: string;
  nodes: CardNodes[];
}

interface CardDetails {
  groups: CardGroups[];
}

const CardDetails: FunctionComponent<{
  onClose: () => void;
  cardDetails: CardDetails;
}> = ({ onClose, cardDetails }) => {
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
        <CardDetailsGroup key={group.id} data={group}>
          {group.nodes.map((node) => (
            <CardDetailsNode key={node.id} data={node}>
              {node.leafs &&
                node.leafs.map((leaf) => (
                  <CardDetailsLeaf key={leaf.name} data={leaf} />
                ))}
            </CardDetailsNode>
          ))}
        </CardDetailsGroup>
      ))}
    </div>
  );
};

export default CardDetails;
