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
      <div className="flex bg-black rounded gap-3 pl-3 items-center">
        <img className="" src={image} alt="" />
        <div className="text-sm pt-3">
          <h1 className="">{name}</h1>
          <hr />
          <p className="pt-1">{description}</p>
        </div>
      </div>
    </>
  );
};

export default WarrantsItem;
