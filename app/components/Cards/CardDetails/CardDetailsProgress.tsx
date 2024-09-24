import { IoMdMore } from "react-icons/io";
import ProgressBar from "../../ui-elements/ProgressBar";
import Counter from "../../ui-elements/Counter";
import CreatableSelectInput from "../../ui-elements/SelectInput";
import TagComponent from "../../ui-elements/TagComponent";

export default function CardDetailsProgress({
  onSelect,
  progress,
  tags,
  className,
  tagStyle = "text-xxxs text-gray-500 border-gainsboro-400 border-[0.8px] border-solid box-border py-1 px-1",
  tag,
}: {
  onSelect: (option: string) => void;
  tag: string;
  tags: string[];
  progress: number;
  className?: string;
  tagStyle?: string;
}) {
  return (
    <div className="w-full flex flex-row items-start justify-end gap-1 text-xxs">
      <div className="relative flex flex-row items-center justify-start gap-1">
        <CreatableSelectInput value={tag} options={tags} onSelect={onSelect}>
          <TagComponent value={tag} className={tagStyle} />
        </CreatableSelectInput>
        <div className="w-fell flex flex-row items-center justify-end text-right text-xs gap-1">
          <div className="w-full flex-1 flex flex-row items-center justify-center">
            <ProgressBar
              progress={progress?.progressPercent}
              height={"h-2"}
              className={"w-[50px] font-semibold text-xxs"}
            />
          </div>
        </div>
        <div className="text-xxs gap-1 font-medium flex flex-row items-center px-1 py-0.5 justify-center w-[60px] cursor-pointer">
          <Counter
            initial={progress?.progressSpent}
            total={progress?.progressTotal}
          />
        </div>
        <div className="shadow-[1px_1px_1px_rgba(0,_0,_0,_0.15)] text-xxxs font-medium rounded-md bg-gainsboro-100 flex flex-row items-center justify-center px-1 py-0.5 w-[30px] cursor-pointer">
          4h/w
        </div>
      </div>
      <div className="flex items-center justify-center gap-0 text-gray-300 hover:text-gray-500">
        <IoMdMore size={18} className="cursor-pointer" />
      </div>
    </div>
  );
}
