import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Example from './Example';

class Root extends Component {
  render() {
    return (<Router>
      <Route path="/example" component={Example}/>
    </Router>);
  }
}

export default Root;
