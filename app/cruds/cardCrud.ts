import { UserInterface, CardInterface } from "~/interfaces/CardInterfaces";
import CardModel from "~/models/CardModel";
import UserModel from "~/models/UserModel";
import ScoupeModel from "~/models/ScoupeModel";
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
