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
  const [expanded, setExpanded] = useState(true);
  const hasChildren = React.Children.count(children) > 0;

  return (
    <div className="w-full py-1">
      <div className="flex w-full items-center px-1 pl-2">
        <div className="flex-grow">
          {hasChildren ? (
            <Accordion
              expanded={expanded}
              setExpanded={setExpanded}
              hidden={true}
            >
              <div className="[font-family:'Roboto-Medium',Helvetica] font-semibold text-black text-[10px] tracking-[0] leading-[normal] cursor-pointer flex-1">
                {name}
              </div>
            </Accordion>
          ) : (
            <div className="flex items-center gap-1">
              <Circle color="#9ca3af" className="cursor-pointer" />
              <div className="[font-family:'Roboto-Medium',Helvetica] font-semibold text-black text-[10px] tracking-[0] leading-[normal] cursor-pointer flex-1">
                {name}
              </div>
            </div>
          )}
        </div>
        <div className="flex items-center">
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
