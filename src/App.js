import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 8,
    };
  }

  isEven() {
    return this.state.number % 2 === 0 ? "even" : "odd";
  }

  render() {
    return (
      <div>
        <h4 className="bg-primary text-white text-center p-2 m-1">
          Number of things: {this.isEven()}
        </h4>
      </div>
    );
  }
}
