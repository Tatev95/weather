import React, { useContext } from "react";
import { TempContext } from "../TempContext";

export const Tepmerature = () => {
  const weather = useContext(TempContext);
  console.log(weather);

  return (
    <div>
      <div>
        <p className="weather"> Weather in {weather?.name}</p>
        <p>{weather?.tempC ? weather?.tempC : 0} °C</p>
      </div>
    </div>
  );
};
