import { cookiesOption } from "../utils/cookiesOption";
import axios from "axios";

const { REACT_APP_DEV_API_END_POINT } = process.env;

const instance = axios.create({
  baseURL: REACT_APP_DEV_API_END_POINT,
  withCredentials: true,
});

instance.interceptors.request.use(
  (config) => {
    const accessToken = sessionStorage.getItem("UserToken");
    if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    try {
      await handleUnauthorizedError(error, originalRequest);
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

async function handleUnauthorizedError(error, originalRequest) {
  const status = error.response.status;
  console.log(status);
  if (status === 401) {
    const { accessToken, refreshToken } = await refreshTokens();
    updateTokens(accessToken, refreshToken);
    originalRequest.headers.Authorization = `Bearer ${accessToken}`;

    return await axios(originalRequest);
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
    const response = await instance.post("/auth/reissue", {
      accessToken: accessToken,
      refreshToken: refreshToken,
    });
    const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
      response.data.payload;
    const expiresIn = response.data.payload.accessTokenExpiresIn;
    sessionStorage.setItem("expire", expiresIn);

    // setTimeout(refreshTokens, expiresIn * 1000);
    return { accessToken: newAccessToken, refreshToken: newRefreshToken };
  } catch (error) {
    if (error.response && error.response.status === 401) {
      // 새로운 엑세스 토큰이 만료되었을 경우
      return refreshTokens();
    } else {
      return Promise.reject(error);
    }
  }
}

export default instance;
