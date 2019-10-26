import React, { Component } from 'react'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import configureStore from './redux/store'
import App from './containers/app/App';


export default class Root extends Component {
  render() {
    const store = configureStore();
    return (
      <Provider store={store}>
        <Router>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/" exact component={App}>
            </Route>
          </Switch>
        </Router>
      </Provider>
    )
  }
}
