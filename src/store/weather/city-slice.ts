import { createSlice } from "@reduxjs/toolkit";
import { getCityWeather } from "../../Requests/CityRequest";

type wheatherState = {
  isLoading: boolean;
  city: string;
  error: boolean;
};

const initialState: wheatherState = {
  city: "",
  isLoading: false,
  error: false,
};

const citySlice = createSlice({
  name: "wheather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCityWeather.pending, (state) => {
      state.isLoading = true;
      state.error = false;
    }),
      builder.addCase(getCityWeather.fulfilled, (state, action) => {
        state.isLoading = false;
        state.city = action.payload;
        state.error = false;
      }),
      builder.addCase(getCityWeather.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export const {} = citySlice.actions;

export default citySlice.reducer;
