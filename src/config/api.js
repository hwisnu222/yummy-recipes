import axios from "axios";

export const API_BASE = axios.create({
  baseURL: import.meta.env.VITE_API,
});
