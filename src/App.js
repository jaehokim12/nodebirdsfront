import React, { Component } from "react";
import {BrowserRouter as Router ,Route, Routes } from 'react-router-dom'
import Nav from "./components/nav";
import "./App.css";
import Home from "./route/home";
import Join from "./route/join";
import Login from "./route/login";
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <Nav/>
        <Routes>
          <Route exact path = "/" element = {<Home></Home>}/>
          <Route path = "/join" element = {<Join></Join>}/>
          <Route path = "login" element = {<Login></Login>}/>
        </Routes>
      </Router>
    );
  }
}

export default App;