/* eslint-disable semi */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createExample } from '../actions'

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
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ example: state.example });
export default connect(mapStateToProps, { createExample })(Example)
