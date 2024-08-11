import React from "react";
import {StarIcon} from "@heroicons/react/16/solid";

export default function Rating ({width, height, count=5}) {
  return (
    <div className={'flex space-x-1.5'}>
      {Array.from({length: count}, (_, index) => (
        <StarIcon key={index} width={18} height={18} className="text-highlight"/>
      ))}
    </div>
  );
}