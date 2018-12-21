/* eslint-disable semi */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createExample } from '../actions'
import { Link } from 'react-router-dom';

class Example extends Component {
   addCounter = () => {
    this.props.createExample();
  }

  render() {
    const hello = {a:"hola"};
    return (
      <div>
        Example
        <p>{this.props.example}</p>
        <button onClick={this.addCounter}>Add</button>
        <div>{hello.a}</div>
        <Link to="/">Go to HOME </Link>
        <Link to="/people">PEOPLE</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ example: state.example });
export default connect(mapStateToProps, { createExample })(Example)
