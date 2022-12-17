import React from "react";
import SearchBar from "./share/search/SearchBar";
import magnifyingGlass from "../assets/magnifying_glass.svg";
import MagnifyingGlass from "./share/magnifying glass/MagnifyingGlass";
import { useNavigationState } from "../atoms/navigationAtom";

const Evidence2 = () => {
  const [navigationState, setNavigationState] = useNavigationState();

  return (
    <div className="w-full h-full ">
      <div className="grid grid-cols-6 gap-20 h-[79vh] overflow-auto pt-3">
        <div className="grid col-span-2">
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <h1 className="text-lg font-bold">REPORTS</h1>
              <div className="bg-gray-500 text-xs rounded flex justify-center items-center h-[20px] p-1 font-bold">
                <h1>CREATE NEW</h1>
              </div>
            </div>
            <div>
              <SearchBar />
            </div>
            <div
              className="flex flex-col gap-3"
              onClick={() => {
                setNavigationState({ path: "evidence2" });
              }}
            >
              <MagnifyingGlass
                name="DRUG TRAFFICKING'S"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
                image={magnifyingGlass}
              />
              <MagnifyingGlass
                name="DRUG TRAFFICKING'S"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
                image={magnifyingGlass}
              />
              <MagnifyingGlass
                name="DRUG TRAFFICKING'S"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
                image={magnifyingGlass}
              />
              <MagnifyingGlass
                name="DRUG TRAFFICKING'S"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
                image={magnifyingGlass}
              />
              <MagnifyingGlass
                name="DRUG TRAFFICKING'S"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
                image={magnifyingGlass}
              />
            </div>
          </div>
        </div>
        <div className="grid col-span-4 flex-col gap-3">
          <div className="flex flex-col gap-3 h-full">
            <h1 className="font-bold">
              EVIDENCE <span className="text-blue-500">#21</span>
            </h1>
            <div className="h-[30%] bg-[#0B0C10] rounded-lg flex flex-col justify-center px-5 mr-5">
              <div className="h-[50%] flex items-center p-3">
                <div className="font-bold bg-[#202020] w-[40%] flex justify-center items-center rounded-lg h-10">
                  <h1>EVIDENCE #1 (BULLET)</h1>
                </div>
              </div>
              <div className="h-[50%] flex w-[60%] justify-between px-3">
                <div className="">
                  <p className="text-sm">FIRST NAME</p>
                  <h1 className="font-bold text-2xl border-b border-b-white">VASILI</h1>
                </div>
                <div>
                  <h1 className="text-sm">LAST NAME</h1>
                  <h1 className="font-bold text-2xl border-b border-b-white">HUSAK</h1>
                </div>
              </div>
            </div>
            <div className="h-[25%] rounded-lg flex gap-3 mr-5">
              <div className="w-[50%] bg-[#0B0C10] p-3">
                <div className="h-[50%] flex items-center p-3">
                  <div className="font-bold bg-[#202020] w-[80%] flex justify-center items-center rounded-lg h-10">
                    <h1>EVIDENCE #2 (BULLET)</h1>
                  </div>
                </div>
                <div className="h-[50%] flex w-[100%] justify-between px-3">
                  <div>
                    <p className="text-sm">ERROR</p>
                    <h1 className="font-bold text-2xl border-b border-b-white">DATA NOT FOUND</h1>
                  </div>
                </div>
              </div>
              <div className="w-[50%] bg-[#0B0C10] p-3">
                <div className="h-[50%] flex items-center p-3">
                  <div className="font-bold bg-[#202020] w-[80%] flex justify-center items-center rounded-lg h-10">
                    <h1>EVIDENCE #3 (BULLET)</h1>
                  </div>
                </div>
                <div className="h-[50%] flex w-[100%] justify-between px-3">
                  <div>
                    <p className="text-sm">ERROR</p>
                    <h1 className="font-bold text-2xl border-b border-b-white">DATA NOT FOUND</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[25%] rounded-lg flex gap-3 mr-5">
              <div className="w-[50%] bg-[#0B0C10] p-3">
                <div className="h-[50%] flex items-center p-3">
                  <div className="font-bold bg-[#202020] w-[80%] flex justify-center items-center rounded-lg h-10">
                    <h1>EVIDENCE #2 (BULLET)</h1>
                  </div>
                </div>
                <div className="h-[50%] flex w-[100%] justify-between px-3">
                  <div>
                    <p className="text-sm">ERROR</p>
                    <h1 className="font-bold text-2xl border-b border-b-white">DATA NOT FOUND</h1>
                  </div>
                </div>
              </div>
              <div className="w-[50%] bg-[#0B0C10] p-3">
                <div className="h-[50%] flex items-center p-3">
                  <div className="font-bold bg-[#202020] w-[80%] flex justify-center items-center rounded-lg h-10">
                    <h1>EVIDENCE #3 (BULLET)</h1>
                  </div>
                </div>
                <div className="h-[50%] flex w-[100%] justify-between px-3">
                  <div>
                    <p className="text-sm">ERROR</p>
                    <h1 className="font-bold text-2xl border-b border-b-white">DATA NOT FOUND</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[20%] flex justify-center items-center gap-3 mr-5">
              <div className="bg-red-500 rounded-lg px-3 py-1 w-[20%] flex cursor-pointer justify-center items-center">
                <h1>DELETE</h1>
              </div>
              <div className="bg-blue-500 rounded-lg px-3 py-1 w-[20%] flex cursor-pointer justify-center items-center">
                <h1>EDIT</h1>
              </div>
              <div className="bg-green-500 rounded-lg px-3 py-1 w-[20%] flex cursor-pointer justify-center items-center">
                <h1>SAVE</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Evidence2;
