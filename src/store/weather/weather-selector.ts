import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../index";

export const weatherSelector = (state: RootState) => state.weather;

export const weathersSelector = createSelector(
  weatherSelector,
  (weather) => weather.currentWeather
);
