import React, { Component } from "react";
import { Provider } from "react-redux";
import RoutersA from "./routers";
import store from "./redux/store";

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <RoutersA />
      </Provider>
    );
  }
}

export default Root;
