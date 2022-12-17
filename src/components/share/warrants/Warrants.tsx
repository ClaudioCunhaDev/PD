import React from "react";

interface IWarrantsItemProps {
  name: string;
  description: string;
  image: string;
}

const WarrantsItem: React.FC<IWarrantsItemProps> = ({
  name,
  description,
  image,
}) => {
  return (
    <>
      <div className="flex bg-black rounded justify-center items-center p-3 gap-3 cursor-pointer">
        <img className="" src={image} alt="" />
        <div className="text-sm">
          <h1 className="border-b border-b-white">{name}</h1>
          <p className="mt-3">{description}</p>
        </div>
      </div>
    </>
  );
};

export default WarrantsItem;
