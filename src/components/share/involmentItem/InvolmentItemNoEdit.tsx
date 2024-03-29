import React from "react";
import vasili from "../../../assets/vasili.svg";
import deleteImg from "../../../assets/deleteImg.svg";

const InvolmentItemNoEdit = () => {
  return (
    <>
      <div className="bg-[#0D0F14] p-3 rounded-lg">
        <div className="flex justify-between items-center gap-2">
          <div className="flex justify-between items-center gap-3">
            <img className="h-[60px]" src={vasili} alt="" />
            <h1 className="text-sm">VASILI HUSAK</h1>
          </div>
          <div className="flex gap-1">
            <img className="cursor-pointer" src={deleteImg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default InvolmentItemNoEdit;
