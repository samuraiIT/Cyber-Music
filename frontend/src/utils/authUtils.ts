import Cookies from "js-cookie";
import { LoginData } from "./types";

export const logOutWithCookies = () => {
  Cookies.remove("token");
  localStorage.removeItem("userData");
};

export const getToken = () => Cookies.get("token");

export const setUserData = (id: number, username: string) => {
  const userData: LoginData = {
    id: id,
    username: username
  };

  localStorage.setItem("userData", JSON.stringify(userData));
};

export const getUserData = (): LoginData => {
  const data = localStorage.getItem("userData");
  if (data) {
    return JSON.parse(data);
  }

  return {
    id: null,
    username: ""
  };
};
