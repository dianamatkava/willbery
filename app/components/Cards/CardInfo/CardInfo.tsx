// import CardInfoHeader from "./CardInfoHeader";
import CardInfoImage from "./CardInfoImage";
import CardInfoProgress from "./CardInfoProgress";

export default function CardInfo({
  params,
  toggleCardDetails,
}: {
  params: object;
  toggleCardDetails: () => void;
}) {
  //+
  return (
    <div className="w-full flex flex-col items-center max-h-[150px] mb-2">
      {/* <CardInfoHeader /> */}
      <div className="w-full h-[100px]">
        <CardInfoImage
          id={params.id}
          imgPath={params.image}
          toggleCardDetails={toggleCardDetails}
        />
      </div>
      <CardInfoProgress name={params.name} progress={params.progress} />
    </div>
  );
}
