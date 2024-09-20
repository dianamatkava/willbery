import CardListHeader from "~/components/Cards/CardListHeader/CardListHeader";
import ActivitiesCard from "../../components/Cards/ActivitiesCard";
import { json } from "@remix-run/node";
import { getActivities } from "~/data";
import { useLoaderData } from "@remix-run/react";
import { useState } from "react";
import CardDetails from "~/components/Cards/CardDetails/CardDetails";

export const loader = async () => {
  const activities = await getActivities();
  return json({ activities });
};

export default function Activities() {
  const { activities: activitiesData } = useLoaderData<typeof loader>();
  const [activities, setActivities] = useState(activitiesData);
  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);

  const handleUpdateActivities = (updatedActivities: CardDetails[]) => {
    setActivities(updatedActivities);
  };

  const toggleCardDetails = (id: number) => {
    if (id === selectedCardId) {
      setSelectedCardId(null);
    } else {
      setSelectedCardId(id);
    }
  };
  return (
    <div
      className={`w-full flex flex-col items-center gap-5 justify-center ${
        selectedCardId ? "px-1" : "px-6"
      }`}
    >
      <CardListHeader />
      <div className="flex w-full ">
        <div
          className={`gap-2 grid grid-cols-1 xlg:grid-cols-5 xxlg:grid-cols-6 ${
            selectedCardId
              ? "xs:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xlg:grid-cols-4 xxlg:grid-cols-5 hidden md:grid flex-[2_3_0%]"
              : "xs:grid-cols-2 grid-sm:grid-cols-3 grid-md:grid-cols-4 grid-lg:grid-cols-4"
          }`}
        >
          {activities &&
            activities.map((card) => (
              <div
                className="max-w-[275px] max-h-[350px] min-h-[230px] bg-white rounded-md border-[0.5px] border-solid border-[#d1d1d1] shadow-[1px_1px_1px_rgba(0,_0,_0,_0.05)]"
                key={card.id}
              >
                <ActivitiesCard
                  key={card.id}
                  params={card}
                  toggleCardDetails={() => toggleCardDetails(card.id)}
                  imgPath={
                    "https://static.vecteezy.com/system/resources/previews/007/905/993/original/coding-programming-illustration-icon-orange-and-dark-blue-screen-developer-environment-for-computer-science-poster-or-graphic-element-vector.jpg"
                  }
                />
              </div>
            ))}
        </div>
        {selectedCardId && (
          <div className="flex items-center justify-center flex-[2_2_0%] mx-auto">
            <CardDetails
              onClose={() => setSelectedCardId(null)}
              cardDetails={activities.find(
                (card) => card.id === selectedCardId
              )}
            />
          </div>
        )}
      </div>
    </div>
  );
}
