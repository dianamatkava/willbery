import { FunctionComponent } from "react";
import { CardDetailsInfo } from "./CardDetailsInfo";
import { CardDetailsTabs } from "./CardDetailsTabs";
import { CardDetailsGroup } from "./CardDetailsGroup";
import { CardDetailsNode } from "./CardDetailsNode";
import { CardDetailsLeaf } from "./CardDetailsLeaf";

const CardDetails: FunctionComponent = () => {
  return (
    <div
      className="h-full flex-1 w-full rounded-sm rounded-tr-none rounded-b-none 
    border-[#d1d1d1] border-[0.5px] border-solid box-border flex flex-col items-start 
    justify-start p-4 mx-2 gap-5 text-left text-smi text-miscellaneous-floating-tab-text-unselected"
    >
      <CardDetailsInfo />
      <CardDetailsTabs />
      <CardDetailsGroup>
        <CardDetailsNode>
          <CardDetailsLeaf />
        </CardDetailsNode>
      </CardDetailsGroup>
    </div>
  );
};

export default CardDetails;
