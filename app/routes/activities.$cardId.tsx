import { FunctionComponent } from "react";
import { CardDetailsInfo } from "../components/Cards/CardDetails/CardDetailsInfo";
import { CardDetailsTabs } from "../components/Cards/CardDetails/CardDetailsTabs";
import { CardDetailsGroup } from "../components/Cards/CardDetails/CardDetailsGroup";
import { CardDetailsNode } from "../components/Cards/CardDetails/CardDetailsNode";
import { CardDetailsLeaf } from "../components/Cards/CardDetails/CardDetailsLeaf";
import { IoClose } from "react-icons/io5";
import useStore from "../stores/useStore";
import AddItemComponent from "../components/ui-elements/AddItemComponent";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { json } from "@remix-run/node";
import { getUser, getCard, updateCard } from "../cruds/cardCrud";

export async function action({ request, params }) {
  if (request.method == "PUT") {
    const cardId = params.cardId;
    const user = await getUser();

    const card = await getCard({ user, cardId });
    const { body } = await request.json();
    await updateCard({ card, body });
    return json({ success: true });
  }
  return json({ success: false }, { status: 405 });
}

const CardDetails: FunctionComponent = () => {
  const createGroup = useStore((state) => state.createGroup);

  const { cardId } = useParams();
  const cardDetails = useStore(
    (state) => state.cards.find((card) => card._id.toString() === cardId) // ignore
  );

  if (!cardDetails) {
    return (
      <div className="flex items-center justify-center flex-[1.5_2_0%] mx-auto w-min-[450px]">
        <div
          className="relative h-full flex-1 w-full rounded-sm rounded-tr-none rounded-b-none 
    border-[#d1d1d1] border-[0.5px] border-solid box-border flex flex-col items-start 
    justify-start p-4 mx-2 gap-5 text-left text-smi text-miscellaneous-floating-tab-text-unselected"
        >
          Loading...
        </div>
      </div>
    );
  }

  const getAllTags = () => {
    const tags = new Set<string>();
    const tagsList = cardDetails?.groups?.map((group) =>
      group.nodes?.map((node) => node.tag)
    );
    tagsList
      ? tagsList.forEach((list) => list.forEach((tag) => tag && tags.add(tag)))
      : null;
    return Array.from(tags);
  };

  const onAddSection = () => {
    createGroup(cardDetails._id.toString(), {
      _id: uuidv4(),
      name: "Untitled Section",
      nodes: [],
    });
  };

  return (
    <div className="flex items-center justify-center flex-[1.5_2_0%] mx-auto">
      <div
        className="relative h-full flex-1 w-full rounded-sm rounded-tr-none rounded-b-none 
    border-[#d1d1d1] border-[0.5px] border-solid box-border flex flex-col items-start 
    justify-start p-4 mx-2 gap-5 text-left text-smi text-miscellaneous-floating-tab-text-unselected"
      >
        <div className="absolute top-3 right-2 text-gray-300 hover:text-gray-500">
          <Link to="/activities">
            <IoClose size={20} className="cursor-pointer" />
          </Link>
        </div>
        <CardDetailsInfo cardDetails={cardDetails} />
        <CardDetailsTabs cardTabs={() => getAllTags()} />
        {cardDetails.groups &&
          cardDetails.groups.map((group) => (
            <CardDetailsGroup
              key={group._id.toString()}
              group={group}
              cardId={cardDetails._id.toString()}
            >
              {group.nodes &&
                group.nodes.map((node) => (
                  <CardDetailsNode
                    key={node._id.toString()}
                    node={node}
                    cardId={cardDetails._id.toString()}
                    groupId={group._id.toString()}
                  >
                    {node.leafs &&
                      node.leafs.map((leaf) => (
                        <CardDetailsLeaf
                          key={leaf._id.toString()}
                          leaf={leaf}
                          nodeId={node._id.toString()}
                          groupId={group._id.toString()}
                          cardId={cardDetails._id.toString()}
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
    </div>
  );
};

export default CardDetails;
