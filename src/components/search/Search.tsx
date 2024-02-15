import React, { useCallback, useRef, useState } from "react";
import "./search.css";
import { useAppDispatch } from "../../store";
import { getCityWeather } from "../../Requests/CityRequest";
import { WhetherConstants } from "../../constants";
import {
  errorSelector,
  loadingSelector,
} from "../../store/weather/city-selector";
import { useSelector } from "react-redux";

export const Search = () => {
  const appid = WhetherConstants.apiid;
  const dispatch = useAppDispatch();
  const searchError = useSelector(errorSelector);
  const loading = useSelector(loadingSelector);
  const timeOutRef = useRef<ReturnType<typeof setTimeout>>();

  const [city, setCity] = useState("");

  const handleSearchCityWether = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setCity(e.target.value);
      clearTimeout(timeOutRef.current);
      timeOutRef.current = setTimeout(() => {
        if (e.target.value !== "") {
          dispatch(getCityWeather({ city: e.target.value, count: 5, appid }));
        }
      }, 2000);
    },
    []
  );

  return (
    <>
      <input
        className="search_input"
        type="text"
        placeholder="search weather"
        onChange={handleSearchCityWether}
        value={city}
      />
      {searchError && (
        <div className="error">sorry, there is no city like `{city}`</div>
      )}
      {loading && <p>...loading</p>}
    </>
  );
};
