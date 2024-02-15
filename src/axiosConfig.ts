import axios from "axios";
import * as https from "https";

const BASE_URL = "https://api.openweathermap.org/data/2.5/";

export const api = axios.create({
  baseURL: BASE_URL,
});
