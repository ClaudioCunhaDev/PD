import analytics from "../assets/analytics.svg";
import pan_tool from "../assets/pan_tool.svg";
import face from "../assets/face.svg";
import record_voice_over from "../assets/record_voice_over.svg";
import launch from "../assets/launch.svg";
import perm_identity from "../assets/perm_identity.svg";
import input_exit from "../assets/input_exit.svg";

const Menu = () => {
  return (
    <>
      <div className="pt-8 pl-5 flex flex-col gap-5 h-[80vh]">
        <div className="flex gap-5">
          <img src={analytics}></img>
          <h2>DATASBOARD</h2>
        </div>
        <div className="flex gap-5">
          <img src={pan_tool}></img>
          <h2>INCIDENTS</h2>
        </div>
        <div className="flex gap-5">
          <img src={face}></img>
          <h2>PROFILES</h2>
        </div>
        <div className="flex gap-4">
          <img src={record_voice_over}></img>
          <h2>REPORTS</h2>
        </div>
        <div className="flex gap-5">
          <img src={launch}></img>
          <h2>EVIDENCE</h2>
        </div>
        <div className="flex gap-5">
          <img src={perm_identity}></img>
          <h2>STAFF</h2>
        </div>
      </div>
      <div>
        <div className="flex gap-5 ml-10">
          <img src={input_exit}></img>
          <h2>EXIT</h2>
        </div>
      </div>
    </>
  );
};

export default Menu;
