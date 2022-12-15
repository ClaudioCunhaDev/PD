import React from "react";
import Warning from "./share/warning/Warning";
import SearchBar from "./share/search/SearchBar";
import warningIMG from "../assets/warning_amber.svg";

const Reports = () => {
  return (
    <div className="w-full h-full ">
      <div className="grid grid-cols-5 gap-5 h-[79vh] overflow-auto pt-3 pr-10">
        <div className="grid col-span-2">
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <h1 className="text-lg font-bold">REPORTS</h1>
              <div className="bg-gray-500 text-xs rounded flex justify-center items-center h-[20px] p-1 font-bold w-[25%]">
                <h1>CREATE NEW</h1>
              </div>
            </div>
            <div>
              <SearchBar />
            </div>
            <Warning
              name="DRUG TRAFFICKING'S"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
              image={warningIMG}
            />
            <Warning
              name="DRUG TRAFFICKING'S"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
              image={warningIMG}
            />
            <Warning
              name="DRUG TRAFFICKING'S"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
              image={warningIMG}
            />
            <Warning
              name="DRUG TRAFFICKING'S"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
              image={warningIMG}
            />
            <Warning
              name="DRUG TRAFFICKING'S"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
              image={warningIMG}
            />
          </div>
        </div>
        <div className="grid col-span-3">
          <div className="flex flex-col gap-3">
            <h1 className="text-lg font-bold">REPORT INSTEAD</h1>
            <div className="h-[100%] flex flex-col gap-5">
              <div className="bg-black rounded-lg h-[60%] p-3">
                <div className="h-[30%] flex justify-between items-center p-5">
                  <div className="">
                    <div className="">
                      <h1 className="text-md">TITLE</h1>
                      <h1 className="text-xl font-bold">MISSING SUBJECT</h1>
                    </div>
                    <hr />
                  </div>
                  <div className="">
                    <h1 className="text-md">INCIDENT ID</h1>
                    <h1 className="text-xl font-bold"># 35345</h1>
                    <hr />
                  </div>
                </div>
                <div className="h-[70%] flex flex-col gap-3 px-5 ">
                  <h1 className="text-lg">DESCRIPTION</h1>
                  <p className="text-md">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to Lorem
                    Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s, when an unknown printer took a
                    galley of type and scrambled it to sum has been the
                    industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to
                  </p>
                </div>
              </div>

              <div className="h-[40%]">
                <div className="flex flex-col gap-3 h-[100%]">
                  <h1 className="text-lg font-bold">SETTINGS</h1>
                  <div className="h-[60%] w-[100%] flex gap-3">
                    <div className="h-[100%] w-[60%] bg-black p-5 flex flex-col rounded-md">
                      <h1 className="text-md">BROADCAST TO</h1>
                      <div className="font-bold h-[80%] flex text-xs gap-3 justify-center items-center">
                        <div className="text-sm p-2 font-bold h-10 bg-blue-500 w-[33%] flex items-center rounded justify-center cursor-pointer">
                          <h1>POLICE OFFICERS</h1>
                        </div>
                        <div className="text-sm p-2 font-bold h-10 bg-blue-500 w-[33%] flex items-center rounded justify-center cursor-pointer">
                          <h1>EMERGENY PERSONEL</h1>
                        </div>
                        <div className="text-sm p-2 font-bold h-10 bg-blue-500 w-[33%] flex items-center rounded justify-center cursor-pointer">
                          <h1>EVERYONE</h1>
                        </div>
                      </div>
                    </div>
                    <div className="h-[100%] w-[40%] bg-black p-5 flex flex-col rounded-md">
                      <h1 className="text-md">BROADCAST TO</h1>
                      <div className="flex text-xs font-bold gap-5 h-[80%] items-center">
                        <div className="text-sm font-bold h-10 bg-blue-500 flex items-center rounded justify-center p-2 cursor-pointer">
                          <h1>RESOLVED</h1>
                        </div>
                        <div className="text-sm font-bold h-10 bg-blue-500 flex items-center rounded justify-center p-2 cursor-pointer">
                          <h1>ONGOING</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[40%] flex gap-3">
                    <div className="h-[100%] w-[45%] bg-black p-5 rounded-md flex gap-3 justify-between items-center">
                      <div className="flex gap-3 w-[70%]">
                        <h1 className="text-md font-bold">TIME:</h1>
                        <h1 className="text-sm">
                          <span className="font-bold">23:41 </span>12.11.22
                        </h1>
                      </div>
                      <div className="text-sm font-bold w-[30%] h-10 bg-gray-500 flex items-center rounded justify-center p-3 cursor-pointer">
                        <h1>NEVER EXPIRE</h1>
                      </div>
                    </div>
                    <div className="h-[100%] w-[55%] bg-black p-5 rounded-md flex gap-3 items-center">
                      <div className="text-sm font-bold w-[30%] h-10 bg-red-500 flex items-center rounded justify-center p-3 cursor-pointer">
                        <h1>DELETE</h1>
                      </div>
                      <div className="text-sm font-bold w-[30%] h-10 bg-blue-500 flex items-center rounded justify-center p-3 cursor-pointer">
                        <h1>EDIT</h1>
                      </div>
                      <div className="text-sm font-bold w-[30%] h-10 bg-green-500 flex items-center rounded justify-center p-3 cursor-pointer">
                        <h1>SAVE</h1>
                      </div>
                    </div>
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

export default Reports;
