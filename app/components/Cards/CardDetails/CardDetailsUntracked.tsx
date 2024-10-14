import { useState } from "react";
import { IoMdMore } from "react-icons/io";
import CreatableSelectInput from "../../ui-elements/form/CreatableSelectInput";
import TagComponent from "../../ui-elements/TagComponent";
import { IoIosPlay } from "react-icons/io";
import InlineFormControl from "~/components/ui-elements/form/InlineFormControl";
import ContextMenuItem from "~/components/ui-elements/form/ContextMenuItem";
import { LuTag, LuDelete, LuPlus } from "react-icons/lu";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { AiOutlineLink } from "react-icons/ai";

export default function CardDetailsUntracked({
  data,
  tags,
  onSelectTag,
  tagStyle,
  onEditTracking,
  onDelete,
}: {
  data: object;
  tags: string[];
  onSelectTag: (tag: string) => void;
  tagStyle?: string;
  onEditTracking: () => void;
  onDelete: () => void;
}) {
  const [expandedMenu, setExpandedMenu] = useState(false);
  return (
    <div className="relative w-full flex flex-row items-center justify-end gap-1 text-xxs">
      <div className="flex flex-row items-center justify-start gap-2">
        <div className="flex flex-row items-center justify-start gap-2">
          <CreatableSelectInput
            value={data.tag?.name}
            options={tags}
            onSelect={onSelectTag}
          >
            {data.tag?.name ? (
              <TagComponent value={data.tag.name} className={tagStyle} />
            ) : (
              <LuTag size={14} />
            )}
          </CreatableSelectInput>
        </div>
        <div
          role="button"
          tabIndex={0}
          onClick={onEditTracking}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onEditTracking();
            }
          }}
          className="rounded-md bg-black flex flex-row items-center justify-center text-xxs h-full px-1.5 text-white"
        >
          <div className="leading-[100%] font-medium">Track</div>
          <IoIosPlay size={14} />
        </div>
      </div>
      <div
        role="button"
        tabIndex={0}
        onKeyDown={() => setExpandedMenu((expandedMenu) => !expandedMenu)}
        onClick={() => setExpandedMenu((expandedMenu) => !expandedMenu)}
        className="flex items-center justify-center gap-0 text-gray-300 hover:text-gray-500"
      >
        <IoMdMore size={18} className="cursor-pointer" />
        {expandedMenu && (
          <InlineFormControl
            className="absolute top-[-10px] right-[-10px] z-10 min-w-[180px]"
            setIsSelected={setExpandedMenu}
            isSelected={expandedMenu}
          >
            <div
              className="shadow-[1px_2px_4px_rgba(0,_0,_0,_0.1)] rounded bg-white border-gainsboro border-[0.8px] border-solid box-border
flex flex-col items-start justify-start py-2 px-0 gap-1 text-left text-xs text-dimgray"
            >
              <ContextMenuItem
                name="Add Tracking"
                onClick={() => console.log("Add Tracking")}
                className="border-whitesmoke border-b-[0.5px] border-solid rounded-none"
              >
                <LuPlus size={12} />
              </ContextMenuItem>
              <ContextMenuItem
                name="Change Link"
                onClick={() => console.log("Change Link")}
                className="border-whitesmoke border-b-[0.5px] border-solid rounded-none"
              >
                <AiOutlineLink size={13} />
              </ContextMenuItem>
              <ContextMenuItem
                name="Duplicate"
                onClick={() => console.log("Duplicate")}
              >
                <HiOutlineDocumentDuplicate size={12} />
              </ContextMenuItem>
              <ContextMenuItem name="Delete" onClick={onDelete}>
                <LuDelete size={12} />
              </ContextMenuItem>
            </div>
          </InlineFormControl>
        )}
      </div>
    </div>
  );
}
