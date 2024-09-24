import Card from "../components/Cards/Card";
import { json } from "@remix-run/node";
import { getActivities } from "~/data";
import { useEffect } from "react";
import { useLoaderData, useParams, Outlet } from "react-router-dom";
import useStore from "~/stores/useStore";
import { CardInterface } from "~/interfaces/CardInterfaces";
import CardListInfo from "~/components/Cards/CardListHeader/CardListInfo";
import CardListFilter from "~/components/Cards/CardListHeader/CardListFilter";
import { getTags, getDomains } from "~/data";

interface LoaderData {
  cards: CardInterface[];
  tags: string[];
  domains: string[];
}

export const loader = async () => {
  const cards = await getActivities();
  const tags = await getTags();
  const domains = await getDomains();
  return json<LoaderData>({ cards, tags, domains });
};

export default function Activities() {
  const { cardId } = useParams();
  const selectedCardId = cardId ? cardId : null;

  const setCards = useStore((state) => state.setCards);
  const setTags = useStore((state) => state.setTags);
  const setDomains = useStore((state) => state.setDomains);
  const { cards, tags, domains } = useLoaderData() as {
    cards: CardInterface[];
    tags: string[];
    domains: string[];
  };

  const cardsState = useStore((state) => state.cards);

  useEffect(() => {
    if (cards.length > 0) {
      setCards(cards);
    }
    if (tags.length > 0) {
      setTags(tags);
    }
    if (domains.length > 0) {
      setDomains(domains);
    }
  }, [cards, tags, domains, setCards, setTags, setDomains]);

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
