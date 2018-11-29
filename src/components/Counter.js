import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        value: 1

     }

     handleClick = () => {
         
         this.setState({value: this.state.value + 1})
     }

    render() { 
        return ( <div>
            <h1> This count is {this.state.value}</h1>
            <button onClick = {this.handleClick} style = { { backgroundColor: 'blue'} }>Increment Counter </button>
        </div> );
    }
}
 
export default Counter;