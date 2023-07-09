import React from "react";
import ReactDOM from "react-dom";
import router from "./routers/router";
import Header from "./components/Header";
import "./index.css";

import { RouterProvider } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);
