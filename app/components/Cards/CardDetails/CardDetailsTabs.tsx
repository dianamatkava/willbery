export function CardDetailsTabs() {
  return (
    <div className="self-stretch rounded-lg bg-gainsboro-100 flex flex-col items-start justify-start p-1 text-center text-sm">
      <div className="flex flex-row items-center justify-between w-full">
        <div className="w-full">
          <div className="tracking-1 leading-5 font-medium flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap cursor-pointer">
            All
          </div>
        </div>
        <div className="w-full shadow-[0px_2px_16px_rgba(0,_0,_0,_0.08)] rounded-[100px] bg-white h-6 flex items-center justify-center">
          <b className="tracking-1 leading-5 flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap cursor-pointer">
            Course
          </b>
        </div>
        <div className="w-full">
          <div className="tracking-1 leading-5 font-medium flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap cursor-pointer">
            Practice
          </div>
        </div>
        <div className="w-full">
          <div className="tracking-1 leading-5 font-medium flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap cursor-pointer">
            Books
          </div>
        </div>
        <div className="w-full">
          <div className="tracking-1 leading-5 font-medium flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap cursor-pointer">
            Projects
          </div>
        </div>
      </div>
    </div>
  );
}
