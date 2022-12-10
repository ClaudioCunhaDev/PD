import React from "react";
import vasili from "../assets/Vasili.svg";
import warning from "../assets/warning_amber.svg";
import Announcement from "./share/announcementDiv/Announcement";
import ArrowRight from "./share/arrows/Arrow_left";
import ArrowLeft from "./share/arrows/Arrow_right";
import SearchBar from "./share/search/SearchBar";

const Announcements = () => {
  return (
    <div className="h-full">
      <div className="flex items-center pt-3">
        <h2 className="font-bold mb-3 mr-3">ANNOUNCEMENTS</h2>
        <ArrowRight />
        <ArrowLeft />
      </div>
      <div className="flex gap-5">
        <Announcement />
        <Announcement />
      </div>
      <div className="flex w-full gap-5">
        <div className="flex flex-col gap-3">
          <div className="w-full">
            <h1 className="mt-5 font-bold">WARRATS</h1>
          </div>
          <SearchBar />
          <div className="overflow-y-auto max-h-[130px]">
            <div className="flex bg-black rounded gap-3">
              <img className="ml-2 " src={vasili} alt="" />
              <div className="text-sm mt-5">
                <h1 className="">VASILI HUSAK</h1>
                <hr />
                <p className="mt-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                </p>
              </div>
            </div>
            <div className="flex bg-black rounded gap-3">
              <img className="ml-2 " src={vasili} alt="" />
              <div className="text-sm mt-5">
                <h1 className="">VASILI HUSAK</h1>
                <hr />
                <p className="mt-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="w-full">
            <h1 className="mt-5 font-bold ml-3">REPORTS</h1>
          </div>
          <SearchBar />
          <div className="overflow-y-auto max-h-[130px]">
            <div className="flex bg-black rounded gap-3 justify-center items-center">
              <div className="h-[70px] w-[80%] flex justify-center items-center bg-[#FFC061] rounded ml-3">
                <img className="" src={warning} alt="" />
              </div>
              <div className="text-sm mt-5">
                <h1>DRUG TRAFFICKING'S</h1>
                <hr />
                <p className="mt-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                </p>
              </div>
            </div>
            <div className="flex bg-black rounded justify-center items-center gap-3">
              <div className="h-[70px] w-[80%] flex justify-center items-center bg-[#FFC061] rounded ml-3">
                <img className="" src={warning} alt="" />
              </div>
              <div className="text-sm mt-5">
                <h1 className="">MISSING PERSON</h1>
                <hr />
                <p className="mt-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
