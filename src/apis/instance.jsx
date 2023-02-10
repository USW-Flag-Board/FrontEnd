import axios from "axios";
import Cookies from "universal-cookie";

const {REACT_APP_DEV_API_END_POINT} = process.env;

const baseInstance = axios.create({
  baseURL: REACT_APP_DEV_API_END_POINT,
  withCredentials: true,
});

const cookies = new Cookies();

baseInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const config = error.config;
    const status = error.response.status;

    console.log(error);
    if (error.response.data.errorCode === "EXPIRED_JWT_TOKEN_EXCEPTION") {
      alert(error.response.data.errorCode);
      return Promise.reject(error);
    } else if (status === 401) {
      const originalRequest = config;
      const accessToken = sessionStorage.getItem("UserToken");
      const refreshToken = await cookies.get("refresh_token");
      if (!refreshToken) {
        alert(refreshToken);
        return Promise.reject(error);
      }

      return axios
        .post(`http://3.39.36.239:80/api/auth/reissue`, {
          accessToken,
          refreshToken,
        })
        .then((response) => {
          const {accessToken: newAccessToken, refreshToken: newRefreshToken} =
            response.data.payload;
          sessionStorage.setItem("UserToken", newAccessToken);
          cookies.set("refresh_token", newRefreshToken, {
            path: "/",
          });
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return axios(originalRequest);
        })
        .catch((error) => {
          console.log(error);
          alert("다시 로그인해주세요.");
          return Promise.reject(error);
        });
    }

    return Promise.reject(error);
  }
);

export {baseInstance};
