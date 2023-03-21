import React, { Component } from "react";

const number = 5;

function isEven() {
  return number % 2 === 0 ? "even" : "odd";
}

export default class App extends Component {
  render() {
    return (
      <div>
        <h4 className="bg-primary text-white text-center p-2 m-1">
          Number of things: {isEven()}
        </h4>
      </div>
    );
  }
}
