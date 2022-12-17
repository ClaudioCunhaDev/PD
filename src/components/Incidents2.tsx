import React, { useState } from "react";
import Warning from "./share/warning/Warning";
import feedBack from "../assets/feedback.svg";
import SearchBar from "./share/search/SearchBar";
import location from "../assets/location.svg";
import clock from "../assets/clock.svg";
import deleteImg from "../assets/deleteImg.svg";
import editImg from "../assets/editImg.svg";
import vasili from "../assets/Vasili.svg";
import { useModalState } from "../atoms/modalState";
import InvolmentItem from "./share/involmentItem/InvolmentItem";
import InvolmentItemNoEdit from "./share/involmentItem/InvolmentItemNoEdit";
import IncidenceItem from "./share/incidenceItem/IncidenceItem";

const Incidents2 = () => {
  const [showModal, setShowModal] = useModalState();

  return (
    <div className="w-full h-full">
      <div
        className={` flex gap-3 h-[79vh] overflow-auto pt-3 grid-cols-6 pr-3`}
      >
        <div className="w-full flex flex-col gap-3 col-span-2">
          <div className="flex justify-between">
            <h1 className="text-xl font-bold">Incidents</h1>
            <div
              className="bg-gray-500 text-sm rounded-md flex justify-center items-center p-1 cursor-pointer"
              onClick={() => setShowModal(true)}
            >
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
          <h1 className="font-bold text-lg">INCIDENT</h1>
          <div className="w-full bg-black p-5 rounded-md h-full">
            <div className="flex gap-3 items-center border-b-2 pb-3">
              <h1 className="text-2xl font-bold">INCIDENT</h1>
              <div className="bg-gray-500 text-sm rounded-md flex justify-center items-center h-[20px] p-3">
                <h1>#543555</h1>
              </div>
            </div>
            <div className="border-b-2 py-3 text-sm">
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
            <div className="flex gap-1 text-sm">
              <div className="p-3 flex items-center gap-1">
                <img src={location} alt="" />
                <h1 className="font-bold">LOCATION:</h1>
                <p>vinewood,234a,23</p>
              </div>
              <div className="p-3 flex items-center gap-1">
                <img src={clock} alt="" />
                <h1 className="font-bold">TIME:</h1>
                <p>23:41 12.11.22</p>
              </div>
            </div>
            <div className="flex gap-3 pt-3">
              <div className="cursor-pointer text-sm font-bold h-10 w-[20%] bg-red-500 flex items-center rounded justify-center">
                <h1>DELETE</h1>
              </div>
              <div className="cursor-pointer text-sm font-bold h-10 w-[20%] bg-blue-500 flex items-center rounded justify-center">
                <h1>EDIT</h1>
              </div>
              <div className="cursor-pointer text-sm font-bold h-10 w-[20%] bg-green-500 flex items-center rounded justify-center">
                <h1>SAVE</h1>
              </div>
            </div>
          </div>
          <h1 className="pt-3 font-bold text-lg">INVOLMENT</h1>
          <div className="flex gap-3">
            <div className="flex w-[50%] justify-between items-center pl-3">
              <h1>CRIMINALS</h1>
              <h1 className="text-2xl cursor-pointer">+</h1>
            </div>
            <div className="flex w-[50%] justify-between items-center pl-3">
              <h1>OFFICES</h1>
              <h1 className="text-2xl cursor-pointer">+</h1>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-[55%] flex flex-col gap-3">
              <InvolmentItemNoEdit />
              <InvolmentItem />
              <InvolmentItem />
            </div>

            <div className="w-[55%] flex flex-col gap-3">
              <InvolmentItem />
              <InvolmentItem />
              <InvolmentItem />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 col-span-1 w-[100%]">
          <h1 className="font-bold text-xl">INCIDENCE</h1>
          <IncidenceItem />
          <IncidenceItem />
          <IncidenceItem />
          <IncidenceItem />
          <div className="mb-11 bg-[#0D0F14] rounded-lg flex p-2 gap-2 h-[60px] items-center justify-between">
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

          <div className="flex flex-col gap-3 pt-12">
            <div className="flex justify-between items-center pl-3">
              <h1>SPECTATORS </h1>
              <h1 className="cursor-pointer text-2xl ">+</h1>
            </div>
            <InvolmentItem/>
            <InvolmentItem/>
            <InvolmentItem/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Incidents2;
