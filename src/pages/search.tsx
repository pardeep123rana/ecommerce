// import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center p-6 bg-slate-400">
        <div className="flex border-2 border-gray-300">
          <input
            className="flex-1 px-4 py-2 text-base border-none outline-none"
            type="text"
            placeholder="Search"
          />
          <div className="p-2 bg-gray-200 rounded-r-md">
            <FaSearch className="cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
