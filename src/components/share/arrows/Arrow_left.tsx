import React from "react";


import arrow_left from "../../../assets/Arrow 2.svg";

const ArrowLeft = () => {
  return (
    <div className="cursor-pointer w-7 h-7 ml-2 mb-3 rounded flex justify-center items-center bg-blue-500">
      <img src={arrow_left} alt="" />
    </div>
  );
};

export default ArrowLeft;
