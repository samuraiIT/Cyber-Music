import axios from "axios";
import { getToken } from "utils/authUtils";

export const baseUrl = "http://localhost:3000";

const $api = axios.create({
  baseURL: baseUrl
});

$api.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers.Authorization = `Bearer ${getToken()}`;
  }
  return config;
});

$api.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
$api.defaults.headers.put["Content-Type"] = "application/json;charset=utf-8";
$api.defaults.headers.delete["Content-Type"] = "application/json;charset=utf-8";

export { $api };
