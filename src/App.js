import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
    };
  }

  isEven() {
    return this.state.number % 2 === 0 ? "even" : "odd";
  }

  getClassName(val) {
    return val % 2 === 0
      ? "bg-primary text-white text-center p-2 m-1"
      : "bg-secondary text-white text-center p-2 m-1";
  }

  handleClick = () => {
    this.setState({ number: this.state.number + 1 });
  };

  render() {
    return (
      <div>
        <h4 className={this.getClassName(this.state.number)}>
          <button className="btn btn-info m-2" onClick={this.handleClick}>
            Click me!
          </button>
          Number is {this.isEven()}
        </h4>
      </div>
    );
  }
}
