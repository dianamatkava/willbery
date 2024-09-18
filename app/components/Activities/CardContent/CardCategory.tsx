import ProgressBar from "../../ui-elements/ProgressBar";
import { useState } from "react";
import Accordion from "../../ui-elements/Accordion";
import Circle from "../../icons/Circle";
import React from "react";

// eslint-disable-next-line react/prop-types
export default function CardCategory({
  name,
  progress,
  children = null,
}: {
  children?: React.ReactNode;
  name: string;
  progress: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const hasChildren = React.Children.count(children) > 0;

  return (
    <div className="w-full pb-2">
      <div className="flex w-full justify-between items-center px-1 pl-2">
        {hasChildren ? (
          <Accordion expanded={expanded} setExpanded={setExpanded}>
            <div className="[font-family:'Roboto-Medium',Helvetica] font-semibold text-black text-[10px] tracking-[0] leading-[normal] cursor-pointer">
              {name}
            </div>
          </Accordion>
        ) : (
          <>
            <Circle color="#5A5A5A" className="cursor-pointer" />
            <div className="[font-family:'Roboto-Medium',Helvetica] font-semibold text-black text-[10px] tracking-[0] leading-[normal] cursor-pointer">
              {name}
            </div>
          </>
        )}
        <div className="flex items-center justify-between">
          <ProgressBar
            progress={progress}
            color="bg-green-500"
            height="h-2"
            className="w-[60px]"
          />
        </div>
      </div>
      <div>{expanded ? children : null}</div>
    </div>
  );
}
