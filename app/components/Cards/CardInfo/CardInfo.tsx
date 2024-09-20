// import CardInfoHeader from "./CardInfoHeader";
import CardInfoImage from "./CardInfoImage";
import CardInfoProgress from "./CardInfoProgress";
import { CardInterface } from "~/interfaces/CardInterfaces";

export default function CardInfo({
  cardData,
  toggleCardDetails,
}: {
  cardData: CardInterface;
  toggleCardDetails: () => void;
}) {
  //+
  return (
    <div className="w-full flex flex-col items-center max-h-[150px] mb-2">
      {/* <CardInfoHeader /> */}
      <div className="w-full h-[100px]">
        <CardInfoImage
          cardId={cardData.id}
          imgPath={cardData.image}
          toggleCardDetails={toggleCardDetails}
        />
      </div>
      <CardInfoProgress name={cardData.name} progress={cardData.progress} />
    </div>
  );
}
