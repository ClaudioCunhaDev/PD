import React from "react";
import sealOfTheLosAngeles from "../assets/Seal_of_the_Los_Angeles_Police_Department 1.svg";
import ellipse from "../assets/Ellipse 58.svg";

const Header = () => {
  return (
    <div className="flex justify-between items-center pl-5 mb-2 flex-wrap">
      <div className="flex items-center">
        <img src={sealOfTheLosAngeles} className="mr-3 h-[42px]"></img>
        <h1 className="w-[500px] text-2xl font-bold">
          LOS SANTOS
          <span className="text-blue-600"> POLICE DEPARTMENT</span>
        </h1>
      </div>
      <div className="flex items-center">
        <div className="flex flex-col items-end mr-3">
          <h1 className="font-bold">VASILI HUSAK</h1>
          <span className="text-blue-600">OFFICER</span>
        </div>
        <img src={ellipse} className="mr-3 mb-3 h-[40px]"></img>
      </div>
    </div>
  );
};

export default Header;
