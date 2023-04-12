import {baseInstance} from "./instance";

export const PostLogin = (loginId, password) => {
  return baseInstance.post("/auth/login", {
    loginId,
    password,
  });
};

export const PostEmail = async (originEmailData) => {
  return await baseInstance.post("/auth/check/email", {
    email: originEmailData
  });
};

export const PostCurrentEmail = async (signUpdata) => {
  return await baseInstance.post("/auth/join", {
    signUpdata
  });
};

export const PostSignUp = async (email, certification) => {
  return await baseInstance.post("/auth/join", {
      certification: certification,
      email: email
  });
};
