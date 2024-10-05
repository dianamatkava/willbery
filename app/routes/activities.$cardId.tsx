import { FunctionComponent } from "react";
import { CardDetailsInfo } from "../components/Cards/CardDetails/CardDetailsInfo";
import { CardDetailsTabs } from "../components/Cards/CardDetails/CardDetailsTabs";
import { CardDetailsGroup } from "../components/Cards/CardDetails/CardDetailsGroup";
import { CardDetailsNode } from "../components/Cards/CardDetails/CardDetailsNode";
import { CardDetailsLeaf } from "../components/Cards/CardDetails/CardDetailsLeaf";
import { IoClose } from "react-icons/io5";
import useStore from "../stores/useStore";
import AddItem from "../components/ui-elements/AddItem";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { json } from "@remix-run/node";
import {
  updateCard,
  updateGroup,
  updateNode,
  updateLeaf,
  updateOrCreateScoupe,
  updateOrCreateTag,
  pushDummyGroup,
  pushDummyNode,
  pushDummyLeaf,
  deleteCard,
  deleteGroup,
  deleteNode,
  deleteLeaf,
  getUser,
} from "../cruds/cardCrud";
import { CardUpdateOptions } from "../interfaces/CardInterfaces";
import { Types } from "mongoose";
import { useFetcher } from "@remix-run/react";

function formDataToObject(formData) {
  const obj = {};
  formData.forEach((value, key) => {
    if (obj[key]) {
      if (!Array.isArray(obj[key])) {
        obj[key] = [obj[key]];
      }
      obj[key].push(value);
    } else {
      obj[key] = value;
    }
  });
  return obj;
}

export async function action({ request, params }) {
  if (request.method == "PUT") {
    const cardId = params.cardId;
    const formData = await request.formData();
    const data: CardUpdateOptions = formDataToObject(formData);

    const url = new URL(request.url);
    const queryParams = Object.fromEntries(url.searchParams.entries());
    switch (queryParams?.update) {
      case "scoupe": {
        const scoupe = data.scoupe;
        const scoupeObj = await updateOrCreateScoupe({
          scoupe: String(scoupe),
        });
        if (scoupeObj && scoupeObj._id) {
          data.scoupe = scoupeObj._id as Types.ObjectId;
          await updateCard({ cardId, data });
        } else {
          return json(
            { success: false, error: "Scoupe update or creation failed" },
            { status: 500 }
          );
        }
        break;
      }
      case "tag": {
        const tag = data.tag;
        const tagObj = await updateOrCreateTag({
          tag: String(tag),
        });
        if (tagObj && tagObj._id) {
          const user = await getUser();
          data.tag = tagObj._id as Types.ObjectId;
          const groupId = queryParams.groupId;
          const nodeId = queryParams?.nodeId;
          const leafId = queryParams?.leafId;
          if (leafId) {
            await updateLeaf({ user, cardId, groupId, nodeId, leafId, data });
          } else {
            await updateNode({ user, cardId, groupId, nodeId, data });
          }
        } else {
          return json(
            { success: false, error: "Scoupe update or creation failed" },
            { status: 500 }
          );
        }
        break;
      }
      case "group": {
        const groupId = queryParams.groupId;
        const data = formDataToObject(formData);
        const user = await getUser();
        await updateGroup({ user, cardId, groupId, data });
        break;
      }
      case "node": {
        const groupId = queryParams.groupId;
        const nodeId = queryParams.nodeId;
        const data = formDataToObject(formData);
        const user = await getUser();
        await updateNode({ user, cardId, groupId, nodeId, data });
        break;
      }
      case "leaf": {
        const groupId = queryParams.groupId;
        const nodeId = queryParams.nodeId;
        const leafId = queryParams.leafId;
        const data = formDataToObject(formData);
        const user = await getUser();
        await updateLeaf({ user, cardId, groupId, nodeId, leafId, data });
        break;
      }
      default: {
        await updateCard({ cardId, data });
        break;
      }
    }

    return json({ success: true });
  } else if (request.method == "POST") {
    const user = await getUser(); /// user will be retrieved in auth middleware
    const cardId = params.cardId;
    const url = new URL(request.url);
    const queryParams = Object.fromEntries(url.searchParams.entries());

    switch (queryParams?.create) {
      case "section": {
        await pushDummyGroup({ user, cardId });
        break;
      }
      case "node": {
        const groupId = queryParams?.groupId;
        await pushDummyNode({ user, cardId, groupId });
        break;
      }
      case "leaf": {
        const formData = await request.formData();
        const groupId = queryParams?.groupId;
        const nodeId = queryParams?.nodeId;
        const data = formDataToObject(formData);
        await pushDummyLeaf({ user, cardId, groupId, nodeId, data });
        break;
      }
      default: {
        break;
      }
    }

    return json({ success: true });
  } else if (request.method === "DELETE") {
    const user = await getUser(); /// user will be retrieved in auth middleware
    const cardId = params.cardId;
    const url = new URL(request.url);
    const queryParams = Object.fromEntries(url.searchParams.entries());
    switch (queryParams?.delete) {
      case "card": {
        await deleteCard({ user, cardId });
        break;
      }
      case "group": {
        const groupId = queryParams?.groupId;
        await deleteGroup({ user, cardId, groupId });
        break;
      }
      case "node": {
        const groupId = queryParams?.groupId;
        const nodeId = queryParams?.nodeId;
        await deleteNode({ user, cardId, groupId, nodeId });
        break;
      }
      case "leaf": {
        const groupId = queryParams?.groupId;
        const nodeId = queryParams?.nodeId;
        const leafId = queryParams?.leafId;
        await deleteLeaf({ user, cardId, groupId, nodeId, leafId });
        break;
      }
      default: {
        break;
      }
    }
    return json({ success: true });
  }
  return json({ success: false }, { status: 405 });
}

const CardDetails: FunctionComponent = () => {
  const fetcher = useFetcher();

  const { cardId } = useParams();
  const cardDetails = useStore(
    (state) => state.cards.find((card) => card._id.toString() === cardId) // ignore
  );

  if (!cardDetails) {
    return (
      <div
        className="
      flex items-center justify-center flex-[1.5_2_0%] mx-auto w-min-[450px]"
      >
        <div
          className="h-full flex-1 w-full rounded-sm rounded-tr-none rounded-b-none 
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
      group.nodes?.map((node) => node.tag?.name)
    );
    tagsList
      ? tagsList.forEach((list) => list.forEach((tag) => tag && tags.add(tag)))
      : null;
    return Array.from(tags);
  };

  const onAddSection = async () => {
    await fetcher.submit(new FormData(), {
      method: "post",
      action: `/activities/${cardDetails._id.toString()}?create=section`,
    });
  };

  return (
    <div className="flex min-w-[480px] items-center justify-center flex-[1.5_2_0%] mx-auto">
      <div
        className="sticky top-0 h-full flex-1 w-full rounded-sm rounded-tr-none rounded-b-none 
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
        <AddItem
          onClick={onAddSection}
          displayText={`Add Section`}
          className="pl-0 mt-4"
        />
      </div>
    </div>
  );
};

export default CardDetails;
