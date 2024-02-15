import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../axiosConfig";

export const getCityWeather = createAsyncThunk(
  "wether/getCityWether",
  async (
    { city, count, appid }: { city: string; count: number; appid: string },
    { rejectWithValue }
  ) => {
    try {
      const res = await api.get(
        `forecast?q=${city}&cnt=${count}&appid=${appid}`
      );
      return res.data;
    } catch (e) {
      return rejectWithValue("my error");
    }
  }
);
