import "react-app-polyfill/ie9";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./common/scss/main.scss";
import "antd/dist/antd.css";
import App from "./app";
import { Spin } from "antd";

ReactDOM.render(
  <>
    <Spin tip="Loading..." delay={400} spinning={true} size="large">
      <App />
    </Spin>
  </>,
  document.getElementById("root")
);
