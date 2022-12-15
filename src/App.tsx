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
        return <Profiles2  />;
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
        <div className="bg-blue-500 absolute top-[15%] left-[15%] z-10 w-[70%] h-[70%] rounded-lg">
          <h1>asdasdasdada</h1>
        </div>
      )}
    </div>
  );
}

export default App;
