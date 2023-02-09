import {baseInstance} from "./instance";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const AutoLogin = (loginId, password) => {
  return baseInstance.post("/api/auth/login", {
    loginId,
    password,
  });
};
