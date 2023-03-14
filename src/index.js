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
    const config = error.config;
    const status = error.response.status;

    if (status === 401) {
      const originalRequest = config;
      const accessToken = sessionStorage.getItem("UserToken");
      const refreshToken = await cookies.get("refresh_token");
      axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
      originalRequest.headers.Authorization = `Bearer ${accessToken}`;
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
