import CardInfoHeader from "./CardInfoHeader";
import CardInfoImage from "./CardInfoImage";
import CardInfoProgress from "./CardInfoProgress";

export default function CardInfo({ imgPath }: { imgPath: string }) {
  //+
  return (
    <div className="w-full flex flex-col items-center gap-2 max-h-[145px]">
      <CardInfoHeader />
      <CardInfoImage imgPath={imgPath} />
      <CardInfoProgress />
    </div>
  );
}
