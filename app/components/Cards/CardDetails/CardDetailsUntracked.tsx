import { IoMdMore } from "react-icons/io";
import CreatableSelectInput from "../../ui-elements/SelectInput";
import TagComponent from "../../ui-elements/TagComponent";
import { IoIosPlay } from "react-icons/io";
import { LuTag } from "react-icons/lu";

export default function CardDetailsUntracked({
  data,
  tags,
  onSelectTag,
  tagStyle,
}: {
  data: object;
  tags: string[];
  onSelectTag: (tag: string) => void;
  tagStyle?: string;
}) {
  return (
    <div className="relative w-full flex flex-row items-center justify-end gap-1 text-xxs">
      <div className="flex flex-row items-center justify-start gap-2">
        <div className="flex flex-row items-center justify-start gap-2">
          <CreatableSelectInput
            value={data.tag}
            options={tags}
            onSelect={onSelectTag}
          >
            {data.tag ? (
              <TagComponent value={data.tag} className={tagStyle} />
            ) : (
              <LuTag size={14} />
            )}
          </CreatableSelectInput>
        </div>
        <div className="rounded-md bg-black flex flex-row items-center justify-center text-xxs px-1 py-[0.5px] text-white">
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
