import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    counter: 0
  }

  handleClick = () => this.setState({counter: this.state.counter + 1})
  

  render() {
    return (
      <div data-test="component-app">
       <h1 data-test="counter-display" >The counter is curently {this.state.counter}</h1>
       <button onClick={this.handleClick} data-test="increment-button">Increment Counter</button>
      </div>
    );
  }
}

export default App;