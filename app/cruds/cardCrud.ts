import { UserInterface, CardInterface } from "~/interfaces/CardInterfaces";
import CardModel from "~/models/CardModel";
import UserModel from "~/models/UserModel";
import { Types } from "mongoose";

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

export const updateCard = async ({
  cardId,
  data,
}: {
  cardId: string;
  data: { [key: string]: string | number };
}) => {
  const user = await getUser();
  const cardIdObject = new Types.ObjectId(cardId);

  try {
    const res = await CardModel.updateOne(
      { _id: cardIdObject, user: user._id },
      { $set: formDataToObject(data) }
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
