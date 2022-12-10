import React from "react";
import search from "../../../assets/search.svg";

const SearchBar = () => {
  return (
    <div className="w-full flex justify-end border-2 rounded bg-black p-2">
      <div className="bg-blue-500 h-7 w-7 flex justify-center items-center rounded">
        <img className="" src={search} alt="" />
      </div>
    </div>
  );
};

export default SearchBar;
