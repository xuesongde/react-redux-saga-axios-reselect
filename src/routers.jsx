import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Selectors from "./redux/selectors";
import App from "./containers/app/App";
import { Spin } from "antd";

class Routers extends Component {
  render() {
    const { spinStatus } = this.props;
    return (
      <Spin tip="Loading..." delay={400} spinning={spinStatus} size="large">
        <Router>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/" exact component={App}></Route>
          </Switch>
        </Router>
      </Spin>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    spinStatus: Selectors.getSpinStatus(state)
  };
};

export default connect(mapStateToProps)(Routers);
