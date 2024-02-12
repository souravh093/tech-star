import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
const Search = () => {
  return (
    <div className="flex items-center  px-5 rounded-md bg-gray-50">
      <input
        type="text"
        className="h-full font-semibold outline-none py-4 w-[600px]"
        placeholder="Search"
      />
      <AiOutlineSearch className="text-2xl" />
    </div>
  );
};

export default Search;
