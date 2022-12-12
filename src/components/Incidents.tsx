import React from "react";
import Warning from "./share/warning/Warning";
import feedBack from "../assets/feedback.svg";
import SearchBar from "./share/search/SearchBar";
import ArrowLeft from "./share/arrows/Arrow_left";
import ArrowRight from "./share/arrows/Arrow_right";
import { useNavigationState } from "../atoms/navigationAtom";

const Incidents = () => {
  const [navigationState, setNavigationState] = useNavigationState();

  return (
    <div className="w-full h-full">
      <div className="flex justify-between items-center">
        <div className="flex gap-3 text-xl">
          <h1>SEARCH RESULT</h1>
          <div className="bg-blue-500 rounded-md flex justify-center items-center h-[20px] p-3">
            <h1>54 RESULT</h1>
          </div>
        </div>
        <div className="w-[32.5%]">
          <SearchBar />
        </div>
      </div>
      <div className="flex gap-3 text-xs">
        <h1>TEXT</h1>
        <h1>TEXT</h1>
        <h1>TEXT</h1>
      </div>
      <div className="flex gap-3 h-[60vh] overflow-auto pt-3">
        <div
          className="flex flex-col gap-3 cursor-pointer"
          onClick={() => {
            setNavigationState({ path: "incidents2" });
          }}
        >
          <Warning
            name="Drug Trafficking's"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
            image={feedBack}
          />
          <Warning
            name="MISSING PERSON"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
            image={feedBack}
          />
          <Warning
            name="MISSING PERSON"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
            image={feedBack}
          />
          <Warning
            name="MISSING PERSON"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
            image={feedBack}
          />
          <Warning
            name="MISSING PERSON"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
            image={feedBack}
          />
        </div>
        <div className="flex flex-col gap-3 cursor-pointer">
          <Warning
            name="MISSING PERSON"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
            image={feedBack}
          />
          <Warning
            name="MISSING PERSON"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
            image={feedBack}
          />
          <Warning
            name="MISSING PERSON"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
            image={feedBack}
          />
          <Warning
            name="MISSING PERSON"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
            image={feedBack}
          />
          <Warning
            name="MISSING PERSON"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
            image={feedBack}
          />
        </div>
        <div className="flex flex-col gap-3 cursor-pointer">
          <Warning
            name="MISSING PERSON"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
            image={feedBack}
          />
          <Warning
            name="MISSING PERSON"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
            image={feedBack}
          />
          <Warning
            name="MISSING PERSON"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
            image={feedBack}
          />
          <Warning
            name="MISSING PERSON"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
            image={feedBack}
          />
          <Warning
            name="MISSING PERSON"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
            image={feedBack}
          />
        </div>
      </div>
      <div className="flex justify-center pt-5">
        <ArrowLeft />
        <h1 className="px-5">1/5</h1>
        <ArrowRight />
      </div>
    </div>
  );
};

export default Incidents;
