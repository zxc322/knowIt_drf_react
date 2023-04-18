import React, { Component } from "react";
import authHeader from "../services/AuthHeader";
import endpoints from "../endpoints/endpoints";

export default class Test extends Component {
  constructor(props) {
    super(props);
  }

  apiFetch() {

    fetch(endpoints.courses, 
    {"headers": authHeader()} ).then(
        (resposne => resposne.json())).then(
        (data) => console.log(data)
    )
  }

  render() {
    return (
    <>
        <h1>Test...</h1>
        <button onClick={this.apiFetch}>Fetch</button>
    </>
    );
  }
}