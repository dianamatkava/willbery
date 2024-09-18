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
  progress: number;
}) {
  const [expanded, setExpanded] = useState(true);
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between p-1">
        <div className="flex items-center w-full">
          {children ? (
            <Accordion expanded={expanded} setExpanded={setExpanded}>
              <div className="font-semibold text-[#777777] text-[8px] cursor-pointer">
                {name}
              </div>
            </Accordion>
          ) : (
            <>
              <Circle color="#5A5A5A" className="cursor-pointer" />
              <div className="font-semibold text-[#777777] text-[8px] cursor-pointer">
                {name}
              </div>
            </>
          )}

          <div className="border-b-[0.4px] border-solid border-[#eaeaea] w-full"></div>
        </div>
        <ProgressBar
          progress={progress}
          color="bg-green-500"
          height="h-2"
          className="w-[60px]"
        />
      </div>
      <div>{expanded ? children : null}</div>
    </div>
  );
}
