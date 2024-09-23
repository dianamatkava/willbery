// import CardInfoHeader from "./CardInfoHeader";
import CardInfoImage from "./CardInfoImage";
import CardInfoProgress from "./CardInfoProgress";
import { CardInterface } from "~/interfaces/CardInterfaces";
import { Link } from "react-router-dom";
export default function CardInfo({ cardData }: { cardData: CardInterface }) {
  //+
  return (
    <div className="w-full flex flex-col items-center max-h-[150px] mb-2">
      {/* <CardInfoHeader /> */}
      <div className="w-full h-[100px]">
        <Link to={`/activities/${cardData.id}`}>
          <CardInfoImage imgPath={cardData.image} />
        </Link>
      </div>
      <CardInfoProgress name={cardData.name} progress={cardData.progress} />
    </div>
  );
}
