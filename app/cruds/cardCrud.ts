import { UserInterface, CardInterface } from "~/interfaces/CardInterfaces";
import CardModel from "~/models/CardModel";
import UserModel from "~/models/UserModel";
import ScoupeModel from "~/models/ScoupeModel";
import TagModel from "~/models/TagModel";
import { Types } from "mongoose";
import { CardUpdateOptions } from "~/interfaces/CardInterfaces";

export const createDummyCardCrud = async ({
  user,
}: {
  user: UserInterface;
}) => {
  const cardData = {
    name: "Untitled Card",
  };
  const card = await CardModel.create({ user: user, ...cardData });
  return card;
};

export const getUser = async () => {
  const user: UserInterface | null = await UserModel.findOne({
    email: "diana.matkava.pr@willbery.com",
  });
  if (!user) {
    throw new Error("User not found");
  }

  return user;
};

export const getCard = async ({
  user,
  cardId,
}: {
  user: UserInterface;
  cardId: string;
}): Promise<CardInterface | null> => {
  const card: CardInterface = await CardModel.findOne({
    _id: cardId,
    user: user,
  });
  return card;
};

export const updateCard = async ({
  cardId,
  data,
}: {
  cardId: string;
  data: CardUpdateOptions;
}) => {
  const user = await getUser();
  const cardIdObject = new Types.ObjectId(cardId);
  try {
    const res = await CardModel.updateOne(
      { _id: cardIdObject, user: user._id },
      { $set: data }
    );
    if (res.acknowledged) {
      console.log("Card updated successfully:", res);
    } else {
      console.warn("Update operation not acknowledged:", res);
    }
  } catch (err) {
    console.error("Error updating card:", err);
  }
};

export const updateGroup = async ({
  user,
  cardId,
  groupId,
  data,
}: {
  user: UserInterface;
  cardId: string;
  groupId: string;
  data: object;
}) => {
  const cardIdObject = new Types.ObjectId(cardId);
  const groupIdObject = new Types.ObjectId(groupId);

  try {
    const res = await CardModel.updateOne(
      { _id: cardIdObject, user: user._id, "groups._id": groupIdObject },
      {
        $set: {
          "groups.$": data,
        },
      }
    );
    if (res.acknowledged) {
      console.log("Group updated successfully:", res);
    } else {
      console.warn("Update operation not acknowledged:", res);
    }
  } catch (err) {
    console.error("Error updating group:", err);
  }
};

export const updateNode = async ({
  user,
  cardId,
  groupId,
  nodeId,
  data,
}: {
  user: UserInterface;
  cardId: string;
  groupId: string;
  nodeId: string;
  data: object;
}) => {
  const cardIdObject = new Types.ObjectId(cardId);
  const groupIdObject = new Types.ObjectId(groupId);
  const nodeIdObject = new Types.ObjectId(nodeId);

  try {
    const updateFields = Object.keys(data).reduce((acc, key) => {
      acc[`groups.$[group].nodes.$[node].${key}`] = data[key];
      return acc;
    }, {});
    const res = await CardModel.updateOne(
      {
        _id: cardIdObject,
        user: user._id,
        "groups._id": groupIdObject,
        "groups.nodes._id": nodeIdObject,
      },
      {
        $set: updateFields,
      },
      {
        arrayFilters: [
          { "group._id": groupIdObject },
          { "node._id": nodeIdObject },
        ],
      }
    );
    if (res.acknowledged) {
      console.log("Node updated successfully:", res);
    } else {
      console.warn("Update operation not acknowledged:", res);
    }
  } catch (err) {
    console.error("Error updating group:", err);
  }
};

export const updateLeaf = async ({
  user,
  cardId,
  groupId,
  nodeId,
  leafId,
  data,
}: {
  user: UserInterface;
  cardId: string;
  groupId: string;
  nodeId: string;
  leafId: string;
  data: object;
}) => {
  const cardIdObject = new Types.ObjectId(cardId);
  const groupIdObject = new Types.ObjectId(groupId);
  const nodeIdObject = new Types.ObjectId(nodeId);
  const leafIdObject = new Types.ObjectId(leafId);

  try {
    const updateFields = Object.keys(data).reduce((acc, key) => {
      acc[`groups.$[group].nodes.$[node].leafs.$[leaf].${key}`] = data[key];
      return acc;
    }, {});
    const res = await CardModel.updateOne(
      {
        _id: cardIdObject,
        user: user._id,
        "groups._id": groupIdObject,
        "groups.nodes._id": nodeIdObject,
        "groups.nodes.leafs._id": leafIdObject,
      },
      {
        $set: updateFields,
      },
      {
        arrayFilters: [
          { "group._id": groupIdObject },
          { "node._id": nodeIdObject },
          { "leaf._id": leafIdObject },
        ],
      }
    );
    if (res.acknowledged) {
      console.log("Leaf updated successfully:", res);
    } else {
      console.warn("Update operation not acknowledged:", res);
    }
  } catch (err) {
    console.error("Error updating group:", err);
  }
};

export const updateOrCreateScoupe = async ({ scoupe }: { scoupe: string }) => {
  const user = await getUser();
  try {
    const res = await ScoupeModel.findOneAndUpdate(
      { user: user._id, name: scoupe },
      { name: scoupe },
      { new: true, upsert: true }
    );
    return res;
  } catch (err) {
    console.error("Error updating or creating scoupe:", err);
  }
};

export const updateOrCreateTag = async ({ tag }: { tag: string }) => {
  const user = await getUser();
  try {
    const res = await TagModel.findOneAndUpdate(
      { user: user._id, name: tag },
      { name: tag },
      { new: true, upsert: true }
    );
    return res;
  } catch (err) {
    console.error("Error updating or creating tag:", err);
  }
};

export const pushDummyGroup = async ({
  user,
  cardId,
}: {
  user: UserInterface;
  cardId: string;
}) => {
  const cardIdObject = new Types.ObjectId(cardId);
  const data = {
    name: "Untitled section",
  };
  try {
    const res = await CardModel.updateOne(
      { _id: cardIdObject, user: user._id },
      { $push: { groups: data } }
    );
    if (res.acknowledged) {
      console.log("Group pushed successfully:", res);
    } else {
      console.warn("Push operation not acknowledged:", res);
    }
  } catch (err) {
    console.error("Error pushing group:", err);
  }
};

export const pushDummyNode = async ({
  user,
  cardId,
  groupId,
}: {
  user: UserInterface;
  cardId: string;
  groupId: string;
}) => {
  const cardIdObject = new Types.ObjectId(cardId);
  const groupIdObject = new Types.ObjectId(groupId);
  const data = {
    name: "Untitled item",
  };
  try {
    const res = await CardModel.updateOne(
      {
        _id: cardIdObject,
        user: user._id,
        "groups._id": groupIdObject,
      },
      { $push: { "groups.$.nodes": data } }
    );
    if (res.acknowledged) {
      console.log("Node pushed successfully:", res);
    } else {
      console.warn("Push operation not acknowledged:", res);
    }
  } catch (err) {
    console.error("Error pushing group:", err);
  }
};

export const pushDummyLeaf = async ({
  user,
  cardId,
  groupId,
  nodeId,
  data,
}: {
  user: UserInterface;
  cardId: string;
  groupId: string;
  nodeId: string;
  data: object;
}) => {
  const cardIdObject = new Types.ObjectId(cardId);
  const groupIdObject = new Types.ObjectId(groupId);
  const nodeIdObject = new Types.ObjectId(nodeId);

  try {
    const res = await CardModel.updateOne(
      {
        _id: cardIdObject,
        user: user._id,
        "groups._id": groupIdObject,
        "groups.nodes._id": nodeIdObject,
      },
      { $push: { "groups.$[group].nodes.$[node].leafs": data } },
      {
        arrayFilters: [
          { "group._id": groupIdObject },
          { "node._id": nodeIdObject },
        ],
      }
    );
    if (res.acknowledged) {
      console.log("Leaf pushed successfully:", res);
    } else {
      console.warn("Push operation not acknowledged:", res);
    }
  } catch (err) {
    console.error("Error pushing group:", err);
  }
};

export const deleteCard = async ({
  user,
  cardId,
}: {
  user: UserInterface;
  cardId: string;
}) => {
  try {
    const res = await CardModel.deleteOne({
      _id: new Types.ObjectId(cardId),
      user: user._id,
    });

    if (res.deletedCount) {
      console.log("Card deleted successfully:", res);
    } else {
      console.warn("Delete operation not acknowledged:", res);
    }
  } catch (err) {
    console.error("Error deleting card:", err);
  }
};

export const deleteGroup = async ({
  user,
  cardId,
  groupId,
}: {
  user: UserInterface;
  cardId: string;
  groupId: string;
}) => {
  try {
    const res = await CardModel.updateOne(
      {
        _id: new Types.ObjectId(cardId),
        user: user._id,
        "groups._id": new Types.ObjectId(groupId),
      },
      {
        $set: {
          $push: { "groups.$[group]": [] },
        },
      },
      {
        arrayFilters: [{ "group._id": new Types.ObjectId(groupId) }],
      }
    );

    if (res.acknowledged) {
      console.log("Leaf deleted successfully:", res);
    } else {
      console.warn("Delete operation not acknowledged:", res);
    }
  } catch (error) {
    console.error("Error deleting leaf:", error);
  }
};

export const deleteNode = async ({
  user,
  cardId,
  groupId,
  nodeId,
}: {
  user: UserInterface;
  cardId: string;
  groupId: string;
  nodeId: string;
}) => {
  try {
    const res = await CardModel.updateOne(
      {
        _id: new Types.ObjectId(cardId),
        user: user._id,
        "groups._id": new Types.ObjectId(groupId),
        "groups.nodes._id": new Types.ObjectId(nodeId),
      },
      {
        $set: {
          $push: { "groups.$[group].nodes.$[node]": [] },
        },
      },
      {
        arrayFilters: [
          { "group._id": new Types.ObjectId(groupId) },
          { "node._id": new Types.ObjectId(nodeId) },
        ],
      }
    );

    if (res.acknowledged) {
      console.log("Leaf deleted successfully:", res);
    } else {
      console.warn("Delete operation not acknowledged:", res);
    }
  } catch (error) {
    console.error("Error deleting leaf:", error);
  }
};

export const deleteLeaf = async ({
  user,
  cardId,
  groupId,
  nodeId,
  leafId,
}: {
  user: UserInterface;
  cardId: string;
  groupId: string;
  nodeId: string;
  leafId: string;
}) => {
  try {
    const res = await CardModel.updateOne(
      {
        _id: new Types.ObjectId(cardId),
        user: user._id,
        "groups._id": new Types.ObjectId(groupId),
        "groups.nodes._id": new Types.ObjectId(nodeId),
        "groups.nodes.leafs._id": new Types.ObjectId(leafId),
      },
      {
        $set: {
          $push: { "groups.$[group].nodes.$[node].leafs.$.[leaf]": [] },
        },
      },
      {
        arrayFilters: [
          { "group._id": new Types.ObjectId(groupId) },
          { "node._id": new Types.ObjectId(nodeId) },
          { "leaf._id": new Types.ObjectId(leafId) },
        ],
      }
    );

    if (res.acknowledged) {
      console.log("Leaf deleted successfully:", res);
    } else {
      console.warn("Delete operation not acknowledged:", res);
    }
  } catch (error) {
    console.error("Error deleting leaf:", error);
  }
};
