export function CardDetailsNode({ children }: { children: React.ReactNode }) {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-2.5 text-xs">
      <div className="w-[355px] h-[17px] flex flex-row items-center justify-between py-0 pl-5 pr-0 box-border text-sm">
        <div className="w-[146px] h-[15px] flex flex-row items-center justify-start gap-1">
          <div className="w-[18px] h-[20.3px]">
            <img
              className="max-w-full overflow-hidden max-h-full"
              alt=""
              src="icon.svg"
            />
          </div>
          <div className="w-[134.1px] font-medium flex items-center h-[14.5px] shrink-0">
            AWS SkillBuilder
          </div>
        </div>
        <div className="w-[189.1px] flex flex-row items-start justify-end gap-[5px] text-3xs text-text-brand-default">
          <div className="flex flex-row items-center justify-start gap-[5px]">
            <img
              className="w-[16.7px] h-4 object-cover"
              alt=""
              src="Add Icon.png"
            />
            <div className="rounded-sm bg-gainsboro-100 flex flex-row items-center justify-start p-[3px]">
              <img
                className="w-[11px] h-2.5 overflow-hidden shrink-0"
                alt=""
                src="Link.svg"
              />
            </div>
            <div className="rounded-md bg-gray-300 border-darkslategray border-[1px] border-solid box-border h-[17px] flex flex-row items-center justify-center py-0.5 px-1.5">
              <div className="leading-[100%] font-medium">Course</div>
            </div>
            <div className="w-[75px] flex flex-row items-center justify-end text-right text-5xs text-gray-200">
              <div className="flex flex-row items-center justify-start gap-1">
                <div className="w-[17px] font-semibold flex items-center h-[9px] shrink-0 z-[0]">
                  46%
                </div>
                <div className="w-[50px] rounded-3xs bg-whitesmoke-100 h-[5px] z-[1]" />
                <div className="w-[25px] rounded-3xs bg-green h-[5px] z-[2]" />
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
      {children}
    </div>
  );
}
