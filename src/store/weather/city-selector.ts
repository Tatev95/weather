import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../index";

export const citySelector = (state: RootState) => state.city;

export const citiesSelector = createSelector(citySelector, (city) => city.city);

export const errorSelector = createSelector(citySelector, (city) => city.error);
export const loadingSelector = createSelector(
  citySelector,
  (city) => city.isLoading
);
