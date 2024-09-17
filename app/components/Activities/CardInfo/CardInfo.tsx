import CardInfoHeader from "./CardInfoHeader";
import CardInfoImage from "./CardInfoImage";
import CardInfoProgress from "./CardInfoProgress";

export default function CardInfo({ imgPath }: { imgPath: string }) {
  //+
  return (
    <div className="w-full flex flex-col items-center max-h-[150px]">
      {/* <CardInfoHeader /> */}
      <div className="w-full h-[100px]">
        <CardInfoImage imgPath={imgPath} />
      </div>
      <CardInfoProgress />
    </div>
  );
}
