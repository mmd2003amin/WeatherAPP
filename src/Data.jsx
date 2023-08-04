import React from "react";
import windIcon from "./assets/wind.png";
import tempIcon from "./assets/temp.svg";

const Data = ({ icon, temp, name, sky, wind }) => {
  return (
    <div className="mx-auto text-center">
      <img src={icon} alt="icon" className="mx-auto sm:w-36 mt-5" />

      <h3 className="text-white font-bold sm:text-xl mt-2 flex items-center justify-center">
        {temp} <img src={tempIcon} alt="temp" className="w-6 sm:w-8" />
      </h3>

      <h3 className="text-white font-bold sm:text-xl mt-5">{name}</h3>

      <div className="flex justify-between items-center text-white font-bold sm:text-lg mt-10">
        <h2 className="max-w-[5%]">{sky}</h2>

        <div className="flex items-center">
          <img src={windIcon} alt="wind" className="w-14 sm:w-20" />

          <div>
            <h3>{wind} Km/h</h3>
            <h3 className="mt-1">Wind</h3>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Data;
