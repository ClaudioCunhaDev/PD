import React from "react";

interface MagnifyingGlassItemProps {
  name: string;
  description: string;
  image: string;
}

const MagnifyingGlass: React.FC<MagnifyingGlassItemProps> = ({
  name,
  description,
  image,
}) => {
  return (
    <div className="flex bg-black rounded justify-center items-center p-3 gap-3 cursor-pointer">
      <div className="p-5 w-[180px] flex justify-center items-center bg-[#FF618724] rounded">
        <img className="" src={image} alt="" />
      </div>
      <div className="text-sm">
        <h1 className="">{name}</h1>
        <hr />
        <p className="mt-3">{description}</p>
      </div>
    </div>
  );
};

export default MagnifyingGlass;
