import CardInfo from "./CardInfo/CardInfo";
import CardContent from "./CardContent/CardContent";

export default function ActivitiesCard() {
  return (
    <div className="max-w-[275px] max-h-[300px] min-h-[200px] bg-white rounded-md border-[0.5px] border-solid border-[#d1d1d1]">
      <CardInfo />
      <CardContent />
    </div>
  );
}
