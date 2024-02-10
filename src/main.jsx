import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import AuthListener from "./components/shared/AuthListener.js";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <NextUIProvider>
      <RouterProvider router={router} />
      <AuthListener />
    </NextUIProvider>
  </Provider>
);
