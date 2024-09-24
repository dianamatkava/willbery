import ProgressBar from "../../ui-elements/ProgressBar";
import { useState } from "react";
import Accordion from "../../ui-elements/Accordion";
import React from "react";
import { AiOutlineLink } from "react-icons/ai";
import CardSourceLink from "../../ui-elements/CardSourceLink";

export default function CardNode({
  children = null,
  node,
}: {
  children?: React.ReactNode;
  node: object;
}) {
  const [expanded, setExpanded] = useState(true);
  const hasChildren = React.Children.count(children) > 0;

  return (
    <div className="w-full mt-1">
      <div className="flex w-full items-center px-1 pl-2 pb-1">
        <div className="flex-grow">
          {hasChildren ? (
            <Accordion
              expanded={expanded}
              setExpanded={setExpanded}
              hidden={true}
            >
              <CardSourceLink source={node.link}>{node.name}</CardSourceLink>
            </Accordion>
          ) : (
            <div className="flex items-center gap-2">
              <div className="bg-gainsboro-100 w-4 h-4 flex items-center justify-center rounded-md shadow-[1px_1px_1px_rgba(0,_0,_0,_0.15)]">
                <AiOutlineLink size={12} />
              </div>
              <div className="font-semibold text-realblack text-xxs tracking-[0] leading-[normal] cursor-pointer flex-1">
                {node.name}
              </div>
            </div>
          )}
        </div>
        <ProgressBar
          progress={node.progress}
          color="bg-green-500"
          height="h-2"
          className="w-[50px]"
        />
      </div>
      <div>{expanded ? children : null}</div>
    </div>
  );
}
