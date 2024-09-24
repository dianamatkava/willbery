import { useState } from "react";
import { PiDotsSixVertical } from "react-icons/pi";
import ContentEditable from "react-contenteditable";
import Fuse from "fuse.js";

export default function CreatableSelectInput({
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

  const onSearch = (q: string) => {
    if (q.trim() === "") {
      setOptionsList(options);
      return;
    }
    const fuse = new Fuse(options, {
      keys: ["name"],
      includeScore: true,
      isCaseSensitive: false,
    });
    const foundOptions = fuse.search(q).map((result) => result.item);
    setOptionsList(foundOptions);
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
          <SelectHeader
            value={value}
            onSearch={onSearch}
            onCreate={onSelectOption}
          >
            {children}
          </SelectHeader>
          <SelectComponent
            value={value}
            options={optionsList}
            onSelect={onSelectOption}
          />
        </div>
      )}
    </>
  );
}

export function SelectComponent({
  value,
  options,
  onSelect,
}: {
  value: string;
  options: string[];
  onSelect: (e, option: string) => void;
}) {
  return (
    <div className="w-fullmax-w-[200px] flex flex-col items-start justify-start py-1 pb-1 px-2 gap-1.5 text-xxs text-gray-700">
      {options ? (
        <div>
          <div className="leading-[100%] font-medium pb-1">
            Select an option or create one
          </div>
          <div className="flex flex-col items-start justify-start gap-0 text-xxs">
            {options.map(
              (option) =>
                value !== option && (
                  <div
                    key={option}
                    role="button"
                    tabIndex={0}
                    onClick={(element) => onSelect(element, option)}
                    onKeyDown={(element) => {
                      if (element.key === "Enter") {
                        onSelect(element, option);
                      }
                    }}
                    className="w-full flex flex-row items-center justify-start py-1 px-0 box-border gap-2 font-medium hover:bg-gray-200"
                  >
                    <PiDotsSixVertical size={12} />
                    <div className="flex flex-col items-start justify-start">
                      <div className="rounded bg-gray-100 border-gray-200 border-[0.5px] border-solid box-border h-3.5 flex flex-row items-center justify-center py-1 px-1.5">
                        <div className="relative leading-[100%] font-medium">
                          {option}
                        </div>
                      </div>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-start justify-start gap-0 text-xxs">
          <div className="leading-[100%] font-medium">
            No options found. Please create one.
          </div>
        </div>
      )}
    </div>
  );
}

export function SelectHeader({
  value,
  onSearch,
  onCreate,
  children,
}: {
  value: string;
  onSearch: (q: string) => void;
  onCreate: (e, q: string) => void;
  children?: React.ReactNode;
}) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    onSearch(value);
  };

  return (
    <div className="self-stretch rounded-md rounded-b-none bg-gray-100 border-gray-300 border-b-[0.5px] border-solid box-border flex flex-row items-center justify-start py-1 px-2 gap-1">
      {children}
      <div className="leading-[100%] font-medium text-xxs text-black border-b-[0.5px] border-solid border-gray-300">
        <ContentEditable
          html={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onCreate(e, e.target.innerText);
              e.preventDefault();
            }
          }}
          onBlur={() => setSearchQuery("")}
          className="editable-content editable-lined"
          title={searchQuery}
        />
      </div>
    </div>
  );
}
