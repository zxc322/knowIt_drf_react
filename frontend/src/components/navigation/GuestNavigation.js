import React, { Component } from "react";
import { NavLink } from "react-router-dom";



export default class GuestNavigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <>
        <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/contacts'>Contacts</NavLink></li>
            <li><NavLink to='/courses'>Courses</NavLink></li>
            <li><NavLink to='/price'>Price</NavLink></li>
            <li><NavLink to='/login'>Login</NavLink></li>     
        </ul>
        
        </>
    );
  }
}