import React from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Home from "./components/Home";
import { debugData } from "./utils/debugData";
import { useNavigationState } from "./atoms/navigationAtom";
import Incidents from "./components/Incidents";
import Profiles from "./components/Profiles";
import Incidents2 from "./components/Incidents2";
import Reports from "./components/Reports";
import Evidence from "./components/Evidence";
import { useModalState } from "./atoms/modalState";
import Evidence2 from "./components/Evidence2";
import Profiles2 from "./components/Profiles2";
import clock from "./assets/clock.svg";
import location from "./assets/location.svg";
import feedBack from "./assets/feedback.svg";
import deleteImg from "./assets/deleteImg.svg";
import editImg from "./assets/editImg.svg";
import vasili from "./assets/vasili.svg";
import IncidenceItem from "./components/share/incidenceItem/IncidenceItem";
import InvolmentItem from "./components/share/involmentItem/InvolmentItem";

// This will set the NUI to visible if we are\
// developing in browser
debugData([
  {
    action: "setVisible",
    data: true,
  },
]);

function App() {
  const [navigationState, setNavigationState] = useNavigationState();
  const [modalState, setModalState] = useModalState();

  const renderPage = React.useCallback(() => {
    switch (navigationState.path) {
      case "home":
        return <Home />;
      case "incidents":
        return <Incidents />;
      case "incidents2":
        return <Incidents2 />;
      case "profiles":
        return <Profiles />;
      case "profiles2":
        return <Profiles2 />;
      case "reports":
        return <Reports />;
      case "evidence":
        return <Evidence />;
      case "evidence2":
        return <Evidence2 />;
      default:
        return <Home />;
    }
  }, [navigationState]);

  return (
    <div
      className="bg-red-500 flex flex-col justify-center items-center min-h-screen w-full"
      onClick={() => {
        if (modalState === true) setModalState(false);
      }}
    >
      <div
        className={`w-[80%] min-h-[80%] max-h-[90vh] rounded-lg bg-[#141517] p-3 py-4 items-center relative transition-all ${
          modalState ? "blur-sm" : ""
        }`}
      >
        <Header />
        <div className="grid grid-cols-12 grid-rows-1 w-full">
          <div className="col-span-2">
            <Menu />
          </div>
          <div className="col-span-10">{renderPage()}</div>
        </div>
      </div>
      {modalState && (
        <div className="bg-black absolute w-[70%] h-[70%] rounded-lg flex justify-center items-center overflow-y-auto">
          <div className="w-[90%] h-[90%] grid grid-cols-9 gap-3">
            <div className="h-full grid col-span-7 w-[80%]">
              <div className=" h-[100%]">
                <div className="font-bold text-lg h-[10%]">NEW INCIDENT</div>
                <div className="h-[60%] bg-black rounded-lg pl-5">
                  <div className="h-[100%]">
                    <div className="h-[20%] w-[80%] border-b border-b-white">
                      <h1 className="text-2xl font-bold ">ENTER TITLE</h1>
                    </div>
                    <div className="w-[80%] h-[30%]">
                      <textarea
                        className="border-b border-b-white h-full w-full placeholder:text-[#8C8C8C] bg-transparent resize-none"
                        placeholder="ENTER THE TEXT"
                      />
                    </div>
                    <div className="flex justify-between w-[90%] p-3">
                      <div className="flex items-center gap-3 w-[400px]">
                        <img className="h-4" src={location} alt="" />
                        <h1 className="font-bold text-lg">LOCATION:</h1>
                        <p className="text-[#8C8C8C] text-lg">ENTER TEXT...</p>
                      </div>
                      <div className="flex items-center gap-1 w-[300px]">
                        <img className="h-4" src={clock} alt="" />
                        <h1 className="font-bold text-lg">TIME:</h1>
                        <p className="text-lg">--/--, 00.00.0000</p>
                      </div>
                    </div>
                    <br />
                    <br />
                    <div className="flex gap-3 pt-3">
                      <div className="p-3 cursor-pointer text-sm font-bold h-10 w-[100px] bg-red-500 flex items-center rounded justify-center">
                        <h1>CANCEL</h1>
                      </div>
                      <div className="cursor-pointer text-sm font-bold h-10 w-[100px] bg-green-500 flex items-center rounded justify-center">
                        <h1>CREATE</h1>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <div className="h-[30%]">
                  <div className="flex gap-3 text-xl font-bold">
                    <h1>EVIDENCE</h1>
                    <p>+</p>
                  </div>
                  <br />
                  <div className=" grid grid-cols-3 h-[88%] w-[90%] gap-3">
                    <div className="grid col-span-1">
                      <IncidenceItem />
                      <IncidenceItem />
                    </div>
                    <div className="grid col-span-1">
                      <IncidenceItem />
                      <IncidenceItem />
                    </div>
                    <div className="grid col-span-1">
                      <IncidenceItem />
                      <div className="bg-[#0D0F14] rounded-lg flex p-2 gap-2 h-[60px] items-center justify-between ">
                        <div className="flex gap-2 items-center">
                          <div className="h-9 w-9 bg-amber-800">
                            <img className="p-2" src={feedBack} alt="" />
                          </div>
                          <h1 className="text-md font-bold">#4322</h1>
                        </div>
                        <div className="flex gap-2 p-2">
                          <img
                            className="cursor-pointer"
                            src={editImg}
                            alt=""
                          />
                          <img
                            className="cursor-pointer"
                            src={deleteImg}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid col-span-2 h-full">
              <div className="h-[100%] flex flex-col gap-3">
                <div className="font-bold text-lg">
                  <h1>INVOLMENT</h1>
                </div>
                <div className="w-full rounded-lg pl-5">
                  <div className="h-[100%]">
                    <div className="flex flex-col ">
                      <div className="flex justify-between">
                        <h1 className="text-lg font-bold ">CRIMINALS</h1>
                        <h1 className="font-bold text-lg">+</h1>
                      </div>
                      <div className="flex flex-col gap-3">
                        <InvolmentItem />
                        <InvolmentItem />
                      </div>
                    </div>
                    <br />
                    <div className="flex flex-col gap-3">
                      <div className="flex justify-between">
                        <h1 className="text-lg font-bold ">SPECTATORS</h1>
                        <h1 className="font-bold text-lg">+</h1>
                      </div>
                      <div className="flex flex-col gap-3">
                        <InvolmentItem />
                        <InvolmentItem />
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <div className="w-full">
                  <div className="flex justify-between text-xl font-bold">
                    <h1>EVIDENCE</h1>
                    <p>+</p>
                  </div>
                  <br />
                  <div className="grid grid-cols-1 grid-rows-2 gap-5">
                    <div className="grid row-span-1">
                      <IncidenceItem />
                    </div>
                    <div className="grid row-span-1">
                      <IncidenceItem />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
