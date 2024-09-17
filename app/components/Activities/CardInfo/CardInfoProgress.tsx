import ProgressBar from "../../ui-elements//ProgressBar";

export default function CardInfoProgress() {
  return (
    <div className="flex w-full items-center justify-between p-1 border-b-[0.5px] border-solid border-[#eaeaea]">
      <div className="[font-family:'Roboto-Medium',Helvetica] font-semibold text-black text-sm">
        Cloud Platforms
      </div>
      <div className="pt-[1px] gap-1 flex items-center">
        <ProgressBar
          progress={60}
          color="bg-green-500"
          height="h-2"
          className="w-[60px]"
        />
      </div>
    </div>
  );
}
