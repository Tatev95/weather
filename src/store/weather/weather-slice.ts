import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getWeather } from "../../Requests/WetherRequest";

type cityState = {
  isLoading: boolean;
  currentWeather: any;
};

const initialState: cityState = {
  isLoading: false,
  currentWeather: [],
};

const wheatherSlice = createSlice({
  name: "wheather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getWeather.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(getWeather.fulfilled, (state, action) => {
        state.isLoading = false;

        state.currentWeather = action.payload;
      }),
      builder.addCase(getWeather.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const {} = wheatherSlice.actions;

export default wheatherSlice.reducer;
