import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Example from "./components/Example";
import App from "./App";
import store from './Store';

class Root extends Component {
  render() {
    const change = {
      a: 9000,
      b: 9000
    };
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" exact render={() => <App change={change} />} />
            <Route path="/example" render={() => <Example />} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default Root;
