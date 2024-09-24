import Circle from "~/components/icons/Circle";
import ProgressBar from "../../ui-elements/ProgressBar";
import { useState } from "react";
import Accordion from "../../ui-elements/Accordion";

export default function CardGroup({
  children,
  name,
  progress,
}: {
  children: React.ReactNode;
  name: string;
  progress: object;
}) {
  const [expanded, setExpanded] = useState(true);
  return (
    <div className="w-full gap-1 mt-1">
      <div className="flex w-full items-center justify-between px-1">
        <div className="flex items-center w-full">
          {children ? (
            <Accordion expanded={expanded} setExpanded={setExpanded}>
              <div className="font-semibold text-[#777777] text-xxxs cursor-pointer">
                {name}
              </div>
            </Accordion>
          ) : (
            <div className="flex items-center gap-1 pl-2">
              <Circle color="#5A5A5A" className="cursor-pointer" />
              <div className="font-semibold text-[#777777] text-xxxs cursor-pointer">
                {name}
              </div>
            </div>
          )}
          {/* <div className="border-b-[0.4px] border-solid border-[#eaeaea] w-fit"></div> */}
        </div>
        <ProgressBar
          progress={progress}
          height="h-2"
          textColor="#777777"
          className="w-[50px]"
        />
      </div>
      <div>{expanded ? children : null}</div>
    </div>
  );
}
