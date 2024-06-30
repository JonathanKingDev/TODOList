// axiosConfig.ts
import axios from "axios";
import { getAxiosToken } from "./auth-service";
import { ENV_VARIABLES } from "../env";

const apiBase = axios.create({
  baseURL: ENV_VARIABLES.VITE_API_BASE_URL,
});

apiBase.interceptors.request.use(
  (config) => {
    const token = getAxiosToken();
    if (token) {
      config.headers["Content-Type"] = "application/json";
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiBase;
