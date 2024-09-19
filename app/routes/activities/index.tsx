import CardListHeader from "~/components/Cards/CardListHeader/CardListHeader";
import ActivitiesCard from "../../components/Cards/ActivitiesCard";
import { json } from "@remix-run/node";
import { getActivities } from "~/data";
import { useLoaderData } from "@remix-run/react";
import CardDetails from "~/components/Cards/CardDetails/CardDetails";

export const loader = async () => {
  const activities = await getActivities();
  return json({ activities });
};

export default function Activities() {
  const { activities } = useLoaderData<typeof loader>();
  return (
    <div className="w-full flex flex-col items-center gap-5 mx-3">
      <CardListHeader />
      <div className="flex w-full">
        <div className="hidden md:grid grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xlg:grid-cols-4 xxlg:grid-cols-5 gap-2 flex-[3_3_0%]">
          {activities &&
            activities.map((card) => (
              <ActivitiesCard
                key={card.id}
                params={card}
                imgPath={
                  "https://static.vecteezy.com/system/resources/previews/007/905/993/original/coding-programming-illustration-icon-orange-and-dark-blue-screen-developer-environment-for-computer-science-poster-or-graphic-element-vector.jpg"
                }
              />
            ))}
        </div>
        <div className="flex items-center justify-center flex-[2_2_0%] mx-auto">
          <CardDetails />
        </div>
      </div>
    </div>
  );
}
