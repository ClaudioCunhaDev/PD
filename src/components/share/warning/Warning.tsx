import React from "react";

interface IWarningItemProps {
  name: string;
  description: string;
  image: string;
}

const Warning: React.FC<IWarningItemProps> = ({name, description, image}) => {
  return (
    <div className="flex bg-black rounded justify-center items-center gap-3">
      <div className="h-[70px] w-[80%] flex justify-center items-center bg-[#FFC061] rounded ml-3">
        <img className="" src={image} alt="" />
      </div>
      <div className="text-sm mt-5">
        <h1 className="">{name}</h1>
        <hr />
        <p className="mt-3">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Warning;
