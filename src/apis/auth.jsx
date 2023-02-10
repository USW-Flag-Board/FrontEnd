import {baseInstance} from "./instance";

export const PostLogin = (loginId, password) => {
  return baseInstance.post("/api/auth/login", {
    loginId,
    password,
  });
};
