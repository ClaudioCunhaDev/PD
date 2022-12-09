import arrow_right from "../assets/Arrow 1.svg";
import arrow_left from "../assets/Arrow 2.svg";
import search from "../assets/search.svg";
import vasili from "../assets/Vasili.svg";
import warning from "../assets/warning_amber.svg";

const Announcements = () => {
  return (
    <>
      <div className="flex gap-3 items-center mt-6">
        <h2 className="font-bold mb-3">ANNOUCEMENT</h2>
        <div className="w-7 h-7 ml-2 mb-3 rounded flex justify-center items-center bg-blue-500">
          <img src={arrow_right} alt="" />
        </div>
        <div className="w-7 h-7 mb-3 rounded flex justify-center items-center bg-blue-500">
          <img src={arrow_left} alt="" />
        </div>
      </div>
      <div className="flex gap-5">
        <div className="w-[348px] h-[240px] bg-black	 flex flex-col border-2-black rounded">
          <h1 className="mt-3 ml-3 text-sm font-bold border-b-2">
            ANNOUNCEMENT NAME
          </h1>
          <div className="w-[302px] h-[146px] flex justify-center m-3 text-sm">
            <p className="mr-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p className="mt-3 ml-3 text-sm">
              12.11.22 <span className="font-bold">19:40</span>
            </p>
            <p className="mt-3 font-bold text-sm mr-3">2 HOURS AGO</p>
          </div>
        </div>
        <div className="w-[348px] h-[240px] bg-black flex flex-col border-2-black rounded">
          <h1 className="mt-3 ml-3 text-sm font-bold border-b-2">
            ANNOUNCEMENT NAME
          </h1>
          <div className="w-[302px] h-[146px] flex justify-center m-3 text-sm">
            <p className="mr-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p className="mt-3 ml-3 text-sm">
              12.11.22 <span className="font-bold">19:40</span>
            </p>
            <p className="mt-3 mr-3 font-bold text-sm">2 HOURS AGO</p>
          </div>
        </div>
      </div>
      <div className="flex w-[326px] gap-5">
        <div className="flex flex-col gap-3">
          <div className="w-[326px]">
            <h1 className="mt-5">WARRATS</h1>
          </div>
          <div className="flex justify-end border-2 rounded bg-black p-2">
            <div className="bg-blue-500 h-7 w-7 flex justify-center items-center rounded">
              <img className="" src={search} alt="" />
            </div>
          </div>
          <div className="flex bg-black rounded gap-3">
            <img className="ml-2 " src={vasili} alt="" />
            <div className="text-sm mt-5">
              <h1 className="">VASILI HUSAK</h1>
              <hr />
              <p className="mt-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
              </p>
            </div>
          </div>
          <div className="flex bg-black rounded gap-3">
            <img className="ml-2 " src={vasili} alt="" />
            <div className="text-sm mt-5">
              <h1 className="">VASILI HUSAK</h1>
              <hr />
              <p className="mt-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="w-[326px]">
            <h1 className="mt-5">REPORTS</h1>
          </div>
          <div className="flex justify-end border-2 rounded bg-black p-2">
            <div className="bg-blue-500 h-7 w-7 flex justify-center items-center rounded">
              <img className="" src={search} alt="" />
            </div>
          </div>
          <div className="flex bg-black rounded gap-3 h-[100%]">
            <div className="h-[60%] w-[80%] flex justify-center items-center bg-[#FFC061] rounded mt-6 ml-3">
              <img className="" src={warning} alt="" />
            </div>
            <div className="text-sm mt-5">
              <h1 className="">DRUG TRAFFICKING'S</h1>
              <hr />
              <p className="mt-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
              </p>
            </div>
          </div>
          <div className="flex bg-black rounded gap-3 h-[100%]">
            <div className="h-[60%] w-[80%] flex justify-center items-center bg-[#FFC061] rounded mt-6 ml-3">
              <img className="" src={warning} alt="" />
            </div>
            <div className="text-sm mt-5">
              <h1 className="">MISSING PERSON</h1>
              <hr />
              <p className="mt-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Announcements;
