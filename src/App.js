import React, { Component } from "react";
import { NavLink  } from 'react-router-dom';
import logo from "./logo.svg";
import "./App.css";

class Hello extends Component {
  constructor() {
    super();
    this.state = {
      a: 1,
      b: 99
    };
  }

  updateState() {
    this.setState(state => {
      console.log(state);
      return {
        b: state.b + 1
      };
    });
  }
  componentWillReceiveProps(nextProps) {
    console.log(`${JSON.stringify(nextProps)} NExt Props`);
    this.setState({ a: nextProps.number });
  }

  render() {
    return (
      <div>
        <h2>{this.state.b}</h2>
        <h2>{this.state.a}</h2>
        <button onClick={this.props.callMe} />
        <pre>{JSON.stringify(this.state)}</pre>
        <pre>{this.props.number}</pre>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 500,
      b: 600,
      text: "Holando"
    };
    this.change = {
      a: 9000,
      b: 9000
    };
    this.updateText = this.updateText.bind(this);
  }

  itemsList() {
    return [
      { name: "hola", pepe: "pepe" },
      { name: "hola", pepe: "pepe" },
      { name: "hola", pepe: "pepe" }
    ].map((item, index) => (
      <div key={index}>
        {item.name} y {item.pepe}
      </div>
    ));
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ a: nextProps.change.a });
  }

  updateState() {
    this.props.change.a = this.props.change.a + 1;
    this.change = {
      a: this.props.change.a
    };
    this.setState({ a: 1 });
    console.log(this.change);
  }

  callMe() {
    this.setState({ a: this.state.a + 1 });
    this.change.a = this.change.a + 1;
  }

  updateText(val) {
    this.setState({ text: val.target.value });
  }

  inputOrButton = () => {
    return true ? (
      <input type="text" value={this.state.text} onChange={this.updateText} />
    ) : (
      <button onClick={e => console.log(JSON.stringify(this.state))}>
        Give me value
      </button>
    );
  };
  returnSomething = () => {
    return "hola";
  };
  render() {
    return (
        <div className="App">
          <p>{this.returnSomething()}</p>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Hello callMe={this.callMe.bind(this)} number={this.change.a} />
            <button className="button" onClick={this.updateState.bind(this)} />
          </header>
          <h2>Hello</h2>
          <p>{JSON.stringify(this.state)}</p>
          <div>{this.itemsList()}</div>
          {this.inputOrButton()}
          <p>{this.returnSomething()}</p>
          {this.props.children}
          <NavLink style={{backgroundColor: 'red'}}to="/example">Go to Example</NavLink>
        </div>
    );
  }
}

export default App;
