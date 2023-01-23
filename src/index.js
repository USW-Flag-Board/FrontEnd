import React from "react";
import ReactDOM from "react-dom/client";
import { Provider, createStore } from "react-redux";
import reducer from "./redux/store";
import App from "./App";

const store = createStore(reducer);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);