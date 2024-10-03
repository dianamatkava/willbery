import React from "react";

export default function DoubleInput({
  children,
}: {
  children: React.ReactNode;
}) {
  const [Label, FirstInput, SecondInput] = React.Children.toArray(children);

  return (
    <div className="w-[110px] flex flex-col items-start justify-start gap-2">
      {Label}
      <div className="self-stretch rounded-md bg-grey-100 border-grey-200 hover:border-gray-300 border-[1px] border-solid box-border h-[30px] overflow-hidden shrink-0 flex flex-row justify-between p-space-200 text-xxs items-center">
        {FirstInput}
        <span className="flex flex-col items-start text-xxs space-y-2 text-gray-400">
          {" "}
          times /{" "}
        </span>
        {SecondInput}
      </div>
    </div>
  );
}
