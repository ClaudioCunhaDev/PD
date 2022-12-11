import React from "react";
import SearchBar from "./share/search/SearchBar";
import vasili from "../assets/vasili.svg";
import Warrants from "./share/warrants/Warrants";

const Profiles = () => {
  return (
    <div className="w-full h-full">
      <div className="grid-cols-10 grid gap-3 h-[79vh] overflow-auto pt-3">
        <div className="grid gap-3 col-span-3">
          <div className="flex flex-col gap-1">
            <h1>PROFILES</h1>
            <SearchBar />
          </div>
          <Warrants
            name="VASILI HUSAK"
            description="ID: 2423523"
            image={vasili}
          />
          <Warrants
            name="VASILI HUSAK"
            description="ID: 2423523"
            image={vasili}
          />
          <Warrants
            name="VASILI HUSAK"
            description="ID: 2423523"
            image={vasili}
          />
          <Warrants
            name="VASILI HUSAK"
            description="ID: 2423523"
            image={vasili}
          />
          <Warrants
            name="VASILI HUSAK"
            description="ID: 2423523"
            image={vasili}
          />
          <Warrants
            name="VASILI HUSAK"
            description="ID: 2423523"
            image={vasili}
          />
        </div>
        <div className="grid gap-3 col-span-5">
          <div className="flex flex-col gap-3">
            <h1 className="h-[24px]">MANAGE PROFILE</h1>
            <div className="bg-black h-[30%] rounded-lg">adasdas</div>
            <div className="bg-black h-[23%] rounded-lg">asdasda</div>
            <div className="bg-black h-[23%] rounded-lg">adasdas</div>
            <div className="bg-black h-[23%] rounded-lg">asdasda</div>
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
