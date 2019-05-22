import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../actions/index";

class Counter extends Component {
  increment = () => {
    this.props.increment();
  }

  decrement = () => {
    this.props.decrement();
  }

  render() {
    return (
      <div className="counter">
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span className="count">{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

// instead of calling dispatch for every action creator manually:
const mapDispatchToProps = {
  increment,
  decrement
};

//export the connected Counter
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
