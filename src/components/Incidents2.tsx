import React from "react";
import Warning from "./share/warning/Warning";
import feedBack from "../assets/feedback.svg";
import SearchBar from "./share/search/SearchBar";
import location from "../assets/location.svg";
import clock from "../assets/clock.svg";

const Incidents2 = () => {
  return (
    <div className="w-full h-full">
      <div className="flex gap-3 h-[60vh] overflow-auto pt-3 grid-cols-6">
        <div className="flex flex-col gap-3 col-span-2">
          <div className="flex gap-3 justify-between">
            <h1 className="text-xl">Incidents</h1>
            <div className="bg-gray-500 text-sm rounded-md flex justify-center items-center h-[20px] p-3">
              <h1>CREATE NEW</h1>
            </div>
          </div>
          <div className="w-full">
            <SearchBar />
          </div>
          <Warning
            name="Drug Trafficking's"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
            image={feedBack}
          />
          <Warning
            name="MISSING PERSON"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
            image={feedBack}
          />
          <Warning
            name="MISSING PERSON"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
            image={feedBack}
          />
          <Warning
            name="MISSING PERSON"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
            image={feedBack}
          />
          <Warning
            name="MISSING PERSON"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
            image={feedBack}
          />
        </div>
        <div className="flex flex-col gap-3 col-span-3">
          <h1>INCIDENT</h1>
          <div className="w-full bg-black p-5 rounded-md h-full">
            <div className="flex gap-3 items-center border-b-2 pb-3">
              <h1 className="text-2xl font-bold">INCIDENT</h1>
              <div className="bg-gray-500 text-sm rounded-md flex justify-center items-center h-[20px] p-3">
                <h1>#543555</h1>
              </div>
            </div>
            <div className="border-b-2 py-3">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in electronic typesetting, remaining essentially
              </p>
            </div>
            <div className="flex gap-1">
              <div className="p-3 flex items-center gap-1">
                <h1 className="font-bold">LOCATION:</h1>
                <p>vinewood,234a,23</p>
              </div>
              <div className="p-3 flex items-center gap-1">
                <h1 className="font-bold">TIME:</h1>
                <p>23:41 12.11.22</p>
              </div>
            </div>
            <div className="flex gap-3 pt-3">
              <div className="text-sm font-bold h-10 w-[20%] bg-red-500 flex items-center rounded justify-center">
                <h1>DELETE</h1>
              </div>
              <div className="text-sm font-bold h-10 w-[20%] bg-blue-500 flex items-center rounded justify-center">
                <h1>EDIT</h1>
              </div>
              <div className="text-sm font-bold h-10 w-[20%] bg-green-500 flex items-center rounded justify-center">
                <h1>SAVE</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 col-span-1">
          <div>
            asudbhasudnasdiasiod Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Explicabo facilis atque saepe est veniam excepturi
            mollitia consequuntur impedit, ad quae.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Incidents2;
