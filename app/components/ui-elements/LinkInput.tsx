import { LuLink } from "react-icons/lu";

export default function LinkInputComponent({
  className,
  value,
  name,
  placeholder = "Add a source link",
  onChange,
  onBlur,
  onKeyDown,
}: {
  className?: string;
  value: string;
  name: string;
  placeholder?: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}) {
  return (
    <div
      className={` ${className} w-full shadow-[1px_6px_4px_rgba(0,_0,_0,_0.1)] rounded bg-white border-gainsboro border-[0.8px] border-solid box-border flex flex-row items-center justify-center p-2 text-left text-sm text-black`}
    >
      <div className="flex-1 rounded-md rounded-b-none flex flex-row items-center justify-start gap-2">
        <LuLink size={14} />
        <div className="flex font-medium gap-2">
          <span>
            <span>|</span>
          </span>
          <input
            type="text"
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur}
            onKeyDown={onKeyDown}
          />
        </div>
      </div>
    </div>
  );
}
