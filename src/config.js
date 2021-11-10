import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://lume-engine.herokuapp.com",
});
