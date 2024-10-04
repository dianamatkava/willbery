import { IoIosAdd } from "react-icons/io";

export default function AddItem({
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
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          onClick();
        }
      }}
      className={`${className} w-fit flex flex-row items-center justify-start p-0 box-border gap-[5px] text-center text-gray-300 text-xxs mt-[-5px] hover:text-[#3992FF] cursor-pointer`}
    >
      <div className="overflow-hidden shrink-0">
        <IoIosAdd size={18} />
      </div>
      <div className="font-semibold">{displayText}</div>
    </div>
  );
}
