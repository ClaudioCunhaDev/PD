import React from "react";
import Announcement from "./share/announcementDiv/Announcement";
import ArrowRight from "./share/arrows/Arrow_right";
import ArrowLeft from "./share/arrows/Arrow_left";
import SearchBar from "./share/search/SearchBar";
import Warrants from "./share/warrants/Warrants";
import Warning from "./share/warning/Warning";
import vasili from "../assets/Vasili.svg";
import warningIMG from "../assets/warning_amber.svg";

const Announcements = () => {
  return (
    <div className="h-full">
      <div className="flex items-center pt-3">
        <h2 className="font-bold mb-3 mr-3">ANNOUNCEMENTS</h2>
        <ArrowLeft />
        <ArrowRight />
      </div>
      <div className="flex gap-5">
        <Announcement
          title="ANNOUNCEMENT NAME"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in electronic typesetting, remaining essentially"
          date="12.11.22"
          hour="19:40"
          time="2 HOURS AGO"
        />
        <Announcement
          title="ANNOUNCEMENT NAME"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in electronic typesetting, remaining essentially"
          date="12.11.22"
          hour="19:40"
          time="2 HOURS AGO"
        />
      </div>
      <div className="flex w-full gap-5">
        <div className="flex flex-col gap-3">
          <div className="w-full">
            <h1 className="mt-5 font-bold">WARRANTS</h1>
          </div>
          <SearchBar />
          <div className="overflow-y-auto max-h-[130px]">
            <Warrants
              name="VASILI HUSAK"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
              image={vasili}
            />
            <Warrants
              name="VASILI HUSAK"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
              image={vasili}
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="w-full">
            <h1 className="mt-5 font-bold ml-3">REPORTS</h1>
          </div>
          <SearchBar />
          <div className="overflow-y-auto max-h-[130px]">
            <Warning
              name="DRUG TRAFFICKING'S"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
              image={warningIMG}
            />
            <Warning
              name="MISSING PERSON"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
              image={warningIMG}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
