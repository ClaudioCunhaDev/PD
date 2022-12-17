import React from "react";
import SearchBar from "./share/search/SearchBar";
import vasili from "../assets/vasili.svg";
import Warrants from "./share/warrants/Warrants";
import arrow_left from "../assets/Arrow 2.svg";
import arrow_right from "../assets/Arrow 1.svg";
import { useNavigationState } from "../atoms/navigationAtom";

const Profiles = () => {
  const [navigationState, setNavigationState] = useNavigationState();

  return (
    <div className="w-full h-full">
      <div className="grid-cols-10 grid gap-3 h-[79vh] overflow-auto pt-3">
        <div className="grid gap-3 col-span-3">
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
                setNavigationState({ path: "profiles2" });
              
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
        </div>
        <div className="grid gap-3 col-span-5">
          <div className="flex flex-col gap-3">
            <h1 className="h-[24px]">MANAGE PROFILE</h1>
            <div className="bg-black h-[30%] rounded-lg flex">
              <div className="flex items-center">
                <div className="w-full px-3">
                  <img className="h-[200px]" src={vasili} alt="" />
                </div>
                <div>
                  <h1 className="text-lg font-bold">VASILI HUSAK</h1>
                  <p className="text-sm">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-black h-[23%] rounded-lg ">
              <div className="flex p-5">
                <h1 className="font-bold">LICENSES</h1>
                <div className="w-5 h-5 ml-2 mb-3 rounded flex justify-center items-center bg-gray-500">
                  <img src={arrow_left} alt="" />
                </div>
                <div className="w-5 h-5 ml-2 mb-3 rounded flex justify-center items-center bg-gray-500">
                  <img src={arrow_right} alt="" />
                </div>
              </div>
              <div className="flex gap-3 pl-5">
                <div className="text-sm font-bold h-10 w-[20%] bg-blue-500 flex items-center rounded justify-center">
                  <h1>DRIVER</h1>
                </div>
                <div className="text-sm font-bold h-10 w-[20%] bg-blue-500 flex items-center rounded justify-center">
                  <h1>GUN</h1>
                </div>
                <div className="text-sm font-bold h-10 w-[20%] bg-blue-500 flex items-center rounded justify-center">
                  <h1>PASSPORT</h1>
                </div>
              </div>
            </div>

            <div className="bg-black h-[23%] rounded-lg ">
              <div className="flex p-5">
                <h1 className="font-bold">VEHICLES</h1>
                <div className="w-5 h-5 ml-2 mb-3 rounded flex justify-center items-center bg-gray-500">
                  <img src={arrow_left} alt="" />
                </div>
                <div className="w-5 h-5 ml-2 mb-3 rounded flex justify-center items-center bg-gray-500">
                  <img src={arrow_right} alt="" />
                </div>
              </div>
              <div className="flex gap-3 pl-5 flex-wrap">
                <div className="text-sm font-bold h-7 w-[30%] bg-gray-500 flex items-center rounded justify-center">
                  <h1>12314sff3 - zentorno</h1>
                </div>
                <div className="text-sm font-bold h-7 w-[30%] bg-gray-500 flex items-center rounded justify-center">
                  <h1>12314sff3 - zentorno</h1>
                </div>
                <div className="text-sm font-bold h-7 w-[30%] bg-gray-500 flex items-center rounded justify-center">
                  <h1>12314sff3 - zentorno</h1>
                </div>
                <div className="text-sm font-bold h-7 w-[30%] bg-gray-500 flex items-center rounded justify-center">
                  <h1>12314sff3 - zentorno</h1>
                </div>
                <div className="text-sm font-bold h-7 w-[30%] bg-gray-500 flex items-center rounded justify-center">
                  <h1>12314sff3 - zentorno</h1>
                </div>
                <div className="text-sm font-bold h-7 w-[30%] bg-gray-500 flex items-center rounded justify-center">
                  <h1>12314sff3 - zentorno</h1>
                </div>
              </div>
            </div>

            <div className="bg-black h-[23%] rounded-lg ">
              <div className="flex p-5">
                <h1 className="font-bold">HOUSING</h1>
                <div className="w-5 h-5 ml-2 mb-3 rounded flex justify-center items-center bg-gray-500">
                  <img src={arrow_left} alt="" />
                </div>
                <div className="w-5 h-5 ml-2 mb-3 rounded flex justify-center items-center bg-gray-500">
                  <img src={arrow_right} alt="" />
                </div>
              </div>
              <div className="flex gap-3 pl-5 flex-wrap">
                <div className="text-sm font-bold h-7 w-[30%] bg-gray-500 flex items-center rounded justify-center">
                  <h1>1234 wild oats drive</h1>
                </div>
                <div className="text-sm font-bold h-7 w-[30%] bg-gray-500 flex items-center rounded justify-center">
                  <h1>1234 wild oats drive</h1>
                </div>
                <div className="text-sm font-bold h-7 w-[30%] bg-gray-500 flex items-center rounded justify-center">
                  <h1>1234 wild oats drive</h1>
                </div>
                <div className="text-sm font-bold h-7 w-[30%] bg-gray-500 flex items-center rounded justify-center">
                  <h1>1234 wild oats drive</h1>
                </div>
                <div className="text-sm font-bold h-7 w-[30%] bg-gray-500 flex items-center rounded justify-center">
                  <h1>1234 wild oats drive</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-3 col-span-2">
          <div className="flex flex-col gap-3">
            <h1>INFORMATION</h1>
            <div className="flex flex-col gap-3">
              <div className="bg-black w-[90%] rounded-lg h-[15vh] justify-center p-3 flex flex-col">
                <p className="text-sm">CHITZEN ID:</p>
                <p>dx234525sfs2342</p>
              </div>
              <div className="bg-black text-sm w-[90%] rounded-lg h-[15vh] justify-center p-3 flex flex-col flex-wrap">
                <p className="text-sm">CHITZEN ID:</p>
                <p>dx234525sfs2342</p>
              </div>
              <div className="bg-black w-[90%] rounded-lg h-[15vh] justify-center p-3 flex flex-col">
                <p className="text-sm">CHITZEN ID:</p>
                <p>dx234525sfs2342</p>
              </div>
              <div className="bg-black w-[90%] rounded-lg h-[15vh] justify-center p-3 flex flex-col">
                <p className="text-sm">CHITZEN ID:</p>
                <p>dx234525sfs2342</p>
              </div>
              <div className="bg-black w-[90%] rounded-lg h-[15vh] justify-center p-3 flex flex-col">
                <p className="text-sm">CHITZEN ID:</p>
                <p>dx234525sfs2342</p>
              </div>
              <div className="bg-black w-[90%] rounded-lg h-[15vh] justify-center p-3 flex flex-col">
                <p className="text-sm">CHITZEN ID:</p>
                <p>dx234525sfs2342</p>
              </div>
              <div className="bg-black w-[90%] rounded-lg h-[15vh] justify-center p-3 flex flex-col">
                <p className="text-sm">CHITZEN ID:</p>
                <p>dx234525sfs2342</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profiles;
