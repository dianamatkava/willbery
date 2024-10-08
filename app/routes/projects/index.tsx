import Card from "../../components/Cards/CardPreview/Card";
import { json } from "@remix-run/node";
import { getActivities } from "~/data";
import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import useStore from "~/stores/useStore";
import { CardInterface } from "~/interfaces/CardInterfaces";
import CardListInfo from "~/components/Cards/ScopeHeader/CardListInfo";
import CardListFilter from "~/components/Cards/ScopeHeader/CardListFilter";
import { getTags, getDomains } from "~/data";
import { Outlet } from "@remix-run/react";

export const loader = async () => {
  const cards = await getActivities();
  const tags = await getTags();
  const domains = await getDomains();
  return json({ cards, tags, domains });
};

export default function Activities() {
  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);
  const [isCreateCard, setIsCreateCard] = useState<boolean>(false);

  const { cards, tags, domains } = useLoaderData() as {
    cards: CardInterface[];
    tags: string[];
    domains: string[];
  };

  const setCards = useStore((state) => state.setCards);
  const storedCards = useStore((state) => state.cards);
  const setTags = useStore((state) => state.setTags);
  const setDomains = useStore((state) => state.setDomains);

  useEffect(() => {
    if (Array.isArray(cards)) {
      setCards(cards);
    }
    if (Array.isArray(tags)) {
      setTags(tags);
    }
    if (Array.isArray(domains)) {
      setDomains(domains);
    }
  }, [cards, setCards, tags, setTags, domains, setDomains]);

  const toggleCardDetails = (id: number) => {
    setSelectedCardId((prev) => (prev === id ? null : id));
  };

  return (
    <div
      className={`w-full flex flex-col items-center gap-5 justify-center ${
        selectedCardId ? "px-1" : "px-6"
      }`}
    >
      <div className="w-full flex flex-row items-center justify-between text-center text-sm text-darkslategray font-roboto">
        <CardListInfo />
        <CardListFilter createCard={() => setIsCreateCard(true)} />
      </div>
      <div className="flex w-full">
        <div
          className={`gap-2 grid grid-cols-1 xlg:grid-cols-5 xxlg:grid-cols-6 ${
            selectedCardId
              ? "xs:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xlg:grid-cols-4 xxlg:grid-cols-5 hidden md:grid flex-[2_3_0%]"
              : "xs:grid-cols-2 grid-sm:grid-cols-3 grid-md:grid-cols-4 grid-lg:grid-cols-4"
          }`}
        >
          {storedCards.map((card) => (
            <div
              className="max-w-[275px] max-h-[350px] min-h-[230px] bg-white rounded-md border-[0.5px] border-solid border-[#d1d1d1] shadow-[1px_1px_1px_rgba(0,_0,_0,_0.05)]"
              key={card.id}
            >
              <Card
                cardData={card}
                toggleCardDetails={() => toggleCardDetails(card.id)}
                imgPath={
                  "https://static.vecteezy.com/system/resources/previews/007/905/993/original/coding-programming-illustration-icon-orange-and-dark-blue-screen-developer-environment-for-computer-science-poster-or-graphic-element-vector.jpg"
                }
              />
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center flex-[1.5_2_0%] mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
