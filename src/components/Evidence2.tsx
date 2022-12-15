import React from "react";
import SearchBar from "./share/search/SearchBar";
import magnifyingGlass from "../assets/magnifying_glass.svg";
import MagnifyingGlass from "./share/magnifying glass/MagnifyingGlass";
import evidencePolice from "../assets/evidencePolice.svg";

const Evidence2 = () => {
  return (
    <div className="w-full h-full">
      <div className="grid grid-cols-6 gap-5 h-[79vh] overflow-auto pt-3">
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
        <div className="grid col-span-4 flex-col gap-3">
          <div className="w-full flex flex-col gap-3">
            <div>
              <h1 className="font-bold w-full">
                EVIDENCE <span className="text-blue-500">#21</span>
              </h1>
            </div>
            <div className="h-full w-full">
              <div className="h-full w-[100%] flex gap-5">
                <div className="flex flex-col w-[50%] h-full justify-between">
                  <div className="flex flex-col h-[70%] gap-3">
                    <div className="bg-[#0B0C10] rounded-lg flex flex-col px-5 w-[100%] h-[50%]">
                      <div className="h-[50%] flex flex-col p-3 gap-2">
                        <h1>DESCRIPTION #1</h1>
                        <h1 className="text-xs">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to Lorem Ipsum is simply dummy text of
                          the printing and typesetting industry. Lorem Ipsum has
                          been the industry's standard dummy text ever since the
                          1500s, when an unknown printer took a galley of type
                          and scrambled it to sum has been the industry's
                          standard dummy text ever since the 1500s, when an
                          unknown printer took a galley of type and scrambled it
                          to
                        </h1>
                      </div>
                    </div>
                    <div className="bg-[#0B0C10] rounded-lg flex flex-col px-5 h-[50%] w-[100%]">
                      <div className="h-[50%] flex flex-col p-3 gap-2">
                        <h1>DESCRIPTION #1</h1>
                        <h1 className="text-xs">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to Lorem Ipsum is simply dummy text of
                          the printing and typesetting industry. Lorem Ipsum has
                          been the industry's standard dummy text ever since the
                          1500s, when an unknown printer took a galley of type
                          and scrambled it to sum has been the industry's
                          standard dummy text ever since the 1500s, when an
                          unknown printer took a galley of type and scrambled it
                          to
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className="h-[30%] w-[100%] flex items-center">
                    <div className="h-[50%] w-full">
                      <div className="flex justify-center gap-3 w-[100%]">
                        <div className="bg-red-500 rounded-md px-3 py-1 w-[33%] flex cursor-pointer justify-center items-center">
                          <h1>DELETE</h1>
                        </div>
                        <div className="bg-blue-500 rounded-md px-3 py-1 w-[33%] flex cursor-pointer justify-center items-center">
                          <h1>EDIT</h1>
                        </div>
                        <div className="bg-green-500 rounded-md px-3 py-1 w-[33%] flex cursor-pointer justify-center items-center">
                          <h1>SAVE</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[50%]">
                  <div className="w-[90%] h-[100%] flex flex-col gap-3">
                    <img
                      className="w-[100%] h-[90%]"
                      src={evidencePolice}
                      alt=""
                    />
                    <img
                      className="w-[100%] h-[90%]"
                      src={evidencePolice}
                      alt=""
                    />

                    <img
                      className="w-[100%] h-[90%]"
                      src={evidencePolice}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Evidence2;
