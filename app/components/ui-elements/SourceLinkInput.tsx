import { useState } from "react";
import { PiDotsSixVertical } from "react-icons/pi";
import ContentEditable from "react-contenteditable";
import Fuse from "fuse.js";

export default function SourceLinkInput({
  value,
  options,
  onSelect,
  children,
}: {
  value: string;
  options: string[];
  onSelect: (option: string) => void;
  children?: React.ReactNode;
}) {
  const [isSelected, setIsSelected] = useState(false);
  const [optionsList, setOptionsList] = useState(options);

  const handleBlur = (event: React.FocusEvent) => {
    const currentTarget = event.currentTarget;
    setTimeout(() => {
      if (
        document.activeElement &&
        !currentTarget.contains(document.activeElement)
      ) {
        setIsSelected(false);
      }
    }, 0);
  };

  const onSelectOption = (e, option: string) => {
    onSelect(option);
    setOptionsList(options);
    e.currentTarget.blur();
  };

  return (
    <>
      {!isSelected ? (
        <div
          role="button"
          tabIndex={0}
          className={`rounded-md flex flex-row items-center justify-center`}
          onClick={() => setIsSelected(!isSelected)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setIsSelected(!isSelected);
            }
          }}
        >
          {children}
        </div>
      ) : (
        <div
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setIsSelected(!isSelected);
            }
          }}
          onBlur={(e) => handleBlur(e)}
          className={`absolute right-11 top-[-3px] w-full rounded-md z-10 
            shadow-[1px_2px_4px_rgba(0,_0,_0,_0.1)] bg-white 
            border-gainsboro border-[0.8px] border-solid box-border 
            flex flex-col items-start justify-start gap-1.5 text-left text-xsxs ${
              isSelected ? "flex flex-col" : "hidden"
            }`}
        >
          {children}
        </div>
      )}
    </>
  );
}
