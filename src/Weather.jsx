import React, { useState } from "react";
import axios from "axios";
import Search from "./Search";
import Data from "./Data";

const Weather = () => {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);

  //API
  const base_URL = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=edc228562ac0a8aa3116d41c0687cf56&units=metric`;

  const API = async () => {
    const GET_DATA = await axios.get(`${base_URL}`);

    return GET_DATA.data;
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setData([await API()]);
    setName("");
  };

  return (
    <form className="cart" onSubmit={submitHandler}>
      <Search setName={setName} name={name} />

      {data.length > 0 &&
        data.map((item) => (
          <Data
            key={Math.random() * 100}
            name={item.name}
            icon={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${item.weather[0]["icon"]}.svg`}
            temp={item.main.temp}
            wind={item.wind.speed}
            sky={item.weather[0]["description"]}
          />
        ))}
    </form>
  );
};

export default Weather;
