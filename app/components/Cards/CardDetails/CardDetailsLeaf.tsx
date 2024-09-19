export function CardDetailsLeaf() {
  return (
    <div className="w-[355px] h-[15px] flex flex-row items-center justify-between py-0 pl-10 pr-0 box-border">
      <div className="w-[146px] h-[15px] flex flex-row items-center justify-start gap-1">
        <div className="w-[18px] h-[20.3px]">
          <img
            className=" max-w-full overflow-hidden max-h-full"
            alt=""
            src="icon.svg"
          />
        </div>
        <div className="w-[134.1px] font-medium flex items-center h-[14.5px] shrink-0">
          Practice
        </div>
      </div>
      <div className="w-[189.1px] flex flex-row items-center justify-end gap-[5px] text-center text-4xs text-darkgray-200">
        <div className="rounded-md bg-gray-300 border-darkgray-200 border-[1px] border-solid box-border h-3.5 flex flex-row items-center justify-center py-0.5 px-1.5">
          <div className="leading-[100%] font-medium">Practice</div>
        </div>
        <div className="w-[75px] flex flex-row items-center justify-start text-right text-5xs text-gray-200">
          <div className="flex flex-row items-center justify-end">
            <div className="flex flex-row items-center justify-start gap-1">
              <div className="w-[22px] font-semibold flex items-center h-[9px] shrink-0 z-[0]">
                12%
              </div>
              <div className="w-[50px] rounded-3xs bg-whitesmoke-100 h-[5px] z-[1]" />
              <div className="w-3 left-[26px] rounded-3xs bg-green h-[5px] z-[2]" />
            </div>
          </div>
        </div>
        <img
          className="w-[15px] h-[15px]"
          alt=""
          src="CardSubItemAddGroup.svg"
        />
        <img className="w-4 h-4" alt="" src="more_horiz.svg" />
      </div>
    </div>
  );
}
