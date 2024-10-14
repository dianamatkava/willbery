import { IoMdMore } from "react-icons/io";
import ProgressBar from "~/components/ui-elements/ProgressBar";
import Accordion from "~/components/ui-elements/Accordion";
import { useEffect, useRef, useState } from "react";
import AddItem from "~/components/ui-elements/AddItem";
import useStore from "~/stores/useStore";
import ContentEditable from "react-contenteditable";
import { useFetcher } from "@remix-run/react";
import { CardGroupInterface } from "~/interfaces/CardInterfaces";
import InlineFormControl from "~/components/ui-elements/form/InlineFormControl";
import ContextMenuItem from "~/components/ui-elements/form/ContextMenuItem";
import { LuDelete } from "react-icons/lu";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";

export function CardDetailsGroup({
  children,
  group,
  cardId,
}: {
  children: React.ReactNode;
  group: CardGroupInterface;
  cardId: string;
}) {
  const [expandedContent, setExpandedContent] = useState(true);
  const [expandedMenu, setExpandedMenu] = useState(false);
  const [groupName, setGroupName] = useState(group.name);
  const updateGroupName = useStore((state) => state.updateGroupName);
  const fetcher = useFetcher();

  const currentFieldValue = useRef("");

  useEffect(() => {
    setGroupName(group.name);
  }, [group]);

  const handleChange = (e) => {
    const value = e.target.value;
    currentFieldValue.current = value;
    setGroupName(value);
  };

  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      await e.target.blur();
    }
  };

  const handleBlur = async () => {
    if (currentFieldValue.current && currentFieldValue.current !== groupName) {
      updateGroupName(cardId, group._id.toString(), currentFieldValue.current);

      const formData = new FormData();
      formData.append("name", currentFieldValue.current);
      await fetcher.submit(formData, {
        method: "put",
        action: `/activities/${cardId}?update=group&groupId=${group._id.toString()}`,
      });
    }
  };

  const onAddItem = async () => {
    await fetcher.submit(new FormData(), {
      method: "post",
      action: `/activities/${cardId}?create=node&groupId=${group._id.toString()}`,
    });
  };

  const onDelete = async () => {
    await fetcher.submit(new FormData(), {
      method: "delete",
      action: `/activities/${cardId}?delete=group&groupId=${group._id.toString()}`,
    });
  };

  return (
    <div className="flex w-full flex-col items-start justify-start">
      <div className="w-full flex flex-col items-start justify-start gap-4">
        <div className="w-full flex flex-row items-center justify-between text-darkgray-200">
          <div className="w-full flex flex-row items-center justify-start gap-1">
            <Accordion
              expanded={expandedContent}
              setExpanded={setExpandedContent}
            />
            <div className="font-semibold text-[#777777] text-xxxs cursor-pointer">
              <h1 className="font-semibold whitespace-pre-wrap text-xsm">
                <ContentEditable
                  html={groupName || ""}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                  onBlur={handleBlur}
                  className="editable-content"
                />
              </h1>
            </div>
          </div>
          <div className="w-full flex flex-row items-center justify-end gap-1">
            {group.progress && (
              <ProgressBar
                progress={group.progress}
                height={"h-2"}
                className={"w-[60px] font-semibold text-xxs"}
              />
            )}
            <div
              role="button"
              tabIndex={0}
              onKeyDown={() => setExpandedMenu((expandedMenu) => !expandedMenu)}
              onClick={() => setExpandedMenu((expandedMenu) => !expandedMenu)}
              className="relative flex items-center justify-center gap-0 text-gray-300 hover:text-gray-500"
            >
              <IoMdMore size={18} className="cursor-pointer" />

              {expandedMenu && (
                <InlineFormControl
                  className="absolute top-[-10px] right-[-10px] z-10"
                  setIsSelected={setExpandedMenu}
                  isSelected={expandedMenu}
                >
                  <div
                    className="shadow-[1px_2px_4px_rgba(0,_0,_0,_0.1)] rounded bg-white border-gainsboro border-[0.8px] border-solid box-border
        flex flex-col items-start justify-start py-2 px-0 gap-1 text-left text-xs text-dimgray"
                  >
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
        </div>
        {expandedContent && (
          <div className="w-full flex flex-col items-start justify-start gap-4">
            {children}
            <AddItem
              onClick={onAddItem}
              displayText={`Add Item for ${groupName}`}
              className="pl-0"
            />
          </div>
        )}
      </div>
    </div>
  );
}
