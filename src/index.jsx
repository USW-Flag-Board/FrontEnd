import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./redux/store";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  EmailAuth,
  IdPassword,
  Privacy,
  JoinTypeSelect,
  ServiceAgree,
} from "./components/signUp";
import { NotFound, SignUpPage } from "./pages";

// const router = createBrowserRouter([
//   {
//     path: "signUp",
//     element: <SignUpPage />,
//     errorElement: <NotFound />,
//     children: [
//       { index: true, element: <ServiceAgree /> },
//       { path: "joinType", element: <JoinTypeSelect /> },
//       { path: "idPassword", element: <IdPassword /> },
//       { path: "privacy", element: <Privacy /> },
//       { path: "emailAuth", element: <EmailAuth /> },
//     ],
//   },
// ]);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
