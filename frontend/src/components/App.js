import React, { Component } from "react";
import { render } from "react-dom";
import RoutesBind from "./navigation/RoutesBind";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
       <RoutesBind />
      </>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);