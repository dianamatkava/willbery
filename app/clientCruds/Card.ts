import { UserInterface } from "~/interfaces/CardInterfaces";
import CardModel from "~/models/CardModel";
import UserModel from "~/models/UserModel";

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
