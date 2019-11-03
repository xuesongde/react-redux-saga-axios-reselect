import "react-app-polyfill/ie9";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./common/scss/main.scss";
import App from "./app";
import { Spin } from "antd";

ReactDOM.render(
  <>
    <App />
    <Spin tip="Loading..." size="large" />
  </>,
  document.getElementById("root")
);
