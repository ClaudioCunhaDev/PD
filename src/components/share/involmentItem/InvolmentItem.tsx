import React from "react";
import vasili from "../../../assets/vasili.svg";
import editImg from "../../../assets/editImg.svg";
import deleteImg from "../../../assets/deleteImg.svg";
import feedBack from "../../../assets/feedBack.svg";

const InvolmentItem = () => {
  return (
    <>
      <div className="bg-[#0D0F14] p-3 rounded-lg">
        <div className="flex justify-between items-center gap-2">
          <div className="flex justify-between items-center gap-3">
            <img className="h-[60px]" src={vasili} alt="" />
            <h1 className="text-sm">VASILI HUSAK</h1>
          </div>
          <div className="flex gap-1">
            <img className="cursor-pointer" src={editImg} alt="" />
            <img className="cursor-pointer" src={deleteImg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default InvolmentItem;
