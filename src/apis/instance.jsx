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
  }

  //   console.log(error);
  //   if (error.response.data.errorCode === "EXPIRED_JWT_TOKEN_EXCEPTION") {
  //     alert("다시 로그인해주세요.");
  //     console.log(error);
  //     sessionStorage.removeItem("UserToken");
  //     localStorage.removeItem("UserToken");
  //     cookies.remove("refresh_token");
  //     return Promise.reject(error);
  //   } else if (status === 401) {
  //     const originalRequest = config;
  //     const accessToken = sessionStorage.getItem("UserToken");
  //     const refreshToken = await cookies.get("refresh_token");

  //     axios
  //       .post(`http://3.39.36.239:80/api/auth/reissue`, {
  //         accessToken: accessToken,
  //         refreshToken: refreshToken,
  //       },)
  //       .then((response) => {
  //         alert(1);
  //         const {accessToken: newAccessToken, refreshToken: newRefreshToken} =
  //           response.data.payload;
  //         sessionStorage.setItem("UserToken", newAccessToken);
  //         cookies.set("refresh_token", newRefreshToken, {
  //           path: "/",
  //         });
  //         axios.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
  //         originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
  //         return axios(originalRequest);
  //       })
  //       .catch((error) => {
  //         alert(error);
  //       });
  //   }

  //   return Promise.reject(error);
  // }
);

export {baseInstance};
