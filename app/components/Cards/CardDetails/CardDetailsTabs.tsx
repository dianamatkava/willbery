export function CardDetailsTabs() {
  return (
    <div className="self-stretch rounded-sm bg-text-brand-on-brand flex flex-col items-start justify-start py-[3px] px-[5px] text-center text-xs font-sf-pro">
      <div className="w-[339px] rounded-sm h-[31px] overflow-hidden shrink-0 flex flex-row items-center justify-center">
        <div className="flex flex-row items-center justify-center">
          <div className="w-[77px] h-[32.5px]">
            <div className=" tracking-[-0.23px] leading-[20px] font-medium flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap w-12 h-[32.5px]">
              All
            </div>
          </div>
          <div className="w-[77px] shadow-[0px_2px_16px_rgba(0,_0,_0,_0.08)] rounded-[100px] bg-miscellaneous-floating-tab-pill-fill h-[32.5px] text-text-brand-default">
            <b className=" tracking-[-0.23px] leading-[20px] flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap w-12 h-[32.5px]">
              Course
            </b>
          </div>
          <div className="w-[77px] h-[32.5px]">
            <div className=" tracking-[-0.23px] leading-[20px] font-medium flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap w-12 h-[32.5px]">
              Practice
            </div>
          </div>
          <div className="w-[77px] h-[32.5px]">
            <div className=" tracking-[-0.23px] leading-[20px] font-medium flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap w-12 h-[32.5px]">
              Books
            </div>
          </div>
          <div className="w-[77px] h-[32.5px]">
            <div className=" tracking-[-0.23px] leading-[20px] font-medium flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap w-12 h-[32.5px]">
              Projects
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
