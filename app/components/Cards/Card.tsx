import CardInfo from "./CardInfo/CardInfo";
import CardNode from "./CardContent/CardNode";
import CardGroup from "./CardContent/CardGroup";
import CardLeaf from "./CardContent/CardLeaf";
import { CardInterface } from "~/interfaces/CardInterfaces";

export default function Card({
  cardData,
  toggleCardDetails,
}: {
  cardData: CardInterface;
  toggleCardDetails: () => void;
}) {
  return (
    <div>
      <CardInfo cardData={cardData} toggleCardDetails={toggleCardDetails} />

      <div className="w-full flex flex-col items-center h-fit pr-[1.5px]">
        {cardData.groups &&
          cardData.groups.map((group) => (
            <CardGroup
              key={group.id}
              name={group.name}
              progress={group.progress}
            >
              {group.nodes &&
                group.nodes.map((node) => (
                  <CardNode
                    key={node.id}
                    name={node.name}
                    progress={node.progress}
                  >
                    {node.leafs &&
                      node.leafs.map((leaf) => (
                        <CardLeaf
                          key={leaf.id}
                          name={leaf.name}
                          progress={leaf.progress}
                        />
                      ))}
                  </CardNode>
                ))}
            </CardGroup>
          ))}
      </div>
    </div>
  );
}
