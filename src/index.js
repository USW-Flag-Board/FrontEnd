import React from "react";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import store from "./redux/store";
import axios from "axios";
import App from "./App";

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const config = error.config;
    const status = error.response.status;

    if (status === 401) {
      const originalRequest = config;
      const accessToken = sessionStorage.getItem("UserToken");
      const refreshToken = await cookies.get("refresh_token");
      axios.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
      originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
      return axios(originalRequest);
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
