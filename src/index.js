import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import store from "./redux/store";
import App from "./App";
import Cookies from "universal-cookie";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const cookies = new Cookies();

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const config = error.config;
    const status = error.response.status;

    if (error.response.data.errorCode === "EXPIRED_JWT_TOKEN_EXCEPTION") {
      const navigate = useNavigate();
      alert("다시 로그인해주세요.");
      console.log(error);
      sessionStorage.removeItem("UserToken");
      localStorage.removeItem("UserToken");
      cookies.remove("refresh_token");
      navigate("/");
      return Promise.reject(error);
    } else if (status === 401) {
      const originalRequest = config;
      const accessToken = sessionStorage.getItem("UserToken");
      const refreshToken = await cookies.get("refresh_token");

      axios
        .post(`http://3.39.36.239:80/api/auth/reissue`, {
          accessToken: accessToken,
          refreshToken: refreshToken,
        })
        .then((response) => {
          alert(1);
          const {accessToken: newAccessToken, refreshToken: newRefreshToken} =
            response.data.payload;
          sessionStorage.setItem("UserToken", newAccessToken);
          cookies.set("refresh_token", newRefreshToken, {
            path: "/",
          });
          axios.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return axios(originalRequest);
        })
        .catch((error) => {
          alert(error);
        });
    }

    return Promise.reject(error);
  }
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
