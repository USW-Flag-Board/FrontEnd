import { cookiesOption } from "../utils/cookiesOption";
import { SessionStorage } from "../utils/browserStorage";
import axios from "axios";

const { REACT_APP_DEV_API_END_POINT } = process.env;
const instance = axios.create({
  baseURL: REACT_APP_DEV_API_END_POINT,
  withCredentials: true,
});

async function handleUnauthorizedError(error, originalRequest) {
  const status = error.response.status;
    
  if (status === 401 || status === 409) {
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
    const accessToken = SessionStorage.get("UserToken");
    const refreshToken = await cookiesOption.get("refresh_token");
    const response = await instance.post('/auth/reissue', {
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

instance.interceptors.response.use(
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

export default instance;
