import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, {persistor} from "./redux/store";
import App from "./App";
import Cookies from "universal-cookie";
import axios from "axios";

const cookies = new Cookies();

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const {
      config,
      response: {status},
    } = error;
    if (status === 401) {
      const originalRequest = config;
      const accessToken = sessionStorage.getItem("UserToken");
      const refreshToken = await cookies.get("refresh_token");
      const {data} = await axios.post(
        `http://3.39.36.239:8080/api/auth/reissue`,
        {
          accessToken,
          refreshToken,
        }
      );
      const {accessToken: newAccessToken, refreshToken: newRefreshToken} = data;
      sessionStorage.setItem("UserToken", newAccessToken);
      await cookies.set("refresh_token", newRefreshToken);
      axios.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
      originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
      return axios(originalRequest);
    }
    return Promise.reject(error);
  }
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
  </React.StrictMode>
);