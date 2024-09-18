import ActivitiesFilter from "~/components/Activities/ActivitiesFilter";
import ActivitiesCard from "../../components/Activities/ActivitiesCard";
import { json } from "@remix-run/node";
import { getActivities } from "~/data";
import { useLoaderData } from "@remix-run/react";

export const loader = async () => {
  const activities = await getActivities();
  return json({ activities });
};

export default function Activities() {
  const { activities } = useLoaderData<typeof loader>();
  return (
    <div className="w-full flex flex-col items-center gap-5 relative ml-2">
      <ActivitiesFilter />
      <div className="flex flex-col items-center w-full px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xlg:grid-cols-5 xxlg:grid-cols-6 gap-2 w-full max-w-[300px] sm:max-w-full">
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
      </div>
    </div>
  );
}
