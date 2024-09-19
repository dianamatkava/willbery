import CardInfo from "./CardInfo/CardInfo";
import CardContent from "./CardContent/CardContent";

export default function ActivitiesCard({
  imgPath,
  params,
}: {
  imgPath: string;
  params: object;
}) {
  return (
    <div className="max-w-[325px] max-h-[350px] min-h-[200px] bg-white rounded-md border-[0.5px] border-solid border-[#d1d1d1]">
      <CardInfo params={params} />
      <CardContent params={params} />
    </div>
  );
}

//
//
