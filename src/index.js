import "react-app-polyfill/ie9"
import "react-app-polyfill/ie11"
import "react-app-polyfill/stable"
import React from "react"
import ReactDOM from "react-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import './common/scss/main.scss';
import App from "./app"

ReactDOM.render(<App />, document.getElementById("root"))

