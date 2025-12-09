import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://chat-seven-steel.vercel.app/api" : "/api",
  withCredentials: true,
});
