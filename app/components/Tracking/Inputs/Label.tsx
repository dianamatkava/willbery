import { GoInfo } from "react-icons/go";

export default function Label({ label }: { label: string }) {
  return (
    <div className="flex flex-row items-start justify-start gap-1">
      <div className="leading-1 font-semibold w-full">{label}</div>
      <div className="w-fit h-2 overflow-hidden shrink-0">
        <GoInfo size={8} />
      </div>
    </div>
  );
}
