import {cookiesOption} from "../utils/cookiesOption";
import {LocalStorage, SessionStorage} from "../utils/browserStorage";
import {baseInstance} from "./instance";
import axios from "axios";
import {PostRefreshToken} from "./auth";
import {useNavigate} from "react-router-dom";

const AxiosInterceptorsSetup = ({navigate}) => {
  baseInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const config = error.config;
      const originalRequest = config;
      const accessToken = sessionStorage.getItem("UserToken");
      const refreshToken = await cookiesOption.get("refresh_token");
      const status = error.response.status;
      const tokenExp = SessionStorage.get("expire");
      const currentTime = new Date().getTime();

      if (status === 401) {
        if (tokenExp - currentTime < 0) {
          return PostRefreshToken(accessToken, refreshToken)
            .then((response) => {
              const {
                accessToken: newAccessToken,
                refreshToken: newRefreshToken,
              } = response.data.payload;
              const accessTokenExpiresIn =
                response.data.payload.accessTokenExpiresIn;
              SessionStorage.set(
                "expire",
                new Date(accessTokenExpiresIn).getTime()
              );
              sessionStorage.setItem("UserToken", newAccessToken);
              cookiesOption.setRefresh("refresh_token", newRefreshToken);
              originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
              return axios(originalRequest);
            })
            .catch((error) => {
              if (
                error.response.data.errorCode === "EXPIRED_JWT_TOKEN_EXCEPTION"
              ) {
                alert("다시 로그인해주세요.");
                SessionStorage.clear();
                LocalStorage.clear();
                cookiesOption.remove("refresh_token");
                navigate("/");
              }
            });
        } else {
          const originalRequest = config;
          const accessToken = sessionStorage.getItem("UserToken");
          originalRequest.headers.Authorization = `Bearer ${accessToken}`;
          return axios(originalRequest);
        }
      }
      return Promise.reject(error);
    }
  );
};

export default AxiosInterceptorsSetup;
