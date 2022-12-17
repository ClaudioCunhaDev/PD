import React from "react";

interface IAnnouncementProps {
  title: string;
  description: string;
  date: string;
  hour: string;
  time: string;
}

const Announcement: React.FC<IAnnouncementProps> = ({
  title,
  description,
  date,
  hour,
  time,
}) => {
  return (
    <div className="w-full h-full bg-black flex flex-col border-2-black rounded">
      <h1 className="mt-3 ml-3 h-[10%] text-sm font-bold border-b-2">
        {title}
      </h1>
      <div className="w-full h-[80%] flex justify-center m-3 text-sm">
        <p className="pr-3">{description}</p>
      </div>
      <div className="flex justify-between items-center h-[80%]">
        <p className=" pl-3 text-sm">
          {date} <span className="font-bold">{hour}</span>
        </p>
        <p className=" font-bold text-sm pr-3">{time}</p>
      </div>
    </div>
  );
};

export default Announcement;
