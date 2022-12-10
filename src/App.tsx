import React from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Announcements from "./components/Annoucements";
import ActiveUnits from "./components/ActiveUnits";

function App() {
  return (
    <div className="bg-red-500 flex flex-col justify-center items-center min-h-screen w-full">
      <div className="w-[80%] min-h-[80%] max-h-[90vh] rounded-lg bg-[#141517] p-3 items-center">
        <Header />
        <div className="grid grid-cols-16 grid-rows-1">
          <div className="col-span-3">
            <Menu />
          </div>
          <div className="col-span-9">
            <Announcements />
          </div>
          <div className="col-span-4">
            <ActiveUnits />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
