import { json } from "@remix-run/node";
import { useEffect } from "react";
import { useLoaderData, useParams, Outlet, redirect } from "react-router-dom";
import {
  CardInterface,
  UserInterface,
  ScoupeInterface,
  TagInterface,
} from "~/interfaces/CardInterfaces";

import Card from "../components/Cards/CardPreview/Card";
import CardListInfo from "~/components/Cards/ScopeHeader/CardListInfo";
import CardListFilter from "~/components/Cards/ScopeHeader/CardListFilter";

import useStore from "~/stores/useStore";
import { connectToDatabase } from "~/utils/mongoose.server";
import UserModel from "../models/UserModel";
import CardModel from "../models/CardModel";
import ScoupeModel from "../models/ScoupeModel";
import TagModel from "../models/TagModel";

import { getUser, createDummyCardCrud } from "~/cruds/cardCrud";

interface LoaderData {
  cards: CardInterface[];
  user: UserInterface;
  scoupes: ScoupeInterface[];
  cardTags: TagInterface[];
}

export async function action({ request }) {
  if (request.method == "POST") {
    // get user from access token
    const user = await getUser();
    const card = await createDummyCardCrud({ user });
    return redirect(`/activities/${card._id.toString()}`);
  }
  return json({});
}

export const loader = async () => {
  await connectToDatabase();
  const user: UserInterface | null = await UserModel.findOne({
    email: "diana.matkava.pr@willbery.com",
  });
  const cards: CardInterface[] | null = await CardModel.find({
    user: user,
  })
    .populate("scoupe")
    .populate({
      path: "groups",
      populate: {
        path: "nodes.tag",
      },
    })
    .populate({
      path: "groups",
      populate: {
        path: "nodes",
        populate: {
          path: "leafs.tag",
        },
      },
    });

  const scoupes: ScoupeInterface[] | null = await ScoupeModel.find({
    user: user,
  });

  const cardTags: TagInterface[] | null = await TagModel.find({
    user: user,
  });

  return json<LoaderData>({ cards, user, scoupes, cardTags });
};

export default function Activities() {
  const { cardId } = useParams();
  const selectedCardId = cardId ? cardId : null;

  const setCards = useStore((state) => state.setCards);
  const setUser = useStore((state) => state.setUser);
  const setScoupes = useStore((state) => state.setScoupes);
  const setCardTags = useStore((state) => state.setCardTags);

  const { cards, user, scoupes, cardTags } = useLoaderData() as {
    cards: CardInterface[];
    user: UserInterface;
    scoupes: ScoupeInterface[];
    cardTags: TagInterface[];
  };

  const cardsState = useStore((state) => state.cards);

  useEffect(() => {
    if (cards.length > 0) {
      setCards(cards);
    }
    if (user) {
      setUser(user);
    }
    if (scoupes.length > 0) {
      setScoupes(scoupes);
    }
    if (cardTags.length > 0) {
      setCardTags(cardTags);
    }
  }, [
    cards,
    user,
    scoupes,
    cardTags,
    setCards,
    setUser,
    setScoupes,
    setCardTags,
  ]);

  return (
    <div
      className={`
        w-full flex flex-col items-center gap-3 justify-center ${
          selectedCardId ? "px-1" : "px-6"
        }`}
    >
      <div className="w-full flex flex-row items-center justify-between text-center text-sm">
        <CardListInfo />
        <CardListFilter />
      </div>
      <div className="flex w-full">
        <div
          className={`sticky top-0 h-screen overflow-y-auto gap-2 grid pb-48
            ${
              selectedCardId
                ? "hidden sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
                : "xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7"
            }`}
        >
          {cardsState.map((card) => (
            <Card
              key={card._id.toString()}
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
