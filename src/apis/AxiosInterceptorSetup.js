import {cookiesOption} from "../utils/cookiesOption";
import {LocalStorage, SessionStorage} from "../utils/browserStorage";
import {baseInstance} from "./instance";
import axios from "axios";

async function handleUnauthorizedError(error, originalRequest, navigate) {
  const status = error.response.status;
  const tokenExp = SessionStorage.get("expire");
  const currentTime = new Date().getTime();

  if (status === 401) {
    if (tokenExp - currentTime < 0) {
      const { accessToken, refreshToken } = await refreshTokens();
      updateTokens(accessToken, refreshToken);
      originalRequest.headers.Authorization = `Bearer ${accessToken}`;
    } else {
      const accessToken = sessionStorage.getItem("UserToken");
      originalRequest.headers.Authorization = `Bearer ${accessToken}`;
    }
    return axios(originalRequest);
  } else {
    return Promise.reject(error);
  }
}

async function refreshTokens() {
  try {
    const accessToken = sessionStorage.getItem("UserToken");
    const refreshToken = await cookiesOption.get("refresh_token");
    const response = await axios.post('/api/token/refresh', {
      accessToken,
      refreshToken,
    });
    const { accessToken: newAccessToken, refreshToken: newRefreshToken } = response.data.payload;
    const expiresIn = response.data.payload.accessTokenExpiresIn;
    SessionStorage.set("expire", new Date(expiresIn).getTime());
    return { accessToken: newAccessToken, refreshToken: newRefreshToken };
  } catch (error) {
    return Promise.reject(error);
  }
}

function updateTokens(accessToken, refreshToken) {
  sessionStorage.setItem("UserToken", accessToken);
  cookiesOption.setRefresh("refresh_token", refreshToken);
}

async function AxiosInterceptorsSetup(navigate) {
  baseInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const originalRequest = error.config;
      const result = await handleUnauthorizedError(error, originalRequest, navigate);
      if (result) {
        return result;
      } else {
        return Promise.reject(error);
      }
    }
  );
}

export default AxiosInterceptorsSetup;
