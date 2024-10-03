import ProgressBar from "~/components/ui-elements/ProgressBar";

export default function CardInfoProgress({
  name,
  progress,
}: {
  name: string;
  progress: number;
}) {
  return (
    <div className="flex w-full items-center justify-between p-1 border-b-[0.5px] border-solid border-[#eaeaea]">
      <div className="font-semibold text-black text-sm">{name}</div>
      {progress && (
        <div className="pt-[1px] gap-1 flex items-center">
          <ProgressBar progress={progress} height="h-2" className="w-[60px]" />
        </div>
      )}
    </div>
  );
}
