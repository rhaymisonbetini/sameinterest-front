import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api",
});

api.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
api.interceptors.request.use(async (config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
