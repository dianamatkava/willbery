import CardInfo from "./CardInfo/CardInfo";
import CardContent from "./CardContent/CardContent";

export default function ActivitiesCard({ imgPath }: { imgPath: string }) {
  return (
    <div className="max-w-[275px] max-h-[350px] min-h-[200px] bg-white rounded-md border-[0.5px] border-solid border-[#d1d1d1]">
      <CardInfo imgPath={imgPath} />
      <CardContent />
    </div>
  );
}
