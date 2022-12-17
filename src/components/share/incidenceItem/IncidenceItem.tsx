import React from "react";
import feedBack from "../../../assets/feedBack.svg";
import editImg from "../../../assets/editImg.svg";
import deleteImg from "../../../assets/deleteImg.svg";

const IncidenceItem = () => {
  return (
    <>
      <div className="bg-[#0D0F14] rounded-lg flex p-2 gap-2 h-[60px] items-center justify-between">
        <div className="flex gap-2 items-center">
          <div className="h-9 w-9 bg-amber-800">
            <img className="p-2" src={feedBack} alt="" />
          </div>
          <h1 className="text-md font-bold">#4322</h1>
        </div>
        <div className="flex gap-2 p-2">
          <img className="cursor-pointer" src={editImg} alt="" />
          <img className="cursor-pointer" src={deleteImg} alt="" />
        </div>
      </div>
    </>
  );
};

export default IncidenceItem;
