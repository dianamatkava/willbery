import CardInfo from "./CardInfo/CardInfo";
import CardContent from "./CardContent/CardContent";

export default function ActivitiesCard({
  imgPath,
  params,
  toggleCardDetails,
}: {
  imgPath: string;
  params: object;
  toggleCardDetails: () => void;
}) {
  return (
    <div>
      <CardInfo params={params} toggleCardDetails={toggleCardDetails} />
      <CardContent params={params} />
    </div>
  );
}

//
//
