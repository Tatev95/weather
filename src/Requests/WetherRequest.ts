import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../axiosConfig";

export const getWeather = createAsyncThunk(
  "wether/getWether",
  async (
    { lat, lon, appid }: { lat: number; lon: number; appid: string },
    { rejectWithValue }
  ) => {
    try {
      const res = await api.get("weather", { params: { lat, lon, appid } });
      return res.data;
    } catch (e) {
      rejectWithValue("my error");
    }
  }
);
