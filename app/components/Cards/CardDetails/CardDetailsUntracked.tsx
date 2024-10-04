import { IoMdMore } from "react-icons/io";
import CreatableSelectInput from "../../ui-elements/form/CreatableSelectInput";
import TagComponent from "../../ui-elements/TagComponent";
import { IoIosPlay } from "react-icons/io";
import { LuTag } from "react-icons/lu";

export default function CardDetailsUntracked({
  data,
  tags,
  onSelectTag,
  tagStyle,
  onEditTracking,
}: {
  data: object;
  tags: string[];
  onSelectTag: (tag: string) => void;
  tagStyle?: string;
  onEditTracking: () => void;
}) {
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
      <div className="flex items-center justify-center gap-0 text-gray-300 hover:text-gray-500">
        <IoMdMore size={18} className="cursor-pointer" />
      </div>
    </div>
  );
}
