import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { ApolloProvider } from "react-apollo";
import { client } from "./Apollo";
import Example from "./components/Example";
import App from "./App";
import store from "./Store";
import People from "./components/People";

class Root extends Component {
  render() {
    const change = {
      a: 9000,
      b: 9000
    };
    return (
      <Provider store={store}>
        <ApolloProvider client={client}>
          <Router>
            <Switch>
              <Route path="/" exact render={() => <App change={change} />} />      
              <Route path="/example" render={() => <Example />} />
              <Route path="/people" component={People} />
            </Switch>
          </Router>
        </ApolloProvider>
      </Provider>
    );
  }
}

export default Root;
