import React, { Component } from "react";
import { NavLink } from "react-router-dom";



export default class HomeComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <>
        <h1>Home</h1>
        
        <NavLink to='/login'>Login</NavLink>
        
        </>
    );
  }
}