import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./weather/weather-slice";
import cityReducer from "./weather/city-slice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    city: cityReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
