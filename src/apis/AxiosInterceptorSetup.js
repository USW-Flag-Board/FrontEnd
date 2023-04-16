import { cookiesOption } from "../utils/cookiesOption";
import { SessionStorage } from "../utils/browserStorage";
import { baseInstance } from "./instance";
import axios from "axios";

async function handleUnauthorizedError(error, originalRequest) {
  const status = error.response.status;
    
  if (status === 401) {
    const { accessToken, refreshToken } = await refreshTokens();
    updateTokens(accessToken, refreshToken);
    originalRequest.headers.Authorization = `Bearer ${accessToken}`;

    return axios(originalRequest);
  }
  return Promise.reject(error); 
}

function updateTokens(accessToken, refreshToken) {
  sessionStorage.setItem("UserToken", accessToken);
  cookiesOption.setRefresh("refresh_token", refreshToken);
}

async function refreshTokens() {
  try {
    const accessToken = sessionStorage.getItem("UserToken");
    const refreshToken = await cookiesOption.get("refresh_token");
    const response = await baseInstance.post('/auth/reissue', {
      accessToken: accessToken,
      refreshToken: refreshToken,
    });
    const { accessToken: newAccessToken, refreshToken: newRefreshToken } = response.data.payload;
    const expiresIn = response.data.payload.accessTokenExpiresIn;
    SessionStorage.set("expire", expiresIn);

    setTimeout(refreshTokens, expiresIn * 1000);
    return { accessToken: newAccessToken, refreshToken: newRefreshToken };
  } catch (error) {
    return Promise.reject(error);
  }
}


async function AxiosInterceptorsSetup() {
  baseInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const originalRequest = error.config;
      try {
        const result = await handleUnauthorizedError(error, originalRequest);
        if (result) {
          return result;
        } else {
          return Promise.reject(error);
        }
      } catch (error) {
        console.error(error);
        return Promise.reject(error);
      }
    }
  );
}

export default AxiosInterceptorsSetup;
