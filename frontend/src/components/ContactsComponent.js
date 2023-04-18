import React, { Component } from "react";
import GuestNavigation from "./navigation/GuestNavigation";

export default class ContactsComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <>
        <GuestNavigation />
        <h1>Contacts...['380981237746']</h1>
    </>
    );
  }
}