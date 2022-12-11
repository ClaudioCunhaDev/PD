import React from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Home from "./components/Home";
import { debugData } from "./utils/debugData";
import { useNavigationState } from "./atoms/navigationAtom";
import Incidents from "./components/Incidents";
import Profiles from "./components/Profiles";

// This will set the NUI to visible if we are
// developing in browser
debugData([
  {
    action: "setVisible",
    data: true,
  },
]);

function App() {
  const [navigationState, setNavigationState] = useNavigationState();
  const renderPage = React.useCallback(() => {
    switch (navigationState.path) {
      case "home":
        return <Home />;
      case "incidents":
        return <Incidents />;
      case "profiles":
        return <Profiles />;
      default:
        return <Home />;
    }
  }, [navigationState]);

  return (
    <div className="bg-red-500 flex flex-col justify-center items-center min-h-screen w-full">
      <div className="w-[80%] min-h-[80%] max-h-[90vh] rounded-lg bg-[#141517] p-3 py-4 items-center">
        <Header />
        <div className="grid grid-cols-12 grid-rows-1 w-full">
          <div className="col-span-2">
            <Menu />
          </div>
          <div className="col-span-10">{renderPage()}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
