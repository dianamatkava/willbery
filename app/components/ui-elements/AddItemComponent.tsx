import { IoIosAdd } from "react-icons/io";

export default function AddItemComponent({
  displayText = "Add Item",
  enabled = true,
  className,
  onClick,
}: {
  displayText?: string;
  enabled?: boolean;
  onClick: () => void;
  className?: string;
}) {
  if (!enabled) return null;
  return (
    <div
      className={`${className} w-full flex flex-row items-center justify-start p-0 box-border gap-[5px] text-center text-gray-300 text-xxs mt-[-5px] hover:text-[#3992FF] cursor-pointer`}
    >
      <div className="overflow-hidden shrink-0">
        <IoIosAdd size={18} />
      </div>
      <div className="font-semibold">{displayText}</div>
    </div>
  );
}
