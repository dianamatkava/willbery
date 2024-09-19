export function CardDetailsGroup({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-start justify-start">
      <div className="w-[355px] flex flex-col items-start justify-start gap-[15px]">
        <div className="w-[355px] h-[15px] flex flex-row items-center justify-between text-darkgray-200">
          <div className="w-[90px] h-[15.5px]">
            <img className="w-3.5 h-[15px]" alt="" src="arrow_drop_down.svg" />
            <div className="font-semibold whitespace-pre-wrap">
              Untitled list
            </div>
          </div>
          <div className="w-[260px] flex flex-row items-center justify-start gap-[5px] text-3xs text-gray-100">
            <div className="flex-1 flex flex-row items-center justify-center gap-[3px]">
              <div className="font-semibold">55%</div>
              <div className="w-[197px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                <div className="self-stretch border-whitesmoke-200 border-t-[2px] border-solid box-border h-0.5" />
                <div className="w-[89.2px] border-darkseagreen border-t-[2px] border-solid box-border h-0.5" />
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
    </div>
  );
}
