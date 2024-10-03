import CardInfo from "./CardPreviewInfo/CardInfo";
import CardNode from "./CardContent/CardNode";
import CardGroup from "./CardContent/CardGroup";
import CardLeaf from "./CardContent/CardLeaf";
import { CardInterface } from "~/interfaces/CardInterfaces";

export default function Card({ cardData }: { cardData: CardInterface }) {
  return (
    <div className="max-w-[275px] max-h-[350px] min-h-[230px] bg-white rounded-md border-[0.5px] border-solid border-[#d1d1d1] shadow-[1px_1px_1px_rgba(0,_0,_0,_0.05)]">
      <CardInfo cardData={cardData} />

      <div className="w-full flex flex-col items-center h-fit pr-[1.5px]">
        {cardData.groups &&
          cardData.groups.map((group) => (
            <CardGroup
              key={group._id.toString()}
              name={group.name}
              progress={group.progress}
            >
              {group.nodes &&
                group.nodes.map((node) => (
                  <CardNode key={node._id.toString()} node={node}>
                    {node.leafs &&
                      node.leafs.map((leaf) => (
                        <CardLeaf
                          key={leaf._id.toString()}
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
