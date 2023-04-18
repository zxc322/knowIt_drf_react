import React, { Component } from "react";
import HomeComponent from "../HomeComponent";
import LoginComponent from "../LoginComponent";
import ContactsComponent from "../ContactsComponent";
import PriceComponent from "../PriceComponent";
import CoursesComponent from "../CoursesComponent";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class RoutesBind extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
       
        <Router>
            <Routes>
                <Route exact path='/' element={<HomeComponent />}></Route>
                <Route path='login/' element={<LoginComponent />}></Route>
                <Route path='contacts/' element={<ContactsComponent />}></Route>
                <Route path='price/' element={<PriceComponent />}></Route>
                <Route path='courses/' element={<CoursesComponent />}></Route>
            </Routes>
        </Router>
      </>
    );
  }
}

