// import CardInfoHeader from "./CardInfoHeader";
import CardInfoImage from "./CardInfoImage";
import CardInfoProgress from "./CardInfoProgress";

export default function CardInfo({ params }: { params: object }) {
  //+
  return (
    <div className="w-full flex flex-col items-center max-h-[150px] mb-2">
      {/* <CardInfoHeader /> */}
      <div className="w-full h-[100px]">
        <CardInfoImage imgPath={params.image} />
      </div>
      <CardInfoProgress name={params.skillArea} progress={params.progress} />
    </div>
  );
}
