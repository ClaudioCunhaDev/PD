import React from "react";

interface IActivateUnitItemProps {
  branch: string;
  number: number;
  name: string;
  value: number;
}

const ActiveUnitItem: React.FC<IActivateUnitItemProps> = ({
  branch,
  number,
  name,
  value,
}) => {
  return (
    <div>
      <div className="h-[48px] w-full border-2 rounded-lg bg-black flex justify-between items-center">
        <div className="ml-3 h-[50%] w-[15%] bg-blue-500 flex justify-center items-center rounded-lg text-xs">
          {branch}
        </div>
        <div className="h-[50%] w-[15%] bg-blue-500 flex justify-center items-center rounded-lg text-xs">
          {`x-${number}`}
        </div>
        <h1 className="w-[50%]">${name}</h1>
        <div className="flex gap-5">
          <div className="w-[20px] mr-3 border bg-darkgray-500 flex justify-center items-center rounded-full text-xs">
            {value}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveUnitItem;
