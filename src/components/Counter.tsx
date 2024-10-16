import React, { Component } from "react";

interface CounterState {
  count: number;
}

interface CounterProps {
  data: number;
}

export default class Counter extends Component<CounterProps, CounterState> {
  constructor(props: CounterProps) {
    super(props);

    
    this.state = {
      count: 0,
    };
  }

  
  increment = () => {
    this.setState({ count: this.state.count + this.props.data });
  };

  decrement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - this.props.data });
    }
  };

  
  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div className="counter-container">
        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>

        <button onClick={this.decrement}>Decrement</button>

        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}
