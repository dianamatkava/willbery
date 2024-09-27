import { CardInterface, UserInterface } from "~/interfaces/CardInterfaces";
import CardModel from "~/models/CardModel";
import UserModel from "~/models/UserModel";

export const createCardCrud = async ({
  userId,
  cardData,
}: {
  userId: string;
  cardData: CardInterface;
}) => {
  console.log("UserModel", UserModel);
  const user: UserInterface[] | null = await UserModel.findOne({
    email: "diana.matkava.pr@willbery.com",
  });
  if (!user) {
    throw new Error("User not found");
  }

  await CardModel.create({ user: user, ...cardData });
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
