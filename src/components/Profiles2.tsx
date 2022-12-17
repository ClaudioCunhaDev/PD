import React from "react";
import SearchBar from "./share/search/SearchBar";
import Warrants from "./share/warrants/Warrants";
import vasili from "../assets/vasili.svg";
import { useNavigationState } from "../atoms/navigationAtom";
import done from "../assets/done.svg";

const Profiles2 = () => {
  const [navigationState, setNavigationState] = useNavigationState();

  return (
    <div className="w-full h-full ">
      <div className="grid grid-cols-6 gap-20 h-[79vh] overflow-auto pt-3">
        <div className="grid col-span-2">
          <div className="flex flex-col gap-3">
            <div className="">
              <h1 className="text-lg font-bold">STAFF</h1>
            </div>
            <div>
              <SearchBar />
            </div>
            <div
              className="flex flex-col gap-3"
              onClick={() => {
                setNavigationState({ path: "" });
              }}
            >
              <Warrants
                name="DRUG TRAFFICKING'S"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
                image={vasili}
              />
              <Warrants
                name="DRUG TRAFFICKING'S"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
                image={vasili}
              />
              <Warrants
                name="DRUG TRAFFICKING'S"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
                image={vasili}
              />
              <Warrants
                name="DRUG TRAFFICKING'S"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
                image={vasili}
              />
              <Warrants
                name="DRUG TRAFFICKING'S"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
                image={vasili}
              />
            </div>
          </div>
        </div>
        <div className="grid col-span-4 flex-col gap-3">
          <div className="flex flex-col gap-3 h-full">
            <div className="flex justify-between pr-5">
              <h1 className="text-lg font-bold">STAFF PROFILE</h1>
              <div className="bg-green-500 rounded-lg px-3 py-1 w-[15%] flex cursor-pointer justify-center items-center">
                <h1>SAVE</h1>
              </div>
            </div>
            <div className="h-[20%] bg-[#0B0C10] rounded-lg px-5 mr-5 w-full">
              <div className="h-[100%] w-full flex gap-3 items-center">
                <img src={vasili} alt="" />
                <div className="w-full h-full flex flex-col justify-center">
                  <div className="flex justify-between">
                    <div>VASILI HUSAK</div>
                    <div className="text-[#5D5D5D]">ID: 2423523</div>
                  </div>
                  <hr />
                  <div className="w-full flex">
                    <div className="w-[100%]">
                      <div className="flex justify-between">
                        <div className="text-[#5D5D5D]">DEPARTMENT</div>
                        <div className="font-bold">LSPD</div>
                        <div className="text-[#5D5D5D]">DEPARTMENT</div>
                        <div className="font-bold">LSPD</div>
                      </div>
                      <div className="flex justify-between">
                        <div className="text-[#5D5D5D]">RANK:</div>
                        <div className="font-bold justify-end">LSPD</div>
                        <div className="text-[#5D5D5D]">RANK:</div>
                        <div className="font-bold">LSPD</div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            <h1 className="text-lg font-bold pl-2">PERMISSONS: </h1>
            <div className="h-[33%] rounded-lg flex gap-3 mr-5 ">
              <div className="w-[50%] gap-3 flex flex-col">
                <div className="bg-[#0B0C10] h-[50%] p-3 rounded-lg">
                  <div className="flex justify-end">
                    <div className="flex w-5 h-5 justify-center items-center bg-blue-500">
                      <img src={done} alt="" />
                    </div>
                  </div>
                  <div className="font-bold flex flex-col justify-center rounded-lg h-10">
                    <h1>ISSUE A WARRANT</h1>
                    <h1 className="text-[#606060]">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting
                    </h1>
                  </div>
                </div>
                <div className="bg-[#0B0C10] h-[50%] p-3 rounded-lg">
                  <div className="flex justify-end">
                    <div className="flex w-5 h-5 justify-center items-center bg-[#353535]">
                      <img src={done} alt="" />
                    </div>
                  </div>
                  <div className="font-bold flex flex-col justify-center rounded-lg h-10">
                    <h1>ISSUE A WARRANT</h1>
                    <h1 className="text-[#606060]">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting
                    </h1>
                  </div>
                </div>
              </div>
              <div className="w-[50%] gap-3 flex flex-col">
                <div className="bg-[#0B0C10] h-[50%] p-3 rounded-lg">
                  <div className="flex justify-end">
                    <div className="flex w-5 h-5 justify-center items-center bg-blue-500">
                      <img src={done} alt="" />
                    </div>
                  </div>
                  <div className="font-bold flex flex-col justify-center rounded-lg h-10">
                    <h1>ISSUE A WARRANT</h1>
                    <h1 className="text-[#606060]">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting
                    </h1>
                  </div>
                </div>
                <div className="bg-[#0B0C10] h-[50%] p-3 rounded-lg">
                  <div className="flex justify-end">
                    <div className="flex w-5 h-5 justify-center items-center bg-blue-500">
                      <img src={done} alt="" />
                    </div>
                  </div>
                  <div className="font-bold flex flex-col justify-center rounded-lg h-10">
                    <h1>ISSUE A WARRANT</h1>
                    <h1 className="text-[#606060]">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[33%] rounded-lg flex gap-3 mr-5 ">
              <div className="w-[50%] gap-3 flex flex-col">
                <div className="bg-[#0B0C10] h-[50%] p-3 rounded-lg">
                  <div className="flex justify-end">
                    <div className="flex w-5 h-5 justify-center items-center bg-[#353535]">
                      <img src={done} alt="" />
                    </div>
                  </div>
                  <div className="font-bold flex flex-col justify-center rounded-lg h-10">
                    <h1>ISSUE A WARRANT</h1>
                    <h1 className="text-[#606060]">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting
                    </h1>
                  </div>
                </div>
                <div className="bg-[#0B0C10] h-[50%] p-3 rounded-lg">
                  <div className="flex justify-end">
                    <div className="flex w-5 h-5 justify-center items-center bg-[#353535]">
                      <img src={done} alt="" />
                    </div>
                  </div>
                  <div className="font-bold flex flex-col justify-center rounded-lg h-10">
                    <h1>ISSUE A WARRANT</h1>
                    <h1 className="text-[#606060]">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting
                    </h1>
                  </div>
                </div>
              </div>
              <div className="w-[50%] gap-3 flex flex-col">
                <div className="bg-[#0B0C10] h-[50%] p-3 rounded-lg">
                  <div className="flex justify-end">
                    <div className="flex w-5 h-5 justify-center items-center bg-[#353535]">
                      <img src={done} alt="" />
                    </div>
                  </div>
                  <div className="font-bold flex flex-col justify-center rounded-lg h-10">
                    <h1>ISSUE A WARRANT</h1>
                    <h1 className="text-[#606060]">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting
                    </h1>
                  </div>
                </div>
                <div className="bg-[#0B0C10] h-[50%] p-3 rounded-lg">
                  <div className="flex justify-end">
                    <div className="flex w-5 h-5 justify-center items-center bg-[#353535]">
                      <img src={done} alt="" />
                    </div>
                  </div>
                  <div className="font-bold flex flex-col justify-center rounded-lg h-10">
                    <h1>ISSUE A WARRANT</h1>
                    <h1 className="text-[#606060]">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[15%] rounded-lg flex gap-3 mr-5 ">
              <div className="w-[50%] gap-3 flex flex-col">
                <div className="bg-[#0B0C10] h-[100%] p-3 rounded-lg">
                  <div className="flex justify-end">
                    <div className="flex w-5 h-5 justify-center items-center bg-blue-500">
                      <img src={done} alt="" />
                    </div>
                  </div>
                  <div className="font-bold flex flex-col justify-center rounded-lg h-10">
                    <h1>ISSUE A WARRANT</h1>
                    <h1 className="text-[#606060]">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting
                    </h1>
                  </div>
                </div>
              </div>
              <div className="w-[50%] gap-3 flex flex-col">
                <div className="bg-[#0B0C10] h-[100%] p-3 rounded-lg">
                  <div className="flex justify-end">
                    <div className="flex w-5 h-5 justify-center items-center bg-blue-500">
                      <img src={done} alt="" />
                    </div>
                  </div>
                  <div className="font-bold flex flex-col justify-center rounded-lg h-10">
                    <h1>ISSUE A WARRANT</h1>
                    <h1 className="text-[#606060]">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting
                    </h1>
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

export default Profiles2;
