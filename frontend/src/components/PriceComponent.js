import React, { Component } from "react";
import GuestNavigation from "./navigation/GuestNavigation";

export default class PriceComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <>
        <GuestNavigation />
        <h1>Prices...['123', '321']</h1>
    </>
    );
  }
}