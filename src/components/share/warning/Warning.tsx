import React from "react";

interface IWarningItemProps {
  name: string;
  description: string;
  image: string;
}

const Warning: React.FC<IWarningItemProps> = ({ name, description, image }) => {
  return (
    <div className="flex bg-black rounded justify-center items-center pb-3 cursor-pointer">
      <div className="p-5 w-[180px] flex justify-center items-center bg-[#FFC061] rounded m-3">
        <img className="" src={image} alt="" />
      </div>
      <div className="text-sm pt-4">
        <h1 className="border-b border-b-white">{name}</h1>
        <p className="mt-3">{description}</p>
      </div>
    </div>
  );
};

export default Warning;
