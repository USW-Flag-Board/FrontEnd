import {baseInstance} from "./instance";
import axios from "axios";

export const PostLogin = (loginId, password) => {
  return baseInstance.post("/auth/login", {
    loginId,
    password,
  });
};

export const PostLoginId = (loginId) => {
  return baseInstance.post("/auth/check/id", {
    loginId,
  });
};

export const PostEmail = (originEmailData) => {
  return baseInstance.post("/auth/check/email", {
    email: originEmailData + "@suwon.ac.kr",
  });
};

export const PostCurrentEmail = (
  originEmailData,
  joinType,
  loginId,
  major,
  name,
  nickName,
  password,
  phoneNumber,
  studentId
) => {
  return baseInstance.post("/auth/join", {
    email: originEmailData + "@suwon.ac.kr",
    joinType,
    loginId,
    major,
    name,
    nickName,
    password,
    phoneNumber,
    studentId,
  });
};

export const PostRefreshToken = (accessToken, refreshToken) => {
  return axios.post(`http://3.39.36.239:8080/auth/reissue`, {
    accessToken,
    refreshToken,
  });
};
