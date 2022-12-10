import React from "react";


const Announcement = () => {
  return (
    <div className="w-full h-[240px] bg-black	 flex flex-col border-2-black rounded">
      <h1 className="mt-3 ml-3 text-sm font-bold border-b-2">
        ANNOUNCEMENT NAME
      </h1>
      <div className="w-full h-[146px] flex justify-center m-3 text-sm">
        <p className="mr-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>
      <div className="flex justify-between items-center">
        <p className="mt-3 ml-3 text-sm">
          12.11.22 <span className="font-bold">19:40</span>
        </p>
        <p className="pt-3 font-bold text-sm pr-3">2 HOURS AGO</p>
      </div>
    </div>
  );
};


export default Announcement