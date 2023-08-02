import React from "react";
import searchIMG from "./assets/search.svg";

const Search = ({ setName }) => {
  
  const searchHandler = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search ..."
          className="mr-4 pl-2 outline-none rounded-3xl h-10 w-full"
          onChange={searchHandler}
        />
        <img
          src={searchIMG}
          title="searchIcon"
          className="bg-white rounded-full w-10 p-1.5"
        />
      </div>
    </div>
  );
};

export default Search;
