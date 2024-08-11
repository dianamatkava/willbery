import React from 'react';
import { Input } from '@nextui-org/react';


type Props = {
};

const Form: React.FC<Props> = () => {
  return (
    <div className="flex w-full flex-wrap justify-center">
      <Input
        type="email"
        size='sm'
        label="Enter your email"
        variant="bordered"
        radius='md'
        className="max-w-xs m-3"
        classNames={{
          inputWrapper: "group-data-[focus-visible=true]:ring-0 group-data-[focus-visible=true]:ring-offset-0"
        }}
        endContent={
          <div className="flex items-center h-9">
            <span className="text-default-400 text-sm">@gmail.com</span>
          </div>
        }
      />
    </div>
  );
};

export default Form;