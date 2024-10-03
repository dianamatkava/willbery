import { FiClock } from "react-icons/fi";
import { CgInfinity } from "react-icons/cg";
import { useState, useRef } from "react";
import { FieldProps } from "formik";
import Label from "./Label";

export default function DurationInput({
  label,
  initialEmpty = false,
  field,
}: {
  label: string;
  placeholder?: string;
  initialEmpty?: boolean;
  field?: FieldProps;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isUnlimited, setIsUnlimited] = useState(initialEmpty);

  const focusInput = () => {
    setIsUnlimited(false);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setIsUnlimited(true);
    }
  };

  return (
    <div className="w-[110px] flex flex-col items-start justify-start gap-2">
      <Label label={label} />
      {!isUnlimited ? (
        <div className="w-[110px] rounded-md border-gray-200 hover:border-gray-300 border-[1px] border-solid box-border h-[30px] overflow-hidden shrink-0 flex flex-row items-center justify-between p-space-200 text-xxs">
          <input
            ref={inputRef}
            onBlur={(e) => handleInputBlur(e)}
            type="number"
            placeholder="2"
            min={0}
            className="w-full h-4 remove-number-styles cursor-pointer"
            {...field}
          />

          <div className="w-fit flex flex-row items-center justify-center gap-1">
            <span className="flex flex-row items-start text-xxs space-y-2 text-gray-400">
              <span className="font-semibold px-1"> / </span> hours
            </span>
            <FiClock size={12} />
          </div>
        </div>
      ) : (
        <div
          role="button"
          tabIndex={0}
          onClick={focusInput}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              focusInput();
            }
          }}
          className="w-[110px] rounded-md border-gray-200 hover:border-gray-300 border-[1px] border-solid box-border h-[30px] overflow-hidden shrink-0 flex flex-row items-center justify-between p-space-200 text-xxs"
        >
          <div className="leading-1 font-medium text-gray-400">Unlimited</div>
          <div className="w-4 h-4 overflow-hidden shrink-0">
            <CgInfinity size={14} />
          </div>
        </div>
      )}
    </div>
  );
}
