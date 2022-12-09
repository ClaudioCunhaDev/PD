import { useState } from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Announcements from "./components/Annoucements";
import ActiveUnits from "./components/ActiveUnits";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-red-500 flex flex-col justify-center items-center min-h-screen w-full">
      <div className="w-[80%] min-h-[80%] rounded-lg bg-slate-500 p-3 items-center">
        <Header />
        <div className="grid grid-cols-12 grid-rows-1">
          <div className="col-span-2">
            <Menu />
          </div>
          <div className="col-span-7">
            <Announcements />
          </div>
          <div className="col-span-3">
            <ActiveUnits />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
