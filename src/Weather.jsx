import React, { useState } from "react";
import Search from "./Search";

const Weather = () => {
  const [name, setName] = useState("");

  return (
    <div className="cart">
      <Search setName={setName} />
    </div>
  );
};

export default Weather;
