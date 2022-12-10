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
      <div className="flex bg-black rounded gap-3">
        <img className="ml-2" src={image} alt="" />
        <div className="text-sm mt-5">
          <h1 className="">{name}</h1>
          <hr />
          <p className="mt-3">{description}</p>
        </div>
      </div>
    </>
  );
};

export default WarrantsItem;
