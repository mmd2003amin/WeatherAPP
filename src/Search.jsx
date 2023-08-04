import React from "react";
import searchIMG from "./assets/search.svg";

const Search = ({ setName , name }) => {
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
          value={name}
          onChange={searchHandler}
        />
        <button type="submit" className="w-12">
          <img
            src={searchIMG}
            title="searchIcon"
            className="bg-white rounded-full p-1.5"
          />
        </button>
      </div>
    </div>
  );
};

export default Search;
