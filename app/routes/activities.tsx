import { json } from "@remix-run/node";
import { useEffect } from "react";
import { useLoaderData, useParams, Outlet } from "react-router-dom";
import { CardInterface, UserInterface } from "~/interfaces/CardInterfaces";

import Card from "../components/Cards/Card";
import CardListInfo from "~/components/Cards/CardListHeader/CardListInfo";
import CardListFilter from "~/components/Cards/CardListHeader/CardListFilter";

import useStore from "~/stores/useStore";
import { connectToDatabase } from "~/utils/mongoose.server";
import UserModel from "../models/UserModel";
import CardModel from "../models/CardModel";

interface LoaderData {
  cards: CardInterface[];
  user: UserInterface;
}

export const loader = async () => {
  await connectToDatabase();
  const user: UserInterface | null = await UserModel.findOne({
    email: "diana.matkava.pr@willbery.com",
  });
  const cards: CardInterface[] | null = await CardModel.find({
    user: user,
  });

  return json<LoaderData>({ cards, user });
};

export default function Activities() {
  const { cardId } = useParams();
  const selectedCardId = cardId ? cardId : null;

  const setCards = useStore((state) => state.setCards);
  const setUser = useStore((state) => state.setUser);

  const { cards, user } = useLoaderData() as {
    cards: CardInterface[];
    user: UserInterface;
  };

  const cardsState = useStore((state) => state.cards);

  useEffect(() => {
    if (cards.length > 0) {
      setCards(cards);
    }
    if (user) {
      setUser(user);
    }
  }, [cards, user, setCards, setUser]);

  return (
    <div
      className={`w-full flex flex-col items-center gap-5 justify-center ${
        selectedCardId ? "px-1" : "px-6"
      }`}
    >
      <div className="w-full flex flex-row items-center justify-between text-center text-sm text-darkslategray font-roboto">
        <CardListInfo />
        <CardListFilter />
      </div>
      <div className="flex w-full">
        <div
          className={`gap-2 grid grid-cols-1 xlg:grid-cols-5 xxlg:grid-cols-6 ${
            selectedCardId
              ? "xs:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xlg:grid-cols-4 xxlg:grid-cols-5 hidden md:grid flex-[2_3_0%]"
              : "xs:grid-cols-2 grid-sm:grid-cols-3 grid-md:grid-cols-4 grid-lg:grid-cols-4"
          }`}
        >
          {cardsState.map((card) => (
            <Card
              key={card.id}
              cardData={card}
              imgPath={
                "https://static.vecteezy.com/system/resources/previews/007/905/993/original/coding-programming-illustration-icon-orange-and-dark-blue-screen-developer-environment-for-computer-science-poster-or-graphic-element-vector.jpg"
              }
            />
          ))}
        </div>
        <Outlet />
      </div>
    </div>
  );
}
