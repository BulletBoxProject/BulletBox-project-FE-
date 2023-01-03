import axios from "axios";
import { REACT_APP_BACKAPI } from ".";

// 헤더 없이 사용하는 경우( API 추가 )
export const instanceApiV1 = axios.create({
  baseURL: REACT_APP_BACKAPI,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

// 헤더 토큰 값이 들어가야 하는 경우( API 추가 )
export const baseURLApiV1 = axios.create({
  baseURL: REACT_APP_BACKAPI,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

baseURLApiV1.interceptors.request.use((config) => {
  if (config.headers === undefined) return;
  const token = localStorage.getItem("Authorization");
  config.headers["Authorization"] = `${token}`;
  return config;
});
