import React from "react";
import { useSelector } from "react-redux";
import { citySelector } from "../../store/weather/city-selector";
import "./searchedCityWeather.css";

export const SearchedCityWeather = () => {
  const cityData = useSelector(citySelector);
  const citiesData = cityData?.city;
  const listOfDate = citiesData?.list;
  const time = listOfDate?.map((list: any) => list.dt_txt);

  return (
    <>
      <div className="weather_content">
        {listOfDate?.map((city: any) => (
          <>
            <div key={city?.main?.temp} className="weather_list">
              {Math.round(city?.main?.temp - 273.15)} °C
            </div>
          </>
        ))}
      </div>{" "}
      <div className="time">
        {time?.map((hour: any) => (
          <p key={hour?.split(" ")[1].substring(0, 5)}>
            {" "}
            {hour?.split(" ")[1].substring(0, 5)}
          </p>
        ))}
      </div>
    </>
  );
};
