import React, { FC, useEffect, useState } from "react";
import { useAppDispatch } from "../../store";
import { getWeather } from "../../Requests/WetherRequest";
import { WhetherConstants } from "../../constants";
import { weatherSelector } from "../../store/weather/weather-selector";
import { useSelector } from "react-redux";
import "./showWeather.css";
import humidityimage from "../../assets/images/humidity.png";
import cloud from "../../assets/images/cloud.jpg";
import windimage from "../../assets/images/wind2.png";
import { Search } from "../search";
import { SearchedCityWeather } from "../searchedCityWeather";
import { citySelector } from "../../store/weather/city-selector";
import { Tepmerature } from "../tepmerature";
import { TempContext } from "../TempContext";

export const ShowWeather: FC = () => {
  const dispatch = useAppDispatch();
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });

  const weatherData = useSelector(weatherSelector);
  const cityData = useSelector(citySelector);

  const currnetWheather = weatherData.currentWeather;
  const tempWithKelvin = currnetWheather?.main?.temp;
  const tempC = Math.round(+tempWithKelvin - 273.15);
  const humidity = currnetWheather?.main?.humidity;
  const description = currnetWheather?.weather?.[0]?.description;

  const wind = currnetWheather?.wind?.speed;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (currentPosition) {
      setPosition({
        latitude: currentPosition.coords.latitude,
        longitude: currentPosition.coords.longitude,
      });
    });
  }, []);

  useEffect(() => {
    if (position.latitude !== 0 && position.longitude !== 0) {
      dispatch(
        getWeather({
          lat: position.latitude,
          lon: position.longitude,
          appid: WhetherConstants.apiid,
        })
      );
    }
  }, [position]);

  return (
    <TempContext.Provider
      value={{
        name: currnetWheather?.name,
        tempC: tempC,
      }}
    >
      <div className="show_weather">
        <Search />
        <Tepmerature />
        <img className="cloud" src={cloud} alt="cloud" />
        <p>{description}</p>
        <div className="wind_section">
          <img className="wind" src={windimage} alt="wind" />
          <p> {wind} m/s</p>
        </div>

        <div className="humidity_section">
          <img src={humidityimage} alt="aaa" className="humidity_img" />
          {humidity}%
        </div>
        {cityData?.city !== "" && <SearchedCityWeather />}
      </div>
    </TempContext.Provider>
  );
};
