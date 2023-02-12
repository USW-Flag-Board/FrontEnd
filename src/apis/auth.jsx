import {baseInstance} from "./instance";

export const PostLogin = (loginId, password) => {
  return baseInstance.post("/auth/login", {
    loginId,
    password,
  });
};

export const PostLoginId = (loginId) => {
  return (
    baseInstance.post("/auth/check/id"),
    {
      loginId,
    }
  );
};
