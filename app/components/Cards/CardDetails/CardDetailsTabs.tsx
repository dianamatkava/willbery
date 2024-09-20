import { useState } from "react";

export function CardDetailsTabs({ cardTabs }: { cardTabs: () => string[] }) {
  const allCardTabs = ["All", ...cardTabs()];
  const [selectedTab, setSelectedTab] = useState<string>("All");

  return (
    <div className="self-stretch rounded-lg bg-gainsboro-100 flex flex-col items-start justify-start p-1 text-center text-xs">
      <div className="flex flex-row items-center justify-start w-full">
        <div className="flex flex-row items-center justify-start w-full gap-3">
          {allCardTabs.map((tab) => (
            <div
              key={tab}
              onClick={() => setSelectedTab(tab)}
              onKeyDown={(e) => e.key === "Enter" && setSelectedTab(tab)}
              tabIndex={0}
              role="tab"
              aria-selected={selectedTab === tab}
              className={`w-fit rounded-lg h-6 flex items-center justify-center px-2 ${
                selectedTab === tab
                  ? "bg-white shadow-[0px_2px_16px_rgba(0,_0,_0,_0.08)]"
                  : "bg-transparent"
              }`}
            >
              <b className="tracking-1 leading-5 flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap cursor-pointer">
                {tab}
              </b>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
