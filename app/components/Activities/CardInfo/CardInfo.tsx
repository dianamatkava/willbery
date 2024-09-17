import CardInfoHeader from "./CardInfoHeader";
import CardInfoImage from "./CardInfoImage";
import CardInfoProgress from "./CardInfoProgress";

export default function CardInfo() {
  return (
    <div className="w-full flex flex-col items-center gap-2 max-h-[70px]">
      <CardInfoHeader />
      <CardInfoImage />
      <CardInfoProgress />
    </div>
  );
}
