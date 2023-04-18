import React, { Component } from "react";
import GuestNavigation from "./navigation/GuestNavigation";

export default class CoursesComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <>
        <GuestNavigation />
        <h1>Courses...['Java', 'C++']</h1>
    </>
    );
  }
}