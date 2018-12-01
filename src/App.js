import React, { Component } from 'react';
import Counter from "./components/Counter"
import './App.css';

class App extends Component {
  state = {
    counter: 0
  }
  render() {
    return (
      <div data-test="component-app">
       <h1 data-test="counter-display" data-test="counter-starts">The counter is curently {this.state.counter}</h1>
       <button data-test="increment-button">Increment Counter</button>
      </div>
    );
  }
}

export default App;
